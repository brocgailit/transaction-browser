import { Router } from 'express';
import { getAccountById, getAccounts, getAccountTransactions } from '../controllers/accounts.controller';

const router = Router();

router.get('/', getAccounts);
router.get('/:id', getAccountById);
router.get('/:id/transactions', getAccountTransactions);

export { router };