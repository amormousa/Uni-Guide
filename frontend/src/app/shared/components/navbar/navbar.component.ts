import { Component, OnInit, HostListener, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { RegisterButtonComponent } from '../register-button/register-button.component';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, RegisterButtonComponent, TranslocoModule, LanguageSwitcherComponent],

  template: `
    <nav class="antigravity-nav" [class.mobile-open]="isMobileMenuOpen" [class.scrolled]="isScrolled" *transloco="let t">
      <div class="nav-container">
        <div class="nav-left">
          <div class="logo" routerLink="/">
            <img [src]="isDarkMode ? 'assets/images/landing/lightlogo.png' : 'assets/images/landing/darklogo.png'" 
                 alt="FuturePath Logo" class="logo-img">
            <div class="logo-animated-text" data-text="FuturePath">
              <span class="actual-text">&nbsp;FuturePath&nbsp;</span>
              <span aria-hidden="true" class="hover-text">&nbsp;FuturePath&nbsp;</span>
            </div>
          </div>
        </div>
        
        <div class="nav-center" [class.active]="isMobileMenuOpen">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMobileMenu()">{{ t('nav.home') }}</a>
          <a routerLink="/colleges" routerLinkActive="active" (click)="closeMobileMenu()">{{ t('nav.universities') }}</a>
          <a routerLink="/quiz" routerLinkActive="active" (click)="closeMobileMenu()">{{ t('nav.quiz') }}</a>
          <a routerLink="/chat" routerLinkActive="active" (click)="closeMobileMenu()">{{ t('nav.chat') }}</a>
          <a routerLink="/pricing" routerLinkActive="active" (click)="closeMobileMenu()">{{ t('nav.pricing') }}</a>
          
          <div class="mobile-only-actions">
             <div class="theme-switch-wrapper" (click)="toggleTheme()">
                <div class="theme-switch" [class.dark]="isDarkMode">
                   <div class="switch-handle"><i class="fas fa-cog"></i></div>
                </div>
             </div>
             <app-language-switcher />
             <div class="mobile-btns" *ngIf="!authService.isAuthenticated()">
                <app-register-button [label]="t('nav.login')" (btnClick)="onLogin(); closeMobileMenu()" />
                <app-register-button [label]="t('nav.register')" (btnClick)="onRegister(); closeMobileMenu()" />
             </div>
             <div class="mobile-btns logged-in" *ngIf="authService.isAuthenticated()">
                <div class="user-greeting" style="color: var(--text-color); font-weight: 600; margin-bottom: 10px;">
                  👋 Hi, {{ authService.currentUser()?.name?.split(' ')?.[0] }}
                </div>
                <button class="logout-btn" (click)="onLogout(); closeMobileMenu()" style="background: none; border: 1px solid var(--border-color); color: var(--text-color); padding: 8px 16px; border-radius: 8px; cursor: pointer; width: 100%;">
                  Logout
                </button>
             </div>
          </div>
        </div>

        <div class="nav-right">
          <div class="theme-switch-wrapper" (click)="toggleTheme()">
             <div class="theme-switch" [class.dark]="isDarkMode">
                <div class="switch-handle"><i class="fas fa-cog"></i></div>
             </div>
          </div>
          <app-language-switcher class="desktop-only" />
          
          <div class="desktop-btns desktop-only" *ngIf="!authService.isAuthenticated()">
            <app-register-button [label]="t('nav.login')" (btnClick)="onLogin()" />
            <app-register-button [label]="t('nav.register')" (btnClick)="onRegister()" />
          </div>

          <div class="desktop-user-menu desktop-only" *ngIf="authService.isAuthenticated()" style="display: flex; align-items: center; gap: 15px;">
             <div class="user-greeting" style="color: var(--text-color); font-weight: 600;">
               👋 Welcome, {{ authService.currentUser()?.name?.split(' ')?.[0] }}
             </div>
             <button class="logout-btn" (click)="onLogout()" style="background: var(--bg-card); border: 1px solid var(--border-color); color: var(--text-color); padding: 8px 16px; border-radius: 8px; cursor: pointer; font-weight: 500; transition: all 0.3s ease;">
               Logout
             </button>
          </div>

          <button class="hamburger" (click)="toggleMobileMenu()" [class.active]="isMobileMenuOpen">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private router = inject(Router);
  public authService = inject(AuthService);
  isDarkMode = true;

  isMobileMenuOpen = false;
  isScrolled = false;

  ngOnInit() {
    this.checkScroll();
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
    }
    this.applyTheme();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  private checkScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  toggleTheme() {
    console.log('Toggling theme. Current:', this.isDarkMode);
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }

  private applyTheme() {
    const theme = this.isDarkMode ? 'dark' : 'light';
    console.log('Applying theme:', theme);
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  onLogin() {
    this.router.navigate(['/auth/login']);
  }

  onRegister() {
    this.router.navigate(['/auth/register']);
  }

  onLogout() {
    this.authService.logout();
  }
}

