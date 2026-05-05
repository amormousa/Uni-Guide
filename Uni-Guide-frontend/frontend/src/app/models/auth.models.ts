// ── Auth Request/Response Models ──────────────────────────────────────────────

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  role: 'student' | 'parent' | 'admin';
  governorate?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  role: 'student' | 'parent' | 'admin';
  governorate?: string | null;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface OtpRequest {
  email: string;
}

export interface OtpVerifyRequest {
  email: string;
  code: string;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}
