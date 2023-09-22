import * as functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import ingredientsRouter from './routes/ingredientsRouter';
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", ingredientsRouter);
export const api = functions.https.onRequest(app);