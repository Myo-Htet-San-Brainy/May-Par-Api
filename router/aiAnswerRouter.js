const express = require("express");
const router = express.Router();

const { generateAiAnswers } = require("../controller/aiAnswerController");

router.post("/", generateAiAnswers);

module.exports = router;
