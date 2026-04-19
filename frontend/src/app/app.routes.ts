import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

export const routes: Routes = [

  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./features/onboarding/onboarding.routes').then(m => m.ONBOARDING_ROUTES) },
      { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES) },
      { path: 'colleges', loadChildren: () => import('./features/college-explorer/college-explorer.routes').then(m => m.COLLEGE_EXPLORER_ROUTES) },
      { path: 'quiz', loadChildren: () => import('./features/quiz/quiz.routes').then(m => m.QUIZ_ROUTES) },
      { path: 'chat', loadChildren: () => import('./features/ai-chat/ai-chat.routes').then(m => m.AI_CHAT_ROUTES) },
      { path: 'parent', loadChildren: () => import('./features/parent-dashboard/parent-dashboard.routes').then(m => m.PARENT_DASHBOARD_ROUTES) },
    ],
  },

  // 🔐 مسار المصادقة (Auth Layout)
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', loadChildren: () => import('./features/auth/login/login.routes').then(m => m.LOGIN_ROUTES) },
      { path: 'register', loadChildren: () => import('./features/auth/register/register.routes').then(m => m.REGISTER_ROUTES) },
      { path: 'otp', loadChildren: () => import('./features/auth/otp-verify/otp-verify.routes').then(m => m.OTP_VERIFY_ROUTES) },
    ],
  },

  // 🔄 إعادة التوجيه الافتراضية
  { path: '**', redirectTo: '' }
];