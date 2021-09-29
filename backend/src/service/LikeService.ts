import { getConnection } from "typeorm";
import Photo from "../entity/Photo";
import Question from "../entity/Question";
import User from "../entity/User";
import HashTag from "../entity/HashTag";
import Answer from "../entity/Answer";
import Like from "../entity/Like";

const getQueryRunner = async () => {
	const connection = getConnection();
	const queryRunner = connection.createQueryRunner();
	await queryRunner.connect();
	return queryRunner;
}

const createLike = async (likeInfo) => {
	const queryRunner = await getQueryRunner();
	const userRepository = queryRunner.manager.getRepository(User);
	const questionRepository = queryRunner.manager.getRepository(Question);
	const answerRepository = queryRunner.manager.getRepository(Answer);
	const likeRepository = queryRunner.manager.getRepository(Like);

	const { questionId, answerId, userId, isLike, questionUserId, answerUserId } = likeInfo;

	const queryBuilder = likeRepository
		.createQueryBuilder('like')
		.innerJoin('like.user', 'user');

	let exLike = undefined;
	let answer = undefined;
	let answerUser = undefined;
	let question = undefined;
	let questionUser = undefined;


	if (questionId) {
		exLike = await queryBuilder
			.innerJoin('like.question', 'question')
			.where('user.id = :userId', { userId })
			.andWhere('question.id = :questionId', { questionId })
			.getOne()
		if (exLike) {
			throw new Error("The likeData already exists.");
		}
		question = await questionRepository.findOne({ where: { id: questionId } });
		if (question === undefined) {
			throw new Error("The question doesn't exist.");
		}
		questionUser = await userRepository.findOne({ where: { id: questionUserId } })
		if (questionUser === undefined) {
			throw new Error("The questionUser doesn't exist.");
		}
	}
	else if (answerId) {
		exLike = await queryBuilder
			.innerJoin('like.answer', 'answer')
			.where('user.id = :userId', { userId })
			.andWhere('answer.id = :answerId', { answerId })
			.getOne();
		if (exLike) {
			throw new Error("The likeData already exists.");
		}
		answer = await answerRepository.findOne({ where: { id: answerId } });
		if (answer === undefined) {
			throw new Error("The answer doesn't exist.");
		}
		answerUser = await userRepository.findOne({ where: { id: answerUserId } });
		if (answerUser === undefined) {
			throw new Error("The answerUser doesn't exist.");
		}
	}

	const user = await userRepository.findOne(userId);

	await queryRunner.startTransaction();
	try {
		const newLike = await likeRepository.save({ isLike })
		const userLikeList: Like[] = user.like || [];
		userLikeList.push(newLike);
		user.like = userLikeList;
		await userRepository.save(user);
		if (answerId) {
			const answerLikeList: Like[] = answer.like || [];
			answerLikeList.push(newLike);
			answer.like = answerLikeList;
			if (isLike) {
				answer.likeCount += 1;
				answerUser.likedCount += 1;
			}
			else {
				answer.likeCount -= 1;
				answerUser.likedCount -= 1;
			}
			await answerRepository.save(answer);
			await userRepository.save(answerUser);
		}
		else if (questionId) {
			const questionLikeList: Like[] = question.like || [];
			questionLikeList.push(newLike);
			question.like = questionLikeList;
			if (isLike) {
				question.likeCount += 1;
				questionUser.likedCount += 1;
			}
			else {
				question.likeCount -= 1;
				questionUser.likedCount -= 1;
			}
			await questionRepository.save(question);
			await userRepository.save(questionUser);
		}
		await queryRunner.commitTransaction();
	} catch (error) {
		console.error(error);
		await queryRunner.rollbackTransaction();
		throw error;
	} finally {
		await queryRunner.release();
	}
}

const deleteLike = async (likeInfo) => {
	const queryRunner = await getQueryRunner();
	const userRepository = queryRunner.manager.getRepository(User);
	const questionRepository = queryRunner.manager.getRepository(Question);
	const answerRepository = queryRunner.manager.getRepository(Answer);
	const likeRepository = queryRunner.manager.getRepository(Like);

	const { questionId, answerId, userId, isLike, questionUserId, answerUserId } = likeInfo;

	const queryBuilder = likeRepository
		.createQueryBuilder('like')
		.innerJoin('like.user', 'user');

	let curLike = undefined;
	let question = undefined;
	let questionUser = undefined;
	let answer = undefined;
	let answerUser = undefined;

	if (questionId) {
		curLike = await queryBuilder
			.innerJoin('like.question', 'question')
			.where('user.id = :userId', { userId })
			.andWhere('question.id = :questionId', { questionId })
			.getOne()

		if (curLike === undefined) {
			throw new Error("The likeData doesn't exist.");
		}
		if (curLike.isLike !== isLike) {
			throw new Error("The likeData is incorrect.");
		}
		question = await questionRepository.findOne({ where: { id: questionId } });
		questionUser = await userRepository.findOne({ where: { id: questionUserId } });
		if (question === undefined) {
			throw new Error("The question doesn't exist.");
		}
		if (questionUser === undefined) {
			throw new Error("The questionUser doesn't exist.");
		}
		if (curLike.isLike) {
			question.likeCount -= 1;
			questionUser.likedCount -= 1;
		}
		else {
			question.likeCount += 1;
			questionUser.likedCount += 1;
		}
	}
	else if (answerId) {
		curLike = await queryBuilder
			.innerJoin('like.answer', 'answer')
			.where('user.id = :userId', { userId })
			.andWhere('answer.id = :answerId', { answerId })
			.getOne();
		if (curLike === undefined) {
			throw new Error("The likeData doesn't exist.");
		}
		if (curLike.isLike !== isLike) {
			throw new Error("The likeData is incorrect.");
		}
		answer = await answerRepository.findOne({ where: { id: answerId } });
		answerUser = await userRepository.findOne({ where: { id: answerUserId } });
		if (answer === undefined) {
			throw new Error("The answer doesn't exist.");
		}
		if (answerUser === undefined) {
			throw new Error("The answerUser doesn't exist.");
		}
		if (curLike.isLike) {
			answer.likeCount -= 1;
			answerUser.likedCount -= 1;
		}
		else {
			answer.likeCount += 1;
			answerUser.likedCount += 1;
		}
	}

	await queryRunner.startTransaction();
	try {
		await likeRepository.remove(curLike);
		if (questionId) {
			await questionRepository.save(question);
			await userRepository.save(questionUser);
		}
		else if (answerId) {
			await answerRepository.save(answer);
			await userRepository.save(answerUser);
		}
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
	createLike,
	deleteLike
}