import { HttpException } from "./http_exception";

export class HashtagBadRequestException extends HttpException {
    constructor(id: number) {
        super(400, `해당 해쉬태그에 대한 잘못된 요청입니다. Hashtag ${id} bad request.`);
    }
}

export class HashtagForbiddenException extends HttpException {
    constructor(id: number) {
        super(403, `해당 해쉬태그에 대한 권한이 없습니다. Hashtag ${id} forbidden.`);
    }
}

export class HashtagNotFoundException extends HttpException {
    constructor(id: number) {
        super(404, `해당 해쉬태그를 찾을 수 없습니다. Hashtag ${id} not found.`);
    }
}