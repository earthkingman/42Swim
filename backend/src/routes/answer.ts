import express from "express";
import s3 from "../aws/s3Utils"
import authicate_JWT from "../middlewares/authJWT";
import { AnswerController } from "../controllers/answer";

const answerRouter = express.Router();

answerRouter.delete('/delete', authicate_JWT, s3.s3DeletePhoto, AnswerController.deleteAnswer)

answerRouter.post('/uploads', authicate_JWT, s3.s3ImageUpload({ folder: 'author' }).array("imgFile"), AnswerController.uploadAnswer)

answerRouter.patch('/update', authicate_JWT, s3.s3ImageUpload({ folder: 'author' }).array("imgFile"), AnswerController.updateAnswer)

export { answerRouter };