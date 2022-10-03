import type { RequestHandler } from 'express';
import { accounts } from '../data/test_data.json';

export const getAccounts: RequestHandler = (_, res, next) => {
    try {
        res.json(accounts);
    } catch(err) {
        console.error(`Error getting`, (err as Error).message);
        next(err);
    }
};
