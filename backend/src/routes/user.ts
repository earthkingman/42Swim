import express from "express";
import authticate_JWT from "../middlewares/authJWT";
import UserController from "../controllers/user"
import s3 from "../aws/s3Utils"
const router = express.Router();

router.get('/info', authticate_JWT, UserController.userInfo);
router.patch('/update', authticate_JWT, s3.s3ImageUpload({ folder: 'author' }).single("imgFile"), UserController.userUpdate);

export default router