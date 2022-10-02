import type { ErrorRequestHandler } from 'express';
import { app } from './app';

const port = process.env.PORT || 8000;

/* Error handler middleware */
app.use(((err, _, res) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({'message': err.message});
    return;
}) as ErrorRequestHandler);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});