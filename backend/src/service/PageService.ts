import { getConnection, QueryRunner } from "typeorm";
import Answer from "../entity/Answer";
import Comment from "../entity/Comment";
import Question from "../entity/Question";

const getQueryRunner = async () => {
	const connection = getConnection();
	const queryRunner: QueryRunner = connection.createQueryRunner();
	await queryRunner.connect();
	return queryRunner;
}

const getQuestionPageDataByQuestionId = async (questionId) => {
	const queryRunner: QueryRunner = await getQueryRunner();
	const questionRepository = queryRunner.manager.getRepository(Question);
	const answerRepository = queryRunner.manager.getRepository(Answer);
	const commentRepository = queryRunner.manager.getRepository(Comment);

	// const question = await questionRepository
	// 	.findOne({ where: { id: questionId } });
	// if (question === undefined) throw new Error("undefined question");
	// const answers = await answerRepository
	// 	.find({ where: { question: question } });
	// const comments = await commentRepository
	// 	.find({ where: { question: question } });
	// return { question, answers, comments };

	const question = await questionRepository
		.findOne({ where: { id: questionId } });
	// question 에 유저 닉네임 정보도 함께 담아서 보내는 코드 구현 필요

	if (question === undefined) throw new Error("undefined question");
	const questionComments = await commentRepository
		.find({ where: { question: question } });
	const questionInfo = { question, questionComments };

	const answerList = await answerRepository
		.find({ where: { question: question } });
	// answer에 유저 닉네임 정보도 함께 담아서 보내는 코드 구현 필요

	const size = answerList.length;
	const answerInfoList = [];
	for (let i = 0; i < size; i++) {
		const curCommentList = await commentRepository
			.find({ where: { answer: answerList[i] } });
		// 커멘트에 유저 닉네임 정보도 함께 담아서 보내는 코드 구현 필요
		const answerInfo = { answer: answerList[i], answerComments: curCommentList };
		answerInfoList.push(answerInfo);
	}
	const pageInfo = { questionInfo, answerInfoList };
	return pageInfo;
}

export const PageService = { getQuestionPageDataByQuestionId };