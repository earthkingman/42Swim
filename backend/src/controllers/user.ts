import dotenv from "dotenv";
import { Request, Response, NextFunction } from 'express';
dotenv.config();
import User from "../entity/User";

const userInfo = async (req, res, next) => {
    const { id } = req.decodedId
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

const userUpdate = async (req, res, next) => {
    const id = req.decodedId;
    try {
        const exUser = await User.findOne({ where: { id } });
        if (exUser) {
            //TO DO: ㅕ
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
    userInfo: userInfo
}