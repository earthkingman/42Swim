import "reflect-metadata";
import { createConnection } from "typeorm";
import express, { Request, Response } from "express";
import authRouter from "./routes/auth";
import questionRouter from "./routes/question";
import userRouter from "./routes/user";
import cors from "cors";
import passport from "passport";
import passportConfig from "./passport";
import cookieParser from "cookie-parser";
import { commentRouter } from "./routes/comment";
import { answerRouter } from "./routes/answer";

const app = express();
passportConfig();
app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));
app.use("/auth", authRouter);
app.use("/question", questionRouter);
app.use("/user", userRouter);
app.use("/comment", commentRouter);
app.use("/answer", answerRouter);

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
