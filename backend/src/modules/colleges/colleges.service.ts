import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as XLSX from 'xlsx';
import * as path from 'path';

import { University } from './entities/university.entity';
import { College } from './entities/college.entity';
import { Specialization } from './entities/specialization.entity';

@Injectable()
export class CollegesService implements OnModuleInit {
  constructor(
    @InjectRepository(University)
    private readonly universityRepository: Repository<University>,

    @InjectRepository(College)
    private readonly collegeRepository: Repository<College>,

    @InjectRepository(Specialization)
    private readonly specializationRepository: Repository<Specialization>,
  ) { }

  async onModuleInit() {
    try {
      console.log('🔄 Starting automated Excel database import/update...');
      await this.importAllFromExcel();
      console.log('✅ Automated Excel database import/update finished successfully.');
    } catch (error) {
      console.error('❌ Automated Excel database import/update failed:', error);
    }
  }

  async importAllFromExcel() {
    const filePath = path.join(process.cwd(), 'UNI GUIDE.xlsx');
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json<any>(worksheet);

    console.log(`📄 Found ${data.length} rows in UNI GUIDE.xlsx`);

    for (const row of data) {
      const universityName = row['University'];
      const facultyName = row['Faculty'];
      const majors = row['Major'];

      if (!universityName || !facultyName) continue;

      // ================= UNIVERSITY =================
      let university = await this.universityRepository.findOne({
        where: { name: universityName },
      });

      if (!university) {
        university = this.universityRepository.create();
      }

      university.name = universityName;
      university.description = row['Description'] || '';
      university.location = row['Maps Link'] || '';
      university.mapsLink = row['Maps Link'] || '';
      university.logo = row['Image'] || '';
      university.website = row['Website'] || '';
      university.type = row['Type'] || '';
      university.applyLink = row['Apply Link'] || row['Website'] || '';

      await this.universityRepository.save(university);

      // ================= COLLEGE =================
      let college = await this.collegeRepository.findOne({
        where: {
          name: facultyName,
          universityId: university.id,
        },
      });

      if (!college) {
        college = await this.collegeRepository.save({
          name: facultyName,
          description: '',
          type: '',
          annualFee: Number(String(row['Annual Fee']).replace(/,/g, '')) || 0,
          universityId: university.id,
        });
      } else {
        // Update fee or other fields if they exist/changed
        college.annualFee = Number(String(row['Annual Fee']).replace(/,/g, '')) || 0;
        await this.collegeRepository.save(college);
      }

      // ================= SPECIALIZATIONS =================
      if (majors) {
        const majorList = String(majors)
          .split('\n')
          .map((m) => m.trim())
          .filter(Boolean);

        for (const major of majorList) {
          const exists = await this.specializationRepository.findOne({
            where: {
              name: major,
              college_id: college.id,
            },
          });

          if (!exists) {
            await this.specializationRepository.save({
              name: major,
              college_id: college.id,
            });
          }
        }
      }
    }
  }

  // =====================================================
  // Universities
  // =====================================================

  async findAllUniversities(type?: string, search?: string) {
    const query = this.universityRepository
      .createQueryBuilder('university')
      .leftJoinAndSelect('university.colleges', 'college')
      .leftJoinAndSelect('college.specializations', 'specialization');

    if (type && type !== 'All') {
      query.andWhere('college.type = :type', {
        type,
      });
    }

    if (search) {
      query.andWhere(
        `(LOWER(university.name) LIKE LOWER(:search)
        OR LOWER(college.name) LIKE LOWER(:search)
        OR LOWER(specialization.name) LIKE LOWER(:search))`,
        {
          search: `%${search}%`,
        },
      );
    }

    return query
      .orderBy('university.name', 'ASC')
      .getMany();
  }

  async findUniversityById(id: string) {
    return this.universityRepository.findOne({
      where: { id },
      relations: [
        'colleges',
        'colleges.specializations',
      ],
    });
  }

  // =====================================================
  // Colleges
  // =====================================================

  async findAllColleges() {
    return this.collegeRepository.find({
      relations: [
        'university',
        'specializations',
      ],
      order: {
        name: 'ASC',
      },
    });
  }

  async findCollegeById(id: string) {
    return this.collegeRepository.findOne({
      where: {
        id,
      },
      relations: [
        'university',
        'specializations',
      ],
    });
  }

  // =====================================================
  // Majors
  // =====================================================

  async findCollegeMajors(collegeId: string) {
    return this.specializationRepository.find({
      where: {
        college_id: collegeId,
      },
      order: {
        name: 'ASC',
      },
    });
  }

  // =====================================================
  // Excel Import
  // =====================================================

  async importUniversities() {
    const filePath = path.join(process.cwd(), 'UNI GUIDE.xlsx');

    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    const data = XLSX.utils.sheet_to_json<any>(worksheet);

    console.log(`📄 Found ${data.length} rows`);

    for (const row of data) {
      const universityName = row['University'];

      if (!universityName) continue;

      let university = await this.universityRepository.findOne({
        where: { name: universityName },
      });

      if (!university) {
        university = this.universityRepository.create();
      }

      university.name = universityName;
      university.description = row['Description'] || '';
      university.location = row['Maps Link'] || '';
      university.mapsLink = row['Maps Link'] || '';
      university.website = row['Website'] || '';
      university.logo = row['Image'] || '';
      university.type = row['Type'] || '';
      university.applyLink = row['Apply Link'] || row['Website'] || '';

      await this.universityRepository.save(university);

      console.log(`✅ Saved: ${universityName}`);
    }

    console.log('🎉 Import Finished');
  }

  async importColleges() { }
}