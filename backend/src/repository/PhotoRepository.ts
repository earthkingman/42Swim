import { EntityRepository, Repository } from "typeorm";
import Photo from "../entity/Photo"

@EntityRepository()
export default class UserRepository extends Repository<Photo> {

	findById(id: number) {
		return this.createQueryBuilder("photo")
			.where("photo.id = :id", { id })
			.getOne();
	}

	findByPost(postid: string) {
		return this.createQueryBuilder("photo")
			.where("photo.postid = :postid", { postid })
			.getMany();
	}
}