export type Guild = {
  _id: string;
  name: string;
  coins: number;
  coinsEver: number;
  created: number;
  members: {
    uuid: string;
    rank: string;
    joined: number;
    questParticipation?: number;
    expHistory: {
      [date: `${number}-${number}-${number}`]: number | undefined;
    };
    mutedTill?: number;
  }[];
  tag: string;
  banner: {
    Base: number;
    Patterns: {
      Pattern: string;
      Color: string;
    }[];
  };
  achievements: {
    [achievement: string]: number | undefined;
  };
  exp: number;
  legacyRanking: number;
  ranks: {
    name: string;
    default: boolean;
    tag?: string;
    created: number;
    priority: number;
  }[];
  name_lower: string;
  chatMute: number;
  preferredGames: string[];
  publiclyListed: boolean;
  tagColor: string;
  guildExpByGameType: {
    [gameType: string]: number | undefined;
  };
};
