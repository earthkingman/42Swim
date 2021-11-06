import { getConnection, QueryRunner, Repository } from "typeorm";
import { HashTag } from "../entity/hashtag";
import { Question } from "../entity/question";

export class HashtagService {
    private hashtagRepository: Repository<HashTag>;
    private questionRepository: Repository<Question>;

    constructor() {
        this.hashtagRepository = getConnection().getRepository(HashTag);
        this.questionRepository = getConnection().getRepository(Question);
    }

    async getAllHashTagList(): Promise<any> {
        const hashtags = await this.hashtagRepository
            .find();
        return hashtags;
    }

    async getQuestionByHashTag(pageInfo): Promise<any> {
        const questionList = await this.questionRepository
            .createQueryBuilder('question')
            .leftJoinAndSelect('question.user', 'question_user')
            .leftJoin('question.hashtag', 'hashtag')
            .where('hashtag.name = :name', { name: pageInfo.hashtag })
            .select(['question.id', 'question.created_at', 'question.is_solved', 'question.like_count', 'question.view_count', 'question.title', 'question.text',
                'question_user.id', 'question_user.created_at', 'question_user.email', 'question_user.nickname', 'question_user.photo',
            ])
            .orderBy('question.id', 'DESC')
            .limit(pageInfo.limit)
            .offset(pageInfo.offset)
            .disableEscaping()
            .getMany()

        for (let i = 0; i < questionList.length; i++) {
            const questionId = questionList[i].id;
            const hashtags = await this.hashtagRepository
                .createQueryBuilder('hashtag')
                .leftJoin('hashtag.question', 'question')
                .where('question.id = :id', { id: questionId })
                .select(['hashtag.id', 'hashtag.name'])
                .getMany();
            questionList[i].hashtag = hashtags;
        }

        const hashtageQuestionCount = await await this.hashtagRepository
            .createQueryBuilder('hashtag')
            .leftJoinAndSelect('hashtag.question', 'question')
            .where('hashtag.name = :name', { name: pageInfo.hashtag })
            .select('COUNT(*) AS count')
            .getRawOne();

        return { questionList, questionCount: hashtageQuestionCount.count };
    }
    async postHashTag(): Promise<any> {

    }

}