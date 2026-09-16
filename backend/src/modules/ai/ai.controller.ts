import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ChatbotService } from './chatbot.service';
import { RecommendationService } from './recommendation.service';
import { SalaryPredictorService } from './salary-predictor.service';
import { ChatPromptDto } from './dto/chat-prompt.dto';
import { QuizAnalyzeDto } from './dto/quiz-analyze.dto';
import { SalaryPredictDto } from './dto/salary-predict.dto';

@ApiTags('AI & Educational Features')
@Controller()
export class AiController {
  constructor(
    private readonly chatbotService: ChatbotService,
    private readonly recommendationService: RecommendationService,
    private readonly salaryPredictorService: SalaryPredictorService,
  ) {}

  @Post(['chat', 'gemini', 'ai/chat', 'api/chat'])
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'RAG Educational Guidance Chatbot' })
  @ApiResponse({ status: 200, description: 'RAG AI response with source grounding returned successfully' })
  async chat(@Body() dto: ChatPromptDto) {
    const promptText = (dto.prompt || dto.message || '').trim();
    return this.chatbotService.generateReply(promptText);
  }

  @Post(['quiz/analyze', 'ai/quiz/analyze', 'api/quiz/analyze'])
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Analyze 15-question career quiz and recommend majors' })
  @ApiResponse({ status: 200, description: 'Structured major recommendations returned successfully' })
  async analyzeQuiz(@Body() dto: QuizAnalyzeDto) {
    return this.recommendationService.analyzeQuiz(dto);
  }

  @Post(['salary/predict', 'ai/salary/predict', 'api/salary/predict'])
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Predict monthly salary in EGP based on major, experience, and skills' })
  @ApiResponse({ status: 200, description: 'Salary estimation and market range returned successfully' })
  async predictSalary(@Body() dto: SalaryPredictDto) {
    return this.salaryPredictorService.predictSalary(dto);
  }
}
