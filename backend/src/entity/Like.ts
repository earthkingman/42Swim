import Base from './Base';
import Question from './Question';
import { Column, Entity, ManyToMany } from 'typeorm'
import User from './User';
import Answer from './Answer';

@Entity("likes")
export default class Like extends Base {
	@Column()
	isLike: boolean;

	@ManyToMany(type => Question, question => question.like)
	question: Question[];

	@ManyToMany(type => User, user => user.like)
	user: User[];

	@ManyToMany(type => Answer, answer => answer.like)
	answer: Answer[];
}