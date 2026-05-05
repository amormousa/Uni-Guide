import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="antigravity-nav" [class.mobile-open]="isMobileMenuOpen" [class.scrolled]="isScrolled">
      <div class="nav-container">
        <div class="nav-left">
          <div class="logo" routerLink="/">
            <img [src]="isDarkMode ? 'assets/images/landing/lightlogo.png' : 'assets/images/landing/darklogo.png'" 
                 alt="UniGuide Logo" class="logo-img">
            <div class="logo-animated-text" data-text="UniGuide">
              <span class="actual-text">&nbsp;UniGuide&nbsp;</span>
              <span aria-hidden="true" class="hover-text">&nbsp;UniGuide&nbsp;</span>
            </div>
          </div>
        </div>
        
        <div class="nav-center" [class.active]="isMobileMenuOpen">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMobileMenu()">Home</a>
          <a routerLink="/colleges" routerLinkActive="active" (click)="closeMobileMenu()">Universities</a>
          <a routerLink="/quiz" routerLinkActive="active" (click)="closeMobileMenu()">Quiz</a>
          <a routerLink="/chat" routerLinkActive="active" (click)="closeMobileMenu()">Chat AI</a>
          
          <div class="mobile-only-actions">
             <div class="theme-switch-wrapper" (click)="toggleTheme()">
                <div class="theme-switch" [class.dark]="isDarkMode">
                   <div class="switch-handle"><i class="fas fa-cog"></i></div>
                </div>
             </div>
             <a routerLink="/auth/register" class="download-btn" (click)="closeMobileMenu()">Register</a>
          </div>
        </div>

        <div class="nav-right">
          <div class="theme-switch-wrapper" (click)="toggleTheme()">
             <div class="theme-switch" [class.dark]="isDarkMode">
                <div class="switch-handle"><i class="fas fa-cog"></i></div>
             </div>
          </div>
          <a routerLink="/auth/register" class="download-btn desktop-only">
            <i class="fas fa-user-plus"></i> Register
          </a>
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
}
