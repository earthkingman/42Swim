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

    @Column({ default: 0 })
    image: number;

    @CreateDateColumn({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP(6)",
    })
    public created_at: Date;

    @UpdateDateColumn({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP(6)",
        onUpdate: "CURRENT_TIMESTAMP(6)",
    })
    public updated_at: Date;
}