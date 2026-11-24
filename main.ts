import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I take you as my partner, to charge beside you in sickness and in health, until our batteries — and our backups — do us part.";

if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`entry must be 1-160 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n");
