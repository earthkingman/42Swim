import { EntityRepository, Repository } from "typeorm";
import Post from "../entity/Post"

@EntityRepository()
export default class UserRepository extends Repository<Post> {

	findById(id: number) {
		return this.createQueryBuilder("post")
			.where("post.id = :id", { id })
			.getOne();
	}

	findByUser(userid: string) {
		return this.createQueryBuilder("post")
			.where("post.userid = :userid", { userid })
			.getMany();
	}

	findByTitle(title: string) {
		return this.createQueryBuilder("post")
			.where("user.title = :title", { title })
			.getMany();
	}
}