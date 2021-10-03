import express from "express";
import authticate_JWT from "../middlewares/authJWT";
import { UserController } from "../controllers/user"
import s3 from "../aws/s3Utils"
const router = express.Router();

router.get('/info', authticate_JWT, UserController.userInfo);
router.patch('/image', authticate_JWT, s3.s3ImageUpload({ folder: 'author' }).single("imgFile"), UserController.updateUserImage);
router.patch('/nickname', authticate_JWT, UserController.updateUserNickname)
router.patch('/password', authticate_JWT, UserController.updateUserPassword)
export default router