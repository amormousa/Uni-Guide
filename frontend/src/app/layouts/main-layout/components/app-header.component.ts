import { Component } from '@angular/core';
import { LanguageSwitcherComponent } from '../../../shared/components/language-switcher/language-switcher.component';
import { ThemeToggleComponent } from '../../../shared/components/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LanguageSwitcherComponent, ThemeToggleComponent],
  template: `
    <header class="app-header">
      <div class="brand">🎓 UniGuide</div>
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
      padding: 0.75rem 1.5rem;
      background: var(--color-surface, #fff);
      border-bottom: 1px solid var(--color-border, #e2e8f0);
    }
    .controls { display: flex; gap: 0.75rem; align-items: center; }
  `]
})
export class AppHeaderComponent {}