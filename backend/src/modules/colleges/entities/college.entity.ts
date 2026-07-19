import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { BaseEntity } from '../../../common/entities/base.entity';
import { University } from './university.entity';
import { Specialization } from './specialization.entity';

@Entity('colleges')
export class College extends BaseEntity {
  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'text', nullable: true })
  type: string;

  @Column({ type: 'jsonb', nullable: true })
  requirements: any;

  @Column({
    type: 'decimal',
    nullable: true,
  })
  annualFee: number;

  @ManyToOne(() => University, (university) => university.colleges)
  @JoinColumn({ name: 'university_id' })
  university: University;

  @Column({ name: 'university_id' })
  universityId: string;

  // =========================
  // MAJORS
  // =========================

  @OneToMany(
    () => Specialization,
    (specialization) => specialization.college,
  )
  specializations: Specialization[];
}