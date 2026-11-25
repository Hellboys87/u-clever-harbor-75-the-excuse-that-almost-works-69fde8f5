import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Sorry boss, the water heater burst and the hallway's ankle-deep, plumber's coming at 9, can't get out.";

if (line.length < 1 || line.length > 140 || line.trim().length === 0) {
  throw new Error(`entry must be 1-140 characters, got ${line.length}`);
}

const words = line.trim().split(/\s+/).length;
if (words > 20) {
  throw new Error(`entry must be at most 20 words, got ${words}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
