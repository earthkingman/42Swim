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
			quesiontList: questionList,
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
			quesiontList: questionList,
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
			quesiontList: questionList,
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
	const limit = 8;
	const offset = pageNumber * limit;
	const pageInfo = { limit, offset };
	const pageService: PageService = new PageService();

	try {
		const { questionList, questionCount } = await pageService.getQuestionListByKeyword(pageInfo);
		return res.status(200).json({
			quesiontList: questionList,
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

const getQuestionDetailPage = async (req: DecodedRequest, res: Response, next: NextFunction) => {
	const questionId = Number(req.query.questionId);
	const userId = req.decodedId;
	const pageService: PageService = new PageService();

	try {
		const questionInfo = await pageService.getQuestionDetail(questionId, userId);
		return res.status(200).json({
			questionInfo: questionInfo
		})
	} catch (error) {
		return res.status(500).json({
			message: `An error occurred (${error.message})`
		})
	}
}

export const PageController = {
	getQuestionListPage, getQuestionDetailPage, getQuestionListPageOrderByLike, getQuestionListPageUnsolved,
	getQuestionListPageByKeyword
}