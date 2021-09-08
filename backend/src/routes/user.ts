import express from "express";
import passport from "passport";
import authicate_JWT from "../middlewares/authJWT";
import UserController from "../controllers/user";

const router = express.Router();

router.post("/login", UserController.login);

router.post("/signup", UserController.signup);

router.get("/42login", passport.authenticate("42", { session: false }));

router.get("/authResult", UserController.FourtyTowLogin);

router.get("/jwt", authicate_JWT, (req, res) => {
  res.json(123);
});

export default router;
