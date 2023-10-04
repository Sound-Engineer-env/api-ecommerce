import express from 'express';

let userRoute = require("./userRoute")

const app = express();

app.use(express.json());
app.use("/users", userRoute);


module.exports = app;