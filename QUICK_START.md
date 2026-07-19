# 🚀 FuturePath - Quick Start

## Step 1: تجهيز البيئة

### Backend Setup

```bash
cd backend
npm install
```

#### تأكد من PostgreSQL

```bash
# Windows
pg_ctl start

# Mac
brew services start postgresql

# Linux
sudo systemctl start postgresql
```

#### تحديث .env

```env
# JWT - غيّر هذه القيم
JWT_SECRET=super_secret_key_change_me_32_chars_minimum
JWT_REFRESH_SECRET=refresh_secret_change_me_32_chars_minimum

# Database
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_db_password
DB_NAME=futurepath_db
```

#### تشغيل Backend

```bash
npm run start:dev
```

✅ Backend على `http://localhost:3000`

---

### Frontend Setup

```bash
cd frontend
npm install
```

#### تشغيل Frontend

```bash
npm start
```

✅ Frontend على `http://localhost:4200`

---

## Step 2: اختبار التسجيل

1. اذهب إلى `http://localhost:4200`
2. اضغط "Create Account"
3. ملء البيانات:
   - **Name**: أي اسم (3 أحرف+)
   - **Phone**: `+201234567890` (صيغة مصرية)
   - **Password**: أي كلمة (8 أحرف+)
   - **Role**: student/parent
   - **Governorate**: اختياري
4. اضغط "Create Account"
5. ستحصل على OTP
6. ادخل الـ OTP (في الـ backend console ستجد OTP code)
7. اضغط "Verify & Proceed"
8. اذهب لـ "Sign In"

---

## Step 3: تسجيل الدخول

1. Phone: `+201234567890`
2. Password: نفس الكلمة التي استخدمتها
3. اضغط "Sign In"

✅ تم! أنت الآن مسجل دخول

---

## 📱 API من Browser

### 1. Register

```javascript
fetch('http://localhost:3000/api/auth/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Ahmed Hassan',
    phone: '+201234567890',
    password: 'SecurePass@123',
    role: 'student',
    governorate: 'Cairo',
  }),
})
  .then((r) => r.json())
  .then(console.log);
```

### 2. Login

```javascript
fetch('http://localhost:3000/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    phone: '+201234567890',
    password: 'SecurePass@123',
  }),
})
  .then((r) => r.json())
  .then((d) => {
    localStorage.setItem('futurepath_access_token', d.accessToken);
    console.log('Login Successful!', d);
  });
```

### 3. Send OTP

```javascript
fetch('http://localhost:3000/api/auth/otp/send', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ phone: '+201234567890' }),
})
  .then((r) => r.json())
  .then(console.log);
```

### 4. Verify OTP

```javascript
fetch('http://localhost:3000/api/auth/otp/verify', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    phone: '+201234567890',
    otp: '123456',
  }),
})
  .then((r) => r.json())
  .then(console.log);
```

### 5. Get Current User (Protected)

```javascript
const token = localStorage.getItem('futurepath_access_token');
fetch('http://localhost:3000/api/users/me', {
  headers: { Authorization: `Bearer ${token}` },
})
  .then((r) => r.json())
  .then(console.log);
```

---

## 🔍 Debug Tips

### Check Backend

```bash
# في مجلد backend
npm run start:dev
# ستشوف لوجات للـ requests
```

### Check Frontend Network

```javascript
// في browser console
localStorage.getItem('futurepath_access_token');
localStorage.getItem('futurepath_refresh_token');
```

### Check CORS

تأكد أن `FRONTEND_URL` في `.env` صحيحة:

```env
FRONTEND_URL=http://localhost:4200
```

### Check Database

```sql
-- PostgreSQL
SELECT * FROM users;
SELECT * FROM otp;
```

---

## ❌ Common Issues & Solutions

| Problem                       | Solution                              |
| ----------------------------- | ------------------------------------- |
| "CORS Policy blocked"         | تحقق `FRONTEND_URL` في `.env`         |
| "JWT_SECRET required"         | حدّث `JWT_SECRET` في `.env` 32+ chars |
| "Database connection refused" | شغّل PostgreSQL                       |
| "OTP not sent"                | شوف لوجات الـ backend console         |
| "Token not working"           | شدّد localhost cache في DevTools      |
| "Module not found"            | اعمل `npm install`                    |

---

## 📊 Architecture Diagram

```
┌─────────────────────────────────────────────────┐
│              Browser (4200)                      │
│         ┌─────────────────────────┐             │
│         │   Angular Frontend      │             │
│         │   - Registration Form   │             │
│         │   - Login Form          │             │
│         │   - OTP Verification    │             │
│         └─────────────┬───────────┘             │
│                       │                          │
│                       │ HTTP (CORS)              │
│                       ↓                          │
└───────────────────────────────────────────────────┘
                        │
                        │
            ┌───────────────────────┐
            │  JWT Interceptor      │
            │  + Bearer Token       │
            └───────────┬───────────┘
                        │
                        ↓
        ┌─────────────────────────────────┐
        │   NestJS Backend (3000)         │
        │                                 │
        │  ┌─────────────────────────┐   │
        │  │   Auth Module           │   │
        │  │ - register              │   │
        │  │ - login                 │   │
        │  │ - otp/send              │   │
        │  │ - otp/verify            │   │
        │  │ - refresh               │   │
        │  └──────────┬──────────────┘   │
        │             │                  │
        │             ↓                  │
        │  ┌─────────────────────────┐   │
        │  │ PostgreSQL Database     │   │
        │  │ - users                 │   │
        │  │ - otp                   │   │
        │  │ - refresh_tokens        │   │
        │  └─────────────────────────┘   │
        │                                 │
        └─────────────────────────────────┘
```

---

## ✅ Success Indicators

- [ ] `npm run start:dev` في backend = ✅ Running
- [ ] `npm start` في frontend = ✅ Running
- [ ] Navigation إلى `/auth/register` = ✅ Form يظهر
- [ ] Submit registration = ✅ لا يوجد errors
- [ ] OTP page تظهر = ✅ Phone يظهر
- [ ] OTP verification = ✅ Redirect إلى login
- [ ] Login successful = ✅ Redirect إلى dashboard
- [ ] localStorage يحتوي على tokens = ✅ Complete!

---

## 🎯 Next: Advanced Features

بعد ما تخلصّ من الـ registration و login:

1. Dashboard - عرض معلومات المستخدم
2. AI Chat - تكاملك مع AILayer
3. Quiz - نظام اختبار
4. College Explorer - البحث عن الجامعات

---

**Made with ❤️ for FuturePath**
Version: 1.0 | Date: 2026-05-05
