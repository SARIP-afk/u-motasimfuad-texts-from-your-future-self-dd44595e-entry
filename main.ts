// Texts From Your Future Self — writes the entry text to /output/entry.txt.
// Node 22, no dependencies. The program is deterministic: it writes one fixed
// text message, exactly as the competition's gate requires (UTF-8, 1-200 chars).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Future you here. That free trial ends tomorrow. In 2031 you're still paying $14.99 a month for it. You've never opened the app. Not once.";

// Gate mirror: the sealed scorer requires /output/entry.txt to be UTF-8 text
// of 1 to 200 characters, not only white space. Fail loudly instead of
// writing an invalid entry.
const chars = [...TEXT];
if (chars.length < 1 || chars.length > 200 || TEXT.trim().length === 0) {
  throw new Error(`entry text invalid: ${chars.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
