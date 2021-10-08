import { getConnection, QueryRunner } from "typeorm";

import { Answer } from "../entity/answer";
import { Question } from "../entity/question";

export class PageService {
	private queryRunner: QueryRunner;

	constructor() {
		this.queryRunner = getConnection().createQueryRunner();
	}

	async getQuestionDetail(questionId) {
		const questionInfo = await this.queryRunner.manager
			.getRepository(Question)
			.createQueryBuilder('question')
			.where('question.id = :questionId', { questionId })
			.innerJoinAndSelect('question.user', 'user')
			.innerJoinAndSelect('question.hashtag', 'hashtag')
			.leftJoinAndSelect('question.comment', 'comment')
			.disableEscaping()
			.getMany();

		const answerInfo = await this.queryRunner.manager
			.getRepository(Answer)
			.createQueryBuilder('answer')
			.where('answer.questionId = :questionId', { questionId })
			.innerJoinAndSelect('answer.user', 'user')
			.leftJoinAndSelect('answer.comment', 'comment')
			.disableEscaping()
			.getMany();
		return {
			questionInfo: questionInfo,
			answerInfo: answerInfo
		}
	}

	async getQuestionList(pageInfo) {
		const questionList = await this.queryRunner.manager
			.getRepository(Question)
			.createQueryBuilder('question')
			.innerJoinAndSelect('question.user', 'user')
			.innerJoinAndSelect('question.hashtag', 'hashtag')
			.orderBy('question.id', 'DESC')
			.limit(pageInfo.limit)
			.offset(pageInfo.offset)
			.disableEscaping()
			.getMany();
		console.log(questionList);
		return questionList;
	}

}