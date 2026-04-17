
<div align="center">

<img src="https://img.shields.io/badge/🎓-UniGuide-1a6be0?style=for-the-badge&labelColor=050d1f" alt="UniGuide Logo" height="40"/>

# UniGuide — AI-Powered University Guidance Platform

**Your Intelligent Path from High School to Career**

> A full-stack AI platform that analyzes student interests, academic strengths, and behavioral data to recommend the best-fit university, major, and career roadmap — built for scale and precision.

<br/>

![Version](https://img.shields.io/badge/version-1.0.0-1a6be0?style=for-the-badge&logo=semver&logoColor=white)
![Status](https://img.shields.io/badge/status-Active_Development-00c8e8?style=for-the-badge&logo=statuspage&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-0ea57a?style=for-the-badge&logo=opensourceinitiative&logoColor=white)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-8250dc?style=for-the-badge&logo=github&logoColor=white)

<br/>

![Angular](https://img.shields.io/badge/Angular-DD0031?style=flat-square&logo=angular&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=jest&logoColor=white)

</div>

---

## 📑 Table of Contents

<details>
<summary><strong>Click to expand</strong></summary>

- [📋 Description](#-description)
- [🛠️ Tech Stack](#️-tech-stack)
- [✨ Features](#-features)
- [🏗️ Project Architecture](#️-project-architecture)
- [📁 Folder Structure](#-folder-structure)
- [🚀 Installation & Setup](#-installation--setup)
- [📜 Scripts](#-scripts)
- [🧪 Testing](#-testing)
- [📡 API Documentation](#-api-documentation)
- [☁️ Deployment](#️-deployment)
- [🤝 Contribution Guidelines](#-contribution-guidelines)
- [📄 License](#-license)

</details>

---

## 📋 Description

**UniGuide** is a comprehensive, AI-powered university guidance platform designed to help high school graduates make informed, data-driven decisions about their higher education and career paths.

### The Problem

Every year, hundreds of thousands of high school students face one of the most critical decisions of their lives — choosing a university and major — without access to structured, personalized, or data-backed guidance. Decisions are often driven by family pressure or peer influence rather than a student's actual aptitude and interest.

### The Solution

UniGuide bridges this gap by combining a **15-question AI personality quiz**, a **real-time chatbot**, a **salary predictor**, and a **visual career roadmap** into a seamless, intelligent platform. The system analyzes each student's profile and delivers highly personalized college and major recommendations — complete with actionable next steps.

| Detail | Info |
|:---|:---|
| **Platform** | Web Application (Mobile-responsive) |
| **Primary Users** | High school students, parents, and academic advisors |
| **AI Capabilities** | Recommendation engine, chatbot (RAG), salary prediction |
| **Language Support** | Arabic-first (RTL) with English fallback |
| **Deployment Target** | AWS / GCP — Cairo region |

---

## 🛠️ Tech Stack

### Frontend

| Technology | Version | Purpose |
|:---|:---:|:---|
| **Angular** | latest stable | SPA framework with standalone components & signals |
| **TypeScript** | latest stable | Static typing across the entire codebase |
| **Angular Material** | latest stable | UI component library |
| **RxJS** | latest stable | Reactive state management & async data streams |
| **NgRx** | latest stable | Global state management (Redux pattern with signals support) |
| **SCSS** | — | Advanced component-level styling |
| **Jest** | latest stable | Unit & integration testing |

### Backend

| Technology | Version | Purpose |
|:---|:---:|:---|
| **NestJS** | latest stable | Modular, scalable Node.js framework |
| **TypeScript** | latest stable | Full type safety on the server |
| **TypeORM** | latest stable | ORM — database migrations & entity management |
| **PostgreSQL** | latest stable | Primary relational database |
| **Redis** | latest stable | Session caching and background job queues |
| **JWT + Passport** | — | Authentication & authorization |
| **Swagger / OpenAPI** | latest stable | Auto-generated API documentation |
| **Jest** | latest stable | Unit, integration, and e2e testing |

### Infrastructure & DevOps

| Technology | Purpose |
|:---|:---|
| **Docker / Docker Compose** | Containerized local development & production |
| **GitHub Actions** | CI/CD pipeline (lint → test → build → deploy) |
| **AWS ECS (Fargate) + RDS** | Production hosting & managed database |
| **AWS S3 + CloudFront** | Static frontend hosting & CDN delivery |

---

## ✨ Features

### 🔐 Authentication & User Management
- Phone-based OTP registration with SMS verification
- JWT access tokens + refresh token rotation
- Role-based access control: `student`, `parent`, `admin`
- Google OAuth 2.0 social login integration
- Biometric authentication toggle (mobile browsers)

### 🤖 AI-Powered Recommendation Engine
- **15-question personality & aptitude quiz** with real-time result processing
- Hybrid recommendation model (content-based + collaborative filtering + latest LLM reranking)
- Top 10 personalized college matches with match-percentage explanation
- Live behavioral tracking — recommendations update as users interact with the platform

### 🎓 University & College Explorer
- Searchable, filterable database of 500+ Egyptian colleges and universities
- Advanced filters: governorate, institution type, score range, annual fee range
- Side-by-side comparison of up to 3 institutions across 8+ metrics
- Save to favourites with real-time sync across devices

### 💬 AI Chatbot (Arabic RAG)
- Latest LLM powered chatbot with Retrieval-Augmented Generation over the college database
- Fully Arabic, RTL-native chat interface with streaming text responses
- Suggested question chips for guided exploration
- Conversation history persistence per user session

### 💰 Salary Predictor
- XGBoost ML model trained on Egyptian labour market data
- Inputs: specialization, institution type, governorate, years of experience
- Output: animated Min / Median / Max salary projection in EGP
- 3-year forward projections by major

### 🗺️ Career Roadmap
- Visual timeline from college enrollment to senior employment
- Stage-by-stage breakdown: required skills, certifications, expected salary
- Recommended online courses with platform logos and direct links
- Skill-tree visualization with interactive progress tracking

### 👨‍👩‍👧 Parent Dashboard
- Real-time visibility into child's quiz results, saved colleges, and AI interactions
- Notification system for application deadlines and important dates
- Co-decision tools: shared notes and approval workflows

### 📊 Admin Analytics Panel
- Live KPI dashboard: DAU, quiz completions, AI satisfaction scores
- Egypt heatmap — top-searched colleges by governorate
- Revenue tracking, subscription analytics, and AI cost monitoring
- Data export (CSV / PDF) for institutional reporting

---

## 🏗️ Project Architecture

UniGuide follows a **clean, decoupled, three-tier architecture** with modern best practices:

```
┌─────────────────────────────────────────────────────────────┐
│                      Client Layer                            │
│            Angular SPA  ─  HTTPS (TLS 1.3)                  │
└─────────────────────────┬───────────────────────────────────┘
                          │  REST / SSE
┌─────────────────────────▼───────────────────────────────────┐
│                      API Layer                               │
│             NestJS  ─  JWT Auth  ─  Swagger                  │
│                                                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │   Auth   │ │ College  │ │    AI    │ │Analytics │       │
│  │  Module  │ │  Module  │ │  Module  │ │  Module  │       │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘       │
└──────────────────┬──────────────────┬───────────────────────┘
                   │                  │
      ┌────────────▼──────┐  ┌────────▼────────┐
      │ PostgreSQL (latest)│  │   Redis (latest) │
      │  (Primary Store)  │  │  (Cache + Queue) │
      └───────────────────┘  └─────────────────┘
```

### Data Flow

1. **Angular** sends authenticated HTTP requests (via `HttpClient` with JWT interceptors) to the NestJS REST API.
2. **NestJS guards** validate the JWT on every protected route before passing control to the appropriate module.
3. **TypeORM repositories** handle all database interactions, with migrations managing schema changes in both local and production environments.
4. **AI endpoints** proxy requests to a Python FastAPI micro-service (LLM + ML models) and stream results back to the client via **Server-Sent Events (SSE)**.
5. **Redis** caches hot data (college listings, quiz results) and manages background job queues (email notifications, OTP expiry).

---

## 📁 Folder Structure

### Frontend — Angular

```
frontend/
├── src/
│   ├── app/
│   │   ├── core/                          # Singleton services, guards, interceptors
│   │   │   ├── auth/
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── auth.guard.ts
│   │   │   │   ├── role.guard.ts
│   │   │   │   └── jwt.interceptor.ts
│   │   │   ├── interceptors/              # Functional HTTP interceptors
│   │   │   │   ├── api.interceptor.ts
│   │   │   │   ├── error.interceptor.ts
│   │   │   │   └── lang.interceptor.ts
│   │   │   ├── layout/                    # Direction detection
│   │   │   │   ├── dir.service.ts
│   │   │   │   └── layout-direction.guard.ts
│   │   │   └── services/
│   │   │       ├── api.service.ts
│   │   │       ├── analytics.service.ts
│   │   │       └── seo.service.ts
│   │   │
│   │   ├── shared/                        # Reusable standalone components, pipes, directives
│   │   │   ├── components/
│   │   │   │   ├── college-card/
│   │   │   │   ├── confirm-dialog/
│   │   │   │   ├── language-switcher/
│   │   │   │   ├── loading-spinner/
│   │   │   │   ├── rtl-card/
│   │   │   │   ├── skeleton-loader/
│   │   │   │   └── theme-toggle/
│   │   │   ├── directives/
│   │   │   │   ├── auto-dir.directive.ts
│   │   │   │   ├── focus-trap.directive.ts
│   │   │   │   └── lazy-image.directive.ts
│   │   │   └── pipes/
│   │   │       ├── arabic-number.pipe.ts
│   │   │       ├── safe-html.pipe.ts
│   │   │       └── truncate.pipe.ts
│   │   │
│   │   ├── layouts/                       # Page shell layouts
│   │   │   ├── admin-layout/
│   │   │   ├── auth-layout/
│   │   │   └── main-layout/
│   │   │
│   │   ├── features/                      # Feature areas (lazy-loaded)
│   │   │   ├── auth/
│   │   │   │   ├── login/
│   │   │   │   ├── register/
│   │   │   │   └── otp-verify/
│   │   │   ├── admin/
│   │   │   ├── ai-chat/
│   │   │   ├── career-roadmap/
│   │   │   ├── college-explorer/
│   │   │   │   ├── college-list/
│   │   │   │   ├── college-detail/
│   │   │   │   └── college-compare/
│   │   │   ├── dashboard/
│   │   │   ├── parent-dashboard/
│   │   │   ├── quiz/
│   │   │   │   ├── quiz-flow/
│   │   │   │   └── quiz-results/
│   │   │
│   │   ├── store/                         # NgRx state management
│   │   │   ├── auth/
│   │   │   │   ├── auth.actions.ts
│   │   │   │   ├── auth.effects.ts
│   │   │   │   ├── auth.reducer.ts
│   │   │   │   └── auth.selectors.ts
│   │   │   ├── college/
│   │   │   ├── quiz/
│   │   │   └── ui/
│   │   │       ├── ui.actions.ts
│   │   │       ├── ui.reducer.ts
│   │   │       └── ui.selectors.ts
│   │   │
│   │   ├── i18n/                          # Internationalization (Arabic-first)
│   │   │   ├── loaders/
│   │   │   │   ├── translation-loader.ts
│   │   │   │   └── server-translation.loader.ts
│   │   │   └── services/
│   │   │       ├── i18n.service.ts
│   │   │       └── rtl.service.ts
│   │   │
│   │   ├── themes/                        # Design system & theming
│   │   │   ├── material/
│   │   │   │   ├── light.theme.ts
│   │   │   │   └── dark.theme.ts
│   │   │   ├── services/
│   │   │   │   └── theme.service.ts
│   │   │   └── tokens/
│   │   │       ├── colors.tokens.ts
│   │   │       ├── spacing.tokens.ts
│   │   │       └── typography.tokens.ts
│   │   │
│   │   ├── models/                        # TypeScript interfaces & enums
│   │   │   ├── college.model.ts
│   │   │   ├── i18n.model.ts
│   │   │   ├── quiz.model.ts
│   │   │   └── user.model.ts
│   │   │
│   │   ├── app.routes.ts                  # Root lazy-loaded route definitions
│   │   ├── app.config.ts                  # Application providers
│   │   └── app.component.ts
│   │
│   ├── assets/
│   │   ├── fonts/
│   │   ├── i18n/                          # Translation files (ar.json, en.json)
│   │   └── icons/
│   │
│   ├── environments/
│   │   ├── environment.ts                 # Development
│   │   ├── environment.staging.ts         # Staging
│   │   └── environment.prod.ts            # Production
│   │
│   ├── styles/                            # Global SCSS design system
│   │   ├── _a11y.scss                     # Accessibility utilities
│   │   ├── _dark.scss                     # Dark mode overrides
│   │   ├── _mixins.scss
│   │   ├── _rtl.scss                      # RTL/Arabic layout rules
│   │   ├── _tokens.scss                   # Design tokens
│   │   ├── _typography.scss
│   │   └── styles.scss                    # Global entry point
│   │
│   ├── index.html
│   └── main.ts
│
├── angular.json
├── tsconfig.json
├── tsconfig.app.json
└── package.json
```


### Backend — NestJS

```
backend/
├── src/
│   ├── common/                        # Reusable exceptions, pipes, guards
│   │   ├── decorators/
│   │   ├── filters/
│   │   ├── guards/
│   │   ├── interceptors/
│   │   └── pipes/
│   ├── config/                        # Global environment configs
│   │   ├── ai.config.ts
│   │   ├── app.config.ts
│   │   ├── database.config.ts
│   │   ├── jwt.config.ts
│   │   └── redis.config.ts
│   ├── database/                      # TypeORM configs and dumps
│   │   ├── migrations/
│   │   └── seeds/
│   ├── modules/                       # Core domains
│   │   ├── ai/
│   │   ├── analytics/
│   │   ├── auth/
│   │   ├── colleges/
│   │   ├── i18n/
│   │   ├── notifications/
│   │   ├── quiz/
│   │   └── users/
│   └── main.ts
├── test/
├── .env.example
├── docker-compose.yml
├── nest-cli.json
├── package.json
└── tsconfig.json
```

### AI Layer — Python / FastAPI

```
AILayer/
├── app/
│   ├── api/                           # API Routes & dependencies
│   │   ├── v1/
│   │   │   ├── routes_chat.py
│   │   │   ├── routes_quiz.py
│   │   │   ├── routes_roadmap.py
│   │   │   └── routes_salary.py
│   │   └── deps.py
│   ├── core/                          # Cross-cutting concerns
│   │   ├── config.py
│   │   ├── logging.py
│   │   └── security.py
│   ├── models/                        # ML models and schemas
│   │   ├── ml/
│   │   │   ├── personality_classifier.pkl
│   │   │   └── salary_xgboost.pkl
│   │   └── schemas.py
│   ├── prompts/                       # LLM static prompts
│   │   ├── chat.ar.txt
│   │   ├── chat.en.txt
│   │   ├── recommendation.ar.txt
│   │   └── recommendation.en.txt
│   ├── services/                      # AI logic & model inference
│   │   ├── lang_router.py
│   │   ├── rag_service.py
│   │   ├── recommendation.py
│   │   ├── salary_model.py
│   │   └── stream_handler.py
│   └── main.py
├── tests/
├── .env.example
├── Dockerfile
└── requirements.txt
```

### DevOps & Infrastructure

```
devOps/
├── .github/
│   └── workflows/
│       ├── cd-ai.yml
│       ├── cd-backend.yml
│       ├── cd-frontend.yml
│       └── ci.yml
└── infra/
    ├── docker/
    │   ├── Dockerfile.ai
    │   ├── Dockerfile.backend
    │   ├── Dockerfile.frontend
    │   └── docker-compose.yml
    ├── nginx/
    └── terraform/
        ├── main.tf
        ├── outputs.tf
        └── variables.tf
```

### MonoRepo Context (Optional)

```
monoRepo/
└── uniguide/
    ├── docs/                          # Architecture & Guidelines Docs
    │   ├── ai-prompting.md
    │   ├── architecture.md
    │   ├── i18n-guide.md
    │   └── theme-guide.md
    ├── shared/                        # Shared TS Types & Enums
    │   ├── constants/
    │   └── types/
    ├── .editorconfig
    ├── .gitignore
    ├── commitlint.config.js
    ├── nx.json
    └── package.json
```

---

## 🚀 Installation & Setup

### Prerequisites

Ensure the following tools are installed on your machine:

| Tool | Minimum Version | Install |
|:---|:---:|:---|
| **Node.js** | 24 LTS (recommended) | [nodejs.org](https://nodejs.org) |
| **npm** | latest | Comes with Node.js |
| **Angular CLI** | latest stable | `npm install -g @angular/cli` |
| **NestJS CLI** | latest stable | `npm install -g @nestjs/cli` |
| **PostgreSQL** | latest stable | [postgresql.org](https://postgresql.org) |
| **Redis** | latest stable | [redis.io](https://redis.io) |
| **Docker** (optional) | latest stable | [docker.com](https://docker.com) |

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/uniguide.git
cd uniguide
```

---

### 2. Install Dependencies

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd ../backend
npm install
```

---

### 3. Environment Variables Setup

#### Backend — `.env`

Copy the example and fill in your values:

```bash
cp .env.example .env
```

```env
# ── App ──────────────────────────────────────────
NODE_ENV=development
PORT=3000

# ── Database ─────────────────────────────────────
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_secure_password
DB_NAME=uniguide_db

# ── Redis ────────────────────────────────────────
REDIS_HOST=localhost
REDIS_PORT=6379

# ── Authentication ───────────────────────────────
JWT_SECRET=your_jwt_secret_min_32_chars
JWT_EXPIRES_IN=15m
JWT_REFRESH_SECRET=your_refresh_secret
JWT_REFRESH_EXPIRES_IN=7d

# ── Google OAuth ─────────────────────────────────
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:3000/api/auth/google/callback

# ── SMS (OTP) ────────────────────────────────────
SMS_API_KEY=your_sms_provider_api_key
SMS_SENDER_ID=UniGuide

# ── AI Services ──────────────────────────────────
OPENAI_API_KEY=sk-...
AI_SERVICE_URL=http://localhost:8000  # Python FastAPI micro-service
```

#### Frontend — `src/environments/environment.ts`

```typescript
export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:3000/api',
  wsUrl: 'ws://localhost:3000',
};
```

---

### 4. Database Setup (PostgreSQL)

#### Option A — Manual Setup

```bash
# Connect to PostgreSQL
psql -U postgres

# Create the database
CREATE DATABASE uniguide_db;
\q
```

```bash
# Run TypeORM migrations
cd backend
npm run migration:run
```

#### Option B — Docker Compose (Recommended)

```bash
# From the project root
docker-compose up -d postgres redis
```

The `docker-compose.yml` spins up PostgreSQL and Redis with the correct credentials pre-configured matching `.env.example`.

---

### 5. Run Development Servers

Open two terminal windows:

#### Terminal 1 — Backend

```bash
cd backend
npm run start:dev
```

The API will be available at: `http://localhost:3000`  
Swagger UI: `http://localhost:3000/api/docs`

#### Terminal 2 — Frontend

```bash
cd frontend
ng serve
```

The Angular app will be available at: `http://localhost:4200`

---

## 📜 Scripts

### Frontend Scripts

| Command | Description |
|:---|:---|
| `ng serve` | Start Angular dev server with hot-reload (Vite + esbuild) |
| `ng build` | Build for production (`dist/` output) |
| `ng build --configuration production` | Optimized production build with AOT |
| `ng test` | Run unit tests with Jest |
| `ng test --code-coverage` | Run tests and generate code coverage report |
| `ng lint` | Run ESLint across the Angular project |
| `ng generate component <name>` | Scaffold a new Angular component |

### Backend Scripts

| Command | Description |
|:---|:---|
| `npm run start:dev` | Start NestJS in watch mode (ts-node + nodemon) |
| `npm run start:prod` | Start compiled production build |
| `npm run build` | Compile TypeScript to `dist/` |
| `npm run test` | Run all Jest unit tests |
| `npm run test:watch` | Jest in interactive watch mode |
| `npm run test:cov` | Jest with coverage report (LCOV + HTML) |
| `npm run test:e2e` | Run end-to-end tests (Jest + Supertest) |
| `npm run migration:generate -- -n <Name>` | Generate a new TypeORM migration |
| `npm run migration:run` | Apply all pending migrations |
| `npm run migration:revert` | Revert the last applied migration |
| `npm run lint` | Run ESLint + Prettier checks |

---

## 🧪 Testing

### Frontend — Jest

The Angular frontend uses **Jest** (configured via modern Angular builders) for fast, reliable unit and integration testing.

#### Running Tests

```bash
# Run all unit tests once
ng test --watch=false

# Run in watch mode (for TDD)
ng test

# Generate a code coverage report
ng test --code-coverage
# → Open coverage/index.html in your browser
```

#### Test Structure

Tests are co-located with their source files using the `.spec.ts` suffix:

```
auth/
├── auth.service.ts
└── auth.service.spec.ts        # Jest unit test
```

#### Example Test — Service

```typescript
// auth.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should call the login endpoint and return a token', () => {
    const credentials = { phone: '+201234567890', password: 'pass' };
    const mockResponse = { accessToken: 'jwt-token' };

    service.login(credentials).subscribe((res) => {
      expect(res.accessToken).toBe('jwt-token');
    });

    const req = httpMock.expectOne('/api/auth/login');
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });
});
```

---

### Backend — Jest

The NestJS backend uses **Jest** for unit tests, integration tests, and end-to-end (e2e) tests with **Supertest**.

#### Running Tests

```bash
# Run all unit tests
npm run test

# Interactive watch mode
npm run test:watch

# With coverage (outputs to /coverage)
npm run test:cov

# End-to-end tests
npm run test:e2e
```

#### Test Structure

```
src/
└── modules/
    └── auth/
        ├── auth.service.ts
        └── auth.service.spec.ts       # Jest unit test

test/
└── app.e2e-spec.ts                    # Supertest e2e test
```

#### Example Test — Controller

```typescript
// auth.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AuthController', () => {
  let controller: AuthController;
  let authService: jest.Mocked<AuthService>;

  beforeEach(async () => {
    const mockAuthService = {
      login: jest.fn(),
      register: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [{ provide: AuthService, useValue: mockAuthService }],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    authService = module.get(AuthService);
  });

  it('should return an access token on login', async () => {
    const loginDto = { phone: '+201234567890', password: 'pass' };
    authService.login.mockResolvedValue({ accessToken: 'jwt-token' });

    const result = await controller.login(loginDto);

    expect(result.accessToken).toBe('jwt-token');
    expect(authService.login).toHaveBeenCalledWith(loginDto);
  });
});
```

#### Example — End-to-End Test

```typescript
// test/app.e2e-spec.ts
import * as request from 'supertest';
import { app } from './setup';

describe('Auth (e2e)', () => {
  it('POST /api/auth/login → 200 with JWT', () => {
    return request(app.getHttpServer())
      .post('/api/auth/login')
      .send({ phone: '+201234567890', password: 'TestPass123!' })
      .expect(200)
      .expect((res) => {
        expect(res.body.accessToken).toBeDefined();
      });
  });
});
```

#### Coverage Targets

| Module | Target |
|:---|:---:|
| Services | ≥ 85% |
| Controllers | ≥ 80% |
| Guards & Interceptors | ≥ 75% |
| E2E critical paths | 100% |

---

## 📡 API Documentation

All endpoints are automatically documented via **Swagger UI** at:  
`http://localhost:3000/api/docs`

### Base URL

```
http://localhost:3000/api         ← Development
https://api.uniguide.app/api      ← Production
```

### Authentication

All protected routes require a `Bearer` token in the `Authorization` header:

```
Authorization: Bearer <access_token>
```

---

### 🔐 Auth Endpoints

| Method | Endpoint | Auth | Description |
|:---:|:---|:---:|:---|
| `POST` | `/auth/register` | ❌ | Register a new student or parent account |
| `POST` | `/auth/login` | ❌ | Login — returns `accessToken` + `refreshToken` |
| `POST` | `/auth/otp/send` | ❌ | Send OTP code to a mobile number |
| `POST` | `/auth/otp/verify` | ❌ | Verify the OTP and activate the account |
| `POST` | `/auth/refresh` | ❌ | Exchange a refresh token for a new access token |
| `POST` | `/auth/logout` | ✅ | Invalidate the current refresh token |
| `GET`  | `/auth/google` | ❌ | Initiate Google OAuth flow |

**Example — Register Request:**

```json
POST /api/auth/register
{
  "name": "Ahmed Hassan",
  "phone": "+201234567890",
  "password": "SecurePass@123",
  "role": "student",
  "governorate": "Cairo"
}
```

**Example — Register Response:**

```json
{
  "message": "OTP sent to +201234567890",
  "userId": "a3d9f1c2-..."
}
```

---

### 🎓 College Endpoints

| Method | Endpoint | Auth | Description |
|:---:|:---|:---:|:---|
| `GET` | `/colleges` | ✅ | List colleges with filters & pagination |
| `GET` | `/colleges/:id` | ✅ | Get a single college with full details |
| `GET` | `/colleges/compare` | ✅ | Compare 2–3 colleges by their IDs |
| `POST` | `/colleges/:id/save` | ✅ | Save a college to user favourites |
| `DELETE` | `/colleges/:id/save` | ✅ | Remove a college from favourites |

**Example — College List Query:**

```
GET /api/colleges?governorate=Cairo&type=private&minScore=80&maxFee=60000&page=1&limit=20
```

---

### 🤖 AI Endpoints

| Method | Endpoint | Auth | Description |
|:---:|:---|:---:|:---|
| `POST` | `/ai/quiz/submit` | ✅ | Submit quiz answers → returns Top 10 recommendations |
| `POST` | `/ai/chat` | ✅ | Send a chat message — returns SSE stream |
| `POST` | `/ai/salary-predict` | ✅ | Predict salary based on major & experience |
| `GET`  | `/ai/roadmap/:studentId` | ✅ | Get personalized career roadmap |

**Example — Quiz Submission:**

```json
POST /api/ai/quiz/submit
{
  "answers": [
    { "questionId": "q1", "selectedOption": "B" },
    { "questionId": "q2", "selectedOption": "A" }
  ]
}
```

**Example — Quiz Response:**

```json
{
  "personalityType": "Analytical Innovator",
  "recommendations": [
    {
      "collegeId": "9a1b2c3d-...",
      "name": "Faculty of Computer Science — Cairo University",
      "matchScore": 94.5,
      "reasons": ["Strong alignment with analytical profile", "High employment rate (91%)", "Top ranked in STEM"]
    }
  ]
}
```

---

### 📊 Analytics Endpoints (Admin Only)

| Method | Endpoint | Auth | Description |
|:---:|:---|:---:|:---|
| `GET` | `/analytics/overview` | ✅ Admin | Platform KPIs — users, DAU, quiz completions |
| `GET` | `/analytics/colleges/trending` | ✅ Admin | Most-viewed colleges by region |
| `GET` | `/analytics/ai/performance` | ✅ Admin | Chatbot satisfaction, accuracy, token usage |

---

## ☁️ Deployment

### Production Architecture

```
User → CloudFront CDN → S3 (Angular)
                    ↓
              AWS ALB (Load Balancer)
                    ↓
       ECS Fargate (NestJS containers)
                    ↓
           RDS PostgreSQL (Multi-AZ)
                +
           ElastiCache Redis
```

### Frontend — AWS S3 + CloudFront

```bash
# Build the Angular app for production
cd frontend
ng build --configuration production

# Deploy to S3 (requires AWS CLI configured)
aws s3 sync dist/frontend/ s3://your-bucket-name/ --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

### Backend — Docker + AWS ECS (Fargate)

```bash
# Build the Docker image
cd backend
docker build -t uniguide-api:latest .

# Push to ECR (Elastic Container Registry)
aws ecr get-login-password --region eu-central-1 | docker login --username AWS --password-stdin <account>.dkr.ecr.eu-central-1.amazonaws.com
docker tag uniguide-api:latest <account>.dkr.ecr.eu-central-1.amazonaws.com/uniguide-api:latest
docker push <account>.dkr.ecr.eu-central-1.amazonaws.com/uniguide-api:latest
```

### CI/CD — GitHub Actions

The repository includes a `.github/workflows/ci.yml` pipeline that automatically:

1. ✅ **Lint** — ESLint on both frontend and backend
2. 🧪 **Test** — Jest (frontend + backend) with coverage gating
3. 🏗️ **Build** — `ng build --prod` + `nest build`
4. 🚀 **Deploy** — Push Docker image to ECR + S3 sync on merge to `main`

### Environment Variables (Production)

All production secrets are stored in **AWS Secrets Manager** and injected at container startup — never committed to source control.

---

## 🤝 Contribution Guidelines

We welcome contributions from developers of all experience levels. Please read the following before opening a PR:

### Getting Started

1. **Fork** this repository
2. **Clone** your fork locally
3. **Create** a feature branch from `develop`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Commit** using [Conventional Commits](https://www.conventionalcommits.org/):
   ```bash
   git commit -m "feat(quiz): add multi-language support for quiz questions"
   git commit -m "fix(auth): resolve token refresh race condition"
   git commit -m "docs(api): update Swagger examples for college endpoints"
   ```
5. **Push** and open a Pull Request against `develop`

### Code Standards

- All new code must be written in **TypeScript** (no `any` without justification)
- Frontend components must follow the **Angular standalone component** pattern with signals
- Backend services must follow the **NestJS module + service + controller** pattern
- All new features must include tests achieving **≥ 80% coverage**
- Run `npm run lint` before committing — PRs with lint errors will not be merged

### Branch Strategy

| Branch | Purpose |
|:---|:---|
| `main` | Production — auto-deploys on merge |
| `develop` | Integration branch — all PRs target here |
| `feature/*` | New features |
| `fix/*` | Bug fixes |
| `chore/*` | Tooling, dependencies, config updates |

### Pull Request Checklist

Before submitting your PR, ensure:

- [ ] Code follows project conventions and passes linting
- [ ] New functionality is covered by unit or integration tests
- [ ] All existing tests still pass (`npm test`)
- [ ] The PR description clearly explains **what** and **why**
- [ ] Any new environment variables are added to `.env.example`

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2026 UniGuide

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

See the [LICENSE](LICENSE) file for the full legal text.

---

<div align="center">

<br/>

**UniGuide**

*Built with precision, tested with rigor, deployed for scale.*

`Angular (latest)` · `NestJS (latest)` · `PostgreSQL (latest)` · `TypeScript (latest)`

---

*© 2026 UniGuide Platform. All rights reserved.*

<br/>

</div>