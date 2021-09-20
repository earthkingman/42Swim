import { AnyCnameRecord } from "dns";
import dotenv from "dotenv";
import { Response, NextFunction } from 'express';
import { DecodedRequest } from "../definition/definitionfile"
dotenv.config();
import User from "../entity/User";

import { getUserRepository } from "../repository/service";

const userInfo = async (req: DecodedRequest, res: Response, next: NextFunction) => {
    const id: number = req.decodedId
    const userRepository = await getUserRepository();
    try {
        const exUser = await userRepository.findById(id);
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
    const userRepository = await getUserRepository();
    const id = req.decodedId;
    const { nickname, password } = req.body;
    const photo = req.file.key;
    try {
        const exUser = await userRepository.updateUser({ id, nickname, password, photo });
        if (exUser) {
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