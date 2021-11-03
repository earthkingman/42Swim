import express from "express";
import { HashTagController } from "../controllers/hashtag";

export const hashTagRouter = express.Router();

hashTagRouter.get('/list', HashTagController.getAllHashTagList);
hashTagRouter.get('/questions', HashTagController.getQuestionByHashTag);