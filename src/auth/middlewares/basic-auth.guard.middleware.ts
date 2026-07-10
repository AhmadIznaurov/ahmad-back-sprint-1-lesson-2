import { Request, Response, NextFunction } from 'express';
import auth from 'basic-auth';

export function basicAuthMiddleware(req: Request, res: Response, next: NextFunction) {
    const credentials = auth(req);
    if (!credentials || credentials.name !== 'admin' || credentials.pass !== 'qwerty') {
        res.setHeader('WWW-Authenticate', 'Basic realm="Access to API"');
        return res.sendStatus(401);
    }
    next();
}