import express from "express";
import { PageController } from "../controllers/page";

const router = express.Router();

router.get('/list/question', PageController.getQuestionListPage);

// router.delete('/delete', authicate_JWT, s3.s3DeletePhoto, QuestionController.deleteQuestion)

// router.post('/uploads', authicate_JWT, s3.s3ImageUpload({ folder: 'author' }).array("imgFile"), QuestionController.uploadQuestion)

// router.patch('/update', authicate_JWT, s3.s3ImageUpload({ folder: 'author' }).array("imgFile"), QuestionController.updateQuestion)

// 채택하기 api 추가 필요

export default router;