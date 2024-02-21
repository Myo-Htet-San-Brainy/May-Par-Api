const { run } = require("../ai/ai");
const aiAnswer = require("../models/aiAnswerModel");

const getAiAnswers = async (req, res) => {
  const aiAnswers = await aiAnswer.find({});
  res.status(200).json({ data: aiAnswers });
};

const createAiAnswer = async (req, res) => {
  const { question, language, email } = req.body;
  const answer = await run(question, language);
  // res.status(200).json({ question, answer });
  await aiAnswer.create({ question, answer, email });
  res.status(201).send("success");
};

module.exports = {
  getAiAnswers,
  createAiAnswer,
};
