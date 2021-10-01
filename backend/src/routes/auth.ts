import express from "express";
import passport from "passport";

import { AuthController } from "../controllers/auth";
import s3 from "../aws/s3Utils"

const router = express.Router();

router.post("/login", AuthController.login);

router.post("/signup", s3.s3ImageUpload({ folder: 'author' }).single("imgFile"), AuthController.signup);

router.get("/42login", passport.authenticate("42", { session: false }));

router.get("/authResult", AuthController.FourtyTowLogin);


export default router;
