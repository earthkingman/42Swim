// require('dotenv').config();
// // const jwt =require('../jwt-util/jwt-utils')

// const login = (req, res)=>{
//     console.log("login");
//     try {
//         passport.authenticate('local',(passportError, user, info)=>{
//             if (passportError|| !user) {
//                 console.log(passportError);
//                 res.status(400).json({message : info.message});
//             }
//         res.status(200).json("성공");
//         })
//     }catch(error){
//         console.log(error);
//         res.json("로그인 실패")
//     }
// }

// module.exports = {
//     login :login
// }