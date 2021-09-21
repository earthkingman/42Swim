import { EntityRepository, Repository } from "typeorm";
import User from "../entity/User"

@EntityRepository(User)
export default class UserRepository extends Repository<User> {

	async createUser(userInfo) {
		const user = await this.create(userInfo);
		return await this.save(user);
	}

	async updateUser(userInfo) {
		const user = await this.findById(userInfo.id);
		if (user) {
			user.nickname = userInfo.nickname || user.nickname;
			user.password = userInfo.password || user.password;
			user.photo = userInfo.photo || user.photo;
			return await this.save(user);
		}
		else {
			return undefined;
		}
	}

	findById(id: number) {
		return this.createQueryBuilder("user")
			.where("user.id = :id", { id })
			.getOne();
	}

	findByEmail(email: string) {
		return this.createQueryBuilder("user")
			.where("user.email = :email", { email })
			.getOne();
	}

	findByNickname(nickname: string) {
		return this.createQueryBuilder("user")
			.where("user.nickname = :nickname", { nickname })
			.getMany();
	}

}