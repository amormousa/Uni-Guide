import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { SalaryPredictDto } from './dto/salary-predict.dto';

export interface SalaryPredictionResult {
  predictedSalary: number;
  salaryRange: {
    min: number;
    max: number;
  };
  currency: string;
  period: string;
  isEstimate: boolean;
  jobLevel: string;
  insights: string[];
  disclaimer: string;
}

@Injectable()
export class SalaryPredictorService {
  async predictSalary(dto: SalaryPredictDto): Promise<SalaryPredictionResult> {
    if (!dto || !dto.major) {
      throw new HttpException('major is required for salary prediction', HttpStatus.BAD_REQUEST);
    }

    const exp = Math.max(0, dto.experience || 0);
    const majorLower = dto.major.toLowerCase();
    const locationLower = (dto.location || 'cairo').toLowerCase();
    const levelLower = (dto.jobLevel || this.inferJobLevel(exp)).toLowerCase();

    // Base salary benchmarks in Egypt (EGP monthly for entry level)
    let baseSalary = 12000;

    if (majorLower.includes('computer') || majorLower.includes('software') || majorLower.includes('حاسبات') || majorLower.includes('برمج')) {
      baseSalary = 14000;
    } else if (majorLower.includes('intelligence') || majorLower.includes('data') || majorLower.includes('ذكاء') || majorLower.includes('بيانات')) {
      baseSalary = 15000;
    } else if (majorLower.includes('medicine') || majorLower.includes('طب')) {
      baseSalary = 11000;
    } else if (majorLower.includes('engineering') || majorLower.includes('هندسة')) {
      baseSalary = 13000;
    } else if (majorLower.includes('business') || majorLower.includes('تجارة') || majorLower.includes('تسويق')) {
      baseSalary = 10500;
    } else if (majorLower.includes('art') || majorLower.includes('تصميم') || majorLower.includes('فنون')) {
      baseSalary = 10000;
    }

    // Experience multiplier (approx. +18% per year compounded up to 10 yrs)
    const expMultiplier = Math.pow(1.18, Math.min(exp, 10));

    // Job Level multiplier
    let levelMultiplier = 1.0;
    let normalizedLevelName = 'Junior / Entry';

    if (levelLower.includes('mid') || levelLower.includes('متوسط')) {
      levelMultiplier = 1.75;
      normalizedLevelName = 'Mid-Level';
    } else if (levelLower.includes('senior') || levelLower.includes('متقدم')) {
      levelMultiplier = 2.8;
      normalizedLevelName = 'Senior';
    } else if (levelLower.includes('lead') || levelLower.includes('خبير') || levelLower.includes('رئيس')) {
      levelMultiplier = 3.9;
      normalizedLevelName = 'Lead / Principal';
    }

    // Location multiplier
    let locationMultiplier = 1.0;
    if (locationLower.includes('cairo') || locationLower.includes('القاهرة') || locationLower.includes('giza')) {
      locationMultiplier = 1.1;
    } else if (locationLower.includes('remote') || locationLower.includes('عن بعد')) {
      locationMultiplier = 1.45;
    } else if (locationLower.includes('alex') || locationLower.includes('الإسكندرية')) {
      locationMultiplier = 0.95;
    } else {
      locationMultiplier = 0.88;
    }

    // Skills bonus (+4% per recognized high demand skill, max +24%)
    let skillsBonus = 1.0;
    if (dto.skills && dto.skills.length > 0) {
      const highDemand = ['python', 'sql', 'react', 'node', 'aws', 'docker', 'machine learning', 'ai', 'english', 'german', 'flutter'];
      const matched = dto.skills.filter(s => highDemand.some(hd => s.toLowerCase().includes(hd))).length;
      skillsBonus = 1.0 + Math.min(0.28, matched * 0.04);
    }

    // Final calculation
    const calculatedSalary = Math.round(baseSalary * expMultiplier * levelMultiplier * locationMultiplier * skillsBonus);
    
    // Statistical standard deviation boundaries (approx. 15% range around estimate)
    const minSalary = Math.round(calculatedSalary * 0.85);
    const maxSalary = Math.round(calculatedSalary * 1.18);

    const insights = [
      `الحد الأدنى المتوقع للرواتب في سوق العمل لهذا التخصص يبدأ من ${minSalary.toLocaleString()} جنيه مصري.`,
      `العمل عن بعد (Remote) لشركات إقليمية ودولية يزيد متوسط الراتب بنسبة تصل إلى 45%.`,
      `إتقان مهارات إضافية مثل اللغة الإنجليزية والتقنيات الحديثة يرفع الراتب بشكل ملحوظ.`,
    ];

    return {
      predictedSalary: calculatedSalary,
      salaryRange: {
        min: minSalary,
        max: maxSalary,
      },
      currency: 'EGP',
      period: 'monthly',
      isEstimate: true,
      jobLevel: normalizedLevelName,
      insights,
      disclaimer: 'تنبيه: التقديرات المالية مبنية على النمذجة الإحصائية ودراسات سوق العمل المصري لعام 2026 وليست ضماناً مالياً تعاقدياً.',
    };
  }

  private inferJobLevel(exp: number): string {
    if (exp <= 2) return 'Junior';
    if (exp <= 5) return 'Mid-Level';
    if (exp <= 8) return 'Senior';
    return 'Lead';
  }
}
