import { Injectable, signal, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap, BehaviorSubject } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { ApiService } from '../services/api.service';
import {
  User,
  AuthResponse,
  RegisterRequest,
  LoginRequest,
  OtpRequest,
  OtpVerifyRequest,
  RefreshTokenRequest,
} from '../../models/auth.models';

interface DecodedToken {
  sub: string;
  email: string;
  name: string;
  role: string;
  iat: number;
  exp: number;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiService = inject(ApiService);
  private router = inject(Router);

  private readonly ACCESS_TOKEN_KEY = 'uniguide_access_token';
  private readonly REFRESH_TOKEN_KEY = 'uniguide_refresh_token';
  private readonly USER_KEY = 'uniguide_user';

  private token = signal<string | null>(this.getStoredAccessToken());
  private user = signal<User | null>(this.getStoredUser());

  isAuthenticated = computed(() => !!this.token());
  currentUser = computed(() => this.user());

  /** Decoded name directly from JWT — available immediately after login */
  currentUserName = computed(() => {
    const t = this.token();
    if (!t) return null;
    try {
      return (jwtDecode<DecodedToken>(t)).name ?? null;
    } catch {
      return null;
    }
  });

  private authState$ = new BehaviorSubject<{
    isAuthenticated: boolean;
    user: User | null;
  }>({
    isAuthenticated: this.isAuthenticated(),
    user: this.currentUser(),
  });

  constructor() {
    this.loadAuthState();
  }

  // ── Register ───────────────────────────────────────────────────────────────
  register(payload: RegisterRequest): Observable<{ message: string; userId: string }> {
    return this.apiService
      .post<{ message: string; userId: string }>('/auth/register', payload)
      .pipe(tap(() => { /* navigate to OTP page after response */ }));
  }

  // ── Login ───────────────────────────────────────────────────────────────────
  login(payload: LoginRequest): Observable<AuthResponse> {
    return this.apiService.post<AuthResponse>('/auth/login', payload).pipe(
      tap((response) => {
        this.setTokens(response.accessToken, response.refreshToken);
        this.fetchAndStoreUser();
      }),
    );
  }

  // ── Send OTP ────────────────────────────────────────────────────────────────
  sendOtp(payload: OtpRequest): Observable<{ message: string }> {
    return this.apiService.post<{ message: string }>('/auth/otp/send', payload);
  }

  // ── Verify OTP ──────────────────────────────────────────────────────────────
  verifyOtp(payload: OtpVerifyRequest): Observable<AuthResponse> {
    return this.apiService
      .post<AuthResponse>('/auth/otp/verify', payload)
      .pipe(
        tap((response) => {
          // After verification the backend returns tokens — store them
          this.setTokens(response.accessToken, response.refreshToken);
          this.fetchAndStoreUser();
        }),
      );
  }

  // ── Refresh Token ───────────────────────────────────────────────────────────
  refreshToken(): Observable<AuthResponse> {
    const refreshToken = this.getStoredRefreshToken();
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }
    return this.apiService
      .post<AuthResponse>('/auth/refresh', { refreshToken })
      .pipe(
        tap((response) => {
          this.setTokens(response.accessToken, response.refreshToken);
        }),
      );
  }

  // ── Logout ──────────────────────────────────────────────────────────────────
  logout(): void {
    this.clearTokens();
    this.user.set(null);
    this.token.set(null);
    this.authState$.next({ isAuthenticated: false, user: null });
    this.router.navigate(['/auth/login']);
  }

  // ── Getters ─────────────────────────────────────────────────────────────────
  getAccessToken(): string | null {
    return this.token() || this.getStoredAccessToken();
  }

  getAuthState$(): Observable<{ isAuthenticated: boolean; user: User | null }> {
    return this.authState$.asObservable();
  }

  // ── Private Methods ─────────────────────────────────────────────────────────

  private setTokens(accessToken: string, refreshToken: string): void {
    localStorage.setItem(this.ACCESS_TOKEN_KEY, accessToken);
    localStorage.setItem(this.REFRESH_TOKEN_KEY, refreshToken);
    this.token.set(accessToken);
  }

  private clearTokens(): void {
    localStorage.removeItem(this.ACCESS_TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }

  private getStoredAccessToken(): string | null {
    return localStorage.getItem(this.ACCESS_TOKEN_KEY);
  }

  private getStoredRefreshToken(): string | null {
    return localStorage.getItem(this.REFRESH_TOKEN_KEY);
  }

  private getStoredUser(): User | null {
    const user = localStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  private fetchAndStoreUser(): void {
    this.apiService
      .get<User>('/users/me')
      .pipe(
        tap((user) => {
          this.user.set(user);
          localStorage.setItem(this.USER_KEY, JSON.stringify(user));
          this.authState$.next({ isAuthenticated: true, user });
        }),
      )
      .subscribe({ error: (err) => console.error('Failed to fetch user:', err) });
  }

  private loadAuthState(): void {
    const token = this.getStoredAccessToken();
    const user = this.getStoredUser();
    if (token && user) {
      this.token.set(token);
      this.user.set(user);
      this.authState$.next({ isAuthenticated: true, user });
    }
  }
}
