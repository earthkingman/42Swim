import { Request, Response, NextFunction } from 'express';
import dotenv from "dotenv";
dotenv.config();

import { PostService } from '../service/PostService';

const deletePost = async (req: Request, res: Response, next: NextFunction) => {
    const { postId } = req.body;
    try {
        await PostService.deletePost({ postId });
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

const updatePost = async (req: any, res: Response, next: NextFunction) => {
    const { postId, title, text } = req.body;

    let files: string[] = [];
    const size = req.files.length;
    for (let i = 0; i < size; i++)
        files.push(req.files[i].key);
    try {
        await PostService.updatePost({ title, text, photos: files, postId });
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

const uploadPost = async (req: any, res: Response) => {
    const userId = req.decodedId
    const { email, title, text } = req.body;
    const size = req.files.length;

    let files: string[] = [];
    for (let i = 0; i < size; i++)
        files.push(req.files[i].key);
    try {
        await PostService.uploadPost({ email, title, text, userId, photos: files });
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

export default {
    uploadPost: uploadPost,
    updatePost: updatePost,
    deletePost: deletePost
}