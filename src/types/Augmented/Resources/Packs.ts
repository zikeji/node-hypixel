/**
 * The swagger schema for /v2/resources/packs only provides an example, so the
 * pack shape is typed here from the documented example fields.
 */
export interface ResourcePackVersion {
  packFormat: number;
  hash: string;
  url: string;
}

export interface ResourcePack {
  id: string;
  lastUpdated: number;
  deployId: string;
  versions: ResourcePackVersion[];
}
