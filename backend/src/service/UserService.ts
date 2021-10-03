import { getConnection, QueryRunner } from "typeorm";
import Photo from "../entity/Photo";
import Question from "../entity/Question";
import User from "../entity/User";

const getQueryRunner = async () => {
	const connection = getConnection();
	const queryRunner: QueryRunner = connection.createQueryRunner();
	await queryRunner.connect();
	return queryRunner;
}

const findUserByEmail = async (email: string) => {
	const queryRunner: QueryRunner = await getQueryRunner();
	const userRepository = queryRunner.manager.getRepository(User);
	const user = await userRepository
		.findOne({ where: { email: email } });
	return user;
}

const findUserById = async (id: number) => {
	const queryRunner: QueryRunner = await getQueryRunner();
	const userRepository = queryRunner.manager.getRepository(User);
	const user = await userRepository
		.findOne({ where: { id: id } });
	return user;
}

const updateUserPassword = async (id: number, userpassword: string) => {
	const queryRunner = await getQueryRunner();
	const userRepository = queryRunner.manager.getRepository(User);
	const password: string = userpassword;
	const user = await userRepository
		.findOne({ where: { id: id } });
	if (user === undefined) {
		throw new Error('존재하지 않는 유저입니다');
	}
	user.password = password || user.password;
	const newUser = await userRepository.save(user);
	return newUser;
}

const updateUserPhoto = async (id: number, userPhoto: string) => {
	const queryRunner = await getQueryRunner();
	const userRepository = queryRunner.manager.getRepository(User);
	const photo: string = userPhoto;
	const user = await userRepository
		.findOne({ where: { id: id } })
	if (user === undefined) {
		throw new Error('존재하지 않는 유저입니다');
	}
	user.photo = photo || user.photo;
	const newUser = await userRepository.save(user);
	return newUser;
}

const updateUserNickname = async (id: number, userNickname: string) => {
	const queryRunner = await getQueryRunner();
	const userRepository = queryRunner.manager.getRepository(User);
	const nickName: string = userNickname;
	const user = await userRepository
		.findOne({ where: { id: id } })
	if (user === undefined) {
		throw new Error('존재하지 않는 유저입니다');
	}
	user.nickname = nickName || user.nickname;
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
		return { exUser: user, newUser: undefined };
	}
	const newUser = await userRepository.save(createUserInfo);
	return { exUser: undefined, newUser: newUser };
}



export const UserService = {
	createUser,
	updateUserPassword,
	findUserByEmail,
	findUserById,
	updateUserNickname,
	updateUserPhoto
};