import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="auth-layout-wrapper" dir="ltr">
      <router-outlet />
    </div>
  `,
  styles: [`
    .auth-layout-wrapper {
      min-height: 100vh;
      width: 100%;
      direction: ltr !important;
    }
  `]
})
export class AuthLayoutComponent {}