import "reflect-metadata";
import { createConnection } from "typeorm";
import express, { Request, Response } from "express";
import loginRouter from "./routes/user";
import cors from "cors";
import passport from "passport";
import passportConfig from "./passport";
import cookieParser from "cookie-parser";

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
app.use("/user", loginRouter);

createConnection()
  .then(async () => {
    app.listen(5000, () => {
      console.log("서버 가동");
    });
  })
  .catch((error) => console.log(error));
