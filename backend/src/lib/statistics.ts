import fs from "fs";
import { UserService } from "../service/user_service";
import { RankService } from "../service/rank_service";
import { s3Util } from "../aws/s3_utils"

export const createMonthStatistics = async () => {
    const userService: UserService = new UserService();
    const rankService: RankService = new RankService();
    const now = new Date();
    const endAt = new Date(now);
    const startAt = new Date(now.setMonth(now.getMonth() - 1));	// 한달 전
    const userStatistics = await userService.getUserStatistics(startAt, endAt);
    const userStatisticsResult = await rankService.addRankToUserStatistics(userStatistics);
    const jsonContent = JSON.stringify(userStatisticsResult);
    const fileName = "monthRankerinfo" + endAt.toLocaleDateString() + "json";
    fs.writeFile(fileName, jsonContent, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            throw err;
        }
        console.log("월간 랭킹 저장 완료");
    });
    s3Util.s3FileUpload(fileName, jsonContent);
}

