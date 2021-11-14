import dotenv from 'dotenv';
dotenv.config();

import { Entity, Column, ManyToOne, OneToMany } from "typeorm"

import { User } from "./user";
import { Question } from "./question";
import { Comment } from './comment';
import { Base } from './base';
import { AnswerLike } from './answer_like';

@Entity("answer")
export class Answer extends Base {

    @ManyToOne(() => Question, question => question.answer, { onDelete: 'CASCADE' })
    question: Question;

    @ManyToOne(() => User, user => user.answer, { onDelete: 'CASCADE' })
    user: User;

    @OneToMany(() => Comment, comment => comment.answer)
    comment: Comment[];

    @OneToMany(() => AnswerLike, answer_like => answer_like.answer)
    answer_like: AnswerLike[];

    @Column({ default: 0 })
    like_count: number;

    @Column("longtext")
    text: string;

    @Column({ default: false })
    is_chosen: boolean
}
