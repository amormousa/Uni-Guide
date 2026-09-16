import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { QuizAnalyzeDto } from './dto/quiz-analyze.dto';
import { CollegesService } from '../colleges/colleges.service';

export interface MajorRecommendation {
  major: string;
  score: number;
  reason: string;
  recommendedUniversities?: string[];
  careerPaths?: string[];
}

export interface QuizAnalysisResult {
  recommendations: MajorRecommendation[];
  summary: string;
  strengths: string[];
  nextSteps: string[];
}

@Injectable()
export class RecommendationService {
  constructor(
    private readonly configService: ConfigService,
    private readonly collegesService: CollegesService,
  ) {}

  async analyzeQuiz(dto: QuizAnalyzeDto): Promise<QuizAnalysisResult> {
    if (!dto || !dto.answers || dto.answers.length === 0) {
      throw new HttpException('Answers array cannot be empty', HttpStatus.BAD_REQUEST);
    }

    const availableMajors = await this.collegesService.getAvailableMajors();

    const formattedAnswers = dto.answers
      .map(a => `السؤال ${a.questionId}: ${a.answer} ${a.category ? `[الفئة: ${a.category}]` : ''}`)
      .join('\n');

    const apiKey =
      this.configService.get<string>('GEMINI_API_KEY') ||
      this.configService.get<string>('AI_API_KEY') ||
      process.env.GEMINI_API_KEY ||
      process.env.AI_API_KEY;

    // Use deterministic scoring fallback if Gemini key is not configured or in testing
    if (!apiKey || apiKey.includes('your_') || apiKey.length < 10) {
      return this.generateRuleBasedRecommendation(dto, availableMajors);
    }

    const systemPrompt = `أنت خبير توجيه أكاديمي ومستشار اختيار التخصصات الجامعية للطلاب المصريين.
وظيفتك هي تحليل إجابات الـ 15 سؤالاً للطالب، واختيار أفضل التخصصات المناسبة له حصرياً من قائمة التخصصات المتاحة في قاعدة بيانات مشروع UniGuide التالي:

التخصصات المتاحة المسموح بالتوصية بها حصراً:
${availableMajors.map(m => `- ${m}`).join('\n')}

يجب أن ترجع النتيجة كـ JSON كائن نقي بالشكل التالي بدون أي أوساط أو نصوص خارجية:
{
  "recommendations": [
    {
      "major": "اسم التخصص بالضبط من القائمة المتاحة أعلاه",
      "score": 92,
      "reason": "سبب التوصية بناء على إجابات الطالب",
      "recommendedUniversities": ["جامعة القاهرة", "الجامعة الأمريكية بالقاهرة (AUC)"],
      "careerPaths": ["مطور برمجيات", "مهندس بيانات"]
    }
  ],
  "summary": "ملخص شامل لشخصية الطالب وشغفه الأكاديمي",
  "strengths": ["نقطة قوة 1", "نقطة قوة 2", "نقطة قوة 3"],
  "nextSteps": ["خطوة قادمة 1", "خطوة قادمة 2"]
}`;

    const endpoint = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent';

    const body = {
      contents: [
        {
          role: 'user',
          parts: [
            { text: `${systemPrompt}\n\nإجابات الطالب على الاختبار:\n${formattedAnswers}` }
          ],
        },
      ],
      generationConfig: {
        temperature: 0.2,
        responseMimeType: 'application/json',
      },
    };

    try {
      const response = await axios.post(`${endpoint}?key=${apiKey}`, body, {
        headers: { 'Content-Type': 'application/json' },
        timeout: 15000,
      });

      const rawText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (rawText) {
        const parsed = JSON.parse(rawText);
        if (parsed.recommendations && Array.isArray(parsed.recommendations)) {
          return {
            recommendations: parsed.recommendations.map((r: any) => ({
              major: r.major || availableMajors[0],
              score: typeof r.score === 'number' ? r.score : 85,
              reason: r.reason || 'يتطابق هذا التخصص مع تفضيلاتك الأكاديمية وشغفك المهني.',
              recommendedUniversities: r.recommendedUniversities || ['جامعة القاهرة', 'جامعة عين شمس'],
              careerPaths: r.careerPaths || ['مختص في المجال'],
            })),
            summary: parsed.summary || 'تظهر نتائج الاختبار استعداداً أكاديمياً ممتازاً وشغفاً بالتطوير.',
            strengths: parsed.strengths || ['التفكير التحليلي', 'التنظيم والقيادة'],
            nextSteps: parsed.nextSteps || ['مراجعة متطلبات التنسيق لكليات التخصص الموصى به'],
          };
        }
      }
    } catch (err: any) {
      console.warn('Gemini AI call failed in quiz analyze, using structured matching algorithm:', err?.message);
    }

    return this.generateRuleBasedRecommendation(dto, availableMajors);
  }

