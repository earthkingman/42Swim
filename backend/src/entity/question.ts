import dotenv from "dotenv";
dotenv.config();

import { Entity, Column, ManyToOne, OneToMany, ManyToMany, JoinTable, } from "typeorm";

import { User } from "./user";
import { Photo } from "./photo";
import { Answer } from "./answer";
import { Comment } from "./comment";
import { Base } from './base';
import { HashTag } from './hashtag';
import { QuestionLike } from "./question_like";

@Entity("question")
export class Question extends Base {
    @ManyToOne(() => User, user => user.question, { onDelete: 'CASCADE' })
    user: User;

    @OneToMany(() => Answer, answer => answer.question)
    answer: Answer[];

    @OneToMany(() => Photo, photo => photo.question)
    photo: Photo[];

    @OneToMany(() => Comment, comment => comment.question)
    comment: Comment[];

    @ManyToMany(() => HashTag, hashtag => hashtag.question)
    @JoinTable()
    hashtag: HashTag[];

    @OneToMany(() => QuestionLike, question_like => question_like.question)
    question_like: QuestionLike[];

    @Column({ default: false })
    is_solved: boolean;

    @Column({ default: 0 })
    like_count: number;

    @Column({ default: 0 })
    view_count: number;

    @Column()
    title: string;

    @Column("text")
    text: string;
}
