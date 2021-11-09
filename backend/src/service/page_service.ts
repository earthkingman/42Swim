import { getConnection, getRepository, QueryRunner, Repository } from "typeorm";

import { Answer } from "../entity/answer";
import { HashTag } from "../entity/hashtag";
import { Question } from "../entity/question";

export class PageService {
	private questionRepository: Repository<Question>;
	private hashtagRepository: Repository<HashTag>;

	constructor() {
		this.questionRepository = getConnection().getRepository(Question);
		this.hashtagRepository = getConnection().getRepository(HashTag);
	}

	async setQuestionViewCount(questionId) {
		const questionInfo = await this.questionRepository.findOne({ where: { id: questionId } })
		console.log(questionInfo.view_count);
		questionInfo.view_count = questionInfo.view_count + 1;
		await this.questionRepository.save(questionInfo);
	}

	async getQuestionDetail(questionId) {
		await this.setQuestionViewCount(questionId);
		const questionInfo = await this.questionRepository
			.createQueryBuilder('question')
			.where('question.id = :questionId', { questionId })
			.leftJoinAndSelect('question.user', 'question_user')
			.leftJoinAndSelect('question.hashtag', 'hashtag')
			.leftJoinAndSelect('question.comment', 'question_comment')
			.leftJoinAndSelect('question.answer', 'answer')
			.leftJoinAndSelect('answer.comment', 'answer_comment')
			.leftJoinAndSelect('answer.user', 'answer_user')
			.leftJoinAndSelect('question_comment.user', 'question_comment_user')
			.leftJoinAndSelect('answer_comment.user', 'answer_comment_user')
			.select(['question.id', 'question.created_at', 'question.is_solved', 'question.like_count', 'question.view_count', 'question.title', 'question.text',
				'answer.id', 'answer.created_at', 'answer.like_count', 'answer.text', 'answer.is_chosen',
				'question_comment.id', 'question_comment.created_at', 'question_comment.text',
				'answer_comment.id', 'answer_comment.created_at', 'answer_comment.text',
				'question_user.id', 'question_user.created_at', 'question_user.email', 'question_user.nickname', 'question_user.photo',
				'question_comment_user.id', 'question_comment_user.created_at', 'question_comment_user.email', 'question_comment_user.nickname', 'question_comment_user.photo',
				'answer_user.id', 'answer_user.created_at', 'answer_user.email', 'answer_user.nickname', 'answer_user.photo',
				'answer_comment_user.id', 'answer_comment_user.created_at', 'answer_comment_user.email', 'answer_comment_user.nickname', 'answer_comment_user.photo',
				'hashtag.id', 'hashtag.name'
			])
			.disableEscaping()
			.getOne();
		return questionInfo;
	}

	async getQuestionList(pageInfo) {
		const questionList = await this.questionRepository
			.createQueryBuilder('question')
			.leftJoinAndSelect('question.user', 'question_user')
			.select(['question.id', 'question.created_at', 'question.is_solved', 'question.like_count', 'question.view_count', 'question.answer_count', 'question.title', 'question.text',
				'question_user.id', 'question_user.created_at', 'question_user.email', 'question_user.nickname', 'question_user.photo',
			])
			.orderBy('question.id', 'DESC')
			.limit(pageInfo.limit)
			.offset(pageInfo.offset)
			.disableEscaping()
			.getMany()

		for (let i = 0; i < questionList.length; i++) {
			const questionId = questionList[i].id;
			const hashtags = await this.hashtagRepository
				.createQueryBuilder('hashtag')
				.leftJoin('hashtag.question', 'question')
				.where('question.id = :id', { id: questionId })
				.select(['hashtag.id', 'hashtag.name'])
				.getMany();
			questionList[i].hashtag = hashtags;
		}

		const questionCount = await this.questionRepository
			.count();
		return { questionList, questionCount };
	}

}