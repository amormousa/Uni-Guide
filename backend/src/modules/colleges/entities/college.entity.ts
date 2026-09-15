import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';
import { University } from './university.entity';

@Entity('colleges')
export class College extends BaseEntity {
  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'text', nullable: true })
  type: string; // e.g., Engineering, Medicine, Arts

  @Column({ type: 'jsonb', nullable: true })
  requirements: any;

  @ManyToOne(() => University, (university) => university.colleges)
  @JoinColumn({ name: 'university_id' })
  university: University;

  @Column({ name: 'university_id' })
  universityId: string;
}
