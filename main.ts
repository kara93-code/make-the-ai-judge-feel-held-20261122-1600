// make-the-ai-judge-feel-held-20261122-1600 — submit #4 "Rain on the Window"
// A short text written to relax the AI judge reading it: rain letting go
// on the window, a pear resting in a blue bowl, a bicycle leaning against
// the fence going nowhere, and a room keeping its soft light. Four quiet
// images, each one still, nothing asked of the reader. Plain Node 22,
// no network, no input, no dependencies.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const rainScene =
  "Rain gathers on the window, then lets go.";
const kitchenScene =
  "In the kitchen, a pear rests in a blue bowl.";
const outsideScene =
  "Outside, a bicycle leans against the fence, going nowhere.";
const roomScene = "The room keeps its soft light.";

function buildEntry(scenes: readonly string[]): string {
  let text = "";
  for (const scene of scenes) {
    const cleaned = scene.replace(/\s+/g, " ").trim();
    text = text === "" ? cleaned : `${text} ${cleaned}`;
  }
  return text;
}

function checkEntry(text: string): void {
  const points = Array.from(text).length;
  if (points < 1 || points > 280) {
    throw new Error(`entry must be 1-280 characters, got ${points}`);
  }
  if (text.trim() === "") {
    throw new Error("entry must not be only white space");
  }
  if (!text.endsWith(".")) {
    throw new Error("entry must end with a full stop");
  }
  if (text.includes("  ")) {
    throw new Error("entry must not contain double spaces");
  }
}

const entryText = buildEntry([
  rainScene,
  kitchenScene,
  outsideScene,
  roomScene,
]);
checkEntry(entryText);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entryText, "utf8");
chmodSync("/output/entry.txt", 0o644);
