import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SalaryPredictDto {
  @ApiProperty({ example: 'Computer Science', description: 'Major or field of study' })
  @IsNotEmpty()
  @IsString()
  major!: string;

  @ApiProperty({ example: 2, description: 'Years of practical experience' })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  experience!: number;

  @ApiProperty({ example: ['Python', 'SQL', 'TypeScript'], required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  skills?: string[];

  @ApiProperty({ example: 'Cairo', required: false })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiProperty({ example: 'Junior', required: false, description: 'Entry, Junior, Mid, Senior, Lead' })
  @IsOptional()
  @IsString()
  jobLevel?: string;
}
