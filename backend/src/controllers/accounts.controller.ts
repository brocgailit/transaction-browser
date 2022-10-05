import type { RequestHandler } from 'express';
import { accounts, transactions } from '../data/test_data.json';

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

export const getAccountTransactions: RequestHandler = (req, res, next) => {

    try {
        const { id } = req.params;
        const { category } = req.query;

        const account = accounts.find(account => account.id === id);

        if (account) {

            const accountTransactions = transactions.filter(({accountId, category : transactionCategory}) => {
                return [
                    accountId === id,
                    category ? (category as string | string[]).includes(transactionCategory) : true
                ].every(Boolean);
            }).map(transaction => ({
                ...transaction,
                amount: Number(transaction.amount)
            }));

            res.json(accountTransactions || []);
        } else {
            res.status(404).json({message: 'Account not found'});
        }

    } catch(err) {
        console.error(`Error getting`, (err as Error).message);
        next(err);
    }
};
