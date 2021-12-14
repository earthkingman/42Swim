import { getConnection, getRepository, QueryRunner, Repository } from "typeorm";

import { Answer } from "../entity/answer";
import { Comment } from "../entity/comment";
import { HashTag } from "../entity/hashtag";
import { Question } from "../entity/question";
import { QuestionLike } from "../entity/question_like";
import { AnswerLike } from "../entity/answer_like";
import { QuestionDetail } from "../definition/response_data";
import { AnswerDetail } from "../definition/response_data";
import { User } from "../entity/user"

export class PageService {
	private questionRepository: Repository<Question>;
	private questionLikeRepository: Repository<QuestionLike>;
	private answerLikeRepository: Repository<AnswerLike>;
	private hashtagRepository: Repository<HashTag>;
	private userRepository: Repository<User>;
	private answerRepository: Repository<Answer>;
	private commentRepository: Repository<Comment>;


	constructor() {
		this.questionRepository = getConnection().getRepository(Question);
		this.questionLikeRepository = getConnection().getRepository(QuestionLike);
		this.answerLikeRepository = getConnection().getRepository(AnswerLike);
		this.hashtagRepository = getConnection().getRepository(HashTag);
		this.userRepository = getConnection().getRepository(User);
		this.answerRepository = getConnection().getRepository(Answer);
		this.commentRepository = getConnection().getRepository(Comment);
	}

	async setQuestionViewCount(questionId) {
		const questionInfo = await this.questionRepository.findOne({ where: { id: questionId } })
		if (questionInfo === undefined) {
			throw new Error("The questionPost doesn't exist.");
		}
		questionInfo.view_count = questionInfo.view_count + 1;
		await this.questionRepository.save(questionInfo);
	}

	async getQuestionDetail(questionId, userId) {
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

		const questionDetailInfo: QuestionDetail = {
			id: questionInfo.id,
			created_at: questionInfo.created_at,
			updated_at: questionInfo.updated_at,
			user: questionInfo.user,
			answer: [],
			comment: questionInfo.comment,
			hashtag: questionInfo.hashtag,
			question_like: questionInfo.question_like,
			is_solved: questionInfo.is_solved,
			answer_count: questionInfo.answer_count,
			like_count: questionInfo.like_count,
			view_count: questionInfo.view_count,
			title: questionInfo.title,
			text: questionInfo.text,
			is_like: null,
		};
		if (questionInfo.answer) {
			for (let i = 0; i < questionInfo.answer.length; i++) {
				const curAnswer = questionInfo.answer[i];
				const AnswerDetail: AnswerDetail = {
					id: curAnswer.id,
					created_at: curAnswer.created_at,
					updated_at: curAnswer.updated_at,
					question: curAnswer.question,
					user: curAnswer.user,
					comment: curAnswer.comment,
					answer_like: curAnswer.answer_like,
					like_count: curAnswer.like_count,
					text: curAnswer.text,
					is_chosen: curAnswer.is_chosen,
					is_like: null,
				}
				questionDetailInfo.answer.push(AnswerDetail);
			}
		}

		if (userId) {
			const questionLike = await this.questionLikeRepository
				.createQueryBuilder('question_like')
				.leftJoin('question_like.question', 'question')
				.leftJoin('question_like.user', 'user')
				.where('question.id = :question_id', { question_id: questionInfo.id })
				.andWhere('user.id = :user_id', { user_id: userId })
				.select(['question_like.is_like'])
				.getOne();
			if (questionLike) {
				questionDetailInfo.is_like = questionLike.is_like;
			}
			if (questionInfo.answer) {
				for (let i = 0; i < questionInfo.answer.length; i++) {
					const answerLike = await this.answerLikeRepository
						.createQueryBuilder('answer_like')
						.leftJoin('answer_like.answer', 'answer')
						.leftJoin('answer_like.user', 'user')
						.where('answer.id = :answer_id', { answer_id: questionInfo.answer[i].id })
						.andWhere('user.id = :user_id', { user_id: userId })
						.select(['answer_like.is_like'])
						.getOne();
					if (answerLike) {
						questionDetailInfo.answer[i].is_like = answerLike.is_like;
					}
				}
			}
		}
		return questionDetailInfo;
	}

