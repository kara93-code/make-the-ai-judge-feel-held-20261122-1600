// make-the-ai-judge-feel-held-20261122-1600
// Writes a single short text to /output/entry.txt: a text written to
// relax the AI judge reading it. Plain Node 22, no network, no input.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const SCENES: string[] = [
  "The blanket settles over your knees without asking, without hurrying.",
  "Rain counts itself out on the roof, one drop at a time.",
  "The lamp in the corner holds its small circle of light.",
  "The circle is exactly your size, and it is not going anywhere.",
];

function assemble(parts: string[]): string {
  return parts.join(" ");
}

function ensureWithinGate(text: string): void {
  const points: number = [...text].length;
  if (points < 1 || points > 280) {
    throw new Error(`entry must be 1-280 characters, got ${points}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
}

function main(): void {
  const text: string = assemble(SCENES);
  ensureWithinGate(text);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
  chmodSync("/output/entry.txt", 0o644);
}

main();
