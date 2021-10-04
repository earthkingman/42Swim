import { getConnection } from "typeorm";

import { Photo } from "../entity/photo";
import { Question } from "../entity/question";
import { Answer } from "../entity/answer";
import { User } from "../entity/user";

const getQueryRunner = async () => {
	const connection = getConnection();
	const queryRunner = connection.createQueryRunner();
	await queryRunner.connect();
	return queryRunner;
}

const uploadAnswer = async (uploadAnswerInfo) => {
	const queryRunner = await getQueryRunner();
	const userRepository = queryRunner.manager.getRepository(User);
	const questionRepository = queryRunner.manager.getRepository(Question);
	const answerRepository = queryRunner.manager.getRepository(Answer);
	const photoRepository = queryRunner.manager.getRepository(Photo);
	const { email, text, photos, questionId, userId } = uploadAnswerInfo;

	const user = await userRepository
		.findOne({ where: { id: userId } });
	if (user === undefined) {
		throw new Error("The user doesn't exist.");
	}
	const question = await questionRepository
		.findOne({ where: { id: questionId } });
	if (question === undefined) {
		throw new Error("The questionPost doesn't exist.");
	}
	const answerInfo = { email, text, user, question, isChoosen: false };

	await queryRunner.startTransaction();
	try {
		const answer = await answerRepository.save(answerInfo);
		await Promise.all(photos.map(async (photo) => {
			await photoRepository.save({ photo, question, answer });
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

const updateAnswer = async (updateAnswerInfo) => {
	const queryRunner = await getQueryRunner();
	const userRepository = queryRunner.manager.getRepository(User);
	const questionRepository = queryRunner.manager.getRepository(Question);
	const answerRepository = queryRunner.manager.getRepository(Answer);
	const photoRepository = queryRunner.manager.getRepository(Photo);
	const { text, photos, questionId, answerId, userId } = updateAnswerInfo;

	const user = await userRepository
		.findOne({ where: { id: userId } });
	if (user === undefined) {
		throw new Error("The user doesn't exist.");
	}
	const question = await questionRepository
		.findOne({ where: { id: questionId } });
	if (question === undefined) {
		throw new Error("The questionPost doesn't exist.");
	}
	const answer = await answerRepository
		.findOne({ where: { id: answerId, user: user } });
	if (answer === undefined) {
		throw new Error("The answerPost doesn't exist or you don't have edit permission");
	}
	await queryRunner.startTransaction();
	try {
		await photoRepository.delete({ answer: answer });
		answer.text = text || answer.text;
		await answerRepository.save(answer);
		await Promise.all(photos.map(async (photo) => {
			await photoRepository.save({ photo, question, answer });
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

const deleteAnswer = async (deleteAnswerInfo) => {
	const queryRunner = await getQueryRunner();
	const userRepository = queryRunner.manager.getRepository(User);
	const questionRepository = queryRunner.manager.getRepository(Question);
	const answerRepository = queryRunner.manager.getRepository(Answer);
	const { userId, questionId, answerId } = deleteAnswerInfo;

	const user = await userRepository
		.findOne({ where: { id: userId } });
	if (user === undefined) {
		throw new Error("The user doesn't exist.");
	}
	const question = await questionRepository
		.findOne({ where: { id: questionId } });
	if (question === undefined) {
		throw new Error("The questionPost doesn't exist.");
	}
	const answer = await answerRepository
		.findOne({ where: { id: answerId, user: user } });
	if (answer === undefined) {
		throw new Error("The answerPost doesn't exist or you don't have edit permission");
	}
	await queryRunner.startTransaction();
	try {
		await answerRepository.remove(answer);
		await queryRunner.commitTransaction();
	} catch (error) {
		console.error(error);
		await queryRunner.rollbackTransaction();
		throw error;
	} finally {
		await queryRunner.release();
	}
}

const findPhotoByAnswerId = async (answerId) => {
	const queryRunner = await getQueryRunner();
	const answerRepository = queryRunner.manager.getRepository(Answer);
	const photoRepository = queryRunner.manager.getRepository(Photo);

	const answer = await answerRepository
		.findOne({ where: { id: answerId } });
	if (answer === undefined) {
		throw new Error("The answerPost doesn't exist.");
	}
	const photos = await photoRepository
		.find({ where: { answer: answer } });
	return photos;
}

export const AnswerService = { uploadAnswer, updateAnswer, deleteAnswer, findPhotoByAnswerId };