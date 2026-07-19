import { Controller, Get, Post, Body, Req, UseGuards } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get('questions')
  getQuestions() {
    return this.quizService.findAllQuestions();
  }

  @Post('submit')
  submitQuiz(
    @Body() body: { answers: { questionId: string; selectedOptionIndex: number }[]; favorites?: string[] },
    @Req() req: any,
  ) {
    // If the request contains an authenticated user, pass their ID; otherwise pass null for guest users
    const userId = req.user?.id || null;
    const favorites = body.favorites || [];
    return this.quizService.submitQuiz(userId, body.answers, favorites);
  }
}
