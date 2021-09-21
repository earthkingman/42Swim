import dotenv from "dotenv";
dotenv.config();
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany,
} from "typeorm";
import User from "./User";
import Photo from "./Photo";
import Answer from "./Answer";
import Comment from "./Comment";
import Base from './Base';

@Entity("questions")
export default class Question extends Base {
    @ManyToOne(type => User, user => user.question, { onDelete: 'CASCADE' })
    user: User;

    @OneToMany(type => Answer, answer => answer.question)
    answer: Answer[];

    @OneToMany(type => Photo, photo => photo.question)
    photo: Photo[];

    @OneToMany(type => Comment, comment => comment.question)
    comment: Comment[];

    @Column()
    email: string;

    @Column()
    title: string;

    @Column()
    text: string;
}