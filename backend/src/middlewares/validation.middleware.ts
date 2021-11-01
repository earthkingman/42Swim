import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import * as express from 'express';
import { HttpException } from '../exception/http_exception';

export function validationMiddleware<T>(type: any, skipMissingProperties = false): express.RequestHandler {
    return (req, res, next) => {
        validate(plainToClass(type, req.body), { skipMissingProperties })
            .then((errors: ValidationError[]) => {
                if (errors.length > 0) {
                    const message = errors.map((error: ValidationError) => {
                        return Object.values(error.constraints)
                    }).join(', ');
                    next(new HttpException(400, message))
                } else
                    next();
            })
    }
}