import express from 'express';
import { router } from './routes/trekRoutes';

const app = express();

app.use(router);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
