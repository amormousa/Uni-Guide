<div align="center">

<img src="https://img.shields.io/badge/🎓-مصر_للجامعات-1a6be0?style=for-the-badge&labelColor=050d1f" alt="Logo" height="40"/>

# مصر للجامعات — Egypt College AI Platform

**اختار مستقبلك بذكاء**

> منصة ذكاء اصطناعي متكاملة تحلل ميول الطالب وتقترح الكلية والتخصص والجامعة المناسبة مع Roadmap واضح للمسار المهني

<br/>

![Version](https://img.shields.io/badge/version-1.0-1a6be0?style=for-the-badge&logo=semver&logoColor=white)
![Status](https://img.shields.io/badge/status-Startup--Ready-00c8e8?style=for-the-badge&logo=statuspage&logoColor=white)
![Screens](https://img.shields.io/badge/screens-25-0ea57a?style=for-the-badge&logo=figma&logoColor=white)
![AI Models](https://img.shields.io/badge/AI_Models-5-8250dc?style=for-the-badge&logo=openai&logoColor=white)
![Target](https://img.shields.io/badge/target-700K+_students-e0a51a?style=for-the-badge&logo=target&logoColor=white)

<br/>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=three.js&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=flat-square&logo=next.js&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)

</div>

---

## 📑 Table of Contents

<details>
<summary><strong>Click to expand</strong></summary>

- [📋 Project Overview](#-project-overview)
- [⚡ Problem & Solution](#-problem--solution)
- [💡 Core Value Propositions](#-core-value-propositions)
- [🎨 Design System](#-design-system)
- [📱 Screen Inventory (25 Screens)](#-screen-inventory-25-screens)
- [🔄 User Journey (UX Flow)](#-user-journey-ux-flow)
- [🏗️ Information Architecture](#️-information-architecture)
- [⚛️ Frontend Architecture](#️-frontend-architecture)
- [⚙️ Backend Architecture](#️-backend-architecture)
- [🗄️ Database Design](#️-database-design)
- [🤖 AI System Architecture](#-ai-system-architecture)
- [📊 Analytics Dashboard](#-analytics-dashboard)
- [🚀 MVP Roadmap](#-mvp-roadmap)
- [💰 Cost & Revenue Model](#-cost--revenue-model)
- [📈 Scaling Strategy](#-scaling-strategy)
- [📅 Key Milestones](#-key-milestones)
- [🗂️ Current File Structure](#️-current-file-structure)
- [🛠️ Getting Started](#️-getting-started)
- [🔧 Code Deep Dive](#-code-deep-dive)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

</details>

---

## 📋 Project Overview

**مصر للجامعات** is a comprehensive AI-powered platform designed to help Egyptian high school students choose the right college, major, and university. The platform leverages **5 integrated AI models** to analyze student interests and deliver personalized recommendations.

| Detail | Info |
|:---|:---|
| **Project Name** | مصر للجامعات — AI Platform |
| **Version** | `v1.0` Startup-Ready |
| **Target Market** | 700,000+ high school students annually in Egypt |
| **Total Screens** | 25 fully designed screens |
| **AI Models** | 5 integrated AI models |
| **MVP Timeline** | 20 weeks |
| **Expansion** | MENA-ready |
| **Language** | Arabic-first (RTL) |

---

## ⚡ Problem & Solution

### 🔴 The Problem

Over **700,000 students** graduate from high school every year in Egypt without access to data-driven guidance for choosing their college. Decisions are made based on family opinions or peer pressure — not on the student's actual abilities and interests.

### 🟢 The Solution

An AI platform that analyzes a student's interests, grades, and behavior to recommend the best-fit college, major, and university — complete with a clear career roadmap.

| Feature | Description |
|:---|:---|
| **AI Quiz** | 15-question personality & aptitude assessment |
| **AI Chatbot** | 24/7 smart assistant in Arabic |
| **Salary Predictor** | ML-powered future salary forecasting |
| **Career Path** | Visual career roadmap from college to employment |

### 🎯 Target Market

Primary: Egyptian high school students and parents — **700K+ students/year**.  
Expansion: **MENA region** (Saudi Arabia, UAE, Jordan, Morocco).

---

## 💡 Core Value Propositions

| Feature | Description |
|:---|:---|
| 🤖 **AI Matching** | Personalized recommendations based on Quiz + real-time behavioral data |
| 📊 **Real Data** | Actual tuition fees, job opportunities, and market salaries — updated quarterly |
| 👨‍👩‍👧 **Parent Layer** | Dedicated dashboard for parents to track progress and co-own the decision |
| 🗺️ **Career Path** | End-to-end career roadmap from enrollment to job market |
| 💬 **AI Chatbot** | Arabic-first smart assistant with 24/7 availability |
| 💰 **Salary Predictor** | ML-based salary projections by major, university, and experience level |

---

## 🎨 Design System

### Color Palette

| Swatch | Token | Hex | Usage |
|:---:|:---|:---|:---|
| 🔵 | `--blue` | `#1a6be0` | Primary buttons, links, active states |
| 💎 | `--cyan` | `#00c8e8` | Accent highlights, icons, emphasis text |
| 🌿 | `--teal` | `#0ea57a` | Success states, positive metrics |
| 🟡 | `--amber` | `#e0a51a` | Warnings, secondary elements |
| 🟠 | `--red` | `#e05c1a` | Errors, critical alerts |
| 🟣 | `--purple` | `#8250dc` | AI features, premium indicators |
| 🌑 | `--navy` | `#050d1f` | Primary background |
| 🌒 | `--navy2` | `#0a1628` | Secondary background |
| 🌓 | `--navy3` | `#0f1e36` | Card backgrounds |

### CSS Custom Properties

```css
:root {
  /* ── Backgrounds ── */
  --navy:       #050d1f;
  --navy2:      #0a1628;
  --navy3:      #0f1e36;

  /* ── Brand Colors ── */
  --blue:       #1a6be0;
  --blue2:      #2a7ff0;
  --cyan:       #00c8e8;
  --cyan2:      #00e5ff;
  --teal:       #0ea57a;
  --amber:      #e0a51a;
  --red:        #e05c1a;

  /* ── Typography ── */
  --text:       #e8f0ff;
  --text2:      #8ba4cc;
  --text3:      #4d6a99;

  /* ── Glass Effects ── */
  --glass:      rgba(255, 255, 255, 0.04);
  --glass2:     rgba(255, 255, 255, 0.08);
  --glass3:     rgba(255, 255, 255, 0.12);

  /* ── Borders ── */
  --border:     rgba(0, 180, 255, 0.12);
  --border2:    rgba(0, 180, 255, 0.22);

  /* ── Shadows ── */
  --glow:       0 0 40px rgba(26, 107, 224, 0.25);
  --glow2:      0 0 60px rgba(0, 200, 232, 0.2);

  /* ── Geometry ── */
  --radius:     16px;
  --radius2:    24px;

  /* ── Fonts ── */
  --font:       'Cairo', system-ui, sans-serif;
  --mono:       'IBM Plex Mono', monospace;

  /* ── Layout ── */
  --nav-h:      68px;
}
```

### Typography

| Font | Weights | Usage |
|:---|:---|:---|
| **Cairo** | 300, 400, 500, 600, 700, 900 | Arabic headings & body text |
| **IBM Plex Mono** | 400, 500 | Code snippets & technical numbers |

### Spacing Scale

- **Base unit:** `4px`
- **Scale:** `4 → 8 → 12 → 16 → 24 → 32 → 48 → 64 → 80px`

### Border Radius Tokens

| Size | Value | Usage |
|:---|:---|:---|
| Small | `8px` | Buttons, inputs |
| Medium | `16px` | Standard cards |
| Large | `24px` | Feature panels |
| Pill | `9999px` | Pills, badges |

---

## 📱 Screen Inventory (25 Screens)

### 🔐 Auth Flow — Screens 1–5

<details>
<summary><strong>01 · Splash / Onboarding</strong></summary>

- 3 animated illustrative slides introducing the platform
- CTA buttons: "ابدأ الآن" (Start Now) and "سجل دخول" (Login)
- Design: animated illustrations, dark navy background, blue gradient accents
- Interaction: 3 swipeable slides

</details>

<details>
<summary><strong>02 · Registration</strong></summary>

- **Fields:** Name, Egyptian phone (+20), Governorate (27 options), Account type (Student/Parent), Password
- **Design:** Glassmorphism style

</details>

<details>
<summary><strong>03 · OTP Verification</strong></summary>

- 6-digit OTP input with auto-focus progression
- 60-second countdown timer + resend button
- Success animation on correct code

</details>

<details>
<summary><strong>04 · Student Profile Setup</strong></summary>

- Section selector (Science / Arts / Commerce)
- High school score input (0–410)
- Multi-select interests chips
- Progress bar for profile completeness

</details>

<details>
<summary><strong>05 · Login</strong></summary>

- Phone + Password fields
- Forgot password, Google OAuth, Biometric toggle, Remember me

</details>

---

### 🏠 Core Platform — Screens 6–15

<details>
<summary><strong>06 · Home Dashboard</strong></summary>

- Personalized greeting with student name
- Top 3 AI-recommended colleges (horizontal scrollable cards with match %)
- Quick actions: Take Quiz, Find Colleges, Saved, Chat AI

</details>

<details>
<summary><strong>07 · University Finder</strong></summary>

- **Filters:** Governorate, Type (Public/Private/National), Score range, Fee range
- Search bar + sort + result cards (match %, fees, employment rate)

</details>

<details>
<summary><strong>08 · College Details</strong></summary>

- Hero image, stats (fees, min score, employment rate, avg salary)
- Specializations list, admission steps, student reviews, similar colleges
- Save button with heart animation

</details>

<details>
<summary><strong>09 · AI Quiz</strong></summary>

- 15 questions — one per screen, 4 card-based choices with icons
- Animated progress bar + Previous/Next navigation + time estimate

</details>

<details>
<summary><strong>10 · Quiz Results</strong></summary>

- Personality type reveal with animation
- Top 10 college recommendations with match % bars and explanations

</details>

<details>
<summary><strong>11 · Compare Colleges</strong></summary>

- Side-by-side comparison table for 2–3 colleges
- Rows: Fees, Score, Employment %, Avg Salary, Location, Specializations
- Best-in-class highlighting (green)

</details>

---

### 🤖 AI Features — Screens 16–22

<details>
<summary><strong>16 · AI Chatbot</strong></summary>

- Full Arabic chat interface with streaming text animation
- Suggested question chips, inline college recommendation cards
- RTL chat bubble design

</details>

<details>
<summary><strong>17 · Salary Predictor</strong></summary>

- **Inputs:** Specialization, University type, Years of experience (slider 0–20)
- **Output:** Animated bar chart — Min / Median / Max salary in EGP

</details>

<details>
<summary><strong>18 · Career Path</strong></summary>

- Visual timeline: College → Internship → First Job → Growth → Senior Roles
- Each stage: required skills, salary range, timeline

</details>

<details>
<summary><strong>19 · Learning Roadmap</strong></summary>

- Skills tree visualization, recommended courses with platform logos
- Progress tracking + bookmarking

</details>

<details>
<summary><strong>20 · Alternative Recommendations</strong></summary>

- Triggered when student score is below minimum
- 5 alternatives with similarity score and explanation — encouraging tone

</details>

<details>
<summary><strong>21 · Scholarships</strong></summary>

- Scholarship database with filters (score range, financial need, major, location)
- Each entry: amount, deadline, requirements, eligibility %

</details>

---

### 👨‍👩‍👧 Parent & Admin — Screens 23–25

<details>
<summary><strong>23 · Parent Dashboard</strong></summary>

- Child activity tracking: Quiz results, saved colleges, usage time
- Insights: most viewed colleges, personality type, notification settings

</details>

<details>
<summary><strong>24 · Admin Analytics</strong></summary>

- **KPIs:** Total users, DAU, Quiz completions, Revenue
- **Charts:** User growth (line), College interest (pie), Egypt heatmap, AI satisfaction

</details>

<details>
<summary><strong>25 · Admission Steps</strong></summary>

- Step-by-step admission guide per college
- Interactive checklist, important dates calendar, official links, progress tracker

</details>

---

## 🔄 User Journey (UX Flow)

```
┌──────────────────────────────────────────────────────────────────┐
│                      Student Journey                             │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ① Onboarding & Registration                                    │
│     Sign up → OTP verification → Complete profile                │
│           │                                                      │
│           ▼                                                      │
│  ② AI Quiz                                                       │
│     15 personality questions → Instant results + Top 10 matches  │
│           │                                                      │
│           ▼                                                      │
│  ③ Explore & Discover                                            │
│     Search → Filter → Compare → Save favorites → Details         │
│           │                                                      │
│           ▼                                                      │
│  ④ Deep Dive with AI                                             │
│     AI Chatbot → Salary Predictor → Career Path                  │
│           │                                                      │
│           ▼                                                      │
│  ⑤ Decision & Action                                             │
│     Admission Steps → Scholarships → Share with parent           │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

### Navigation Architecture

| Layer | Elements |
|:---|:---|
| **Primary** | Home · Explore · Quiz · AI Chat · Profile |
| **Secondary (Contextual)** | College Details → Compare → Save → Admission Steps |
| **Parent Portal** | Separate role-based routing with shared auth system |
| **Admin Panel** | Protected `/admin` route — admin role only |

---

## 🏗️ Information Architecture

```
/ (Root)
├── /auth
│   ├── /login                 ← Login
│   ├── /register              ← Registration
│   └── /otp-verify            ← OTP verification
│
├── /app (Protected)           ← Requires authentication
│   ├── /dashboard             ← Home
│   ├── /quiz                  ← AI Quiz (15 questions)
│   ├── /quiz/results          ← Quiz results
│   ├── /colleges              ← University finder
│   ├── /colleges/:id          ← College details
│   ├── /colleges/compare      ← Side-by-side comparison
│   ├── /saved                 ← Saved colleges
│   ├── /chat                  ← AI Chatbot
│   ├── /salary                ← Salary Predictor
│   ├── /career/:id            ← Career path by major
│   ├── /scholarships          ← Scholarship database
│   └── /profile               ← User profile
│
├── /parent
│   └── /parent/dashboard      ← Parent control panel
│
└── /admin
    └── /admin/analytics       ← Admin analytics dashboard
```

---

## ⚛️ Frontend Architecture

### Tech Stack

| Technology | Purpose |
|:---|:---|
| **Next.js 14** (App Router) | Framework — SSR + SSG + API Routes |
| **TypeScript** | Type safety across the codebase |
| **Tailwind CSS** | Utility-first CSS framework |
| **Shadcn/UI** | Customizable component library |
| **Zustand** | Lightweight state management |
| **React Query** | Server state, caching, background refetching |
| **Framer Motion** | Professional animations |
| **Recharts** | Data visualization charts |
| **Three.js** | 3D background effects |
| **i18next** | Internationalization (Arabic-first) |

### Folder Structure

```
src/
├── app/                  ← Next.js App Router pages
├── components/
│   ├── ui/               ← Shadcn UI (Button, Card, Input…)
│   ├── college/           ← College-specific components
│   ├── quiz/              ← Quiz flow components
│   └── ai/                ← AI features (Chat, Salary, Career)
├── lib/                   ← Utility functions + API client
├── hooks/                 ← Custom React hooks
├── store/                 ← Zustand stores
└── types/                 ← TypeScript type definitions
```

### State Management — Zustand Stores

| Store | Responsibility |
|:---|:---|
| `useAuthStore` | Authentication state — login / logout / user data |
| `useQuizStore` | Quiz answers + results + personality type |
| `useCollegeStore` | Saved colleges + comparison + filters |
| `useChatStore` | AI Chatbot conversations + history |

### Data Fetching — React Query

- **Automatic caching** with server state management
- **Background refetch** for live data updates
- **Optimistic updates** for snappy UX
- **Streaming support** for AI chat responses

### Performance Optimizations

| Strategy | Benefit |
|:---|:---|
| ⚡ Next.js Image | Automatic image optimization |
| ⚡ Dynamic Imports | Lazy-load heavy components |
| ⚡ Virtualized Lists | Efficient rendering for long lists |
| ⚡ Service Worker | Offline-first support |

### Internationalization

- **Arabic-first** — `dir="rtl"` on root element
- **i18next** for dynamic string localization
- **Cairo font** as the primary Arabic typeface

### Testing Strategy

| Type | Tool |
|:---|:---|
| Unit Tests | Vitest + React Testing Library |
| E2E Tests | Playwright |
| Component Docs | Storybook |

---

## ⚙️ Backend Architecture

### Tech Stack

| Technology | Purpose |
|:---|:---|
| **Node.js 20 LTS** | Runtime environment |
| **Express.js** | Web framework |
| **TypeScript** | Type safety |
| **PostgreSQL 16** | Primary database |
| **Redis 7** | Caching, queues, sessions |
| **Prisma ORM** | Database client + migrations |
| **JWT + Refresh Tokens** | Authentication |
| **Bull.js** | Background job queues |
| **Socket.io** | Real-time notifications |
| **AWS S3** | File storage |

### Architecture Pattern

**Monolith-first → Microservices-ready**

```
┌──────────────────────────────────────────────────────┐
│                    API Gateway                        │
├──────────┬──────────┬──────────┬──────────┬──────────┤
│  Auth    │ College  │    AI    │  Notif.  │Analytics │
│ Service  │ Service  │ Service  │ Service  │ Service  │
│(Node.js) │(Node.js) │(Python)  │(Node.js) │(Node.js) │
└──────────┴──────────┴──────────┴──────────┴──────────┘
```

### API Endpoints

#### 🔐 Auth APIs

| Method | Endpoint | Description |
|:---|:---|:---|
| `POST` | `/api/auth/register` | Register new user |
| `POST` | `/api/auth/login` | Login — returns JWT + refresh token |
| `POST` | `/api/auth/otp/send` | Send OTP to mobile |
| `POST` | `/api/auth/otp/verify` | Verify OTP code |

#### 🤖 AI APIs

| Method | Endpoint | Description |
|:---|:---|:---|
| `POST` | `/api/ai/quiz/submit` | Submit quiz answers → AI recommendations (Top 10) |
| `POST` | `/api/ai/chat` | AI Chatbot — Server-Sent Events streaming |
| `POST` | `/api/ai/salary-predict` | Salary prediction (XGBoost ML model) |
| `GET` | `/api/ai/roadmap/:studentId` | Personalized career roadmap |

---

## 🗄️ Database Design

**Engine:** PostgreSQL 16 + pgvector (AI embeddings) + Redis (caching layer)

### `users` — User Accounts 👤

| Column | Type | Description |
|:---|:---|:---|
| `id` **(PK)** | `UUID` | Unique identifier |
| `name` | `VARCHAR(100)` | Display name |
| `phone` | `VARCHAR(15)` | Egyptian mobile number |
| `role` | `ENUM(student, parent, admin)` | User role |
| `governorate` | `VARCHAR(50)` | Egyptian governorate |

### `colleges` — College Registry 🎓

| Column | Type | Description |
|:---|:---|:---|
| `id` **(PK)** | `UUID` | Unique identifier |
| `name_ar` | `VARCHAR(200)` | College name (Arabic) |
| `university_id` **(FK)** | `UUID → universities` | University relation |
| `type` | `ENUM(gov, private, national)` | Institution type |
| `min_score` | `DECIMAL(5,2)` | Minimum admission score |
| `annual_fees` | `INTEGER` | Annual tuition in EGP |
| `employment_rate` | `DECIMAL(5,2)` | Graduate employment % |

### `quiz_sessions` — Quiz Sessions 📝

| Column | Type | Description |
|:---|:---|:---|
| `id` **(PK)** | `UUID` | Unique identifier |
| `student_id` **(FK)** | `UUID → users` | Student relation |
| `answers` | `JSONB` | All 15 question answers |
| `personality_type` | `VARCHAR(50)` | Determined personality type |

### `ai_recommendations` — AI Recommendations 🤖

| Column | Type | Description |
|:---|:---|:---|
| `id` **(PK)** | `UUID` | Unique identifier |
| `student_id` **(FK)** | `UUID → users` | Student relation |
| `college_id` **(FK)** | `UUID → colleges` | College relation |
| `match_score` | `DECIMAL(5,2)` | Match percentage (0–100) |
| `reasons` | `JSONB` | Recommendation rationale (Arabic) |

### Entity Relationship Diagram

```
users ──────────┐
  │              │
  │ 1:N          │ 1:N
  ▼              ▼
quiz_sessions   ai_recommendations
                     │
                     │ N:1
                     ▼
                 colleges
                     │
                     │ N:1
                     ▼
                universities
```

---

## 🤖 AI System Architecture

### Model 1 — Recommendation Engine

| Attribute | Detail |
|:---|:---|
| **Type** | Hybrid (Content-based + Collaborative Filtering + LLM reranking) |
| **Stack** | Python FastAPI → Scikit-learn → GPT-4o reranking |
| **Target Accuracy** | 82%+ user satisfaction rate |
| **Function** | Analyze student data (Quiz + behavior) → rank Top 10 colleges |

### Model 2 — Arabic AI Chatbot (RAG)

| Attribute | Detail |
|:---|:---|
| **Type** | Retrieval Augmented Generation |
| **LLM** | GPT-4o |
| **Vector DB** | pgvector (PostgreSQL extension) |
| **Streaming** | Server-Sent Events |
| **Function** | Smart Arabic assistant answering student questions over Egyptian college data |

### Model 3 — Salary Predictor

| Attribute | Detail |
|:---|:---|
| **Type** | Gradient Boosting Regressor (XGBoost) |
| **Training Data** | Egyptian job market dataset |
| **Features** | `college_type`, `specialization`, `governorate`, `years_exp` |
| **Output** | Predicted salary in EGP (Min / Median / Max) |

### Model 4 — Alternative Recommendations

| Attribute | Detail |
|:---|:---|
| **Type** | Rule-based + ML |
| **Function** | Similarity scoring between colleges (subjects, careers, fees) |
| **Trigger** | Activated when student score is below a college's minimum |

### Model 5 — Behavior Tracking

| Attribute | Detail |
|:---|:---|
| **Type** | Real-time event tracking |
| **Pipeline** | Events → Redis queue → Async processing → Update preference vector → Rerank recommendations |
| **Function** | Track student behavior (views, time-on-page, saves) to refine suggestions |

---

## 📊 Analytics Dashboard

### Key KPIs

| Metric | Value (Demo) | Description |
|:---|:---:|:---|
| 👥 Total Students | **12,450** | Registered students |
| 📝 Quiz Completion | **87%** | Students who completed the full quiz |
| 🎓 Avg Saved | **3.2** | Average saved colleges per student |
| 💬 AI Messages | **4.1M** | Total AI Chatbot messages |

### Charts & Visualizations

| Report | Details |
|:---|:---|
| **Student Interests** | Pie chart — Distribution across colleges with drill-down by governorate & gender |
| **Regional Trends** | Egypt heatmap — Most searched colleges per governorate |
| **Salary Trends** | Line chart — Avg salary by major + 3-year prediction |
| **AI Performance** | Recommendation accuracy, chatbot satisfaction, avg tokens/session, cost tracking |

---

## 🚀 MVP Roadmap

### 20 Weeks — From Idea to Launch

#### Phase 1 — Foundation 🔵 (Weeks 1–4)

| Week | Tasks |
|:---|:---|
| **1–2** | Project setup: Next.js + Backend boilerplate, DB schema, CI/CD pipeline |
| **3–4** | Auth flow (Screens 1–5), JWT + Refresh tokens, OTP integration |

#### Phase 2 — Core Features 🟢 (Weeks 5–10)

| Week | Tasks |
|:---|:---|
| **5–6** | Home Dashboard, University Finder, College Details, DB seeding (500+ colleges) |
| **7–10** | AI Quiz, Compare, Saved, Career Path, Admission Steps |

#### Phase 3 — AI Features 🔴 (Weeks 11–16)

| Week | Tasks |
|:---|:---|
| **11–12** | AI Chatbot (RAG), Arabic NLP, streaming interface |
| **13–16** | Salary Predictor, Alternative Recommendations, Parent Dashboard |

#### Phase 4 — Polish & Launch 🟡 (Weeks 17–20)

| Week | Tasks |
|:---|:---|
| **17–18** | Analytics Dashboard, Performance optimization, RTL QA, User testing (50 students) |
| **19–20** | Beta launch (1,000 students), App Store submission, Marketing campaign |

---

## 💰 Cost & Revenue Model

### Monthly Operating Costs

| Item | Cost |
|:---|---:|
| Infrastructure (AWS/GCP) | ~4,500 EGP |
| AI API (OpenAI/Gemini) | ~8,000 EGP |
| SMS OTP | ~2,000 EGP |
| **Monthly Total** | **~17,000 EGP** |

### Revenue Streams

| Stream | Model | Pricing |
|:---|:---|:---|
| 🎯 **Freemium (B2C)** | Monthly student subscription | 99 EGP/month |
| 🏫 **B2B Schools** | School subscriptions | 2,000 EGP/school |
| 🎓 **University Ads** | Sponsored placement slots | Per campaign |
| 📊 **Data Insights** | Annual market reports | Per report |

---

## 📈 Scaling Strategy

### 0 → 1M Users in 3 Years

#### Year 1 — Egypt MVP (0 → 50K)

- ✅ Single-region AWS (Cairo)
- ✅ Monolith → microservices-ready
- ✅ Focus: product-market fit
- 🎯 Target: 50K students

#### Year 2 — Egypt Scale (50K → 500K)

- ✅ Microservices split
- ✅ Redis cluster + DB read replicas
- ✅ Mobile app (React Native)
- 🎯 B2B: 2,000+ schools

#### Year 3 — MENA Expansion (500K → 1M+)

- 🌍 Saudi Arabia
- 🌍 UAE + Jordan
- 🌍 Morocco
- 💰 Series A target: **$3M**

---

## 📅 Key Milestones

| Month | Event |
|:---|:---|
| **Month 5** | MVP Launch — 1,000 beta users — first real feedback |
| **Month 8** | 10,000 users — B2B school partnerships — first revenue |
| **Month 12** | 50,000 users — Profitability — Seed funding preparation |
| **Month 18** | Mobile app launch, 200K users, Seed funding closes |
| **Month 30** | MENA expansion, 1M+ users across 4 countries, Series A: $3M |

---

## 🗂️ Current File Structure

```
uniapp/
├── index.html              ← Main application file (HTML + CSS + JS)
├── README.md               ← This document — comprehensive project documentation
└── .git/                   ← Git version control
```

### `index.html` — Main Application (1,742 lines)

This is a **single-page application** prototype containing everything in one file:

| Section | Lines | Content |
|:---|:---|:---|
| **CSS** | 10 → 1147 | Complete design system & styles |
| **HTML** | 1149 → 1613 | All screens & page content |
| **JavaScript** | 1615 → 1739 | Navigation + Three.js + interactions |

> **Note:** This is a prototype / documentation app. The production application will be built with **Next.js 14** as detailed in the tech stack above.

---

## 🛠️ Getting Started

### Quick Start (Current Prototype)

```bash
# Clone the repository
git clone https://github.com/your-username/uniapp.git
cd uniapp

# Open in browser — that's it!
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Production Setup (Future Build)

```bash
# ── Frontend ──
npx create-next-app@latest uniapp-frontend --typescript --tailwind --app
cd uniapp-frontend
npm install zustand @tanstack/react-query framer-motion recharts three i18next

# ── Backend ──
mkdir uniapp-backend && cd uniapp-backend
npm init -y
npm install express typescript prisma @prisma/client jsonwebtoken bcryptjs bull redis socket.io
npx prisma init
```

---

## 🔧 Code Deep Dive

### File Layout Overview

```
Line 1          → <!DOCTYPE html> + page opening
Line 2          → <html lang="ar" dir="rtl"> — Arabic RTL
Lines 3–9       → <head> — meta tags + Google Fonts + Three.js CDN
Lines 10–1147   → <style> — complete CSS design system
Line 1149       → <body>
Line 1151       → Three.js Canvas (animated 3D background)
Lines 1159–1194 → Topbar / Fixed navigation
Lines 1197–1225 → Mobile navigation overlay
Line 1227       → <main> — main content begins
Lines 1230–1348 → Page 1: Vision
Lines 1351–1392 → Page 2: Screens
Lines 1395–1442 → Page 3: UX Flow
Lines 1445–1480 → Page 4: Frontend Architecture
Lines 1483–1513 → Page 5: Backend Architecture
Lines 1516–1525 → Page 6: Database Architecture
Lines 1528–1538 → Page 7: AI System Design
Lines 1541–1558 → Page 8: Analytics Dashboard
Lines 1561–1575 → Page 9: MVP Roadmap
Lines 1578–1595 → Page 10: Scaling Strategy
Lines 1599–1613 → Footer
Lines 1615–1689 → Three.js 3D Background (JavaScript)
Lines 1692–1708 → Navigation System (JavaScript)
Lines 1711–1729 → Mobile Nav Controls (JavaScript)
Lines 1732–1738 → 3D Card Mouse Tracking (JavaScript)
```

---

### 🎨 CSS Highlights

<details>
<summary><strong>1. Reset & CSS Variables (Lines 11–39)</strong></summary>

```css
/* Universal reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Design tokens */
:root {
  --navy: #050d1f;    /* Background */
  --blue: #1a6be0;    /* Primary */
  --cyan: #00c8e8;    /* Accent */
  /* … full variable list above … */
}
```

</details>

<details>
<summary><strong>2. Fixed Navigation (Lines 60–168)</strong></summary>

```css
/* Fixed topbar with glassmorphism */
.topbar {
  position: fixed;
  height: var(--nav-h);           /* 68px */
  background: rgba(5, 13, 31, 0.92);
  backdrop-filter: blur(20px);
}

/*
  KEY FIX: RTL nav layout
  ────────────────────────────────────────────
  Original bug: margin-right:auto in RTL mode
  pushed nav left, stranding badges.

  Solution: flex:1 + min-width:0 — no auto margins.
*/
.topbar-nav {
  flex: 1;
  min-width: 0;
  overflow-x: auto;
}
```

</details>

<details>
<summary><strong>3. Hero Section (Lines 309–368)</strong></summary>

```css
.hero {
  min-height: 560px;
  background: radial-gradient(…); /* Radial glow effect */
}

.hero-title {
  font-size: clamp(36px, 5vw, 72px);       /* Fluid responsive */
  background: linear-gradient(135deg, #fff 30%, var(--cyan) 70%);
  -webkit-background-clip: text;             /* Gradient text */
}
```

</details>

<details>
<summary><strong>4. Glassmorphism Cards (Lines 465–509)</strong></summary>

```css
.card3d {
  background: rgba(255, 255, 255, 0.04);    /* Semi-transparent */
  border: 1px solid rgba(0, 180, 255, 0.12);
  border-radius: 24px;
}

.card3d:hover {
  transform: translateY(-4px) perspective(800px) rotateX(2deg);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}

/* Mouse-tracking light effect */
.card3d::after {
  background: radial-gradient(
    circle at var(--mx, 50%) var(--my, 50%),
    rgba(0, 200, 232, 0.06) 0%,
    transparent 60%
  );
}
```

</details>

<details>
<summary><strong>5. Responsive Breakpoints (Lines 1119–1146)</strong></summary>

```css
/* Tablet (≤ 1024px) — hide badges */
@media (max-width: 1024px) {
  .topbar-badges { display: none; }
}

/* Mobile (≤ 768px) — hamburger menu */
@media (max-width: 768px) {
  .topbar-nav { display: none; }
  .hamburger { display: flex; }
  .grid-2, .grid-3, .grid-4 {
    grid-template-columns: 1fr;
  }
}
```

</details>

---

### 🟨 JavaScript Highlights

<details>
<summary><strong>1. Three.js 3D Background (Lines 1617–1689)</strong></summary>

```javascript
const canvas = document.getElementById('bg-canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });

// 200 glowing particles
const particleCount = 200;

// 6 geometric shapes (Octahedron, Tetrahedron, Icosahedron)
// Slow rotation + mouse-driven movement

// Parallax camera tracking
camera.position.x += (mouseX * 3 - camera.position.x) * 0.02;

// Floor grid for depth perception
const gridHelper = new THREE.GridHelper(120, 30);
```

</details>

<details>
<summary><strong>2. Page Navigation System (Lines 1692–1708)</strong></summary>

```javascript
const pageMap = {
  vision: 0, screens: 1, ux: 2, frontend: 3, backend: 4,
  database: 5, ai: 6, dashboard: 7, roadmap: 8, scaling: 9
};

function showPage(id) {
  // 1. Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // 2. Deactivate all nav buttons
  document.querySelectorAll('.tnav-btn').forEach(b => b.classList.remove('active'));
  // 3. Show target page
  document.getElementById('page-' + id).classList.add('active');
  // 4. Activate corresponding nav button
  // 5. Smooth scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
```

</details>

<details>
<summary><strong>3. Mobile Navigation (Lines 1711–1729)</strong></summary>

```javascript
function openMobileNav() {
  document.getElementById('mobile-nav').classList.add('open');
  document.body.style.overflow = 'hidden';  // Lock body scroll
}

function closeMobileNav() {
  document.getElementById('mobile-nav').classList.remove('open');
  document.body.style.overflow = '';         // Restore scroll
}

// Also closes on backdrop tap or Escape key
```

</details>

<details>
<summary><strong>4. 3D Card Mouse Tracking (Lines 1732–1738)</strong></summary>

```javascript
document.querySelectorAll('.card3d').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    // Store mouse position as CSS custom properties
    card.style.setProperty('--mx', (x / width * 100) + '%');
    card.style.setProperty('--my', (y / height * 100) + '%');
    // CSS uses --mx and --my for the light-follow effect
  });
});
```

</details>

---

### 📄 HTML Structure

<details>
<summary><strong>Topbar Layout (Lines 1159–1194)</strong></summary>

```html
<!-- RTL layout (right → left):
     [Logo]  [←── Nav (flex:1, scrollable) ──→]  [Badges]  [Hamburger] -->

<header class="topbar">
  <!-- 1. Logo — always right in RTL -->
  <a class="topbar-logo">🎓 مصر للجامعات</a>

  <!-- 2. Desktop Nav — 10 navigation buttons -->
  <nav class="topbar-nav">
    <button>① Vision</button>
    <button>② Screens</button>
    <!-- … 8 more buttons … -->
  </nav>

  <!-- 3. Badges — hidden below 1024px -->
  <div class="topbar-badges">
    <span>v1.0 Startup-Ready</span>
    <span>25 Screens</span>
    <span>AI-Powered</span>
  </div>

  <!-- 4. Hamburger — mobile only -->
  <button class="hamburger">☰</button>
</header>
```

</details>

<details>
<summary><strong>Page System (Lines 1230–1595)</strong></summary>

```html
<!-- Pages are hidden divs; the .active class shows them -->
<div id="page-vision"   class="page active">…</div>  <!-- Visible -->
<div id="page-screens"  class="page">…</div>           <!-- Hidden -->
<div id="page-ux"       class="page">…</div>           <!-- Hidden -->
<!-- … 10 pages total … -->
```

</details>

---

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

<br/>

## 🎓 مصر للجامعات

**Startup-Ready v1.0**

Built with ❤️ for Egyptian Students

`Next.js 14` · `PostgreSQL` · `GPT-4o` · `AWS Cairo`

---

*© 2026 مصر للجامعات — AI Platform. All rights reserved.*

<br/>

</div>
