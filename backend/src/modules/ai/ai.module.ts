import { Module } from '@nestjs/common';
import { AiController } from './ai.controller';
import { ChatbotService } from './chatbot.service';
import { RecommendationService } from './recommendation.service';
import { SalaryPredictorService } from './salary-predictor.service';
import { CollegesModule } from '../colleges/colleges.module';

@Module({
  imports: [CollegesModule],
  controllers: [AiController],
  providers: [ChatbotService, RecommendationService, SalaryPredictorService],
  exports: [ChatbotService, RecommendationService, SalaryPredictorService],
})
export class AiModule {}
