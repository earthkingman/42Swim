import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../exception/http_exception'

export function errorMiddleware(error: HttpException, req: Request, res: Response, next: NextFunction) {
    const status = error.status || 500;
    const message = error.message || 'Something went wrong';
    res.status(status)
        .send({
            status,
            message
        })
}

