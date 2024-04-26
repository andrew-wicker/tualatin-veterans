import * as dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from 'express';
import apiRouter from './routes/api';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello, world!');
// });

app.use('/api/', apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
