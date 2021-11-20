import { HttpException } from "./http_exception";

export class QuestionBadRequestException extends HttpException {
    constructor(id: string) {
        super(400, `해당 질문글에 대한 잘못된 요청입니다. Question ${id} bad request.`);
    }
}

export class QuestionForbiddenException extends HttpException {
    constructor(id: string) {
        super(403, `해당 질문글에 대한 권한이 없습니다. Question ${id} forbidden.`);
    }
}

export class QuestionNotFoundException extends HttpException {
    constructor(id: string) {
        super(404, `해당 질문글을 찾을 수 없습니다. Question ${id} not found.`);
    }
}