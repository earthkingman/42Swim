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
    ManyToMany,
    JoinTable,
} from "typeorm";
import User from "./User";
import Photo from "./Photo";
import Answer from "./Answer";
import Comment from "./Comment";
import Base from './Base';
import HashTag from './HashTag';
import Like from './Like';

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

    @ManyToMany(type => HashTag, hashTag => hashTag.question)
    @JoinTable()
    hashTag: HashTag[];

    @ManyToMany(type => Like, like => like.question)
    @JoinTable()
    like: Like[];

    @Column({ default: false })
    isSolved: boolean;

    @Column({ default: 0 })
    likeCount: number;

    @Column({ default: 0 })
    viewCount: number;

    @Column()
    title: string;

    @Column()
    text: string;
}