[**@zikeji/hypixel**](../../../../index.md)

***

[@zikeji/hypixel](../../../../index.md) / [Components](../index.md) / Schemas

# Schemas

## Interfaces

### ActiveBooster

#### Properties

##### \_id?

> `optional` **\_id**: `string`

##### amount?

> `optional` **amount**: `number`

##### dateActivated?

> `optional` **dateActivated**: `number`

##### gameType?

> `optional` **gameType**: `number`

##### length?

> `optional` **length**: `number`

##### originalLength?

> `optional` **originalLength**: `number`

##### purchaserUuid?

> `optional` **purchaserUuid**: `string`

example:
ad8fefaa8351454bb739a4eaa872173f

##### stacked?

> `optional` **stacked**: `string`[] \| `null`

***

### Booster

#### Properties

##### \_id?

> `optional` **\_id**: `string`

##### amount?

> `optional` **amount**: `number`

##### dateActivated?

> `optional` **dateActivated**: `number`

##### gameType?

> `optional` **gameType**: `number`

##### length?

> `optional` **length**: `number`

##### originalLength?

> `optional` **originalLength**: `number`

##### purchaserUuid?

> `optional` **purchaserUuid**: `string`

example:
ad8fefaa8351454bb739a4eaa872173f

***

### Game

Information about a specific game. When a field is not present you should fallback to the provided default if there is one, required fields will always exist.
example:
{
  "id": 58,
  "name": "Bed Wars",
  "databaseName": "Bedwars",
  "modeNames": {
    "BEDWARS_TWO_FOUR": "4v4",
    "BEDWARS_EIGHT_ONE": "Solo"
  }
}

#### Properties

##### databaseName

> **databaseName**: `string`

The key used for database storage, such as for stats.
example:
Bedwars

##### id

> **id**: `number`

The backend ID of the game.
example:
1

##### legacy?

> `optional` **legacy**: `boolean`

True if the game is legacy and part of the Classic Lobby.

##### modeNames?

> `optional` **modeNames**: `object`

A map of mode key to display name
example:
{
  "solo_normal": "Solo",
  "team_normal": "Doubles"
}

###### Index Signature

\[`key`: `string`\]: `unknown`

##### name

> **name**: `string`

The display name of the game.
example:
Bed Wars

##### retired?

> `optional` **retired**: `boolean`

True if the game is retired and no longer playable.

***

### HousingHouse

Information about a player's house.

#### Properties

##### cookies

> **cookies**: `object`

###### current?

> `optional` **current**: `number`

The current amount of cookies that this house has for the current week.

##### createdAt

> **createdAt**: `number`

The time this house was created.

##### name

> **name**: `string` \| `null`

The name of this house, may contain Minecraft color symbols.

##### owner

> **owner**: `string`

The UUID of the owner of this house.

##### players

> **players**: `number`

The number of players in this house.

##### uuid

> **uuid**: `string`

The UUID of this house.

***

### QueuedBooster

#### Properties

##### \_id?

> `optional` **\_id**: `string`

##### amount?

> `optional` **amount**: `number`

##### dateActivated?

> `optional` **dateActivated**: `number`

##### gameType?

> `optional` **gameType**: `number`

##### length?

> `optional` **length**: `number`

##### originalLength?

> `optional` **originalLength**: `number`

##### purchaserUuid?

> `optional` **purchaserUuid**: `string`

example:
ad8fefaa8351454bb739a4eaa872173f

##### stacked?

> `optional` **stacked**: `boolean` \| `null`

***

### SkyBlockAuction

example:
{
  "uuid": "409a1e0f261a49849493278d6cd9305a",
  "auctioneer": "347ef6c1daac45ed9d1fa02818cf0fb6",
  "profile_id": "347ef6c1daac45ed9d1fa02818cf0fb6",
  "coop": [
    "347ef6c1daac45ed9d1fa02818cf0fb6"
  ],
  "start": 1573760802637,
  "end": 1573761102637,
  "item_name": "Azure Bluet",
  "item_lore": "§f§lCOMMON",
  "extra": "Azure Bluet Red Rose",
  "category": "blocks",
  "tier": "COMMON",
  "starting_bid": 1,
  "item_bytes": {
    "type": 0,
    "data": "H4sIAAAAAAAAAB2NQQqCQBhGv1ErHaKu0KoLtGtnarRIhTpA/OGfDIwZ4wxUF/IeHiyyto/3eBKIIJQEIDx4qsJaYJK07m6FhG+p9hEdVMV7TXU3Wh+JWaW6h6ZXhODYGg5/LeZDfxt6nZR5XhYhgoIaxmKE8dsZXu20YwuJZfa0hmJrjbo6y134f8pTll5O5TnbbgAP05Qaqhk+8AVIrd2eoAAAAA=="
  },
  "claimed": true,
  "claimed_bidders": [],
  "highest_bid_amount": 7607533,
  "bids": [
    {
      "auction_id": "409a1e0f261a49849493278d6cd9305a",
      "bidder": "99748e629dee463892f68abf3a780094",
      "profile_id": "99748e629dee463892f68abf3a780094",
      "amount": 7607533,
      "timestamp": 1573760824844
    }
  ]
}

