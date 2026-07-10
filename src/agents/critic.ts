import { callGemini } from "../gemini";

export interface Critique {
  score: number;
  feedback: string;
  approved: boolean;
}

function stripCodeFences(text: string): string {
  return text.replace(/```json\s*|```/g, "").trim();
}

export async function criticAgent(task: string, draft: string): Promise<Critique> {
  const prompt = `Task: ${task}
Draft: ${draft}

Score this draft from 1-10 on how well it fulfills the task. Give specific, actionable feedback for improvement. Be a harsh critic. Set approved to true only if score is 9.5 or higher.

Respond with ONLY valid JSON in this exact shape, no markdown fences, no extra text:
{"score": <number>, "feedback": "<string>", "approved": <boolean>}`;

  const raw = await callGemini(prompt);

  try {
    return JSON.parse(stripCodeFences(raw));
  } catch (err) {
    console.error("Failed to parse critic output:", raw);
    throw new Error("Critic returned invalid JSON");
  }
}