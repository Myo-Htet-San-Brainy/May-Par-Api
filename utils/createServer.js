const express = require("express");
const app = express();

const aiAnswerRouter = require("../router/aiAnswerRouter");

app.use(express.json());

app.use("/api/v1/aiAnswers", aiAnswerRouter);

module.exports = app;
