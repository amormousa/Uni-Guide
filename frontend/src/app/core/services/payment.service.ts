import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface InitiatePaymentResponse {
  paymentUrl: string;
  paymentId: string;
}

export interface VerifyPaymentResponse {
  status: 'pending' | 'success' | 'failed' | 'cancelled';
  planName: string;
}

@Injectable({ providedIn: 'root' })
export class PaymentService {
  private readonly apiBase = 'http://localhost:3000/api/payments';

  constructor(private http: HttpClient) {}

  initiatePayment(planName: string, isYearly: boolean): Observable<InitiatePaymentResponse> {
    return this.http.post<InitiatePaymentResponse>(
      `${this.apiBase}/initiate`,
      { planName, isYearly }
    );
  }

  verifyPayment(localPaymentId: string, myfatoorahPaymentId?: string): Observable<VerifyPaymentResponse> {
    return this.http.post<VerifyPaymentResponse>(
      `${this.apiBase}/verify`,
      { localPaymentId, myfatoorahPaymentId }
    );
  }
}
