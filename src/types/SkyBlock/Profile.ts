import type { Components } from "../api";
import type { SkyBlockProfileMember } from "./ProfileMember";

/** fix the typing of the members on a SkyBlock profile */
export type SkyBlockProfile = Omit<
  Components.Schemas.SkyBlockProfile,
  "members"
> & {
  members: {
    [key: string]: SkyBlockProfileMember;
  };
  community_upgrades?: {
    created_at?: number;
    currently_upgrading: {
      upgrade: string;
      new_tier: number;
      start_ms: number;
      who_started: string;
    };
    game_mode?: string;
    upgrade_states: {
      upgrade: string;
      tier: number;
      started_ms: number;
      started_by: string;
      claimed_ms: number;
      claimed_by: string;
      fasttracked: boolean;
    }[];
  };
};
