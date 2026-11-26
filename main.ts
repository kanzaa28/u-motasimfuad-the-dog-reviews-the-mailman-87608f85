import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One funny one-line review a dog gives the mailman.
// Winner of a 7-candidate head-to-head judged on the kit's 5 criteria
// (see NOTES.md). 124 chars, well inside the 1-200 gate.
const LINE =
  "He rings the bell, I bark, he leaves the letters and runs — six years, and he still hasn't figured out the letters are mine.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Refuse to write anything outside the gate instead
// of emitting an entry the sealed scorer would reject.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-200 gate`);
}

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
