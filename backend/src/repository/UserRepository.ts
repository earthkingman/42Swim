import { EntityRepository, Repository } from "typeorm";
import User from "../entity/User"

@EntityRepository()
export default class UserRepository extends Repository<User> {

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