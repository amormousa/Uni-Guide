import { Routes } from '@angular/router';
import { CollegeExplorerComponent } from './college-explorer.component';

export const COLLEGE_EXPLORER_ROUTES: Routes = [
  { path: '', component: CollegeExplorerComponent },
  { path: ':id', loadComponent: () => import('./college-details/college-details.component').then(m => m.CollegeDetailsComponent) }
];