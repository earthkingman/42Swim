import { getConnection, QueryRunner } from "typeorm";
import Photo from "../entity/Photo";
import Post from "../entity/Post";
import User from "../entity/User";

const getQueryRunner = async () => {
	const connection = getConnection();
	const queryRunner: QueryRunner = connection.createQueryRunner();
	await queryRunner.connect();
	return queryRunner;
}

const signup = async (signupUserInfo) => {
	const queryRunner: QueryRunner = await getQueryRunner();
	const userRepository = queryRunner.manager.getRepository(User);
	const { email } = signupUserInfo;
	const user = await userRepository
		.findOne({ where: { email: email } });
	if (user) {
		throw new Error('ID duplicate');
	}
	await userRepository.save(signupUserInfo);
}

const findUserByEmail = async (email) => {
	const queryRunner: QueryRunner = await getQueryRunner();
	const userRepository = queryRunner.manager.getRepository(User);
	const user = await userRepository
		.findOne({ where: { email: email } });
	return user;
}

const updateUser = async (updateUserInfo) => {
	const queryRunner = await getQueryRunner();
	const userRepository = queryRunner.manager.getRepository(User);
	const { id, nickname, password, photo } = updateUserInfo;
	const user = await userRepository
		.findOne({ where: { id: id } });
	if (user === undefined) {
		throw new Error('존재하지 않는 유저입니다');
	}
	user.nickname = nickname || user.nickname;
	user.password = password || user.password;
	user.photo = photo || user.photo;
	const newUser = await userRepository.save(user);
	return newUser;
}

const createUser = async (createUserInfo) => {
	const queryRunner = await getQueryRunner();
	const userRepository = queryRunner.manager.getRepository(User);
	const { email } = createUserInfo;
	const user = await userRepository
		.findOne({ where: { email: email } });
	if (user) {
		throw new Error('email duplicate');
	}
	const newUser = await userRepository.save(createUserInfo);
	return newUser;
}

export const UserService = { signup, createUser, updateUser, findUserByEmail };