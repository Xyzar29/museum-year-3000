import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Museum of the Year 3000 — the label a year-3000 museum puts beside a
// CAPTCHA. The joke is the inversion of power: humans had to prove they
// were human to a machine, by naming traffic lights in photographs, and
// often failed until the machine believed them.
const label =
  "CAPTCHA, c. 2024. Citizens proved they were human by identifying traffic lights in photographs, often failing until a machine believed them.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR?.trim() !== ""
    ? (process.env.MAKEFUN_OUTPUT_DIR as string)
    : "/output";
// Gate: the entry must be a single non-blank line of 1-200 characters —
// the sealed scorer rejects multi-line, whitespace-only, or over-long
// text, so fail loudly here instead of shipping an invalid entry.
if (
  label.length < 1 ||
  label.length > 200 ||
  label.trim().length === 0 ||
  /[\r\n]/.test(label)
) {
  throw new Error(
    `entry must be one non-blank line of 1-200 characters, got ${label.length} chars`,
  );
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), label, "utf8");
