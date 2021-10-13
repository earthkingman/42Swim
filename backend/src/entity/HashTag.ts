import { Column, Entity, ManyToMany } from 'typeorm'

import { Base } from './base';
import { Question } from './question';

@Entity("hashtag")
export class HashTag extends Base {
    @Column()
    name: string;

    @ManyToMany(() => Question, question => question.hashtag)
    question: Question[];
}