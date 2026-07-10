import { runLoop } from "./loop";

async function main() {
  const task = "Write a tagline for a coffee shop that must include the word 'ritual', cannot use 'coffee', must be under 6 words, must rhyme, and should reference mornings without using the word 'morning'.";
  const result = await runLoop(task);
  console.log("\n--- Final ---");
  console.log(result.draft);
}

main();