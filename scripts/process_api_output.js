const fs = require("fs");
const path = require("path");

const content = fs.readFileSync(path.join(__dirname, "../", "src", "types", "api.ts"), "utf-8");

const lines = [];

for (let line of content.split("\n")) {
  let shouldPushLine = true;
  line = line.replace(/declare namespace/, "export declare namespace");
  line = line.replace(/\: any/, ": unknown");

  if (shouldPushLine) {
    lines.push(line);
  }
}

fs.writeFileSync(path.join(__dirname, "../", "src", "types", "api.ts"), lines.join("\n"));