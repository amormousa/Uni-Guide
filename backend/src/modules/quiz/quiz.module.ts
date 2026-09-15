import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizQuestion } from './entities/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuizQuestion])],
  controllers: [],
  providers: [],
})
export class QuizModule {}
