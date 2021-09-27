import dotenv from 'dotenv';
dotenv.config();
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne
} from 'typeorm'
import User from './User';
import Question from "./Question";
import Answer from './Answer';
import Base from './Base';

@Entity("comments")
export default class Comment extends Base {
    @Column()
    text: string;

    @ManyToOne(type => User, user => user.comment, { onDelete: 'CASCADE' })
    user: User;

    @ManyToOne(type => Question, question => question.comment, { onDelete: 'CASCADE' })
    question: Question;

    @ManyToOne(type => Answer, answer => answer.comment, { onDelete: 'CASCADE' })
    answer: Answer;

}