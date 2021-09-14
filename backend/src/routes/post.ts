import express from "express";
import s3ImageUpload from "../aws/s3Uploader"
import authicate_JWT from "../middlewares/authJWT";
import PostController from "../controllers/post"

const router = express.Router();

router.post('/upload', authicate_JWT, s3ImageUpload({ folder: 'author' }).single("imgFile"), PostController.upload)

router.post('/uploads', authicate_JWT, s3ImageUpload({ folder: 'author' }).array("imgFile"), PostController.uploadImages)

export default router;