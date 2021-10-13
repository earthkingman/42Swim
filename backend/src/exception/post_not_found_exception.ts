import { HttpException } from "./http_exception";

export class PostNotFoundException extends HttpException {
    constructor(id: string) {
        super(404, `해당 게시글을 찾을 수 없습니다 ${id} not found`);
    }
}