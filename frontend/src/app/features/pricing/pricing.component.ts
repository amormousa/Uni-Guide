import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PaymentService } from '../../core/services/payment.service';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  isYearly = false;
  selectedPlan: 'free' | 'basic' | 'pro' | null = null;
  payingPlan: 'basic' | 'pro' | null = null;  // tracks which plan is being purchased

  // Contact Form Properties
  form = {
    name: '',
    email: '',
    message: ''
  };
  charCount = 0;
  formState: 'idle' | 'sending' | 'sent' | 'error' = 'idle';
  sendLetters = 'SendMessage'.split('');

  constructor(private paymentService: PaymentService) {}

  selectPlan(plan: 'free' | 'basic' | 'pro') {
    this.selectedPlan = this.selectedPlan === plan ? null : plan;
  }

  buyPlan(plan: 'basic' | 'pro', event: Event) {
    event.stopPropagation();

    if (this.payingPlan) return; // prevent double-click

    this.payingPlan = plan;

    this.paymentService.initiatePayment(plan, this.isYearly).subscribe({
      next: (res) => {
        // Redirect to MyFatoorah payment page
        window.location.href = res.paymentUrl;
      },
      error: (err) => {
        console.error('Payment initiation failed:', err);
        this.payingPlan = null;
        alert('Could not initiate payment. Please make sure you are logged in and try again.');
      }
    });
  }

  onSubmit() {
    if (!this.form.name.trim() || !this.form.email.trim() || this.form.message.trim().length < 10) {
      return;
    }

    this.formState = 'sending';

    const formData = new FormData();
    formData.append('fi-sender-fullName', this.form.name);
    formData.append('fi-sender-email', this.form.email);
    formData.append('fi-text-message', this.form.message);
    formData.append('source', 'FuturePath Pricing Contact');

    fetch('https://forminit.com/f/zafwr4ueqw2', {
      method: 'POST',
      body: formData,
      mode: 'cors',
      credentials: 'omit'
    })
      .then(res => {
        if (res.ok || res.status === 200) {
          this.formState = 'sent';
          setTimeout(() => this.resetForm(), 5000);
        } else {
          throw new Error('server error');
        }
      })
      .catch(() => {
        this.formState = 'error';
        setTimeout(() => {
          this.formState = 'idle';
        }, 5000);
      });
  }

  private resetForm() {
    this.form = {
      name: '',
      email: '',
      message: ''
    };
    this.charCount = 0;
    this.formState = 'idle';
  }
}
