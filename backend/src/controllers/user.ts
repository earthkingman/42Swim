import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

import { Response, NextFunction } from 'express';
import { DecodedRequest } from "../definition/decoded_jwt"
import { UserService } from "../service/user_service";

const userInfo = async (req: DecodedRequest, res: Response, next: NextFunction) => {
	const id: number = req.decodedId
	const userService: UserService = new UserService();
	try {
		const user = await userService.findUserById(id);
		let image = null;
		if (user.photo !== "") {
			if (user.photo[0] === 'h') {
				image = user.photo;
			}
			else {
				image = process.env.S3 + user.photo;
			}
		}
		if (user) {
			res.status(200).json({
				email: user.email,
				nickname: user.nickname,
				image: image
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
	const photo = req.file.location;
	const userService: UserService = new UserService();

	try {
		const user = await userService.updateUserPhoto(id, photo);
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

const deleteUserImage = async (req: any, res: Response, next: NextFunction) => {
	const id = req.decodedId;
	const userService: UserService = new UserService();

	try {
		const user = await userService.deleteUserPhoto(id);
		if (user) {
			res.status(200).json({
				result: true
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
	const { curPassword, newPassword } = req.body;
	const encryptedPassword = await bcrypt.hashSync(newPassword, +process.env.SALT_ROUNDS);

	const userService: UserService = new UserService();
	try {
		await userService.updateUserPassword(id, curPassword, encryptedPassword);

		return res.status(200).json({
			result: true,
		})
	} catch (error) {
		return res.status(500).json({
			result: false,
			message: `An error occurred (${error.message})`
		})
	}
}

const updateUserNickname = async (req: DecodedRequest, res: Response, next: NextFunction) => {
	const id = req.decodedId;
	const { nickname } = req.body;
	const userService: UserService = new UserService();

	try {
		const user = await userService.updateUserNickname(id, nickname);
		if (user) {
			res.status(200).json({
				result: true
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

const updateUserEmail = async (req: DecodedRequest, res: Response, next: NextFunction) => {
	const id = req.decodedId;
	const { email } = req.body;
	const userService: UserService = new UserService();

	try {
		await userService.updateUserEmail(id, email);
		return res.status(200).json({
			result: true
		})
	}
	catch (error) {
		return res.status(500).json({
			result: false,
			message: `An error occurred (${error.message})`
		})
	}
}

export const UserController = {
	userInfo,
	updateUserNickname,
	updateUserImage,
	updateUserPassword,
	updateUserEmail,
	deleteUserImage
}