  private generateRuleBasedRecommendation(dto: QuizAnalyzeDto, availableMajors: string[]): QuizAnalysisResult {
    const textCombined = dto.answers.map(a => a.answer).join(' ').toLowerCase();

    const isTech = textCombined.includes('برمج') || textCombined.includes('حاسب') || textCombined.includes('تكنول') || textCombined.includes('كود') || textCombined.includes('منطق') || textCombined.includes('ذكاء');
    const isMed = textCombined.includes('طب') || textCombined.includes('علاج') || textCombined.includes('جسم') || textCombined.includes('مرض') || textCombined.includes('صحة');
    const isArt = textCombined.includes('رسم') || textCombined.includes('تصميم') || textCombined.includes('فنون') || textCombined.includes('إبداع');

    let recs: MajorRecommendation[] = [];

    if (isTech) {
      recs = [
        {
          major: 'Computer Science & Software Engineering',
          score: 95,
          reason: 'تظهر إجاباتك شغفاً كبيراً بالتفكير المنطقي، حل المشكلات والبرمجة وتطوير الأنظمة.',
          recommendedUniversities: ['جامعة القاهرة (كلية الحاسبات)', 'الجامعة الأمريكية بالقاهرة (AUC)', 'جامعة عين شمس'],
          careerPaths: ['مطور برمجيات (Software Engineer)', 'مهندس نظم (Systems Architect)', 'مطور تطبيقات'],
        },
        {
          major: 'Artificial Intelligence & Data Science',
          score: 89,
          reason: 'يمتلك بروفايلك ميلاً قوياً نحو تحليل البيانات والحلول الذكية الآلية.',
          recommendedUniversities: ['جامعة القاهرة', 'جامعة حكماء العاصمة', 'جامعة عين شمس'],
          careerPaths: ['مهندس ذكاء اصطناعي (AI Engineer)', 'عالم بيانات (Data Scientist)'],
        },
      ];
    } else if (isMed) {
      recs = [
        {
          major: 'Faculty of Medicine (Human Medicine)',
          score: 93,
          reason: 'أظهرت إجاباتك رغبة عالية في مساعدة الآخرين والشغف بالعلوم الحيوية والطبية.',
          recommendedUniversities: ['جامعة عين شمس', 'جامعة القاهرة (القصر العيني)', 'جامعة المنصورة'],
          careerPaths: ['طبيب بشري متقدم', 'باحث في العلوم الطبية'],
        },
        {
          major: 'Faculty of Pharmacy & Clinical Pharmacy',
          score: 87,
          reason: 'تناسب اهتماماتك بالتركيبات الدوائية والعلاج الصيدلي الإكليينيكي.',
          recommendedUniversities: ['جامعة القاهرة', 'الجامعة الألمانية بالقاهرة (GUC)'],
          careerPaths: ['صيدلي إكلينيكي', 'باحث دوائي في شركات الأدوية'],
        },
      ];
    } else if (isArt) {
      recs = [
        {
          major: 'Faculty of Applied Arts & Graphic Design',
          score: 91,
          reason: 'تعكس خياراتك رؤية بصرية ممتازة وشغفاً بالتصميم والابتكار الفني.',
          recommendedUniversities: ['جامعة حلوان', 'الجامعة الألمانية بالقاهرة (GUC)'],
          careerPaths: ['مصمم واجهات استخدام (UI/UX Designer)', 'مدير إبداعي'],
        },
      ];
    } else {
      recs = [
        {
          major: 'Computer Science & Software Engineering',
          score: 88,
          reason: 'تظهر نتايجك توازناً ممتازاً في مهارات التفكير التحليلي والتكيف الأكاديمي.',
          recommendedUniversities: ['جامعة القاهرة', 'الجامعة الأمريكية بالقاهرة (AUC)'],
          careerPaths: ['محلل نظم', 'إداري مشروعات تقنية'],
        },
        {
          major: 'Faculty of Business Administration & Finance',
          score: 84,
          reason: 'تناسب المهارات القيادية والتخطيطية التي ظهرت في إجاباتك.',
          recommendedUniversities: ['الجامعة الأمريكية بالقاهرة (AUC)', 'جامعة عين شمس'],
          careerPaths: ['محلل مالية وأعمال', 'مدير تسويق رقمي'],
        },
      ];
    }

    return {
      recommendations: recs,
      summary: 'بناءً على إجاباتك على الـ 15 سؤالاً، تم تحديد نمط قدراتك الأكاديمية وتوجيهك لنخبة التخصصات المتوافقة في سوق العمل المصري.',
      strengths: ['التفكير المنطقي والتحليلي', 'التكيف مع التكنولوجيا والابتكار', 'الرغبة في النمو والتطوير المستمر'],
      nextSteps: ['استكشاف كليات التخصصات الموصى بها في دليل الكليات', 'استخدام حاسبة الرواتب لمعرفة العائد المتوقع للتخصص'],
    };
  }
}
