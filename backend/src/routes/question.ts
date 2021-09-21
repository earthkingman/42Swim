import express from "express";
import s3 from "../aws/s3Utils"
import authicate_JWT from "../middlewares/authJWT";
import PostController from "../controllers/post"

const router = express.Router();

router.delete('/delete', authicate_JWT, s3.s3DeletePhoto, PostController.deleteQuestion)

router.post('/uploads', authicate_JWT, s3.s3ImageUpload({ folder: 'author' }).array("imgFile"), PostController.uploadQuestion)

router.patch('/update', authicate_JWT, s3.s3ImageUpload({ folder: 'author' }).array("imgFile"), PostController.updateQuestion)

export default router;