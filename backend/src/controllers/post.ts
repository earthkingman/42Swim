import { Request, Response, NextFunction } from 'express';
import dotenv from "dotenv";
import User from '../entity/User';
import Post from '../entity/Post';
import Photo from '../entity/Photo'
dotenv.config();

const upload = async (req: any, res: Response, next: NextFunction) => {
    const { email, title, text } = req.body;
    const image = req.file ? req.file.key : "null";
    try {

        const exPhoto = Photo.create()
        const exPost = Post.create({ email, title, text })
        await exPost.save();
        res.status(200).json({
            result: true,
            message: "Upload Success"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            result: false,
            message: `An error occurred (${error.message})`
        })
    }
    res.json(req.file.key);
}

const uploadImages = async (req, res) => {
    const { email, title, text } = req.body;
    const size = req.files.length;
    let files: string[] = [];
    for (let i = 0; i < size; i++)
        files.push(req.files[i].key);
    try {
        const exPost = Post.create({ email, title, text })
        await exPost.save();
        const post = await Post.findOne({ id: exPost.id })
        files.map((file) => {
            const exPhoto = Photo.create({ photo: file, post })
            exPhoto.save();
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
    upload: upload,
    uploadImages: uploadImages
}