	async getQuestionDetailNoAuth(questionId) {

		const subQuery = await this.questionRepository
			.createQueryBuilder('covers')
			.select(['covers.id'])
			.where('covers.id = :questionId', { questionId })

		const questionInfo = await this.questionRepository
			.createQueryBuilder('question')
			.innerJoin(`(${subQuery.getQuery()})`, 'covers',
				'question.id = covers.covers_id')
			.setParameters(subQuery.getParameters())
			.leftJoin('question.hashtag', 'hashtag')
			.leftJoin('question.user', 'question_user')
			.leftJoin('question.comment', 'question_comment')
			.leftJoin('question.answer', 'answer')
			.leftJoin('answer.comment', 'answer_comment')
			.leftJoin('answer.user', 'answer_user')
			.leftJoin('question_comment.user', 'question_comment_user')
			.leftJoin('answer_comment.user', 'answer_comment_user')
			.select(['question.id', 'question.created_at', 'question.is_solved', 'question.like_count', 'question.view_count', 'question.title', 'question.text',
				'answer.id', 'answer.created_at', 'answer.like_count', 'answer.text', 'answer.is_chosen',
				'question_comment.id', 'question_comment.created_at', 'question_comment.text',
				'answer_comment.id', 'answer_comment.created_at', 'answer_comment.text',
				'question_user.id', 'question_user.created_at', 'question_user.email', 'question_user.nickname', 'question_user.photo',
				'question_comment_user.id', 'question_comment_user.created_at', 'question_comment_user.email', 'question_comment_user.nickname', 'question_comment_user.photo',
				'answer_user.id', 'answer_user.created_at', 'answer_user.email', 'answer_user.nickname', 'answer_user.photo',
				'answer_comment_user.id', 'answer_comment_user.created_at', 'answer_comment_user.email', 'answer_comment_user.nickname', 'answer_comment_user.photo',
				'hashtag.id', 'hashtag.name',
			])
			.disableEscaping()
			.getOne();

		const questionDetailInfo: QuestionDetail = {
			id: questionInfo.id,
			created_at: questionInfo.created_at,
			updated_at: questionInfo.updated_at,
			user: questionInfo.user,
			answer: [],
			comment: questionInfo.comment,
			hashtag: questionInfo.hashtag,
			question_like: undefined,
			is_solved: questionInfo.is_solved,
			answer_count: questionInfo.answer_count,
			like_count: questionInfo.like_count,
			view_count: questionInfo.view_count,
			title: questionInfo.title,
			text: questionInfo.text,
			is_like: null,
		};
		if (questionInfo.answer) {
			for (let i = 0; i < questionInfo.answer.length; i++) {
				const curAnswer = questionInfo.answer[i];
				const AnswerDetail: AnswerDetail = {
					id: curAnswer.id,
					created_at: curAnswer.created_at,
					updated_at: curAnswer.updated_at,
					question: curAnswer.question,
					user: curAnswer.user,
					comment: curAnswer.comment,
					answer_like: undefined,
					like_count: curAnswer.like_count,
					text: curAnswer.text,
					is_chosen: curAnswer.is_chosen,
					is_like: null,
				}
				questionDetailInfo.answer.push(AnswerDetail);
			}
		}
		return questionDetailInfo;
	}

	async getQuestionList(pageInfo) {
		const subQuery = await this.questionRepository
			.createQueryBuilder('covers')
			.select(['covers.id'])
			.orderBy('covers.id', 'DESC')
			.limit(pageInfo.limit)
			.offset(pageInfo.offset)

		const questionList = await this.questionRepository
			.createQueryBuilder('question')
			.innerJoin(`(${subQuery.getQuery()})`, 'covers',
				'question.id = covers.covers_id')
			.innerJoinAndSelect('question.user', 'question_user')
			.leftJoin('question.hashtag', 'question_hashtag')
			.select(['question.id', 'question.created_at', 'question.is_solved', 'question.like_count', 'question.view_count', 'question.answer_count', 'question.title', 'question.text',
				'question_user.id', 'question_user.created_at', 'question_user.email', 'question_user.nickname', 'question_user.photo',
				'question_hashtag.id', 'question_hashtag.name'
			])
			.orderBy('question.id', 'DESC')
			.getMany();

		const questionCount = await this.questionRepository
			.count();
		return { questionList, questionCount };
	}

