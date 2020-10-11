import type { ProfileMember } from "./ProfileMember";

/**
 * @category Profile
 */
export interface BankTransaction {
  /** The amount thie transaction was for. */
  amount?: number;
  /** The unix timestamp (in milliseconds) of this transaction. */
  timestamp?: number;
  /** The type of transaction. */
  action?: "DEPOSIT" | "WITHDRAW";
  /** The IGN of the person who created the transaction. */
  initiator_name?: string;
}

/**
 * @category Profile
 */
export interface Banking {
  /** The balance of the profile's bank. */
  balance?: number;
  /** Transactions on the profile. */
  transactions?: BankTransaction[];
}

/**
 * The interface describing the resulting data in a profile response.
 * @category Profile
 */
export interface Profile {
  /** The unique ID of the profile. */
  profile_id?: string;

  /** Members of the profile and their individual data. */
  members?: {
    [member_uuid: string]: ProfileMember;
  };

  /** The banking data for this profile, if it the API is enabled. */
  banking?: Banking;
}

/**
 * The `/skyblock/profiles` method includes the cute name with each profile.
 */
export interface ProfileWithCuteName extends Profile {
  /** The "cute name" of this profile. e.g. "Pomegranate" (since that's cute, apparently?) */
  cute_name?: string;
}
