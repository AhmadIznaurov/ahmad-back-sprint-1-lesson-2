import { Router } from 'express';
import { basicAuthMiddleware } from '../../auth/middlewares/basic-auth.guard.middleware';
import { inMemoryDb } from '../../db/in-memory.db';

const router = Router();

router.delete(
    '/all-data',
    basicAuthMiddleware,
    (_req, _res) => {
        inMemoryDb.clearAll();
        _res.sendStatus(204);
    }
);

export default router;