const express = require('express');
const passport = require('passport');
const authicate_JWT = require('../middlewares/authJWT');
const UserController = require('../controllers/user')
const router = express.Router();

router.post('/login',UserController.login);

router.post('/signup',UserController.signup)

router.get('/42login', passport.authenticate('42', { session: false }));

router.get('/authResult',UserController.FourtyTowLogin);

router.get('/jwt',authicate_JWT, (req,res)=>{
  res.json(123);
})

module.exports = router;