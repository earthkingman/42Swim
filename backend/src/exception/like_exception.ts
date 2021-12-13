import { HttpException } from "./http_exception";

export class LikeBadRequestException extends HttpException {
    constructor(msg: string) {
        super(400, `해당 좋아요에 대한 잘못된 요청입니다. ${msg}`);
    }
}

export class LikeForbiddenException extends HttpException {
    constructor(msg: string) {
        super(403, `해당 좋아요에 대한 권한이 없습니다. ${msg}`);
    }
}

export class LikeNotFoundException extends HttpException {
    constructor(msg: string) {
        super(404, `해당 좋아요를 찾을 수 없습니다. ${msg}`);
    }
}

export class HateException extends HttpException {
    constructor() {
        super(400, `유저의 점수가 0점이라 싫어요가 불가능합니다.`);
    }
}
