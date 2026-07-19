import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-cancelled',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="payment-result">
      <div class="result-card cancelled">
        <div class="icon-wrap">
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#f59e0b" stroke-width="1.5"/>
            <path d="M12 7v5.5M12 16.5v.5" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <h1>Payment Cancelled</h1>
        <p class="sub">You cancelled the payment. No charges were made. You can try again anytime.</p>
        <button class="result-btn" (click)="goBack()">Back to Pricing</button>
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
    .result-card.cancelled { border-color: rgba(245,158,11,0.3); }
    .icon-wrap svg { width: 80px; height: 80px; margin-bottom: 1.5rem; }
    h1 { color: #fff; font-size: 1.6rem; margin-bottom: 0.75rem; }
    .sub { color: #9ca3af; font-size: 0.95rem; margin-bottom: 2rem; }
    .result-btn {
      background: linear-gradient(135deg, #f59e0b, #d97706);
      color: #fff;
      border: none;
      padding: 0.75rem 2rem;
      border-radius: 10px;
      font-size: 1rem;
      cursor: pointer;
      transition: opacity 0.2s;
    }
    .result-btn:hover { opacity: 0.85; }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class PaymentCancelledComponent {
  constructor(private router: Router) {}
  goBack() { this.router.navigate(['/pricing']); }
}
