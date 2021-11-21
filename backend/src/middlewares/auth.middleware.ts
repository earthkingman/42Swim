import { Response, NextFunction } from "express"

import { jwtUtil } from "../jwt-util/jwt_utils";
import { refresh } from "../jwt-util/refresh";
import { DecodedRequest } from "../definition/decoded_jwt";

export const authJwt = async (req: DecodedRequest, res: Response, next: NextFunction) => {
  const access_token = req.cookies.authorization;
  const result = jwtUtil.accessVerify(access_token);
  if (result.ok) {
    req.decodedId = result.id;
    next();
  }
  else {
    try {
      const userId = await refresh(req, res);
      req.decodedId = userId;
      next();
    }
    catch(error){
      console.log(error)
      return res.status(500).json({
        result: false,
        message: `An error occurred (${error.message})`
      })
    }
  }
};

export const checkUserIsLogin = async (req: DecodedRequest, res: Response, next: NextFunction) => {
  const accessToken = req.cookies.authorization;
  const refreshToken = req.cookies.refresh;
  const guestId = req.cookies.guestId;
  const result = jwtUtil.accessVerify(accessToken);
  if (result.ok) {
    req.decodedId = result.id;
  }
  else if (refreshToken && guestId){
    try {
      const userId = await refresh(req, res);
      req.decodedId = userId;
      next();
    }
    catch(error){
      console.log(error)
      return res.status(500).json({
        result: false,
        message: `An error occurred (${error.message})`
      })
    }
  }
  else {
    req.decodedId = undefined;
  }
  next();
};