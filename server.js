require("dotenv").config();
require("express-async-error");
const express = require("express");
const app = express();

//imports
const connectDB = require("./db/connectDb");
const cors = require("cors");
const aiAnswerRouter = require("./router/aiAnswerRouter");
const otherRouter = require("./router/otherRouter");

//middleware
app.use(express.json());
app.use(cors());

//apis
app.use("/api/v1/aiAnswers", aiAnswerRouter);
app.use("/api/v1/others", otherRouter);

//start the server
const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
