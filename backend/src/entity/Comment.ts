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
import Post from './Post'
import Answer from './Answer';

@Entity("comments")
export default class Comment {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    text: string;

    @ManyToOne(type => User, user => user.comment, { onDelete: 'CASCADE' })
    user: User;

    @ManyToOne(type => Post, post => post.comment, { onDelete: 'CASCADE' })
    post: Post;

    @ManyToOne(type => Answer, answer => answer.comment, { onDelete: 'CASCADE' })
    answer: Answer;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}