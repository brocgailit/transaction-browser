import type { RequestHandler } from 'express';

export const get: RequestHandler = (_, res, next) => {
    try {
        res.json({success: true});
    } catch(err) {
        console.error(`Error getting`, (err as Error).message);
        next(err);
    }
};
