import dotenv from "dotenv";
dotenv.config();

import { Response, NextFunction } from 'express';

import { DecodedRequest } from '../definition/decoded_jwt'
import { LikeService } from '../service/like_service';

const createAnswerLike = async (req: DecodedRequest, res: Response, next: NextFunction) => {
	const { answerId, isLike, answerUserId } = req.body;
	const userId = req.decodedId;

	try {
		await LikeService.createAnswerLike({ userId, answerId, isLike, answerUserId });
		return res.status(200).json({
			result: true,
			message: "create Success",
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			result: false,
			message: `An error occurred (${error.message})`
		})
	}
}

const createQuestionLike = async (req: DecodedRequest, res: Response, next: NextFunction) => {
	const { questionId, isLike, questionUserId } = req.body;
	const userId = req.decodedId;

	try {
		await LikeService.createQuestionLike({ userId, questionId, isLike, questionUserId });
		return res.status(200).json({
			result: true,
			message: "create Success",
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			result: false,
			message: `An error occurred (${error.message})`
		})
	}
}

const deleteAnswerLike = async (req: DecodedRequest, res: Response, next: NextFunction) => {
	const { answerId, isLike, answerUserId } = req.body;
	const userId = req.decodedId;

	try {
		await LikeService.deleteAnswerLike({ userId, answerId, isLike, answerUserId });
		return res.status(200).json({
			result: true,
			message: "Delete Success",
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			result: false,
			message: `An error occurred (${error.message})`
		})
	}
}

const deleteQuestionLike = async (req: DecodedRequest, res: Response, next: NextFunction) => {
	const { questionId, isLike, questionUserId } = req.body;
	const userId = req.decodedId;

	try {
		await LikeService.deleteQuestionLike({ userId, questionId, isLike, questionUserId });
		return res.status(200).json({
			result: true,
			message: "Delete Success",
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			result: false,
			message: `An error occurred (${error.message})`
		})
	}
}


export const LikeController = {
	createAnswerLike,
	createQuestionLike,
	deleteAnswerLike,
	deleteQuestionLike
}