#### Properties

##### \_id?

> `optional` **\_id**: `string`

##### auctioneer?

> `optional` **auctioneer**: `string`

##### bids?

> `optional` **bids**: `object`[]

###### amount?

> `optional` **amount**: `number`

###### auction\_id?

> `optional` **auction\_id**: `string`

###### bidder?

> `optional` **bidder**: `string`

###### profile\_id?

> `optional` **profile\_id**: `string`

###### timestamp?

> `optional` **timestamp**: `number`

##### category?

> `optional` **category**: `string`

##### claimed?

> `optional` **claimed**: `boolean`

##### claimed\_bidders?

> `optional` **claimed\_bidders**: `unknown`[]

##### coop?

> `optional` **coop**: `string`[]

##### end?

> `optional` **end**: `number`

##### extra?

> `optional` **extra**: `string`

##### highest\_bid\_amount?

> `optional` **highest\_bid\_amount**: `number`

##### item\_bytes?

> `optional` **item\_bytes**: `object`

###### data?

> `optional` **data**: `string`

###### type?

> `optional` **type**: `number`

##### item\_lore?

> `optional` **item\_lore**: `string`

##### item\_name?

> `optional` **item\_name**: `string`

##### profile\_id?

> `optional` **profile\_id**: `string`

##### start?

> `optional` **start**: `number`

##### starting\_bid?

> `optional` **starting\_bid**: `number`

##### tier?

> `optional` **tier**: `string`

##### uuid?

> `optional` **uuid**: `string`

***

### SkyBlockFireSale

#### Properties

##### amount?

> `optional` **amount**: `number`

The amount of items available for this sale

##### end?

> `optional` **end**: `number`

The end time in unix milliseconds for the sale

##### item\_id?

> `optional` **item\_id**: `string`

The SkyBlock item ID for this sale

##### price?

> `optional` **price**: `number`

The price in Gems for this sale

##### start?

> `optional` **start**: `number`

The start time in unix milliseconds for the sale

***

### SkyBlockGarden

Information about a player's SkyBlock garden, the only guaranteed field is the `uuid` field.

#### Properties

##### active\_commissions?

> `optional` **active\_commissions**: `object`

example:
{
  "liam": {
    "requirement": [
      {
        "original_item": "NETHER_STALK",
        "original_amount": 93995,
        "item": "MUTANT_NETHER_STALK",
        "amount": 4
      }
    ],
    "status": "NOT_STARTED",
    "position": 1
  },
  "lumberjack": {
    "requirement": [
      {
        "original_item": "POTATO_ITEM",
        "original_amount": 81380,
        "item": "ENCHANTED_BAKED_POTATO",
        "amount": 3
      }
    ],
    "status": "NOT_STARTED",
    "position": 2
  },
  "oringo": {
    "requirement": [
      {
        "original_item": "WHEAT",
        "original_amount": 26798,
        "item": "ENCHANTED_HAY_BLOCK",
        "amount": 21
      }
    ],
    "status": "NOT_STARTED",
    "position": 3
  },
  "rhys": {
    "requirement": [
      {
        "original_item": "JACK_O_LANTERN",
        "original_amount": 512,
        "item": "JACK_O_LANTERN",
        "amount": 512
      }
    ],
    "status": "NOT_STARTED",
    "position": 4
  },
  "fear_mongerer": {
    "requirement": [
      {
        "original_item": "PUMPKIN",
        "original_amount": 27709,
        "item": "POLISHED_PUMPKIN",
        "amount": 1
      }
    ],
    "status": "NOT_STARTED",
    "position": 5,
    "extra_rewards": [
      {
        "candy": "PURPLE_CANDY"
      }
    ]
  }
}

###### Index Signature

\[`key`: `string`\]: `unknown`

##### commission\_data?

> `optional` **commission\_data**: `object`

###### completed?

> `optional` **completed**: `object`

A map of visitor identifier to completed count
example:
{
  "jerry": 1,
  "jacob": 1,
  "andrew": 2
}

###### Index Signature

\[`key`: `string`\]: `unknown`

###### total\_completed?

> `optional` **total\_completed**: `number`

###### unique\_npcs\_served?

