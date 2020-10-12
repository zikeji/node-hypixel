import type { Member } from "./ProfileMember";

export interface Transaction {
  /** The amount thie transaction was for. */
  amount?: number;
  /** The unix timestamp (in milliseconds) of this transaction. */
  timestamp?: number;
  /** The type of transaction. */
  action?: "DEPOSIT" | "WITHDRAW";
  /** The IGN of the person who created the transaction (with MC formatting, e.g. "§6Zikeji"), or if it's interst just "Bank Interest". */
  initiator_name?: "Bank Interest" | string;
}

export interface Banking {
  /** The balance of the profile's bank. */
  balance?: number;
  /** Transactions on the profile. */
  transactions?: Transaction[];
}

/**
 * The interface describing the resulting data in a profile response.
 */
export interface Profile {
  /** The unique ID of the profile. */
  profile_id?: string;

  /** Members of the profile and their individual data. */
  members?: {
    [member_uuid: string]: Member;
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
