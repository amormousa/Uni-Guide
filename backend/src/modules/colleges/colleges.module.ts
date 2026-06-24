import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { University } from './entities/university.entity';
import { College } from './entities/college.entity';
import { CollegesService } from './colleges.service';
import { CollegesController } from './colleges.controller';

@Module({
  imports: [TypeOrmModule.forFeature([University, College])],
  providers: [CollegesService],
  controllers: [CollegesController],
  exports: [TypeOrmModule],
})
export class CollegesModule {}
