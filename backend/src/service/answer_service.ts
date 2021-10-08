import { getConnection, QueryRunner, Repository } from "typeorm";

import { Photo } from "../entity/photo";
import { Question } from "../entity/question";
import { Answer } from "../entity/answer";
import { User } from "../entity/user";

export class AnswerService {
	private queryRunner: QueryRunner;
	private userRepository: Repository<User>;
	private questionRepository: Repository<Question>;
	private answerRepository: Repository<Answer>;
	private photoRepository: Repository<Photo>;

	constructor() {
		this.queryRunner = getConnection().createQueryRunner();
		this.userRepository = this.queryRunner.manager.getRepository(User);
		this.questionRepository = this.queryRunner.manager.getRepository(Question);
		this.answerRepository = this.queryRunner.manager.getRepository(Answer);
		this.photoRepository = this.queryRunner.manager.getRepository(Photo);
	}

	async post(uploadAnswerInfo) {
		const { email, text, photos, questionId, userId } = uploadAnswerInfo;

		const user = await this.userRepository
			.findOne({ where: { id: userId } });
		if (user === undefined) {
			throw new Error("The user doesn't exist.");
		}
		const question = await this.questionRepository
			.findOne({ where: { id: questionId } });
		if (question === undefined) {
			throw new Error("The questionPost doesn't exist.");
		}
		const answerInfo = { email, text, user, question, isChoosen: false };

		await this.queryRunner.startTransaction();
		try {
			const answer = await this.answerRepository.save(answerInfo);
			await Promise.all(photos.map(async (photo) => {
				await this.photoRepository.save({ photo, question, answer });
			}));
			await this.queryRunner.commitTransaction();
		} catch (error) {
			console.error(error);
			await this.queryRunner.rollbackTransaction();
			throw error;
		} finally {
			await this.queryRunner.release();
		}
	}

	async update(updateAnswerInfo) {
		const { text, photos, questionId, answerId, userId } = updateAnswerInfo;

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
				throw new Error("The questionPost doesn't exist.");
			}
			else if (noAuthAnswer === undefined) {
				throw new Error("The answerPost doesn't exist.");
			}
			else {
				throw new Error("You don't have permission to edit.");
			}
		}
		await this.queryRunner.startTransaction();
		try {
			await this.photoRepository.delete({ answer: answer });
			answer.text = text || answer.text;
			await this.answerRepository.save(answer);
			await Promise.all(photos.map(async (photo) => {
				await this.photoRepository.save({ photo, answer });
			}));
			await this.queryRunner.commitTransaction();
		} catch (error) {
			console.error(error);
			await this.queryRunner.rollbackTransaction();
			throw error;
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
		if (answer === undefined) {
			const question = await this.questionRepository
				.findOne({ where: { id: questionId } });
			const noAuthAnswer = await this.answerRepository
				.findOne({
					where: { id: answerId, question: { id: questionId } },
					relations: ['question']
				});
			if (question === undefined) {
				throw new Error("The questionPost doesn't exist.");
			}
			else if (noAuthAnswer === undefined) {
				throw new Error("The answerPost doesn't exist.");
			}
			else {
				throw new Error("You don't have permission to edit.");
			}
		}
		await this.queryRunner.startTransaction();
		try {
			await this.answerRepository.remove(answer);
			await this.queryRunner.commitTransaction();
		} catch (error) {
			console.error(error);
			await this.queryRunner.rollbackTransaction();
			throw error;
		} finally {
			await this.queryRunner.release();
		}
	}

	async findPhotoByAnswerId(answerId) {
		const photos = await this.photoRepository
			.find({
				where: { answer: { id: answerId } },
				relations: ["answer"]
			});
		return photos;
	}

}