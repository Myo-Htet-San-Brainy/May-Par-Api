const request = require("supertest");
const app = require("../utils/createServer");
const ai = require("../ai/ai");

jest.mock("../ai/ai", () => ({
  run: jest.fn(),
}));
describe("aiAnswers", () => {
  describe("Generate aiAnswers", () => {
    describe("Given input(question) provided and suppose run() runs correctly", () => {
      it("should response a 200 and an object with answer property", async () => {
        ai.run.mockReturnValue("some answer text");
        const { statusCode, body } = await request(app)
          .post("/api/v1/aiAnswers")
          .send({ question: "some question text" });

        expect(statusCode).toBe(200);
        expect(ai.run).toHaveBeenCalledWith("some question text");
        expect(body).toEqual({ answer: "some answer text" });
      });
    });

    describe("Given input(question) not provided or input(question) is provided but empty string", () => {
      it("should response a 400 and an object with message saying 'Question must be provided.'", async () => {
        const res = await request(app).post("/api/v1/aiAnswers");
        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual({ message: "Question must be provided." });
      });
    });

    describe("Given run() throws", () => {
      it("should response a 500", async () => {
        ai.run.mockRejectedValue(new Error("mock error"));
        const res = await request(app)
          .post("/api/v1/aiAnswers")
          .send({ question: "some question text" });
        expect(res.statusCode).toBe(500);
        expect(ai.run).toHaveBeenCalledWith("some question text");
      });
    });
  });
});
