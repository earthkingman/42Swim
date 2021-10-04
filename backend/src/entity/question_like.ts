import { Column, Entity, ManyToOne } from 'typeorm'

import { Base } from './base';
import { Question } from './question';
import { User } from './user';

@Entity("question_like")
export class QuestionLike extends Base {
	@Column()
	is_like: boolean;

	@ManyToOne(() => Question, question => question.question_like, { onDelete: 'CASCADE' })
	question: Question;

	@ManyToOne(() => User, user => user.question_like, { onDelete: 'CASCADE' })
	user: User;
}