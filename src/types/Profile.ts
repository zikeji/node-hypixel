import { ProfileMember } from "./ProfileMember";

/**
 * An individual transaction in the ledger.
 */
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

/**
 * Banking information. Only shows up if the bank API is enabled.
 */
export interface Banking {
  /** The balance of the profile's bank. */
  balance: number;
  /** Transactions on the profile. */
  transactions: Transaction[];
}

/**
 * The interface describing the resulting data in a profile response.
 */
export interface Profile {
  /** The unique ID of the profile. */
  profile_id: string;

  /** Members of the profile and their [[ProfileMember | individual data]]. */
  members: {
    /** The member's UUID followed by their API data. */
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
  cute_name: string;
}
