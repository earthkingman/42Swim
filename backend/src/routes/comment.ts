import express from "express";
import authicate_JWT from "../middlewares/authJWT";
import { CommentController } from "../controllers/comment";

const commentRouter = express.Router();

commentRouter.delete('/delete', authicate_JWT, CommentController.deleteComment)

commentRouter.post('/upload', authicate_JWT, CommentController.uploadComment)

commentRouter.patch('/update', authicate_JWT, CommentController.updateComment)

export { commentRouter };