	async getQuestionListOrderByLikeCount(pageInfo) {
		const subQuery = await this.questionRepository
			.createQueryBuilder('covers')
			.select(['covers.id', 'covers.like_count'])
			.orderBy('covers.like_count', 'DESC')
			.addOrderBy('covers.id', 'DESC')
			.limit(pageInfo.limit)
			.offset(pageInfo.offset)

		const questionList = await this.questionRepository
			.createQueryBuilder('question')
			.innerJoin(`(${subQuery.getQuery()})`, 'covers',
				'question.id = covers.covers_id')
			.innerJoinAndSelect('question.user', 'question_user')
			.leftJoin('question.hashtag', 'question_hashtag')
			.select(['question.id', 'question.created_at', 'question.is_solved', 'question.like_count', 'question.view_count', 'question.answer_count', 'question.title', 'question.text',
				'question_user.id', 'question_user.created_at', 'question_user.email', 'question_user.nickname', 'question_user.photo',
				'question_hashtag.id', 'question_hashtag.name'
			])
			.orderBy('question.like_count', 'DESC')
			.addOrderBy('question.id', 'DESC')
			.getMany();

		const questionCount = await this.questionRepository
			.count();
		return { questionList, questionCount };
	}

	async getQuestionListUnsolved(pageInfo) {
		const subQuery = await this.questionRepository
			.createQueryBuilder('covers')
			.select(['covers.id'])
			.where('covers.is_solved = :is_solved', { is_solved: false })
			.orderBy('covers.id', 'DESC')
			.limit(pageInfo.limit)
			.offset(pageInfo.offset)

		const questionList = await this.questionRepository
			.createQueryBuilder('question')
			.innerJoin(`(${subQuery.getQuery()})`, 'covers',
				'question.id = covers.covers_id')
			.setParameters(subQuery.getParameters())
			.innerJoinAndSelect('question.user', 'question_user')
			.leftJoin('question.hashtag', 'question_hashtag')
			.select(['question.id', 'question.created_at', 'question.is_solved', 'question.like_count', 'question.view_count', 'question.answer_count', 'question.title', 'question.text',
				'question_user.id', 'question_user.created_at', 'question_user.email', 'question_user.nickname', 'question_user.photo',
				'question_hashtag.id', 'question_hashtag.name'
			])
			.orderBy('question.id', 'DESC')
			.getMany();

		const questionCount = await this.questionRepository
			.createQueryBuilder('question')
			.where('question.is_solved = :is_solved', { is_solved: false })
			.getCount();
		return { questionList, questionCount };
	}

	async getQuestionListByKeyword(pageInfo, orderBy) {
		const keywords = pageInfo.keyword.split(" ");
		let subQuery;

		subQuery = this.questionRepository
			.createQueryBuilder('covers')
			.where('covers.title like :title', { title: `%${keywords[0]}%` })
		for (let i = 1; i < keywords.length; i++) {
			const subStr = 'covers.title like :title' + String(i);
			const subTitle = "title" + String(i);
			subQuery.orWhere(subStr, { [subTitle]: `%${keywords[i]}%` })
		}
		subQuery = await this.questionRepository
			.createQueryBuilder('covers')
			.select(['covers.id'])
			.leftJoin('covers.hashtag', 'hashtag')
			.where('hashtag.id = :id', { id: pageInfo.hashtagId })
		const orderByData = await this.orderByList(subQuery, orderBy, pageInfo);
		const questionCount = orderByData.count;
		const questionList = await this.questionRepository
			.createQueryBuilder('question')
			.innerJoin(`(${orderByData.subQuery.getQuery()})`, 'covers',
				'question.id = covers.covers_id')
			.setParameters(orderByData.subQuery.getParameters())
			.innerJoinAndSelect('question.user', 'question_user')
			.leftJoin('question.hashtag', 'question_hashtag')
			.select(['question.id', 'question.created_at', 'question.is_solved', 'question.like_count', 'question.view_count', 'question.answer_count', 'question.title', 'question.text',
				'question_user.id', 'question_user.created_at', 'question_user.email', 'question_user.nickname', 'question_user.photo',
				'question_hashtag.id', 'question_hashtag.name'
			])
			.orderBy('question.id', 'DESC')
			.getMany();
		return { questionList, questionCount }
	}

