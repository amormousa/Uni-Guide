import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TranslocoDirective } from '@jsverse/transloco';
import { AuthService } from '../../../core/auth/auth.service';
import { RegisterRequest } from '../../../models/auth.models';
import { BackButtonComponent } from '../../../shared/components/back-button/back-button.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, TranslocoDirective, BackButtonComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  private authService = inject(AuthService);
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);

  form: FormGroup;
  loading = signal(false);
  errorMessage = signal<string | null>(null);
  successMessage = signal<string | null>(null);

  constructor() {
    this.form = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
        role: ['student', Validators.required],
        governorate: [''],
      },
      { validators: this.passwordMatchValidator },
    );
  }

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password !== confirmPassword ? { passwordMismatch: true } : null;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.errorMessage.set('Please fill in all required fields correctly.');
      return;
    }

    this.loading.set(true);
    this.errorMessage.set(null);

    const payload: RegisterRequest = {
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password,
      role: this.form.value.role,
      governorate: this.form.value.governorate || undefined,
    };

    this.authService.register(payload).subscribe({
      next: (response) => {
        this.successMessage.set(response.message);
        this.loading.set(false);
        // Navigate to OTP verification page, pass email as query param
        setTimeout(() => {
          this.router.navigate(['/auth/otp'], {
            queryParams: { email: this.form.value.email },
          });
        }, 1500);
      },
      error: (error) => {
        this.loading.set(false);
        this.errorMessage.set(
          error.error?.message || 'Registration failed. Please try again.',
        );
      },
    });
  }

  getLabelChars(text: string) {
    return text.split('');
  }

  get passwordMismatch(): boolean {
    return (
      (this.form.hasError('passwordMismatch') &&
        this.form.get('confirmPassword')?.touched) ??
      false
    );
  }
}
