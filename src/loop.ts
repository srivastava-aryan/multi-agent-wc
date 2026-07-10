import { writerAgent } from "./agents/writer";
import { criticAgent, Critique } from "./agents/critic";

export async function runLoop(task: string, maxTurns = 3) {
  let draft: string | undefined;
  let feedback: string | undefined;

  for (let turn = 1; turn <= maxTurns; turn++) {
    draft = await writerAgent(task, draft, feedback);
    const critique: Critique = await criticAgent(task, draft);

    console.log(`\n=== Turn ${turn} ===`);
    console.log("Draft:", draft);
    console.log("Score:", critique.score, "| Approved:", critique.approved);
    console.log("Feedback:", critique.feedback);

    if (critique.approved) {
      console.log(`\nApproved after ${turn} turn(s).`);
      return { draft, turns: turn };
    }

    feedback = critique.feedback;
  }

  console.log(`\nMax turns (${maxTurns}) hit without approval. Returning last draft.`);
  return { draft, turns: maxTurns };
}