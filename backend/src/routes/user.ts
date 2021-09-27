import express from "express";
import authicate_JWT from "../middlewares/authJWT";
import UserController from "../controllers/user"
import s3 from "../aws/s3Utils"
const router = express.Router();

router.get('/info', authicate_JWT, UserController.userInfo);
router.patch('/update', authicate_JWT, s3.s3ImageUpload({ folder: 'author' }).single("imgFile"), UserController.userUpdate);

export default router