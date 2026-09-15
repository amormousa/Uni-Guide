import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ChatPromptDto {
  @ApiProperty({ description: 'User prompt to send to AI model', example: 'ما هي أفضل كليات الحاسبات في مصر؟' })
  @IsNotEmpty({ message: 'prompt is required' })
  @IsString()
  prompt!: string;
}
