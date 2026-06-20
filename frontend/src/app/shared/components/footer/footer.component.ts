import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { CircularGalleryComponent } from '../circular-gallery/circular-gallery.component';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, CircularGalleryComponent, TranslocoModule, LanguageSwitcherComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  teamMembers = [
    { image: 'https://picsum.photos/seed/amr/800/600?grayscale', text: 'Amr Mousa - CEO' },
    { image: 'https://picsum.photos/seed/sara/800/600?grayscale', text: 'Sara Ahmed - Lead AI' },
    { image: 'https://picsum.photos/seed/moham/800/600?grayscale', text: 'Mohamed Ali - Fullstack' },
    { image: 'https://picsum.photos/seed/fatma/800/600?grayscale', text: 'Fatma Hassan - UI/UX' },
    { image: 'https://picsum.photos/seed/yousf/800/600?grayscale', text: 'Youssef Omar - Marketing' },
    { image: 'https://picsum.photos/seed/nour/800/600?grayscale', text: 'Nour Ibrahim - Advisor' },
    { image: 'https://picsum.photos/seed/karim/800/600?grayscale', text: 'Karim Mostafa - DevOps' },
    { image: 'https://picsum.photos/seed/maria/800/600?grayscale', text: 'Mariam Mahmoud - Data' },
    { image: 'https://picsum.photos/seed/ziad/800/600?grayscale', text: 'Ziad Tariq - Mobile' },
    { image: 'https://picsum.photos/seed/laila/800/600?grayscale', text: 'Laila Hany - Success' }
  ];
}
