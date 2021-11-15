import express from "express";
import passport, { transformAuthInfo } from "passport";

import { AuthController } from "../controllers/auth";
import { s3Util } from "../aws/s3_utils";

export const authRouter = express.Router();

authRouter.post("/login", AuthController.login);

authRouter.post("/signup", AuthController.signup);

authRouter.get("/42login", passport.authenticate("42", { session: false }));

authRouter.get("/authResult", AuthController.FourtyTowLogin);

authRouter.get('/logout', AuthController.logout);