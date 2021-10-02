import jwt_uilts from "../jwt-util/jwt-utils";
import { Response, NextFunction } from "express"
import { DecodedRequest } from "../definition/decodedJWT";
const accessVerify = jwt_uilts.accessVerify;

const authJWT = (req: DecodedRequest, res: Response, next: NextFunction) => {
  const access_token = req.cookies.authorization;
  const result = accessVerify(access_token);
  if (result.ok) {
    req.decodedId = result.id;
    next();
  } else {
    res.status(401).json({
      message: result.message,
    });
  }
};
export default authJWT;
