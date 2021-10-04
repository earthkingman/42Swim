import { Column, Entity, ManyToOne } from 'typeorm'

import { Base } from './base';
import { User } from './user';
import { Answer } from './answer';

@Entity("answer_like")
export class AnswerLike extends Base {
	@Column()
	is_like: boolean;

	@ManyToOne(() => User, user => user.answer_like, { onDelete: 'CASCADE' })
	user: User;

	@ManyToOne(() => Answer, answer => answer.answer_like, { onDelete: 'CASCADE' })
	answer: Answer;
}