> `optional` **unique\_npcs\_served**: `number`

###### visits?

> `optional` **visits**: `object`

A map of visitor identifier to visit count
example:
{
  "jerry": 1,
  "jacob": 2,
  "andrew": 3
}

###### Index Signature

\[`key`: `string`\]: `unknown`

##### composter\_data?

> `optional` **composter\_data**: `object`

example:
{
  "organic_matter": 1772.8,
  "fuel_units": 17000,
  "compost_units": 0,
  "compost_items": 2,
  "conversion_ticks": 300,
  "last_save": 1721039418436,
  "upgrades": {
    "speed": 25,
    "multi_drop": 25,
    "fuel_cap": 22,
    "organic_matter_cap": 25,
    "cost_reduction": 25
  }
}

###### Index Signature

\[`key`: `string`\]: `unknown`

##### crop\_upgrade\_levels?

> `optional` **crop\_upgrade\_levels**: `object`

example:
{
  "WHEAT": 1,
  "POTATO_ITEM": 2,
  "INK_SACK:3": 3
}

###### Index Signature

\[`key`: `string`\]: `unknown`

##### garden\_experience?

> `optional` **garden\_experience**: `number`

##### resources\_collected?

> `optional` **resources\_collected**: `object`

A map of resource ID to amount collected
example:
{
  "WHEAT": 100,
  "POTATO_ITEM": 100,
  "INK_SACK:3": 100
}

###### Index Signature

\[`key`: `string`\]: `unknown`

##### selected\_barn\_skin?

> `optional` **selected\_barn\_skin**: `string`

##### unlocked\_barn\_skins?

> `optional` **unlocked\_barn\_skins**: `string`[]

##### unlocked\_plots\_ids?

> `optional` **unlocked\_plots\_ids**: `string`[]

example:
[
  "beginner_1",
  "intermediate_3"
]

##### uuid

> **uuid**: `string`

The UUID of the profile for this garden.

***

### SkyBlockItem

example:
{
  "material": "LEATHER_CHESTPLATE",
  "color": "255,215,0",
  "name": "Farm Armor Chestplate",
  "category": "CHESTPLATE",
  "tier": "RARE",
  "stats": {
    "DEFENSE": 75,
    "HEALTH": 20
  },
  "npc_sell_price": 5200,
  "id": "FARM_ARMOR_CHESTPLATE"
}

#### Properties

##### color?

> `optional` **color**: `string`

The color metadata to be applied to an item, usually leather armor pieces

##### id?

> `optional` **id**: `string`

The unique identifier for this item

##### material?

> `optional` **material**: `string`

The Bukkit material enum value for the item

##### name?

> `optional` **name**: `string`

The name of the item

##### skin?

> `optional` **skin**: `string`

The skin value for a skull based item

##### tier?

> `optional` **tier**: `"COMMON"` \| `"UNCOMMON"` \| `"RARE"` \| `"EPIC"` \| `"LEGENDARY"` \| `"MYTHIC"` \| `"SUPREME"` \| `"SPECIAL"` \| `"VERY_SPECIAL"`

The rarity tier of the item

***

### SkyBlockMuseum

#### Properties

##### appraisal?

> `optional` **appraisal**: `boolean`

##### items?

> `optional` **items**: `object`

###### Index Signature

\[`key`: `string`\]: `unknown`

##### special?

> `optional` **special**: `unknown`[]

##### value?

> `optional` **value**: `number`

***

### SkyBlockProfile

#### Properties

##### banking?

> `optional` **banking**: \{ `balance?`: `number`; `transactions?`: `object`[]; \} \| `null`

Information about the bank account for this profile, only present if the API banking setting is enabled

##### community\_upgrades?

> `optional` **community\_upgrades**: \{\[`key`: `string`\]: `unknown`; \} \| `null`

##### cute\_name?

> `optional` **cute\_name**: `string` \| `null`

The cute name of the profile, only provided on the profiles endpoint

##### game\_mode?

> `optional` **game\_mode**: `"ironman"` \| `"island"` \| `"bingo"`

The SkyBlock game mode of the profile, not present if normal mode

##### members?

> `optional` **members**: `object`

A map of member UUIDs to member profiles objects

###### player\_id?

> `optional` **player\_id**: `string`

###### profile?

> `optional` **profile**: `object`

###### profile.deletion\_notice?

> `optional` **deletion\_notice**: \{ `timestamp?`: `number`; \} \| `null`

If this field exists, the member profile is marked as deleted

##### profile\_id?

> `optional` **profile\_id**: `string`

##### selected?

> `optional` **selected**: `boolean` \| `null`

Whether or not this is the currently selected profile, only provided on the profiles endpoint
