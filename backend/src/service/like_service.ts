import { getConnection, QueryRunner, Repository } from "typeorm";

import { Question } from "../entity/question";
import { QuestionLike } from "../entity/question_like";
import { User } from "../entity/user";
import { Answer } from "../entity/answer";
import { AnswerLike } from "../entity/answer_like";

export class LikeService {
	private queryRunner: QueryRunner;
	private userRepository: Repository<User>;
	private questionRepository: Repository<Question>;
	private answerRepository: Repository<Answer>;
	private questionLikeRepository: Repository<QuestionLike>;
	private answerLikeRepository: Repository<AnswerLike>;

	constructor() {
		this.queryRunner = getConnection().createQueryRunner();
		this.userRepository = this.queryRunner.manager.getRepository(User);
		this.questionRepository = this.queryRunner.manager.getRepository(Question);
		this.answerRepository = this.queryRunner.manager.getRepository(Answer);
		this.questionLikeRepository = this.queryRunner.manager.getRepository(QuestionLike);
		this.answerLikeRepository = this.queryRunner.manager.getRepository(AnswerLike);
	}

	async createAnswerLike(likeInfo) {
		const { answerId, userId, isLike, answerUserId } = likeInfo;

		const answer = await this.answerRepository.findOne({ where: { id: answerId } });
		if (answer === undefined) {
			throw new Error("The answer doesn't exist.");
		}
		const answerUser = await this.userRepository.findOne({ where: { id: answerUserId } });
		if (answerUser === undefined) {
			throw new Error("The answerUser doesn't exist.");
		}

		const exLike = await this.answerLikeRepository
			.findOne({ where: { answer: answer, user: answerUser } });
		if (exLike) {
			throw new Error("The likeData already exists.");
		}

		const user = await this.userRepository.findOne(userId);

		await this.queryRunner.startTransaction();
		try {
			await this.answerLikeRepository.save({ is_like: isLike, user: answerUser, answer: answer });
			await this.userRepository.save(user);

			if (isLike) {
				answer.like_count += 1;
				answerUser.liked_count += 1;
			}
			else {
				answer.like_count -= 1;
				answerUser.liked_count -= 1;
			}
			await this.answerRepository.save(answer);
			await this.userRepository.save(answerUser);

			await this.queryRunner.commitTransaction();
		} catch (error) {
			console.error(error);
			await this.queryRunner.rollbackTransaction();
			throw error;
		} finally {
			await this.queryRunner.release();
		}
	}

	async createQuestionLike(likeInfo) {
		const { questionId, userId, isLike, questionUserId } = likeInfo;

		const question = await this.questionRepository.findOne({ where: { id: questionId } });
		if (question === undefined) {
			throw new Error("The question doesn't exist.");
		}

		const questionUser = await this.userRepository.findOne({ where: { id: questionUserId } });
		if (questionUser === undefined) {
			throw new Error("The questionUser doesn't exist.");
		}

		const user = await this.userRepository.findOne(userId);

		const exLike = await this.questionLikeRepository
			.findOne({ where: { question: question, user: questionUser } });
		if (exLike !== undefined) {
			throw new Error("The likeData already exists.");
		}

		await this.queryRunner.startTransaction();
		try {
			await this.questionLikeRepository.save({ is_like: isLike, user: questionUser, question: question });
			await this.userRepository.save(user);

			if (isLike) {
				question.like_count += 1;
				questionUser.liked_count += 1;
			}
			else {
				question.like_count -= 1;
				questionUser.liked_count -= 1;
			}
			await this.questionRepository.save(question);
			await this.userRepository.save(questionUser);

			await this.queryRunner.commitTransaction();
		} catch (error) {
			console.error(error);
			await this.queryRunner.rollbackTransaction();
			throw error;
		} finally {
			await this.queryRunner.release();
		}
	}

	async deleteAnswerLike(likeInfo) {
		const { answerId, userId, isLike, answerUserId } = likeInfo;

		const answer = await this.answerRepository.findOne({ where: { id: answerId } });
		if (answer === undefined) {
			throw new Error("The answer doesn't exist.");
		}

		const answerUser = await this.userRepository.findOne({ where: { id: answerUserId } });
		if (answerUser === undefined) {
			throw new Error("The answerUser doesn't exist.");
		}

		const curLike = await this.answerLikeRepository
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

		await this.queryRunner.startTransaction();
		try {
			await this.answerLikeRepository.remove(curLike);
			await this.answerRepository.save(answer);
			await this.userRepository.save(answerUser);
			await this.queryRunner.commitTransaction();
		} catch (error) {
			console.error(error);
			await this.queryRunner.rollbackTransaction();
			throw error;
		} finally {
			await this.queryRunner.release();
		}
	}

	async deleteQuestionLike(likeInfo) {
		const { questionId, userId, isLike, questionUserId } = likeInfo;

		const question = await this.questionRepository.findOne({ where: { id: questionId } });
		if (question === undefined) {
			throw new Error("The question doesn't exist.");
		}

		const questionUser = await this.userRepository.findOne({ where: { id: questionUserId } });
		if (questionUser === undefined) {
			throw new Error("The questionUser doesn't exist.");
		}

		const curLike = await this.questionLikeRepository
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

		await this.queryRunner.startTransaction();
		try {
			await this.questionLikeRepository.remove(curLike);
			await this.questionRepository.save(question);
			await this.userRepository.save(questionUser);
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