import { mkdirSync, writeFileSync } from "node:fs";

// Two-sentence horror story, written by hand. Deterministic by design:
// the text is fixed in this file, so every run writes the exact same bytes.
const ENTRY =
  "I taught my smart speaker to answer only to my voice, so the house would never obey a stranger. At 2 AM it answered a voice from the nursery anyway, and the voice it answered was mine.";

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
