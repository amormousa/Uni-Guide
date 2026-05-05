import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageSwitcherComponent } from '../../../shared/components/language-switcher/language-switcher.component';
import { ThemeToggleComponent } from '../../../shared/components/theme-toggle/theme-toggle.component';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, LanguageSwitcherComponent, ThemeToggleComponent],
  template: `
    <header class="app-header">
      <div class="brand-container">
        <div class="brand" routerLink="/">🎓 UniGuide</div>
        <nav class="main-nav">
          <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
          <a routerLink="/colleges" routerLinkActive="active">Universities</a>
          <a routerLink="/quiz" routerLinkActive="active">Quiz</a>
        </nav>
      </div>

      <div class="right-section">
        <nav class="controls">
          <app-language-switcher />
          <app-theme-toggle />
        </nav>

        <div class="user-profile" *ngIf="authService.isAuthenticated()">
          <span class="welcome">مرحباً، <strong>{{ authService.currentUserName() || authService.currentUser()?.name }}</strong></span>
          <button class="logout-btn" (click)="authService.logout()">
            <i class="fas fa-sign-out-alt"></i>
          </button>
        </div>
      </div>
    </header>
  `,
  styles: [`
    :host { display: block; }
    .app-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 2rem;
      background: var(--color-surface, #fff);
      border-bottom: 1px solid var(--color-border, #e2e8f0);
      box-shadow: 0 2px 10px rgba(0,0,0,0.03);
    }
    .brand-container {
      display: flex;
      align-items: center;
      gap: 3rem;
    }
    .brand {
      font-size: 1.25rem;
      font-weight: 800;
      color: #1a6be0;
      cursor: pointer;
    }
    .main-nav {
      display: flex;
      gap: 0.5rem;
    }
    .main-nav a {
      text-decoration: none;
      color: #64748b;
      font-weight: 600;
      font-size: 0.95rem;
      transition: all 0.2s;
      padding: 0.5rem 1rem;
      border-radius: 10px;
    }
    .main-nav a:hover {
      color: #1a6be0;
      background: #f8fafc;
    }
    .main-nav a.active {
      color: #1a6be0;
      background: #eff6ff;
    }
    .right-section {
      display: flex;
      align-items: center;
      gap: 2rem;
    }
    .controls { display: flex; gap: 0.75rem; align-items: center; }
    .user-profile {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding-left: 1.5rem;
      border-left: 1px solid #e2e8f0;
    }
    .welcome {
      font-size: 0.9rem;
      color: #475569;
    }
    .welcome strong { color: #1e293b; }
    .logout-btn {
      background: #fff1f2;
      color: #e11d48;
      border: none;
      padding: 0.5rem;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .logout-btn:hover {
      background: #ffe4e6;
      transform: translateY(-1px);
    }
  `]
})
export class AppHeaderComponent {
  authService = inject(AuthService);
}