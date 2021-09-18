import { Request, Response, NextFunction } from 'express';
import dotenv from "dotenv";
import User from '../entity/User';
import Post from '../entity/Post';
import Photo from '../entity/Photo'
dotenv.config();



const deletePost = async (req: Request, res: Response, next: NextFunction) => {
    const { postId } = req.body;
    try {
        const exUser = await Post.findOne({ id: postId });
        await exUser.remove();
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
        const post = await Post.findOne({ id: postId })
        post.title = title || post.title;
        post.text = text || post.text;
        await post.save();
        const photos = await Photo.find({ post: post })
        photos.map(async (photo) => {
            await photo.remove();
        })
        files.map(async (photo) => {
            const exPhoto = await Photo.create({ photo, post })
            await exPhoto.save();
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
    let files: string[] = [];
    for (let i = 0; i < size; i++)
        files.push(req.files[i].key);
    try {
        const user = await User.findOne(userId);
        const exPost = await Post.create({ email, title, text, user })
        await exPost.save();
        const post = await Post.findOne({ id: exPost.id })
        files.map(async (photo) => {
            const exPhoto = await Photo.create({ photo, post })
            await exPhoto.save();
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