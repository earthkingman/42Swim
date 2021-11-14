import dotenv from "dotenv";
dotenv.config();

import { Response, NextFunction } from 'express';

import { DecodedRequest } from '../definition/decoded_jwt'
import { QuestionService } from '../service/question_service';

const deleteQuestion = async (req: DecodedRequest, res: Response, next: NextFunction) => {
    const questionId = Number(req.query.questionId);
    const userId: number = req.decodedId;
    const questionService: QuestionService = new QuestionService();

    try {
        await questionService.delete({ questionId, userId });
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

const updateQuestion = async (req: DecodedRequest, res: Response, next: NextFunction) => {
    const { questionId, title, text, hashtag } = req.body;
    const userId: number = req.decodedId
    const questionService: QuestionService = new QuestionService();
    const newHashTag = hashtag.substr(1);

    try {
        await questionService.update({ title, text, questionId, newHashTag, userId });
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

const uploadQuestion = async (req: DecodedRequest, res: Response) => {
    const userId: number = req.decodedId
    const { email, title, text, hashtag } = req.body;
    const questionService: QuestionService = new QuestionService();
    const newHashTag = hashtag.substr(1);

    try {
        const id = await questionService.post({ email, title, text, userId, hashtag: newHashTag });
        return res.status(200).json({
            id: id,
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

export const QuestionController = {
    deleteQuestion, updateQuestion, uploadQuestion
}
