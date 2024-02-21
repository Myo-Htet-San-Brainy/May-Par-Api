const sendAIResponseEmail = require("../utils/email");
const { chat } = require("../ai/ai");
const aiAnswer = require("../models/aiAnswerModel");

const sendEmail = async (req, res) => {
  //get data
  const { question, answer, email, _id } = req.body;
  //send email
  await sendAIResponseEmail(email, question, answer);
  //update history
  await chat.sendMessage(answer);
  //delete aiAnswer from collection
  await aiAnswer.findByIdAndDelete(_id);
  res.status(200).send("success");
};

module.exports = { sendEmail };
