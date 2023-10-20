import express from 'express';
import { errorHandler } from '../middleware/errorhandler';
import productRoute from './productRoute';
import userRoute from './userRoute';

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use("/users", userRoute);

app.use("/products", productRoute);

app.use(errorHandler);


module.exports = app;