import dotenv from 'dotenv';
dotenv.config();

import { Entity, Column, ManyToOne } from 'typeorm'

import { User } from './user';
import { Question } from "./question";
import { Answer } from './answer';
import { Base } from './base';

@Entity("comment")
export class Comment extends Base {
    @Column()
    text: string;

    @ManyToOne(() => User, user => user.comment, { onDelete: 'CASCADE' })
    user: User;

    @ManyToOne(() => Question, question => question.comment, { onDelete: 'CASCADE' })
    question: Question;

    @ManyToOne(() => Answer, answer => answer.comment, { onDelete: 'CASCADE' })
    answer: Answer;

}