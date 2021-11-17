import dotenv from "dotenv";
dotenv.config();

import { Request, Response, NextFunction } from 'express';
import passport from "passport";
import bcrypt from "bcrypt";

import { jwtUtil } from "../jwt-util/jwt_utils";
import { redisClient } from "../lib/redis";
import { UserService } from "../service/user_service";

const login = (req: Request, res: Response, next: NextFunction) => {
	passport.authenticate("local", (authError, user, info) => {
		if (authError || user === false) {
			return res.status(400).json({ message: info.message });
		}

		let photo = user.photo;
		if (photo === '') {
			photo = null;
		}
		const userInfo = {
			email: user.email,
			photo: photo,
			nickname: user.nickname
		}
		const accessToken = jwtUtil.accessSign(user);
		const refreshToken = jwtUtil.refreshSign();
		redisClient.set(user.id, refreshToken);
		res.cookie("refresh", refreshToken, {
			maxAge: 60000 * 60 * 24 * 14,
			httpOnly: true,
		});
		res.cookie("authorization", accessToken, {
			maxAge: 60000 * 30,
			httpOnly: true,
		});
		return res.status(200).json({
			userInfo: userInfo,
			message: "Success Login ",
		});
	})(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
};

const logout = (req: Request, res: Response, next: NextFunction) => {
	res.clearCookie('authorization')
	return res.status(200).json({
		message: "logout",
		token: req.cookies.authorization
	});
}

const signup = async (req: any, res: Response) => {
	const { nickname, email, password } = req.body;
	const encryptedPassword = await bcrypt.hashSync(password, +process.env.SALT_ROUNDS);
	const userService: UserService = new UserService();

	try {
		const { exUser, newUser } = await userService.createUser({ email, nickname, password: encryptedPassword, photo: "" });
		if (exUser) {
			return res.status(400).json({
				result: false,
				message: "duplicated email",
			});
		}
		else {
			const userInfo = {
				id: newUser.id,
				email: newUser.email,
				photo: newUser.photo,
				nickname: newUser.nickname
			}
			const accessToken = jwtUtil.accessSign(newUser);
			const refreshToken = jwtUtil.refreshSign();
			res.cookie("refresh", refreshToken, {
				maxAge: 60000 * 60 * 24 * 14,
				httpOnly: true,
			});
			res.cookie("authorization", accessToken, {
				maxAge: 60000 * 30,
				httpOnly: true,
			});
			res.status(200).json({
				result: true,
				message: "signup successful",
			});
		}
	}
	catch (error) {
		console.log(error);
		return res.status(400).json({
			result: false,
			message: `An error occurred (${error.message})`,
		});
	}
};

const FourtyTowLogin = (req: Request, res: Response, next: NextFunction) => {
	//-> 커스텀 콜백
	passport.authenticate("42", (authError, user, info) => {
		if (authError || !user) {
			console.log(authError);
			return res.status(400).json({ message: info });
		}
		let photo = user.photo;
		if (photo === '') {
			photo = null;
		}
		const userInfo = {
			email: user.email,
			photo: photo,
			nickname: user.nickname
		}
		const accessToken = jwtUtil.accessSign(user);
		const refreshToken = jwtUtil.refreshSign();
		redisClient.set(user.id, refreshToken);
		res.cookie("refresh", refreshToken, {
			maxAge: 60000 * 60 * 24 * 14,
			httpOnly: true,
		});
		res.cookie("authorization", accessToken, {
			maxAge: 60000 * 30,
			httpOnly: true,
		});
		// res.status(200).json({
		//   userInfo: userInfo,
		//   refreshToken: refreshToken,
		// });
		// res.redirect('http://3.36.121.236');
		res.redirect('http://localhost:3000');
	})(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
};

export const AuthController = { login, signup, FourtyTowLogin, logout }