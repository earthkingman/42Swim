import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import { authRouter } from "./routes/auth";
import { postRouter } from "./routes/post";
import { userRouter } from "./routes/user";
import { pageRouter } from "./routes/page";
import { errorMiddleware } from "./middlewares/error.middleware"
import cors from "cors";
import passport from "passport";
import passportConfig from "./passport";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();
const app = express();
passportConfig();
app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const corsOptions = {
  origin: process.env.CORSORIGIN,
  credentials: true,
};
app.use(cors(corsOptions));
app.use(errorMiddleware);
app.use("/auth", authRouter);
app.use("/posts", postRouter);
app.use("/users", userRouter);
app.use("/pages", pageRouter);



app.listen(5000, async () => {
  console.log("서버 가동");
  await createConnection();
  console.log("DB 연결");
});
