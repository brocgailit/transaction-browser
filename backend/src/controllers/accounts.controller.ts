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

export const getAccountById: RequestHandler = (req, res, next) => {
    
    try {
        const { id } = req.params;
        const account = accounts.find(account => account.id === id);

        if (account) {
            res.json(account);
        } else {
            res.status(404).json({message: 'Account not found'});
        }

    } catch(err) {
        console.error(`Error getting`, (err as Error).message);
        next(err);
    }
};