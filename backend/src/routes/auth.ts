import express from "express";
import passport from "passport";

import AuthController from "../controllers/login";
import s3ImageUpload from "../aws/s3Uploader"

const router = express.Router();

router.post("/login", AuthController.login);

router.post("/signup", s3ImageUpload({ folder: 'author' }).single("imgFile"), AuthController.signup);

router.get("/42login", passport.authenticate("42", { session: false }));

router.get("/authResult", AuthController.FourtyTowLogin);


export default router;
