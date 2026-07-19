# Authentication Module Documentation

The Authentication Module manages user identity, registration, login, and multi-factor authentication (OTP) for the FuturePath platform.

## ── Endpoints ──

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/auth/register` | Register a new student account | No |
| `POST` | `/auth/login` | Authenticate with email and password | No |
| `POST` | `/auth/otp/send` | Request a one-time password to email | No |
| `POST` | `/auth/otp/verify` | Verify email ownership via OTP | No |
| `POST` | `/auth/refresh` | Obtain a new Access Token using a Refresh Token | Yes (Refresh) |
| `POST` | `/auth/logout` | Invalidate current session | Yes |

---

## ── Data Structures (DTOs) ──

### RegisterDto
- `email`: string (required)
- `password`: string (min 8 chars)
- `firstName`: string
- `lastName`: string

### LoginDto
- `email`: string (required)
- `password`: string (required)

---

## ── Flow Details ──

### 1. Registration Flow
1. Client sends `POST /auth/register` with user details.
2. Server creates a user entity and returns success.
3. (Optional) OTP verification may be required depending on environment configuration.

### 2. Login Flow
- Returns a JWT `accessToken` and a `refreshToken`.
- The `accessToken` should be included in the `Authorization: Bearer <token>` header for subsequent requests.

### 3. Token Management
- **Access Token**: Short-lived (default 15m).
- **Refresh Token**: Long-lived (default 7d).

---

## ── Security ──
- **Password Hashing**: Uses `bcrypt` for secure storage.
- **JWT**: Signed with `JWT_SECRET` from environment variables.
- **Validation**: Strict input validation using `class-validator` and `joi`.
