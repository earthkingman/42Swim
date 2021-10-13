import { getConnection, QueryRunner, Repository } from "typeorm";

import { Answer } from "../entity/answer";
import { Question } from "../entity/question";

export class PageService {
	private queryRunner: QueryRunner;
	private questionRepository: Repository<Question>;

	constructor() {
		this.queryRunner = getConnection().createQueryRunner();
		this.questionRepository = this.queryRunner.manager.getRepository(Question);
	}

	async setQuestionViewCount(questionId) {
		const questionInfo = await this.questionRepository.findOne({ where: { id: questionId } })
		console.log(questionInfo.view_count);
		questionInfo.view_count = questionInfo.view_count + 1;
		await this.questionRepository.save(questionInfo);
	}

	async getQuestionDetail(questionId) {
		this.setQuestionViewCount(questionId);
		const questionInfo = await this.queryRunner.manager
			.getRepository(Question)
			.createQueryBuilder('question')
			.where('question.id = :questionId', { questionId })
			.leftJoinAndSelect('question.user', 'user')
			.leftJoinAndSelect('question.hashtag', 'hashtag')
			.leftJoinAndSelect('question.comment', 'comment')
			.leftJoinAndSelect('question.photo', 'photo')
			.disableEscaping()
			.getMany();
		const answerInfo = await this.queryRunner.manager
			.getRepository(Answer)
			.createQueryBuilder('answer')
			.where('answer.questionId = :questionId', { questionId })
			.leftJoinAndSelect('answer.user', 'user')
			.leftJoinAndSelect('answer.comment', 'comment')
			.leftJoinAndSelect('answer.photo', 'photo')
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
			.leftJoinAndSelect('question.user', 'user')
			.leftJoinAndSelect('question.hashtag', 'hashtag')
			.orderBy('question.id', 'DESC')
			.limit(pageInfo.limit)
			.offset(pageInfo.offset)
			.disableEscaping()
			.getMany();
		console.log(questionList);
		return questionList;
	}

}