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
import Photo from "./Photo"

@Entity("posts")
export default class Post {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @ManyToOne(type => User, user => user.id)
    user: User;

    @OneToMany(type => Photo, photo => photo.photoId)
    photo: Photo[];

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