import util from "util";

import { redisClient } from "../lib/redis";

export class RankService {
    async setRank(userId: number) {
        redisClient.zadd('total_rank', 0, String(userId), (err, result) => {
            if (err) console.log(err);
        })

        redisClient.zadd('month_rank', 0, String(userId), (err, result) => {
            if (err) console.log(err);
        })
    }

    async resetMonthRank(userList: any) {
        const getAsync = util.promisify(redisClient.zscore).bind(redisClient);
        for (let i = 0; i < userList.length; i++){
            const userMonthScore = await getAsync('month_rank', String(userList[i]));
            redisClient.zincrby('month_rank', userMonthScore*-1, String(userList[i]), (err, result) => {
                if (err) console.log(err);
            })
        }
    }

    async updateRank(userId: number, score: number) {
        redisClient.zincrby('total_rank', score, String(userId), (err, result) => {
            if (err) console.log(err);
        })

        redisClient.zincrby('month_rank', score, String(userId), (err, result) => {
            if (err) console.log(err);
        })
    }

    async getTotalRanker(range: number) {
        const getAsync = util.promisify(redisClient.zrevrange).bind(redisClient);
        const temp = await getAsync('total_rank', 0, range - 1, 'withscores');
        return temp;
    }

    async getMonthRanker(range: number) {
        const getAsync = util.promisify(redisClient.zrevrange).bind(redisClient);
        const temp = await getAsync('month_rank', 0, range - 1, 'withscores');
        return temp;
    }

    async getTotalRankerInfo(range: number) {
        const totalRanker = await this.getTotalRanker(range);
        const totalRankerInfo = [];
        for (let i = 0; i < range; i++) {
            const id = Number(totalRanker[i * 2]);
            const photo = await this.getUserProfile(id);
            const nickname = await this.getUserName(id);
            const ranker = {
                id: id,
                score: totalRanker[i * 2 + 1],
                photo: photo,
                nickname: nickname
            };
            totalRankerInfo.push(ranker);
        }
        return totalRankerInfo;
    }

    async getMonthRankerInfo(range: number) {
        const monthRanker = await this.getMonthRanker(range);
        const monthRankerInfo = [];
        for (let i = 0; i < range; i++) {
            const id = Number(monthRanker[i * 2]);
            const photo = await this.getUserProfile(id);
            const nickname = await this.getUserName(id);
            const ranker = {
                id: id,
                score: monthRanker[i * 2 + 1],
                photo: photo,
                nickname: nickname
            };
            monthRankerInfo.push(ranker);
        }
        return monthRankerInfo;
    }

    async getUserTotalRank(userId: number) {
        const getAsync = util.promisify(redisClient.zrank).bind(redisClient);
        const userTotalRank = await getAsync('total_rank', String(userId));
        return userTotalRank;
    }

    async getUserMonthRank(userId: number) {
        const getAsync = util.promisify(redisClient.zrank).bind(redisClient);
        const userMonthRank = await getAsync('month_rank', String(userId));
        return userMonthRank;
    }

    async getUserTotalScore(userId: number) {
        const getAsync = util.promisify(redisClient.zscore).bind(redisClient);
        const userTotalScore = await getAsync('total_rank', String(userId));
        return userTotalScore;
    }

    async getUserMonthScore(userId: number) {
        const getAsync = util.promisify(redisClient.zscore).bind(redisClient);
        const userTotalScore = await getAsync('month_rank', String(userId));
        return userTotalScore;
    }

    async setUserProfile(userId: number, profile: string) {
        redisClient.set(String(userId) + "profile", profile, (err, result) => {
            if (err) console.log(err);
        })
    }

    async setUserName(userId: number, name: string) {
        redisClient.set(String(userId) + "name", name, (err, result) => {
            if (err) console.log(err);
        })
    }

    async getUserProfile(userId: number) {
        const getAsync = util.promisify(redisClient.get).bind(redisClient);
        const userProfile = await getAsync(String(userId) + "profile");
        return userProfile;
    }

    async getUserName(userId: number) {
        const getAsync = util.promisify(redisClient.get).bind(redisClient);
        const userName = await getAsync(String(userId) + "name");
        return userName;
    }
}