import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({ template: '', standalone: true }) class TempParent {}

export const PARENT_DASHBOARD_ROUTES: Routes = [{ path: '', component: TempParent }];