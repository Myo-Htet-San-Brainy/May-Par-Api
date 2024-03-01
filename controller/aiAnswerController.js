const { run } = require("../ai/ai");

const generateAiAnswers = async (req, res, next) => {
  try {
    const { question } = req.body;
    if (question === undefined || question === "") {
      return res.status(400).json({ message: "Question must be provided." });
    }
    const answer = await run(question);
    res.status(200).json({ answer });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  generateAiAnswers,
};
