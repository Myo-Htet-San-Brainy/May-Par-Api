const express = require("express");
const router = express.Router();

const {
  getAiAnswers,
  createAiAnswer,
} = require("../controller/aiAnswerController");

router.get("/", getAiAnswers);
router.post("/", createAiAnswer);

module.exports = router;
