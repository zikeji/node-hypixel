export type ElectionMayor = {
  key: string;
  name: string;
  perks: {
    name: string;
    description: string;
  }[];
  minister: {
    key: string;
    name: string;
    perk: {
      name: string;
      description: string;
      minister: boolean;
    };
  };
  election?: {
    year: number;
    candidates: {
      key: string;
      name: string;
      perks: {
        name: string;
        description: string;
        minister: boolean;
      }[];
      votes: number;
    }[];
  };
};
export type ElectionCurrent = {
  year: number;
  candidates: {
    key: string;
    name: string;
    perks: {
      name: string;
      description: string;
      minister: boolean;
    }[];
  }[];
};
