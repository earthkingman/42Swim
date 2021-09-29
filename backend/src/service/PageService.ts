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

/**
 *
 * @param questionId
 */
const getQuestionDetailPage = async (questionId) => {
	const queryRunner = await getQueryRunner();
	const queryBuilder = queryRunner.manager
		.getRepository(Question)
		.createQueryBuilder('question')
		.where('question.id = :questionId', { questionId })
		.innerJoinAndSelect('question.user', 'user')
		.innerJoinAndSelect('question.hashTag', 'hashTag')
		.leftJoinAndSelect('question.comment', 'comment')
	const questionInfo = await queryBuilder
		.disableEscaping()
		.getMany();
	const queryBuilder2 = queryRunner.manager
		.getRepository(Answer)
		.createQueryBuilder('answer')
		.where('answer.questionId = :questionId', { questionId })
		.innerJoinAndSelect('answer.user', 'user')
		.leftJoinAndSelect('answer.comment', 'comment')
	const answerInfo = await queryBuilder2
		.disableEscaping()
		.getMany();
	return {
		questionInfo: questionInfo,
		answerInfo: answerInfo
	}
}


/**
 *
 * @param pageInfo
 */
const getQuestionListPage = async (pageInfo) => {
	console.log(pageInfo);
	const queryRunner = await getQueryRunner();
	const queryBuilder = queryRunner.manager
		.getRepository(Question)
		.createQueryBuilder('question')
		.innerJoinAndSelect('question.user', 'user')
		.innerJoinAndSelect('question.hashTag', 'hashTag')
		.orderBy('question.id', 'DESC')
		.limit(pageInfo.limit)
		.offset(pageInfo.offset);
	return queryBuilder
		.disableEscaping()
		.getMany();
}

export const PageService = { getQuestionDetailPage, getQuestionListPage };