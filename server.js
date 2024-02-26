require("dotenv").config();
const express = require("express");
const app = express();

//imports
const cors = require("cors");
const morgan = require("morgan");
const aiAnswerRouter = require("./router/aiAnswerRouter");

//middleware
app.use(express.json());
const allowedOrigins = ["https://maypar.netlify.app", "http://localhost:5173"];
app.use(cors(allowedOrigins));
app.use(morgan("tiny"));

//apis
app.use("/api/v1/aiAnswers", aiAnswerRouter);

//start the server
const port = process.env.PORT || 5000;
const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
