import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="dashboard-container" style="padding: 2rem;">
      <h1 *ngIf="authService.currentUser() as user">
        Welcome, {{ user.name }}! 🚀
      </h1>
      <p>This is your personalized university guidance dashboard.</p>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class DashboardComponent {
  public authService = inject(AuthService);
}