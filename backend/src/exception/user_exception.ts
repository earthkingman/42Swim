import { HttpException } from "./http_exception";

export class UserBadRequestException extends HttpException {
    constructor(id: number) {
        super(400, `해당 유저에 대한 잘못된 요청입니다. User ${id} bad request.`);
    }
}

export class UserForbiddenException extends HttpException {
    constructor(id: number) {
        super(403, `해당 유저에 대한 권한이 없습니다. ${id} forbidden.`);
    }
}

export class UserNotFoundException extends HttpException {
    constructor(id: number) {
        super(404, `해당 유저를 찾을 수 없습니다. ${id} not found.`);
    }
}