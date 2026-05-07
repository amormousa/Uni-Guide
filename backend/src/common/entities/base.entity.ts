import {/* `'@nestjs/common'` is importing functionality from the NestJS framework's common module. This module contains commonly used decorators, utilities, and other features that are essential for building NestJS applications. In this specific code snippet, it is used to import `createParamDecorator` and `ExecutionContext` which are necessary for creating a custom decorator in a NestJS application. */

  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class TimeStamp {
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    update: false,
  })
  createdAt!: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
  })
  updatedAt!: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamptz',
  })
  deletedAt!: Date;
}

export abstract class BaseEntity extends TimeStamp {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
}
