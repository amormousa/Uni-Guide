import { Controller, Get, Query, Sse, MessageEvent } from '@nestjs/common';
import { ChatbotService } from './chatbot.service';
import { Observable } from 'rxjs';

@Controller('ai')
export class AiController {
  constructor(private readonly chatbotService: ChatbotService) {}

  @Sse('chat/stream')
  async chatStream(
    @Query('message') message: string,
    @Query('history') historyJson?: string,
    @Query('favorites') favoritesJson?: string,
  ): Promise<Observable<MessageEvent>> {
    let history = [];
    let favorites = [];
    
    try {
      if (historyJson) history = JSON.parse(historyJson);
      if (favoritesJson) favorites = JSON.parse(favoritesJson);
    } catch (e) {
      console.error('Error parsing chat request parameters:', e);
    }

    const responseText = await this.chatbotService.handleQuery(message, history);
    return this.chatbotService.streamResponse(responseText) as any;
  }
}
