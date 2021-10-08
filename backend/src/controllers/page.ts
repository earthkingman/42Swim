import dotenv from "dotenv";
dotenv.config();

import { Response, NextFunction } from 'express';

import { DecodedRequest } from '../definition/decoded_jwt'
import { PageService } from '../service/page_service';

const getQuestionListPage = async (req: DecodedRequest, res: Response, next: NextFunction) => {
	const { pageNumber } = req.body;
	const limit = 10;
	const offset = pageNumber * limit;
	const pageInfo = { limit, offset };
	const pageService: PageService = new PageService();

	try {
		const questionList = await pageService.getQuestionList(pageInfo);
		return res.status(200).json({
			quesiontList: questionList,
			message: "getList success",
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			message: `An error occurred (${error.message})`
		})
	}
}

const getQuestionDetailPage = async (req: any, res: Response, next: NextFunction) => {
	const { questionId } = req.body;
	const pageService: PageService = new PageService();

	console.log(questionId, req.guestToken);
	try {
		const questionDetail = await pageService.getQuestionDetail(questionId);
		return res.status(200).json({
			questionDetail: questionDetail,
			guestId: req.guestToken
		})
	} catch (error) {
		return res.status(500).json({
			message: `An error occurred (${error.message})`
		})
	}
}

export const PageController = {
	getQuestionListPage, getQuestionDetailPage
}