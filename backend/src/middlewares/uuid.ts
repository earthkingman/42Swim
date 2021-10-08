import { v4 as uuid } from 'uuid';

import { redisClient } from "../lib/redis";
import { QuestionService } from "../service/question_service";

export const viewsChecking = async (req, res, next) => {
    const { questionId } = req.body;
    const guestToken = req.headers['guest-token']
    const key = "question" + questionId;
    const countKey = "count" + questionId;
    const questionService = new QuestionService();

    //게시글 조회수가 redis에 저장되어 있는지 확인
    redisClient.get(countKey, async (err, value) => {
        if (err) throw err;
        if (value == undefined) { //DB에서 해당 게시글 조회수 백업
            const viewCount = await questionService.getViewByQuestionId(questionId);
            console.log("viewCount : ", viewCount);
            redisClient.set(countKey, String(viewCount));
        }
    });
    //게스트 토큰이 있을때,
    if (guestToken) {
        redisClient.SISMEMBER(key, guestToken, (err, value) => {
            if (err) throw err;
            if (value == 0) {  //게스트 토큰이 해당 게시글에 등록 안되어 있을 때
                redisClient.incr(countKey); //해당 게시글 조회수 증가
                redisClient.sadd(key, guestToken); //해당 게시글 set에 guestToken 추가
            }
        });
    } else { // 게스트 토큰이 없을때
        const id = uuid();
        redisClient.sadd(key, id);
        redisClient.incr(countKey); // 새로 발급되니깐 무조건 증가
        req.guestToken = id;
    }
    next();
}

/**
    * 출력방법
    *           redisClient.get(countKey, function (err, value) {
                   if (err) throw err;
                   console.log(value);
               });

               redisClient.smembers(key, (err, set) => {
               console.log(set);

               redisClient.scard(key, (err, set) => { // set 데이터 길이
               console.log(set);
   });
   });
    */