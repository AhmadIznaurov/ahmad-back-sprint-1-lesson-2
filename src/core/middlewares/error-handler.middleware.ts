import { Request, Response, NextFunction } from 'express';
import { HttpStatus } from '../../core/types/http-statuses';

export function errorHandler(_err: unknown, _req: Request, res: Response, _next: NextFunction) {
    console.error(_err);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
}