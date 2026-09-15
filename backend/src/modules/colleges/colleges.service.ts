import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { University } from './entities/university.entity';
import { College } from './entities/college.entity';

@Injectable()
export class CollegesService implements OnModuleInit {
  constructor(
    @InjectRepository(University)
    private readonly universityRepository: Repository<University>,
    @InjectRepository(College)
    private readonly collegeRepository: Repository<College>,
  ) {}

  async findAllUniversities() {
    return this.universityRepository.find({ relations: ['colleges'] });
  }

  async findAllColleges() {
    return this.collegeRepository.find({ relations: ['university'] });
  }

  async onModuleInit() {
    await this.seed();
  }

  async seed() {
    const count = await this.universityRepository.count();
    if (count > 0) return;

    const uni1 = await this.universityRepository.save({
      name: 'Cairo University',
      location: 'Giza',
      description: 'The oldest university in Egypt',
    });

    const uni2 = await this.universityRepository.save({
      name: 'American University in Cairo (AUC)',
      location: 'New Cairo',
      description: 'A leading liberal arts institution',
    });

    await this.collegeRepository.save([
      {
        name: 'Faculty of Engineering',
        university: uni1,
        type: 'Engineering',
      },
      {
        name: 'Faculty of Medicine',
        university: uni1,
        type: 'Medicine',
      },
      {
        name: 'Computer Science',
        university: uni2,
        type: 'Technology',
      },
    ]);

    console.log('🌱 Database seeded with sample data!');
  }
}
