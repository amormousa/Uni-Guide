import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PaymentService, VerifyPaymentResponse } from '../../core/services/payment.service';

@Component({
  selector: 'app-payment-success',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="payment-result">
      <div class="result-card success" *ngIf="!loading">
        <div class="icon-wrap">
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#22c55e" stroke-width="1.5"/>
            <path d="M7.5 12l3 3 6-6" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h1>Payment Successful!</h1>
        <p class="sub">Your <strong>{{ planName }}</strong> plan is now active. Enjoy all features!</p>
        <button class="result-btn" (click)="goHome()">Go to Dashboard</button>
      </div>
      <div class="loading-wrap" *ngIf="loading">
        <div class="spinner"></div>
        <p>Verifying your payment…</p>
      </div>
    </div>
  `,
  styles: [`
    .payment-result {
      min-height: 80vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }
    .result-card {
      background: #1b1b1b;
      border: 1px solid #2a2a2a;
      border-radius: 20px;
      padding: 3rem 2.5rem;
      text-align: center;
      max-width: 440px;
      width: 100%;
      animation: fadeUp 0.5s ease;
    }
    .result-card.success { border-color: rgba(34,197,94,0.3); }
    .icon-wrap svg { width: 80px; height: 80px; margin-bottom: 1.5rem; }
    h1 { color: #fff; font-size: 1.6rem; margin-bottom: 0.75rem; }
    .sub { color: #9ca3af; font-size: 0.95rem; margin-bottom: 2rem; }
    .result-btn {
      background: linear-gradient(135deg, #22c55e, #16a34a);
      color: #fff;
      border: none;
      padding: 0.75rem 2rem;
      border-radius: 10px;
      font-size: 1rem;
      cursor: pointer;
      transition: opacity 0.2s;
    }
    .result-btn:hover { opacity: 0.85; }
    .loading-wrap { text-align: center; color: #9ca3af; }
    .spinner {
      width: 40px; height: 40px;
      border: 3px solid #333;
      border-top-color: #22c55e;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      margin: 0 auto 1rem;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class PaymentSuccessComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private paymentService = inject(PaymentService);

  loading = true;
  planName = '';

  ngOnInit() {
    const localPaymentId = this.route.snapshot.queryParamMap.get('payment_id') ?? '';
    const myfatoorahPaymentId = this.route.snapshot.queryParamMap.get('PaymentId') ?? undefined;

    if (!localPaymentId) {
      this.router.navigate(['/pricing']);
      return;
    }

    this.paymentService.verifyPayment(localPaymentId, myfatoorahPaymentId).subscribe({
      next: (res: VerifyPaymentResponse) => {
        this.planName = res.planName;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.planName = 'your selected';
      }
    });
  }

  goHome() {
    this.router.navigate(['/dashboard']);
  }
}
