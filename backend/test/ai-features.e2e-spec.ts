import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AI Core Features (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('Feature 1: POST /api/quiz/analyze should return structured major recommendations', async () => {
    const payload = {
      answers: [
        { questionId: 1, answer: 'علمي رياضة', category: 'academic_background' },
        { questionId: 2, answer: 'الرياضيات والفيزياء والتفكير المنطقي', category: 'interests' },
        { questionId: 3, answer: 'كتابة برمجيات وخوارزميات وتفكيك المشكلة', category: 'problem_solving' },
        { questionId: 4, answer: 'شركة تكنولوجيا أو العمل عن بُعد (Remote)', category: 'work_environment' },
        { questionId: 5, answer: 'اهتمام شديد وأرغب في الاحتراف', category: 'tech_affinity' },
        { questionId: 6, answer: 'بناء تطبيقات وأنظمة ذكية', category: 'creativity' },
        { questionId: 7, answer: 'أعشق تحليل الأرقام والبيانات الإحصائية', category: 'analytical_skills' },
        { questionId: 8, answer: 'عائد مالي مرتفع وفرص عمل دولية', category: 'motivation' },
        { questionId: 9, answer: 'مستعد تماماً وأتابع الكورسات الذاتية يومياً', category: 'learning_style' },
        { questionId: 10, answer: 'لا أفضله إطلاقاً', category: 'bio_med' },
        { questionId: 11, answer: 'أمام الحاسوب أطور أكواداً وأنظمة', category: 'daily_routine' },
        { questionId: 12, answer: 'ممتازة وأتحدث بطلاقة', category: 'language_skills' },
        { questionId: 13, answer: 'مهتم جداً وأحب مزج الفن بالتكنولوجيا', category: 'design_ui' },
        { questionId: 14, answer: 'أعمل بكفاءة وأركز في الإنجاز', category: 'stress_management' },
        { questionId: 15, answer: 'القاهرة الكبرى والجيزة (القاهرة، عين شمس، AUC، GUC)', category: 'location_pref' },
      ],
    };

    const res = await request(app.getHttpServer())
      .post('/quiz/analyze')
      .send(payload)
      .expect(200);

    expect(res.body).toHaveProperty('recommendations');
    expect(Array.isArray(res.body.recommendations)).toBe(true);
    expect(res.body.recommendations.length).toBeGreaterThan(0);
    expect(res.body.recommendations[0]).toHaveProperty('major');
    expect(res.body.recommendations[0]).toHaveProperty('score');
    expect(res.body).toHaveProperty('summary');
    expect(res.body).toHaveProperty('strengths');
  });

  it('Feature 2: POST /api/chat should return grounded RAG chatbot answer with sources', async () => {
    const payload = {
      prompt: 'ما هي كليات الهندسة المتاحة بجامعة القاهرة؟',
    };

    const res = await request(app.getHttpServer())
      .post('/chat')
      .send(payload)
      .expect(200);

    expect(res.body).toHaveProperty('answer');
    expect(typeof res.body.answer).toBe('string');
    expect(res.body).toHaveProperty('sources');
    expect(Array.isArray(res.body.sources)).toBe(true);
  });

  it('Feature 3: POST /api/salary/predict should return salary prediction & range in EGP', async () => {
    const payload = {
      major: 'Computer Science & Software Engineering',
      experience: 3,
      jobLevel: 'Mid-Level',
      location: 'Cairo',
      skills: ['Python', 'SQL', 'TypeScript'],
    };

    const res = await request(app.getHttpServer())
      .post('/salary/predict')
      .send(payload)
      .expect(200);

    expect(res.body).toHaveProperty('predictedSalary');
    expect(typeof res.body.predictedSalary).toBe('number');
    expect(res.body.predictedSalary).toBeGreaterThan(5000);
    expect(res.body).toHaveProperty('currency', 'EGP');
    expect(res.body).toHaveProperty('period', 'monthly');
    expect(res.body).toHaveProperty('salaryRange');
    expect(res.body.salaryRange.min).toBeLessThan(res.body.predictedSalary);
    expect(res.body.salaryRange.max).toBeGreaterThan(res.body.predictedSalary);
    expect(res.body).toHaveProperty('disclaimer');
  });
});
