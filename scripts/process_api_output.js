const fs = require("fs");
const path = require("path");

const content = fs.readFileSync(path.join(__dirname, "../", "src", "types", "api.ts"), "utf-8");

const lines = [];

let inSkyBlockProfileObjective = false;
let inPlayerStats = false;
let monthlycrates = false;
let SkyBlockProfileSlayerBoss = false;
for (let line of content.split("\n")) {
  line = line.replace(/declare namespace/, "export declare namespace");
  line = line.replace(/\[name: string\]: SkyBlockProfileObjective/, "[name: string]: SkyBlockProfileObjective | undefined");
  line = line.replace(/\[name: string\]: SkyBlockProfileQuest/, "[name: string]: SkyBlockProfileQuest | undefined");
  line = line.replace(/\[name: string\]: SkyBlockProfileDungeonJournalEntries/, "[name: string]: SkyBlockProfileDungeonJournalEntries | undefined");

  if (monthlycrates) {
    monthlycrates = false;
    line = line.replace(/\[name: string\]: boolean/, "[name: string]: boolean | undefined");
  }

  if (SkyBlockProfileSlayerBoss) {
    SkyBlockProfileSlayerBoss = false;
    line = line.replace(/\[name: string\]: boolean/, "[name: string]: boolean | undefined");
  }

  if (lines.length > 0) {
    if(lines[lines.length - 1].match(/export interface SkyBlockProfileStats/)) {
      line = line.replace(/\[name: string\]: number/, "[name: string]: number | undefined");
    }
    if(lines[lines.length - 1].match(/export interface SkyBlockProfileObjective/)) {
      line = line.replace(/\[name: string\]: boolean \| number \| string/, "[name: string]: boolean | number | string | undefined");
    }
    if(lines[lines.length - 1].match(/export type Player/)) {
      line = line.replace(/\[name: string\]: boolean \| number \| string \| unknown\[\]/, "[name: string]: boolean | number | string | unknown[] | undefined");
    }
    if(lines[lines.length - 1].match(/settings\?:/)) {
      line = line.replace(/\[name: string\]: boolean \| string/, "[name: string]: boolean | string | undefined");
    }
    if(lines[lines.length - 1].match(/socialMedia\?: \{/)) {
      line = line.replace(/\[name: string\]: string \| boolean \| \{/, "[name: string]: string | boolean | undefined | {");
    }
    if(lines[lines.length - 1].match(/\[name: string\]: string \| boolean \| undefined \| \{/)) {
      line = line.replace(/\[name: string\]: string/, "[name: string]: string | undefined");
    }
    if(lines[lines.length - 1].match(/links\?:/)) {
      line = line.replace(/\[name: string\]: string/, "[name: string]: string | undefined");
    }
    if(lines[lines.length - 1].match(/eugene\?:/)) {
      line = line.replace(/\[name: string\]: number/, "[name: string]: number | undefined");
    }
    if(lines[lines.length - 1].match(/monthlycrates\?:/)) {
      monthlycrates = true;
    }
    if(lines[lines.length - 1].match(/achievementTotem\?:/)) {
      line = line.replace(/\[name: string\]: boolean \| number \| string\[\]/, "[name: string]: boolean | number | string[] | undefined");
    }
    if(lines[lines.length - 1].match(/export interface PlayerGiftingMeta/)) {
      line = line.replace(/\[name: string\]: number \| string\[\]/, "[name: string]: number | string[] | undefined");
    }
    if(lines[lines.length - 1].match(/export interface SkyBlockProfileCollection/)) {
      line = line.replace(/\[name: string\]: number/, "[name: string]: number | undefined");
    }
    if(lines[lines.length - 1].match(/export interface SkyBlockProfileSacksCounts/)) {
      line = line.replace(/\[name: string\]: number/, "[name: string]: number | undefined");
    }
    if(lines[lines.length - 1].match(/export interface SkyBlockProfileSlayerBoss/)) {
      line = line.replace(/\[name: string\]: number/, "[name: string]: number | undefined");
      SkyBlockProfileSlayerBoss = true;
    }
    if(lines[lines.length - 1].match(/claimed_levels:/)) {
      line = line.replace(/\[name: string\]: boolean/, "[name: string]: boolean | undefined");
    }
  }

  if (line.match(/^\s{12}stats\?:\s\{/)) {
    inPlayerStats = true;
  }
  if (inPlayerStats) {
    line = line.replace(/(\[name: string\]:.*?);/, function(str, vals) {
      return `${vals} | undefined;`;
    });
  }
  if (inPlayerStats && line.match(/^\s{12}\};/)) {
    inPlayerStats = false;
  }

  if (line.match(/export interface SkyBlockProfileObjectives/)) {
    inSkyBlockProfileObjective = true;
  }
  if (inSkyBlockProfileObjective) {
    line = line.replace(/\[name: string\]: boolean \| number \| string/, "[name: string]: boolean | number | string | undefined")
  }
  if (line.match(/export interface SkyBlockProfilePet/)) {
    inSkyBlockProfileObjective = false;
  }
  lines.push(line);
}

fs.writeFileSync(path.join(__dirname, "../", "src", "types", "api.ts"), lines.join("\n"));