import dotenv from "dotenv";
dotenv.config();
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
} from "typeorm";
import Post from "./Post";
import Answer from "./Answer";


@Entity("photos")
export default class Photo {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @ManyToOne(type => Post, post => post.photo, { onDelete: 'CASCADE' })
    post: Post

    @ManyToOne(type => Answer, answer => answer.photo, { onDelete: 'CASCADE' })
    answer: Answer

    @Column()
    photo: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}