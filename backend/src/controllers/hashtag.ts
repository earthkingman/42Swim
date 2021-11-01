import dotenv from "dotenv";
dotenv.config();
import { Request, Response, NextFunction } from 'express';
import { HashtagService } from '../service/hashtag_service';

const getAllHashTagList = async (req: Request, res: Response, next: NextFunction) => {
    const hashTagService: HashtagService = new HashtagService();
    try {
        const hashTagList = await hashTagService.getAllHashTagList();
        return res.status(200).json({
            hashTags: hashTagList,
            result: true,

        })
    } catch (error) {
        return res.status(500).json({
            result: false,
            message: `An error occurred (${error.message})`
        })
    }
}

const getQuestionByHashTag = async (req: Request, res: Response, next: NextFunction) => {
    const hashTag: string = String(req.query.hashTag);
    const hashTagService: HashtagService = new HashtagService();
    try {
        const questionList = await hashTagService.getQuestionByHashTag(hashTag);
        return res.status(200).json({
            hashTags: questionList,
            result: true,
        })
    } catch (error) {
        return res.status(500).json({
            result: false,
            message: `An error occurred (${error.message})`
        })
    }
}


export const HashTagController = { getAllHashTagList, getQuestionByHashTag }
