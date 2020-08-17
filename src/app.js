import express from 'express';
import cors from 'cors';
import routes from './routes';

import './database';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

console.log('allexin unico fã de one republic vivo');

export default app;
