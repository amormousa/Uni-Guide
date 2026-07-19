import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { University } from '../colleges/entities/university.entity';
import { Observable, interval, map, take } from 'rxjs';

@Injectable()
export class ChatbotService {
  constructor(
    @InjectRepository(University)
    private readonly universityRepository: Repository<University>,
  ) {}

  async handleQuery(query: string, history: any[] = []): Promise<string> {
    const q = (query || '').toLowerCase().trim();

    // 1. Fetch universities from database
    const universities = await this.universityRepository.find({
      relations: ['colleges', 'colleges.specializations'],
    });

    // 2. Identify the target university mentioned in the query
    let targetUni: University | null = null;
    for (const uni of universities) {
      const uName = uni.name.toLowerCase();
      // Basic Arabic mappings for Egyptian universities
      const arabicMappings: { [key: string]: string } = {
        'cairo': 'القاهرة',
        'ain shams': 'عين شمس',
        'helwan': 'حلوان',
        'alexandria': 'الإسكندرية',
        'galala': 'الجلالة',
        'future': 'المستقبل',
        'british': 'البريطانية',
        'msa': 'أكتوبر',
        'mti': 'الحديثة والتكنولوجيا',
      };

      const arName = arabicMappings[uName.split(' ')[0]] || '';
      if (q.includes(uName) || (arName && q.includes(arName))) {
        targetUni = uni;
        break;
      }
    }

    const isArabic = /[\u0600-\u06FF]/.test(q);

    // 3. Draft the RAG Response
    if (targetUni) {
      // Check if user is asking about fees / tuition
      const asksFees = q.includes('fee') || q.includes('tuition') || q.includes('مصاريف') || q.includes('رسوم') || q.includes('سعر') || q.includes('تكلف');
      // Check if user is asking about colleges / faculties / majors
      const asksColleges = q.includes('college') || q.includes('faculty') || q.includes('major') || q.includes('special') || q.includes('كلية') || q.includes('كليات') || q.includes('تخصص');
      // Check if user is asking about website or contact details
      const asksContact = q.includes('site') || q.includes('web') || q.includes('contact') || q.includes('apply') || q.includes('موقع') || q.includes('تقديم') || q.includes('رابط');

      if (asksFees) {
        const collegeFees = targetUni.colleges?.map(c => {
          const feeStr = c.annualFee ? `${Number(c.annualFee).toLocaleString()} EGP` : (isArabic ? 'غير محددة' : 'Not specified');
          return isArabic 
            ? `- كلية ${c.name}: ${feeStr}`
            : `- ${c.name}: ${feeStr}`;
        }).join('\n') || '';

        if (isArabic) {
          return `الرسوم الدراسية السنوية لجامعة ${targetUni.name} هي كالتالي:\n${collegeFees}\n\nيرجى العلم أن هذه الرسوم قد تتغير وفقاً للعام الدراسي الجديد.`;
        } else {
          return `Here are the annual tuition fees for ${targetUni.name}:\n${collegeFees}\n\nPlease note fees are subject to update.`;
        }
      }

      if (asksColleges) {
        const collegeList = targetUni.colleges?.map(c => {
          const majorsList = c.specializations?.map(s => s.name).join(', ') || '';
          const majorPart = majorsList ? ` (${majorsList})` : '';
          return `- ${c.name}${majorPart}`;
        }).join('\n') || '';

        if (isArabic) {
          return `الكليات والتخصصات المتاحة في جامعة ${targetUni.name} هي:\n${collegeList}`;
        } else {
          return `Available faculties and specializations in ${targetUni.name} are:\n${collegeList}`;
        }
      }

      if (asksContact) {
        if (isArabic) {
          return `يمكنك زيارة الموقع الرسمي لجامعة ${targetUni.name} عبر الرابط التالي: ${targetUni.website || 'غير متوفر'}\nوللتقديم المباشر: ${targetUni.applyLink || targetUni.website || 'غير متوفر'}`;
        } else {
          return `You can visit the official website of ${targetUni.name} here: ${targetUni.website || 'Not available'}\nTo apply directly: ${targetUni.applyLink || targetUni.website || 'Not available'}`;
        }
      }

      // Default info if university is found but query is general
      if (isArabic) {
        return `جامعة ${targetUni.name} هي إحدى الجامعات الشريكة. \nالوصف: ${targetUni.description || 'لا يوجد وصف متاح حالياً.'}\nالموقع الجغرافي: ${targetUni.location || 'غير محدد'}\nالموقع الإلكتروني: ${targetUni.website || 'غير متوفر'}`;
      } else {
        return `${targetUni.name} is one of our listed universities.\nDescription: ${targetUni.description || 'No description available.'}\nLocation: ${targetUni.location || 'Not specified'}\nWebsite: ${targetUni.website || 'Not available'}`;
      }
    }

    // Check if the user is asking general questions about specializations
    if (q.includes('computer') || q.includes('حاسبات') || q.includes('برمجة') || q.includes('ذكاء اصطناعي') || q.includes('ai')) {
      const matchUnis = universities.filter(u => u.colleges?.some(c => c.name.toLowerCase().includes('comput') || c.name.toLowerCase().includes('information') || c.name.toLowerCase().includes('artificial')));
      const uniListStr = matchUnis.map(u => `- ${u.name}`).join('\n');

      if (isArabic) {
        return `الجامعات التي تتوفر بها كلية الحاسبات والمعلومات أو الذكاء الاصطناعي هي:\n${uniListStr || 'عذراً، لم نجد جامعات تتوفر بها هذه الكلية في قاعدة بياناتنا.'}`;
      } else {
        return `Universities that offer Computer Science or Artificial Intelligence faculties are:\n${uniListStr || 'No universities found with CS or AI faculties in our database.'}`;
      }
    }

    if (q.includes('medicine') || q.includes('pharmacy') || q.includes('طب') || q.includes('صيدلة') || q.includes('أسنان') || q.includes('dentistry')) {
      const matchUnis = universities.filter(u => u.colleges?.some(c => c.name.toLowerCase().includes('medic') || c.name.toLowerCase().includes('pharm') || c.name.toLowerCase().includes('dent')));
      const uniListStr = matchUnis.map(u => `- ${u.name}`).join('\n');

      if (isArabic) {
        return `الجامعات التي تتوفر بها كليات طبية (طب بشري، صيدلة، أسنان) هي:\n${uniListStr || 'عذراً، لم نجد كليات طبية في قاعدة البيانات حالياً.'}`;
      } else {
        return `Universities that offer medical faculties (Medicine, Pharmacy, Dentistry) are:\n${uniListStr || 'No universities found with medical faculties in our database.'}`;
      }
    }

    // Default reply if no information exists in database (prevent hallucinations)
    if (isArabic) {
      return `عذراً، هذه المعلومات غير متوفرة في قاعدة بياناتنا حالياً. يرجى سؤالنا عن الجامعات المصرية المتاحة، كلياتها، رسومها الدراسية، أو روابط التقديم الخاصة بها.`;
    } else {
      return `Sorry, this information is not available in our database. Please ask about available Egyptian universities, their faculties, tuition fees, or application links.`;
    }
  }

  // SSE stream generator
  streamResponse(text: string): Observable<{ data: string }> {
    // Stream 3-5 characters at a time for natural real-time streaming feel
    const words = Array.from(text);
    return interval(15).pipe(
      take(words.length),
      map((index) => ({ data: words[index] })),
    );
  }
}
