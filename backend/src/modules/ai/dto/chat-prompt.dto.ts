import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ChatPromptDto {
  @ApiProperty({ description: 'User prompt to send to AI model', example: 'ما هي أفضل كليات الحاسبات في مصر؟', required: false })
  @IsOptional()
  @IsString()
  prompt?: string;

  @ApiProperty({ description: 'Alias for prompt', example: 'ما هي مواعيد التنسيق؟', required: false })
  @IsOptional()
  @IsString()
  message?: string;

  @ApiProperty({ description: 'Optional conversation ID', required: false })
  @IsOptional()
  @IsString()
  conversationId?: string;
}
