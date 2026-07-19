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
  teamMembers: Array<{ image: string; text: string }> = [];

  constructor() {
    this.loadAndValidateTeam();
  }

  private loadAndValidateTeam() {
    // Definitive data source matching the files in assets/images/team
    const rawTeamData = [
      { name: 'Amr Mousa', role: 'Frontend Developer', image: 'assets/images/team/amr-mousa-frontend.jpg' },
      { name: 'Karaim', role: 'Backend Developer', image: 'assets/images/team/karaim-backend.jpeg' },
      { name: 'Malak', role: 'UI/UX Designer', image: 'assets/images/team/malak-ui-ux.jpeg' },
      { name: 'Malak 1', role: 'UI/UX Designer', image: 'assets/images/team/malak1-ui-ux.jpeg' },
      { name: 'Malak 2', role: 'UI/UX Designer', image: 'assets/images/team/malak2-ui-ux.jpeg' },
      { name: 'Malak 4', role: 'UI/UX Designer', image: 'assets/images/team/malak4-ui-ux.jpeg' },
      { name: 'Malak 3', role: 'UI/UX Designer', image: 'assets/images/team/malk3-ui-ux.jpeg' },
      { name: 'Mariem', role: 'UI/UX Designer', image: 'assets/images/team/mariem-ui-ux.jpeg' },
      { name: 'Mohmed Halem', role: 'Backend Developer', image: 'assets/images/team/mohmed-halem-backend.jpeg' },
      { name: 'Mohmed Samy', role: 'Backend Developer', image: 'assets/images/team/mohmed-samy-backend.jpeg' }
    ];

    this.teamMembers = rawTeamData.map(member => ({
      image: member.image,
      text: `${member.name} — ${member.role}`
    }));
  }
}
