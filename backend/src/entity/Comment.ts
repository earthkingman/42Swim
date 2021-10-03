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

    @ManyToOne(() => User, user => user.comment, { onDelete: 'CASCADE' })
    user: User;

    @ManyToOne(() => Question, question => question.comment, { onDelete: 'CASCADE' })
    question: Question;

    @ManyToOne(() => Answer, answer => answer.comment, { onDelete: 'CASCADE' })
    answer: Answer;

}