const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const aiAnswerRouter = require("../router/aiAnswerRouter");

const app = express();

//middleware
const allowedOrigins = ["https://maypar.netlify.app", "http://localhost:5173"];
app.use(
  cors({
    origin: allowedOrigins,
  })
);
app.use(morgan("tiny"));
app.use(express.json());

app.use("/api/v1/aiAnswers", aiAnswerRouter);

module.exports = app;
