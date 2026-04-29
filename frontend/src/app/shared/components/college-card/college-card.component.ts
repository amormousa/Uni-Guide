import { Component, Input } from '@angular/core';

export interface CollegePreview {
  id: string;
  nameAr: string;
  nameEn: string;
  governorate: string;
  logoUrl?: string;
}

@Component({
  selector: 'app-college-card',
  standalone: true,
  imports: [],
  template: ``,
  styles: []
})
export class CollegeCardComponent {
  @Input() college: CollegePreview | null = null;
}