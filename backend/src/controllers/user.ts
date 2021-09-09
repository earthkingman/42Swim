import dotenv from "dotenv";
dotenv.config();
import User from "../entity/User";
import jwt from "../jwt-util/jwt-utils";
import passport from "passport";
import { redisClient } from "../lib/redis";

const login = (req, res, next) => {
  passport.authenticate("local", (authError, userId, info) => {
    if (authError || !userId) {
      console.log(authError);
      res.status(400).json({ message: info.message });
    }
    console.log(userId);
    const accessToken = jwt.accessSign(userId);
    const refreshToken = jwt.refresh_sign();
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

const signup = async (req, res) => {
  const { nickname, email, password } = req.body;
  const photo = req.file ? req.file.key : "null";
  console.log(nickname, email, password, photo);
  try {
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
      res.status(400).json({
        result: false,
        message: "이미 계정이 있습니다",
      });
    } else {
      const user = User.create({ nickname, email, password, photo });
      await user.save();
      res.status(200).json({
        result: true,
        message: "회원가입 되었습니다.",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      result: false,
      message: `오류가 발생했습니다 (${error.message})`,
    });
  }
};

const FourtyTowLogin = (req, res, next) => {
  //-> 커스텀 콜백
  passport.authenticate("42", (authError, userId, info) => {
    if (authError || !userId) {
      console.log(authError);
      res.status(400).json({ message: info });
    }
    const accessToken = jwt.accessSign(userId.id);
    const refreshToken = jwt.refresh_sign();
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

export default {
  login: login,
  signup: signup,
  FourtyTowLogin: FourtyTowLogin,
};
