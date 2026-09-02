#!/usr/bin/env node
/**
 * Bundle handwritten-xhs-cover skill into one markdown for paste/import.
 * Usage: node .cursor/skills/handwritten-xhs-cover/scripts/bundle.mjs
 */

import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = dirname(fileURLToPath(import.meta.url));
const skillDir = join(root, "..");

const files = [
  "SKILL.md",
  "style-guide.md",
  "prompts/analyze-image.md",
  "prompts/layout-plan.md",
  "prompts/generate-poster.md",
  "examples/good-bad.md",
  "references/README.md",
];

let out = `# handwritten-xhs-cover · bundled skill\n\n`;
out += `> Generated ${new Date().toISOString().slice(0, 10)}. Source: copy-swipe/.cursor/skills/handwritten-xhs-cover/\n\n`;

for (const rel of files) {
  const path = join(skillDir, rel);
  const body = readFileSync(path, "utf8");
  out += `\n---\n\n## FILE: ${rel}\n\n${body}\n`;
}

const dest = join(skillDir, "handwritten-xhs-cover.bundle.md");
writeFileSync(dest, out, "utf8");
console.log(`Wrote ${dest} (${(out.length / 1024).toFixed(1)} KB)`);
