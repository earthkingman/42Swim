import jwt_uilts from "../jwt-util/jwt-utils";

const accessVerify = jwt_uilts.accessVerify;

const authJWT = (req, res, next) => {
  const access_token = req.cookies.authorization;
  console.log(access_token);
  const result = accessVerify(access_token);
  if (result.ok) {
    req.id = result.id;
    next();
  } else {
    res.status(401).json({
      message: result.message,
    });
  }
};
export default authJWT;
