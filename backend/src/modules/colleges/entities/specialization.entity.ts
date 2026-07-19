import {
    Entity,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

import { BaseEntity } from '../../../common/entities/base.entity';
import { College } from './college.entity';

@Entity('specializations')
export class Specialization extends BaseEntity {

    @Column()
    name: string;

    @ManyToOne(
        () => College,
        (college) => college.specializations,
    )
    @JoinColumn({
        name: 'college_id',
    })
    college: College;

    @Column()
    college_id: string;
}