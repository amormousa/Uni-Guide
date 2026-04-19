import { Injectable, signal, computed } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  id: string;
  name: string;
  role: 'student' | 'parent' | 'admin';
  phone?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

  private token = signal<string | null>(null);
  private user = signal<User | null>(null);

  isAuthenticated = computed(() => !!this.token());

  // TODO: login(phone: string, otp: string): Observable<void>
  // TODO: logout(): void
  // TODO: register(): Observable<void>
  // TODO: refreshToken(): Observable<void>
}