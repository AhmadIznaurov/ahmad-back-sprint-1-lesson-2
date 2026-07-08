import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import {ValidationErrorResponse} from "../../types/validation-error";
import {HttpStatus} from "../../types/http-statuses";


export const inputValidationResult = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const result = validationResult(req);

    if(!result.isEmpty()) {
        const uniqueErrors = result.array({ onlyFirstError: true });

        const formatted: ValidationErrorResponse['errorsMessages'] = uniqueErrors.map(err => ({
            message: err.msg,
            field: err.param
        }));

        return res.status(HttpStatus.BAD_REQUEST).json({
            errorsMessages: formatted
        });
    }
    next();
};