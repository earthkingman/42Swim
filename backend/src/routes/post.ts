import express, { Request, Response, NextFunction } from "express";
import s3ImageUpload from "../aws/s3Uploader"
const router = express.Router();

router.post('/upload', s3ImageUpload({ folder: 'author' }).single("imgFile"), function(req : Request, res : Response, next : NextFunction){
  let imgFile = req.file;
  res.json(imgFile);
})


export default router;