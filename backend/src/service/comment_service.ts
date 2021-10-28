import { getConnection, QueryRunner, Repository } from "typeorm";

import { Answer } from "../entity/answer";
import { Comment } from "../entity/comment";
import { Question } from "../entity/question";
import { User } from "../entity/user";

export class CommentService {
	private userRepository: Repository<User>;
	private questionRepository: Repository<Question>;
	private answerRepository: Repository<Answer>;
	private commentRepository: Repository<Comment>;

	constructor() {
		this.userRepository = getConnection().getRepository(User);
		this.questionRepository = getConnection().getRepository(Question);
		this.answerRepository = getConnection().getRepository(Answer);
		this.commentRepository = getConnection().getRepository(Comment);
	}

	async getAnswerComments(answerId) {
		const comments = await this.commentRepository
			.createQueryBuilder('comment')
			.where('comment.answerId = :answerId', { answerId })
			.leftJoinAndSelect('comment.user', 'user')
			.select([
				'comment.id', 'comment.created_at', 'comment.text',
				'user.id', 'user.created_at', 'user.email', 'user.nickname', 'user.photo',
			])
			.disableEscaping()
			.getMany();
		return comments;
	}

	async getQuestionComments(questionId) {
		const comments = await this.commentRepository
			.createQueryBuilder('comment')
			.where('comment.question = :questionId', { questionId })
			.leftJoinAndSelect('comment.user', 'user')
			.select([
				'comment.id', 'comment.created_at', 'comment.text',
				'user.id', 'user.created_at', 'user.email', 'user.nickname', 'user.photo',
			])
			.disableEscaping()
			.getMany();
		return comments;
	}

	async post(uploadCommentInfo) {
		const { userId, questionId, answerId, text } = uploadCommentInfo;

		const user = await this.userRepository
			.findOne({ where: { id: userId } });
		if (user === undefined) throw new Error("undefined user");

		if (answerId) {
			const answer = await this.answerRepository
				.findOne({ where: { id: answerId } });
			if (answer === undefined) {
				throw new Error("Comment that doesn't exist or you don't have edit right");
			}

			await this.commentRepository.save({ user, answer, text });
			const comments = await this.getAnswerComments(answerId);
			return comments;
		}
		else {
			const question = await this.questionRepository
				.findOne({ where: { id: questionId } });
			if (question === undefined) {
				throw new Error("undefined question post");
			}
			await this.commentRepository.save({ user, question, text });
			const comments = await this.getQuestionComments(questionId);
			return comments;
		}
	}

	async update(updateCommentInfo) {
		const { userId, questionId, answerId, commentId, text } = updateCommentInfo;

		if (answerId !== undefined) {
			const comment = await this.commentRepository
				.findOne({
					where: { id: commentId, user: { id: userId }, answer: { id: answerId } },
					relations: ['user', 'answer']
				});
			if (comment === undefined) {
				const answer = await this.answerRepository
					.findOne({ where: { id: answerId } });
				const noAuthComment = await this.commentRepository
					.findOne({
						where: { id: commentId, answer: { id: answerId } },
						relations: ['answer']
					});
				if (answer === undefined) {
					throw new Error("The answer doesn't exist.");
				}
				else if (noAuthComment) {
					throw new Error("You don't have edit right.");
				}
				else {
					throw new Error("The comment doesn't exist.");
				}
			}
			comment.text = text;
			await this.commentRepository.save(comment);
			const comments = await this.getAnswerComments(answerId);
			return comments;
		}
		else {
			const comment = await this.commentRepository
				.findOne({
					where: { id: commentId, user: { id: userId }, question: { id: questionId } },
					relations: ['user', 'question']
				});
			if (comment === undefined) {
				const question = await this.questionRepository
					.findOne({ where: { id: questionId } });
				const noAuthComment = await this.commentRepository
					.findOne({
						where: { id: commentId, answer: { id: answerId } },
						relations: ['answer']
					});
				if (question === undefined) {
					throw new Error("The question doesn't exist.");
				}
				else if (noAuthComment) {
					throw new Error("You don't have edit right.");
				}
				else {
					throw new Error("The comment doesn't exist.");
				}
			}
			comment.text = text;
			await this.commentRepository.save(comment);
			const comments = await this.getQuestionComments(questionId);
			return comments;
		}
	}

	async delete(deleteCommentInfo) {
		const { userId, questionId, answerId, commentId } = deleteCommentInfo;

		if (answerId !== undefined) {
			const comment = await this.commentRepository
				.findOne({
					where: { id: commentId, user: { id: userId }, answer: { id: answerId } },
					relations: ['user', 'answer']
				});
			if (comment === undefined) {
				const answer = await this.answerRepository
					.findOne({ where: { id: answerId } });
				const noAuthComment = await this.commentRepository
					.findOne({
						where: { id: commentId, answer: { id: answerId } },
						relations: ['answer']
					});
				if (answer === undefined) {
					throw new Error("The answer doesn't exist.");
				}
				else if (noAuthComment) {
					throw new Error("You don't have edit right.");
				}
				else {
					throw new Error("The comment doesn't exist.");
				}
			}
			await this.commentRepository.remove(comment);
			const comments = await this.getAnswerComments(answerId);
			return comments;
		}
		else {
			const comment = await this.commentRepository
				.findOne({
					where: { id: commentId, user: { id: userId }, question: { id: questionId } },
					relations: ['user', 'question']
				});
			if (comment === undefined) {
				const question = await this.questionRepository
					.findOne({ where: { id: questionId } });
				const noAuthComment = await this.commentRepository
					.findOne({
						where: { id: commentId, answer: { id: answerId } },
						relations: ['answer']
					});
				if (question === undefined) {
					throw new Error("The question doesn't exist.");
				}
				else if (noAuthComment) {
					throw new Error("You don't have edit right.");
				}
				else {
					throw new Error("The comment doesn't exist.");
				}
			}
			await this.commentRepository.remove(comment);
			const comments = await this.getQuestionComments(questionId);
			return comments;
		}
	}
}
