import express from "express";
import s3 from "../aws/s3Utils"
import authicate_JWT from "../middlewares/authJWT";
import QuestionController from "../controllers/question"
import { AnswerController } from "../controllers/answer";
import { CommentController } from "../controllers/comment";
import { LikeController } from "../controllers/like";

const router = express.Router();

router.delete('/answer', authicate_JWT, s3.s3DeletePhoto, AnswerController.deleteAnswer)
router.post('/answer', authicate_JWT, s3.s3ImageUpload({ folder: 'author' }).array("imgFile"), AnswerController.uploadAnswer)
router.patch('/answer', authicate_JWT, s3.s3ImageUpload({ folder: 'author' }).array("imgFile"), AnswerController.updateAnswer)

router.delete('/question', authicate_JWT, s3.s3DeletePhoto, QuestionController.deleteQuestion)
router.post('/question', authicate_JWT, s3.s3ImageUpload({ folder: 'author' }).array("imgFile"), QuestionController.uploadQuestion)
router.patch('/question', authicate_JWT, s3.s3ImageUpload({ folder: 'author' }).array("imgFile"), QuestionController.updateQuestion)

router.delete('/comment', authicate_JWT, CommentController.deleteComment)
router.post('/comment', authicate_JWT, CommentController.uploadComment)
router.patch('/comment', authicate_JWT, CommentController.updateComment)

router.post('/like', authicate_JWT, LikeController.createLike)
router.delete('/like', authicate_JWT, LikeController.deleteLike)


//채택하기 api 추가 필요

export default router;