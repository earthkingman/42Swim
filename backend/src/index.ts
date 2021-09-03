import "reflect-metadata";
import {createConnection} from "typeorm";
import express, { Request, Response } from 'express'
import {User} from "./entity/User";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//CREATE
app.post('/users', async(req : Request, res : Response)=>{
    const {email, password, nickname} = req.body;
    try {
        const user = User.create({email , password,nickname});
        await user.save();
        res.status(200).json(user);
    }
    catch(error){
        console.log(error);
        res.status(500).json(error);
    }
})

app.get('/login', async(req : Request, res : Response)=>{
    try{
        const users = await User.find();
        return res.status(200).json(users);
    }catch(error){
        console.log(error);
        return res.status(500).json(error);
    }
})



createConnection().then(async () => {

app.listen(5000, ()=> {
    console.log("서버 가동");
})

}).catch(error => console.log(error));
