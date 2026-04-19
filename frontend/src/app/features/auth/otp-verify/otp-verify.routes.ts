import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({ template: '', standalone: true }) class TempOTP {}

export const OTP_VERIFY_ROUTES: Routes = [{ path: '', component: TempOTP }];