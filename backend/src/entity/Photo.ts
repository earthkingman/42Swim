import dotenv from "dotenv";
dotenv.config();
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
    BeforeInsert,
    ManyToOne,
    OneToMany,
} from "typeorm";
import Post from "./Post";


@Entity("photos")
export default class Photo extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    photoId: number;

    @ManyToOne(type => Post, post => post.photo, { onDelete: 'CASCADE' })
    post: Post

    @Column()
    photo: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}