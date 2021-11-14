import { getConnection, QueryRunner, Repository } from "typeorm";

import { Question } from "../entity/question";
import { User } from "../entity/user";
import { HashTag } from "../entity/hashtag";

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
			throw new Error("The user doesn't exist.");
		}
		await this.queryRunner.startTransaction();
		try {
			const hashtagObject: HashTag[] = [];
			const hashtagNameList = hashtag.split('#')
			console.log(hashtag, hashtagNameList);
			for (let i = 0; i < hashtagNameList.length; i++) {
				try {
					const exHashTag = await this.hashtagRepository.findOne({ where: { name: hashtagNameList[i] } });
					if (exHashTag === undefined) {
						const newHashTag = await this.hashtagRepository.save({ name: hashtagNameList[i] });
						hashtagObject.push(newHashTag);
					}
					else {
						hashtagObject.push(exHashTag);
					}
				} catch (error) {
					await this.queryRunner.release();
					console.log(error);
				}
			}
			const questionInfo = { title, text, user, hashtag: hashtagObject };
			const question = await this.questionRepository.save(questionInfo);
			id = question.id;
			await this.queryRunner.commitTransaction();
		} catch (error) {
			console.error(error);
			await this.queryRunner.rollbackTransaction();
			throw error;
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
				throw new Error("You don't have edit permission");
			}
			else {
				await this.queryRunner.release();
				throw new Error("The questionPost doesn't exist.");
			}
		}
		await this.queryRunner.startTransaction();
		try {
			const hashtagObject: HashTag[] = [];
			if (hashtag != undefined) {
				const hashtagNameList = hashtag.split('#')
				for (let i = 0; i < hashtagNameList.length; i++) {
					const exHashTag = await this.hashtagRepository.findOne({ where: { name: hashtagNameList[i] } });
					if (exHashTag === undefined) {
						const newHashTag = await this.hashtagRepository.save({ name: hashtagNameList[i] });
						hashtagObject.push(newHashTag);
					}
					else {
						hashtagObject.push(exHashTag);
					}
				}
			}
			question.title = title || question.title;
			question.text = text || question.text;
			question.hashtag = hashtagObject || question.hashtag;
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
				throw new Error("You don't have edit permission");
			}
			else {
				await this.queryRunner.release();
				throw new Error("The questionPost doesn't exist.");
			}
		}
		await this.queryRunner.startTransaction();
		try {
			await this.questionRepository.remove(question);
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
