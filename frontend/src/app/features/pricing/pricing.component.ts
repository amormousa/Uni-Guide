import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  isYearly = false;                              // default: Monthly
  selectedPlan: 'free' | 'basic' | 'pro' | null = null; // nothing selected by default

  // Contact Form Properties
  form = {
    name: '',
    email: '',
    message: ''
  };
  charCount = 0;
  formState: 'idle' | 'sending' | 'sent' | 'error' = 'idle';
  sendLetters = 'SendMessage'.split('');

  selectPlan(plan: 'free' | 'basic' | 'pro') {
    // toggle off if same card clicked again
    this.selectedPlan = this.selectedPlan === plan ? null : plan;
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
    formData.append('source', 'Uni-Guide Pricing Contact');

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
