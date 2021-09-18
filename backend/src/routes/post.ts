import express from "express";
import s3 from "../aws/s3Utils"
import authicate_JWT from "../middlewares/authJWT";
import PostController from "../controllers/post"

const router = express.Router();

router.delete('/delete', authicate_JWT, s3.s3DeletePhoto, PostController.deletePost)

router.post('/uploads', authicate_JWT, s3.s3ImageUpload({ folder: 'author' }).array("imgFile"), PostController.uploadPost)

router.post('/update', authicate_JWT, s3.s3ImageUpload({ folder: 'author' }).array("imgFile"), PostController.updatePost)

export default router;