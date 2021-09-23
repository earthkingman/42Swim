import { Request, Response, NextFunction } from 'express';
import dotenv from "dotenv";
dotenv.config();

import { CommentService } from '../service/CommentService';
import { PageService } from '../service/PageService';

const deleteComment = async (req: any, res: Response, next: NextFunction) => {
	const { questionId, answerId, commentId } = req.body;
	const userId = req.decodedId;

	try {
		await CommentService.deleteComment({ userId, questionId, answerId, commentId });
		const pageInfo = await PageService.getQuestionPageDataByQuestionId(questionId);
		return res.status(200).json({
			result: true,
			message: "Delete Success",
			pageInfo
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			result: false,
			message: `An error occurred (${error.message})`
		})
	}
}

const updateComment = async (req: any, res: Response, next: NextFunction) => {
	const { questionId, answerId, commentId, text } = req.body;
	const userId = req.decodedId
	try {
		await CommentService.updateComment({ text, questionId, answerId, commentId, userId });
		const pageInfo = await PageService.getQuestionPageDataByQuestionId(questionId);
		return res.status(200).json({
			result: true,
			message: "Update Success",
			pageInfo
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			result: false,
			message: `An error occurred (${error.message})`
		})
	}
}

const uploadComment = async (req: any, res: Response) => {
	const userId = req.decodedId
	const { questionId, answerId, text } = req.body;
	try {
		await CommentService.uploadComment({ userId, questionId, answerId, text });
		const pageInfo = await PageService.getQuestionPageDataByQuestionId(questionId);
		return res.status(200).json({
			result: true,
			message: "Upload Success",
			pageInfo
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			result: false,
			message: `An error occurred (${error.message})`
		})
	}
}

export const CommentController = {
	uploadComment,
	updateComment,
	deleteComment
}