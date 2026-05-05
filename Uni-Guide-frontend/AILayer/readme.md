# 🧠 UniGuide AI System — Roadmap & Task Breakdown

## 🎯 Goal

Build a **scalable AI system with 5 integrated models**:

* Recommendation Engine
* AI Chatbot (RAG)
* Salary Predictor
* Alternative Recommendations
* Behavior Tracking + Language Router

---

# 🧩 Phase 0 — Setup (Environment & Structure)

## ✅ Tasks

* [ ] Create virtual environment

```bash
python -m venv venv
venv\Scripts\activate
```

* [ ] Install dependencies

```bash
pip install fastapi uvicorn scikit-learn pandas numpy xgboost sqlalchemy psycopg2-binary redis openai
```

* [ ] Run FastAPI server

```bash
uvicorn app.main:app --reload
```

* [ ] Test server
  👉 http://localhost:8000/docs

---

# 🧠 Phase 1 — Recommendation Engine (CORE)

## 🎯 الهدف

Predict best colleges based on user personality + preferences

## 🪜 Steps

### 1. Data Preparation

* [ ] Create dataset (CSV / DB)

```text
student_id | interests | skills | grades | preferred_field | college_id
```

* [ ] Clean data using pandas

---

### 2. Feature Engineering

* [ ] Convert text → vectors
* Use:

  * TF-IDF
  * One-hot encoding

---

### 3. Model Building

* [ ] Content-Based Filtering

```python
from sklearn.metrics.pairwise import cosine_similarity
```

* [ ] Collaborative Filtering (optional later)

---

### 4. Training

* [ ] Split data

```python
from sklearn.model_selection import train_test_split
```

---

### 5. Recommendation Logic

* [ ] Return Top 10 colleges
* [ ] Add match score %

---

### 6. API Integration

File:

```
routes_quiz.py
```

* [ ] POST `/ai/quiz/submit`
* [ ] Return recommendations

---

# 🤖 Phase 2 — AI Chatbot (RAG)

## 🎯 الهدف

Smart chatbot using college data

---

## 🪜 Steps

### 1. Data Indexing

* [ ] Store colleges in PostgreSQL
* [ ] Enable pgvector

---

### 2. Embeddings

* [ ] Convert data → embeddings
* store in DB

---

### 3. Retrieval

File:

```
rag_service.py
```

* [ ] Search top relevant docs

---

### 4. LLM Response

* [ ] Send context + prompt
* [ ] Return answer

---

### 5. Streaming (SSE)

File:

```
stream_handler.py
```

* [ ] Stream response token by token

---

### 6. API

File:

```
routes_chat.py
```

* [ ] POST `/ai/chat`

---

# 💰 Phase 3 — Salary Predictor

## 🎯 الهدف

Predict salary using ML

---

## 🪜 Steps

### 1. Dataset

```text
specialization | years_exp | location | salary
```

---

### 2. Model

```python
from xgboost import XGBRegressor
```

---

### 3. Training

* [ ] Train model
* [ ] Save as:

```
salary_xgboost.pkl
```

---

### 4. Service

File:

```
salary_model.py
```

* [ ] Load model
* [ ] Predict salary

---

### 5. API

File:

```
routes_salary.py
```

---

# 🔁 Phase 4 — Alternative Recommendations

## 🎯 الهدف

Suggest similar colleges

---

## 🪜 Steps

* [ ] Define similarity rules:

  * subject
  * fees
  * career outcomes

* [ ] Use cosine similarity

File:

```
recommendation.py
```

---

# 🧠 Phase 5 — Behavior Tracking

## 🎯 الهدف

Improve recommendations dynamically

---

## 🪜 Steps

### 1. Track events

* clicks
* views
* searches

---

### 2. Redis Queue

* [ ] push events

---

### 3. Worker Processing

* [ ] update user profile vector

---

# 🌍 Phase 6 — Language Router

## 🎯 الهدف

Auto detect language

---

File:

```
lang_router.py
```

## Tasks:

* [ ] detect language
* [ ] route prompt

```python
if lang == "ar":
    use arabic prompt
```

---

# 🔗 Phase 7 — Integration

## Tasks

* [ ] Connect AI Layer → Backend (NestJS)
* [ ] Use HTTP / SSE
* [ ] Test all endpoints

---

# 🧪 Phase 8 — Testing

## Tasks

* [ ] test_chat.py
* [ ] test_salary.py

```bash
pytest
```

---

# 🚀 Phase 9 — Deployment

## Tasks

* [ ] Dockerize AI Layer
* [ ] Run with docker-compose
* [ ] Deploy (AWS / GCP)

---

# 🧨 Common Problems (IMPORTANT)

## ❌ مشاكل ممكن تقابلك

* Model مش بيرجع نتائج كويسة → data ضعيفة
* Chatbot بيرد غلط → context مش مضبوط
* Slow response → مفيش caching
* Arabic ضعيف → prompt غلط

---

# 🧠 Execution Strategy

## ابدأ كده:

1. Recommendation Model ✅
2. Salary Model ✅
3. Chatbot (RAG) 🔥
4. Tracking + تحسينات

---

# 💡 Pro Tips

* Start simple → بعدين زوّد complexity
* Don't over-engineer
* ركز على **working MVP الأول**

---

# 🏁 Final Target

✅ Fully working AI system
✅ Arabic-first NLP
✅ Scalable architecture
✅ Ready for production

---

🔥 **لو مشيت على الملف ده step by step — هتبني سيستم AI حقيقي مش مجرد مشروع.**
