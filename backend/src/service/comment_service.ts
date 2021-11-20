import { getConnection, QueryRunner, Repository } from "typeorm";

import { Answer } from "../entity/answer";
import { Comment } from "../entity/comment";
import { Question } from "../entity/question";
import { User } from "../entity/user";

import { CommentForbiddenException, CommentNotFoundException } from "../exception/comment_exception";
import { AnswerNotFoundException } from "../exception/answer_exception";
import { UserNotFoundException } from "../exception/user_exception";
import { QuestionNotFoundException } from "../exception/question_exception";
import { DatabaseInternalServerErrorException } from "../exception/server_exception";

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

	async post(uploadCommentInfo) {
		const { userId, questionId, answerId, text } = uploadCommentInfo;

		const user = await this.userRepository
			.findOne({ where: { id: userId } });
		if (user === undefined) throw new UserNotFoundException(userId);

		if (answerId) {
			const answer = await this.answerRepository
				.findOne({ where: { id: answerId } });
			if (answer === undefined) {
				throw new AnswerNotFoundException(answerId);
			}
			await this.commentRepository.save({ user, answer, text });
		}
		else {
			const question = await this.questionRepository
				.findOne({ where: { id: questionId } });
			if (question === undefined) {
				throw new QuestionNotFoundException(questionId);
			}
			await this.commentRepository.save({ user, question, text });
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
					throw new AnswerNotFoundException(answerId);
				}
				else if (noAuthComment) {
					throw new CommentForbiddenException(commentId);
				}
				else {
					throw new CommentNotFoundException(commentId);
				}
			}
			comment.text = text;
			await this.commentRepository.save(comment);
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
					throw new QuestionNotFoundException(questionId);
				}
				else if (noAuthComment) {
					throw new CommentForbiddenException(commentId);
				}
				else {
					throw new CommentNotFoundException(commentId);
				}
			}
			comment.text = text;
			await this.commentRepository.save(comment);
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
					throw new AnswerNotFoundException(answerId);
				}
				else if (noAuthComment) {
					throw new CommentForbiddenException(commentId);
				}
				else {
					throw new CommentNotFoundException(commentId);
				}
			}
			await this.commentRepository.remove(comment);
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
					throw new QuestionNotFoundException(questionId);
				}
				else if (noAuthComment) {
					throw new CommentForbiddenException(commentId);
				}
				else {
					throw new CommentNotFoundException(commentId);
				}
			}
			await this.commentRepository.remove(comment);
		}
	}
}
