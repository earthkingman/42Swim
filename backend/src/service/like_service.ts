import { getConnection } from "typeorm";

import { Question } from "../entity/question";
import { QuestionLike } from "../entity/question_like";
import { User } from "../entity/user";
import { Answer } from "../entity/answer";
import { AnswerLike } from "../entity/answer_like";

const getQueryRunner = async () => {
	const connection = getConnection();
	const queryRunner = connection.createQueryRunner();
	await queryRunner.connect();
	return queryRunner;
}

const createAnswerLike = async (likeInfo) => {
	const queryRunner = await getQueryRunner();
	const userRepository = queryRunner.manager.getRepository(User);
	const answerRepository = queryRunner.manager.getRepository(Answer);
	const answerLikeRepository = queryRunner.manager.getRepository(AnswerLike);

	const { answerId, userId, isLike, answerUserId } = likeInfo;

	const answer = await answerRepository.findOne({ where: { id: answerId } });
	if (answer === undefined) {
		throw new Error("The answer doesn't exist.");
	}
	const answerUser = await userRepository.findOne({ where: { id: answerUserId } });
	if (answerUser === undefined) {
		throw new Error("The answerUser doesn't exist.");
	}

	const exLike = await answerLikeRepository
		.findOne({ where: { answer: answer, user: answerUser } });
	if (exLike) {
		throw new Error("The likeData already exists.");
	}

	const user = await userRepository.findOne(userId);

	await queryRunner.startTransaction();
	try {
		await answerLikeRepository.save({ is_like: isLike, user: answerUser, answer: answer });
		await userRepository.save(user);

		if (isLike) {
			answer.like_count += 1;
			answerUser.liked_count += 1;
		}
		else {
			answer.like_count -= 1;
			answerUser.liked_count -= 1;
		}
		await answerRepository.save(answer);
		await userRepository.save(answerUser);

		await queryRunner.commitTransaction();
	} catch (error) {
		console.error(error);
		await queryRunner.rollbackTransaction();
		throw error;
	} finally {
		await queryRunner.release();
	}
}

const createQuestionLike = async (likeInfo) => {
	const queryRunner = await getQueryRunner();
	const userRepository = queryRunner.manager.getRepository(User);
	const questionRepository = queryRunner.manager.getRepository(Question);
	const questionLikeRepository = queryRunner.manager.getRepository(QuestionLike);

	const { questionId, userId, isLike, questionUserId } = likeInfo;

	const question = await questionRepository.findOne({ where: { id: questionId } });
	if (question === undefined) {
		throw new Error("The question doesn't exist.");
	}

	const questionUser = await userRepository.findOne({ where: { id: questionUserId } });
	if (questionUser === undefined) {
		throw new Error("The questionUser doesn't exist.");
	}

	const user = await userRepository.findOne(userId);

	const exLike = await questionLikeRepository
		.findOne({ where: { question: question, user: questionUser } });
	if (exLike !== undefined) {
		throw new Error("The likeData already exists.");
	}

	await queryRunner.startTransaction();
	try {
		await questionLikeRepository.save({ is_like: isLike, user: questionUser, question: question });
		await userRepository.save(user);

		if (isLike) {
			question.like_count += 1;
			questionUser.liked_count += 1;
		}
		else {
			question.like_count -= 1;
			questionUser.liked_count -= 1;
		}
		await questionRepository.save(question);
		await userRepository.save(questionUser);

		await queryRunner.commitTransaction();
	} catch (error) {
		console.error(error);
		await queryRunner.rollbackTransaction();
		throw error;
	} finally {
		await queryRunner.release();
	}
}

const deleteAnswerLike = async (likeInfo) => {
	const queryRunner = await getQueryRunner();
	const userRepository = queryRunner.manager.getRepository(User);
	const answerRepository = queryRunner.manager.getRepository(Answer);
	const answerLikeRepository = queryRunner.manager.getRepository(AnswerLike);

	const { answerId, userId, isLike, answerUserId } = likeInfo;

	const answer = await answerRepository.findOne({ where: { id: answerId } });
	if (answer === undefined) {
		throw new Error("The answer doesn't exist.");
	}

	const answerUser = await userRepository.findOne({ where: { id: answerUserId } });
	if (answerUser === undefined) {
		throw new Error("The answerUser doesn't exist.");
	}

	const curLike = await answerLikeRepository
		.findOne({ where: { answer: answer, user: answerUser } });
	if (curLike === undefined) {
		throw new Error("The likeData doesn't exist.");
	}
	if (curLike.is_like !== isLike) {
		throw new Error("The likeData is incorrect.");
	}

	if (curLike.is_like) {
		answer.like_count -= 1;
		answerUser.liked_count -= 1;
	}
	else {
		answer.like_count += 1;
		answerUser.liked_count += 1;
	}

	await queryRunner.startTransaction();
	try {
		await answerLikeRepository.remove(curLike);
		await answerRepository.save(answer);
		await userRepository.save(answerUser);
		await queryRunner.commitTransaction();
	} catch (error) {
		console.error(error);
		await queryRunner.rollbackTransaction();
		throw error;
	} finally {
		await queryRunner.release();
	}
}

const deleteQuestionLike = async (likeInfo) => {
	const queryRunner = await getQueryRunner();
	const userRepository = queryRunner.manager.getRepository(User);
	const questionRepository = queryRunner.manager.getRepository(Question);
	const questionLikeRepository = queryRunner.manager.getRepository(QuestionLike);

	const { questionId, userId, isLike, questionUserId } = likeInfo;

	const question = await questionRepository.findOne({ where: { id: questionId } });
	if (question === undefined) {
		throw new Error("The question doesn't exist.");
	}

	const questionUser = await userRepository.findOne({ where: { id: questionUserId } });
	if (questionUser === undefined) {
		throw new Error("The questionUser doesn't exist.");
	}

	const curLike = await questionLikeRepository
		.findOne({ where: { question: question, user: questionUser } });
	if (curLike === undefined) {
		throw new Error("The likeData doesn't exist.");
	}
	if (curLike.is_like !== isLike) {
		throw new Error("The likeData is incorrect.");
	}
	if (curLike.is_like) {
		question.like_count -= 1;
		questionUser.liked_count -= 1;
	}
	else {
		question.like_count += 1;
		questionUser.liked_count += 1;
	}

	await queryRunner.startTransaction();
	try {
		await questionLikeRepository.remove(curLike);
		await questionRepository.save(question);
		await userRepository.save(questionUser);
		await queryRunner.commitTransaction();
	} catch (error) {
		console.error(error);
		await queryRunner.rollbackTransaction();
		throw error;
	} finally {
		await queryRunner.release();
	}
}

export const LikeService = {
	createAnswerLike,
	createQuestionLike,
	deleteAnswerLike,
	deleteQuestionLike
}