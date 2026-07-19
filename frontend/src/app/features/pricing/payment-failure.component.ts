import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-failure',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="payment-result">
      <div class="result-card failure">
        <div class="icon-wrap">
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#ef4444" stroke-width="1.5"/>
            <path d="M8 8l8 8M16 8l-8 8" stroke="#ef4444" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <h1>Payment Failed</h1>
        <p class="sub">Something went wrong with your payment. No charges were made.</p>
        <div class="actions">
          <button class="result-btn retry" (click)="retry()">Try Again</button>
          <button class="result-btn secondary" (click)="goHome()">Back to Pricing</button>
        </div>
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
    .result-card.failure { border-color: rgba(239,68,68,0.3); }
    .icon-wrap svg { width: 80px; height: 80px; margin-bottom: 1.5rem; }
    h1 { color: #fff; font-size: 1.6rem; margin-bottom: 0.75rem; }
    .sub { color: #9ca3af; font-size: 0.95rem; margin-bottom: 2rem; }
    .actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
    .result-btn {
      border: none;
      padding: 0.75rem 1.75rem;
      border-radius: 10px;
      font-size: 0.95rem;
      cursor: pointer;
      transition: opacity 0.2s;
    }
    .result-btn.retry { background: linear-gradient(135deg, #ef4444, #dc2626); color: #fff; }
    .result-btn.secondary { background: #2a2a2a; color: #9ca3af; }
    .result-btn:hover { opacity: 0.85; }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class PaymentFailureComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Optionally log payment failure, but no DB write needed (backend handles via callback)
  }

  retry() { this.router.navigate(['/pricing']); }
  goHome() { this.router.navigate(['/pricing']); }
}
