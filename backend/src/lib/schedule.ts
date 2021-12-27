import schedule from "node-schedule";
import { RankService } from "../service/rank_service";
import { UserService } from "../service/user_service";
import { createMonthStatistics } from "./statistics";

export const monthRankReset = schedule.scheduleJob('00 00 00 01 * *', async function () {
    try {
        const userService: UserService = new UserService();
        const rankService: RankService = new RankService();

        await createMonthStatistics();
        const userList = await userService.getAllUserId();
        await rankService.resetMonthRank(userList);
        console.log("월간 랭킹 초기화 완료");
    }
    catch (error) {
        console.log(error);
        console.log("월간 랭킹 초기화 실패");
    }
});
