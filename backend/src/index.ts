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
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';
import { applicationRouter } from "./routes";

import { insertSeed } from "./entity/seed/seed_data"
import * as Sentry from "@sentry/node";

dotenv.config();

const swaggerSpec = YAML.load(path.join(__dirname, '../build/swagger.yaml'))
const app = express();
if (process.env.NODE_ENV === 'production') {
	Sentry.init({dsn: process.env.SENTRY_DSN});
	app.use(Sentry.Handlers.requestHandler());
}

passportConfig();
app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.get("/debug-sentry", function mainHandler(req, res) {
	throw new Error("My first Sentry error!");
  });
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

const corsOptions = {
	origin: ["http://localhost:3000", "http://3.36.121.236", "http://42sof.justdev.net","https://42sof.justdev.net","https://3.36.121.236"],
	credentials: true,
};
app.use(cors(corsOptions));
app.use(applicationRouter);
if (process.env.NODE_ENV === 'production') {
	app.use(Sentry.Handlers.errorHandler());
}
app.use(errorMiddleware);

app.listen(5000, async () => {
	console.log("서버 가동");
	await createConnection();
	console.log("DB 연결");
	// await insertSeed();
});
