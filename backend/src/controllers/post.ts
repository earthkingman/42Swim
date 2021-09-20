import { Request, Response, NextFunction } from 'express';
import dotenv from "dotenv";
import User from '../entity/User';
import Post from '../entity/Post';
import Photo from '../entity/Photo'
dotenv.config();

import { getUserRepository, getPostRepository, getPhotoRepository } from '../repository/service';

const deletePost = async (req: Request, res: Response, next: NextFunction) => {
    const postRepository = await getPostRepository();
    const { postId } = req.body;

    try {
        await postRepository.removeById(postId);
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
    const postRepository = await getPostRepository();
    const photoRepository = await getPhotoRepository();
    const { postId, title, text } = req.body;
    let files: string[] = [];
    const size = req.files.length;

    for (let i = 0; i < size; i++)
        files.push(req.files[i].key);
    try {
        const post = await postRepository.updateById({ postId, title, text });
        const removeResult = await photoRepository.removeByPost(post);
        files.map(async (photo) => {
            const exPhoto = await photoRepository.createPhoto({ photo, post });
        })
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
    const userRepository = await getUserRepository();
    const postRepository = await getPostRepository();
    const photoRepository = await getPhotoRepository();
    let files: string[] = [];

    for (let i = 0; i < size; i++)
        files.push(req.files[i].key);
    try {
        const user = await userRepository.findById(userId);
        const post = await postRepository.createPost({ email, title, text, user });
        files.map(async (photo) => {
            const exPhoto = await photoRepository.createPhoto({ photo, post });
        })
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