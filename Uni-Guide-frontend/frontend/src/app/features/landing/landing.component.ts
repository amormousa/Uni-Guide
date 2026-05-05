import { Component, HostListener, ElementRef, ViewChild, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FloatingLinesComponent } from '../../shared/components/floating-lines/floating-lines.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FloatingLinesComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements AfterViewInit, OnInit {


  isDarkMode = true;
  heroMousePos = { x: 0, y: 0 };
  
  // Theme-aware line gradients
  lightLinesGradient = ['#ff00e5', '#00d2ff', '#4387f4', '#ffffff'];
  darkLinesGradient = ['#e945f5', '#4387f4', '#333333', '#111111'];
  isLoading = false;
  isMobileMenuOpen = false;

  private themeObserver?: MutationObserver;

  ngOnInit() {
    this.detectTheme();
    this.setupThemeObserver();
  }

  private detectTheme() {
    const theme = document.documentElement.getAttribute('data-theme') || localStorage.getItem('theme') || 'dark';
    this.isDarkMode = theme === 'dark';
  }

  private setupThemeObserver() {
    this.themeObserver = new MutationObserver(() => {
      this.detectTheme();
    });
    this.themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  }

  ngOnDestroy() {
    if (this.themeObserver) {
      this.themeObserver.disconnect();
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
  fullText = "Choose your future wisely";
  displayText = "";
  isTypingDone = false;
  private typingSpeed = 50;

  activeTestimonialIndex = 0;
  testimonials = [
    { quote: "The AI quiz was scarily accurate. It understood my strengths better than my guidance counselor did.", author: "Marcus Chen", role: "HS Senior", avatar: "MC", color: "#a855f7" },
    { quote: "Finding the right financial fit was my biggest worry. UniGuide made the scholarship search effortless.", author: "Elena Rodriguez", role: "MIT Sophomore", avatar: "ER", color: "#22c55e" },
    { quote: "The roadmap showed me exactly what skills I need to learn. I now know exactly where I'm headed.", author: "David Kim", role: "University of Toronto Freshmen", avatar: "DK", color: "#f59e0b" },
    { quote: "UniGuide helped me pivot from Medicine to Data Science. The personalized advice was a game changer.", author: "Sarah Johnson", role: "Stanford Graduate", avatar: "SJ", color: "#3b82f6" },
    { quote: "I was lost between multiple career choices. The personality matching narrowed it down perfectly.", author: "Omar Hassan", role: "FAST-NU Junior", avatar: "OH", color: "#ec4899" }
  ];

  // Duplicate for infinite marquee
  duplicatedTestimonials = [...this.testimonials, ...this.testimonials, ...this.testimonials];

  ngAfterViewInit() {
    setTimeout(() => {
      this.setupIntersectionObserver();
      this.startTyping();
    }, 100);
  }

  private setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.05,
      rootMargin: '0px 0px -50px 0px' 
    });

    const targets = document.querySelectorAll('.section-container, .hero-v3, .animate');
    targets.forEach(el => observer.observe(el));
  }

  setTestimonial(index: number) {
    this.activeTestimonialIndex = index;
  }  startTyping() {
    let i = 0;
    const type = () => {
      if (i <= this.fullText.length) {
        this.displayText = this.fullText.substring(0, i);
        i++;
        setTimeout(type, this.typingSpeed);
      } else {
        this.isTypingDone = true;
      }
    };
    type();
  }

  @ViewChild('liquidGlow') liquidGlow!: ElementRef;

  onHeroMouseMove(e: MouseEvent) {
    const section = e.currentTarget as HTMLElement;
    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    this.heroMousePos = { x, y };

    if (this.liquidGlow) {
      // Direct following for the glow center
      this.liquidGlow.nativeElement.style.left = `${x}px`;
      this.liquidGlow.nativeElement.style.top = `${y}px`;
    }

    // Still keep the CSS variables for any secondary effects
    section.style.setProperty('--mouse-x', `${x}px`);
    section.style.setProperty('--mouse-y', `${y}px`);
  }

  resetHeroTilt() {
    // No longer needed for liquid glow, but keeping it empty to avoid errors if called
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

}
