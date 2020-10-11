import express from 'express';
import { router as trekRouter } from './routes/trekRoutes';
import { PORT } from './config/constants';

const app = express();

app.use('/treks', trekRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
