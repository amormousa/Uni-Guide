import { Module } from '@nestjs/common';
import { AiController } from './ai.controller';
import { ChatbotService } from './chatbot.service';

@Module({
  controllers: [AiController],
  providers: [ChatbotService],
  exports: [ChatbotService],
})
export class AiModule {}
