import dotenv from "dotenv";
dotenv.config();

import { Response, NextFunction } from 'express';

const uploadImage = async (req: any, res: Response, next: NextFunction) => {
    const id = req.decodedId;
    const image = req.file.location;
    try {
        return res.status(200).json({
            image: image
        })
    } catch (error) {
        return res.status(500).json({
            result: false,
            message: `An error occurred (${error.message})`
        })
    }
}

export const PhotoController = {
    uploadImage,
}