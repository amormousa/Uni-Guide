
import { Component, HostListener, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements AfterViewInit {
  @ViewChild('heroVisual') heroVisual!: ElementRef;

  isDarkMode = false;
  isLoading = false;
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
  fullText = "Experience liftoff with the next-gen agent platform";
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
  }

  startTyping() {
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

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    if (!this.heroVisual) return;
    
    const x = e.clientX;
    const y = e.clientY;
    const rect = this.heroVisual.nativeElement.getBoundingClientRect();
    const visualCenterX = rect.left + rect.width / 2;
    const visualCenterY = rect.top + rect.height / 2;
    const deltaX = (x - visualCenterX) / 50;
    const deltaY = (y - visualCenterY) / 50;
    
    this.heroVisual.nativeElement.style.transform = `perspective(1000px) rotateX(${10 - deltaY}deg) rotateY(${deltaX}deg)`;
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');
  }

}
