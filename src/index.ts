import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import driversRouter from './drivers/routers/drivers.router';
import ridesRouter from './rides/routers/rides.router';
import testingRouter from './testing/routers/testing.router';
import { errorHandler } from './core/middlewares/error-handler.middleware';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/ht_02/api/blogs', driversRouter);
app.use('/ht_02/api/posts', ridesRouter);
app.use('/ht_02/api/testing', testingRouter);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
export default app;