const fs = require("fs");
const path = require("path");

const content = fs.readFileSync(path.join(__dirname, "../", "src", "types", "api.ts"), "utf-8");

const lines = [];

let inMonthlyCrates = false;
let inSkyBlockProfileObjective = false;
let SkyBlockProfileSlayerBoss = false;
for (let line of content.split("\n")) {
  line = line.replace(/declare namespace/, "export declare namespace");

  if (inMonthlyCrates) {
    inMonthlyCrates = false;
    line = line.replace(/\[name: string\]: boolean/, "[name: string]: undefined | boolean");
  }

  if (SkyBlockProfileSlayerBoss) {
    SkyBlockProfileSlayerBoss = false;
    line = line.replace(/\[name: string\]: boolean/, "[name: string]: undefined | boolean");
  }

  if (lines.length > 0) {
    // Player types
    if(lines[lines.length - 1].match(/export interface Player/)) {
      line = line.replace(/\[name: string\]: boolean/, "[name: string]: undefined | boolean");
    }
    if(lines[lines.length - 1].match(/export interface PlayerAchievements/)) {
      line = line.replace(/\[name: string\]: number/, "[name: string]: undefined | number");
    }
    if(lines[lines.length - 1].match(/export interface PlayerCompassStatsChild/)) {
      line = line.replace(/\[name: string\]: number/, "[name: string]: undefined | number");
    }
    if(lines[lines.length - 1].match(/export interface PlayerFriendsData/)) {
      line = line.replace(/\[name: string\]: string\[\]/, "[name: string]: undefined | string[]");
    }
    if(lines[lines.length - 1].match(/export interface PlayerHousingMeta/)) {
      line = line.replace(/\[name: string\]: string/, "[name: string]: undefined | string");
    }
    if(lines[lines.length - 1].match(/export interface PlayerHousingMetaPlayerSettings/)) {
      line = line.replace(/\[name: string\]: string/, "[name: string]: undefined | string");
    }
    if(lines[lines.length - 1].match(/export interface PlayerMonthlyCrates/)) {
      inMonthlyCrates = true;
    }
    if(lines[lines.length - 1].match(/export interface PlayerSettings/)) {
      line = line.replace(/\[name: string\]: boolean/, "[name: string]: undefined | boolean");
    }
    if(lines[lines.length - 1].match(/export interface PlayerStats/)) {
      line = line.replace(/\[name: string\]: PlayerStatsGameMode/, "[name: string]: undefined | PlayerStatsGameMode");
    }
    if(lines[lines.length - 1].match(/export interface PlayerStatsGameMode/)) {
      line = line.replace(/\[name: string\]: number/, "[name: string]: undefined | number");
    }
    if(lines[lines.length - 1].match(/export interface PlayerStatsHousing/)) {
      line = line.replace(/\[name: string\]: PlayerStatsHousingLayoutItems/, "[name: string]: undefined | PlayerStatsHousingLayoutItems");
    }
    if(lines[lines.length - 1].match(/export interface PlayerStatsPit \{/)) {
      line = line.replace(/\[name: string\]: number/, "[name: string]: undefined | number");
    }
    if(lines[lines.length - 1].match(/export interface PlayerStatsPitProfile \{/)) {
      line = line.replace(/\[name: string\]: number/, "[name: string]: undefined | null | number");
    }
    if(lines[lines.length - 1].match(/export interface PlayerStatsPitProfileContract/)) {
      line = line.replace(/\[name: string\]: number/, "[name: string]: undefined | number");
    }
    if(lines[lines.length - 1].match(/export interface PlayerStatsPitProfileEndedContract/)) {
      line = line.replace(/\[name: string\]: number/, "[name: string]: undefined | number");
    }
    if(lines[lines.length - 1].match(/export interface PlayerStatsWalls3/)) {
      line = line.replace(/\[name: string\]: number/, "[name: string]: undefined | number");
    }
    if(lines[lines.length - 1].match(/export interface PlayerTourney/)) {
      line = line.replace(/\[name: string\]: number/, "[name: string]: undefined | number");
    }
    if(lines[lines.length - 1].match(/export interface PlayerSocialMedia/)) {
      line = line.replace(/\[name: string\]: string \| boolean \| PlayerSocialMediaLinks/, "[name: string]: undefined | string | boolean | PlayerSocialMediaLinks");
    }
    if(lines[lines.length - 1].match(/export interface PlayerSocialMediaLinks/)) {
      line = line.replace(/\[name: string\]: string/, "[name: string]: undefined | string");
    }
    if(lines[lines.length - 1].match(/export interface PlayerVoting/)) {
      line = line.replace(/\[name: string\]: number/, "[name: string]: undefined| number");
    }

    // SkyBlock profile types
  line = line.replace(/\[name: string\]: SkyBlockProfileObjective/, "[name: string]: undefined | SkyBlockProfileObjective");
  line = line.replace(/\[name: string\]: SkyBlockProfileQuest/, "[name: string]: undefined | SkyBlockProfileQuest");
  line = line.replace(/\[name: string\]: SkyBlockProfileDungeonJournalEntries/, "[name: string]: undefined | SkyBlockProfileDungeonJournalEntries");
    if(lines[lines.length - 1].match(/export interface SkyBlockProfileStats/)) {
      line = line.replace(/\[name: string\]: number/, "[name: string]: undefined | number");
    }
    if(lines[lines.length - 1].match(/export interface SkyBlockProfileObjective/)) {
      line = line.replace(/\[name: string\]: boolean \| number \| string/, "[name: string]: undefined | boolean | number | string");
    }
    if(lines[lines.length - 1].match(/export interface SkyBlockProfileCollection/)) {
      line = line.replace(/\[name: string\]: number/, "[name: string]: undefined | number");
    }
    if(lines[lines.length - 1].match(/export interface SkyBlockProfileSacksCounts/)) {
      line = line.replace(/\[name: string\]: number/, "[name: string]: undefined | number");
    }
    if(lines[lines.length - 1].match(/export interface SkyBlockProfileSlayerBoss/)) {
      line = line.replace(/\[name: string\]: number/, "[name: string]: undefined | number");
      SkyBlockProfileSlayerBoss = true;
    }
    if(lines[lines.length - 1].match(/claimed_levels:/)) {
      line = line.replace(/\[name: string\]: boolean/, "[name: string]: undefined | boolean");
    }
  }

  if (line.match(/export interface SkyBlockProfileObjectives/)) {
    inSkyBlockProfileObjective = true;
  }
  if (inSkyBlockProfileObjective) {
    line = line.replace(/\[name: string\]: boolean \| number \| string/, "[name: string]: undefined | boolean | number | string")
  }
  if (line.match(/export interface SkyBlockProfilePet/)) {
    inSkyBlockProfileObjective = false;
  }
  lines.push(line);
}

fs.writeFileSync(path.join(__dirname, "../", "src", "types", "api.ts"), lines.join("\n"));