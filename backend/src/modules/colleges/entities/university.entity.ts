import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';
import { College } from './college.entity';

@Entity('universities')
export class University extends BaseEntity {
  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'text', nullable: true })
  location: string;

  @Column({ type: 'text', nullable: true })
  website: string;

  @Column({ type: 'text', nullable: true })
  logo: string;

  @OneToMany(() => College, (college) => college.university)
  colleges: College[];
}
