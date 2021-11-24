import { HttpException } from "./http_exception";

export class DatabaseInternalServerErrorException extends HttpException {
    constructor(msg: string) {
        super(500, `데이터 베이스에서 에러가 발생하였습니다. Database Internal Server Error Exception. message : ${msg}`);
    }
}