	async getQuestionListByHashtagId(pageInfo, orderBy): Promise<any> {
		let subQuery;

		subQuery = await this.questionRepository
			.createQueryBuilder('covers')
			.select(['covers.id'])
			.leftJoin('covers.hashtag', 'hashtag')
			.where('hashtag.id = :id', { id: pageInfo.hashtagId })

		const orderByData = await this.orderByList(subQuery, orderBy, pageInfo);
		const questionCount = orderByData.count;
		const questionList = await this.questionRepository
			.createQueryBuilder('question')
			.innerJoin(`(${orderByData.subQuery.getQuery()})`, 'covers',
				'question.id = covers.covers_id')
			.setParameters(orderByData.subQuery.getParameters())
			.innerJoinAndSelect('question.user', 'question_user')
			.leftJoin('question.hashtag', 'question_hashtag')
			.select(['question.id', 'question.created_at', 'question.is_solved', 'question.like_count', 'question.view_count', 'question.answer_count', 'question.title', 'question.text',
				'question_user.id', 'question_user.created_at', 'question_user.email', 'question_user.nickname', 'question_user.photo',
				'question_hashtag.id', 'question_hashtag.name'
			])
			.getMany();
		return { questionList, questionCount };
	}

	async getQuestionListByHashtagName(pageInfo, orderBy): Promise<any> {
		let subQuery;

		subQuery = await this.questionRepository
			.createQueryBuilder('covers')
			.select(['covers.id'])
			.leftJoin('covers.hashtag', 'hashtag')
			.where('hashtag.name = :name', { name: pageInfo.hashtagName })
		const orderByData = await this.orderByList(subQuery, orderBy, pageInfo);
		const questionCount = orderByData.count;
		const questionList = await this.questionRepository
			.createQueryBuilder('question')
			.innerJoin(`(${orderByData.subQuery.getQuery()})`, 'covers',
				'question.id = covers.covers_id')
			.setParameters(orderByData.subQuery.getParameters())
			.innerJoinAndSelect('question.user', 'question_user')
			.leftJoin('question.hashtag', 'question_hashtag')
			.select(['question.id', 'question.created_at', 'question.is_solved', 'question.like_count', 'question.view_count', 'question.answer_count', 'question.title', 'question.text',
				'question_user.id', 'question_user.created_at', 'question_user.email', 'question_user.nickname', 'question_user.photo',
				'question_hashtag.id', 'question_hashtag.name'
			])
			.getMany();
		return { questionList, questionCount };
	}

	async getQuestionListByUserId(pageInfo, orderBy): Promise<any> {
		let subQuery;

		subQuery = await this.questionRepository
			.createQueryBuilder('covers')
			.select(['covers.id'])
			.leftJoin('covers.user', 'user')
			.where('user.id = :id', { id: pageInfo.userId })

		const orderByData = await this.orderByList(subQuery, orderBy, pageInfo);
		const questionCount = orderByData.count;
		const questionList = await this.questionRepository
			.createQueryBuilder('question')
			.innerJoin(`(${orderByData.subQuery.getQuery()})`, 'covers',
				'question.id = covers.covers_id')
			.setParameters(orderByData.subQuery.getParameters())
			.innerJoinAndSelect('question.user', 'question_user')
			.leftJoin('question.hashtag', 'question_hashtag')
			.select(['question.id', 'question.created_at', 'question.is_solved', 'question.like_count', 'question.view_count', 'question.answer_count', 'question.title', 'question.text',
				'question_user.id', 'question_user.created_at', 'question_user.email', 'question_user.nickname', 'question_user.photo',
				'question_hashtag.id', 'question_hashtag.name'
			])
			.getMany();
		return { questionList, questionCount };
	}

