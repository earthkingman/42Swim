import { getConnection, QueryRunner, Repository } from "typeorm";

import { Question } from "../entity/question";
import { QuestionLike } from "../entity/question_like";
import { User } from "../entity/user";
import { Answer } from "../entity/answer";
import { AnswerLike } from "../entity/answer_like";
import { RankService } from "../service/rank_service";

import { UserNotFoundException } from "../exception/user_exception";
import { AnswerNotFoundException } from "../exception/answer_exception";
import { QuestionNotFoundException } from "../exception/question_exception";
import { DatabaseInternalServerErrorException } from "../exception/server_exception";
import { LikeNotFoundException, LikeBadRequestException, HateException } from "../exception/like_exception"

export class LikeService {
	private queryRunner: QueryRunner;
	private userRepository: Repository<User>;
	private questionRepository: Repository<Question>;
	private answerRepository: Repository<Answer>;
	private questionLikeRepository: Repository<QuestionLike>;
	private answerLikeRepository: Repository<AnswerLike>;
	private rankService: RankService;

	constructor() {
		this.queryRunner = getConnection().createQueryRunner();
		this.userRepository = this.queryRunner.manager.getRepository(User);
		this.questionRepository = this.queryRunner.manager.getRepository(Question);
		this.answerRepository = this.queryRunner.manager.getRepository(Answer);
		this.questionLikeRepository = this.queryRunner.manager.getRepository(QuestionLike);
		this.answerLikeRepository = this.queryRunner.manager.getRepository(AnswerLike);
		this.rankService = new RankService();
	}

	async createAnswerLike(likeInfo) {
		const { answerId, userId, isLike, answerUserId } = likeInfo;
		const score = await this.rankService.getUserTotalPoint(userId);

		if (score <= 0 && isLike == false) {
			throw new HateException();
		}
		if (userId == answerUserId) {
			throw new LikeBadRequestException("자신의 글에는 좋아요를 누를 수 없습니다.");
		}
		const answerUser = await this.userRepository.findOne({ where: { id: answerUserId } });
		if (answerUser === undefined) {
			await this.queryRunner.release();
			throw new UserNotFoundException(answerUserId);
		}

		const answer = await this.answerRepository.findOne({ where: { id: answerId, user: answerUser } });
		if (answer === undefined) {
			await this.queryRunner.release();
			throw new AnswerNotFoundException(answerId);
		}

		const user = await this.userRepository.findOne({ where: { id: userId } });
		if (user === undefined) {
			throw new UserNotFoundException(userId);
		}

		const exLike = await this.answerLikeRepository
			.findOne({ where: { answer: answer, user: user } });
		if (exLike) {
			await this.queryRunner.release();
			throw new LikeBadRequestException("The likeData already exists.");
		}
		await this.queryRunner.startTransaction();
		try {
			await this.answerLikeRepository.save({ is_like: isLike, user: user, answer: answer });
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
			throw new DatabaseInternalServerErrorException(error.message);
		} finally {
			await this.queryRunner.release();
		}
		return answer.like_count;
	}

	async createQuestionLike(likeInfo) {
		const { questionId, userId, isLike, questionUserId } = likeInfo;
		const score = await this.rankService.getUserTotalPoint(userId);

		if (score <= 0 && isLike == false) {
			throw new HateException();
		}

		if (userId == questionUserId) {
			throw new LikeBadRequestException("자신의 글에는 좋아요를 누를 수 없습니다.");
		}
		const questionUser = await this.userRepository.findOne({ where: { id: questionUserId } });
		if (questionUser === undefined) {
			await this.queryRunner.release();
			throw new UserNotFoundException(questionUserId);
		}

		const question = await this.questionRepository.findOne({ where: { id: questionId, user: questionUser } });
		if (question === undefined) {
			await this.queryRunner.release();
			throw new QuestionNotFoundException(questionId);
		}

		const user = await this.userRepository.findOne({ where: { id: userId } });
		if (user === undefined) {
			throw new UserNotFoundException(userId);
		}

		const exLike = await this.questionLikeRepository
			.findOne({ where: { question: question, user: user } });
		if (exLike !== undefined) {
			await this.queryRunner.release();
			throw new LikeBadRequestException("The likeData already exists.");
		}
		await this.queryRunner.startTransaction();
		try {
			await this.questionLikeRepository.save({ is_like: isLike, user: user, question: question });
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
			throw new DatabaseInternalServerErrorException(error.message);
		} finally {
			await this.queryRunner.release();
		}
		return question.like_count;
	}

	async deleteAnswerLike(likeInfo) {
		const { answerId, userId, isLike, answerUserId } = likeInfo;

		const answerUser = await this.userRepository.findOne({ where: { id: answerUserId } });
		if (answerUser === undefined) {
			await this.queryRunner.release();
			throw new UserNotFoundException(answerUserId);
		}

		const answer = await this.answerRepository.findOne({ where: { id: answerId, user: answerUser } });
		if (answer === undefined) {
			throw new AnswerNotFoundException(answerId);
		}

		const user = await this.userRepository.findOne({ where: { id: userId } });
		if (user === undefined) {
			throw new UserNotFoundException(userId);
		}

		const curLike = await this.answerLikeRepository
			.findOne({ where: { answer: answer, user: user } });
		if (curLike === undefined) {
			await this.queryRunner.release();
			throw new LikeBadRequestException("The likeData doesn't exist.");
		}
		if (curLike.is_like !== isLike) {
			await this.queryRunner.release();
			throw new LikeNotFoundException("The likeData is incorrect.");
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
			throw new DatabaseInternalServerErrorException(error.message);
		} finally {
			await this.queryRunner.release();
		}
		return answer.like_count;
	}

	async deleteQuestionLike(likeInfo) {
		const { questionId, userId, isLike, questionUserId } = likeInfo;

		const questionUser = await this.userRepository.findOne({ where: { id: questionUserId } });
		if (questionUser === undefined) {
			await this.queryRunner.release();
			throw new UserNotFoundException(questionUserId);
		}

		const question = await this.questionRepository.findOne({ where: { id: questionId, user: questionUser } });
		if (question === undefined) {
			await this.queryRunner.release();
			throw new QuestionNotFoundException(questionId);
		}

		const user = await this.userRepository.findOne({ where: { id: userId } });

		const curLike = await this.questionLikeRepository
			.findOne({ where: { question: question, user: user } });
		if (curLike === undefined) {
			await this.queryRunner.release();
			throw new LikeBadRequestException("The likeData doesn't exist.");
		}
		if (curLike.is_like !== isLike) {
			await this.queryRunner.release();
			throw new LikeNotFoundException("The likeData is incorrect.");
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
			throw new DatabaseInternalServerErrorException(error.message);
		} finally {
			await this.queryRunner.release();
		}
		return question.like_count;
	}
}