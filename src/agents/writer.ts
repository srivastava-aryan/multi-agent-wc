import { callGemini } from "../gemini";

export async function writerAgent(
  task: string,
  previousDraft?: string,
  feedback?: string,
): Promise<string> {
  const prompt = feedback
    ? `Task: ${task}\nPrevious draft: ${previousDraft}\nFeedback: ${feedback}\nRevise the draft based on the feedback. Return only the revised draft, no preamble.`
    : `Task: ${task}\nWrite a first draft. Return only the draft, no preamble.`;

  return callGemini(prompt);
}
