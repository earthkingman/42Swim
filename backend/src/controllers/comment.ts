import dotenv from "dotenv";
dotenv.config();

import { Response } from 'express';

import { DecodedRequest } from '../definition/decoded_jwt'
import { CommentService } from '../service/comment_service';

const deleteComment = async (req: DecodedRequest, res: Response) => {
	const questionId = Number(req.query.questionId);
	const answerId = Number(req.query.answerId);
	const commentId = Number(req.query.commentId);
	const userId: number = req.decodedId;
	const commentService: CommentService = new CommentService();
	try {
		await commentService.delete({ userId, questionId, answerId, commentId });
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
	const userId: number = req.decodedId
	const commentService: CommentService = new CommentService();


	try {
		const comments = await commentService.update({ text, questionId, answerId, commentId, userId });
		return res.status(200).json({
			result: true,
			comments: comments,
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
	const userId: number = req.decodedId
	const { questionId, answerId, text } = req.body;
	const commentService: CommentService = new CommentService();

	try {
		const comments = await commentService.post({ userId, questionId, answerId, text });
		return res.status(200).json({
			result: true,
			comments: comments,
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
