import {
  HttpClient,
  HttpParams,
  Router
} from "./chunk-P3545PBL.js";
import {
  BehaviorSubject,
  computed,
  inject,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-WSIWHVAO.js";

// node_modules/jwt-decode/build/esm/index.js
var InvalidTokenError = class extends Error {
};
InvalidTokenError.prototype.name = "InvalidTokenError";
function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).replace(/(.)/g, (m, p) => {
    let code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = "0" + code;
    }
    return "%" + code;
  }));
}
function base64UrlDecode(str) {
  let output = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw new Error("base64 string is not of the correct length");
  }
  try {
    return b64DecodeUnicode(output);
  } catch (err) {
    return atob(output);
  }
}
function jwtDecode(token, options) {
  if (typeof token !== "string") {
    throw new InvalidTokenError("Invalid token specified: must be a string");
  }
  options || (options = {});
  const pos = options.header === true ? 0 : 1;
  const part = token.split(".")[pos];
  if (typeof part !== "string") {
    throw new InvalidTokenError(`Invalid token specified: missing part #${pos + 1}`);
  }
  let decoded;
  try {
    decoded = base64UrlDecode(part);
  } catch (e) {
    throw new InvalidTokenError(`Invalid token specified: invalid base64 for part #${pos + 1} (${e.message})`);
  }
  try {
    return JSON.parse(decoded);
  } catch (e) {
    throw new InvalidTokenError(`Invalid token specified: invalid json for part #${pos + 1} (${e.message})`);
  }
}

// src/environments/environment.ts
var environment = {
  production: false,
  apiUrl: "http://localhost:3000/api",
  port: 4200
};

// src/app/core/services/api.service.ts
var ApiService = class _ApiService {
  http = inject(HttpClient);
  baseUrl = environment.apiUrl;
  get(path, params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        httpParams = httpParams.set(key, params[key]);
      });
    }
    return this.http.get(`${this.baseUrl}${path}`, { params: httpParams });
  }
  post(path, body) {
    return this.http.post(`${this.baseUrl}${path}`, body);
  }
  put(path, body) {
    return this.http.put(`${this.baseUrl}${path}`, body);
  }
  patch(path, body) {
    return this.http.patch(`${this.baseUrl}${path}`, body);
  }
  delete(path) {
    return this.http.delete(`${this.baseUrl}${path}`);
  }
  static \u0275fac = function ApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApiService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
};

// src/app/core/auth/auth.service.ts
var AuthService = class _AuthService {
  apiService = inject(ApiService);
  router = inject(Router);
  ACCESS_TOKEN_KEY = "uniguide_access_token";
  REFRESH_TOKEN_KEY = "uniguide_refresh_token";
  USER_KEY = "uniguide_user";
  token = signal(this.getStoredAccessToken());
  user = signal(this.getStoredUser());
  isAuthenticated = computed(() => !!this.token());
  currentUser = computed(() => this.user());
  /** Decoded name directly from JWT — available immediately after login */
  currentUserName = computed(() => {
    const t = this.token();
    if (!t)
      return null;
    try {
      return jwtDecode(t).name ?? null;
    } catch {
      return null;
    }
  });
  authState$ = new BehaviorSubject({
    isAuthenticated: this.isAuthenticated(),
    user: this.currentUser()
  });
  constructor() {
    this.loadAuthState();
  }
  // ── Register ───────────────────────────────────────────────────────────────
  register(payload) {
    return this.apiService.post("/auth/register", payload).pipe(tap(() => {
    }));
  }
  // ── Login ───────────────────────────────────────────────────────────────────
  login(payload) {
    return this.apiService.post("/auth/login", payload).pipe(tap((response) => {
      this.setTokens(response.accessToken, response.refreshToken);
      this.fetchAndStoreUser();
    }));
  }
  // ── Send OTP ────────────────────────────────────────────────────────────────
  sendOtp(payload) {
    return this.apiService.post("/auth/otp/send", payload);
  }
  // ── Verify OTP ──────────────────────────────────────────────────────────────
  verifyOtp(payload) {
    return this.apiService.post("/auth/otp/verify", payload).pipe(tap((response) => {
      this.setTokens(response.accessToken, response.refreshToken);
      this.fetchAndStoreUser();
    }));
  }
  // ── Refresh Token ───────────────────────────────────────────────────────────
  refreshToken() {
    const refreshToken = this.getStoredRefreshToken();
    if (!refreshToken) {
      throw new Error("No refresh token available");
    }
    return this.apiService.post("/auth/refresh", { refreshToken }).pipe(tap((response) => {
      this.setTokens(response.accessToken, response.refreshToken);
    }));
  }
  // ── Logout ──────────────────────────────────────────────────────────────────
  logout() {
    this.clearTokens();
    this.user.set(null);
    this.token.set(null);
    this.authState$.next({ isAuthenticated: false, user: null });
    this.router.navigate(["/auth/login"]);
  }
  // ── Getters ─────────────────────────────────────────────────────────────────
  getAccessToken() {
    return this.token() || this.getStoredAccessToken();
  }
  getAuthState$() {
    return this.authState$.asObservable();
  }
  // ── Private Methods ─────────────────────────────────────────────────────────
  setTokens(accessToken, refreshToken) {
    localStorage.setItem(this.ACCESS_TOKEN_KEY, accessToken);
    localStorage.setItem(this.REFRESH_TOKEN_KEY, refreshToken);
    this.token.set(accessToken);
  }
  clearTokens() {
    localStorage.removeItem(this.ACCESS_TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }
  getStoredAccessToken() {
    return localStorage.getItem(this.ACCESS_TOKEN_KEY);
  }
  getStoredRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN_KEY);
  }
  getStoredUser() {
    const user = localStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  }
  fetchAndStoreUser() {
    this.apiService.get("/users/me").pipe(tap((user) => {
      this.user.set(user);
      localStorage.setItem(this.USER_KEY, JSON.stringify(user));
      this.authState$.next({ isAuthenticated: true, user });
    })).subscribe({ error: (err) => console.error("Failed to fetch user:", err) });
  }
  loadAuthState() {
    const token = this.getStoredAccessToken();
    const user = this.getStoredUser();
    if (token && user) {
      this.token.set(token);
      this.user.set(user);
      this.authState$.next({ isAuthenticated: true, user });
    }
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};

export {
  AuthService
};
//# sourceMappingURL=chunk-WVGMD5GH.js.map
