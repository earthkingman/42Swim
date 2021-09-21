import { EntityRepository, Repository } from "typeorm";
import Post from "../entity/Post"

@EntityRepository(Post)
export default class PostRepository extends Repository<Post> {

	async removeById(id: number) {
		const post = await this.findById(id);
		return await this.remove(post);
	}

	async createPost(postInfo: any) {
		const post = await this.create(postInfo);
		return await this.save(post);
	}

	async updateById(postInfo: any) {
		// const id = (Number)(postInfo.postId);
		// console.log(typeof (id))
		const post = await this.findById(postInfo.postId);
		post.title = postInfo.title || post.title;
		post.text = postInfo.text || post.text;
		return await this.save(post);

		// const updateInfo = {};

		// return this.createQueryBuilder('post')
		// 	.update(Post)
		// 	.set({ title: postInfo.title, text: postInfo.text })
		// 	.where("id = :id", { id: postInfo.postId })
		// 	.execute();
	}

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