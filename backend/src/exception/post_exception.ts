import { HttpException } from "./http_exception";

export class PostBadRequestException extends HttpException {
    constructor(id: string) {
        super(400, `해당 게시글에 대한 잘못된 요청입니다. Post ${id} bad request.`);
    }
}

export class PostForbiddenException extends HttpException {
    constructor(id: string) {
        super(403, `해당 게시글에 대한 권한이 없습니다. Post ${id} forbidden.`);
    }
}

export class PostNotFoundException extends HttpException {
    constructor(id: string) {
        super(404, `해당 게시글을 찾을 수 없습니다. Post ${id} not found.`);
    }
}