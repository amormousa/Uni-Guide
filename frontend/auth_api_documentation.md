# 🔐 FuturePath — Auth API Contract Documentation

> هذا الملف يوضح **كل الـ Endpoints** اللي الفرونت إند محتاجها من الباك إند لنظام المصادقة (Authentication)،
> مع شكل الداتا المرسلة والمستقبلة، وشكل الـ JWT Token.

---

## 📋 جدول المحتويات

| # | Endpoint | Method | الوصف |
|---|----------|--------|-------|
| 1 | `/api/auth/register` | `POST` | تسجيل مستخدم جديد |
| 2 | `/api/auth/login` | `POST` | تسجيل الدخول |
| 3 | `/api/auth/otp/send` | `POST` | إرسال كود OTP على الإيميل |
| 4 | `/api/auth/otp/verify` | `POST` | تأكيد كود OTP |
| 5 | `/api/auth/refresh` | `POST` | تجديد الـ Access Token |
| 6 | `/api/users/me` | `GET` | جلب بيانات المستخدم الحالي |

---

## 🌐 Base URL

| البيئة | URL |
|--------|-----|
| **Development** | `http://localhost:3000/api` |
| **Staging** | `https://staging-api.futurepath.com/api` |
| **Production** | `https://api.futurepath.com/api` |

---

## 📌 ملاحظات عامة (Global Notes)

- كل الـ Requests هي `Content-Type: application/json`
- الـ Frontend بيبعت Header اسمه `Accept-Language` فيه اللغة الحالية (`ar` / `en` / `fr`)
- الـ Endpoints المحمية لازم تاخد `Authorization: Bearer <accessToken>` في الـ Header
- الـ Endpoints اللي **مش محتاجة** Token: `/auth/register`, `/auth/login`, `/auth/otp/send`, `/auth/otp/verify`, `/auth/refresh`

---

## 1️⃣ POST `/api/auth/register`

> تسجيل مستخدم جديد — بعدها الفرونت يوجه المستخدم لصفحة OTP

### 📥 Request Body

```json
{
  "name": "أحمد محمد",
  "email": "ahmed@example.com",
  "password": "SecurePass123!",
  "role": "student",
  "governorate": "القاهرة"
}
```

| الحقل | النوع | مطلوب؟ | الشرح |
|-------|-------|--------|-------|
| `name` | `string` | ✅ نعم | اسم المستخدم — `minLength: 3` |
| `email` | `string` | ✅ نعم | البريد الإلكتروني — يجب أن يكون فريد |
| `password` | `string` | ✅ نعم | كلمة المرور — `minLength: 8` |
| `role` | `string` | ✅ نعم | نوع المستخدم — القيم المتاحة: `"student"` \| `"parent"` \| `"admin"` |
| `governorate` | `string` | ❌ لا | المحافظة (اختياري) |

### 📤 Response — `201 Created`

```json
{
  "message": "Registration successful. Please verify your email.",
  "userId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
}
```

| الحقل | النوع | الشرح |
|-------|-------|-------|
| `message` | `string` | رسالة نجاح |
| `userId` | `string` | الـ ID الخاص بالمستخدم اللي اتسجل (UUID) |

### ❌ Error Responses

```json
// 409 Conflict — إيميل مسجل قبل كده
{
  "statusCode": 409,
  "message": "Email already registered",
  "error": "Conflict"
}

// 400 Bad Request — بيانات ناقصة أو غلط
{
  "statusCode": 400,
  "message": ["name must be at least 3 characters", "email must be valid"],
  "error": "Bad Request"
}
```

---

## 2️⃣ POST `/api/auth/login`

> تسجيل الدخول — لو نجح بيرجع access + refresh tokens

### 📥 Request Body

```json
{
  "email": "ahmed@example.com",
  "password": "SecurePass123!"
}
```

| الحقل | النوع | مطلوب؟ | الشرح |
|-------|-------|--------|-------|
| `email` | `string` | ✅ نعم | البريد الإلكتروني |
| `password` | `string` | ✅ نعم | كلمة المرور — `minLength: 8` |

### 📤 Response — `200 OK`

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "dGhpcyBpcyBhIHJlZnJlc2ggdG9rZW4..."
}
```

| الحقل | النوع | الشرح |
|-------|-------|-------|
| `accessToken` | `string` | الـ JWT Access Token — بيتبعت مع كل request محمي |
| `refreshToken` | `string` | الـ Refresh Token — بيستخدم لتجديد الـ Access Token |

### ❌ Error Responses

```json
// 401 Unauthorized — إيميل أو باسورد غلط
{
  "statusCode": 401,
  "message": "Invalid email or password",
  "error": "Unauthorized"
}

// 403 Forbidden — الحساب مش متفعل
{
  "statusCode": 403,
  "message": "Email not verified. Please verify your email first.",
  "error": "Forbidden"
}
```

---

## 3️⃣ POST `/api/auth/otp/send`

> إرسال كود OTP مكون من 6 أرقام على الإيميل

### 📥 Request Body

```json
{
  "email": "ahmed@example.com"
}
```

| الحقل | النوع | مطلوب؟ | الشرح |
|-------|-------|--------|-------|
| `email` | `string` | ✅ نعم | الإيميل المراد إرسال الـ OTP عليه |

### 📤 Response — `200 OK`

```json
{
  "message": "OTP sent successfully to your email"
}
```

### ❌ Error Responses

```json
// 404 Not Found — الإيميل مش مسجل
{
  "statusCode": 404,
  "message": "User not found",
  "error": "Not Found"
}

