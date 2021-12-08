import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

import { getConnection, Repository } from "typeorm";
import { UserNotFoundException, UserForbiddenException } from "../exception/user_exception";


import { User } from "../entity/user";
import { Question } from "../entity/question";
import { Answer } from "../entity/answer"
import { Comment } from "../entity/comment";

export class UserService {
	private userRepository: Repository<User>;
	private questionRepository: Repository<Question>;
	private answerRepository: Repository<Answer>;
	private commentRepository: Repository<Comment>;

	constructor() {
		this.questionRepository = getConnection().getRepository(Question);
		this.answerRepository = getConnection().getRepository(Answer);
		this.userRepository = getConnection().getRepository(User);
		this.commentRepository = getConnection().getRepository(Comment);
	}

	async getUserProfile(userId: number) {
		const user = await this.userRepository
			.createQueryBuilder('user')
			.innerJoinAndSelect('user.question', 'question')
			.innerJoinAndSelect('user.answer', 'answer')
			.innerJoinAndSelect('user.comment', 'comment')
			.where('user.id = :userId', { userId })
			.getOne();

		const userProfile = {
			user: user,
			questionCount: user.question.length,
			answerCount: user.answer.length,
			commentCount: user.comment.length
		};
		return userProfile;
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
			throw new UserNotFoundException(id);
		}
		const result = await bcrypt.compare(curPassword, user.password);
		if (result) {
			user.password = newPassword || user.password;
			const newUser = await this.userRepository.save(user);
		}
		else {
			throw new UserForbiddenException(id);
		}

	}

	async updateUserPhoto(id: number, userPhoto: string) {
		const photo: string = userPhoto;
		const user = await this.userRepository
			.findOne({ where: { id: id } })
		if (user === undefined) {
			throw new UserNotFoundException(id);
		}
		user.photo = photo || user.photo;
		const newUser = await this.userRepository.save(user);
		return newUser;
	}

	async deleteUserPhoto(id: number) {
		const user = await this.userRepository
			.findOne({ where: { id: id } })
		if (user === undefined) {
			throw new UserNotFoundException(id);
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
			throw new UserNotFoundException(id);
		}
		user.nickname = nickName || user.nickname;
		const newUser = await this.userRepository.save(user);
		return newUser;
	}

	async updateUserEmail(id: number, email: string) {
		const user = await this.userRepository
			.findOne({ where: { id: id } })
		if (user === undefined) {
			throw new UserNotFoundException(id);
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
