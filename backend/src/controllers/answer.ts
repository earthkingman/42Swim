import { Response, NextFunction } from 'express';
import { DecodedRequest } from '../definition/decoded_jwt'
import dotenv from "dotenv";
dotenv.config();

import { AnswerService } from '../service/answer_service';

const deleteAnswer = async (req: DecodedRequest, res: Response) => {
	const { answerId, questionId } = req.body;
	const userId = req.decodedId;
	const answerService = new AnswerService();
	try {
		await answerService.delete({ answerId, questionId, userId });
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

const updateAnswer = async (req: DecodedRequest, res: Response, next: NextFunction) => {
	const { questionId, answerId, text } = req.body;
	const userId = req.decodedId;
	const files: string[] = [];
	const size = req.files.length;
	const answerService: AnswerService = new AnswerService();

	for (let i = 0; i < size; i++)
		files.push(req.files[i].key);
	try {
		await answerService.update({ text, photos: files, answerId, questionId, userId });
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

const uploadAnswer = async (req: DecodedRequest, res: Response) => {
	const userId = req.decodedId
	const { email, text, questionId } = req.body;
	const size = req.files.length;
	const files: string[] = [];
	const answerService: AnswerService = new AnswerService();

	for (let i = 0; i < size; i++)
		files.push(req.files[i].key);
	try {
		await answerService.post({ email, text, userId, questionId, photos: files });
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