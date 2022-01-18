import { Response } from 'express';
import util from "util";

import { jwtUtil } from './jwt_utils';
import { redisClient } from '../lib/redis';
import { DecodedRequest } from '../definition/decoded_jwt';

import { UnauthorizedException } from '../exception/auth_exception'

export const refresh = async (req: DecodedRequest, res: Response) => {
  const refresh_token = req.cookies.refresh;
  const guestId = req.cookies.guestId;
  if (refresh_token && guestId) {
    const getAsync = util.promisify(redisClient.get).bind(redisClient);
    const userId = await getAsync(guestId);
    const refreshResult = await jwtUtil.refreshVerify(refresh_token, userId);

    //refresh token 만료됬을 경우
    if (refreshResult === false) {
      res.clearCookie('authorization')
      res.clearCookie('refresh')
      res.clearCookie('guestId')
      throw new UnauthorizedException("refresh token is expired.");
    }
    // refresh token은 만료되지 않은 경우
    else {
      const newAccesToken = jwtUtil.accessSign(userId);
      res.cookie("authorization", newAccesToken, {
        maxAge: 60000 * 30,
        httpOnly: true,
      });
      return userId;
    }
  }
  // guest id 또는 refresh token이 헤더에 없는 경우
  else {
    throw new UnauthorizedException("로그인이 필요합니다.");
  }
};
