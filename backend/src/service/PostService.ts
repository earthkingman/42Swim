import { getConnection } from "typeorm";
import Photo from "../entity/Photo";
import Post from "../entity/Post";
import User from "../entity/User";

const getQueryRunner = async () => {
	const connection = getConnection();
	const queryRunner = connection.createQueryRunner();
	await queryRunner.connect();
	return queryRunner;
}

const uploadPost = async (uploadPostInfo) => {
	const queryRunner = await getQueryRunner();
	const userRepository = queryRunner.manager.getRepository(User);
	const postRepository = queryRunner.manager.getRepository(Post);
	const photoRepository = queryRunner.manager.getRepository(Photo);
	const { email, title, text, photos, userId } = uploadPostInfo;

	const user = await userRepository
		.findOne({ where: { id: userId } });
	if (user === undefined) {
		throw new Error('존재하지 않는 사용자입니다');
	}
	const postInfo = { email, title, text, user };

	await queryRunner.startTransaction();
	try {
		const post = await postRepository.save(postInfo);
		await Promise.all(photos.map(async (photo) => {
			await photoRepository.save({ photo, post });
		}));
		await queryRunner.commitTransaction();
	} catch (error) {
		console.error(error);
		await queryRunner.rollbackTransaction();
		throw error;
	} finally {
		await queryRunner.release();
	}
}

const updatePost = async (updatePostInfo) => {
	const queryRunner = await getQueryRunner();
	const postRepository = queryRunner.manager.getRepository(Post);
	const photoRepository = queryRunner.manager.getRepository(Photo);
	const { title, text, photos, postId } = updatePostInfo;

	const post = await postRepository
		.findOne({ where: { id: postId } });
	if (post === undefined) {
		throw new Error('존재하지 않는 포스트입니다');
	}
	await queryRunner.startTransaction();
	try {
		await photoRepository.delete({ post: post });
		post.title = title || post.title;
		post.text = text || post.text;
		await postRepository.save(post);
		await Promise.all(photos.map(async (photo) => {
			await photoRepository.save({ photo, post });
		}));
		await queryRunner.commitTransaction();
	} catch (error) {
		console.error(error);
		await queryRunner.rollbackTransaction();
		throw error;
	} finally {
		await queryRunner.release();
	}
}

const deletePost = async (deletePostInfo) => {
	const queryRunner = await getQueryRunner();
	const postRepository = queryRunner.manager.getRepository(Post);

	const { postId } = deletePostInfo;
	const post = await postRepository
		.findOne({ where: { id: postId } });
	if (post === undefined) {
		throw new Error('존재하지 않는 포스트입니다');
	}
	await queryRunner.startTransaction();
	try {
		await postRepository.remove(post);
		await queryRunner.commitTransaction();
	} catch (error) {
		console.error(error);
		await queryRunner.rollbackTransaction();
		throw error;
	} finally {
		await queryRunner.release();
	}
}

const findPhotoByPostId = async (postId) => {
	const queryRunner = await getQueryRunner();
	const postRepository = queryRunner.manager.getRepository(Post);
	const photoRepository = queryRunner.manager.getRepository(Photo);

	const post = await postRepository
		.findOne({ where: { id: postId } });
	if (post === undefined) {
		throw new Error('존재하지 않는 포스트입니다');
	}
	const photos = await photoRepository
		.find({ where: { post: post } });
	return photos;
}

export const PostService = { uploadPost, updatePost, deletePost, findPhotoByPostId };