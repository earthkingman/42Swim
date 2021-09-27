import dotenv from 'dotenv';
dotenv.config();
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany
} from "typeorm"
import User from "./User";
import Question from "./Question";
import Photo from "./Photo"
import Comment from './Comment';
import Base from './Base';

@Entity("answer")
export default class Answer extends Base {
    @OneToMany(type => Photo, photo => photo.answer)
    photo: Photo[];

    @ManyToOne(type => Question, question => question.answer, { onDelete: 'CASCADE' })
    question: Question;

    @ManyToOne(type => User, user => user.answer, { onDelete: 'CASCADE' })
    user: User;

    @ManyToOne(type => Comment, comment => comment.answer, { onDelete: 'CASCADE' })
    comment: Comment;

    @Column()
    email: string;

    @Column()
    text: string;

    @Column()
    isChoosen: boolean
}
