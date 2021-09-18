import { AnyCnameRecord } from "dns";
import dotenv from "dotenv";
import { Response, NextFunction } from 'express';
import { DecodedRequest } from "../definition/definitionfile"
dotenv.config();
import User from "../entity/User";

const userInfo = async (req: DecodedRequest, res: Response, next: NextFunction) => {
    const id: number = req.decodedId
    try {
        const exUser = await User.findOne({ where: { id } });
        if (exUser) {
            res.status(200).json({
                result: true,
                data: {
                    email: exUser.email,
                    nickname: exUser.nickname,
                    image: exUser.photo
                }
            })
        }
        else {
            res.status(400).json({
                result: false,
                message: "No such information"
            })
        }
    } catch (error) {
        res.status(500).json({
            result: false,
            message: `An error occurred (${error.message})`
        })
    }
}

const userUpdate = async (req: any, res: Response, next: NextFunction) => {
    const id = req.decodedId;
    const { nickname, password } = req.body;
    const photo = req.file.key;
    try {
        const exUser = await User.findOne({ where: { id } });
        if (exUser) {
            console.log(nickname);
            exUser.nickname = nickname || exUser.nickname;
            exUser.password = password || exUser.password;
            exUser.photo = photo || exUser.photo;
            await exUser.save();
            res.json({
                exUser: exUser
            })
        }
        else {
            res.status(400).json({
                result: false,
                message: "No such information"
            })
        }
    } catch (error) {
        res.status(500).json({
            result: false,
            message: `An error occurred (${error.message})`
        })
    }
}

export default {
    userInfo: userInfo,
    userUpdate: userUpdate
}