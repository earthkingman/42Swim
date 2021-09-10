import express from "express";
import authicate_JWT from "../middlewares/authJWT";
import UserController from "../controllers/user"
import { Route53RecoveryControlConfig } from "aws-sdk";
const router = express.Router();

router.get('/info', authicate_JWT, UserController.userInfo);
router.patch('/update', authicate_JWT, UserController.userInfo);
export default router