import { getConnection, QueryRunner, Repository } from "typeorm";

import { Photo } from "../entity/photo";
import { Question } from "../entity/question";
import { User } from "../entity/user";
import { HashTag } from "../entity/hashtag";

export class QuestionService {
	private queryRunner: QueryRunner;
	private userRepository: Repository<User>;
	private questionRepository: Repository<Question>;
	private hashtagRepository: Repository<HashTag>;
	private photoRepository: Repository<Photo>;

	constructor() {
		this.queryRunner = getConnection().createQueryRunner();
		this.userRepository = this.queryRunner.manager.getRepository(User);
		this.questionRepository = this.queryRunner.manager.getRepository(Question);
		this.hashtagRepository = this.queryRunner.manager.getRepository(HashTag);
		this.photoRepository = this.queryRunner.manager.getRepository(Photo);
	}

	async getViewByQuestionId(questinoId) {
		const questionId = questinoId;
		const question = await this.questionRepository.findOne({ where: { id: questinoId } });
		return question.view_count;
	}


	async upload(uploadQuestionInfo) {
		const { email, title, text, photos, userId, hashTag } = uploadQuestionInfo;

		const user = await this.userRepository
			.findOne({ where: { id: userId } });
		if (user === undefined) {
			throw new Error("The user doesn't exist.");
		}
		await this.queryRunner.startTransaction();
		try {
			const hashTagObject: HashTag[] = [];
			const hashTagNameList = hashTag.split('#')
			for (let i = 0; i < hashTagNameList.length; i++) {
				try {
					const exHashTag = await this.hashtagRepository.findOne({ where: { name: hashTagNameList[i] } });
					if (exHashTag === undefined) {
						const newHashTag = await this.hashtagRepository.save({ name: hashTagNameList[i] });
						hashTagObject.push(newHashTag);
					}
					else {
						hashTagObject.push(exHashTag);
					}
				} catch (error) {
					console.log(error);
				}
			}
			const questionInfo = { email, title, text, user, hashTag: hashTagObject };
			const question = await this.questionRepository.save(questionInfo);
			await Promise.all(photos.map(async (photo) => {
				await this.photoRepository.save({ photo, question });
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

	async update(updateQuestionInfo) {
		const { title, text, photos, questionId, hashTag } = updateQuestionInfo;

		const question = await this.questionRepository
			.findOne({ where: { id: questionId } });
		if (question === undefined) {
			throw new Error("The questionPost doesn't exist.");
		}
		await this.queryRunner.startTransaction();
		try {
			await this.photoRepository.delete({ question: question });
			const hashTagObject: HashTag[] = [];
			if (hashTag != undefined) {
				const hashTagNameList = hashTag.split('#')
				for (let i = 0; i < hashTagNameList.length; i++) {
					const exHashTag = await this.hashtagRepository.findOne({ where: { name: hashTagNameList[i] } });
					if (exHashTag === undefined) {
						const newHashTag = await this.hashtagRepository.save({ name: hashTagNameList[i] });
						hashTagObject.push(newHashTag);
					}
					else {
						hashTagObject.push(exHashTag);
					}
				}
			}
			question.title = title || question.title;
			question.text = text || question.text;
			question.hashtag = hashTagObject || question.hashtag;
			await this.questionRepository.save(question);
			await Promise.all(photos.map(async (photo) => {
				await this.photoRepository.save({ photo, question });
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

	async delete(deleteQuestionInfo) {
		const { questionId } = deleteQuestionInfo;
		const question = await this.questionRepository
			.findOne({ where: { id: questionId } });
		if (question === undefined) {
			throw new Error("The questionPost doesn't exist.");
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

	async findPhotoByQuestionId(questionId) {
		const question = await this.questionRepository
			.findOne({ where: { id: questionId } });
		if (question === undefined) {
			throw new Error("The questionPost doesn't exist.");
		}
		const photos = await this.photoRepository
			.find({ where: { question: question } });
		return photos;
	}

}