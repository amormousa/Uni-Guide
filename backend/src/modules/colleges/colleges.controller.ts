import { Controller, Get } from '@nestjs/common';
import { CollegesService } from './colleges.service';

@Controller('colleges')
export class CollegesController {
  constructor(private readonly collegesService: CollegesService) {}

  @Get('universities')
  getUniversities() {
    return this.collegesService.findAllUniversities();
  }

  @Get()
  getColleges() {
    return this.collegesService.findAllColleges();
  }
}
