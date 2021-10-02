import dotenv from "dotenv";
dotenv.config();
import {
    Entity,
    Column,
    ManyToOne,
} from "typeorm";
import Question from "./Question";
import Answer from "./Answer";
import Base from "./Base";

@Entity("photos")
export default class Photo extends Base {
    @ManyToOne(type => Question, question => question.photo, { onDelete: 'CASCADE' })
    question: Question

    @ManyToOne(type => Answer, answer => answer.photo, { onDelete: 'CASCADE' })
    answer: Answer

    @Column()
    photo: string;
}