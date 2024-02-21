const { GoogleGenerativeAI } = require("@google/generative-ai");
const history = require("./history");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_APIKEY);

// For text-only input, use the gemini-pro model
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const chat = model.startChat({
  history: history,
  generationConfig: {
    maxOutputTokens: 100,
  },
});

async function run(question, language) {
  const msg = `${question}. Answer me in ${language} language.`;
  console.log(msg);

  const result = await chat.sendMessage(msg);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  return text;
}

module.exports = { run, chat };
