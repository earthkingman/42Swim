import dotenv from "dotenv";
dotenv.config();

import { Request, Response, NextFunction } from 'express';
import passport from "passport";
import bcrypt from "bcrypt";

import { jwtUtil } from "../jwt-util/jwt_utils";
import { redisClient } from "../lib/redis";
import { UserService } from "../service/user_service";

const login = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("local", (authError, userId, info) => {
    if (authError || userId == false) {
      return res.status(400).json({ message: info.message });
    }
    const accessToken = jwtUtil.accessSign(userId);
    const refreshToken = jwtUtil.refreshSign();
    redisClient.set(userId.id, refreshToken);
    res.cookie("authorization", accessToken, {
      maxAge: 60000 * 30,
      httpOnly: true,
    });
    return res.status(200).json({
      refreshToken: refreshToken,
    });
  })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
};

const signup = async (req: any, res: Response) => {
  const { nickname, email, password } = req.body;
  const photo = req.file ? req.file.key : "null";
  const encryptedPassword = await bcrypt.hashSync(password, +process.env.SALT_ROUNDS);
  const userService: UserService = new UserService();

  try {
    const { exUser } = await userService.createUser({ email, nickname, password: encryptedPassword, photo });
    if (exUser) {
      return res.status(400).json({
        result: false,
        message: "duplicated email",
      });
    }
    else {
      res.status(200).json({
        result: true,
        message: "signup successful",
      });
    }
  }
  catch (error) {
    console.log(error);
    return res.status(400).json({
      result: false,
      message: `An error occurred (${error.message})`,
    });
  }
};

const FourtyTowLogin = (req: Request, res: Response, next: NextFunction) => {
  //-> 커스텀 콜백
  passport.authenticate("42", (authError, userId, info) => {
    if (authError || !userId) {
      console.log(authError);
      res.status(400).json({ message: info });
    }
    const accessToken = jwtUtil.accessSign(userId.id);
    const refreshToken = jwtUtil.refreshSign();
    redisClient.set(userId.id, refreshToken);
    res.cookie("authorization", accessToken, {
      maxAge: 300000,
      httpOnly: true,
    });
    res.status(200).json({
      refreshToken: refreshToken,
    });
  })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
};

export const AuthController = { login, signup, FourtyTowLogin }