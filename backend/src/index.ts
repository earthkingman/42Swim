import "reflect-metadata";
import {createConnection} from "typeorm";
import express, { Request, Response } from 'express'
const loginRouter = require ("./routes/user")
const cors = require('cors');
const passport = require('passport');
const passportConfig = require("./passport");
const cookieParser = require('cookie-parser');
const app = express();
passportConfig();
app.use(passport.initialize()); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true
}
app.use(cors(corsOptions));
app.use('/user', loginRouter);

createConnection().then(async () => {

app.listen(5000, ()=> {
    console.log("서버 가동");
})

}).catch(error => console.log(error));
