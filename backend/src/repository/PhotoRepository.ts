import { EntityRepository, Repository } from "typeorm";
import Photo from "../entity/Photo"
import Post from "../entity/Post";

@EntityRepository(Photo)
export default class PhotoRepository extends Repository<Photo> {

	findById(id: number) {
		return this.createQueryBuilder("photo")
			.where("photo.id = :id", { id })
			.getOne();
	}

	async findByPost(post: Post) {
		return await this.createQueryBuilder("photo")
			.where({ post: post }) // 이 부분 수정 예정
			.getMany();
	}

	async removeByPost(post: Post) {
		// const photos = await this.findByPost(post);
		// photos.map(async (photo) => {
		// 	await this.remove(photo);
		// })
		return await this.delete({ post: post });
	}

	createPhoto(photoInfo: any) {
		const photo = this.create(photoInfo);
		return this.save(photo);
	}
}