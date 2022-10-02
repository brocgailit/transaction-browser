import { Router } from 'express';
import { get } from '../controllers/api.controller';

const router = Router();

router.get('/', get);

export { router };