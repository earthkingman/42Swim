import { Request ,Response, NextFunction } from 'express';

import { RankService } from '../service/rank_service';

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

export const RankController = { getRanking };