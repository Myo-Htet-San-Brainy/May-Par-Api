const { GoogleGenerativeAI } = require("@google/generative-ai");
const history = require("./history");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_APIKEY);

async function run(question) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const chat = model.startChat({
    history: history,
    generationConfig: {
      maxOutputTokens: 100,
    },
  });
  console.log(question);
  const result = await chat.sendMessage(question);
  const response = await result.response;
  const text = response.text();
  return text;
}

module.exports = { run };
