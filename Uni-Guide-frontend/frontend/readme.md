# 🎓 Uni-Guide | Professional Frontend Portal

[![Angular](https://img.shields.io/badge/Angular-18.2-DD0031?style=for-the-badge&logo=angular)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-007ACC?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![NgRx](https://img.shields.io/badge/NgRx-Enterprise--State-BA2BD2?style=for-the-badge&logo=ngrx)](https://ngrx.io/)
[![Tailwind](https://img.shields.io/badge/CSS-Sass_/_BEM-CC6699?style=for-the-badge&logo=sass)](https://sass-lang.com/)
[![i18n](https://img.shields.io/badge/i18n-Arabic_/_English-4caf50?style=for-the-badge)](https://ngneat.github.io/transloco/)

## 📌 1. Frontend Overview
The **Uni-Guide Frontend** is a high-performance, enterprise-grade Single Page Application (SPA) built with Angular 18. It serves as the primary gateway for students to explore universities, take career-matching quizzes, and interact with AI-driven academic advisors.

### Key Roles:
- **Dynamic Onboarding**: Guiding users through interest mapping.
- **AI Integration**: Real-time interaction with academic counseling agents.
- **Data Visualization**: Comparison of university stats, fees, and career roadmaps.
- **Bilingual Experience**: Full RTL (Arabic) and LTR (English/French) support.

---

## 🛠️ 2. Tech Stack
- **Framework**: Angular 18 (Standalone Components, Signals API).
- **Styles**: SCSS with BEM methodology and Design Tokens.
- **State Management**: **NgRx** (Store, Effects, Component Store) — *In Progress*.
- **i18n**: **Transloco** for dynamic translation loading.
- **Testing**: **Jest** for unit testing and logic validation.
- **Utilities**: RxJS 7.8, Zone.js 0.14.

---

## 📁 3. Current Folder Structure
The project follows a **Feature-Driven Industry Standard** architecture to ensure scalability.

```text
src/app/
├── core/               # Singleton Logic (App-wide)
│   ├── auth/           # Services (AuthService), Guards (AuthGuard)
│   ├── interceptors/   # API, Lang, and Error Interceptors
│   ├── services/       # Global services (API, Analytics, SEO)
│   └── layout/         # RTL Direction services
├── features/           # Domain Modules (Lazy Loaded)
│   ├── auth/           # Login, Register, OTP Verify
│   ├── dashboard/      # Main Student Dashboard
│   ├── quiz/           # Assessment Flow & Results
│   ├── ai-chat/        # AI Counseling Interface
│   ├── college-explorer/# Search, Detail, & Comparison
│   └── onboarding/     # First-time user interest walk-through
├── shared/             # Reusable UI & Logic
│   ├── components/     # College Cards, Skeleton Loaders, Dialogs
│   ├── directives/     # Auto-direction, Lazy loading
│   └── pipes/          # Arabic numbers, Truncate, Safe HTML
├── store/              # Global NgRx State
│   └── [feature]/      # Actions, Reducers, Effects, Selectors
├── i18n/               # Transloco Loaders & Localization logic
├── themes/             # Multi-theme Support (Light/Dark/Material)
└── models/             # App-wide TypeScript Interfaces
```

---

## ✅ 4. Implemented Features (Current Status)

| Feature | Status | Description |
| :--- | :--- | :--- |
| **Project Foundation** | ✅ DONE | Angular 18 setup with Standalone architecture. |
| **Routing System** | ✅ DONE | Multi-layout routing (Main vs Auth) with Lazy loading. |
| **i18n Engine** | ✅ DONE | Transloco integrated with Arabic/English support. |
| **RTL/LTR Support**| ✅ DONE | Automatic direction switching based on language. |
| **Auth Scaffolding**| 🏗️ PARTIAL | Layouts and routes defined for Login/Register. |
| **State Mngmt** | 🏗️ PARTIAL | Store structure created but not yet wired to UI. |
| **Shared Components**| 🏗️ PARTIAL | Skeleton loaders and basic UI components created. |
| **API Integration** | 🏗️ PARTIAL | Interceptor scaffolds and environment configs ready. |

---

## 🔐 5. Authentication Flow (Frontend)
- **Status**: Structural Implementation.
- **Logic**:
  1. Users enter credentials in `features/auth/login`.
  2. `AuthService` (Core) sends requests via `provideHttpClient`.
  3. `api.interceptor.ts` injects JWT.
  4. `AuthGuard` protects routes in `app.routes.ts`.
- **Handling**: `jwt.interceptor.ts` (Core) ensures every request carries the bearer token from `localStorage`.

---

## 📡 6. API Integration
- **Structure**: Uses a centralized `ApiService` in `core/services/` for standardized HTTP verbs.
- **Interceptors**: 
  - `langInterceptor`: Adds `Accept-Language` header automatically.
  - `errorInterceptor`: Catches 401/500 errors globally.
- **Environments**: Configured in `src/environments/` for Dev, Staging, and Production.

---

## 🎨 7. UI / UX System
- **Design Tokens**: Centralized in `src/app/themes/tokens/` (Colors, Spacing, Typography).
- **Theming**: Supports dynamic switching via `ThemeService`.
- **Responsiveness**: SCSS-based breakpoints ensuring mobile compatibility.
- **Arabic Rendering**: `ArabicNumberPipe` and `AutoDirDirective` ensure high-quality RTL experience.

---

## 🔄 8. State Management
The project uses **NgRx** for critical features:
- **Auth Store**: Manages user session and permissions.
- **College Store**: Caches explorer results and search filters.
- **Quiz Store**: Maintains state during the multi-step assessment flow.
- **UI Store**: Handles sidebar toggles, theme state, and loading progress.

---

## 🌍 9. Internationalization (i18n)
- **Engine**: Transloco.
- **Storage**: Translation JSONs are located in `src/assets/i18n/`.
- **Initialization**: `APP_INITIALIZER` in `app.config.ts` ensures the correct direction (RTL/LTR) is applied before the first paint.

---

## ⚙️ 10. Setup & Run

### Prerequisites
- Node.js (v18 or v20)
- Angular CLI (`npm i -g @angular/cli`)

### Installation
```bash
npm install
```

### Development Server
```bash
ng serve
```
Navigate to `http://localhost:4200/`.

---

## 🧪 11. Testing
The project uses **Jest**.
- **Unit Tests**: `npm test`
- **Coverage**: `npm run test:coverage`

---

## 📊 12. Current Progress Summary
- **Infrastructure**: 90% Done (Routes, i18n, RTL, Themes).
- **Feature Logic**: 15% Done (Mainly scaffolding).
- **Backend Sync**: 5% Done (Interceptors ready, but services need implementation).

---

## 🚧 13. What To Do Next (Roadmap)

1. **Auth Completion**: 
   - Implement `AuthService` login/register logic.
   - Wire `AuthStore` to handle user state.
2. **Onboarding logic**:
   - Implement the interest selection component.
   - Save onboarding data to the backend.
3. **College Explorer**:
   - Connect the `CollegeCard` to real API data.
   - Implement search and filter logic in the `CollegeStore`.
4. **AI Chat Integration**:
   - Implement SSE (Server-Sent Events) in `ai-chat.component.ts`.
5. **Form Validation**: 
   - Apply Reactive Forms to all auth and profile screens.

---

## ⚠️ 14. Known Issues
- `langInterceptor` is currently a pass-through and needs logic to inject headers.
- Most `store` files are currently empty shells.
- Shared components need final CSS styling (Material vs TailWind-like SCSS).

---

**Uni-Guide Frontend Team** 🚀
