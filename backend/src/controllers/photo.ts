import dotenv from "dotenv";
dotenv.config();

import { Response, NextFunction } from 'express';

const uploadImage = async (req: any, res: Response, next: NextFunction) => {
    const id = req.decodedId;
    const photo = req.file.key;
    try {
        console.log(photo);
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
