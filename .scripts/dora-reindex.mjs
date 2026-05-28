#!/usr/bin/env node
import { existsSync } from "fs";
import { spawn, spawnSync } from "child_process";
import { join, resolve } from "path";

const cwd = process.cwd();
const quiet = process.argv.includes("--quiet");
const background = process.argv.includes("--background");
const strict = process.argv.includes("--strict");

function log(message) {
  if (!quiet) {
    console.log(message);
  }
}

function warn(message) {
  if (!quiet) {
    console.warn(message);
  }
}

function hasDoraConfig() {
  return existsSync(join(cwd, ".dora", "config.json"));
}

function doraStatusOk() {
  const result = spawnSync("dora", ["status"], {
    cwd,
    stdio: "pipe",
    encoding: "utf8",
  });

  if (result.error) {
    warn(`[dora-reindex] Dora unavailable: ${result.error.message}`);
    return false;
  }

  if (result.status !== 0) {
    const message =
      (typeof result.stderr === "string" && result.stderr.trim()) ||
      (typeof result.stdout === "string" && result.stdout.trim()) ||
      "dora status failed";
    warn(`[dora-reindex] ${message}`);
    return false;
  }

  return true;
}

if (!hasDoraConfig()) {
  log(`[dora-reindex] Skipping: ${resolve(cwd, ".dora/config.json")} not found.`);
  process.exit(0);
}

if (!doraStatusOk()) {
  process.exit(0);
}

if (background) {
  const child = spawn("dora", ["index"], {
    cwd,
    detached: true,
    stdio: "ignore",
  });
  child.unref();
  log("[dora-reindex] Dora reindex started in background.");
  process.exit(0);
}

log("[dora-reindex] Running dora index...");
const result = spawnSync("dora", ["index"], {
  cwd,
  stdio: "inherit",
  encoding: "utf8",
});

if (result.status === 0) {
  process.exit(0);
}

warn("[dora-reindex] Dora reindex failed.");
process.exit(strict ? (result.status ?? 1) : 0);
