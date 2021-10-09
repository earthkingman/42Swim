import express from "express";
import { PageController } from "../controllers/page";

export const pageRouter = express.Router();

pageRouter.get('/list/question', PageController.getQuestionListPage);

pageRouter.get('/detail/question', PageController.getQuestionDetailPage);

// router.delete('/delete', authticate_JWT, s3.s3DeletePhoto, QuestionController.deleteQuestion)

// router.post('/uploads', authticate_JWT, s3.s3ImageUpload({ folder: 'author' }).array("imgFile"), QuestionController.uploadQuestion)

// router.patch('/update', authticate_JWT, s3.s3ImageUpload({ folder: 'author' }).array("imgFile"), QuestionController.updateQuestion)

// 채택하기 api 추가 필요