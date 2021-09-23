import { getConnection } from "typeorm";
import Photo from "../entity/Photo";
import Question from "../entity/Question";
import User from "../entity/User";
import HashTag from "../entity/HashTag";

const getQueryRunner = async () => {
	const connection = getConnection();
	const queryRunner = connection.createQueryRunner();
	await queryRunner.connect();
	return queryRunner;
}

const uploadQuestion = async (uploadQuestionInfo) => {
	const queryRunner = await getQueryRunner();
	const userRepository = queryRunner.manager.getRepository(User);
	const questionRepository = queryRunner.manager.getRepository(Question);
	const photoRepository = queryRunner.manager.getRepository(Photo);
	const hashTagRepository = queryRunner.manager.getRepository(HashTag);
	const { email, title, text, photos, userId, hashTag } = uploadQuestionInfo;
	const user = await userRepository
		.findOne({ where: { id: userId } });
	if (user === undefined) {
		throw new Error("The user doesn't exist.");
	}
	await queryRunner.startTransaction();
	try {
		const hashTagObject: HashTag[] = [];
		const hashTagNameList = hashTag.split('#')
		for (let i = 0; i < hashTagNameList.length; i++) {
			try {
				const exHashTag = await hashTagRepository.findOne({ where: { name: hashTagNameList[i] } });
				if (exHashTag === undefined) {
					/**
					 * 첫번째 방법
					 */
					// const newHashTag = new HashTag();
					// newHashTag.name = hashTagNameList[i];
					// await hashTagRepository.save(newHashTag);
					// hashTagObject.push(newHashTag);
					/**
					 * 두번째 방법
					 */
					const newHashTag = await hashTagRepository.save({ name: hashTagNameList[i] });
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
		const question = await questionRepository.save(questionInfo);
		await Promise.all(photos.map(async (photo) => {
			await photoRepository.save({ photo, question });
		}));
		await queryRunner.commitTransaction();
	} catch (error) {
		console.error(error);
		await queryRunner.rollbackTransaction();
		throw error;
	} finally {
		await queryRunner.release();
	}
}

const updateQuestion = async (updateQuestionInfo) => {
	const queryRunner = await getQueryRunner();
	const questionRepository = queryRunner.manager.getRepository(Question);
	const photoRepository = queryRunner.manager.getRepository(Photo);
	const hashRepository = queryRunner.manager.getRepository(HashTag);
	const { title, text, photos, questionId } = updateQuestionInfo;

	const question = await questionRepository
		.findOne({ where: { id: questionId } });
	if (question === undefined) {
		throw new Error("The questionPost doesn't exist.");
	}
	await queryRunner.startTransaction();
	try {
		await photoRepository.delete({ question: question });
		question.title = title || question.title;
		question.text = text || question.text;
		await questionRepository.save(question);
		await Promise.all(photos.map(async (photo) => {
			await photoRepository.save({ photo, question });
		}));
		await queryRunner.commitTransaction();
	} catch (error) {
		console.error(error);
		await queryRunner.rollbackTransaction();
		throw error;
	} finally {
		await queryRunner.release();
	}
}

const deleteQuestion = async (deleteQuestionInfo) => {
	const queryRunner = await getQueryRunner();
	const questionRepository = queryRunner.manager.getRepository(Question);

	const { questionId } = deleteQuestionInfo;
	const question = await questionRepository
		.findOne({ where: { id: questionId } });
	if (question === undefined) {
		throw new Error("The questionPost doesn't exist.");
	}
	await queryRunner.startTransaction();
	try {
		await questionRepository.remove(question);
		await queryRunner.commitTransaction();
	} catch (error) {
		console.error(error);
		await queryRunner.rollbackTransaction();
		throw error;
	} finally {
		await queryRunner.release();
	}
}

const findPhotoByQuestionId = async (questionId) => {
	const queryRunner = await getQueryRunner();
	const questionRepository = queryRunner.manager.getRepository(Question);
	const photoRepository = queryRunner.manager.getRepository(Photo);
	const question = await questionRepository
		.findOne({ where: { id: questionId } });
	if (question === undefined) {
		throw new Error("The questionPost doesn't exist.");
	}
	const photos = await photoRepository
		.find({ where: { question: question } });
	return photos;
}

export const QuestionService = { uploadQuestion, updateQuestion, deleteQuestion, findPhotoByQuestionId };