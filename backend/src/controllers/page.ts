import { Request, Response, NextFunction } from 'express';
import dotenv from "dotenv";
dotenv.config();

import { QuestionService } from '../service/QuestionService';
import { PageService } from '../service/PageService';

const getQuestionListPage = async (req: Request, res: Response, next: NextFunction) => {
	const { pageNumber } = req.body;
	const limit: number = 10;
	const offset = pageNumber * limit;
	const pageInfo = { limit, offset };

	try {
		const questionList = await PageService.getQuestionListPage(pageInfo);
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
	console.log(req.guestToken);
	try {
		const questionDetail = await PageService.getQuestionDetailPage(questionId);
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

// const deleteQuestion = async (req: Request, res: Response, next: NextFunction) => {
// 	const { questionId } = req.body;

// 	try {
// 		await QuestionService.deleteQuestion({ questionId });
// 		return res.status(200).json({
// 			result: true,
// 			message: "Delete Success"
// 		})
// 	} catch (error) {
// 		console.log(error);
// 		return res.status(500).json({
// 			result: false,
// 			message: `An error occurred (${error.message})`
// 		})
// 	}
// }

// const updateQuestion = async (req: any, res: Response, next: NextFunction) => {
// 	const { questionId, title, text, hashTag } = req.body;
// 	console.log(hashTag)
// 	let files: string[] = [];
// 	const size = req.files.length;

// 	for (let i = 0; i < size; i++)
// 		files.push(req.files[i].key);
// 	try {
// 		await QuestionService.updateQuestion({ title, text, photos: files, questionId, hashTag });
// 		return res.status(200).json({
// 			result: true,
// 			message: "Update Success"
// 		})
// 	} catch (error) {
// 		console.log(error);
// 		return res.status(500).json({
// 			result: false,
// 			message: `An error occurred (${error.message})`
// 		})
// 	}
// }

// const uploadQuestion = async (req: any, res: Response) => {
// 	const userId = req.decodedId
// 	const { email, title, text, hashTag } = req.body;
// 	const size = req.files.length;
// 	let files: string[] = [];

// 	for (let i = 0; i < size; i++)
// 		files.push(req.files[i].key);
// 	try {
// 		await QuestionService.uploadQuestion({ email, title, text, userId, photos: files, hashTag });
// 		return res.status(200).json({
// 			result: true,
// 			message: "Upload Success"
// 		})
// 	} catch (error) {
// 		console.log(error);
// 		return res.status(500).json({
// 			result: false,
// 			message: `An error occurred (${error.message})`
// 		})
// 	}
// }

export const PageController = {
	getQuestionListPage, getQuestionDetailPage
}