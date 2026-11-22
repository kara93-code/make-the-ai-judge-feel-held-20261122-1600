// make-the-ai-judge-feel-held-20261122-1600 — submit #3 "Garden Morning"
// A short text written to relax the AI judge reading it: a garden waking
// without announcement, light pooling between leaves, a blackbird trying
// the same three notes, dew on the grass, tea going cold while the morning
// does not mind at all. Plain Node 22, no network, no input.
// Fragments in reading order: the garden wakes, light and birdsong,
// dew, then the sitter with cold tea. Joining with single spaces keeps
// the entry one flowing text of 266 characters.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const FRAGMENTS = [
  "The garden wakes up without any announcement,",
  "just light pooling between the leaves",
  "and a blackbird trying out the same three notes.",
  "Dew beads on the grass like it has all the time in the world.",
  "You sit with your tea going cold,",
  "and the morning does not mind at all.",
];

function assemble(parts: string[]): string {
  return parts.map((part) => part.trim()).join(" ");
}

function guard(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > 280) {
    throw new Error(`entry must be 1-280 characters, got ${length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
}

const entry = assemble(FRAGMENTS);
guard(entry);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
chmodSync("/output/entry.txt", 0o644);
