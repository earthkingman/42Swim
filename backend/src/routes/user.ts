import express from "express";
import { authJwt } from "../middlewares/auth.middleware";
import { UserController } from "../controllers/user"
import { s3Util } from "../aws/s3_utils";

export const userRouter = express.Router();

userRouter.get('/info', authJwt, UserController.userInfo);
userRouter.patch('/image', authJwt, s3Util.s3ImageUpload({ folder: 'author' }).single("imgFile"), UserController.updateUserImage);
userRouter.patch('/nickname', authJwt, UserController.updateUserNickname)
userRouter.patch('/password', authJwt, UserController.updateUserPassword)
userRouter.patch('/email', authJwt, UserController.updateUserEmail)