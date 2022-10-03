import express, { Express, Request, Response, ErrorRequestHandler } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { router as categories } from './routes/categories';
import { router as accounts } from './routes/accounts';

dotenv.config();

const app: Express = express();

app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.json({
    success: true
  });
});

app.use('/categories', categories)
app.use('/accounts', accounts)

export { app }