import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';
import { User } from '../../users/entities/user.entity';

@Entity('quiz_sessions')
export class QuizSession extends BaseEntity {
  @Column({ type: 'text', name: 'user_id', nullable: true })
  userId: string | null;

  @ManyToOne(() => User, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'user_id' })
  user: User | null;

  @Column({ type: 'jsonb' })
  answers: { questionId: string; selectedOptionIndex: number; score: any }[];

  @Column({ type: 'jsonb', nullable: true })
  results: any; // e.g. recommended universities, match percentages, explanations
}
