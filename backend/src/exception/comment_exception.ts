import { HttpException } from "./http_exception";

export class CommentBadRequestException extends HttpException {
    constructor(id: string) {
        super(400, `해당 댓글에 대한 잘못된 요청입니다. Comment ${id} bad request.`);
    }
}

export class CommentForbiddenException extends HttpException {
    constructor(id: string) {
        super(403, `해당 댓글에 대한 권한이 없습니다. Comment ${id} forbidden.`);
    }
}

export class CommentNotFoundException extends HttpException {
    constructor(id: string) {
        super(404, `해당 댓글을 찾을 수 없습니다. Comment ${id} not found.`);
    }
}