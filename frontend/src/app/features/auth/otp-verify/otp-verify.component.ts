import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/auth/auth.service';
import { OtpVerifyRequest } from '../../../models/auth.models';

import { BackButtonComponent } from '../../../shared/components/back-button/back-button.component';

@Component({
  selector: 'app-otp-verify',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, BackButtonComponent],

  templateUrl: './otp-verify.component.html',
  styleUrls: ['./otp-verify.component.scss'],
})
export class OtpVerifyComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  otpValues = signal<string[]>(['', '', '', '', '', '']);
  loading = signal(false);
  errorMessage = signal<string | null>(null);
  successMessage = signal<string | null>(null);

  /** Email address passed from the registration page via query param */
  emailAddress = signal<string>('');
  resendTimer = signal(0);

  constructor() {
    this.emailAddress.set(this.route.snapshot.queryParams['email'] || '');
    this.startResendTimer();
  }

  onInput(event: any, index: number) {
    const val = (event.target.value as string).replace(/\D/g, '').slice(0, 1);
    event.target.value = val;

    const arr = [...this.otpValues()];
    arr[index] = val;
    this.otpValues.set(arr);

    if (val && index < 5) {
      const nextInput = event.target.nextElementSibling;
      if (nextInput) nextInput.focus();
    }
  }

  onKeyDown(event: any, index: number) {
    if (event.key === 'Backspace' && !event.target.value && index > 0) {
      const prevInput = event.target.previousElementSibling;
      if (prevInput) prevInput.focus();
    }
  }

  onPaste(event: ClipboardEvent) {
    event.preventDefault();
    const pasted = (event.clipboardData?.getData('text') ?? '').replace(/\D/g, '').slice(0, 6);
    const arr = ['', '', '', '', '', ''];
    pasted.split('').forEach((ch, i) => { arr[i] = ch; });
    this.otpValues.set(arr);
  }

  onVerify() {
    const otp = this.otpValues().join('');

    if (otp.length !== 6) {
      this.errorMessage.set('Please enter the complete 6-digit OTP.');
      return;
    }

    this.loading.set(true);
    this.errorMessage.set(null);

    const payload: OtpVerifyRequest = {
      email: this.emailAddress(),
      code: otp,
    };

    this.authService.verifyOtp(payload).subscribe({
      next: () => {
        this.loading.set(false);
        this.successMessage.set('✓ Email verified! Redirecting to login…');
        setTimeout(() => {
          this.router.navigate(['/auth/login']);
        }, 2000);
      },
      error: (error) => {
        this.loading.set(false);
        this.errorMessage.set(
          error.error?.message || 'OTP verification failed. Please try again.',
        );
      },
    });
  }

  onResend() {
    if (this.resendTimer() > 0) return;
    this.loading.set(true);
    this.errorMessage.set(null);

    this.authService.sendOtp({ email: this.emailAddress() }).subscribe({
      next: () => {
        this.loading.set(false);
        this.successMessage.set('✓ A new OTP was sent to your email.');
        this.otpValues.set(['', '', '', '', '', '']);
        this.startResendTimer();
      },
      error: (error) => {
        this.loading.set(false);
        this.errorMessage.set(
          error.error?.message || 'Failed to resend OTP. Please try again.',
        );
      },
    });
  }

  private startResendTimer() {
    this.resendTimer.set(60);
    const timer = setInterval(() => {
      this.resendTimer.update((val) => val - 1);
      if (this.resendTimer() === 0) clearInterval(timer);
    }, 1000);
  }
}
