import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class ChatbotService {
  constructor(private readonly configService: ConfigService) {}

  async generateReply(prompt: string): Promise<{ answer: string }> {
    if (!prompt || !prompt.trim()) {
      throw new HttpException('prompt is required', HttpStatus.BAD_REQUEST);
    }

    const apiKey =
      this.configService.get<string>('AI_API_KEY') ||
      process.env.AI_API_KEY;

    if (!apiKey) {
      throw new HttpException(
        'AI_API_KEY is not configured on the server.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const endpoint =
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent';

    const body = {
      contents: [{ role: 'user', parts: [{ text: prompt.trim() }] }],
    };

    try {
      const response = await axios.post(`${endpoint}?key=${apiKey}`, body, {
        headers: { 'Content-Type': 'application/json' },
      });

      const data = response.data;
      const answer =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ?? 'No reply from AI.';

      return { answer };
    } catch (error: any) {
      const message =
        error?.response?.data?.error?.message ||
        error?.message ||
        'Failed to get response from AI model';
      const status =
        error?.response?.status || HttpStatus.INTERNAL_SERVER_ERROR;

      throw new HttpException({ error: message }, status);
    }
  }
}
