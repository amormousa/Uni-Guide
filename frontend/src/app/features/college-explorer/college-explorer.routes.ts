import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({ template: '', standalone: true })
class TempCollegeExplorer {}

export const COLLEGE_EXPLORER_ROUTES: Routes = [
  { path: '', component: TempCollegeExplorer }
];