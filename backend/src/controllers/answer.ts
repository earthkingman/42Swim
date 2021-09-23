import { Request, Response, NextFunction } from 'express';
import dotenv from "dotenv";
dotenv.config();

import { AnswerService } from '../service/AnwserService';

const deleteAnswer = async (req: any, res: Response, next: NextFunction) => {
	const { answerId, questionId } = req.body;
	const userId = req.decodedId;
	try {
		await AnswerService.deleteAnswer({ answerId, questionId, userId });
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

const updateAnswer = async (req: any, res: Response, next: NextFunction) => {
	const { questionId, answerId, text } = req.body;
	const userId = req.decodedId;
	let files: string[] = [];
	const size = req.files.length;

	for (let i = 0; i < size; i++)
		files.push(req.files[i].key);
	try {
		await AnswerService.updateAnswer({ text, photos: files, answerId, questionId, userId });
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

const uploadAnswer = async (req: any, res: Response) => {
	const userId = req.decodedId
	const { email, text, questionId } = req.body;
	const size = req.files.length;
	let files: string[] = [];

	for (let i = 0; i < size; i++)
		files.push(req.files[i].key);
	try {
		await AnswerService.uploadAnswer({ email, text, userId, questionId, photos: files });
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

export const AnswerController = { uploadAnswer, updateAnswer, deleteAnswer }