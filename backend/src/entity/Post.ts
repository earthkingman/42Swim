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

@Entity("questions")
export default class Post {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @ManyToOne(type => User, user => user.post, { onDelete: 'CASCADE' })
    user: User;

    @OneToMany(type => Answer, answer => answer.post)
    answer: Answer[];

    @OneToMany(type => Photo, photo => photo.post)
    photo: Photo[];

    @OneToMany(type => Comment, comment => comment.post)
    comment: Comment[];

    @Column()
    email: string;

    @Column()
    title: string;

    @Column()
    text: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}