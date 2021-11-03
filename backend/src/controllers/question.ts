import dotenv from "dotenv";
dotenv.config();

import { Response, NextFunction } from 'express';

import { DecodedRequest } from '../definition/decoded_jwt'
import { QuestionService } from '../service/question_service';

const deleteQuestion = async (req: DecodedRequest, res: Response, next: NextFunction) => {
    const { questionId } = req.body;
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
    console.log(hashtag)
    const files: string[] = [];
    const size = req.files.length;
    const questionService: QuestionService = new QuestionService();

    for (let i = 0; i < size; i++)
        files.push(req.files[i].key);
    try {
        await questionService.update({ title, text, photos: files, questionId, hashtag, userId });
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
    //const size = req.files.length;
    const size = 0;
    const files: string[] = [];
    const questionService: QuestionService = new QuestionService();

    for (let i = 0; i < size; i++)
        files.push(process.env.S3 + req.files[i].key);
    try {
        await questionService.post({ email, title, text, userId, hashtag });
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

export const QuestionController = {
    deleteQuestion, updateQuestion, uploadQuestion
}
