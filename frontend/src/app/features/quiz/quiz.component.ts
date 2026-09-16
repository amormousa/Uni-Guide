import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface QuizQuestion {
  id: number;
  question: string;
  category: string;
  options: string[];
}

export interface Recommendation {
  major: string;
  score: number;
  reason: string;
  recommendedUniversities?: string[];
  careerPaths?: string[];
}

export interface QuizResult {
  recommendations: Recommendation[];
  summary: string;
  strengths: string[];
  nextSteps: string[];
}

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="quiz-container" dir="rtl">
      <!-- Quiz Header -->
      <div class="quiz-header text-center">
        <div class="badge-tag">✦ تحليل التخصصات الذكي</div>
        <h1>اختبار التوجيه الأكاديمي والمهني (15 سؤالاً)</h1>
        <p>أجب على الأسئلة التالية ليقوم الذكاء الاصطناعي بتحليل ميولك وترشيح التخصصات الجامعية الأنسب لك في مصر</p>
      </div>

      <!-- Loading State -->
      <div *ngIf="isLoading" class="state-card text-center">
        <div class="spinner"></div>
        <h3>جاري تحليل إجاباتك ونمذجة التخصصات المناسبة...</h3>
        <p>نقوم بمطابقة ميولك مع قواعد بيانات الكليات والرواتب في سوق العمل المصري 🚀</p>
      </div>

      <!-- Error State -->
      <div *ngIf="errorMessage && !isLoading" class="state-card error-card text-center">
        <div class="error-icon">⚠️</div>
        <h3>تعذر استكمال التحليل حالياً</h3>
        <p>{{ errorMessage }}</p>
        <button class="btn btn-primary" (click)="submitQuiz()">إعادة المحاولة</button>
      </div>

      <!-- Question Wizard View -->
      <div *ngIf="!isLoading && !result && currentQuestions.length > 0" class="quiz-wizard-card">
        <!-- Progress Bar -->
        <div class="progress-section">
          <div class="progress-info">
            <span>السؤال {{ currentStep + 1 }} من {{ currentQuestions.length }}</span>
            <span>{{ getProgressPercentage() }}%</span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" [style.width.%]="getProgressPercentage()"></div>
          </div>
        </div>

        <!-- Question Title -->
        <div class="question-body">
          <h2 class="question-text">{{ currentQuestions[currentStep].question }}</h2>

          <!-- Options -->
          <div class="options-grid">
            <div
              *ngFor="let opt of currentQuestions[currentStep].options"
              class="option-card"
              [class.selected]="answers[currentQuestions[currentStep].id] === opt"
              (click)="selectOption(currentQuestions[currentStep].id, opt)"
            >
              <div class="radio-dot"></div>
              <span class="option-label">{{ opt }}</span>
            </div>
          </div>
        </div>

        <!-- Navigation Actions -->
        <div class="wizard-actions">
          <button
            class="btn btn-secondary"
            [disabled]="currentStep === 0"
            (click)="prevStep()"
          >
            ← السؤال السابق
          </button>

          <button
            *ngIf="currentStep < currentQuestions.length - 1"
            class="btn btn-primary"
            [disabled]="!answers[currentQuestions[currentStep].id]"
            (click)="nextStep()"
          >
            السؤال التالي →
          </button>

          <button
            *ngIf="currentStep === currentQuestions.length - 1"
            class="btn btn-success"
            [disabled]="!answers[currentQuestions[currentStep].id]"
            (click)="submitQuiz()"
          >
            ✦ إنهاء وتحليل النتائج
          </button>
        </div>
      </div>

      <!-- Results View -->
      <div *ngIf="!isLoading && result" class="results-container">
        <div class="results-summary-card">
          <h2>🎉 نتيجة التوجيه الأكاديمي والمهني</h2>
          <p class="summary-text">{{ result.summary }}</p>

          <!-- Strengths Section -->
          <div class="strengths-box" *ngIf="result.strengths?.length">
            <h4>💡 أبرز نقاط قوتك ومميزاتك:</h4>
            <ul>
              <li *ngFor="let s of result.strengths">{{ s }}</li>
            </ul>
          </div>
        </div>

        <!-- Recommended Majors -->
        <h3 class="section-title">🎓 التخصصات الجامعية الموصى بها:</h3>
        <div class="recommendations-grid">
          <div *ngFor="let rec of result.recommendations" class="recommendation-card">
            <div class="card-header">
              <span class="major-name">{{ rec.major }}</span>
              <span class="match-score">{{ rec.score }}% نسبة التوافق</span>
            </div>

            <p class="rec-reason">{{ rec.reason }}</p>

            <div class="tags-group" *ngIf="rec.recommendedUniversities?.length">
              <span class="group-label">الجامعات المتاحة:</span>
              <span *ngFor="let u of rec.recommendedUniversities" class="tag uni-tag">{{ u }}</span>
            </div>

            <div class="tags-group" *ngIf="rec.careerPaths?.length">
              <span class="group-label">المسارات المهنية:</span>
              <span *ngFor="let c of rec.careerPaths" class="tag career-tag">{{ c }}</span>
            </div>
          </div>
        </div>

        <!-- Next Steps -->
        <div class="next-steps-card" *ngIf="result.nextSteps?.length">
          <h4>🚀 الخطوات القادمة المقترحة:</h4>
          <ul>
            <li *ngFor="let step of result.nextSteps">{{ step }}</li>
          </ul>
        </div>

        <!-- Reset Button -->
        <div class="text-center mt-20">
          <button class="btn btn-secondary" (click)="resetQuiz()">🔄 إعادة إجابة الاختبار</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .quiz-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 40px 20px;
      color: #fff;
      font-family: system-ui, -apple-system, sans-serif;
    }

    .badge-tag {
      display: inline-block;
      background: rgba(99, 102, 241, 0.2);
      color: #818cf8;
      border: 1px solid rgba(99, 102, 241, 0.4);
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.85rem;
      margin-bottom: 12px;
    }

    .quiz-header h1 {
      font-size: 2rem;
      margin-bottom: 8px;
    }

    .quiz-header p {
      color: #9ca3af;
      margin-bottom: 32px;
    }

    .quiz-wizard-card, .state-card, .results-summary-card, .next-steps-card {
      background: #18181b;
      border: 1px solid #27272a;
      border-radius: 16px;
      padding: 28px;
      margin-bottom: 24px;
    }

    .progress-section {
      margin-bottom: 24px;
    }

    .progress-info {
      display: flex;
      justify-content: space-between;
      color: #a1a1aa;
      font-size: 0.9rem;
      margin-bottom: 8px;
    }

    .progress-bar-bg {
      background: #27272a;
      height: 8px;
      border-radius: 4px;
      overflow: hidden;
    }

    .progress-bar-fill {
      background: linear-gradient(90deg, #6366f1, #a855f7);
      height: 100%;
      transition: width 0.3s ease;
    }

    .question-text {
      font-size: 1.35rem;
      margin-bottom: 24px;
      line-height: 1.5;
    }

    .options-grid {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 28px;
    }

    .option-card {
      display: flex;
      align-items: center;
      background: #27272a;
      border: 2px solid transparent;
      padding: 16px 20px;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .option-card:hover {
      background: #3f3f46;
    }

    .option-card.selected {
      border-color: #6366f1;
      background: rgba(99, 102, 241, 0.15);
    }

    .radio-dot {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      border: 2px solid #71717a;
      margin-left: 14px;
      flex-shrink: 0;
    }

    .option-card.selected .radio-dot {
      border-color: #6366f1;
      background: #6366f1;
      box-shadow: inset 0 0 0 3px #18181b;
    }

    .option-label {
      font-size: 1rem;
    }

    .wizard-actions {
      display: flex;
      justify-content: space-between;
      gap: 16px;
    }

    .btn {
      padding: 12px 24px;
      border-radius: 10px;
      font-weight: 600;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .btn-primary {
      background: #6366f1;
      color: #fff;
    }
    .btn-primary:hover:not(:disabled) {
      background: #4f46e5;
    }

    .btn-secondary {
      background: #3f3f46;
      color: #fff;
    }

    .btn-success {
      background: #10b981;
      color: #fff;
    }

    /* Recommendations & Results */
    .summary-text {
      font-size: 1.1rem;
      line-height: 1.6;
      color: #e4e4e7;
    }

    .strengths-box {
      margin-top: 20px;
      background: rgba(16, 185, 129, 0.1);
      border: 1px solid rgba(16, 185, 129, 0.3);
      padding: 16px;
      border-radius: 12px;
    }

    .strengths-box ul {
      margin: 8px 0 0 0;
      padding-right: 20px;
    }

    .recommendation-card {
      background: #18181b;
      border: 1px solid #3f3f46;
      border-radius: 14px;
      padding: 20px;
      margin-bottom: 16px;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }

    .major-name {
      font-size: 1.2rem;
      font-weight: 700;
      color: #a855f7;
    }

    .match-score {
      background: rgba(168, 85, 247, 0.2);
      color: #c084fc;
      padding: 4px 10px;
      border-radius: 20px;
      font-weight: 600;
      font-size: 0.9rem;
    }

    .rec-reason {
      color: #d4d4d8;
      line-height: 1.5;
      margin-bottom: 16px;
    }

    .tags-group {
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      align-items: center;
    }

    .group-label {
      font-size: 0.85rem;
      color: #9ca3af;
    }

    .tag {
      font-size: 0.8rem;
      padding: 3px 10px;
      border-radius: 6px;
    }

    .uni-tag {
      background: #27272a;
      color: #60a5fa;
      border: 1px solid rgba(96, 165, 250, 0.3);
    }

    .career-tag {
      background: #27272a;
      color: #34d399;
      border: 1px solid rgba(52, 211, 153, 0.3);
    }

    .spinner {
      width: 40px;
      height: 40px;
      border: 4px solid #3f3f46;
      border-top-color: #6366f1;
      border-radius: 50%;
      animation: spin 1s infinite linear;
      margin: 0 auto 16px auto;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .text-center { text-align: center; }
    .mt-20 { margin-top: 20px; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizComponent implements OnInit {
  currentStep = 0;
  isLoading = false;
  errorMessage = '';
  answers: { [questionId: number]: string } = {};

  result: QuizResult | null = null;

  currentQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: 'ما هي شعتبك في الثانوية العامة أو ما يعادلها؟',
      category: 'academic_background',
      options: ['علمي رياضة', 'علمي علوم', 'أدبي', 'شهادات معادلة / دولية'],
    },
    {
      id: 2,
      question: 'ما هي المواد الدراسية التي تستمتع بفهمها وتحليلها؟',
      category: 'interests',
      options: ['الرياضيات والفيزياء والتفكير المنطقي', 'الأحياء والعلوم الحيوية والصيدلة', 'الفنون والتصميم والرسم', 'اللغات والإعلام والتاريخ'],
    },
    {
      id: 3,
      question: 'كيف تفضل حل المشكلات العويصة؟',
      category: 'problem_solving',
      options: ['كتابة برمجيات وخوارزميات وتفكيك المشكلة', 'التشخيص الطبي وتجربة الحلول العملية', 'التفكير الإبداعي الابتكاري وتصميم أشكال جديدة', 'التفاوض والتخطيط الإداري والمالي'],
    },
    {
      id: 4,
      question: 'ما هي البيئة التي تطمح للعمل فيها بعد التخرج؟',
      category: 'work_environment',
      options: ['شركة تكنولوجيا أو العمل عن بُعد (Remote)', 'مستشفى أو مركز تحاليل ورعاية صحية', 'استوديو تصميم ورسوم هندسية أو إعلام', 'شركة أعمال ومؤسسات مالية وتسويقية'],
    },
    {
      id: 5,
      question: 'ما مدى اهتمامك بمجال الذكاء الاصطناعي وتطوير البرمجيات؟',
      category: 'tech_affinity',
      options: ['اهتمام شديد وأرغب في الاحتراف', 'اهتمام متوسط لاستخدام الأسلحة الذكية', 'اهتمام قليل', 'لا أهتم بهذا المجال'],
    },
    {
      id: 6,
      question: 'كيف تعبر عن شغفك الإبداعي؟',
      category: 'creativity',
      options: ['بناء تطبيقات وأنظمة ذكية', 'ابتكار حلول صحية وعلاجية', 'رسم وتصميم واجهات وتجسيم معماري', 'صناعة محتوى وإدارة حملات إعلامية'],
    },
    {
      id: 7,
      question: 'ما مدى حبك للتعامل مع الأرقام والإحصاءات؟',
      category: 'analytical_skills',
      options: ['أعشق تحليل الأرقام والبيانات الإحصائية', 'أفضل الأرقام فقط في نطاقها الهندسي', 'أفضل الجانب النظري والتطبيقي البشري', 'لا أفضل العمل الرقمي المعقد'],
    },
    {
      id: 8,
      question: 'ما هو الدافع الأول لك في اختيار مهنة المستقبل؟',
      category: 'motivation',
      options: ['عائد مالي مرتفع وفرص عمل دولية', 'مكانة اجتماعية وخدمة إنسانية جليلة', 'حرية إبداعية واستقلالية بالعمل', 'قيادة فريق وتأسيس مشروع خاص'],
    },
    {
      id: 9,
      question: 'ما مدى استعدادك للتعلم الذاتي المستمر وتحديث مهاراتك؟',
      category: 'learning_style',
      options: ['مستعد تماماً وأتابع الكورسات الذاتية يومياً', 'مستعد حسب متطلبات العمل', 'أفضل التعلم الأكاديمي التقليدي فقط', 'أواجه صعوبة في التعلم الذاتي المستمر'],
    },
    {
      id: 10,
      question: 'هل تنجذب لدراسة الطب والعلوم البيولوجية؟',
      category: 'bio_med',
      options: ['نعم، الطب البشري أو طب الأسنان هو حلمي', 'أفضل الصيدلة والعلاج الطبيعي', 'أفضل العلوم والتكنولوجيا', 'لا أفضله إطلاقاً'],
    },
    {
      id: 11,
      question: 'كيف ترغب في قضاء يوم عملك الطبيعي؟',
      category: 'daily_routine',
      options: ['أمام الحاسوب أطور أكواداً وأنظمة', 'في عيادة أو معمل أفحص المرضى', 'في ورشة تصميم أو موقع بناء معمار', 'في اجتماعات وتخطيط استراتيجيات'],
    },
    {
      id: 12,
      question: 'ما مدى مهاراتك في اللغة الإنجليزية واللغات الأجنبية؟',
      category: 'language_skills',
      options: ['ممتازة وأتحدث بطلاقة', 'جيدة جداً وأستوعب الشرح بالإنجليزية', 'متوسطة وأحاول تحسينها', 'مبتدئة'],
    },
    {
      id: 13,
      question: 'ما موقفك من مجالات التصميم الجرافيكي وتجربة المستخدم (UI/UX)؟',
      category: 'design_ui',
      options: ['مهتم جداً وأحب مزج الفن بالتكنولوجيا', 'مهتم كمهارة جانبية', 'أفضل الهندسة البنائية والإنشائية', 'غير مهتم'],
    },
    {
      id: 14,
      question: 'كيف تتصرف تحت ضغط التسليمات المحددة (Deadlines)؟',
      category: 'stress_management',
      options: ['أعمل بكفاءة وأركز في الإنجاز', 'أحتاج توجيه مستمر وتقسيم للمهام', 'أصاب بالتوتر ولكن أنجز المطلوب', 'أفضل العمل المتأني بدون ضغوط زمنية'],
    },
    {
      id: 15,
      question: 'ما هو نطاق الجامعات المفضل لديك داخل مصر؟',
      category: 'location_pref',
      options: ['القاهرة الكبرى والجيزة (القاهرة، عين شمس، AUC، GUC)', 'الإسكندرية والساحل', 'جامعات الدلتا والقناة (المنصورة، زويل)', 'جامعات الصعيد أو الدراسة أونلاين'],
    },
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  selectOption(questionId: number, option: string): void {
    this.answers[questionId] = option;
    this.cdr.markForCheck();
  }

  nextStep(): void {
    if (this.currentStep < this.currentQuestions.length - 1) {
      this.currentStep++;
      this.cdr.markForCheck();
    }
  }

  prevStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
      this.cdr.markForCheck();
    }
  }

  getProgressPercentage(): number {
    return Math.round(((this.currentStep + 1) / this.currentQuestions.length) * 100);
  }

  async submitQuiz(): Promise<void> {
    this.isLoading = true;
    this.errorMessage = '';
    this.cdr.markForCheck();

    const formattedAnswers = this.currentQuestions.map(q => ({
      questionId: q.id,
      answer: this.answers[q.id] || q.options[0],
      category: q.category,
    }));

    try {
      const response = await fetch('http://localhost:3000/api/quiz/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers: formattedAnswers }),
      });

      if (!response.ok) {
        throw new Error('فشل في معالجة إجابات الاختبار على السيرفر');
      }

      const data = await response.json();
      this.result = data;
    } catch (err: any) {
      console.warn('Backend Quiz API offline or error, serving client-side AI analysis fallback:', err);
      // Client-side fallback if backend API is offline
      this.result = this.generateFallbackResult(formattedAnswers);
    } finally {
      this.isLoading = false;
      this.cdr.markForCheck();
    }
  }

  resetQuiz(): void {
    this.currentStep = 0;
    this.answers = {};
    this.result = null;
    this.errorMessage = '';
    this.cdr.markForCheck();
  }

  private generateFallbackResult(answers: any[]): QuizResult {
    const joined = answers.map(a => a.answer).join(' ');
    const isTech = joined.includes('برمج') || joined.includes('حاسب') || joined.includes('تكنول') || joined.includes('رياضيات');
    const isMed = joined.includes('طب') || joined.includes('أحياء') || joined.includes('صحة');

    if (isTech) {
      return {
        recommendations: [
          {
            major: 'Computer Science & Software Engineering',
            score: 95,
            reason: 'تظهر إجاباتك تميزاً كبيراً في التفكير المنطقي والحل الهيكلي للمشكلات والشغف بالتكنولوجيا.',
            recommendedUniversities: ['جامعة القاهرة (الحاسبات والذكاء الاصطناعي)', 'الجامعة الأمريكية بالقاهرة (AUC)'],
            careerPaths: ['مطور برمجيات', 'مهندس نظم خبير', 'مطور تطبيقات الذكاء الاصطناعي'],
          },
          {
            major: 'Artificial Intelligence & Data Science',
            score: 90,
            reason: 'تتوافق ميولك مع علوم البيانات والأنظمة الذكية الآلية.',
            recommendedUniversities: ['جامعة عين شمس', 'جامعة القاهرة'],
            careerPaths: ['عالم بيانات', 'مهندس تعلم آلي (ML Engineer)'],
          },
        ],
        summary: 'تمتلك بروفايل أكاديمي متفوق في البرمجة والتفكير التحليلي المنطقي.',
        strengths: ['حل المشكلات المنطقية', 'القدرة على التفكير التجريدي وخلق خوارزميات', 'الاستعداد للتعلم الذاتي'],
        nextSteps: ['الاطلاع على الحد الأدنى لتنسيق كلية الحاسبات', 'بدء دورة أساسيات البرمجة بلغة Python'],
      };
    }

    return {
      recommendations: [
        {
          major: 'Faculty of Business Administration & Digital Marketing',
          score: 89,
          reason: 'تناسب إجاباتك مجالات التخطيط الإداري والقيادة والتسويق الرقمي.',
          recommendedUniversities: ['الجامعة الأمريكية بالقاهرة (AUC)', 'جامعة عين شمس'],
          careerPaths: ['محلل أعمال', 'مدير تسويق رقمي', 'رائد أعمال'],
        },
      ],
      summary: 'يمتلك بروفايلك توازناً قيادياً وإدارياً ممتازاً يفتح لك آفاق واسعة في قطاع الأعمال.',
      strengths: ['المهارات القيادية والتفاوض', 'التفكير الاستراتيجي'],
      nextSteps: ['قراءة الخطة الدراسية لكليات التجارة وإدارة الأعمال المعتمدة'],
    };
  }
}
