const mongoose = require("mongoose");

const aiAnswerSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, "Please provide question."],
  },
  answer: {
    type: String,
    required: [true, "Please provide answer"],
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
  },
});

module.exports = mongoose.model("aiAnswer", aiAnswerSchema);
