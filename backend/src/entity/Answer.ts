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
import Post from "./Post";
import Photo from "./Photo"
import Comment from './Comment';

@Entity("answer")
export default class Answer {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @OneToMany(type => Photo, photo => photo.answer)
    photo: Photo[];

    @ManyToOne(type => Post, post => post.answer, { onDelete: 'CASCADE' })
    post: Post;

    @ManyToOne(type => User, user => user.answer, { onDelete: 'CASCADE' })
    user: User;

    @ManyToOne(type => Comment, comment => comment.answer, { onDelete: 'CASCADE' })
    comment: Comment;

    @Column()
    text: string;

    @Column()
    isChoosen: boolean

}