	async getAnswerListByUserId(pageInfo, orderBy): Promise<any> {
		let subQuery;

		subQuery = await this.answerRepository
			.createQueryBuilder('covers')
			.select(['covers.id'])
			.leftJoin('covers.user', 'user')
			.where('user.id = :id', { id: pageInfo.userId })

		const orderByData = await this.orderByList(subQuery, orderBy, pageInfo);
		const answerCount = orderByData.count;
		const answerList = await this.answerRepository
			.createQueryBuilder('answer')
			.innerJoin(`(${orderByData.subQuery.getQuery()})`, 'covers',
				'answer.id = covers.covers_id')
			.setParameters(orderByData.subQuery.getParameters())
			.innerJoinAndSelect('answer.user', 'answer_user')
			.select(['answer.id', 'answer.created_at', 'answer.like_count', 'answer.text',
				'answer_user.id', 'answer_user.created_at', 'answer_user.email', 'answer_user.nickname', 'answer_user.photo',
			])
			.getMany();
		return { answerList, answerCount };
	}

	async getCommentListByUserId(pageInfo): Promise<any> {
		const subQuery = await this.commentRepository
			.createQueryBuilder('covers')
			.select(['covers.id'])
			.leftJoin('covers.user', 'user')
			.where('user.id = :id', { id: pageInfo.userId })
			.orderBy('covers.id', 'DESC')
			.limit(pageInfo.limit)
			.offset(pageInfo.offset)

		const commentList = await this.commentRepository
			.createQueryBuilder('comment')
			.innerJoin(`(${subQuery.getQuery()})`, 'covers',
				'comment.id = covers.covers_id')
			.setParameters(subQuery.getParameters())
			.innerJoinAndSelect('comment.user', 'comment_user')
			.select(['comment.id', 'comment.created_at', 'comment.text',
				'comment_user.id', 'comment_user.created_at', 'comment_user.email', 'comment_user.nickname', 'comment_user.photo',
			])
			.getMany();

		const commentCount = await this.userRepository
			.createQueryBuilder('user')
			.leftJoinAndSelect('user.comment', 'comment')
			.where('user.id = :id', { id: pageInfo.userId })
			.select('COUNT(*) AS count')
			.getRawOne();

		return { commentList, commentCount: commentCount.count };
	}

	async orderByList(subQuery, orderBy: string, pageInfo) {
		let count = 0;

		if (orderBy === "time") {
			count = await subQuery
				.select(['covers.id'])
				.getCount();
			subQuery.select(['covers.id'])
				.orderBy('covers.id', 'DESC')
				.limit(pageInfo.limit)
				.offset(pageInfo.offset)
		}
		else if (orderBy === "like") {
			count = await subQuery
				.select(['covers.id'])
				.getCount();
			subQuery
				.select(['covers.id', 'covers.like_count'])
				.orderBy('covers.like_count', 'DESC')
				.addOrderBy('covers.id', 'DESC')
				.limit(pageInfo.limit)
				.offset(pageInfo.offset)
		}

		else if (orderBy === "solving") {
			count = await subQuery
				.select(['covers.id'])
				.andWhere('covers.is_solved = :is_solved', { is_solved: false })
				.getCount();
			subQuery
				.select(['covers.id'])
				.andWhere('covers.is_solved = :is_solved', { is_solved: false })
				.addOrderBy('covers.id', 'DESC')
				.limit(pageInfo.limit)
				.offset(pageInfo.offset)
		}

		else if (orderBy === "chosen") {
			count = await subQuery
				.select(['covers.id'])
				.andWhere('covers.is_chosen = :is_chosen', { is_chosen: true })
				.getCount();
			subQuery
				.select(['covers.id', 'covers.like_count'])
				.andWhere('covers.is_chosen = :is_chosen', { is_chosen: true })
				.addOrderBy('covers.id', 'DESC')
				.limit(pageInfo.limit)
				.offset(pageInfo.offset)
			console.log(count);
		}
		return { subQuery, count };
	}
}
