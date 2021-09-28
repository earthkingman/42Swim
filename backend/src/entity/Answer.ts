import dotenv from 'dotenv';
dotenv.config();
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany,
    ManyToMany,
    JoinTable,
} from "typeorm"
import User from "./User";
import Question from "./Question";
import Photo from "./Photo"
import Comment from './Comment';
import Base from './Base';
import Like from './Like'

@Entity("answers")
export default class Answer extends Base {
    @OneToMany(type => Photo, photo => photo.answer)
    photo: Photo[];

    @ManyToOne(type => Question, question => question.answer, { onDelete: 'CASCADE' })
    question: Question;

    @ManyToOne(type => User, user => user.answer, { onDelete: 'CASCADE' })
    user: User;

    @OneToMany(type => Comment, comment => comment.answer)
    comment: Comment[];

    @ManyToMany(type => Like, like => like.answer, { onDelete: 'CASCADE' })
    @JoinTable()
    like: Like[];

    @Column({ default: 0 })
    likeCount: number;

    @Column()
    text: string;

    @Column({ default: false })
    isChoosen: boolean
}
