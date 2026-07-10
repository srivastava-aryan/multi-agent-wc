import { runLoop } from "./loop";

async function main() {
  const task = "Write a 3-sentence pitch for a habit-tracking app, in the voice of a pirate, without using the words 'you' or 'your'.";
  const result = await runLoop(task);
  console.log("\n--- Final ---");
  console.log(result.draft);
}

main();