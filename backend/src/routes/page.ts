import express from "express";

import { checkUserIsLogin } from "../middlewares/auth.middleware";
import { PageController } from "../controllers/page";

export const pageRouter = express.Router();

pageRouter.get('/list/question', PageController.getQuestionListPage);

pageRouter.get('/detail/question', checkUserIsLogin, PageController.getQuestionDetailPage);

pageRouter.get('/list/question/like', PageController.getQuestionListPageOrderByLike);

pageRouter.get('/list/question/unsolved', PageController.getQuestionListPageUnsolved);

pageRouter.get('/list/question/keyword', PageController.getQuestionListPageByKeyword);

// router.delete('/delete', authticate_JWT, s3.s3DeletePhoto, QuestionController.deleteQuestion)

// router.post('/uploads', authticate_JWT, s3.s3ImageUpload({ folder: 'author' }).array("imgFile"), QuestionController.uploadQuestion)

// router.patch('/update', authticate_JWT, s3.s3ImageUpload({ folder: 'author' }).array("imgFile"), QuestionController.updateQuestion)

// 채택하기 api 추가 필요