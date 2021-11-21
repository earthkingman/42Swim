import { getConnection, QueryRunner, Repository } from "typeorm";

import { Question } from "../entity/question";
import { User } from "../entity/user";
import { HashTag } from "../entity/hashtag";

import { UserNotFoundException } from "../exception/user_exception";
import { QuestionNotFoundException, QuestionForbiddenException } from "../exception/question_exception";
import { DatabaseInternalServerErrorException } from "../exception/server_exception";

export class QuestionService {
	private queryRunner: QueryRunner;
	private userRepository: Repository<User>;
	private questionRepository: Repository<Question>;
	private hashtagRepository: Repository<HashTag>;

	constructor() {
		this.queryRunner = getConnection().createQueryRunner();
		this.userRepository = this.queryRunner.manager.getRepository(User);
		this.questionRepository = this.queryRunner.manager.getRepository(Question);
		this.hashtagRepository = this.queryRunner.manager.getRepository(HashTag);
	}

	async post(uploadQuestionInfo) {
		const { title, text, userId, hashtag } = uploadQuestionInfo;
		const user = await this.userRepository
			.findOne({ where: { id: userId } });
		let id = 0;
		if (user === undefined) {
			await this.queryRunner.release();
			throw new UserNotFoundException(userId);
		}
		await this.queryRunner.startTransaction();
		try {
			const hashtagObject: HashTag[] = [];
			for (let i = 0; i < hashtag.length; i++) {
				try {
					const exHashTag = await this.hashtagRepository.findOne({ where: { name: hashtag[i] } });
					if (exHashTag === undefined) {
						const newHashTag = await this.hashtagRepository.save({ name: hashtag[i] });
						hashtagObject.push(newHashTag);
					}
					else {
						hashtagObject.push(exHashTag);
					}
				} catch (error) {
					await this.queryRunner.release();
				}
			}
			const questionInfo = { title, text, user, hashtag: hashtagObject };
			const question = await this.questionRepository.save(questionInfo);
			id = question.id;
			await this.queryRunner.commitTransaction();
		} catch (error) {
			console.error(error);
			await this.queryRunner.rollbackTransaction();
			throw new DatabaseInternalServerErrorException(error.message);
		} finally {
			await this.queryRunner.release();
		}
		return id;
	}

	async update(updateQuestionInfo) {
		const { title, text, questionId, userId, hashtag } = updateQuestionInfo;
		const question = await this.questionRepository
			.findOne({
				where: { id: questionId, user: { id: userId } },
				relations: ['user']
			});
		if (question === undefined) {
			const noAuthQuestion = await this.questionRepository
				.findOne({ where: { id: questionId } });
			if (noAuthQuestion !== undefined) {
				await this.queryRunner.release();
				throw new QuestionForbiddenException(questionId);
			}
			else {
				await this.queryRunner.release();
				throw new QuestionNotFoundException(questionId);
			}
		}
		await this.queryRunner.startTransaction();
		try {
			const hashtagObject: HashTag[] = [];
			if (hashtag !== undefined) {
				for (let i = 0; i < hashtag.length; i++) {
					const exHashTag = await this.hashtagRepository.findOne({ where: { name: hashtag[i] } });
					if (exHashTag === undefined) {
						const newHashTag = await this.hashtagRepository.save({ name: hashtag[i] });
						hashtagObject.push(newHashTag);
					}
					else {
						hashtagObject.push(exHashTag);
					}
				}
			}
			question.title = title || question.title;
			question.text = text || question.text;
			if (hashtagObject.length > 0) {
				question.hashtag = hashtagObject;
			}
			await this.questionRepository.save(question);
			await this.queryRunner.commitTransaction();
		} catch (error) {
			console.error(error);
			await this.queryRunner.rollbackTransaction();
			throw new DatabaseInternalServerErrorException(error.message);
		} finally {
			await this.queryRunner.release();
		}
	}

	async delete(deleteQuestionInfo) {
		const { questionId, userId } = deleteQuestionInfo;
		const question = await this.questionRepository
			.findOne({
				where: { id: questionId, user: { id: userId } },
				relations: ['user']
			});
		if (question === undefined) {
			const noAuthQuestion = await this.questionRepository
				.findOne({ where: { id: questionId } });
			if (noAuthQuestion !== undefined) {
				await this.queryRunner.release();
				throw new QuestionForbiddenException(questionId);
			}
			else {
				await this.queryRunner.release();
				throw new QuestionNotFoundException(questionId);
			}
		}
		await this.queryRunner.startTransaction();
		try {
			await this.questionRepository.remove(question);
			await this.queryRunner.commitTransaction();
		} catch (error) {
			console.error(error);
			await this.queryRunner.rollbackTransaction();
			throw new DatabaseInternalServerErrorException(error.message);
		} finally {
			await this.queryRunner.release();
		}
	}
}
