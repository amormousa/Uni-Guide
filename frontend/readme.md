<div align="center">

# 🎓 FuturePath — Frontend

**AI-Powered University Guidance Platform**

[![Angular](https://img.shields.io/badge/Angular-18.2-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![SCSS](https://img.shields.io/badge/SCSS-BEM-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Transloco](https://img.shields.io/badge/i18n-AR_·_EN_·_FR-4caf50?style=for-the-badge)](https://jsverse.github.io/transloco/)
[![Three.js](https://img.shields.io/badge/Three.js-0.184-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![JWT](https://img.shields.io/badge/Auth-JWT_+_OTP-F7931E?style=for-the-badge&logo=jsonwebtokens&logoColor=white)]()

<br/>

> A premium, production-grade Angular 18 SPA that helps students discover universities,
> take AI-powered career quizzes, and receive personalized academic guidance — with full
> RTL/LTR support and a stunning dark/light design system.

</div>

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Implemented Features](#-implemented-features)
- [Authentication System](#-authentication-system)
- [Landing Page & UI/UX](#-landing-page--uiux)
- [Internationalization (i18n)](#-internationalization-i18n)
- [Theming & Design System](#-theming--design-system)
- [Shared Component Library](#-shared-component-library)
- [API Integration Layer](#-api-integration-layer)
- [State Management](#-state-management)
- [Getting Started](#-getting-started)
- [Scripts Reference](#-scripts-reference)
- [Environment Configuration](#-environment-configuration)
- [Roadmap](#-roadmap)

---

## 🌟 Overview

**Uni-Guide** is a next-generation university counseling platform designed to solve the biggest problem facing Egyptian high school students — choosing the right career path. The frontend delivers:

- **Immersive Landing Page** — Hero with typewriter animation, 3D WebGL shader backgrounds (Three.js), interactive accordion cards, testimonial marquees, and liquid glow mouse tracking.
- **Full Auth Flow** — Email-based Registration → 6-digit OTP Verification → JWT Login with automatic token refresh.
- **Trilingual Experience** — Arabic (RTL), English (LTR), and French (LTR) with runtime switching via Transloco.
- **Dark/Light Theming** — CSS custom properties driven, persisted in localStorage, with smooth transitions.
- **Multi-Role Architecture** — Student, Parent, and Admin role routing with dedicated layouts.

---

## 🛠️ Tech Stack

| Layer | Technology | Version |
|:------|:-----------|:--------|
| **Framework** | Angular (Standalone Components, Signals API) | `18.2` |
| **Language** | TypeScript (Strict Mode) | `5.5` |
| **Styling** | SCSS with BEM + CSS Custom Properties | — |
| **i18n** | `@jsverse/transloco` | `8.3+` |
| **3D/WebGL** | Three.js (Custom GLSL Shaders) | `0.184` |
| **Auth** | `jwt-decode` for JWT parsing | `4.0` |
| **HTTP** | Angular `HttpClient` + Functional Interceptors | `18.2` |
| **Reactive** | RxJS | `7.8` |
| **UI Components** | Angular Material | `18.2` |
| **Testing** | Jest | `29.7` |
| **Build** | Angular CLI + `@angular-devkit/build-angular` | `18.2` |

---

## 🏗️ Architecture

The project follows a **Feature-Driven Standalone Architecture** with clear separation of concerns:

```
┌─────────────────────────────────────────────────────┐
│                    app.config.ts                     │
│         (Providers, Interceptors, Transloco)         │
├─────────────────────────────────────────────────────┤
│                    app.routes.ts                      │
│        (Multi-Layout Lazy-Loaded Routing)            │
├──────────┬──────────┬────────────┬───────────────────┤
│  Layouts │ Features │   Shared   │       Core        │
│──────────│──────────│────────────│───────────────────│
│ Main     │ Landing  │ Components │ AuthService       │
│ Auth     │ Auth/*   │ Directives │ ApiService        │
│ Admin    │ Dashboard│ Pipes      │ JwtInterceptor    │
│          │ Quiz     │            │ LangInterceptor   │
│          │ AI Chat  │            │ ErrorInterceptor  │
│          │ Colleges │            │ AuthGuard         │
│          │ Onboard  │            │                   │
│          │ Parent   │            │                   │
└──────────┴──────────┴────────────┴───────────────────┘
```

---

## 📁 Project Structure

```text
frontend/
├── src/
│   ├── app/
│   │   ├── core/                          # Singleton services & guards
│   │   │   ├── auth/
│   │   │   │   ├── auth.service.ts        # ✅ Full JWT auth (login, register, OTP, refresh)
│   │   │   │   ├── auth.guard.ts          # ✅ authGuard + noAuthGuard (CanActivateFn)
│   │   │   │   └── jwt.interceptor.ts     # ✅ Auto Bearer injection + 401 refresh logic
│   │   │   ├── interceptors/
│   │   │   │   ├── lang.interceptor.ts    # Accept-Language header injection
│   │   │   │   └── error.interceptor.ts   # ✅ Global HTTP error handler (console + rethrow)
│   │   │   ├── services/
│   │   │   │   └── api.service.ts         # ✅ Centralized REST client (GET/POST/PUT/PATCH/DELETE)
│   │   │   └── layout/                    # RTL direction service
│   │   │
│   │   ├── features/                      # Lazy-loaded domain modules
│   │   │   ├── landing/                   # ✅ Premium landing page (hero, sections, footer)
│   │   │   ├── auth/
│   │   │   │   ├── login/                 # ✅ Email + Password login form
│   │   │   │   ├── register/              # ✅ Registration with role selection + governorate
│   │   │   │   ├── otp-verify/            # ✅ 6-digit OTP input with auto-focus & paste
│   │   │   │   └── forgot-password/       # 🏗️ Scaffolded
│   │   │   ├── dashboard/                 # 🏗️ Student dashboard (scaffolded)
│   │   │   ├── quiz/                      # 🏗️ Career matching quiz
│   │   │   ├── ai-chat/                   # 🏗️ AI counseling chat
│   │   │   ├── college-explorer/          # 🏗️ University search & compare
│   │   │   ├── onboarding/               # 🏗️ Interest mapping walkthrough
│   │   │   └── parent-dashboard/          # 🏗️ Parent monitoring dashboard
│   │   │
│   │   ├── shared/                        # Reusable UI library
│   │   │   ├── components/
│   │   │   │   ├── navbar/                # ✅ Glassmorphism navbar with scroll detection
│   │   │   │   ├── language-switcher/     # ✅ AR/EN/FR dropdown with flags
│   │   │   │   ├── register-button/       # ✅ Animated CTA button
│   │   │   │   ├── floating-lines/        # ✅ Three.js WebGL shader background
│   │   │   │   ├── back-button/           # ✅ Navigation back button
│   │   │   │   ├── theme-toggle/          # ✅ Dark/Light mode switch
│   │   │   │   ├── college-card/          # UI card for university listing
│   │   │   │   ├── loading-spinner/       # Loading state indicator
│   │   │   │   └── skeleton-loader/       # Content placeholder shimmer
│   │   │   ├── directives/
│   │   │   │   ├── auto-dir.directive.ts  # Auto RTL/LTR direction
│   │   │   │   ├── focus-trap.directive.ts# Accessibility focus trap
│   │   │   │   └── lazy-image.directive.ts# Lazy-load images on scroll
│   │   │   └── pipes/
│   │   │       ├── arabic-number.pipe.ts  # ١٢٣ → Arabic numeral conversion
│   │   │       ├── safe-html.pipe.ts      # Sanitized HTML binding
│   │   │       └── truncate.pipe.ts       # Text truncation with ellipsis
│   │   │
│   │   ├── layouts/                       # Page shell wrappers
│   │   │   ├── main-layout/              # ✅ Header + content + footer
│   │   │   ├── auth-layout/              # ✅ Centered auth card layout
│   │   │   └── admin-layout/             # 🏗️ Admin panel shell
│   │   │
│   │   ├── store/                         # State management
│   │   │   ├── auth/                      # Auth state (session, tokens)
│   │   │   └── ui/                        # UI state (theme, sidebar, loading)
│   │   │
│   │   ├── models/                        # TypeScript interfaces
│   │   │   ├── auth.models.ts             # ✅ RegisterRequest, LoginRequest, AuthResponse, User, OTP
│   │   │   ├── college.model.ts           # University data models
│   │   │   ├── quiz.model.ts              # Quiz flow models
│   │   │   ├── user.model.ts              # Extended user profile
│   │   │   └── i18n.model.ts              # Locale types
│   │   │
│   │   ├── i18n/                          # Transloco infrastructure
│   │   │   ├── loaders/                   # ✅ TranslationLoader (HTTP-based)
│   │   │   ├── directives/               # i18n utility directives
│   │   │   ├── pipes/                    # i18n utility pipes
│   │   │   └── services/                 # Translation helpers
│   │   │
│   │   ├── themes/                        # Design system
│   │   │   ├── tokens/                    # ✅ Color, spacing, typography tokens
│   │   │   ├── material/                  # Angular Material theme overrides
│   │   │   └── services/                  # ThemeService for runtime switching
│   │   │
│   │   ├── app.component.ts              # Root component
│   │   ├── app.config.ts                 # ✅ Application providers & config
│   │   └── app.routes.ts                 # ✅ Multi-layout route definitions
│   │
│   ├── assets/
│   │   ├── i18n/                          # ✅ Translation files
│   │   │   ├── ar.json                    # Arabic translations
│   │   │   ├── en.json                    # English translations
│   │   │   └── fr.json                    # French translations
│   │   └── images/
│   │       └── landing/                   # Landing page assets (logos, hero, feature images)
│   │
│   └── environments/
│       ├── environment.ts                 # ✅ Dev  → http://localhost:3000/api
│       ├── environment.staging.ts         # ✅ Stag → https://staging-api.futurepath.com/api
│       └── environment.prod.ts            # ✅ Prod → https://api.futurepath.com/api
│
├── package.json
├── tsconfig.json
└── angular.json
```

---

## ✅ Implemented Features

### Status Legend
| Icon | Meaning |
|:----:|:--------|
| ✅ | Fully implemented & functional |
| 🏗️ | Scaffolded / in progress |

### Feature Matrix

| Feature | Status | Details |
|:--------|:------:|:--------|
| **Angular 18 Standalone** | ✅ | All components use standalone architecture with Signals API |
| **Multi-Layout Routing** | ✅ | `MainLayout` · `AuthLayout` · `AdminLayout` with lazy-loaded child routes |
| **JWT Authentication** | ✅ | Full service: register → OTP verify → login → token refresh → logout |
| **Email OTP Verification** | ✅ | 6-digit code input with auto-focus, paste support, 60s resend timer |
| **JWT Interceptor** | ✅ | Auto `Bearer` header injection + silent 401 refresh with request queue |
| **Route Guards** | ✅ | `authGuard` (protected routes) + `noAuthGuard` (prevent logged-in access to auth pages) |
| **Landing Page** | ✅ | Premium hero with typewriter animation, accordion cards, testimonial marquee, CTA sections, footer |
| **Three.js WebGL Background** | ✅ | Custom GLSL shader floating lines with interactive mouse parallax & bend effects |
| **Dark / Light Theme** | ✅ | CSS custom properties with `data-theme` attribute, persisted in localStorage |
| **Trilingual i18n** | ✅ | Arabic (RTL) · English (LTR) · French (LTR) with dynamic runtime switching |
| **Language Switcher** | ✅ | Dropdown with flags (🇸🇦 🇺🇸 🇫🇷), auto-updates `dir` attribute and Transloco |
| **Responsive Navbar** | ✅ | Glassmorphism style, scroll-aware, hamburger mobile menu, theme/language controls |
| **Animated CTA Buttons** | ✅ | Reusable `RegisterButtonComponent` with hover animations |
| **API Service Layer** | ✅ | Centralized `ApiService` with typed `GET/POST/PUT/PATCH/DELETE` methods |
| **Error Interceptor** | ✅ | Global HTTP error catching with console logging |
| **Reactive Forms** | ✅ | Auth forms with `Validators`, password matching, role selection |
| **Environment Config** | ✅ | Dev / Staging / Production API URLs configured |
| **Multi-Role Support** | ✅ | `student` · `parent` · `admin` roles in registration + JWT payload |
| **Dashboard** | 🏗️ | Route defined, component scaffolded |
| **Quiz System** | 🏗️ | Route defined, module scaffolded |
| **AI Chat** | 🏗️ | Route defined, module scaffolded |
| **College Explorer** | 🏗️ | Route defined, module scaffolded |
| **Onboarding** | 🏗️ | Route defined, module scaffolded |
| **Parent Dashboard** | 🏗️ | Route defined, module scaffolded |

---

## 🔐 Authentication System

### Auth Flow

```
┌──────────┐     POST /auth/register      ┌──────────┐
│          │ ──────────────────────────▶   │          │
│ Register │     { name, email,            │ Backend  │
│   Form   │       password, role }        │          │
│          │ ◀──────────────────────────   │          │
└──────┬───┘     { message, userId }       └──────────┘
       │
       ▼
┌──────────┐     POST /auth/otp/verify     ┌──────────┐
│   OTP    │ ──────────────────────────▶   │          │
│  Verify  │     { email, code }           │ Backend  │
│  (6-dig) │ ◀──────────────────────────   │          │
└──────┬───┘     { accessToken,            └──────────┘
       │           refreshToken }
       ▼
┌──────────┐     GET /users/me             ┌──────────┐
│Dashboard │ ──────────────────────────▶   │          │
│          │     Authorization: Bearer     │ Backend  │
│          │ ◀──────────────────────────   │          │
└──────────┘     { id, name, email, ... }  └──────────┘
```

### Key Implementation Details

| Component | File | Description |
|:----------|:-----|:------------|
| **AuthService** | `core/auth/auth.service.ts` | Full auth lifecycle: `register()`, `login()`, `sendOtp()`, `verifyOtp()`, `refreshToken()`, `logout()`. Uses Angular Signals for reactive state. |
| **JwtInterceptor** | `core/auth/jwt.interceptor.ts` | Class-based interceptor. Injects `Bearer` token on all requests except `/auth/login` and `/auth/register`. Handles 401 errors with automatic silent refresh + request queue. |
| **AuthGuard** | `core/auth/auth.guard.ts` | Functional `CanActivateFn` guards. `authGuard` redirects unauthenticated users to login. `noAuthGuard` redirects authenticated users to dashboard. |
| **Auth Models** | `models/auth.models.ts` | TypeScript interfaces: `RegisterRequest`, `LoginRequest`, `AuthResponse`, `User`, `OtpRequest`, `OtpVerifyRequest`, `RefreshTokenRequest`. |

### JWT Token Structure (Decoded)

The frontend decodes the access token using `jwt-decode` to extract the user's name for the navbar:

```typescript
interface DecodedToken {
  sub: string;      // User ID (UUID)
  email: string;    // User's email
  name: string;     // Display name (shown in navbar)
  role: string;     // "student" | "parent" | "admin"
  iat: number;      // Issued at (Unix timestamp)
  exp: number;      // Expiration (Unix timestamp)
}
```

### localStorage Keys

| Key | Purpose |
|:----|:--------|
| `futurepath_access_token` | JWT Access Token for API requests |
| `futurepath_refresh_token` | Refresh Token for silent renewal |
| `futurepath_user` | Cached User object (`JSON.stringify`) |
| `futurepath_lang` | Active language (`ar` / `en` / `fr`) |
| `theme` | Active theme (`dark` / `light`) |

---

## 🎨 Landing Page & UI/UX

The landing page is a fully premium, production-ready experience:

### Sections

| Section | Description |
|:--------|:------------|
| **Navbar** | Glassmorphism floating navbar with scroll detection, animated logo hover effect, hamburger mobile menu, theme toggle, language switcher, and login/register CTAs |
| **Hero** | Typewriter animation (translatable), liquid glow mouse cursor effect, gradient background, and floating WebGL shader lines powered by Three.js |
| **Problem Section** | Interactive expandable accordion cards with 3D-inspired hover effects showcasing student struggles |
| **Features Showcase** | Visual cards highlighting AI Quiz, College Explorer, and Chat Advisor features with AI-generated images |
| **Statistics Counter** | Animated number counters for platform stats |
| **Testimonials** | Infinite marquee carousel with student quotes and avatars |
| **CTA Section** | Final call-to-action driving registration |
| **Footer** | Multi-column footer with links, social media, and branding |

### Visual Effects

- **Three.js Floating Lines** — Custom GLSL vertex/fragment shaders rendering animated wave lines with configurable gradient, parallax, mouse interaction, and bend effects
- **Liquid Glow Cursor** — Mouse-following glow effect on the hero section using CSS transforms
- **Intersection Observer** — Scroll-triggered fade-in animations for sections
- **Theme-Aware Gradients** — Line colors dynamically switch between light and dark palettes

---

## 🌍 Internationalization (i18n)

| Aspect | Implementation |
|:-------|:---------------|
| **Engine** | `@jsverse/transloco` v8.3+ |
| **Languages** | Arabic (`ar`) · English (`en`) · French (`fr`) |
| **Translation Files** | `src/assets/i18n/{ar,en,fr}.json` |
| **Default Language** | Arabic (`ar`) — stored in `localStorage` |
| **RTL/LTR** | Auto-switched via `document.documentElement.dir` on language change |
| **Initialization** | `APP_INITIALIZER` in `app.config.ts` sets `lang` and `dir` attributes before first paint |
| **Runtime Switching** | `LanguageSwitcherComponent` updates Transloco, `localStorage`, and DOM direction instantly |
| **Dynamic Content** | Hero typewriter text re-animates on language change via `langChanges$` subscription |

---

## 🎭 Theming & Design System

### Approach

The application uses a **CSS Custom Properties** theming system driven by the `data-theme` attribute on `<html>` and `<body>`:

```scss
// Applied automatically based on data-theme="dark" | "light"
:root[data-theme="dark"] {
  --bg-color: #0a0a0f;
  --text-color: #e2e8f0;
  --primary-color: #4387f4;
  --surface: #1a1a2e;
  // ...
}
```

### Design Tokens

| Token File | Contents |
|:-----------|:---------|
| `tokens/colors.tokens.ts` | Primary, secondary, accent, semantic color palette |
| `tokens/spacing.tokens.ts` | Consistent spacing scale |
| `tokens/typography.tokens.ts` | Font families, sizes, weights |

### Theme Toggle

- Persisted in `localStorage` under key `theme`
- Applied on app initialization via `APP_INITIALIZER`
- Navbar component includes a visual toggle switch with gear icon animation

---

## 🧩 Shared Component Library

| Component | Selector | Description |
|:----------|:---------|:------------|
| **Navbar** | `app-navbar` | Glassmorphism floating nav with scroll detection, responsive hamburger menu, theme toggle, language switcher, login/register buttons |
| **Language Switcher** | `app-language-switcher` | Dropdown with flag emoji + language names, backdrop click-outside closing, RTL-aware positioning |
| **Register Button** | `app-register-button` | Animated CTA button with `@Input() label` and `@Output() btnClick` |
| **Floating Lines** | `app-floating-lines` | Three.js WebGL shader canvas — configurable waves, gradients, parallax, mouse interaction, blend modes |
| **Back Button** | `app-back-button` | Navigation back button used in auth pages |
| **Theme Toggle** | `app-theme-toggle` | Dark/Light switch component |
| **Skeleton Loader** | `app-skeleton-loader` | Content placeholder with shimmer animation |
| **Loading Spinner** | `app-loading-spinner` | Circular loading indicator |
| **College Card** | `app-college-card` | University listing card component |

### Directives

| Directive | Description |
|:----------|:------------|
| `AutoDirDirective` | Auto-detects text direction (RTL/LTR) |
| `FocusTrapDirective` | Traps keyboard focus within modal/dialog |
| `LazyImageDirective` | Lazy-loads images using Intersection Observer |

### Pipes

| Pipe | Description |
|:-----|:------------|
| `ArabicNumberPipe` | Converts Latin numerals to Arabic (١٢٣) |
| `SafeHtmlPipe` | Bypasses Angular sanitization for trusted HTML |
| `TruncatePipe` | Truncates text with configurable length + ellipsis |

---

## 📡 API Integration Layer

### ApiService (`core/services/api.service.ts`)

Centralized HTTP client wrapping Angular's `HttpClient` with typed generic methods:

```typescript
get<T>(path: string, params?: Record<string, string>): Observable<T>
post<T>(path: string, body: unknown): Observable<T>
put<T>(path: string, body: unknown): Observable<T>
patch<T>(path: string, body: unknown): Observable<T>
delete<T>(path: string): Observable<T>
```

All paths are **relative** — the base URL is injected from `environment.apiUrl`.

### Interceptor Stack

| Interceptor | Type | Description |
|:------------|:-----|:------------|
| `langInterceptor` | Functional | Injects `Accept-Language` header based on active locale |
| `errorInterceptor` | Functional | Global error handler — logs to console, re-throws for component-level handling |
| `JwtInterceptor` | Class-based | Injects `Authorization: Bearer` header, handles 401 with silent token refresh and request queue |

### Interceptor Registration (`app.config.ts`)

```typescript
provideHttpClient(withInterceptors([langInterceptor, errorInterceptor])),
{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
```

---

## 🗄️ State Management

| Store | Status | Purpose |
|:------|:------:|:--------|
| **Auth Store** | 🏗️ | User session, tokens, permissions |
| **UI Store** | 🏗️ | Theme state, sidebar, loading indicators |

> **Note:** Currently, auth state is managed directly in `AuthService` using Angular **Signals** (`signal()` + `computed()`). NgRx integration is planned for more complex features.

---

## 🚀 Getting Started

### Prerequisites

| Requirement | Version |
|:------------|:--------|
| Node.js | `18.x` or `20.x` |
| npm | `9.x+` |
| Angular CLI | `18.2+` (install globally: `npm i -g @angular/cli`) |

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/Uni-Guide-frontend.git
cd Uni-Guide-frontend/frontend

# Install dependencies
npm install
```

### Development Server

```bash
ng serve
# or
npm start
```

Navigate to **`http://localhost:4200/`** — the app auto-reloads on source changes.

### Production Build

```bash
ng build --configuration production
```

Output is generated in the `dist/` directory.

---

## 📜 Scripts Reference

| Script | Command | Description |
|:-------|:--------|:------------|
| **Start** | `npm start` | Launch dev server on port 4200 |
| **Build** | `npm run build` | Production build |
| **Test** | `npm test` | Run Jest unit tests |
| **Lint** | `npm run lint` | Run Angular linter |

---

## ⚙️ Environment Configuration

| Environment | API Base URL | File |
|:------------|:-------------|:-----|
| **Development** | `http://localhost:3000/api` | `environment.ts` |
| **Staging** | `https://staging-api.futurepath.com/api` | `environment.staging.ts` |
| **Production** | `https://api.futurepath.com/api` | `environment.prod.ts` |

---

## 📊 Current Progress

```
Infrastructure   ████████████████████░  95%   (Routes, i18n, RTL, Themes, Auth)
Landing Page     ████████████████████░  95%   (Hero, Sections, Footer, Animations)
Auth System      ██████████████████░░░  85%   (Login, Register, OTP, JWT Refresh)
API Layer        ████████████████░░░░░  75%   (Service, Interceptors, Models)
Feature Logic    ████░░░░░░░░░░░░░░░░░  20%   (Dashboard, Quiz, Chat — scaffolded)
Backend Sync     ███░░░░░░░░░░░░░░░░░░  15%   (Interceptors ready, endpoints defined)
```

---

## 🚧 Roadmap

### Phase 1 — Backend Integration *(In Progress)*
- [ ] Connect auth endpoints to NestJS backend
- [ ] Wire `langInterceptor` to inject `Accept-Language` header from Transloco
- [ ] Implement password reset flow (`forgot-password` route exists)

### Phase 2 — Core Features
- [ ] Student Dashboard with personalized insights
- [ ] Career matching quiz with multi-step flow
- [ ] AI Chat interface with SSE (Server-Sent Events)
- [ ] College Explorer with search, filter, and comparison

### Phase 3 — Advanced Features
- [ ] Onboarding interest mapping wizard
- [ ] Parent dashboard for student monitoring
- [ ] Admin panel with analytics
- [ ] NgRx state management for complex features

### Phase 4 — Production Polish
- [ ] Comprehensive unit & integration test suite
- [ ] Performance optimization (lazy loading, bundle analysis)
- [ ] PWA support (offline capability)
- [ ] CI/CD pipeline configuration

---

## 📄 License

This project is private and proprietary to the Uni-Guide team.

---

<div align="center">

**Built with ❤️ by the Uni-Guide Team** 🚀

*Angular 18 · TypeScript 5.5 · Three.js · Transloco · SCSS*

</div>
