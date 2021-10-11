import { HttpException } from "./http_exception";

export class UserNotFoundException extends HttpException {
    constructor(id: string) {
        super(404, `해당 유저를 찾을 수 없습니다 ${id} not found`);
    }
}