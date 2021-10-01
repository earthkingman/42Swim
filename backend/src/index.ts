import "reflect-metadata";
import { createConnection } from "typeorm";
import express, { Request, Response } from "express";
import authRouter from "./routes/auth";
import postRouter from "./routes/post";
import userRouter from "./routes/user";
import pageRouter from "./routes/page";
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
app.use("/auth", authRouter);
app.use("/posts", postRouter);
app.use("/users", userRouter);
app.use("/pages", pageRouter);

// app.use((req, res, next) => {
//   const error = new Error(`${req.method} ${req.url} 라우터가 없습니다`);
//   error.status = 404;
//   next(error);
// })

// app.use((err, req, res, next) => {
//   res.locals.message = err.message;
//   res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
//   res.status(err.status || 500);
//   res.render('error');
// });

app.listen(5000, async () => {
  console.log("서버 가동");
  await createConnection();
  console.log("DB 연결");
});
