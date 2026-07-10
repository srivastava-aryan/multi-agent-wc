import { ChatGoogle } from "@langchain/google";
import dotenv from "dotenv";

dotenv.config();

const model = new ChatGoogle({
  apiKey: process.env.GOOGLE_API_KEY,
  model: "gemini-2.5-flash",
});

export async function callGemini(prompt: string): Promise<string> {
  const response = await model.invoke(prompt);
  return response.content as string;
}