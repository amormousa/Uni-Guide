import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';
import { User } from '../../users/entities/user.entity';

@Entity('payments')
export class Payment extends BaseEntity {
  @Column({ type: 'text', name: 'user_id' })
  userId: string;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column({ type: 'text' })
  currency: string;

  @Column({ type: 'text', name: 'plan_name' })
  planName: string; // 'basic' | 'pro'

  @Column({ type: 'text', name: 'payment_id', unique: true, nullable: true })
  paymentId: string | null; // MyFatoorah PaymentId

  @Column({ type: 'text', name: 'invoice_id', nullable: true })
  invoiceId: string | null; // MyFatoorah InvoiceId

  @Column({ type: 'text', default: 'pending' })
  status: string; // 'pending' | 'success' | 'failed' | 'cancelled'
}
