
import { Component, HostListener, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements AfterViewInit, OnInit {


  isDarkMode = false;
  isLoading = false;
  isMobileMenuOpen = false;

  ngOnInit() {
    // Theme is now managed globally by NavbarComponent
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
    { author: 'Sarah Jenkins', role: 'Stanford Freshman', quote: 'UniGuide didn\'t just suggest a college; it revealed a career path I never knew I was perfect for.', avatar: 'SJ', color: '#4387f4' },
    { author: 'Marcus Chen', role: 'HS Senior', quote: 'The AI quiz was scarily accurate. It understood my strengths better than my guidance counselor did.', avatar: 'MC', color: '#a855f7' },
    { author: 'Elena Rodriguez', role: 'MIT Sophomore', quote: 'Finding the right financial fit was my biggest worry. UniGuide made the scholarship search effortless.', avatar: 'ER', color: '#22c55e' },
    { author: 'David Kim', role: 'UC Berkeley Student', quote: 'The roadmaps are a game changer. I know exactly what steps to take for my future in AI.', avatar: 'DK', color: '#f59e0b' },
    { author: 'Aisha Omar', role: 'Oxford Applicant', quote: 'A premium experience that takes the stress out of university applications. Highly recommended!', avatar: 'AO', color: '#ec4899' }
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      this.setupIntersectionObserver();
      this.startTyping();
      this.startTestimonialSlider();
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

  startTestimonialSlider() {
    setInterval(() => {
      this.activeTestimonialIndex = (this.activeTestimonialIndex + 1) % this.testimonials.length;
    }, 5000);
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
