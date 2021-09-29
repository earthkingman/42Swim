import { v4 as uuid } from 'uuid';
import { redisClient } from "../lib/redis";

const viewsChecking = async (req, res, next) => {
    const { questionId } = req.body;
    const guestToken = req.headers['guest-token']

    //게스트 토큰이 있을때,
    if (guestToken) {
        redisClient.sadd('animal', guestToken);
        console.log('--2---')
    } else {
        const id = uuid();
        redisClient.sadd('animal', id);
        req.guestToken = id;
    }
    redisClient.smembers('animal', (err, set) => {
        console.log(set); // ['cat', 'dog', 'bear', 'lion']
    });
    // redisClient.sadd('animals', 'dog');
    // redisClient.smembers('animals', (err, set) => {
    //     console.log(set); // ['cat', 'dog', 'bear', 'lion']
    // });
    next();
}

export default viewsChecking;
