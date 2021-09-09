import express from "express";
import passport from "passport";
import authicate_JWT from "../middlewares/authJWT";
import UserController from "../controllers/user";
import s3ImageUpload from "../aws/s3Uploader"

const router = express.Router();

router.post("/login", UserController.login);

router.post("/signup",s3ImageUpload({ folder: 'author' }).single("imgFile"), UserController.signup);

router.get("/42login", passport.authenticate("42", { session: false }));

router.get("/authResult", UserController.FourtyTowLogin);

router.get("/jwt", authicate_JWT, (req, res) => {
  res.json(123);
});

export default router;
