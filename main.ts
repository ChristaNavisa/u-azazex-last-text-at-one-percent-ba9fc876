import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve the repository root from this file's location, never process.cwd().
const repoRoot = dirname(dirname(fileURLToPath(import.meta.url)));
void repoRoot;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entry =
  "Before I die: I read every group chat message and chose not to reply. The cracked screen was your fault and we both know it. Goodbye.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
