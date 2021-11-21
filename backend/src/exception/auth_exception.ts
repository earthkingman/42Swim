import { HttpException } from "./http_exception";

export class UnauthorizedException extends HttpException {
    constructor(msg: string) {
        super(401, `사용자 인증이 필요합니다. ${msg}`);
    }
}