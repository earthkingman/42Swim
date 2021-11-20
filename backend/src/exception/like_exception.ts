import { HttpException } from "./http_exception";

export class LikeBadRequestException extends HttpException {
    constructor(id: number) {
        super(400, `해당 좋아요에 대한 잘못된 요청입니다. Like ${id} bad request.`);
    }
}

export class LikeForbiddenException extends HttpException {
    constructor(id: number) {
        super(403, `해당 좋아요에 대한 권한이 없습니다. Like ${id} forbidden.`);
    }
}

export class LikeNotFoundException extends HttpException {
    constructor(id: number) {
        super(404, `해당 좋아요를 찾을 수 없습니다. Like ${id} not found.`);
    }
}