import { redisClient } from "../lib/redis";

export class RankService {
    async setRank(userId:number) {
        redisClient.zadd('total_rank', 0, String(userId), (err, result) => {
            if (err) console.log(err);
            console.log(result);
        })

        redisClient.zadd('month_rank', 0, String(userId), (err, result) => {
            if (err) console.log(err);
            console.log(result);
        })
    }
	
    async updateRank(userId:number, score:number) {
        redisClient.zincrby('total_rank', score, String(userId), (err, result) => {
            if (err) console.log(err);
            console.log(result);
        })
    
        redisClient.zincrby('month_rank', score, String(userId), (err, result) => {
            if (err) console.log(err);
            console.log(result);
        })
    }

    async getTotalRanker(range: number) {
        redisClient.zrevrange('total_rank', 0, range-1, 'withscores', (err, result) => {
            if (err) console.log(err);
            console.log(result);
            return result;
        })
    }

    async getMonthRanker(range: number) {
        redisClient.zrevrange('month_rank', 0, range-1, 'withscores', (err, result) => {
            if (err) console.log(err);
            console.log(result);
            return result;
        })
    }

    async getUserTotalRank(userId:number){
        redisClient.zrank('total_rank', String(userId), (err, result)=> {
            if (err) console.log(err);
            console.log(result);
            return result;
        })
    }

    async getUserMonthRank(userId:number){
        redisClient.zrank('month_rank', String(userId), (err, result)=> {
            if (err) console.log(err);
            console.log(result);
            return result;
        })
    }
}