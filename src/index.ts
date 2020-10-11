import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { router as trekRouter } from './routes/trekRoutes';
import { PORT } from './config/constants';

dotenv.config();

const app = express();

const DB = process.env.DATABASE!.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD!
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful'));

app.use('/treks', trekRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
