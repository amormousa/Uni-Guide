import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { University } from './entities/university.entity';
import { College } from './entities/college.entity';

export interface KnowledgeSource {
  id: string;
  title: string;
  type: string;
  content: string;
}

@Injectable()
export class CollegesService implements OnModuleInit {
  constructor(
    @InjectRepository(University)
    private readonly universityRepository: Repository<University>,
    @InjectRepository(College)
    private readonly collegeRepository: Repository<College>,
  ) {}

  async findAllUniversities() {
    try {
      return await this.universityRepository.find({ relations: ['colleges'] });
    } catch {
      return this.getFallbackUniversities();
    }
  }

  async findAllColleges() {
    try {
      return await this.collegeRepository.find({ relations: ['university'] });
    } catch {
      return [];
    }
  }

  async getAvailableMajors(): Promise<string[]> {
    return [
      'Computer Science & Software Engineering',
      'Artificial Intelligence & Data Science',
      'Cybersecurity & Network Engineering',
      'Civil & Structural Engineering',
      'Mechanical & Mechatronics Engineering',
      'Electrical & Communication Engineering',
      'Biomedical Engineering',
      'Faculty of Medicine (Human Medicine)',
      'Faculty of Dentistry',
      'Faculty of Pharmacy & Clinical Pharmacy',
      'Faculty of Business Administration & Finance',
      'Marketing & Digital Media',
      'Faculty of Mass Communication & Journalism',
      'Faculty of Applied Arts & Graphic Design',
      'Faculty of Architectural Engineering & Interior Design',
    ];
  }

  async searchKnowledgeBase(query: string): Promise<KnowledgeSource[]> {
    const results: KnowledgeSource[] = [];
    const normalizedQuery = query.toLowerCase();

    const staticKb: KnowledgeSource[] = [
      {
        id: 'cairo-uni-eng',
        title: 'جامعة القاهرة - كلية الهندسة',
        type: 'University & College',
        content: 'كلية الهندسة جامعة القاهرة بالجيزة من أقدم وأعرق كليات الهندسة في الشرق الأوسط. تشمل أقسام الحاسبات، الكهرباء، الميكانيكا، المدني، العمارة، والطبية. يتطلب القبول الحصول على مجموع التنسيق الحكومي لشعبة علمي رياضة (عادةً أعلى من 85-90%).',
      },
      {
        id: 'cairo-uni-cs',
        title: 'جامعة القاهرة - كلية الحاسبات والذكاء الاصطناعي',
        type: 'University & College',
        content: 'كلية الحاسبات والذكاء الاصطناعي جامعة القاهرة توفر برامج تكنولوجيا المعلومات، علوم الحاسب، الذكاء الاصطناعي، ودعم اتخاذ القرار. تقبل طلاب شعبة علمي رياضة وعلمي علوم في البرامج الخاصة.',
      },
      {
        id: 'auc-main',
        title: 'الجامعة الأمريكية بالقاهرة (AUC)',
        type: 'Private University',
        content: 'الجامعة الأمريكية بالقاهرة تقع في التجمع الخامس (القاهرة الجديدة). تقدم برامج هندسة الحاسب، علوم الحاسب، إدارة الأعمال، والعلوم التشكيلية. الدراسة باللغة الإنجليزية وتتطلب اختبارات TOEFL/IELTS وتعتمد على الساعات المعتمدة.',
      },
      {
        id: 'ain-shams-med',
        title: 'جامعة عين شمس - كلية الطب',
        type: 'Medicine',
        content: 'كلية الطب جامعة عين شمس تمتاز بمستشفيات الدمرداش الجامعية وتوفر برنامج الطب والجراحة التكاملي (5+2). تقبل طلاب شعبة علمي علوم بالتنسيق الحكومي.',
      },
      {
        id: 'guc-tech',
        title: 'الجامعة الألمانية بالقاهرة (GUC)',
        type: 'Private University',
        content: 'الجامعة الألمانية بالقاهرة بالتجمع الخامس تقدم تخصصات هندسة تكنولوجيا المعلومات، الهندسة الألمانية، والصيدلة وتصميم المنتجات. الدراسة بالإنجليزية مع دروس ألمانية أساسية.',
      },
      {
        id: 'mansoura-med',
        title: 'جامعة المنصورة - مركز الكلى وكلية الطب',
        type: 'Medicine',
        content: 'جامعة المنصورة تشتهر بكونها عاصمة الطب في مصر بفضل مراكزها الطبية المتخصصة كمركز غنيم للكلى وجراحة المسالك.',
      },
      {
        id: 'salary-guidance',
        title: 'سوق العمل والرواتب في مصر 2026',
        type: 'Career Guidance',
        content: 'مجالات الحاسبات والذكاء الاصطناعي والهندسة البرمجية تبدأ رواتب الخريجين الجدد فيها في مصر من 10,000 إلى 18,000 جنيه مصري شهرياً، وتصل إلى 35,000-70,000+ جنيه لذوي الخبرة المتوسطة والمتقدمة والعمل عن بُعد.',
      },
    ];

    try {
      const unis = await this.universityRepository.find({ relations: ['colleges'] });
      for (const u of unis) {
        if (u.name.toLowerCase().includes(normalizedQuery) || u.description?.toLowerCase().includes(normalizedQuery)) {
          results.push({
            id: `db-uni-${u.id}`,
            title: u.name,
            type: 'University Database Record',
            content: `${u.name} - الموقع: ${u.location}. الوصف: ${u.description || ''}. الكليات المتاحة: ${u.colleges?.map(c => c.name).join(', ') || 'متعددة'}.`,
          });
        }
      }
    } catch {
      // Ignore DB errors during fallback search
    }

    for (const item of staticKb) {
      if (
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.content.toLowerCase().includes(normalizedQuery) ||
        item.type.toLowerCase().includes(normalizedQuery) ||
        normalizedQuery.split(' ').some(token => token.length > 2 && item.content.toLowerCase().includes(token))
      ) {
        if (!results.some(r => r.id === item.id)) {
          results.push(item);
        }
      }
    }

    if (results.length === 0) {
      return staticKb.slice(0, 3);
    }

    return results;
  }

