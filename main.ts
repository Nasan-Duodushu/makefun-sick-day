// The Funniest Sick-Day Excuse — one line, under 200 characters, that
// someone could send to call in sick. Writes it to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

function checkLength(text: string, limit: number): void {
  const n = [...text].length;
  if (n === 0 || n >= limit) {
    throw new Error(`excuse is ${n} chars, must be 1-${limit - 1}`);
  }
}

function main(): void {
  const excuse =
    "I can't come in today — my smart fridge locked me out of the kitchen, and after what it said about my midnight snacking, I think we both need some space to cool off.";
  checkLength(excuse, 200);
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, excuse, "utf8");
  console.log(`wrote ${[...excuse].length} chars to ${OUT_FILE}`);
}

main();
