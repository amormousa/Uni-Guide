# 🚀 UniGuide Backend Documentation

**UniGuide Backend** is a high-performance, modular API built with **NestJS**, designed to power an AI-driven university guidance platform.

---

## 🏗️ Architecture Overview

The backend follows a **Decoupled Three-Tier Architecture**:

1.  **API Layer (NestJS)**: Handles HTTP requests, validation (class-validator), and business logic.
2.  **Data Access Layer (TypeORM)**: Manages communication with PostgreSQL.
3.  **Caching & Queue Layer (Redis)**: Handles session caching and background jobs (like email queues).

---

## 🔐 Authentication & Security

We use a modern, secure authentication flow based on **JWT (JSON Web Tokens)** and **Email-OTP verification**.

### 1. Registration Flow
- User submits `RegisterDto` (Name, Email, Password, Role).
- Backend hashes password using **Bcrypt (12 rounds)**.
- User is created with `isVerified: false`.
- A 6-digit OTP is generated and stored in the `otps` table.
- **Nodemailer** sends a branded HTML email to the user.

### 2. OTP Verification
- User submits the 6-digit code.
- Backend validates the code and expiry time (10 minutes).
- User is marked `isVerified: true`.
- Tokens are issued.

### 3. JWT Structure
We include essential user data in the JWT payload to minimize API calls from the frontend.
```json
{
  "sub": "user-uuid",
  "email": "user@example.com",
  "name": "Ahmed Hassan",
  "role": "student",
  "iat": 1234567890,
  "exp": 1234567890
}
```

---

## 📁 Module Structure

| Module | Responsibility |
| :--- | :--- |
| **Auth** | Login, Register, OTP management, JWT strategies (Access & Refresh). |
| **Users** | Profile management, role-based access control. |
| **Colleges** | CRUD and advanced search/filtering for 500+ Egyptian colleges. |
| **Quiz** | AI personality quiz processing and result calculation. |
| **AI** | Proxy/Gateway to the Python AI service (LLM & Salary prediction). |
| **Notifications**| Centralized service for Email/SMS delivery. |

---

## ⚙️ Setup & Configuration

### Environment Variables (.env)
You must configure these variables for the backend to function correctly:

```env
# Database
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_NAME=uniguide_db

# JWT
JWT_SECRET=min_32_characters_secret
JWT_REFRESH_SECRET=another_long_secret
JWT_EXPIRES_IN=15m

# Email (Nodemailer)
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USER=your_gmail@gmail.com
MAIL_PASS=your_google_app_password
```

### 🛠️ Development Commands

| Command | Description |
| :--- | :--- |
| `npm run start:dev` | Start NestJS in watch mode (hot-reload). |
| `npm run build` | Compile TypeScript to JavaScript for production. |
| `npm run migration:run`| Apply database schema changes. |
| `npm run test` | Run unit tests with Jest. |

---

## 📡 Core API Endpoints

### Auth
- `POST /api/auth/register` - Create account & send OTP.
- `POST /api/auth/login` - Authenticate & get tokens.
- `POST /api/auth/otp/verify` - Verify email & activate account.
- `POST /api/auth/refresh` - Get new access token using refresh token.

### Users
- `GET /api/users/me` - Get current authenticated user profile.

---

## ⚠️ Common Gotchas (TypeScript)

### Strict Initialization
In DTO files, you might see the `!` operator:
```typescript
email!: string;
```
This is a **Definite Assignment Assertion**. Since NestJS populates these fields at runtime (not via constructor), we use `!` to tell TypeScript that the value will definitely be present.

---

**UniGuide Backend Team**  
*Last Updated: May 2026*
