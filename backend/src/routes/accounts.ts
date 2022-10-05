import { Router } from 'express';
import { getAccountById, getAccounts, getAccountTotalById, getAccountTransactions } from '../controllers/accounts.controller';

const router = Router();

router.get('/', getAccounts);
router.get('/:id', getAccountById);
router.get('/:id/transactions', getAccountTransactions);
router.get('/:id/total', getAccountTotalById);

export { router };