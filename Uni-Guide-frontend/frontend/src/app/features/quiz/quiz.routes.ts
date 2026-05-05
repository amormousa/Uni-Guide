import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({ template: '', standalone: true }) class TempQuiz {}

export const QUIZ_ROUTES: Routes = [{ path: '', component: TempQuiz }];