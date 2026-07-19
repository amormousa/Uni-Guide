import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { JwtPayload } from '../auth/strategies/jwt.strategy';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('initiate')
  initiatePayment(
    @CurrentUser() user: JwtPayload,
    @Body('planName') planName: string,
    @Body('isYearly') isYearly: boolean,
  ) {
    return this.paymentsService.initiatePayment(user.sub, planName, isYearly);
  }

  @Post('verify')
  verifyPayment(
    @Body('localPaymentId') localPaymentId: string,
    @Body('myfatoorahPaymentId') myfatoorahPaymentId?: string,
  ) {
    return this.paymentsService.verifyPayment(localPaymentId, myfatoorahPaymentId);
  }

  @Post('callback')
  handleCallback(
    @Body('localPaymentId') localPaymentId: string,
    @Body('status') status: 'success' | 'failure' | 'cancelled',
  ) {
    return this.paymentsService.handleCallback(localPaymentId, status);
  }
}
