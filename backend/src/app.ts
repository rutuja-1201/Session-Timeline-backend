import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import sessionRoutes from './routes/sessionRoutes';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', sessionRoutes);

export default app;
