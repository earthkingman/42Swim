import { Request, Response, NextFunction } from 'express';
import dotenv from "dotenv";
dotenv.config();

import { LikeService } from '../service/LikeService';

const createLike = async (req: any, res: Response, next: NextFunction) => {
	const { questionId, answerId, isLike, questionUserId, answerUserId } = req.body;
	const userId = req.decodedId;

	try {
		await LikeService.createLike({ userId, questionId, answerId, isLike, questionUserId, answerUserId });
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

const deleteLike = async (req: any, res: Response, next: NextFunction) => {
	const { questionId, answerId, isLike, questionUserId, answerUserId } = req.body;
	const userId = req.decodedId;

	try {
		await LikeService.deleteLike({ userId, questionId, answerId, isLike, questionUserId, answerUserId });
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
	createLike,
	deleteLike,
}