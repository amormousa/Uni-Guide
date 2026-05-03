import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageSwitcherComponent } from '../../../shared/components/language-switcher/language-switcher.component';
import { ThemeToggleComponent } from '../../../shared/components/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, LanguageSwitcherComponent, ThemeToggleComponent],
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
      <nav class="controls">
        <app-language-switcher />
        <app-theme-toggle />
      </nav>
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
      box-shadow: 0 2px 4px rgba(0,0,0,0.02);
    }
    .brand-container {
      display: flex;
      align-items: center;
      gap: 3rem;
    }
    .brand {
      font-size: 1.25rem;
      font-weight: 800;
      color: #1e293b;
      cursor: pointer;
    }
    .main-nav {
      display: flex;
      gap: 1.5rem;
    }
    .main-nav a {
      text-decoration: none;
      color: #64748b;
      font-weight: 600;
      font-size: 0.95rem;
      transition: all 0.2s;
      padding: 0.5rem 0.75rem;
      border-radius: 8px;
    }
    .main-nav a:hover {
      color: #3b82f6;
      background: #f1f5f9;
    }
    .main-nav a.active {
      color: #3b82f6;
      background: #eff6ff;
    }
    .controls { display: flex; gap: 0.75rem; align-items: center; }
  `]
})
export class AppHeaderComponent {}