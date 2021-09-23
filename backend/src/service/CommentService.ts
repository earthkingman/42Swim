import { getConnection, QueryRunner } from "typeorm";
import Answer from "../entity/Answer";
import Comment from "../entity/Comment";
import Question from "../entity/Question";
import User from "../entity/User";

const getQueryRunner = async () => {
	const connection = getConnection();
	const queryRunner: QueryRunner = connection.createQueryRunner();
	await queryRunner.connect();
	const userRepository = queryRunner.manager.getRepository(User);
	const questionRepository = queryRunner.manager.getRepository(Question);
	const answerRepository = queryRunner.manager.getRepository(Answer);
	const commentRepository = queryRunner.manager.getRepository(Comment);
	return { queryRunner, userRepository, questionRepository, answerRepository, commentRepository };
}

const uploadComment = async (uploadCommentInfo) => {
	const { queryRunner: QueryRunner, userRepository, questionRepository, answerRepository, commentRepository } = await getQueryRunner();
	// const userRepository = queryRunner.manager.getRepository(User);
	// const questionRepository = queryRunner.manager.getRepository(Question);
	// const answerRepository = queryRunner.manager.getRepository(Answer);
	// const commentRepository = queryRunner.manager.getRepository(Comment);
	const { userId, questionId, answerId, text } = uploadCommentInfo;

	const user = await userRepository
		.findOne({ where: { id: userId } });
	if (user === undefined) throw new Error("undefined user");
	const question = await questionRepository
		.findOne({ where: { id: questionId } });
	if (question === undefined) throw new Error("undefined question post");
	if (answerId) {
		const answer = await answerRepository
			.findOne({ where: { id: answerId } });
		if (answer === undefined) throw new Error("Comment that doesn't exist or you don't have edit right");
		await commentRepository.save({ user, question, answer, text });
	}
	else {
		await commentRepository.save({ user, question, text });
	}
}

const updateComment = async (updateCommentInfo) => {
	const { queryRunner: QueryRunner, userRepository, questionRepository, answerRepository, commentRepository } = await getQueryRunner();
	// const queryRunner: QueryRunner = await getQueryRunner();
	// const userRepository = queryRunner.manager.getRepository(User);
	// const commentRepository = queryRunner.manager.getRepository(Comment);
	const { userId, questionId, answerId, commentId, text } = updateCommentInfo;

	const user = await userRepository
		.findOne({ where: { id: userId } });
	if (user === undefined) throw new Error("undefined user");
	const question = await questionRepository
		.findOne({ where: { id: questionId } });
	if (question === undefined) throw new Error("undefined question post");
	if (answerId) {
		const answer = await answerRepository
			.findOne({ where: { id: answerId } });
		if (answer === undefined) throw new Error("undefined answer post");
	}
	const comment = await commentRepository
		.findOne({ where: { id: commentId, user: user } });
	if (comment === undefined) throw new Error("Comment that doesn't exist or you don't have edit right");
	// console.log("user : ", user, " comment.user : ", comment.user)
	// if (user !== comment.user) throw new Error("수정 권한이 없는 댓글입니다.");
	comment.text = text;
	await commentRepository.save(comment);
}

const deleteComment = async (deleteCommentInfo) => {
	const { queryRunner: QueryRunner, userRepository, questionRepository, answerRepository, commentRepository } = await getQueryRunner();
	// const queryRunner: QueryRunner = await getQueryRunner();
	// const userRepository = queryRunner.manager.getRepository(User);
	// const commentRepository = queryRunner.manager.getRepository(Comment);
	const { userId, questionId, answerId, commentId } = deleteCommentInfo;

	const user = await userRepository
		.findOne({ where: { id: userId } });
	if (user === undefined) throw new Error("undefined user");
	const question = await questionRepository
		.findOne({ where: { id: questionId } });
	if (question === undefined) throw new Error("undefined question post");
	if (answerId) {
		const answer = await answerRepository
			.findOne({ where: { id: answerId } });
		if (answer === undefined) throw new Error("undefined answer post");
	}
	const comment = await commentRepository
		.findOne({ where: { id: commentId, user: user } });
	if (comment === undefined) throw new Error("Comment that doesn't exist or you don't have edit right");
	// if (user.id !== comment.user.id) throw new Error("삭제 권한이 없는 댓글입니다.");
	await commentRepository.remove(comment);
}

export const CommentService = { uploadComment, updateComment, deleteComment };