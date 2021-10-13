import { getConnection, QueryRunner, Repository } from "typeorm";

import { Question } from "../entity/question";
import { QuestionLike } from "../entity/question_like";
import { User } from "../entity/user";
import { Answer } from "../entity/answer";
import { AnswerLike } from "../entity/answer_like";

export class HashtagService {
    private queryRunner: QueryRunner;
    private userRepository: Repository<User>;
    private questionRepository: Repository<Question>;
    private answerRepository: Repository<Answer>;
    private questionLikeRepository: Repository<QuestionLike>;
    private answerLikeRepository: Repository<AnswerLike>;

    constructor() {
        this.queryRunner = getConnection().createQueryRunner();
        this.userRepository = this.queryRunner.manager.getRepository(User);
        this.questionRepository = this.queryRunner.manager.getRepository(Question);
        this.answerRepository = this.queryRunner.manager.getRepository(Answer);
        this.questionLikeRepository = this.queryRunner.manager.getRepository(QuestionLike);
        this.answerLikeRepository = this.queryRunner.manager.getRepository(AnswerLike);
    }
}