import express, { Express, Request, Response, ErrorRequestHandler } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { router } from './routes/api';

dotenv.config();

const app: Express = express();

app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.json({
    success: true
  });
});

app.use('/api', router)

export { app }