import Base from './Base';
import Question from './Question';
import { Column, Entity, ManyToMany } from 'typeorm'

@Entity("hashtag")
export default class HashTag extends Base {
    @Column()
    name: string;

    @ManyToMany(type => Question, question => question.hashTag)
    question: Question[];
}