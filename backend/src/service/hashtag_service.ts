import { getConnection, QueryRunner, Repository } from "typeorm";

import { Question } from "../entity/question";
import { QuestionLike } from "../entity/question_like";
import { User } from "../entity/user";
import { Answer } from "../entity/answer";
import { AnswerLike } from "../entity/answer_like";

export class HashtagService {
    private queryRunner: QueryRunner;

    constructor() {
        this.queryRunner = getConnection().createQueryRunner();
    }
}