import { Controller, Get, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { QuizService } from './quiz.service';
import { QuizAnalyzeDto } from '../ai/dto/quiz-analyze.dto';

@ApiTags('Quiz')
@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get(['questions', '15-questions'])
  @ApiOperation({ summary: 'Get the 15 standard career discovery quiz questions' })
  @ApiResponse({ status: 200, description: '15 quiz questions returned successfully' })
  getQuestions() {
    return this.quizService.get15Questions();
  }

  @Post(['analyze', 'submit'])
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Submit 15 answers and receive AI recommendations' })
  @ApiResponse({ status: 200, description: 'Major recommendations generated' })
  analyzeAnswers(@Body() dto: QuizAnalyzeDto) {
    return this.quizService.analyzeQuiz(dto);
  }
}
