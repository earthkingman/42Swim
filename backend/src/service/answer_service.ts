import { getConnection, QueryRunner, Repository } from "typeorm";

import { Question } from "../entity/question";
import { Answer } from "../entity/answer";
import { User } from "../entity/user";

import { AnswerNotFoundException, AnswerForbiddenException } from "../exception/answer_exception";
import { UserNotFoundException } from "../exception/user_exception";
import { QuestionNotFoundException } from "../exception/question_exception";
import { DatabaseInternalServerErrorException } from "../exception/server_exception";

export class AnswerService {
	private queryRunner: QueryRunner;
	private userRepository: Repository<User>;
	private questionRepository: Repository<Question>;
	private answerRepository: Repository<Answer>;

	constructor() {
		this.queryRunner = getConnection().createQueryRunner();
		this.userRepository = this.queryRunner.manager.getRepository(User);
		this.questionRepository = this.queryRunner.manager.getRepository(Question);
		this.answerRepository = this.queryRunner.manager.getRepository(Answer);
	}

	async post(uploadAnswerInfo) {
		const { email, text, questionId, userId } = uploadAnswerInfo;

		const user = await this.userRepository
			.findOne({ where: { id: userId } });
		if (user === undefined) {
			await this.queryRunner.release();
			throw new UserNotFoundException(userId);
		}
		const question = await this.questionRepository
			.findOne({ where: { id: questionId } });
		if (question === undefined) {
			await this.queryRunner.release();
			throw new QuestionNotFoundException(questionId);
		}
		const answerInfo = { email, text, user, question, isChosen: false };

		await this.queryRunner.startTransaction();
		try {
			question.answer_count += 1;
			await this.questionRepository.save(question);
			const answer = await this.answerRepository.save(answerInfo);
			await this.queryRunner.commitTransaction();
		} catch (error) {
			console.log(error);
			await this.queryRunner.rollbackTransaction();
			throw new DatabaseInternalServerErrorException(error.message);
		} finally {
			await this.queryRunner.release();
		}
	}

	async update(updateAnswerInfo) {
		const { text, questionId, answerId, userId } = updateAnswerInfo;

		const answer = await this.answerRepository
			.findOne({
				where: { id: answerId, user: { id: userId }, question: { id: questionId } },
				relations: ['user', 'question']
			});
		if (answer === undefined) {
			const question = await this.questionRepository
				.findOne({ where: { id: questionId } });
			const noAuthAnswer = await this.answerRepository
				.findOne({
					where: { id: answerId, question: { id: questionId } },
					relations: ['question']
				});
			if (question === undefined) {
				await this.queryRunner.release();
				throw new QuestionNotFoundException(questionId);
			}
			else if (noAuthAnswer === undefined) {
				await this.queryRunner.release();
				throw new AnswerNotFoundException(answerId);
			}
			else {
				await this.queryRunner.release();
				throw new AnswerForbiddenException(answerId);
			}
		}
		await this.queryRunner.startTransaction();
		try {
			answer.text = text || answer.text;
			await this.answerRepository.save(answer);
			await this.queryRunner.commitTransaction();
		} catch (error) {
			console.log(error);
			await this.queryRunner.rollbackTransaction();
			throw new DatabaseInternalServerErrorException(error.message);
		} finally {
			await this.queryRunner.release();
		}
	}

	async delete(deleteAnswerInfo) {
		const { userId, questionId, answerId } = deleteAnswerInfo;

		const answer = await this.answerRepository
			.findOne({
				where: { id: answerId, user: { id: userId }, question: { id: questionId } },
				relations: ['user', 'question']
			});
		const question = await this.questionRepository
			.findOne({ where: { id: questionId } });
		if (answer === undefined) {
			const noAuthAnswer = await this.answerRepository
				.findOne({
					where: { id: answerId, question: { id: questionId } },
					relations: ['question']
				});
			if (question === undefined) {
				console.log(question);
				await this.queryRunner.release();
				throw new QuestionNotFoundException(questionId);
			}
			else if (noAuthAnswer === undefined) {
				await this.queryRunner.release();
				throw new AnswerNotFoundException(answerId);
			}
			else {
				await this.queryRunner.release();
				throw new AnswerForbiddenException(answerId);
			}
		}
		await this.queryRunner.startTransaction();
		try {
			question.answer_count -= 1;
			await this.questionRepository.save(question);
			await this.answerRepository.remove(answer);
			await this.queryRunner.commitTransaction();
		} catch (error) {
			console.error(error);
			await this.queryRunner.rollbackTransaction();
			throw new DatabaseInternalServerErrorException(error.message);
		} finally {
			await this.queryRunner.release();
		}
	}

	async chooseAnswer(chooseAnswerInfo):Promise<any>{
		const { userId, questionId, answerId } = chooseAnswerInfo;
		const answer = await this.answerRepository
			.findOne({
				where: { id: answerId, user: { id: userId }, question: { id: questionId } },
				relations: ['user', 'question']
			});
		const question = await this.questionRepository
			.findOne({ where: { id: questionId } });
		if (question.is_solved == true)
			throw new Error("This questionPost has been accepted.");

		if (answer === undefined) {

			const noAuthAnswer = await this.answerRepository
				.findOne({
					where: { id: answerId, question: { id: questionId } },
					relations: ['question']
				});
			if (question === undefined) {
				await this.queryRunner.release();
				throw new Error("The questionPost doesn't exist.");
			}
			else if (noAuthAnswer === undefined) {
				await this.queryRunner.release();
				throw new Error("The answerPost doesn't exist.");
			}
			else {
				await this.queryRunner.release();
				throw new Error("You don't have permission to choose.");
			}
		}
	await this.queryRunner.startTransaction();
	try {
		answer.is_chosen = true;
		question.is_solved = true;
		await this.answerRepository.save(answer);
		await this.questionRepository.save(question);
		await this.queryRunner.commitTransaction();
	} catch (error) {
		console.error(error);
		await this.queryRunner.rollbackTransaction();
		throw error;
	} finally {
		await this.queryRunner.release();
	}
	}
}