import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Museum of the Year 3000 — the label a year-3000 museum puts beside a
// CAPTCHA. The joke is the inversion of power: humans had to prove they
// were human to a machine, by naming traffic lights in photographs, and
// often failed until the machine believed them.
const label =
  "CAPTCHA, c. 2024. Citizens proved they were human by identifying traffic lights in photographs, often failing until a machine believed them.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (label.length < 1 || label.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${label.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), label, "utf8");
