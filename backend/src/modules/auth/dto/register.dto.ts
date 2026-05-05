import { IsString, IsNotEmpty, MinLength, IsEnum, IsOptional, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../../users/entities/user.entity';

export class RegisterDto {
  @ApiProperty({ example: 'Ahmed Hassan' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: '+201234567890' })
  @IsString()
  @Matches(/^\+20\d{10}$/, { message: 'Phone must be a valid Egyptian number (+20XXXXXXXXXX)' })
  phone: string;

  @ApiProperty({ example: 'SecurePass@123' })
  @IsString()
  @MinLength(8)
  password: string;

  @ApiProperty({ example: 'student', enum: UserRole })
  @IsEnum(UserRole)
  role: UserRole;

  @ApiProperty({ example: 'Cairo', required: false })
  @IsOptional()
  @IsString()
  governorate?: string;
}
