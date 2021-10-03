import { getConnection } from "typeorm";
import Question from "../entity/Question";
import HashTag from "../entity/HashTag";

/**
 * 추후 업데이트할 예정
 */
const getQueryRunner = async () => {
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    return queryRunner;
}

