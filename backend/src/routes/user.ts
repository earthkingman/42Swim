import express from "express";
import { authJwt } from "../middlewares/auth.middleware";
import { UserController } from "../controllers/user"
import { RankController } from "../controllers/rank";
import { s3Util } from "../aws/s3_utils";

export const userRouter = express.Router();

userRouter.get('/info', authJwt, UserController.userInfo);
userRouter.get('/profile', UserController.getProfile);
userRouter.patch('/image', authJwt, s3Util.s3ImageUpload({ folder: 'author' }).single("imgFile"), UserController.updateUserImage);
userRouter.delete('/image', authJwt, UserController.deleteUserImage);
userRouter.patch('/nickname', authJwt, UserController.updateUserNickname)
userRouter.patch('/password', authJwt, UserController.updateUserPassword)
userRouter.patch('/email', authJwt, UserController.updateUserEmail)
userRouter.get('/ranking', RankController.getRanking);
