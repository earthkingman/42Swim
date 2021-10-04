import dotenv from "dotenv";
dotenv.config();

import { Request, Response, NextFunction } from 'express';

import { QuestionService } from '../service/question_service';

const deleteQuestion = async (req: Request, res: Response, next: NextFunction) => {
    const { questionId } = req.body;

    try {
        await QuestionService.deleteQuestion({ questionId });
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

const updateQuestion = async (req: any, res: Response, next: NextFunction) => {
    const { questionId, title, text, hashTag } = req.body;
    console.log(hashTag)
    const files: string[] = [];
    const size = req.files.length;

    for (let i = 0; i < size; i++)
        files.push(req.files[i].key);
    try {
        await QuestionService.updateQuestion({ title, text, photos: files, questionId, hashTag });
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

const uploadQuestion = async (req: any, res: Response) => {
    const userId = req.decodedId
    const { email, title, text, hashTag } = req.body;
    const size = req.files.length;
    const files: string[] = [];

    for (let i = 0; i < size; i++)
        files.push(req.files[i].key);
    try {
        await QuestionService.uploadQuestion({ email, title, text, userId, photos: files, hashTag });
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