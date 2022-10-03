import { Router } from 'express';
import { getAccountById, getAccounts } from '../controllers/accounts.controller';

const router = Router();

router.get('/', getAccounts);
router.get('/:id', getAccountById);

export { router };