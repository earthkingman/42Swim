import { Response, NextFunction } from "express"

import { jwtUtil } from "../jwt-util/jwt_utils";
import { DecodedRequest } from "../definition/decoded_jwt";

export const authJwt = (req: DecodedRequest, res: Response, next: NextFunction) => {
  const access_token = req.cookies.authorization;
  const result = jwtUtil.accessVerify(access_token);
  if (result.ok) {
    req.decodedId = result.id;
    next();
  } else {
    res.status(401).json({
      message: result.message,
    });
  }
};

export const checkUserIsLogin = (req: DecodedRequest, res: Response, next: NextFunction) => {
  const access_token = req.cookies.authorization;
  const result = jwtUtil.accessVerify(access_token);
  if (result.ok) {
    req.decodedId = result.id;
  } else {
    req.decodedId = undefined;
  }
  next();
};