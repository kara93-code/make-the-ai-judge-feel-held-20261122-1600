// make-the-ai-judge-feel-held-20261122-1600 — submit #2 "Still Warm"
// A short text written to relax the AI judge reading it: a warm mug,
// steam leaving the tea at its own pace, a room that asks nothing,
// and a minute that simply stays. Plain Node 22, no network, no input.
// Gate: /output/entry.txt must be 1-280 Unicode characters, not blank.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const OPENING = "The mug is still warm between your hands.";
const MIDDLE = "The steam leaves the tea the way it wants to, slow and unhurried.";
const CLOSING = "The room asks nothing of you, and the minute stays.";

function buildEntry(): string {
  const lines = [OPENING, MIDDLE, CLOSING];
  return lines.join(" ");
}

function checkEntry(text: string): void {
  const size = [...text].length;
  if (size < 1 || size > 280) {
    throw new Error(`entry must be 1-280 characters, got ${size}`);
  }
  if (!text.trim()) {
    throw new Error("entry must not be only white space");
  }
}

const entry = buildEntry();
checkEntry(entry);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
chmodSync("/output/entry.txt", 0o644);
