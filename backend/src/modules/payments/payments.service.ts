import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { Payment } from './entities/payment.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class PaymentsService {
  private readonly apiUrl: string;
  private readonly token: string;

  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    private readonly configService: ConfigService,
  ) {
    this.apiUrl = this.configService.get<string>('MYFATOORAH_API_URL', 'https://apitest.myfatoorah.com');
    this.token = this.configService.get<string>('MYFATOORAH_TOKEN', '');
  }

  // Helper: call MyFatoorah API using native fetch
  private async mfPost<T>(endpoint: string, body: object): Promise<T> {
    const res = await fetch(`${this.apiUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({})) as any;
      throw new HttpException(
        errData?.Message || `MyFatoorah API error (${res.status})`,
        HttpStatus.BAD_GATEWAY,
      );
    }

    return res.json() as Promise<T>;
  }

  async initiatePayment(userId: string, planName: string, isYearly: boolean) {
    // 1. Calculate price
    let amount = 0;
    if (planName === 'basic') {
      amount = isYearly ? 40 * 12 : 50;
    } else if (planName === 'pro') {
      amount = isYearly ? 56 * 12 : 70;
    } else {
      throw new HttpException('Invalid plan name', HttpStatus.BAD_REQUEST);
    }

    // 2. Create pending transaction in local database
    const payment = this.paymentRepository.create({
      userId,
      amount,
      currency: 'EGP',
      planName,
      status: 'pending',
    });
    await this.paymentRepository.save(payment);

    const frontendUrl = this.configService.get<string>('FRONTEND_URL', 'http://localhost:4200');

    // 3. Call MyFatoorah ExecutePayment
    try {
      const response = await this.mfPost<any>('/v2/ExecutePayment', {
        CustomerName: 'FuturePath Student',
        NotificationOption: 'LNK',
        InvoiceValue: amount,
        DisplayCurrencyIso: 'EGP',
        CallBackUrl: `${frontendUrl}/pricing/success?payment_id=${payment.id}`,
        ErrorUrl: `${frontendUrl}/pricing/failure?payment_id=${payment.id}`,
        Language: 'en',
        UserDefinedField: payment.id,
      });

      if (response.IsSuccess) {
        const mfData = response.Data;

        // Update payment with MyFatoorah InvoiceId
        payment.invoiceId = String(mfData.InvoiceId);
        await this.paymentRepository.save(payment);

        return {
          paymentUrl: mfData.PaymentURL,
          paymentId: payment.id,
        };
      } else {
        throw new HttpException(
          response.Message || 'Failed to initiate payment with MyFatoorah',
          HttpStatus.BAD_GATEWAY,
        );
      }
    } catch (error: any) {
      payment.status = 'failed';
      await this.paymentRepository.save(payment);

      if (error instanceof HttpException) throw error;
      throw new HttpException(
        error.message || 'Payment gateway initialization failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async verifyPayment(localPaymentId: string, myfatoorahPaymentId?: string) {
    const payment = await this.paymentRepository.findOne({
      where: { id: localPaymentId },
    });

    if (!payment) {
      throw new HttpException('Payment transaction not found', HttpStatus.NOT_FOUND);
    }

    if (payment.status === 'success') {
      return { status: 'success', planName: payment.planName };
    }

    // Query MyFatoorah to confirm status
    if (myfatoorahPaymentId) {
      try {
        const response = await this.mfPost<any>('/v2/GetPaymentStatus', {
          Key: myfatoorahPaymentId,
          KeyType: 'PaymentId',
        });

        if (response.IsSuccess) {
          const statusData = response.Data;
          payment.paymentId = myfatoorahPaymentId;

          if (statusData.InvoiceStatus === 'Paid') {
            payment.status = 'success';
            await this.paymentRepository.save(payment);

            // Upgrade user subscription plan
            await this.userRepository.update(payment.userId, {
              plan: payment.planName,
            });

            return { status: 'success', planName: payment.planName };
          } else if (statusData.InvoiceStatus === 'Failed') {
            payment.status = 'failed';
            await this.paymentRepository.save(payment);
            return { status: 'failed', planName: payment.planName };
          }
        }
      } catch (err) {
        console.error('MyFatoorah status check error:', err);
      }
    }

    return { status: payment.status, planName: payment.planName };
  }

  async handleCallback(localPaymentId: string, status: 'success' | 'failure' | 'cancelled') {
    const payment = await this.paymentRepository.findOne({
      where: { id: localPaymentId },
    });

    if (!payment) {
      throw new HttpException('Payment not found', HttpStatus.NOT_FOUND);
    }

    if (status === 'success') {
      payment.status = 'success';
      await this.paymentRepository.save(payment);

      // Upgrade user plan
      await this.userRepository.update(payment.userId, {
        plan: payment.planName,
      });
    } else {
      payment.status = status === 'cancelled' ? 'cancelled' : 'failed';
      await this.paymentRepository.save(payment);
    }

    return { status: payment.status, planName: payment.planName };
  }
}