// 429 Too Many Requests — طلبات كتير
{
  "statusCode": 429,
  "message": "Too many OTP requests. Please wait 60 seconds.",
  "error": "Too Many Requests"
}
```

---

## 4️⃣ POST `/api/auth/otp/verify`

> تأكيد كود الـ OTP — لو نجح بيرجع tokens (زي Login)

### 📥 Request Body

```json
{
  "email": "ahmed@example.com",
  "code": "482961"
}
```

| الحقل | النوع | مطلوب؟ | الشرح |
|-------|-------|--------|-------|
| `email` | `string` | ✅ نعم | الإيميل المسجل |
| `code` | `string` | ✅ نعم | كود الـ OTP المكون من 6 أرقام |

### 📤 Response — `200 OK`

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "dGhpcyBpcyBhIHJlZnJlc2ggdG9rZW4..."
}
```

> [!IMPORTANT]
> الـ Response هنا **نفس شكل** الـ Login Response بالظبط (`AuthResponse`).
> بعد التحقق، الفرونت بيخزن التوكنز وبيوجه المستخدم للداشبورد.

### ❌ Error Responses

```json
// 400 Bad Request — كود غلط أو منتهي
{
  "statusCode": 400,
  "message": "Invalid or expired OTP code",
  "error": "Bad Request"
}

// 404 Not Found
{
  "statusCode": 404,
  "message": "User not found",
  "error": "Not Found"
}
```

---

## 5️⃣ POST `/api/auth/refresh`

> تجديد الـ Access Token باستخدام الـ Refresh Token

### 📥 Request Body

```json
{
  "refreshToken": "dGhpcyBpcyBhIHJlZnJlc2ggdG9rZW4..."
}
```

| الحقل | النوع | مطلوب؟ | الشرح |
|-------|-------|--------|-------|
| `refreshToken` | `string` | ✅ نعم | الـ Refresh Token المخزن عند المستخدم |

### 📤 Response — `200 OK`

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...(new)",
  "refreshToken": "dGhpcyBpcyBhIHJlZnJlc2ggdG9rZW4...(new)"
}
```

> [!NOTE]
> الفرونت بيستبدل التوكنز القديمة بالجديدة في `localStorage` تلقائياً.
> لو الـ Refresh Token منتهي، الفرونت بيعمل logout تلقائي.

### ❌ Error Responses

```json
// 401 Unauthorized — توكن منتهي أو غير صالح
{
  "statusCode": 401,
  "message": "Invalid or expired refresh token",
  "error": "Unauthorized"
}
```

---

## 6️⃣ GET `/api/users/me`

> جلب بيانات المستخدم الحالي — **يحتاج Authorization Header**

### 📥 Request Headers

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

> لا يوجد Body — هذا `GET` Request

### 📤 Response — `200 OK`

```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "name": "أحمد محمد",
  "email": "ahmed@example.com",
  "phone": null,
  "role": "student",
  "governorate": "القاهرة",
  "isVerified": true,
  "createdAt": "2026-05-08T00:00:00.000Z",
  "updatedAt": "2026-05-08T00:00:00.000Z"
}
```

| الحقل | النوع | Nullable؟ | الشرح |
|-------|-------|-----------|-------|
| `id` | `string` | لا | UUID المستخدم |
| `name` | `string` | لا | الاسم الكامل |
| `email` | `string` | لا | البريد الإلكتروني |
| `phone` | `string \| null` | نعم | رقم الهاتف (اختياري) |
| `role` | `string` | لا | `"student"` \| `"parent"` \| `"admin"` |
| `governorate` | `string \| null` | نعم | المحافظة (اختياري) |
| `isVerified` | `boolean` | لا | هل تم تأكيد الإيميل؟ |
| `createdAt` | `string` | لا | تاريخ إنشاء الحساب (ISO 8601) |
| `updatedAt` | `string` | لا | تاريخ آخر تحديث (ISO 8601) |

### ❌ Error Responses

```json
// 401 Unauthorized — توكن غير صالح
{
  "statusCode": 401,
  "message": "Unauthorized",
  "error": "Unauthorized"
}
```

---

## 🔑 JWT Token Payload Structure

> الفرونت بيعمل decode للـ Access Token باستخدام `jwt-decode` — الشكل المتوقع:

```json
{
  "sub": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "email": "ahmed@example.com",
  "name": "أحمد محمد",
  "role": "student",
  "iat": 1715126400,
  "exp": 1715130000
}
```

| الحقل | النوع | الشرح |
|-------|-------|-------|
| `sub` | `string` | الـ User ID (UUID) |
| `email` | `string` | البريد الإلكتروني |
| `name` | `string` | اسم المستخدم — **مهم جداً** — الفرونت بيعرضه في الـ Navbar |
| `role` | `string` | نوع المستخدم (`student` / `parent` / `admin`) |
| `iat` | `number` | وقت إصدار التوكن (Unix timestamp) |
| `exp` | `number` | وقت انتهاء التوكن (Unix timestamp) |

> [!WARNING]
> الحقل `name` في الـ JWT **ضروري**. الفرونت بيقرأه مباشرة من التوكن عشان يعرض اسم المستخدم
> في الـ Navbar بدون ما يستنى `GET /users/me`. لو مش موجود، الاسم هيظهر `null`.

---

## 🔄 Authentication Flow Diagram

```mermaid
sequenceDiagram
    participant U as 👤 User
    participant F as 🖥️ Frontend
    participant B as ⚙️ Backend
    participant E as 📧 Email Service

    Note over U,E: ── Registration Flow ──

    U->>F: يملأ فورم التسجيل
    F->>B: POST /auth/register
    B->>E: يرسل OTP على الإيميل
    B-->>F: { message, userId }
    F->>F: ينقل لصفحة OTP (?email=...)

    Note over U,E: ── OTP Verification ──

    U->>F: يدخل كود OTP (6 أرقام)
    F->>B: POST /auth/otp/verify { email, code }
    B-->>F: { accessToken, refreshToken }
    F->>F: يخزن التوكنز في localStorage
    F->>B: GET /users/me
    B-->>F: { id, name, email, role, ... }
    F->>F: ينقل للداشبورد 🎉

    Note over U,E: ── Login Flow ──

    U->>F: يدخل الإيميل والباسورد
    F->>B: POST /auth/login { email, password }
    B-->>F: { accessToken, refreshToken }
    F->>F: يخزن التوكنز في localStorage
    F->>B: GET /users/me
    B-->>F: { id, name, email, role, ... }
    F->>F: ينقل للداشبورد 🎉

    Note over U,E: ── Token Refresh Flow ──

    F->>B: أي request محمي (401 Error)
    F->>B: POST /auth/refresh { refreshToken }
    B-->>F: { accessToken(new), refreshToken(new) }
    F->>F: يستبدل التوكنز القديمة
    F->>B: يعيد الـ Request الأصلي
