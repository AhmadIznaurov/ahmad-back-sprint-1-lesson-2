import { Router } from 'express';
import { body, param } from 'express-validator';
import { basicAuthMiddleware } from '../../auth/middlewares/basic-auth.guard.middleware';
import { inputValidationResult } from '../../core/middlewares/validation/input-validation-result.middleware';
import {
    createDriverHandler,
    getDriverListHandler,
    getDriverHandler,
    updateDriverHandler,
    deleteDriverHandler
} from '../handlers';

const router = Router();
// Public get method
router.get('/', getDriverListHandler);
router.get('/:id', [
    param.('id').trim().notEmpty().withMessage('id is required'),
    inputValidationResult,
    getDriverHandler
]);

//protect all crud (create, update, delete) with basic auth

router.post('/', basicAuthMiddleware, [
    body('name').trim().withMessage('name is required').isLength({max: 100}).withMessage('name is to long'),
    body('description').optinal().trim().isLength({max: 500}).withMessage('description is too long'),
    body('websiteUrl').trim().isURL({require_protocol: true}).withMessage('website url does not match the template')
        .isLength({max: 1000}).withMessage('website url is too long'),
    inputValidationResult
],
createDriverHandler
);

router.put(
    '/:id',
    basicAuthMiddleware,
    [
        param('id').trim().notEmpty().withMessage('id is required'),
        body('name')
            .optional()
            .trim()
            .notEmpty().withMessage('name is required')
            .isLength({ max: 100 }).withMessage('name is too long'),
        body('description')
            .optional()
            .trim()
            .isLength({ max: 500 }).withMessage('description is too long'),
        body('websiteUrl')
            .optional()
            .trim()
            .isURL({ require_protocol: true }).withMessage('website url does not match the template')
            .isLength({ max: 1000 }).withMessage('website url is too long'),
        inputValidationResult
    ],
    updateDriverHandler
);

router.delete(
    '/:id',
    basicAuthMiddleware,
    [param('id').trim().notEmpty().withMessage('id is required'), inputValidationResult],
    deleteDriverHandler
);

export default router;