import dotenv from "dotenv";
dotenv.config();

import { Response, NextFunction } from 'express';

import { DecodedRequest } from '../definition/decoded_jwt'
import { LikeService } from '../service/like_service';
import { RankService } from "../service/rank_service";

const createAnswerLike = async (req: DecodedRequest, res: Response, next: NextFunction) => {
	const { answerId, isLike, answerUserId } = req.body;
	const userId: number = req.decodedId;
	const likeService: LikeService = new LikeService();
	const rankService: RankService = new RankService();

	try {
		const likeCount = await likeService.createAnswerLike({ userId, answerId, isLike, answerUserId });
		if (isLike){
			await rankService.updateRank(answerUserId, 10);
		}
		else{
			await rankService.updateRank(userId, -1);
		}
		return res.status(200).json({
			result: true,
			likeCount: likeCount,
			message: "create Success",
		})
	} catch (error) {
		console.log(error);
		return res.status(error.status).json({
			result: false,
			message: `An error occurred (${error.message})`
		})
	}
}

const createQuestionLike = async (req: DecodedRequest, res: Response, next: NextFunction) => {
	const { questionId, isLike, questionUserId } = req.body;
	const userId: number = req.decodedId;
	const likeService: LikeService = new LikeService();
	const rankService: RankService = new RankService();

	try {
		const likeCount = await likeService.createQuestionLike({ userId, questionId, isLike, questionUserId });
		if (isLike){
			await rankService.updateRank(questionUserId, 5);
		}
		else{
			await rankService.updateRank(userId, -1);
		}
		return res.status(200).json({
			result: true,
			likeCount: likeCount,
			message: "create Success",
		})
	} catch (error) {
		console.log(error);
		return res.status(error.status).json({
			result: false,
			message: `An error occurred (${error.message})`
		})
	}
}

const deleteAnswerLike = async (req: DecodedRequest, res: Response, next: NextFunction) => {
	const answerId = Number(req.query.answerId);
	const answerUserId = Number(req.query.answerUserId);
	const userId: number = req.decodedId;
	const likeService: LikeService = new LikeService();
	const rankService: RankService = new RankService();

	let isLike = true;
	if (req.query.isLike === "false") {
		isLike = false;
	}

	try {
		const likeCount = await likeService.deleteAnswerLike({ userId, answerId, isLike, answerUserId });
		if (isLike){
			await rankService.updateRank(answerUserId, -10);
		}
		else{
			await rankService.updateRank(userId, 1);
		}
		return res.status(200).json({
			result: true,
			likeCount: likeCount,
			message: "Delete Success",
		})
	} catch (error) {
		console.log(error);
		return res.status(error.status).json({
			result: false,
			message: `An error occurred (${error.message})`
		})
	}
}

const deleteQuestionLike = async (req: DecodedRequest, res: Response, next: NextFunction) => {
	const questionId = Number(req.query.questionId);
	const questionUserId = Number(req.query.questionUserId);
	const userId = req.decodedId;
	const likeService: LikeService = new LikeService();
	const rankService: RankService = new RankService();

	let isLike = true;
	if (req.query.isLike === "false") {
		isLike = false;
	}

	try {
		const likeCount = await likeService.deleteQuestionLike({ userId, questionId, isLike, questionUserId });
		if (isLike){
			await rankService.updateRank(questionUserId, -5);
		}
		else{
			await rankService.updateRank(userId, 1);
		}
		return res.status(200).json({
			result: true,
			likeCount: likeCount,
			message: "Delete Success",
		})
	} catch (error) {
		console.log(error);
		return res.status(error.status).json({
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