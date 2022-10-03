import type { RequestHandler } from 'express';
import { categories } from '../data/test_data.json';

export const getCategories: RequestHandler = (_, res, next) => {
    try {
        res.json(categories);
    } catch(err) {
        console.error(`Error getting`, (err as Error).message);
        next(err);
    }
};
