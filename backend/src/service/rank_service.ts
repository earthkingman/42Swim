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
        return await redisClient.zrevrange('total_rank', 0, range-1, 'withscores', (err, result) => {
            if (err) console.log(err);
            console.log(result);
            return result;
        })
    }

    async getMonthRanker(range: number) {
        const temp = await redisClient.zrevrange('month_rank', 0, range-1, 'withscores');
        console.log("no callback : ",temp);
    }

    async getTotalRankerInfo(range: number){
        const totalRanker = await this.getTotalRanker(range);
        console.log("total : ", totalRanker);
        const totalRankerInfo = [];
        for (let i = 0; i < range ; i++){
            const id = Number(totalRanker[i*2]);
            const photo = await this.getUserProfile(id);
            const nickname = await this.getUserName(id);
            const ranker = {
                id: id,
                score: totalRanker[i*2+1],
                photo: photo,
                nickname: nickname
            };
            totalRankerInfo.push(ranker);
        }
        console.log("total : ", totalRankerInfo);
        return totalRankerInfo;
    }

    async getMonthRankerInfo(range: number){
        const monthRanker = await this.getMonthRanker(range);
        console.log("month : ", monthRanker);

        const monthRankerInfo = [];
        for (let i = 0; i < range; i++){
            const id = Number(monthRanker[i*2]);
            const photo = await this.getUserProfile(id);
            const nickname = await this.getUserName(id);
            const ranker = {
                id: id,
                score: monthRanker[i*2+1],
                photo: photo,
                nickname: nickname
            };
            monthRankerInfo.push(ranker);
        }
        console.log('month : ',monthRankerInfo);
        return monthRankerInfo;
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

    async setUserProfile(userId:number, profile:string){
        redisClient.set(String(userId) + "profile", profile, (err, result) => {
            if (err) console.log(err);
            console.log(result);
        })
    }

    async setUserName(userId:number, name:string){
        redisClient.set(String(userId) + "name", name, (err, result) => {
            if (err) console.log(err);
            console.log(result);
        })
    }

    async getUserProfile(userId:number){
        redisClient.get(String(userId) + "profile", (err, result) => {
            if (err) console.log(err);
            console.log(result);
            return result;
        })
    }

    async getUserName(userId:number){
        redisClient.get(String(userId) + "name", (err, result) => {
            if (err) console.log(err);
            console.log(result);
            return result;
        })
    }
}