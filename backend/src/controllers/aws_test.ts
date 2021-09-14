import { Request, Response, NextFunction } from 'express';



const uploadImages = async (req, res) => {
    const image = req.files;
    const path = image.map(img => img.location);
    if (image === undefined) {
        return res.status(400).send("이미지가 존재하지 않습니다.");
    }
    res.status(200).send(path);
}



export default uploadImages;