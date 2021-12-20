import { Request ,Response, NextFunction } from 'express';

import { RankService } from '../service/rank_service';
import { UserService } from "../service/user_service";

const getRanking = async (req: Request, res: Response, next: NextFunction) => {
	const rankService: RankService = new RankService();

	try {
		const totalRankerInfo = await rankService.getTotalRankerInfo(10);
		const monthRankerInfo = await rankService.getMonthRankerInfo(10);
		return res.status(200).json({
			totalRankerInfo: totalRankerInfo,
			monthRankerInfo: monthRankerInfo,
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			message: `An error occurred (${error.message})`
		})
	}
}

const resetMonthRanking = async () => {
	const rankService: RankService = new RankService();
	const userService: UserService = new UserService();

	try{
		const userList = await userService.getAllUserId();
		await rankService.resetMonthRank(userList);
		console.log("월간 랭킹 초기화 완료");
	}
	catch (error) {
		console.log(error);
		console.log("월간 랭킹 초기화 실패");
	}
}

export const RankController = { getRanking, resetMonthRanking };