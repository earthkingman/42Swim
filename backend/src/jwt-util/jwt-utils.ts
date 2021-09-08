require("dotenv").config();
const jwt = require('jsonwebtoken');
const util = require('util');
const redis_Client = require('../lib/redis');
const secret = process.env.TOKEN_SECRET_KEY;


module.exports = {
    accessSign : (user) => {
        const payload = {
            id: user.id,
        }
        return jwt.sign(payload, secret, {
            expiresIn: '5m'
        });
    },
    accessVerify : (access_token)=>{
        // access token이 null 인 경우를 생각해야하나?
        let decoded = null;
        try{
            decoded = jwt.verify(access_token, secret);
            return {
                ok: true,
                id:decoded.id
            }
        }catch(error){
            return{
                ok:false,
                message: error.message
            };
        }
    },
    refresh_sign: ()=>{
        return jwt.sign({}, secret, {
            expiresIn:'14d'
        });
    },
    refreshVerify : async (refresh_token, userId)=>{
        const getAsync = util.promisify(redis_Client.get).bind(redis_Client);
        try {
            const data = await getAsync(userId);
            if (refresh_token === data){   //레디스에 저장된 토큰과 비교
                try {
                    jwt.verify(refresh_token, secret);
                    return true;
                }catch(err){
                    console.log(err.message);
                    return false;
                }
            }
            else{
                return false;
            }
        }
        catch(error){
            console.log(error.message);
            return false;
        }
    }
}
export {};