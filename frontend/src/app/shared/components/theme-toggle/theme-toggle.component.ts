import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="theme-toggle-v3" (click)="toggleTheme()">
      <div class="toggle-track" [class.is-dark]="isDarkMode">
        <div class="toggle-thumb">
          <i class="fas" [class.fa-sun]="!isDarkMode" [class.fa-moon]="isDarkMode"></i>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .theme-toggle-v3 {
      width: 54px;
      height: 28px;
      background: rgba(var(--text-rgb, 0,0,0), 0.08);
      border: 1px solid var(--border, rgba(0,0,0,0.1));
      border-radius: 100px;
      padding: 3px;
      cursor: pointer;
      position: relative;
      transition: all 0.3s;
      display: flex;
      align-items: center;

      &:hover {
        background: rgba(var(--text-rgb, 0,0,0), 0.12);
        transform: translateY(-1px);
      }

      .toggle-track {
        width: 100%;
        height: 100%;
        position: relative;
        border-radius: 100px;
        
        &.is-dark {
          .toggle-thumb {
            transform: translateX(26px);
            background: #111;
            color: #fff;
          }
        }
      }

      .toggle-thumb {
        width: 20px;
        height: 20px;
        background: #fff;
        color: #f59e0b;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
    }
  `]
})
export class ThemeToggleComponent implements OnInit {
  isDarkMode = false;

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
    } else {
      // Default to dark mode if no preference is saved
      this.isDarkMode = true; 
    }
    this.applyTheme();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }

  private applyTheme() {
    const theme = this.isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
}