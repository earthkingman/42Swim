// const passport = require('passport');
const local = require('./localStrategy');
const FourtyTwo = require('./fourtyTwoStrategy');
const User = require('../entity/user');

module.exports = ()=>{
    local();
    FourtyTwo();
}