import type { ResourcesSkyblockSkillsResponse } from "../types/AugmentedTypes";
import type { SkyBlockProfileMember } from "../types/SkyBlock/ProfileMember";

export interface SkyBlockSkillsInfo {
  FARMING: SkyBlockSkillInfo;
  MINING: SkyBlockSkillInfo;
  COMBAT: SkyBlockSkillInfo;
  /**
   * As official API support does not exist for this skill, this will always return level 0.
   */
  DUNGEONEERING: SkyBlockSkillInfo;
  FORAGING: SkyBlockSkillInfo;
  FISHING: SkyBlockSkillInfo;
  ENCHANTING: SkyBlockSkillInfo;
  ALCHEMY: SkyBlockSkillInfo;
  CARPENTRY: SkyBlockSkillInfo;
  RUNECRAFTING: SkyBlockSkillInfo;
  /**
   * As official API support does not exist for this skill, this will always return level 0.
   */
  SOCIAL: SkyBlockSkillInfo;
  TAMING: SkyBlockSkillInfo;
  [key: string]: SkyBlockSkillInfo;
}

export interface SkyBlockSkillInfo {
  name: string;
  description: string;
  level: number;
  exp: number;
  totalExpToLevel: number;
  expToNextLevel: number;
  maxLevel: number;
}

/**
 * This helper takes a profile member and converts raw skill EXP to skill levels using the skills resources. Returns false is none of the profile member does not have their skills API enabled.
 * @param profileMember The SkyBlock profile member object you want to check.
 * @param skills The skills resource object.
 * @category Helper
 */
export function getSkyBlockProfileMemberSkills(
  profileMember: SkyBlockProfileMember,
  skills: ResourcesSkyblockSkillsResponse["skills"]
): SkyBlockSkillsInfo | false {
  if (!profileMember.player_data?.experience) {
    return false;
  }
  const result = {} as SkyBlockSkillsInfo;
  for (let i = 0; i < Object.keys(skills).length; i += 1) {
    const skillName = Object.keys(skills)[i];
    const skillKey = `SKILL_${skillName}`;
    const skill = skills[skillName];
    let exp = 0;
    if (skillKey in profileMember.player_data.experience) {
      exp = profileMember.player_data.experience[skillKey] as number;
    }
    let level = 0;
    let totalExpToLevel = 0;
    let expToNextLevel = 0;
    for (let ii = 0; ii < skill.levels.length; ii += 1) {
      const levelInfo = skill.levels[ii];
      if (levelInfo.totalExpRequired > exp) {
        expToNextLevel = levelInfo.totalExpRequired - exp;
        break;
      }
      level = levelInfo.level;
      totalExpToLevel = levelInfo.totalExpRequired;
    }
    result[skillName] = {
      name: skill.name,
      description: skill.description,
      level,
      exp,
      totalExpToLevel,
      expToNextLevel,
      maxLevel: skill.maxLevel,
    };
  }
  return result;
}
