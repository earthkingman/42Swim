import express from "express";
import { RankController } from "../controllers/rank";

export const rankRouter = express.Router();

rankRouter.patch('/month/resetting', RankController.resetMonthRanking);
