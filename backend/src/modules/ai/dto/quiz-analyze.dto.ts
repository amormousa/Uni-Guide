import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class QuizAnswerItemDto {
  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  questionId!: number;

  @ApiProperty({ example: 'أفضل حل المشكلات البرمجية والتحليل المنطقي' })
  @IsNotEmpty()
  @IsString()
  answer!: string;

  @ApiProperty({ example: 'Analytical Thinking', required: false })
  @IsOptional()
  @IsString()
  category?: string;
}

export class QuizAnalyzeDto {
  @ApiProperty({ type: [QuizAnswerItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuizAnswerItemDto)
  answers!: QuizAnswerItemDto[];
}
