require("dotenv").config();
const app = require("./utils/createServer");

//imports
const cors = require("cors");
const morgan = require("morgan");

//middleware
const allowedOrigins = ["https://maypar.netlify.app", "http://localhost:5173"];
app.use(cors(allowedOrigins));
app.use(morgan("tiny"));

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
