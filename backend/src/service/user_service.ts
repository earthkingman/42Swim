import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

import { getConnection, QueryRunner, Repository } from "typeorm";

import { User } from "../entity/user";

export class UserService {
	private userRepository: Repository<User>;

	constructor() {
		this.userRepository = getConnection().getRepository(User);
	}

	async findUserByEmail(email: string) {
		const user = await this.userRepository
			.findOne({ where: { email: email } });
		return user;
	}

	async findUserById(id: number) {
		const user = await this.userRepository
			.findOne({ where: { id: id } });
		return user;
	}

	async updateUserPassword(id: number, curPassword: string, newPassword: string) {
		const user = await this.userRepository
			.findOne({ where: { id: id } });
		if (user === undefined) {
			throw new Error('존재하지 않는 유저입니다');
		}
		const result = await bcrypt.compare(curPassword, user.password);
		if (result) {
			user.password = newPassword || user.password;
			const newUser = await this.userRepository.save(user);
		}
		else {
			throw new Error('비밀번호가 일치하지 않습니다.')
		}

	}

	async updateUserPhoto(id: number, userPhoto: string) {
		const photo: string = userPhoto;
		const user = await this.userRepository
			.findOne({ where: { id: id } })
		if (user === undefined) {
			throw new Error('존재하지 않는 유저입니다');
		}
		user.photo = photo || user.photo;
		const newUser = await this.userRepository.save(user);
		return newUser;
	}

	async deleteUserPhoto(id: number) {
		const user = await this.userRepository
			.findOne({ where: { id: id } })
		if (user === undefined) {
			throw new Error('존재하지 않는 유저입니다');
		}
		user.photo = "";
		const newUser = await this.userRepository.save(user);
		return newUser;
	}

	async updateUserNickname(id: number, userNickname: string) {
		const nickName: string = userNickname;
		const user = await this.userRepository
			.findOne({ where: { id: id } })
		if (user === undefined) {
			throw new Error('존재하지 않는 유저입니다');
		}
		user.nickname = nickName || user.nickname;
		const newUser = await this.userRepository.save(user);
		return newUser;
	}

	async updateUserEmail(id: number, email: string) {
		const user = await this.userRepository
			.findOne({ where: { id: id } })
		if (user === undefined) {
			throw new Error('존재하지 않는 유저입니다');
		}
		user.email = email || user.email;
		await this.userRepository.save(user);
	}

	async createUser(createUserInfo) {
		const { email } = createUserInfo;
		const user = await this.userRepository
			.findOne({ where: { email: email } });
		if (user) {
			return { exUser: user, newUser: undefined };
		}
		const newUser = await this.userRepository.save(createUserInfo);
		return { exUser: undefined, newUser: newUser };
	}
}
