import dotenv from "dotenv";
dotenv.config();

import { Response, NextFunction } from 'express';

const uploadImage = async (req: any, res: Response, next: NextFunction) => {
    const id = req.decodedId;
    const photo = req.file;
    try {
        console.log(photo.location);
        return res.status(200).json({
            photo: photo.location
        })
    } catch (error) {
        res.status(500).json({
            result: false,
            message: `An error occurred (${error.message})`
        })
    }
}

export const PhotoController = {
    uploadImage,
}