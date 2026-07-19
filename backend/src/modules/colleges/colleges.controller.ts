import { Controller, Get, Param, Query } from '@nestjs/common';
import { CollegesService } from './colleges.service';

@Controller('colleges')
export class CollegesController {
  constructor(private readonly collegesService: CollegesService) { }

  // ================= Universities =================

  @Get('universities')
  getUniversities(
    @Query('type') type?: string,
    @Query('search') search?: string,
  ) {
    return this.collegesService.findAllUniversities(type, search);
  }

  @Get('universities/:id')
  getUniversity(
    @Param('id') id: string,
  ) {
    return this.collegesService.findUniversityById(id);
  }

  // ================= Colleges =================

  @Get()
  getColleges() {
    return this.collegesService.findAllColleges();
  }

  @Get(':id')
  getCollege(
    @Param('id') id: string,
  ) {
    return this.collegesService.findCollegeById(id);
  }

  // ================= Majors =================

  @Get(':id/majors')
  getMajors(
    @Param('id') id: string,
  ) {
    return this.collegesService.findCollegeMajors(id);
  }
}