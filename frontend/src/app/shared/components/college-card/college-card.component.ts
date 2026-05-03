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
  template: `<!-- TODO: Card UI with image, title, location -->`,
  styles: []
})
export class CollegeCardComponent {
  @Input() college: CollegePreview | null = null;
}