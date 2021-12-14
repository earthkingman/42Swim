import { Request } from "aws-sdk";
import dotenv from "dotenv";
dotenv.config();

import { Response, NextFunction } from 'express';

import { DecodedRequest } from '../definition/decoded_jwt'
import { PageService } from '../service/page_service';

const getQuestionListPage = async (req: any, res: Response, next: NextFunction) => {
	const pageNumber = Number(req.query.pageNumber) - 1;
	const limit = 8;
	const offset = pageNumber * limit;
	const pageInfo = { limit, offset };
	const pageService: PageService = new PageService();

	try {
		const { questionList, questionCount } = await pageService.getQuestionList(pageInfo);
		return res.status(200).json({
			questionList: questionList,
			questionCount: questionCount,
			message: "getList success",
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			message: `An error occurred (${error.message})`
		})
	}
}

const getQuestionListPageOrderByLike = async (req: any, res: Response, next: NextFunction) => {
	const pageNumber = Number(req.query.pageNumber) - 1;
	const limit = 8;
	const offset = pageNumber * limit;
	const pageInfo = { limit, offset };
	const pageService: PageService = new PageService();

	try {
		const { questionList, questionCount } = await pageService.getQuestionListOrderByLikeCount(pageInfo);
		return res.status(200).json({
			questionList: questionList,
			questionCount: questionCount,
			message: "getList success",
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			message: `An error occurred (${error.message})`
		})
	}
}

const getQuestionListPageUnsolved = async (req: any, res: Response, next: NextFunction) => {
	const pageNumber = Number(req.query.pageNumber) - 1;
	const limit = 8;
	const offset = pageNumber * limit;
	const pageInfo = { limit, offset };
	const pageService: PageService = new PageService();

	try {
		const { questionList, questionCount } = await pageService.getQuestionListUnsolved(pageInfo);
		return res.status(200).json({
			questionList: questionList,
			questionCount: questionCount,
			message: "getList success",
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			message: `An error occurred (${error.message})`
		})
	}
}

const getQuestionListPageByKeyword = async (req: any, res: Response, next: NextFunction) => {
	const pageNumber = Number(req.query.pageNumber) - 1;
	const keyword = req.query.keyword;
	const orderBy = req.query.orderBy;
	const limit = 8;
	const offset = pageNumber * limit;
	const pageInfo = { limit, offset, keyword };
	const pageService: PageService = new PageService();

	try {
		const { questionList, questionCount } = await pageService.getQuestionListByKeyword(pageInfo, orderBy);
		return res.status(200).json({
			questionList: questionList,
			questionCount: questionCount,
			message: "getList success",
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			message: `An error occurred (${error.message})`
		})
	}
}

const getQuestionListPageByHashtagId = async (req: any, res: Response, next: NextFunction) => {
	const pageNumber = Number(req.query.pageNumber) - 1;
	const hashtagId = req.query.hashtagId;
	const orderBy = req.query.orderBy;
	const limit = 8;
	const offset = pageNumber * limit;
	const pageInfo = { limit, offset, hashtagId };
	const pageService: PageService = new PageService();

	try {
		const { questionList, questionCount } = await pageService.getQuestionListByHashtagId(pageInfo, orderBy);
		return res.status(200).json({
			questionList: questionList,
			questionCount: questionCount,
			message: "getList success",
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			message: `An error occurred (${error.message})`
		})
	}
}

const getQuestionListPageByHashtagName = async (req: any, res: Response, next: NextFunction) => {
	const pageNumber = Number(req.query.pageNumber) - 1;
	const hashtagName = req.query.hashtagName;
	const orderBy = req.query.orderBy;
	const limit = 8;
	const offset = pageNumber * limit;
	const pageInfo = { limit, offset, hashtagName };
	const pageService: PageService = new PageService();

	try {
		const { questionList, questionCount } = await pageService.getQuestionListByHashtagName(pageInfo, orderBy);
		return res.status(200).json({
			questionList: questionList,
			questionCount: questionCount,
			message: "getList success",
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			message: `An error occurred (${error.message})`
		})
	}
}

const getQuestionListPageByUserId = async (req: any, res: Response, next: NextFunction) => {
	const pageNumber = Number(req.query.pageNumber) - 1;
	const userId = req.query.userId;
	const orderBy = req.query.orderBy;
	const limit = 8;
	const offset = pageNumber * limit;
	const pageInfo = { limit, offset, userId };
	const pageService: PageService = new PageService();

	try {
		const { questionList, questionCount } = await pageService.getQuestionListByHashtagName(pageInfo, orderBy);
		return res.status(200).json({
			questionList: questionList,
			questionCount: questionCount,
			message: "getList success",
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			message: `An error occurred (${error.message})`
		})
	}
}

const getAnswerListPageByUserId = async (req: any, res: Response, next: NextFunction) => {
	const pageNumber = Number(req.query.pageNumber) - 1;
	const userId = req.query.userId;
	const orderBy = req.query.orderBy;
	const limit = 8;
	const offset = pageNumber * limit;
	const pageInfo = { limit, offset, userId };
	const pageService: PageService = new PageService();

	try {
		const { answerList, answerCount } = await pageService.getAnswerListByUserId(pageInfo, orderBy);
		return res.status(200).json({
			answerList: answerList,
			answerCount: answerCount,
			message: "getList success",
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			message: `An error occurred (${error.message})`
		})
	}
}

const getCommentListPageByUserId = async (req: any, res: Response, next: NextFunction) => {
	const pageNumber = Number(req.query.pageNumber) - 1;
	const userId = req.query.userId;
	const limit = 8;
	const offset = pageNumber * limit;
	const pageInfo = { limit, offset, userId };
	const pageService: PageService = new PageService();

	try {
		const { commentList, commentCount } = await pageService.getCommentListByUserId(pageInfo);
		return res.status(200).json({
			commentList: commentList,
			commentCount: commentCount,
			message: "getList success",
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			message: `An error occurred (${error.message})`
		})
	}
}

const getQuestionDetailPage = async (req: DecodedRequest, res: Response, next: NextFunction) => {
	const questionId = Number(req.query.questionId);
	const userId = req.decodedId;
	const pageService: PageService = new PageService();

	try {
		if (userId === undefined) {
			const questionInfo = await pageService.getQuestionDetailNoAuth(questionId);
			return res.status(200).json({
				questionInfo: questionInfo
			})
		}
		else {
			const questionInfo = await pageService.getQuestionDetail(questionId, userId);
			return res.status(200).json({
				questionInfo: questionInfo
			})
		}
	} catch (error) {
		return res.status(500).json({
			message: `An error occurred (${error.message})`
		})
	}
}

const increaseQuestionViewCount = async (req: any, res: Response, next: NextFunction) => {
	const questionId = req.body.questionId;
	const pageService: PageService = new PageService();

	try {
		const questionInfo = await pageService.setQuestionViewCount(questionId);
		return res.status(200).json({
			result: true
		})
	} catch (error) {
		return res.status(500).json({
			message: `An error occurred (${error.message})`
		})
	}
}

export const PageController = {
	getQuestionListPage, getQuestionDetailPage, getQuestionListPageOrderByLike, getQuestionListPageUnsolved,
	getQuestionListPageByKeyword, getQuestionListPageByHashtagId, getQuestionListPageByHashtagName, increaseQuestionViewCount,
	getQuestionListPageByUserId, getAnswerListPageByUserId, getCommentListPageByUserId
}