import { writerAgent } from "./agents/writer";
import { criticAgent } from "./agents/critic";

async function main() {
  const task = "Write a 3-sentence pitch for a habit-tracking app.";

  const draft1 = await writerAgent(task);
  console.log("--- Draft 1 ---");
  console.log(draft1);

  const critique = await criticAgent(task, draft1);
  console.log("--- Critique ---");
  console.log(critique);
}

main();