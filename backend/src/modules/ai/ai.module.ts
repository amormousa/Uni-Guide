import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { University } from '../colleges/entities/university.entity';
import { RecommendationService } from './recommendation.service';
import { ChatbotService } from './chatbot.service';
import { AiController } from './ai.controller';

@Module({
  imports: [TypeOrmModule.forFeature([University])],
  controllers: [AiController],
  providers: [RecommendationService, ChatbotService],
  exports: [RecommendationService, ChatbotService],
})
export class AiModule {}
