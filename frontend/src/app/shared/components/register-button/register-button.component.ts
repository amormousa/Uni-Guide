import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-register-button',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './register-button.component.html',
  styleUrls: ['./register-button.component.scss']
})
export class RegisterButtonComponent {
  @Input() label: string = 'Register';
  @Output() btnClick = new EventEmitter<void>();

  onClick() {
    this.btnClick.emit();
  }
}
