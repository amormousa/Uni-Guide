import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="language-switcher">
      <button class="current-lang-btn" (click)="toggleDropdown()" [class.active]="showDropdown">
        <i class="fas fa-globe"></i>
        <span>{{ currentLang.toUpperCase() }}</span>
        <i class="fas fa-chevron-down arrow" [class.open]="showDropdown"></i>
      </button>

      <div class="dropdown-menu" *ngIf="showDropdown">
        <div 
          *ngFor="let lang of languages" 
          class="dropdown-item" 
          [class.selected]="lang.code === currentLang"
          (click)="selectLanguage(lang.code)"
        >
          <span class="lang-flag">{{ lang.flag }}</span>
          <span class="lang-name">{{ lang.name }}</span>
          <i class="fas fa-check check-icon" *ngIf="lang.code === currentLang"></i>
        </div>
      </div>
      
      <!-- Backdrop to close dropdown -->
      <div class="backdrop" *ngIf="showDropdown" (click)="showDropdown = false"></div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      position: relative;
    }

    .language-switcher {
      position: relative;
      z-index: 1000;
    }

    .current-lang-btn {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.5rem 1rem;
      background: rgba(var(--text-rgb, 0,0,0), 0.05);
      border: 1px solid var(--border, rgba(0,0,0,0.1));
      border-radius: 12px;
      color: var(--text-color, #1e293b);
      font-weight: 600;
      font-size: 0.85rem;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      outline: none;

      &:hover, &.active {
        background: rgba(var(--text-rgb, 0,0,0), 0.08);
        border-color: var(--primary-color, #1a6be0);
        transform: translateY(-1px);
      }

      .arrow {
        font-size: 0.7rem;
        transition: transform 0.3s ease;
        &.open {
          transform: rotate(180deg);
        }
      }

      i:first-child {
        color: var(--primary-color, #1a6be0);
      }
    }

    .dropdown-menu {
      position: absolute;
      top: calc(100% + 8px);
      right: 0;
      min-width: 160px;
      background: var(--surface, #ffffff);
      border: 1px solid var(--border, rgba(0,0,0,0.1));
      border-radius: 16px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.1);
      overflow: hidden;
      animation: slideIn 0.2s ease-out;
      z-index: 1001;
    }

    @keyframes slideIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .dropdown-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 1rem;
      cursor: pointer;
      transition: all 0.2s ease;
      color: var(--text-color, #475569);
      font-size: 0.9rem;

      &:hover {
        background: rgba(var(--primary-rgb, 26, 107, 224), 0.05);
        color: var(--primary-color, #1a6be0);
      }

      &.selected {
        background: rgba(var(--primary-rgb, 26, 107, 224), 0.1);
        color: var(--primary-color, #1a6be0);
        font-weight: 600;
      }

      .lang-flag {
        font-size: 1.1rem;
      }

      .lang-name {
        flex: 1;
      }

      .check-icon {
        font-size: 0.8rem;
      }
    }

    .backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 999;
    }

    /* RTL Support */
    :host-context([dir="rtl"]) {
      .dropdown-menu {
        right: auto;
        left: 0;
      }
    }
  `]
})
export class LanguageSwitcherComponent implements OnInit {
  private translocoService = inject(TranslocoService);
  private document = inject(DOCUMENT);
  
  showDropdown = false;
  currentLang = 'ar';
  
  languages = [
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];

  ngOnInit() {
    this.currentLang = this.translocoService.getActiveLang();
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  selectLanguage(langCode: string) {
    this.currentLang = langCode;
    this.translocoService.setActiveLang(langCode);
    this.updateLayout(langCode);
    this.showDropdown = false;
    localStorage.setItem('futurepath_lang', langCode);
  }

  private updateLayout(lang: string) {
    this.document.documentElement.lang = lang;
    this.document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Also trigger a custom event if needed or just let Transloco handle re-render
  }
}
