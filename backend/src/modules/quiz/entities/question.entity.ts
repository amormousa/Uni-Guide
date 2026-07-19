import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity('quiz_questions')
export class QuizQuestion extends BaseEntity {
  @Column({ type: 'text' })
  text: string;

  @Column({ type: 'jsonb' })
  options: { text: string; score: any }[]; // Options with scores for career paths

  @Column({ type: 'text', nullable: true })
  category: string; // e.g., Analytical, Creative, Social
}
