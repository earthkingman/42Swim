import { Request, Response, NextFunction } from 'express';
import { DecodedRequest } from '../definition/decodedJWT'
import dotenv from "dotenv";
dotenv.config();

import { CommentService } from '../service/CommentService';
import { PageService } from '../service/PageService';

const deleteComment = async (req: DecodedRequest, res: Response) => {
	const { questionId, answerId, commentId } = req.body;
	const userId = req.decodedId;

	try {
		await CommentService.deleteComment({ userId, questionId, answerId, commentId });
		return res.status(200).json({
			result: true,
			message: "Delete Success"
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			result: false,
			message: `An error occurred (${error.message})`
		})
	}
}

const updateComment = async (req: DecodedRequest, res: Response) => {
	const { questionId, answerId, commentId, text } = req.body;
	const userId = req.decodedId
	try {
		await CommentService.updateComment({ text, questionId, answerId, commentId, userId });
		return res.status(200).json({
			result: true,
			message: "Update Success"
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			result: false,
			message: `An error occurred (${error.message})`
		})
	}
}

const uploadComment = async (req: DecodedRequest, res: Response) => {
	const userId = req.decodedId
	const { questionId, answerId, text } = req.body;
	try {
		await CommentService.uploadComment({ userId, questionId, answerId, text });
		return res.status(200).json({
			result: true,
			message: "Upload Success"
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
