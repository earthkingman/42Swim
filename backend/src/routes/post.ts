import express from "express";
import s3 from "../aws/s3Utils"
import authticate_JWT from "../middlewares/authJWT";
import * as QuestionController from "../controllers/question"
import { AnswerController } from "../controllers/answer";
import { CommentController } from "../controllers/comment";
import { LikeController } from "../controllers/like";

const router = express.Router();

router.delete('/answer', authticate_JWT, s3.s3DeletePhoto, AnswerController.deleteAnswer)
router.post('/answer', authticate_JWT, s3.s3ImageUpload({ folder: 'author' }).array("imgFile"), AnswerController.uploadAnswer)
router.patch('/answer', authticate_JWT, s3.s3ImageUpload({ folder: 'author' }).array("imgFile"), AnswerController.updateAnswer)

router.delete('/question', authticate_JWT, s3.s3DeletePhoto, QuestionController.deleteQuestion)
router.post('/question', authticate_JWT, s3.s3ImageUpload({ folder: 'author' }).array("imgFile"), QuestionController.uploadQuestion)
router.patch('/question', authticate_JWT, s3.s3ImageUpload({ folder: 'author' }).array("imgFile"), QuestionController.updateQuestion)

router.delete('/comment', authticate_JWT, CommentController.deleteComment)
router.post('/comment', authticate_JWT, CommentController.uploadComment)
router.patch('/comment', authticate_JWT, CommentController.updateComment)

router.post('/like', authticate_JWT, LikeController.createLike)
router.delete('/like', authticate_JWT, LikeController.deleteLike)


//채택하기 api 추가 필요

export default router;