import express from "express";
import { s3Util } from "../aws/s3_utils";
import { authJwt } from "../middlewares/auth_jwt";
import { QuestionController } from "../controllers/question"
import { AnswerController } from "../controllers/answer";
import { CommentController } from "../controllers/comment";
import { LikeController } from "../controllers/like";

export const postRouter = express.Router();

postRouter.delete('/answer', authJwt, s3Util.s3DeletePhoto, AnswerController.deleteAnswer)
postRouter.post('/answer', authJwt, s3Util.s3ImageUpload({ folder: 'author' }).array("imgFile"), AnswerController.uploadAnswer)
postRouter.patch('/answer', authJwt, s3Util.s3ImageUpload({ folder: 'author' }).array("imgFile"), AnswerController.updateAnswer)

postRouter.delete('/question', authJwt, s3Util.s3DeletePhoto, QuestionController.deleteQuestion)
postRouter.post('/question', authJwt, s3Util.s3ImageUpload({ folder: 'author' }).array("imgFile"), QuestionController.uploadQuestion)
postRouter.patch('/question', authJwt, s3Util.s3ImageUpload({ folder: 'author' }).array("imgFile"), QuestionController.updateQuestion)

postRouter.delete('/comment', authJwt, CommentController.deleteComment)
postRouter.post('/comment', authJwt, CommentController.uploadComment)
postRouter.patch('/comment', authJwt, CommentController.updateComment)

postRouter.post('/answer/like', authJwt, LikeController.createAnswerLike)
postRouter.delete('/answer/like', authJwt, LikeController.deleteAnswerLike)
postRouter.post('/question/like', authJwt, LikeController.createQuestionLike)
postRouter.delete('/question/like', authJwt, LikeController.deleteQuestionLike)

//채택하기 api 추가 필요