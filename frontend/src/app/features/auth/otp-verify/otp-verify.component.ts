import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-otp-verify',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './otp-verify.component.html',
  styleUrls: ['./otp-verify.component.scss']
})
export class OtpVerifyComponent {
  otpValues: string[] = ['', '', '', '', '', ''];

  onInput(event: any, index: number) {
    const val = event.target.value;
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
}