  async onModuleInit() {
    try {
      await this.seed();
    } catch (err) {
      console.warn('Database seeding skipped (PostgreSQL not connected or table exists):', (err as Error).message);
    }
  }

  async seed() {
    try {
      const count = await this.universityRepository.count();
      if (count > 0) return;

      const uni1 = await this.universityRepository.save({
        name: 'Cairo University',
        location: 'Giza',
        description: 'The oldest university in Egypt with Faculty of Engineering, Medicine, CS',
      });

      const uni2 = await this.universityRepository.save({
        name: 'American University in Cairo (AUC)',
        location: 'New Cairo',
        description: 'Leading liberal arts and STEM research university in New Cairo',
      });

      await this.collegeRepository.save([
        { name: 'Faculty of Engineering', university: uni1, type: 'Engineering' },
        { name: 'Faculty of Medicine', university: uni1, type: 'Medicine' },
        { name: 'Faculty of Computers & Artificial Intelligence', university: uni1, type: 'Technology' },
        { name: 'Computer Science & Engineering Department', university: uni2, type: 'Technology' },
        { name: 'School of Business', university: uni2, type: 'Business' },
      ]);

      console.log('🌱 Database seeded successfully!');
    } catch (err) {
      console.warn('Seeding failed:', (err as Error).message);
    }
  }

  private getFallbackUniversities() {
    return [
      { id: 1, name: 'Cairo University', location: 'Giza', description: 'Cairo University', colleges: [] },
      { id: 2, name: 'American University in Cairo (AUC)', location: 'New Cairo', description: 'AUC', colleges: [] },
    ];
  }
}
