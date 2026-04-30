import { IsString, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SendOtpDto {
  @ApiProperty({ example: '+201234567890' })
  @IsString()
  @Matches(/^\+20\d{10}$/, { message: 'Phone must be a valid Egyptian number (+20XXXXXXXXXX)' })
  phone: string;
}
