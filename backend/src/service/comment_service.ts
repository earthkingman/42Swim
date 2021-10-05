import { getConnection, QueryRunner, Repository } from "typeorm";

import { Answer } from "../entity/answer";
import { Comment } from "../entity/comment";
import { Question } from "../entity/question";
import { User } from "../entity/user";

export class CommentService {
	private queryRunner: QueryRunner;
	private userRepository: Repository<User>;
	private questionRepository: Repository<Question>;
	private answerRepository: Repository<Answer>;
	private commentRepository: Repository<Comment>;

	constructor() {
		this.queryRunner = getConnection().createQueryRunner();
		this.userRepository = this.queryRunner.manager.getRepository(User);
		this.questionRepository = this.queryRunner.manager.getRepository(Question);
		this.answerRepository = this.queryRunner.manager.getRepository(Answer);
		this.commentRepository = this.queryRunner.manager.getRepository(Comment);
	}

	async post(uploadCommentInfo) {
		const { userId, questionId, answerId, text } = uploadCommentInfo;

		const user = await this.userRepository
			.findOne({ where: { id: userId } });
		if (user === undefined) throw new Error("undefined user");
		const question = await this.questionRepository
			.findOne({ where: { id: questionId } });
		if (question === undefined) throw new Error("undefined question post");
		if (answerId) {
			const answer = await this.answerRepository
				.findOne({ where: { id: answerId } });
			if (answer === undefined) throw new Error("Comment that doesn't exist or you don't have edit right");
			await this.commentRepository.save({ user, answer, text });
		}
		else {
			await this.commentRepository.save({ user, question, text });
		}
	}

	async update(updateCommentInfo) {
		const { userId, questionId, answerId, commentId, text } = updateCommentInfo;

		const user = await this.userRepository
			.findOne({ where: { id: userId } });
		if (user === undefined) throw new Error("undefined user");
		const question = await this.questionRepository
			.findOne({ where: { id: questionId } });
		if (question === undefined) throw new Error("undefined question post");
		if (answerId) {
			const answer = await this.answerRepository
				.findOne({ where: { id: answerId } });
			if (answer === undefined) throw new Error("undefined answer post");
		}
		const comment = await this.commentRepository
			.findOne({ where: { id: commentId, user: user } });
		if (comment === undefined) throw new Error("Comment that doesn't exist or you don't have edit right");
		comment.text = text;
		await this.commentRepository.save(comment);
	}

	async delete(deleteCommentInfo) {
		const { userId, questionId, answerId, commentId } = deleteCommentInfo;

		const user = await this.userRepository
			.findOne({ where: { id: userId } });
		if (user === undefined) throw new Error("undefined user");
		const question = await this.questionRepository
			.findOne({ where: { id: questionId } });
		if (question === undefined) throw new Error("undefined question post");
		if (answerId) {
			const answer = await this.answerRepository
				.findOne({ where: { id: answerId } });
			if (answer === undefined) throw new Error("undefined answer post");
		}
		const comment = await this.commentRepository
			.findOne({ where: { id: commentId, user: user } });
		if (comment === undefined) throw new Error("Comment that doesn't exist or you don't have edit right");
		await this.commentRepository.remove(comment);
	}
}
