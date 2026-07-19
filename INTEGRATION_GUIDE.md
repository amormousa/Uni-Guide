# FuturePath Frontend-Backend Integration Guide

## ✅ تم تنفيذه (What's Been Done)

### 1. **Frontend Setup**
- ✅ ApiService مكتملة مع HTTP methods (GET, POST, PUT, PATCH, DELETE)
- ✅ AuthService مكتملة مع:
  - Register / Login / Logout
  - OTP Send & Verify
  - Token Refresh
  - User state management
- ✅ JWT Interceptor للإضافة التلقائية للـ Bearer Token
- ✅ Auth Guards (authGuard و noAuthGuard)
- ✅ Registration Component متصل بـ API
- ✅ Login Component متصل بـ API
- ✅ OTP Verification Component متصل بـ API
- ✅ Environment configuration

### 2. **Backend Setup**
- ✅ CORS مفعل في main.ts
- ✅ Auth endpoints مفعلة:
  - `POST /api/auth/register`
  - `POST /api/auth/login`
  - `POST /api/auth/otp/send`
  - `POST /api/auth/otp/verify`
- ✅ JWT Authentication مفعلة
- ✅ .env file مُنشأ

---

## 🚀 البدء بالتشغيل (Getting Started)

### Frontend

1. **Install Dependencies**
```bash
cd frontend
npm install
```

2. **Start Development Server**
```bash
npm start
```
- Frontend سيفتح على `http://localhost:4200`

### Backend

1. **Install Dependencies**
```bash
cd backend
npm install
```

2. **Configure Database**
تأكد من وجود PostgreSQL يعمل على الجهاز:
```bash
# الإعدادات الافتراضية في .env:
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_secure_password
DB_NAME=futurepath_db
```

3. **Set JWT Secret**
في `.env` غيّر القيم:
```env
JWT_SECRET=your_super_secret_key_at_least_32_characters_long
JWT_REFRESH_SECRET=your_refresh_secret_key_at_least_32_characters
```

4. **Start Development Server**
```bash
npm run start:dev
```
- Backend سيشتغل على `http://localhost:3000`

---

## 📋 طريقة الاتصال (How It Works)

### Registration Flow

```
1. User يملأ Registration Form
   ↓
2. Frontend → POST /api/auth/register
   ↓
3. Backend:
   - يتحقق من الـ phone uniqueness
   - يهاش الـ password
   - ينشئ user جديد
   - يرسل OTP للـ phone
   ↓
4. User يستقبل OTP
   ↓
5. User يدخل OTP في Verification Page
   ↓
6. Frontend → POST /api/auth/otp/verify
   ↓
7. Backend يتحقق من OTP ويضع user كـ verified
   ↓
8. User يمكنه يعمل login
```

### Login Flow

```
1. User يدخل phone و password
   ↓
2. Frontend → POST /api/auth/login
   ↓
3. Backend:
   - يتحقق من الـ credentials
   - ينشئ Access Token (15 minutes)
   - ينشئ Refresh Token (7 days)
   ↓
4. Frontend يخزّن الـ tokens في localStorage
   ↓
5. JWT Interceptor يضيف Bearer Token في كل request
   ↓
6. User يصير authenticated
```

### Token Refresh (Automatic)

```
1. عندما ينتهي Access Token
   ↓
2. Backend يرد 401 Unauthorized
   ↓
3. JWT Interceptor يرسل Refresh Token
   ↓
4. Backend يعطي Access Token جديد
   ↓
5. Request الأصلي يتكرّر
```

---

## 🧪 Test It

### في Browser

1. اذهب لـ `http://localhost:4200`
2. اضغط على "Create Account"
3. املأ البيانات:
   - Name: أي اسم
   - Phone: +201234567890 (صيغة مصرية)
   - Password: أي كلمة مرور 8 أحرف+
   - Role: student/parent/admin
4. اضغط "Create Account"
5. ستحصل على OTP (في الـ console أو قاعدة البيانات)
6. ادخل الـ OTP
7. اذهب لـ Login
8. ادخل phone و password

---

## 🔧 troubleshooting

### CORS Error
```
Error: "Access to XMLHttpRequest blocked by CORS policy"
```
**الحل:** تأكد أن `FRONTEND_URL` صحيحة في `.env` الباكند:
```env
FRONTEND_URL=http://localhost:4200
```

### JWT Secret Missing
```
Error: "JWT_SECRET must be at least 32 characters"
```
**الحل:** في `.env` غيّر:
```env
JWT_SECRET=your_very_long_secret_key_at_least_32_characters_long
```

### Database Connection Failed
```
Error: "connect ECONNREFUSED 127.0.0.1:5432"
```
**الحل:** تأكد أن PostgreSQL يعمل:
```bash
# Windows
pg_ctl start

# Mac
brew services start postgresql

# Linux
sudo systemctl start postgresql
```

### Token Not Being Sent
```
Error: "401 Unauthorized"
```
**الحل:** تأكد أن JWT Interceptor مفعل في `app.config.ts`

---

## 📁 File Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── auth/
│   │   │   │   ├── auth.service.ts ✅
│   │   │   │   ├── jwt.interceptor.ts ✅
│   │   │   │   └── auth.guard.ts ✅
│   │   │   └── services/
│   │   │       └── api.service.ts ✅
│   │   ├── features/
│   │   │   └── auth/
│   │   │       ├── register/ ✅
│   │   │       ├── login/ ✅
│   │   │       └── otp-verify/ ✅
│   │   ├── models/
│   │   │   └── auth.models.ts ✅
│   │   └── app.config.ts ✅
│   └── environments/
│       └── environment.ts ✅

backend/
├── src/
│   ├── modules/
│   │   ├── auth/ ✅
│   │   └── users/ ✅
│   ├── config/
│   │   └── app.config.ts ✅
│   └── main.ts ✅
└── .env ✅
```

---

## ✨ Next Steps

1. ✅ Frontend-Backend integration مكتملة
2. ⏭️ صفحات إضافية (Dashboard, Profile, etc.)
3. ⏭️ AI Chat Service Integration
4. ⏭️ Quiz Module
5. ⏭️ College Explorer
6. ⏭️ Error handling & Validation
7. ⏭️ Authentication with Social Login

---

## 📞 API Endpoints

### Auth Endpoints
- `POST /api/auth/register` - تسجيل مستخدم جديد
- `POST /api/auth/login` - دخول للحساب
- `POST /api/auth/otp/send` - إرسال OTP
- `POST /api/auth/otp/verify` - التحقق من OTP
- `POST /api/auth/refresh` - تحديث الـ Access Token

### Protected Endpoints
- `GET /api/users/me` - معلومات المستخدم الحالي (يحتاج Authorization header)

---

## 🎯 Success Checklist

- [ ] Frontend and Backend both running
- [ ] Can navigate to registration page
- [ ] Can register new account
- [ ] OTP is sent successfully
- [ ] Can verify OTP
- [ ] Can login after verification
- [ ] JWT token appears in browser localStorage
- [ ] Can access protected endpoints
- [ ] Automatic token refresh works

---

Created: 2026-05-05
Version: 1.0
Status: ✅ Complete
