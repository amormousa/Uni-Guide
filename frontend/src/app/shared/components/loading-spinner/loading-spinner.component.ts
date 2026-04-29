import { Component, Input } from '@angular/core';

export type SpinnerSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [],
  template: ``,
  styles: []
})
export class LoadingSpinnerComponent {
  @Input() size: SpinnerSize = 'md';
  @Input() overlay = false;
}