```

---

## 🗄️ localStorage Keys

> الفرونت بيخزن الداتا دي في الـ Browser — مهم تعرفها عشان تفهم الـ State Management:

| Key | القيمة المخزنة | الشرح |
|-----|---------------|-------|
| `futurepath_access_token` | JWT Access Token | بيتبعت مع كل request محمي |
| `futurepath_refresh_token` | Refresh Token | بيستخدم لتجديد الـ Access Token |
| `futurepath_user` | `JSON.stringify(User)` | كاش لبيانات المستخدم |
| `futurepath_lang` | `"ar"` / `"en"` / `"fr"` | اللغة الحالية |
| `theme` | `"dark"` / `"light"` | الثيم الحالي |

---

## 🛡️ HTTP Headers Summary

### كل Request بيبعته الفرونت:

```
Content-Type: application/json
Accept-Language: ar          ← اللغة الحالية
```

### Requests المحمية (بعد Login):

```
Content-Type: application/json
Accept-Language: ar
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

### Requests المستثناة من الـ Token (الـ Interceptor بيتجاهلها):

- `POST /auth/login`
- `POST /auth/register`

---

## ❌ Error Response Format (Standard)

> الفرونت بيقرأ `error.error?.message` من الـ Error Response — يرجى الالتزام بالشكل ده:

```json
{
  "statusCode": 400,
  "message": "رسالة الخطأ هنا",
  "error": "Bad Request"
}
```

أو لو في أكتر من validation error:

```json
{
  "statusCode": 400,
  "message": [
    "name must be at least 3 characters",
    "email must be a valid email"
  ],
  "error": "Bad Request"
}
```

> [!TIP]
> الشكل ده هو الشكل الافتراضي اللي NestJS بيرجعه من `class-validator` مع `ValidationPipe`.
> لو بتستخدم NestJS، فعّل الـ `ValidationPipe` globally وهيرجع بالشكل ده تلقائياً.

---

## ✅ Implementation Checklist for Backend

- [ ] `POST /api/auth/register` — تسجيل + إرسال OTP تلقائي على الإيميل
- [ ] `POST /api/auth/login` — تسجيل دخول + إرجاع JWT tokens
- [ ] `POST /api/auth/otp/send` — إرسال/إعادة إرسال OTP (6 أرقام) بالإيميل (Nodemailer)
- [ ] `POST /api/auth/otp/verify` — تأكيد OTP + تفعيل الحساب + إرجاع tokens
- [ ] `POST /api/auth/refresh` — تجديد Access Token بالـ Refresh Token
- [ ] `GET /api/users/me` — إرجاع بيانات المستخدم (محمي بـ JWT Guard)
- [ ] JWT Payload يحتوي على: `sub`, `email`, `name`, `role`, `iat`, `exp`
- [ ] Error responses بالشكل: `{ statusCode, message, error }`
- [ ] CORS مفعّل للـ Frontend origin
- [ ] `ValidationPipe` مفعّل globally
