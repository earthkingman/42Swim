import dotenv from "dotenv";
dotenv.config();

import { Entity, Column, ManyToOne, } from "typeorm";

import { Question } from "./question";
import { Answer } from "./answer";
import { Base } from "./base";

@Entity("photo")
export class Photo extends Base {
    @ManyToOne(() => Question, question => question.photo, { onDelete: 'CASCADE' })
    question: Question

    @ManyToOne(() => Answer, answer => answer.photo, { onDelete: 'CASCADE' })
    answer: Answer

    @Column()
    photo: string;
}
