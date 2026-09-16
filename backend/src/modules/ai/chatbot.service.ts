import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { CollegesService, KnowledgeSource } from '../colleges/colleges.service';

@Injectable()
export class ChatbotService {
  constructor(
    private readonly configService: ConfigService,
    private readonly collegesService: CollegesService,
  ) {}

  async generateReply(prompt: string): Promise<{ answer: string; sources: Array<{ id: string; title: string; type: string }> }> {
    const cleanPrompt = (prompt || '').trim();
    if (!cleanPrompt) {
      throw new HttpException('prompt or message is required', HttpStatus.BAD_REQUEST);
    }

    // RAG Step 1: Retrieve matching facts from UniGuide Knowledge Base
    const sources: KnowledgeSource[] = await this.collegesService.searchKnowledgeBase(cleanPrompt);

    const contextText = sources.length > 0
      ? sources.map(s => `[المصدر: ${s.title} (${s.type})]\n${s.content}`).join('\n\n')
      : 'لا توجد معلومات إضافية مسجلة في قاعدة البيانات لهذا السؤال الأخير.';

    const systemInstruction = `أنت مساعد UniGuide الذكي، مستشار تعليمي وأكاديمي مخصص للطلاب المصريين لحساب التنسيق والقبول بالجامعات واختيار التخصصات.

قواعد الإجابة الصارمة (Grounding Rules):
1. اعتمد بشكل أساسي ومباشر على المعلومات الواردة في "سياق قاعدة بيانات UniGuide" التالي.
2. إذا كانت المعلومة غير موجودة بالكامل في قاعدة البيانات المرفقة، صرّح بوضوح وبأسلوب وادي ولطيف: "عذراً، هذه المعلومة غير متوفرة حالياً في قاعدة بيانات UniGuide."
3. يمنع منعا باتا اختراع رسوم دراسية، شروط قبول، أو نسب تنسيق غير مذكورة.
4. حافظ على الإجابة باللغة العربية الواضحة والداعمة للطلاب المصريين، واستخدم تنسيق النقاط عند الحاجة.

سياق قاعدة بيانات UniGuide المتاحة:
${contextText}`;

    const apiKey =
      this.configService.get<string>('GEMINI_API_KEY') ||
      this.configService.get<string>('AI_API_KEY') ||
      process.env.GEMINI_API_KEY ||
      process.env.AI_API_KEY;

    // Fallback if AI Key is not active or Gemini is unreachable
    if (!apiKey || apiKey.includes('your_') || apiKey.length < 10) {
      return {
        answer: `أهلاً بك! بناءً على قاعدة بيانات UniGuide المتاحة:\n\n${sources.map(s => `• **${s.title}**: ${s.content}`).join('\n\n')}`,
        sources: sources.map(s => ({ id: s.id, title: s.title, type: s.type })),
      };
    }

    const endpoint = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent';

    const body = {
      contents: [
        {
          role: 'user',
          parts: [
            { text: `${systemInstruction}\n\nسؤال الطالب: ${cleanPrompt}` }
          ],
        },
      ],
      generationConfig: {
        temperature: 0.3,
        topP: 0.8,
        maxOutputTokens: 1024,
      },
    };

    try {
      const response = await axios.post(`${endpoint}?key=${apiKey}`, body, {
        headers: { 'Content-Type': 'application/json' },
        timeout: 15000,
      });

      const data = response.data;
      const answer =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ??
        `بناءً على معلومات UniGuide المتاحة:\n${sources.map(s => s.content).join('\n')}`;

      return {
        answer,
        sources: sources.map(s => ({ id: s.id, title: s.title, type: s.type })),
      };
    } catch (error: any) {
      console.warn('Gemini API request failed, serving RAG database content directly:', error?.message);
      
      // Graceful fallback using retrieved grounded content
      const fallbackAnswer = sources.length > 0
        ? `أهلاً بك! إليك ما يتوفر في قاعدة بيانات UniGuide حول استفسارك:\n\n${sources.map(s => `📍 **${s.title}** (${s.type}):\n${s.content}`).join('\n\n')}`
        : 'أهلاً بك في UniGuide! لم نتمكن من العثور على تفاصيل دقيقة لهذا السؤال في قاعدة البيانات حالياً.';

      return {
        answer: fallbackAnswer,
        sources: sources.map(s => ({ id: s.id, title: s.title, type: s.type })),
      };
    }
  }
}
