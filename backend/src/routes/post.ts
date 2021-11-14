import express from "express";
import { s3Util } from "../aws/s3_utils";
import { authJwt } from "../middlewares/auth.middleware";
import { QuestionController } from "../controllers/question"
import { AnswerController } from "../controllers/answer";
import { CommentController } from "../controllers/comment";
import { LikeController } from "../controllers/like";
import { Question } from "../controllers/dto/question"
import { Answer } from "../controllers/dto/answer"
import { Comment } from "../controllers/dto/comment"
import { PhotoController } from "../controllers/photo";
import { validationMiddleware } from "../middlewares/validation.middleware"

export const postRouter = express.Router();

postRouter.delete('/answer', authJwt, AnswerController.deleteAnswer);
postRouter.post('/answer', authJwt, s3Util.s3ImageUpload({ folder: 'author' }).array("imgFile"), validationMiddleware(Answer, true), AnswerController.uploadAnswer);
postRouter.patch('/answer', authJwt, s3Util.s3ImageUpload({ folder: 'author' }).array("imgFile"), validationMiddleware(Answer), AnswerController.updateAnswer);

postRouter.delete('/question', authJwt, QuestionController.deleteQuestion);
postRouter.post('/question', authJwt, s3Util.s3ImageUpload({ folder: 'author' }).array("imgFile"), validationMiddleware(Question, true), QuestionController.uploadQuestion);
postRouter.patch('/question', authJwt, s3Util.s3ImageUpload({ folder: 'author' }).array("imgFile"), validationMiddleware(Question), QuestionController.updateQuestion);

postRouter.delete('/comment', authJwt, CommentController.deleteComment);
postRouter.post('/comment', authJwt, validationMiddleware(Comment, true), CommentController.uploadComment);
postRouter.patch('/comment', authJwt, validationMiddleware(Comment), CommentController.updateComment);

postRouter.post('/answer/like', authJwt, LikeController.createAnswerLike);
postRouter.delete('/answer/like', authJwt, LikeController.deleteAnswerLike);
postRouter.post('/question/like', authJwt, LikeController.createQuestionLike);
postRouter.delete('/question/like', authJwt, LikeController.deleteQuestionLike);

postRouter.post('/image', authJwt, s3Util.s3ImageUpload({ folder: 'author' }).single("imgFile"), PhotoController.uploadImage);
//채택하기 api 추가 필요