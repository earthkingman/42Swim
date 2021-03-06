import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";
import util from "util";

import { redisClient } from "../lib/redis";

const secret = process.env.TOKEN_SECRET_KEY;

const accessSign = (userId) => {
  const payload = {
    id: userId,
  };
  return jwt.sign(payload, secret, {
    expiresIn: "30m",
  });
}

const accessVerify = (access_token) => {
  let decoded = null;
  try {
    decoded = jwt.verify(access_token, secret);
    return {
      ok: true,
      id: decoded.id,
    };
  } catch (error) {
    return {
      ok: false,
      message: error.message,
    };
  }
}

const refreshSign = () => {
  return jwt.sign({}, secret, {
    expiresIn: "14d",
  });
}

const refreshVerify = async (refresh_token, userId) => {
  const getAsync = util.promisify(redisClient.get).bind(redisClient);
  try {
    const data = await getAsync(userId);
    if (refresh_token === data) {
      //레디스에 저장된 토큰과 비교
      try {
        jwt.verify(refresh_token, secret);
        return true;
      } catch (err) {
        console.log(err.message);
        return false;
      }
    } else {
      return false;
    }
  } catch (error) {
    console.log(error.message);
    return false;
  }
}

export const jwtUtil = { accessSign, accessVerify, refreshSign, refreshVerify };