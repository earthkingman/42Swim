import { getConnection, QueryRunner, Repository } from "typeorm";
import { HashTag } from "../entity/hashtag";
import { Question } from "../entity/question";

export class HashtagService {
    private hashTagRepository: Repository<HashTag>;
    private questionRepository: Repository<Question>;

    constructor() {
        this.hashTagRepository = getConnection().getRepository(HashTag);
        this.questionRepository = getConnection().getRepository(Question);
    }

    async getAllHashTagList(): Promise<any> {
        const hashtags = await this.hashTagRepository
            .find();
        return hashtags;
    }
    async getQuestionByHashTag(hashTag: string): Promise<any> {
        console.log(hashTag);
        const questions = await this.questionRepository
            .createQueryBuilder('question')
            .innerJoinAndSelect('question.hashtag', 'hashtag')
            .where('hashtag.name = :name', { name: hashTag })
            .getMany();
        return questions;
    }

}