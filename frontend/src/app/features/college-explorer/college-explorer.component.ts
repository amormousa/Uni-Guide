import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { ApiService } from '../../core/services/api.service';

interface University {
  id: string;
  name: string;
  image: string;
  description: string;
  departments: string[];
  location: string;
  mapsLink: string;
  website: string;
  applyLink: string;
  type: string;
  colleges?: any[];
}

@Component({
  selector: 'app-college-explorer',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './college-explorer.component.html',
  styleUrls: ['./college-explorer.component.scss']
})
export class CollegeExplorerComponent implements OnInit {

  private api = inject(ApiService);
  private router = inject(Router);
  private transloco = inject(TranslocoService);

  universities: University[] = [];

  selectedUniversity: University | null = null;

  selectedType = '';

  searchTerm = '';

  favorites: string[] = [];

  get filteredUniversities(): University[] {
    return this.universities;
  }

  ngOnInit(): void {
    this.loadFavorites();
    this.loadUniversities();
  }

  loadFavorites(): void {
    try {
      const favs = localStorage.getItem('uni_favorites');
      this.favorites = favs ? JSON.parse(favs) : [];
    } catch (e) {
      console.error('Error loading favorites:', e);
      this.favorites = [];
    }
  }

  isFavorite(uniId: string): boolean {
    return this.favorites.includes(uniId);
  }

  toggleFavorite(uniId: string): void {
    if (!uniId) return;
    if (this.isFavorite(uniId)) {
      this.favorites = this.favorites.filter(id => id !== uniId);
    } else {
      this.favorites.push(uniId);
    }
    try {
      localStorage.setItem('uni_favorites', JSON.stringify(this.favorites));
    } catch (e) {
      console.error('Error saving favorites:', e);
    }
  }

  private mapUniversity(u: any): University {
    return {
      id: u.id,
      name: u.name,
      image: `http://localhost:3000/uploads/universities/${u.logo}`,
      description: u.description,
      departments: u.colleges?.map((c: any) => c.name) || [],
      location: u.location,
      // Critical fix: always read mapsLink directly from the API field
      // Never fall back to a hardcoded value — each university has its own Maps Link
      mapsLink: u.mapsLink || u.location || '',
      website: u.website || '',
      applyLink: u.applyLink || u.website || '',
      type: u.type || '',
      colleges: u.colleges || []
    };
  }

  private formatUrl(url: string): string {
    if (!url) return '';
    const trimmed = url.trim();
    if (/^https?:\/\//i.test(trimmed)) {
      return trimmed;
    }
    return `https://${trimmed}`;
  }

  loadUniversities(type: string = ''): void {

    const params: any = {};

    if (type) {
      params.type = type;
    }

    this.api
      .get<any[]>('/colleges/universities', params)
      .subscribe({

        next: (data) => {

          this.universities = data.map((u: any) => this.mapUniversity(u));

          if (this.universities.length > 0) {
            this.selectedUniversity = this.universities[0];
          }

        },

        error: (err) => {
          console.error(err);
        }

      });

  }

  filterByType(type: string): void {

    this.selectedType = type;

    this.loadUniversities(type);

  }

  selectUniversity(uni: University): void {

    this.selectedUniversity = uni;

  }

  onSearch(event: any): void {

    this.searchTerm = event.target.value;

    const params: any = {};

    if (this.selectedType) {
      params.type = this.selectedType;
    }

    if (this.searchTerm.trim()) {
      params.search = this.searchTerm.trim();
    }

    this.api
      .get<any[]>('/colleges/universities', params)
      .subscribe({

        next: (data) => {

          this.universities = data.map((u: any) => this.mapUniversity(u));

        }

      });

  }

  openApplyLink(): void {
    const rawUrl = this.selectedUniversity?.applyLink || this.selectedUniversity?.website;
    if (rawUrl) {
      const url = this.formatUrl(rawUrl);
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

  openMapLink(): void {
    // Always use the mapsLink field read from the database for the selected university
    // This is unique per university and comes directly from the Excel "Maps Link" column
    const rawUrl = this.selectedUniversity?.mapsLink;
    if (rawUrl) {
      const url = this.formatUrl(rawUrl);
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

  goToCollege(collegeId: string): void {
    if (collegeId) {
      this.router.navigate(['/colleges', collegeId]);
    }
  }

}