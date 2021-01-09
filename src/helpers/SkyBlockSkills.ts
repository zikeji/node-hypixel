import { Components } from "../types/api";

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
  profileMember: Components.Schemas.SkyBlockProfileMember,
  skills: Components.Schemas.SkyBlockResourcesSkills
): SkyBlockSkillsInfo | false {
  let hasApi = false;
  const result = {} as SkyBlockSkillsInfo;
  for (let i = 0; i < Object.keys(skills).length; i += 1) {
    const skillName = Object.keys(skills)[i];
    const skill = skills[skillName];
    const skillKey = `experience_skill_${skillName.toLowerCase()}` as keyof Components.Schemas.SkyBlockProfileMember;
    let exp = 0;
    if (skillKey in profileMember) {
      exp = profileMember[skillKey] as number;
      hasApi = true;
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
  if (hasApi === false) {
    return false;
  }
  return result;
}
