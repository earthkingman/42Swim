import { HttpException } from "./http_exception";

export class AnswerBadRequestException extends HttpException {
    constructor(id: string) {
        super(400, `해당 답변글에 대한 잘못된 요청입니다. Answer ${id} bad request.`);
    }
}

export class AnswerForbiddenException extends HttpException {
    constructor(id: string) {
        super(403, `해당 답변글에 대한 권한이 없습니다. Answer ${id} forbidden.`);
    }
}

export class AnswerNotFoundException extends HttpException {
    constructor(id: string) {
        super(404, `해당 답변글을 찾을 수 없습니다. Answer ${id} not found.`);
    }
}