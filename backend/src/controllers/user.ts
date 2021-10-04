import dotenv from "dotenv";
dotenv.config();

import { Response, NextFunction } from 'express';
import bcrypt from "bcrypt";

import { DecodedRequest } from "../definition/decoded_jwt"
import { UserService } from "../service/user_service";

const userInfo = async (req: DecodedRequest, res: Response, next: NextFunction) => {
    const id: number = req.decodedId
    try {
        const user = await UserService.findUserById(id);
        if (user) {
            res.status(200).json({
                data: {
                    email: user.email,
                    nickname: user.nickname,
                    image: user.photo
                }
            })
        }
        else {
            res.status(400).json({
                message: "User doesn't exist"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: `An error occurred (${error.message})`
        })
    }
}

const updateUserImage = async (req: any, res: Response, next: NextFunction) => {
    const id = req.decodedId;
    const photo = req.file.key;
    try {
        const user = await UserService.updateUserPhoto(id, photo);
        if (user) {
            res.json({
                exUser: user
            })
        }
        else {
            res.status(400).json({
                result: false,
                message: "User doesn't exist"
            })
        }
    } catch (error) {
        res.status(500).json({
            result: false,
            message: `An error occurred (${error.message})`
        })
    }
}

const updateUserPassword = async (req: DecodedRequest, res: Response, next: NextFunction) => {
    const id = req.decodedId;
    const { newpassword } = req.body;
    const encryptedPassword = await bcrypt.hashSync(newpassword, +process.env.SALT_ROUNDS);
    console.log(newpassword, encryptedPassword);
    try {
        const user = await UserService.updateUserPassword(id, encryptedPassword);
        if (user) {
            res.json({
                exUser: user
            })
        }
        else {
            res.status(400).json({
                result: false,
                message: "User doesn't exist"
            })
        }
    } catch (error) {
        res.status(500).json({
            result: false,
            message: `An error occurred (${error.message})`
        })
    }
}

const updateUserNickname = async (req: DecodedRequest, res: Response, next: NextFunction) => {
    const id = req.decodedId;
    const { nickname } = req.body;

    try {
        const user = await UserService.updateUserNickname(id, nickname);
        if (user) {
            res.json({
                exUser: user
            })
        }
        else {
            res.status(400).json({
                result: false,
                message: "User doesn't exist"
            })
        }
    } catch (error) {
        res.status(500).json({
            result: false,
            message: `An error occurred (${error.message})`
        })
    }
}

export const UserController = {
    userInfo,
    updateUserNickname,
    updateUserImage,
    updateUserPassword
}