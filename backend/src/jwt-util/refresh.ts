import { Request, Response } from 'express';
import jwt from "jsonwebtoken";

import { jwtUtil } from './jwt_utils';

export const refresh = async (req: Request, res: Response) => {
  const refresh_token = req.cookies.refresh;
  const access_token = req.cookies.authorization;
  if (refresh_token && access_token) {
    //access token 검증
    const authResult = await jwtUtil.accessVerify(access_token); // 만료가 됬다면 에러발생 -> 데이터를 볼수가 없음
    const decoded = jwt.decode(access_token); // 만료가 되도 데이터를 볼수 있음
    // access token 디코딩 결과가 null일 때
    if (decoded === null) {
      res.status(401).json({
        ok: false,
        message: "No authorized",
      });
    }
    //refresh token 검증
    const refreshResult = await jwtUtil.refreshVerify(refresh_token, decoded.id);
    //access token 만료됬을 경우
    if (authResult.ok === false && authResult.message === "jwt expired") {
      //refresh token 만료됬을 경우
      if (refreshResult === false) {
        res.status(401).json({
          ok: false,
          message: "No authorized",
        });
      }
      // refresh token은 만료되지 않은 경우
      else {
        const newAccesToken = jwtUtil.accessSign(decoded);
        res.cookie("authorization", newAccesToken, {
          maxAge: 60000 * 5,
          httpOnly: true,
        });
        res.status(200).json({
          newAccesToken: newAccesToken,
          refreshToken: refresh_token,
        });
      }
    }
    //access token이 만료되지 않은경우
    else {
      res.status(400).json({
        message: "Acess token is not expired!",
      });
    }
  }
  // access token 또는 refresh token이 헤더에 없는 경우
  else {
    res.status(400).json({
      ok: false,
      message: "Access token and refresh token are need for refresh!",
    });
  }
};
