
import { User } from '../entity/User';
const express = require('express');
const jwt = require('../jwt-util/jwt-utils');
const redisClient = require('../lib/redis');
const passport = require('passport');
const router = express.Router();

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (authError, userId, info) => {
    if (authError || !userId) {
      console.log(authError);
      res.status(400).json({ message: info.message });
    }
    const accessToken = jwt.accessSign(userId)
    const refreshToken = jwt.refresh_sign();
    redisClient.set(userId, refreshToken);
    res.cookie('authorization', accessToken, {
      maxAge: 300000,
      httpOnly: true
    });
    res.status(200).json({
      refreshToken: refreshToken
    })
  })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
});

router.post('/signup', async (req, res) => {
  const { nickname, email, password } = req.body;
  console.log(email)
  try {
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
      res.status(400).json({
        result: false,
        message: "이미 계정이 있습니다"
      });
    }
    else {
      const user = User.create({ nickname, email, password });
      await user.save();
      res.status(200).json({
        result: true,
        message: "회원가입 되었습니다."
      })
    }
  }
  catch (error) {
    console.log(error);
    res.status(400).json({
      result: false,
      message: `오류가 발생했습니다 (${error.message})`
    });
  }

})

router.get('/42login', passport.authenticate('42', { session: false }));

// router.get('/authResult',
//     passport.authenticate('42',
//     {failureRedirect: '/login/fail'}),
//     (req, res)=>{
//         res.status(200).json({
//             message : 'Login Success'}
//     )})


router.get('/authResult', (req, res, next) => {
  passport.authenticate('42', (authError, userId, info) => {
    if (authError || !userId) {
      console.log(authError);
      res.status(400).json({ message: info });
    }
    const accessToken = jwt.accessSign(userId.id)
    const refreshToken = jwt.refresh_sign();
    redisClient.set(userId.id, refreshToken);
    res.cookie('authorization', accessToken, {
      maxAge: 300000,
      httpOnly: true
    });
    res.status(200).json({
      refreshToken: refreshToken
    })
  })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
});


module.exports = router;