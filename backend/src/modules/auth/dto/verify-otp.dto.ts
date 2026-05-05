import { IsString, Matches, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class VerifyOtpDto {
  @ApiProperty({ example: '+201234567890' })
  @IsString()
  @Matches(/^\+20\d{10}$/, { message: 'Phone must be a valid Egyptian number (+20XXXXXXXXXX)' })
  phone: string;

  @ApiProperty({ example: '123456' })
  @IsString()
  @Length(6, 6, { message: 'OTP code must be exactly 6 digits' })
  code: string;
}
