import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';

interface Specialization {
  id: string;
  name: string;
}

interface UniversityInfo {
  id: string;
  name: string;
  location: string;
  website: string;
  logo: string;
}

interface CollegeDetails {
  id: string;
  name: string;
  description: string;
  type: string;
  annualFee: number;
  requirements: any;
  university: UniversityInfo;
  specializations: Specialization[];
}

@Component({
  selector: 'app-college-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './college-details.component.html',
  styleUrls: ['./college-details.component.scss']
})
export class CollegeDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private api = inject(ApiService);

  college: CollegeDetails | null = null;
  loading = true;
  error: string | null = null;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadCollegeDetails(id);
      } else {
        this.error = 'Invalid College ID';
        this.loading = false;
      }
    });
  }

  loadCollegeDetails(id: string): void {
    this.loading = true;
    this.error = null;

    this.api.get<any>(`/colleges/${id}`).subscribe({
      next: (data) => {
        if (data) {
          this.college = {
            id: data.id,
            name: data.name,
            description: data.description || '',
            type: data.type || '',
            annualFee: Number(data.annualFee) || 0,
            requirements: data.requirements,
            university: {
              id: data.university?.id || '',
              name: data.university?.name || '',
              location: data.university?.location || '',
              website: data.university?.website || '',
              logo: data.university?.logo
                ? `http://localhost:3000/uploads/universities/${data.university.logo}`
                : ''
            },
            specializations: data.specializations || []
          };
        } else {
          this.error = 'College not found';
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching college details:', err);
        this.error = 'Failed to load college details. Please try again.';
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/colleges']);
  }

  isStringRequirements(): boolean {
    return typeof this.college?.requirements === 'string';
  }

  isArrayRequirements(): boolean {
    return Array.isArray(this.college?.requirements);
  }

  isObjectRequirements(): boolean {
    return (
      typeof this.college?.requirements === 'object' &&
      this.college?.requirements !== null &&
      !this.isArrayRequirements()
    );
  }

  getObjectKeys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];
  }
}
