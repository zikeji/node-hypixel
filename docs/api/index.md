**@zikeji/hypixel**

***

# @zikeji/hypixel

## Namespaces

- [Components](@zikeji/namespaces/Components/index.md)
- [Paths](@zikeji/namespaces/Paths/index.md)

## Enumerations

### MinecraftColorAsHex

An enum that'll let you you get a hex color code for a specific Minecraft color formatting sequence.

#### Enumeration Members

##### §0

> **§0**: `"000000"`

##### §1

> **§1**: `"0000AA"`

##### §2

> **§2**: `"00AA00"`

##### §3

> **§3**: `"00AAAA"`

##### §4

> **§4**: `"AA0000"`

##### §5

> **§5**: `"AA00AA"`

##### §6

> **§6**: `"FFAA00"`

##### §7

> **§7**: `"AAAAAA"`

##### §8

> **§8**: `"555555"`

##### §9

> **§9**: `"5555FF"`

##### §a

> **§a**: `"55FF55"`

##### §b

> **§b**: `"55FFFF"`

##### §c

> **§c**: `"FF5555"`

##### §d

> **§d**: `"FF55FF"`

##### §e

> **§e**: `"FFFF55"`

##### §f

> **§f**: `"FFFFFF"`

***

### MinecraftFormatting

An enum describing color names and their Minecraft format variants.

#### Enumeration Members

##### AQUA

> **AQUA**: `"§b"`

##### BLACK

> **BLACK**: `"§0"`

##### BLUE

> **BLUE**: `"§9"`

##### BOLD

> **BOLD**: `"§l"`

##### DARK\_AQUA

> **DARK\_AQUA**: `"§3"`

##### DARK\_BLUE

> **DARK\_BLUE**: `"§1"`

##### DARK\_GRAY

> **DARK\_GRAY**: `"§8"`

##### DARK\_GREEN

> **DARK\_GREEN**: `"§2"`

##### DARK\_PURPLE

> **DARK\_PURPLE**: `"§5"`

##### DARK\_RED

> **DARK\_RED**: `"§4"`

##### GOLD

> **GOLD**: `"§6"`

##### GRAY

> **GRAY**: `"§7"`

##### GREEN

> **GREEN**: `"§a"`

##### ITALIC

> **ITALIC**: `"§o"`

##### LIGHT\_PURPLE

> **LIGHT\_PURPLE**: `"§d"`

##### MAGIC

> **MAGIC**: `"§k"`

##### RED

> **RED**: `"§c"`

##### RESET

> **RESET**: `"§r"`

##### STRIKETHROUGH

> **STRIKETHROUGH**: `"§m"`

##### UNDERLINE

> **UNDERLINE**: `"§n"`

##### WHITE

> **WHITE**: `"§f"`

##### YELLOW

> **YELLOW**: `"§e"`

## Classes

### Client

#### Client

The main API client, instantiate it with your API key.

##### Example

```typescript
import { Client as HypixelClient } from "@zikeji/hypixel";
const client = new HypixelClient("legit-api-key-heye");
```

##### Constructors

###### Constructor

> **new Client**(`key`, `options?`): [`Client`](#client)

Create a new instance of the API client.

###### Parameters

###### key

`string`

Your Hypixel API key.

###### options?

[`ClientOptions`](#clientoptions)

Any options and customizations being applied.

###### Returns

[`Client`](#client)

##### Properties

###### API

###### guild

> **guild**: [`Guild`](#guild-1)

Returns the guild by the requested ID if found.

###### Example

```typescript
const guild = await client.guild.id("553490650cf26f12ae5bac8f");
```

###### housing

> **housing**: [`Housing`](#housing-1)

Return's housing data, such as active public houses.

###### Example

```typescript
const housingData = await client.housing.active();
console.log(housingData);
```

###### player

> **player**: [`Player`](#player-3)

Returns a player's data, such as game stats.

###### Example

```typescript
const player = await client.player.uuid("20934ef9488c465180a78f861586b4cf");
console.log(player);
```

###### recentgames

> **recentgames**: [`Recentgames`](#recentgames-1)

Returns recent games of a player. A maximum of 100 games are returned and recent games are only stored for up to 3 days at this time.

###### Example

```typescript
const response = await client.recentgames.uuid("20934ef9488c465180a78f861586b4cf");
console.log(response);
```

###### resources

> **resources**: [`Resources`](#resources-1)

Relatively static Hypixel resources that don't change often at all.

###### skyblock

> **skyblock**: [`SkyBlock`](#skyblock-2)

All SkyBlock related endpoints.

###### status

> **status**: [`Status`](#status-1)

Returns online status information for given player, including game, mode and map when available.

###### Example

```typescript
const response = await client.status.uuid("20934ef9488c465180a78f861586b4cf");
console.log(response);
```

##### Methods

###### API

###### boosters()

> **boosters**(): `Promise`\<`ResultObject`\<`BoostersResponse`, \[`"success"`\]\>\>

Returns list of boosters.

###### Returns

`Promise`\<`ResultObject`\<`BoostersResponse`, \[`"success"`\]\>\>

###### Example

```typescript
const boosters = await client.boosters();
console.log(boosters);
```

###### counts()

> **counts**(): `Promise`\<`ResultObject`\<`CountsResponse`, \[`"success"`\]\>\>

Returns the current player count along with the player count of each public game + mode on the server.

###### Returns

`Promise`\<`ResultObject`\<`CountsResponse`, \[`"success"`\]\>\>

###### Example

```typescript
const response = await client.counts();
console.log(response);
```

###### leaderboards()

> **leaderboards**(): `Promise`\<`object` & `object`\>

Returns a list of the official leaderboards and their current standings for games on the network.

###### Returns

`Promise`\<`object` & `object`\>

###### Example

```typescript
const leaderboards = await client.leaderboards();
console.log(leaderboards);
```

###### punishmentstats()

> **punishmentstats**(): `Promise`\<`ResultObject`\<`PunishmentStatsResponse`, \[`"success"`\]\>\>

Returns some statistics about punishments.

###### Returns

`Promise`\<`ResultObject`\<`PunishmentStatsResponse`, \[`"success"`\]\>\>

###### Example

```typescript
const response = await client.punishmentstats();
console.log(response);
```

###### Events

###### off()

###### Call Signature

> **off**(`event`, `listener`): `this`

Remove your function listening to the "limited" event.

###### Parameters

###### event

`"limited"`

###### listener

() => `void`

###### Returns

`this`

###### Call Signature

> **off**(`event`, `listener`): `this`

Remove your function listening to the "reset" event.

###### Parameters

###### event

`"reset"`

###### listener

() => `void`

###### Returns

`this`

###### Call Signature

> **off**\<`E`\>(`event`, `listener`): `this`

Remove your function listening to the "limited" event.

###### Type Parameters

###### E

`E` *extends* keyof `ClientEvents`

###### Parameters

###### event

`E`

###### listener

`ClientEvents`\[`E`\]

###### Returns

`this`

###### on()

###### Call Signature

> **on**(`event`, `listener`): `this`

Listen to the "limited" event which emits when the client starts limiting your calls due to hitting the rate limit.

###### Parameters

###### event

`"limited"`

###### listener

(`limit`, `reset`) => `void`

###### Returns

`this`

###### Call Signature

> **on**(`event`, `listener`): `this`

Listen to the "reset" event which emits when the API rate limit resets.

###### Parameters

###### event

`"reset"`

###### listener

() => `void`

###### Returns

`this`

###### Call Signature

> **on**\<`E`\>(`event`, `listener`): `this`

Listen to the "limited" event which emits when the client starts limiting your calls due to hitting the rate limit.

###### Type Parameters

###### E

`E` *extends* keyof `ClientEvents`

###### Parameters

###### event

`E`

###### listener

`ClientEvents`\[`E`\]

###### Returns

`this`

###### once()

###### Call Signature

> **once**(`event`, `listener`): `this`

Listen once to the "limited" event which emits when the client starts limiting your calls due to hitting the rate limit.

###### Parameters

###### event

`"limited"`

###### listener

(`limit`, `reset`) => `void`

###### Returns

`this`

###### Call Signature

> **once**(`event`, `listener`): `this`

Listen once to the "reset" event which emits when the API rate limit resets.

###### Parameters

###### event

`"reset"`

###### listener

() => `void`

###### Returns

`this`

###### Call Signature

> **once**\<`E`\>(`event`, `listener`): `this`

Listen once to the "limited" event which emits when the client starts limiting your calls due to hitting the rate limit.

###### Type Parameters

###### E

`E` *extends* keyof `ClientEvents`

###### Parameters

###### event

`E`

###### listener

`ClientEvents`\[`E`\]

###### Returns

`this`

###### Custom

###### call()

> **call**\<`T`\>(`path`, `parameters?`): `Promise`\<`T` & `DefaultMeta` & `object`\>

The raw query method used by this library. You may use this if you need to use an undocumented method with this library.

###### Type Parameters

###### T

`T` *extends* `Record`\<`string`, `unknown`\>

As all of Hypixel's API methods return a basic `{ success: boolean; cause?: string; }`, this type parameter (if using Typescript) extends an interface including those.

###### Parameters

###### path

`string`

The path on the method you want to query.

###### parameters?

`Parameters` = `{}`

Any search parameters you want to use.

###### Returns

`Promise`\<`T` & `DefaultMeta` & `object`\>

###### Example

Getting the ID of a guild using the [findGuild](https://github.com/HypixelDev/PublicAPI/blob/master/Documentation/methods/findGuild.md) method.
```javascript
const response = await client.call("findGuild", { byName: "Mini Squid" });
console.log(response);
// { success: true, guild: '553490650cf26f12ae5bac8f' }
```

***

#### Guild

##### Example

```typescript
const guild = await client.guild.id("553490650cf26f12ae5bac8f");
```

##### Extends

- `Method`

##### Methods

###### API

###### id()

> **id**(`id`): `Promise`\<`ResultObject`\<`GuildResponse`, \[`"guild"`\]\>\>

Returns the guild by the requested ID if found.

###### Parameters

###### id

`string`

###### Returns

`Promise`\<`ResultObject`\<`GuildResponse`, \[`"guild"`\]\>\>

###### Example

```typescript
const guild = await client.guild.id("553490650cf26f12ae5bac8f");
```

###### name()

> **name**(`name`): `Promise`\<`ResultObject`\<`GuildResponse`, \[`"guild"`\]\>\>

Returns the guild by the requested guild name if found.

###### Parameters

###### name

`string`

###### Returns

`Promise`\<`ResultObject`\<`GuildResponse`, \[`"guild"`\]\>\>

###### Example

```typescript
const guild = await client.guild.name("Mini Squid");
```

###### player()

> **player**(`player`): `Promise`\<`ResultObject`\<`GuildResponse`, \[`"guild"`\]\>\>

Returns the guild by the requested player's UUID if found.

###### Parameters

###### player

`string`

###### Returns

`Promise`\<`ResultObject`\<`GuildResponse`, \[`"guild"`\]\>\>

###### Example

```typescript
const guild = await client.guild.player("20934ef9488c465180a78f861586b4cf");
```

***

#### GuildsResources

##### Example

```typescript
const achievements = await client.resources.guilds.achievements();
```

##### Extends

- `Method`

##### Methods

###### API

###### achievements()

> **achievements**(): `Promise`\<`object` & `object`\>

Retrieve a list of achievements a Hypixel guild can accomplish.

###### Returns

`Promise`\<`object` & `object`\>

###### Example

```typescript
const achievements = await client.resources.guilds.achievements();
```

***

#### Housing

##### Example

```typescript
const active = await client.housing.active();
```

##### Extends

- `Method`

##### Properties

###### API

###### houses

> **houses**: [`HousingHouses`](#housinghouses-1)

Returns public houses for a specific player.

###### Example

```typescript
const houses = await client.housing.houses.player('20934ef9488c465180a78f861586b4cf');
```

##### Methods

###### API

###### active()

> **active**(): `Promise`\<`FlatResultArray`\<[`$200`](@zikeji/namespaces/Paths/namespaces/V2HousingActive/namespaces/Get/namespaces/Responses.md#200)\>\>

The currently active public houses.

###### Returns

`Promise`\<`FlatResultArray`\<[`$200`](@zikeji/namespaces/Paths/namespaces/V2HousingActive/namespaces/Get/namespaces/Responses.md#200)\>\>

###### Example

```typescript
const activeHousing = await client.housing.active();
```

###### house()

> **house**(`house`): `Promise`\<`ResultObject`\<`HousingHouseResponse`, \[\], `true`\>\>

Returns information about a specific house.

###### Parameters

###### house

`string`

###### Returns

`Promise`\<`ResultObject`\<`HousingHouseResponse`, \[\], `true`\>\>

###### Example

```typescript
const houseData = await client.housing.house('20934ef9488c465180a78f861586b4cf');
```

***

#### HousingHouses

##### Example

```typescript
const houses = await client.housing.houses.player('20934ef9488c465180a78f861586b4cf');
```

##### Extends

- `Method`

##### Methods

###### API

###### player()

> **player**(`player`): `Promise`\<`FlatResultArray`\<[`$200`](@zikeji/namespaces/Paths/namespaces/V2HousingHouses/namespaces/Get/namespaces/Responses.md#200)\>\>

Returns public houses for a specific player.

###### Parameters

###### player

`string`

###### Returns

`Promise`\<`FlatResultArray`\<[`$200`](@zikeji/namespaces/Paths/namespaces/V2HousingHouses/namespaces/Get/namespaces/Responses.md#200)\>\>

###### Example

```typescript
const houses = await client.housing.houses.player('20934ef9488c465180a78f861586b4cf');
```

***

#### Player

##### Example

```typescript
const player = await client.player.uuid("20934ef9488c465180a78f861586b4cf");
```

##### Extends

- `Method`

##### Methods

###### API

###### uuid()

> **uuid**(`uuid`): `Promise`\<`ResultObject`\<`PlayerResponse`, \[`"player"`\]\>\>

Returns a player's data, such as game stats.

###### Parameters

###### uuid

`string`

###### Returns

`Promise`\<`ResultObject`\<`PlayerResponse`, \[`"player"`\]\>\>

###### Example

```typescript
const player = await client.player.uuid("20934ef9488c465180a78f861586b4cf");
console.log(player);
```

***

#### Recentgames

##### Example

```typescript
const recent = await client.recentgames.uuid("20934ef9488c465180a78f861586b4cf");
```

##### Extends

- `Method`

##### Methods

###### API

###### uuid()

> **uuid**(`uuid`): `Promise`\<`object`[] & `object`\>

Returns recent games of a player. A maximum of 100 games are returned and recent games are only stored for up to 3 days at this time.

###### Parameters

###### uuid

`string`

###### Returns

`Promise`\<`object`[] & `object`\>

###### Example

```typescript
const response = await client.recentgames.uuid("20934ef9488c465180a78f861586b4cf");
console.log(response);
```

***

#### Resources

##### Example

```typescript
const achievements = await client.resources.achievements();
```

##### Extends

- `Method`

##### Properties

###### API

###### guilds

> **guilds**: [`GuildsResources`](#guildsresources)

Guild related resources.

###### skyblock

> **skyblock**: [`SkyBlockResources`](#skyblockresources)

SkyBlock related resources.

###### vanity

> **vanity**: [`VanityResources`](#vanityresources)

SkyBlock related resources.

##### Methods

###### API

###### achievements()

> **achievements**(): `Promise`\<`object` & `object`\>

Returns all the achievements for each gamemode on the Hypixel network.

###### Returns

`Promise`\<`object` & `object`\>

###### Example

```typescript
const achievements = await client.resources.achievements();
```

###### challenges()

> **challenges**(): `Promise`\<`object` & `object`\>

Returns all the challenges for each gamemode on the Hypixel network.

###### Returns

`Promise`\<`object` & `object`\>

###### Example

```typescript
const challenges = await client.resources.challenges();
```

###### games()

> **games**(): `Promise`\<`object` & `object`\>

Returns information about Hypixel Games.

###### Returns

`Promise`\<`object` & `object`\>

###### Example

```typescript
const games = await client.resources.games();
```

###### quests()

> **quests**(): `Promise`\<`object` & `object`\>

Returns all the quests for each gamemode on the Hypixel network.

###### Returns

`Promise`\<`object` & `object`\>

###### Example

```typescript
const quests = await client.resources.quests();
```

***

#### SkyBlock

##### Example

```typescript
const products = await client.skyblock.bazaar();
```

##### Extends

- `Method`

##### Properties

###### API

###### auction

> **auction**: [`SkyBlockAuction`](#skyblockauction-1)

Returns SkyBlock auctions by either player, profile or auction uuid. Only "active" auctions are returned, these are auctions that are still open or that have not had all bids/items claimed.

###### Example

```typescript
let auctions = await client.skyblock.auction.player("347ef6c1daac45ed9d1fa02818cf0fb6");
auctions = await client.skyblock.auction.profile("347ef6c1daac45ed9d1fa02818cf0fb6");
auctions = await client.skyblock.auction.uuid("409a1e0f261a49849493278d6cd9305a");
```

###### auctions

> **auctions**: [`SkyBlockAuctions`](#skyblockauctions-1)

Returns SkyBlock auctions that are currently active in the in-game Auction House.

###### Example

```typescript
const { auctions } = await client.skyblock.auctions.page(0);
```

###### bingo

> **bingo**: [`SkyBlockBingo`](#skyblockbingo-1)

Bingo data for participated events of the provided player.

###### Example

```typescript
const bingoEvents = await client.skyblock.bingo.uuid("20934ef9488c465180a78f861586b4cf");
```

###### garden

> **garden**: [`SkyBlockGarden`](#skyblockgarden-1)

Get SkyBlock garden data.

###### Example

```typescript
const garden = await client.skyblock.garden.profile('347ef6c1daac45ed9d1fa02818cf0fb6');
```

###### museum

> **museum**: [`SkyBlockMuseum`](#skyblockmuseum-1)

Get SkyBlock museum data.

###### Example

```typescript
const museum = await client.skyblock.museum.profile('347ef6c1daac45ed9d1fa02818cf0fb6');
```

###### profiles

> **profiles**: [`SkyBlockProfiles`](#skyblockprofiles-1)

Returns an array SkyBlock profile's data, such as stats, objectives etc. The data returned can differ depending on the players in-game API settings. The request takes a player UUID.

###### Example

```typescript
const profiles = await client.skyblock.profiles.uuid("20934ef9488c465180a78f861586b4cf");
```

##### Methods

###### API

###### auctions\_ended()

> **auctions\_ended**(): `Promise`\<`ResultArray`\<`SkyblockAuctionsEndedResponse`, `"auctions"`\>\>

Returns SkyBlock auctions which ended in the last 60 seconds (More precisely, whatever time is defined in the "Cache-Control" header of the response).

###### Returns

`Promise`\<`ResultArray`\<`SkyblockAuctionsEndedResponse`, `"auctions"`\>\>

###### Example

```typescript
const { auctions } = await client.skyblock.auctions_ended();
```

###### bazaar()

> **bazaar**(): `Promise`\<`ResultObject`\<`SkyblockBazaarResponse`, \[`"products"`\]\>\>

Returns the list of [products](https://github.com/HypixelDev/PublicAPI/blob/master/Documentation/methods/skyblock/bazaar.md#product-description) along with their sell summary, buy summary and quick status.

###### Returns

`Promise`\<`ResultObject`\<`SkyblockBazaarResponse`, \[`"products"`\]\>\>

###### Example

```typescript
const products = await client.skyblock.bazaar();
```

###### firesales()

> **firesales**(): `Promise`\<[`SkyBlockFireSale`](@zikeji/namespaces/Components/namespaces/Schemas.md#skyblockfiresale)[] & `object`\>

Retrieve the currently active or upcoming Fire Sales for SkyBlock.

###### Returns

`Promise`\<[`SkyBlockFireSale`](@zikeji/namespaces/Components/namespaces/Schemas.md#skyblockfiresale)[] & `object`\>

###### Example

```typescript
const sales = await client.skyblock.firesales();
```

###### news()

> **news**(): `Promise`\<`ResultArray`\<`SkyblockNewsResponse`, `"items"`\>\>

Returns SkyBlock news, including a title, description and a thread.

###### Returns

`Promise`\<`ResultArray`\<`SkyblockNewsResponse`, `"items"`\>\>

###### Example

```typescript
const news = await client.skyblock.news();
```

###### profile()

> **profile**(`profile`): `Promise`\<`ResultObject`\<`SkyblockProfileResponse`, \[`"profile"`\]\>\>

Returns a SkyBlock profile's data, such as stats, objectives etc. The data returned can differ depending on the players in-game API settings.

###### Parameters

###### profile

`string`

###### Returns

`Promise`\<`ResultObject`\<`SkyblockProfileResponse`, \[`"profile"`\]\>\>

###### Example

```typescript
const news = await client.skyblock.profile("20934ef9488c465180a78f861586b4cf");
```

***

#### SkyBlockAuction

##### Example

```typescript
const auctions = await client.skyblock.auctions.player("347ef6c1daac45ed9d1fa02818cf0fb6");
```

##### Extends

- `Method`

##### Methods

###### API

###### player()

> **player**(`player`): `Promise`\<`SkyBlockAuction`[] & `object`\>

Returns SkyBlock auctions by either player, profile or auction uuid. Only "active" auctions are returned, these are auctions that are still open or that have not had all bids/items claimed.

###### Parameters

###### player

`string`

###### Returns

`Promise`\<`SkyBlockAuction`[] & `object`\>

###### Example

```typescript
const auctions = await client.skyblock.auction.player("347ef6c1daac45ed9d1fa02818cf0fb6");
```

###### profile()

> **profile**(`profile`): `Promise`\<`SkyBlockAuction`[] & `object`\>

Returns SkyBlock auctions by either player, profile or auction uuid. Only "active" auctions are returned, these are auctions that are still open or that have not had all bids/items claimed.

###### Parameters

###### profile

`string`

###### Returns

`Promise`\<`SkyBlockAuction`[] & `object`\>

###### Example

```typescript
const auctions = await client.skyblock.auction.profile("347ef6c1daac45ed9d1fa02818cf0fb6");
```

###### uuid()

> **uuid**(`uuid`): `Promise`\<`SkyBlockAuction`[] & `object`\>

Returns SkyBlock auctions by either player, profile or auction uuid. Only "active" auctions are returned, these are auctions that are still open or that have not had all bids/items claimed.

###### Parameters

###### uuid

`string`

###### Returns

`Promise`\<`SkyBlockAuction`[] & `object`\>

###### Example

```typescript
const auctions = await client.skyblock.auction.uuid("409a1e0f261a49849493278d6cd9305a");
```

***

#### SkyBlockAuctions

##### Example

```typescript
const {auctions} = await client.skyblock.auctions.page(0);
```

##### Extends

- `Method`

##### Methods

###### API

###### page()

> **page**(`page?`): `Promise`\<`ResultObject`\<`SkyblockAuctionsResponse`, \[`"success"`\]\>\>

Returns SkyBlock auctions that are currently active in the in-game Auction House.

###### Parameters

###### page?

`number` = `0`

###### Returns

`Promise`\<`ResultObject`\<`SkyblockAuctionsResponse`, \[`"success"`\]\>\>

###### Example

```typescript
const { auctions } = await client.skyblock.auctions.page(0);
```

***

#### SkyBlockBingo

##### Example

```typescript
const bingoEvents = await client.skyblock.bingo.uuid("20934ef9488c465180a78f861586b4cf");
```

##### Extends

- `Method`

##### Methods

###### API

###### uuid()

> **uuid**(`uuid`): `Promise`\<`object`[] & `object`\>

Bingo data for participated events of the provided player.

###### Parameters

###### uuid

`string`

###### Returns

`Promise`\<`object`[] & `object`\>

###### Example

```typescript
const bingoEvents = await client.skyblock.bingo.uuid("20934ef9488c465180a78f861586b4cf");
```

***

#### SkyBlockGarden

##### Example

```typescript
const garden = await client.skyblock.gard.profile("20934ef9488c465180a78f861586b4cf");
```

##### Extends

- `Method`

##### Methods

###### API

###### profile()

> **profile**(`uuid`): `Promise`\<[`SkyBlockGarden`](@zikeji/namespaces/Components/namespaces/Schemas.md#skyblockgarden) & `object`\>

SkyBlock garden data for the provided profile.

###### Parameters

###### uuid

`string`

###### Returns

`Promise`\<[`SkyBlockGarden`](@zikeji/namespaces/Components/namespaces/Schemas.md#skyblockgarden) & `object`\>

###### Example

```typescript
const garden = await client.skyblock.garden.profile("20934ef9488c465180a78f861586b4cf");
```

***

#### SkyBlockMuseum

##### Example

```typescript
const museum = await client.skyblock.museum.profile("20934ef9488c465180a78f861586b4cf");
```

##### Extends

- `Method`

##### Methods

###### API

###### profile()

> **profile**(`uuid`): `Promise`\<\{ `meta`: `OmitRespectingRemapping`\<`SkyblockMuseumResponse`, `"profile"`\> & `DefaultMeta`; \}\>

SkyBlock museum data for all members of the provided profile. The data returned can differ depending on the players in-game API settings.

###### Parameters

###### uuid

`string`

###### Returns

`Promise`\<\{ `meta`: `OmitRespectingRemapping`\<`SkyblockMuseumResponse`, `"profile"`\> & `DefaultMeta`; \}\>

###### Example

```typescript
const museum = await client.skyblock.museum.profile("20934ef9488c465180a78f861586b4cf");
```

***

#### SkyBlockProfiles

##### Example

```typescript
const profiles = await client.skyblock.profiles.uuid("20934ef9488c465180a78f861586b4cf");
```

##### Extends

- `Method`

##### Methods

###### API

###### uuid()

> **uuid**(`uuid`): `Promise`\<`ResultArray`\<`SkyblockProfilesResponse`, `"profiles"`\>\>

Returns an array SkyBlock profile's data, such as stats, objectives etc. The data returned can differ depending on the players in-game API settings. The request takes a player UUID.

###### Parameters

###### uuid

`string`

###### Returns

`Promise`\<`ResultArray`\<`SkyblockProfilesResponse`, `"profiles"`\>\>

###### Example

```typescript
const profiles = await client.skyblock.profiles.uuid("20934ef9488c465180a78f861586b4cf");
```

***

#### SkyBlockResources

##### Example

```typescript
const achievements = await client.resources.achievements();
```

##### Extends

- `Method`

##### Methods

###### API

###### bingo()

> **bingo**(): `Promise`\<`ResultObject`\<`ResourcesSkyblockBingoResponse`, \[`"success"`, `"lastUpdated"`\]\>\>

Information regarding the current bingo event and its goals.

###### Returns

`Promise`\<`ResultObject`\<`ResourcesSkyblockBingoResponse`, \[`"success"`, `"lastUpdated"`\]\>\>

###### Example

```typescript
const bingo = await client.resources.skyblock.bingo();
```

###### collections()

> **collections**(): `Promise`\<`ResultObject`\<`ResourcesSkyblockCollectionsResponse`, \[`"collections"`\]\>\>

Returns the list of ingame collections.

###### Returns

`Promise`\<`ResultObject`\<`ResourcesSkyblockCollectionsResponse`, \[`"collections"`\]\>\>

###### Example

```typescript
const collections = await client.resources.skyblock.collections();
console.log(collections.FARMING);
```

###### election()

> **election**(): `Promise`\<`ResultObject`\<`ResourcesSkyblockElectionResponse`, \[`"success"`, `"lastUpdated"`\]\>\>

Information regarding the current mayor and ongoing election in SkyBlock.

###### Returns

`Promise`\<`ResultObject`\<`ResourcesSkyblockElectionResponse`, \[`"success"`, `"lastUpdated"`\]\>\>

###### Example

```typescript
const electionInfo = await client.resources.skyblock.election();
```

###### items()

> **items**(): `Promise`\<`SkyBlockItem`[] & `object`\>

Returns the current items from the SkyBlock gamemode.

###### Returns

`Promise`\<`SkyBlockItem`[] & `object`\>

###### Example

```typescript
const items = await client.resources.skyblock.items();
```

###### skills()

> **skills**(): `Promise`\<`ResultObject`\<`ResourcesSkyblockSkillsResponse`, \[`"skills"`\]\>\>

Returns the current skills from the SkyBlock gamemode.

###### Returns

`Promise`\<`ResultObject`\<`ResourcesSkyblockSkillsResponse`, \[`"skills"`\]\>\>

###### Example

```typescript
const skills = await client.resources.skyblock.skills();
```

***

#### Status

##### Extends

- `Method`

##### Methods

###### API

###### uuid()

> **uuid**(`uuid`): `Promise`\<`object` & `object`\>

Returns online status information for given player, including game, mode and map when available.

###### Parameters

###### uuid

`string`

###### Returns

`Promise`\<`object` & `object`\>

###### Example

```typescript
const response = await client.status.uuid("20934ef9488c465180a78f861586b4cf");
console.log(response);
```

***

#### VanityResources

##### Example

```typescript
const bingo = await client.resources.vanity.companions();
```

##### Extends

- `Method`

##### Methods

###### API

###### companions()

> **companions**(): `Promise`\<`ResultObject`\<`ResourcesVanityCompanionsResponse`, \[`"success"`, `"lastUpdated"`\]\>\>

Retrieve a list of vanity companions.

###### Returns

`Promise`\<`ResultObject`\<`ResourcesVanityCompanionsResponse`, \[`"success"`, `"lastUpdated"`\]\>\>

###### Example

```typescript
const companions = await client.resources.vanity.companions();
```

###### pets()

> **pets**(): `Promise`\<`ResultObject`\<`ResourcesVanityPetsResponse`, \[`"success"`, `"lastUpdated"`\]\>\>

Retrieve a list of vanity pets.

###### Returns

`Promise`\<`ResultObject`\<`ResourcesVanityPetsResponse`, \[`"success"`, `"lastUpdated"`\]\>\>

###### Example

```typescript
const pets = await client.resources.vanity.pets();
```

### Other

#### GenericHTTPError

##### Extends

- `Error`

##### Constructors

###### Constructor

> **new GenericHTTPError**(`code`, `message`): [`GenericHTTPError`](#generichttperror)

###### Parameters

###### code

`number`

###### message

`string`

###### Returns

[`GenericHTTPError`](#generichttperror)

###### Overrides

`Error.constructor`

##### Properties

###### code

> **code**: `number`

The status code of the response

***

#### InvalidKeyError

##### Extends

- `Error`

##### Constructors

###### Constructor

> **new InvalidKeyError**(`message`): [`InvalidKeyError`](#invalidkeyerror)

###### Parameters

###### message

`string`

###### Returns

[`InvalidKeyError`](#invalidkeyerror)

###### Overrides

`Error.constructor`

***

#### RateLimitError

##### Extends

- `Error`

##### Constructors

###### Constructor

> **new RateLimitError**(`message`): [`RateLimitError`](#ratelimiterror)

Ignore this for code coverage as reproducing a real rate limit error is difficult.

###### Parameters

###### message

`string`

###### Returns

[`RateLimitError`](#ratelimiterror)

###### Overrides

`Error.constructor`

## Interfaces

### BasicCache

If you want built in caching, implementing these methods (or utilitizing an library that includes these methods) is a must. Refer to the [cache](https://node-hypixel.zikeji.com/guide/cache) guide.

#### Methods

##### get()

> **get**\<`T`\>(`key`): `Promise`\<`T` & `DefaultMeta` \| `undefined`\>

###### Type Parameters

###### T

`T`

###### Parameters

###### key

`string`

###### Returns

`Promise`\<`T` & `DefaultMeta` \| `undefined`\>

##### set()

> **set**\<`T`\>(`key`, `value`): `Promise`\<`void`\>

###### Type Parameters

###### T

`T`

###### Parameters

###### key

`string`

###### value

`T` & `DefaultMeta`

###### Returns

`Promise`\<`void`\>

***

### BedwarsLevelInfo

Describes the results of the [getBedwarsLevelInfo](#getbedwarslevelinfo) helper.

#### Properties

##### level

> **level**: `number`

##### levelInCurrentPrestige

> **levelInCurrentPrestige**: `number`

##### prestige

> **prestige**: `number`

##### prestigeColor

> **prestigeColor**: `string`

##### prestigeColorHex

> **prestigeColorHex**: `string`

##### prestigeName

> **prestigeName**: `string`

***

### ClientOptions

#### Properties

##### cache?

> `optional` **cache**: [`BasicCache`](#basiccache)

Functions you want to use for caching results. Optional.

##### retries?

> `optional` **retries**: `number`

Amount of times to retry a failed request.

###### Default

```ts
3
```

##### timeout?

> `optional` **timeout**: `number`

The time, in milliseconds, you want to wait before giving up on the method call.

###### Default

```ts
10000
```

##### userAgent?

> `optional` **userAgent**: `string`

User agent the client uses when making calls to Hypixel's API

###### Default

```ts
@zikeji/hypixel
```

***

### GuildLevel

Describes the results of the [getGuildLevel](#getguildlevel) output object.

#### Properties

##### currentExp

> **currentExp**: `number`

##### expToLevel

> **expToLevel**: `number`

##### expToNextLevel

> **expToNextLevel**: `number`

##### level

> **level**: `number`

##### preciseLevel

> **preciseLevel**: `number`

##### remainingExpToNextLevel

> **remainingExpToNextLevel**: `number`

***

### NBTCustomPotionEffect

Generally shows up on SkyBlock unique potions.

#### Properties

##### Ambient

> **Ambient**: `number`

##### Amplifier

> **Amplifier**: `number`

##### Duration

> **Duration**: `number`

##### Id

> **Id**: `number`

***

### NBTDisplay

An extremely common [NBTTag](#nbttag) property containing the name and lore that show up when you hover over the item.

#### Properties

##### color?

> `optional` **color**: `number`

##### Lore?

> `optional` **Lore**: `string`[]

##### Name?

> `optional` **Name**: `string`

***

### NBTEnch

Basic enchantment information for the inventory item.

#### Properties

##### id

> **id**: `number`

##### lvl

> **lvl**: `number`

***

### NBTExtraAttributes

Extra attributes that appear on extraAttributes property of the [NBTTag](#nbttag) property. Commonly used to describe items in more detail and their underlying settings.

#### Indexable

\[`key`: `string`\]: `string` \| `number` \| `number`[] \| \{\[`name`: `string`\]: `number`; \} \| [`NBTExtraAttributesPotionEffect`](#nbtextraattributespotioneffect)[] \| [`NBTInventory`](#nbtinventory) \| `undefined`

#### Properties

##### anvil\_uses?

> `optional` **anvil\_uses**: `number`

##### backpack\_color?

> `optional` **backpack\_color**: `string`

##### color?

> `optional` **color**: `string`

##### dungeon\_item\_level?

> `optional` **dungeon\_item\_level**: `number`

##### effects?

> `optional` **effects**: [`NBTExtraAttributesPotionEffect`](#nbtextraattributespotioneffect)[]

##### enchantments

> **enchantments**: `object`

Each key is an enchantment type and the level. e.g. "telekinesis" or "impaling"

###### Index Signature

\[`name`: `string`\]: `number`

##### greater\_backpack\_data?

> `optional` **greater\_backpack\_data**: [`NBTInventory`](#nbtinventory)

The contents of the backpack.

##### hot\_potato\_count?

> `optional` **hot\_potato\_count**: `number`

##### id

> **id**: `string`

##### jumbo\_backpack\_data?

> `optional` **jumbo\_backpack\_data**: [`NBTInventory`](#nbtinventory)

The contents of the backpack.

##### large\_backpack\_data?

> `optional` **large\_backpack\_data**: [`NBTInventory`](#nbtinventory)

The contents of the backpack.

##### medium\_backpack\_data?

> `optional` **medium\_backpack\_data**: [`NBTInventory`](#nbtinventory)

The contents of the backpack.

##### modifier?

> `optional` **modifier**: `string`

##### new\_year\_cake\_bag\_data?

> `optional` **new\_year\_cake\_bag\_data**: [`NBTInventory`](#nbtinventory)

The contents of the cake bag.

##### originTag?

> `optional` **originTag**: `string`

##### potion?

> `optional` **potion**: `string`

##### potion\_level?

> `optional` **potion\_level**: `number`

##### potion\_name?

> `optional` **potion\_name**: `string`

##### potion\_type?

> `optional` **potion\_type**: `string`

##### rarity\_upgrades?

> `optional` **rarity\_upgrades**: `number`

##### runes?

> `optional` **runes**: `object`

###### Index Signature

\[`name`: `string`\]: `number`

##### small\_backpack\_data?

> `optional` **small\_backpack\_data**: [`NBTInventory`](#nbtinventory)

The contents of the backpack.

##### splash?

> `optional` **splash**: `number`

##### timestamp?

> `optional` **timestamp**: `string`

##### uuid?

> `optional` **uuid**: `string`

***

### NBTExtraAttributesPotionEffect

If the inventory item is a potion, this property will describe the effects of that potion.

#### Properties

##### duration\_ticks

> **duration\_ticks**: `number`

##### effect

> **effect**: `string`

##### level

> **level**: `number`

***

### NBTInventoryItem

The NBT information for a slot in the inventory you are reading.

#### Properties

##### Count

> **Count**: `number`

Amount of items in this inventory slot.

##### Damage

> **Damage**: `number`

##### id

> **id**: `number`

Minecraft Item ID of this item.

##### tag?

> `optional` **tag**: [`NBTTag`](#nbttag)

NBT tag data for this item.

***

### NBTSkullOwner

If the [NBTInventoryItem](#nbtinventoryitem) is a skull type this will describe it's skull information.

#### Properties

##### ExtraProperties?

> `optional` **ExtraProperties**: `object`[]

If the original textures array had more than 1 element, the first will appear under Properties and the remainder will appear in this array below.

###### profileId?

> `optional` **profileId**: `number`

###### profileName?

> `optional` **profileName**: `number`

###### signatureRequired?

> `optional` **signatureRequired**: `boolean`

###### textures

> **textures**: `object`

###### textures.SKIN

> **SKIN**: `object`

###### textures.SKIN.url

> **url**: `string`

Minecraft CDN link to the texture.

###### timestamp?

> `optional` **timestamp**: `number`

##### Id

> **Id**: `string`

##### Properties

> **Properties**: \{ `profileId?`: `number`; `profileName?`: `number`; `signatureRequired?`: `boolean`; `textures`: \{ `SKIN`: \{ `url`: `string`; \}; \}; `timestamp?`: `number`; \} \| `null`

***

### NBTTag

If an inventory slot contains tag data, this interface describes possible values commonly seen in observations of the inventory data.

#### Properties

##### CustomPotionEffects?

> `optional` **CustomPotionEffects**: [`NBTCustomPotionEffect`](#nbtcustompotioneffect)[]

##### display?

> `optional` **display**: [`NBTDisplay`](#nbtdisplay)

##### ench?

> `optional` **ench**: [`NBTEnch`](#nbtench)[]

##### ExtraAttributes?

> `optional` **ExtraAttributes**: [`NBTExtraAttributes`](#nbtextraattributes)

##### HideFlags?

> `optional` **HideFlags**: `number`

##### SkullOwner?

> `optional` **SkullOwner**: [`NBTSkullOwner`](#nbtskullowner)

##### Unbreakable?

> `optional` **Unbreakable**: `number`

***

### NetworkLevel

Describes the results from a [getNetworkLevel](#getnetworklevel) function call.

#### Properties

##### currentExp

> **currentExp**: `number`

##### expToLevel

> **expToLevel**: `number`

##### expToNextLevel

> **expToNextLevel**: `number`

##### level

> **level**: `number`

##### preciseLevel

> **preciseLevel**: `number`

##### remainingExpToNextLevel

> **remainingExpToNextLevel**: `number`

***

### PlayerRank

Describes the results from the [getPlayerRank](#getplayerrank) helper.

#### Properties

##### cleanName

> **cleanName**: `string`

Cleaned up version of the name.

##### cleanPrefix

> **cleanPrefix**: `string`

The chat prefix _without_ Minecraft formatting codes.

##### colorCode

> **colorCode**: [`MinecraftFormatting`](#minecraftformatting)

The Minecraft formatting color code of this rank.

##### colorHex

> **colorHex**: [`MinecraftColorAsHex`](#minecraftcolorashex)

The hex value of the color code.

##### customPlusColor?

> `optional` **customPlusColor**: [`MinecraftFormatting`](#minecraftformatting)

If they have a custom color for the pluses in their rank (++).
**Note:** this can be set when the player isn't MVP++. If you want to use this value, be sure to check if the rank is SUPERSTAR (MVP++).

##### customPlusColorHex?

> `optional` **customPlusColorHex**: [`MinecraftColorAsHex`](#minecraftcolorashex)

Same as customPlusColor, but the hex version of the color.

##### customRankColor?

> `optional` **customRankColor**: [`MinecraftFormatting`](#minecraftformatting)

If they have a custom color for their rank.
**Note:** this can be set when the player isn't MVP++. If you want to use this value, be sure to check if the rank is SUPERSTAR (MVP++).

##### customRankColorHex?

> `optional` **customRankColorHex**: [`MinecraftColorAsHex`](#minecraftcolorashex)

Same as customRankColor, but the hex version of the color.

##### name

> **name**: `string`

Name of the rank as it appears in the data.

##### prefix

> **prefix**: `string`

The chat prefix with Minecraft formatting codes.

##### priority

> **priority**: `number`

The priority of this rank as it relates to other ranks.

##### staff

> **staff**: `boolean`

Whether or not this is a staff only rank.

***

### SkyBlockProfileCollection

Interface describing an individual collection.

#### Properties

##### amount

> **amount**: `number`

The amount of resources in this collection the profile has collected toward tiers.

**Note:**
If the profile is a coop and all players do not have their collection API enabled, this will only account for the amounts collected by members with their collection API enabled.

##### id

> **id**: `string`

The ID of this collection, e.g. "LOG:2"

##### maxTier

> **maxTier**: `number`

The maximum tier of this collection.

##### name

> **name**: `string`

The name of this collection, e.g. "Birch Wood"

##### nextTier?

> `optional` **nextTier**: `number`

The next tier the profile can reach. If the profile has reached the max tier, this value is omitted.

##### nextTierAmountRequired?

> `optional` **nextTierAmountRequired**: `number`

The amount required to reach the next collection tier. If the profile has reached the max tier, this value is omitted.

##### progress

> **progress**: `number`

The progress the profile is toward maxing this collection.

##### tier

> **tier**: `number`

The tier the profile has reached.

***

### SkyBlockProfileCollectionGroup

Interface that describes a collection category, e.g. "Farming"

#### Properties

##### children

> **children**: [`SkyBlockProfileCollection`](#skyblockprofilecollection)[]

The children of this collection group.

##### id

> **id**: `string`

The ID of the group, e.g. "FARMING"

##### maxedChildCollections

> **maxedChildCollections**: `number`

Collection children that the profile has reached the maximum tier of.

##### name

> **name**: `string`

The name of the group, e.g. "Farming"

##### progress

> **progress**: `number`

A number representing the percentage progress the profile is through this group, e.g. "100" or "83.33333333333334"

###### Example

```typescript
const progress = collections[0].progress;
console.log(progress);
// output:
83.33333333333334

const percent = Math.round(progress * 100) / 100;
console.log(percent);
// output:
83.33
```

##### totalCollections

> **totalCollections**: `number`

How many collections are in this collection group.

***

### SkyBlockProfileTransformedInventories

Interface used in the [SkyBlockProfileMemberWithTransformedInventories](#skyblockprofilememberwithtransformedinventories) intersection to describe the intellisense for the inventory after being transformed.

#### Properties

##### backpack\_contents?

> `optional` **backpack\_contents**: `object`

###### Index Signature

\[`key`: `string`\]: [`NBTInventory`](#nbtinventory)

##### backpack\_icons?

> `optional` **backpack\_icons**: `object`

###### Index Signature

\[`key`: `string`\]: [`NBTInventory`](#nbtinventory)

##### bag\_contents?

> `optional` **bag\_contents**: `object`

###### fishing\_bag?

> `optional` **fishing\_bag**: [`NBTInventory`](#nbtinventory)

###### potion\_bag?

> `optional` **potion\_bag**: [`NBTInventory`](#nbtinventory)

###### quiver?

> `optional` **quiver**: [`NBTInventory`](#nbtinventory)

###### sacks\_bag?

> `optional` **sacks\_bag**: [`NBTInventory`](#nbtinventory)

###### talisman\_bag?

> `optional` **talisman\_bag**: [`NBTInventory`](#nbtinventory)

##### ender\_chest\_contents?

> `optional` **ender\_chest\_contents**: [`NBTInventory`](#nbtinventory)

##### equipment\_contents?

> `optional` **equipment\_contents**: [`NBTInventory`](#nbtinventory)

##### inv\_armor?

> `optional` **inv\_armor**: [`NBTInventory`](#nbtinventory)

##### inv\_contents?

> `optional` **inv\_contents**: [`NBTInventory`](#nbtinventory)

##### personal\_vault\_contents?

> `optional` **personal\_vault\_contents**: [`NBTInventory`](#nbtinventory)

##### sacks\_counts

> **sacks\_counts**: `object`

###### Index Signature

\[`key`: `string`\]: `number`

##### wardrobe\_contents?

> `optional` **wardrobe\_contents**: [`NBTInventory`](#nbtinventory)

##### wardrobe\_equipped\_slots

> **wardrobe\_equipped\_slots**: `number`

***

### SkyBlockSkillInfo

#### Properties

##### description

> **description**: `string`

##### exp

> **exp**: `number`

##### expToNextLevel

> **expToNextLevel**: `number`

##### level

> **level**: `number`

##### maxLevel

> **maxLevel**: `number`

##### name

> **name**: `string`

##### totalExpToLevel

> **totalExpToLevel**: `number`

***

### SkyBlockSkillsInfo

#### Indexable

\[`key`: `string`\]: [`SkyBlockSkillInfo`](#skyblockskillinfo)

#### Properties

##### ALCHEMY

> **ALCHEMY**: [`SkyBlockSkillInfo`](#skyblockskillinfo)

##### CARPENTRY

> **CARPENTRY**: [`SkyBlockSkillInfo`](#skyblockskillinfo)

##### COMBAT

> **COMBAT**: [`SkyBlockSkillInfo`](#skyblockskillinfo)

##### DUNGEONEERING

> **DUNGEONEERING**: [`SkyBlockSkillInfo`](#skyblockskillinfo)

As official API support does not exist for this skill, this will always return level 0.

##### ENCHANTING

> **ENCHANTING**: [`SkyBlockSkillInfo`](#skyblockskillinfo)

##### FARMING

> **FARMING**: [`SkyBlockSkillInfo`](#skyblockskillinfo)

##### FISHING

> **FISHING**: [`SkyBlockSkillInfo`](#skyblockskillinfo)

##### FORAGING

> **FORAGING**: [`SkyBlockSkillInfo`](#skyblockskillinfo)

##### MINING

> **MINING**: [`SkyBlockSkillInfo`](#skyblockskillinfo)

##### RUNECRAFTING

> **RUNECRAFTING**: [`SkyBlockSkillInfo`](#skyblockskillinfo)

##### SOCIAL

> **SOCIAL**: [`SkyBlockSkillInfo`](#skyblockskillinfo)

As official API support does not exist for this skill, this will always return level 0.

##### TAMING

> **TAMING**: [`SkyBlockSkillInfo`](#skyblockskillinfo)

***

### SkyWarsLevelInfo

Interface describing the results from the [getSkyWarsLevelInfo](#getskywarslevelinfo) function.

#### Extended by

- [`SkyWarsLevelInfoAndPrestige`](#skywarslevelinfoandprestige)

#### Properties

##### currentExp

> **currentExp**: `number`

##### expToLevel

> **expToLevel**: `number`

##### expToNextLevel

> **expToNextLevel**: `number`

##### level

> **level**: `number`

##### preciseLevel

> **preciseLevel**: `number`

##### remainingExpToNextLevel

> **remainingExpToNextLevel**: `number`

***

### SkyWarsLevelInfoAndPrestige

This interface is returned by [getSkyWarsLevelInfo](#getskywarslevelinfo) if you passed true as the second parameter.

#### Extends

- [`SkyWarsLevelInfo`](#skywarslevelinfo)

#### Properties

##### currentExp

> **currentExp**: `number`

###### Inherited from

[`SkyWarsLevelInfo`](#skywarslevelinfo).[`currentExp`](#currentexp-2)

##### expToLevel

> **expToLevel**: `number`

###### Inherited from

[`SkyWarsLevelInfo`](#skywarslevelinfo).[`expToLevel`](#exptolevel-2)

##### expToNextLevel

> **expToNextLevel**: `number`

###### Inherited from

[`SkyWarsLevelInfo`](#skywarslevelinfo).[`expToNextLevel`](#exptonextlevel-3)

##### expToNextPrestige?

> `optional` **expToNextPrestige**: `number`

##### expToPrestige

> **expToPrestige**: `number`

##### level

> **level**: `number`

###### Inherited from

[`SkyWarsLevelInfo`](#skywarslevelinfo).[`level`](#level-5)

##### nextPrestige?

> `optional` **nextPrestige**: [`SkyWarsPrestige`](#skywarsprestige)

##### preciseLevel

> **preciseLevel**: `number`

###### Inherited from

[`SkyWarsLevelInfo`](#skywarslevelinfo).[`preciseLevel`](#preciselevel-2)

##### prestige

> **prestige**: [`SkyWarsPrestige`](#skywarsprestige)

##### progressToNextPrestige?

> `optional` **progressToNextPrestige**: `number`

##### remainingExpToNextLevel

> **remainingExpToNextLevel**: `number`

###### Inherited from

[`SkyWarsLevelInfo`](#skywarslevelinfo).[`remainingExpToNextLevel`](#remainingexptonextlevel-2)

##### remainingExpToNextPrestige?

> `optional` **remainingExpToNextPrestige**: `number`

***

### SkyWarsPrestige

Describes the properties of a Prestige object returned by [getSkyWarsPrestigeForLevel](#getskywarsprestigeforlevel).

#### Properties

##### color

> **color**: [`MinecraftFormatting`](#minecraftformatting)

##### colorHex

> **colorHex**: [`MinecraftColorAsHex`](#minecraftcolorashex)

##### icon

> **icon**: `object`

###### data

> **data**: `number`

###### material

> **material**: `string`

###### typeId

> **typeId**: `number`

###### version

> **version**: `number`

##### id

> **id**: `string`

##### minimumLevel

> **minimumLevel**: `number`

##### name

> **name**: `string`

##### textIcon

> **textIcon**: `string` \| `null`

## Type Aliases

### NBTInventory

> **NBTInventory** = ([`NBTInventoryItem`](#nbtinventoryitem) \| `null`)[]

Array of inventory slots. If that slot is empty it will be null, otherwise it will be an object containing the data.

***

### SkyBlockProfileCollections

> **SkyBlockProfileCollections** = [`SkyBlockProfileCollectionGroup`](#skyblockprofilecollectiongroup)[]

***

### SkyBlockProfileMemberWithTransformedInventories

> **SkyBlockProfileMemberWithTransformedInventories** = `Omit`\<`SkyBlockProfileMember`, `"inventory"`\> & `object`

This type is a intersection type omitting the default inventory types and including the transformed inventory types.

#### Type Declaration

##### inventory

> **inventory**: [`SkyBlockProfileTransformedInventories`](#skyblockprofiletransformedinventories)

## Variables

### SkyWarsPrestiges

> `const` **SkyWarsPrestiges**: [`SkyWarsPrestige`](#skywarsprestige)[]

An array of the prestiges in SkyWars, listed in order of lowest to highest.

## Functions

### Helper

#### getBedwarsLevelInfo()

> **getBedwarsLevelInfo**(`data`): [`BedwarsLevelInfo`](#bedwarslevelinfo)

Calculates the BedWars prestige and level of a player and returns a [BedwarsLevelInfo](#bedwarslevelinfo) interface.

##### Parameters

###### data

`number` | `object` & `Player`

##### Returns

[`BedwarsLevelInfo`](#bedwarslevelinfo)

***

#### getExpFromNetworkLevel()

> **getExpFromNetworkLevel**(`level`): `number`

Calculates the total EXP required for a specific network level.

##### Parameters

###### level

`number`

Level you're getting the EXP required for. Can be a float or an integer.

##### Returns

`number`

***

#### getGuildLevel()

> **getGuildLevel**(`data`): [`GuildLevel`](#guildlevel)

Calculates the guild level and returns a [GuildLevel](#guildlevel) interface.

##### Parameters

###### data

The guild object or the raw EXP number.

`number` | `object` & `Guild`

##### Returns

[`GuildLevel`](#guildlevel)

***

#### getNetworkLevel()

> **getNetworkLevel**(`data`): [`NetworkLevel`](#networklevel)

Calculates the network level and returns a [NetworkLevel](#networklevel) interface.

##### Parameters

###### data

The player object or the raw EXP number.

`number` | `object` & `Player`

##### Returns

[`NetworkLevel`](#networklevel)

***

#### getPlayerRank()

> **getPlayerRank**(`player`, `onlyPackages?`): [`PlayerRank`](#playerrank)

Get an [PlayerRank](#playerrank) object describing the player's rank in more detail without the need to figure out how to parse it yourself.

##### Parameters

###### player

`NonNullable`\<`object` & `Player`\>

The result of `client.player.uuid()`.

###### onlyPackages?

`boolean` = `false`

Whether to ignore their staff / youtube rank and only get their donor rank.

##### Returns

[`PlayerRank`](#playerrank)

***

#### getSkyBlockProfileMemberCollections()

> **getSkyBlockProfileMemberCollections**(`profile`, `collections`): `false` \| [`SkyBlockProfileCollections`](#skyblockprofilecollections)

This helper takes a profile and scans all of it's member's to get the most accurate collection information possible. Returns false is none of the members of the profile had their collections API enabled.

##### Parameters

###### profile

`Pick`\<`NonNullable`\<`SkyBlockProfile`\>, `"members"`\>

The SkyBlock profile object you want to check.

###### collections

`object` & `object` & `object`

The collections resource object.

##### Returns

`false` \| [`SkyBlockProfileCollections`](#skyblockprofilecollections)

***

#### getSkyBlockProfileMemberSkills()

> **getSkyBlockProfileMemberSkills**(`profileMember`, `skills`): `false` \| [`SkyBlockSkillsInfo`](#skyblockskillsinfo)

This helper takes a profile member and converts raw skill EXP to skill levels using the skills resources. Returns false is none of the profile member does not have their skills API enabled.

##### Parameters

###### profileMember

`SkyBlockProfileMember`

The SkyBlock profile member object you want to check.

###### skills

`object` & `object`

The skills resource object.

##### Returns

`false` \| [`SkyBlockSkillsInfo`](#skyblockskillsinfo)

***

#### getSkyWarsLevelInfo()

##### Call Signature

> **getSkyWarsLevelInfo**(`data`): [`SkyWarsLevelInfo`](#skywarslevelinfo)

Get SkyWars level information from a player object or raw experience value.

###### Parameters

###### data

A player object or the raw experience value.

`number` | `object` & `Player`

###### Returns

[`SkyWarsLevelInfo`](#skywarslevelinfo)

##### Call Signature

> **getSkyWarsLevelInfo**(`data`, `includePrestige`): [`SkyWarsLevelInfoAndPrestige`](#skywarslevelinfoandprestige)

Get SkyWars level information from a player object or raw experience value.

###### Parameters

###### data

A player object or the raw experience value.

`number` | `object` & `Player`

###### includePrestige

`true`

Whether or not to return the [SkyWarsPrestige](#skywarsprestige) object.

###### Returns

[`SkyWarsLevelInfoAndPrestige`](#skywarslevelinfoandprestige)

##### Call Signature

> **getSkyWarsLevelInfo**(`data`, `includePrestige`): [`SkyWarsLevelInfo`](#skywarslevelinfo)

Get SkyWars level information from a player object or raw experience value.

###### Parameters

###### data

A player object or the raw experience value.

`number` | `object` & `Player`

###### includePrestige

`false`

Whether or not to return the [SkyWarsPrestige](#skywarsprestige) object.

###### Returns

[`SkyWarsLevelInfo`](#skywarslevelinfo)

***

#### getSkyWarsPrestigeForLevel()

> **getSkyWarsPrestigeForLevel**(`level`): [`SkyWarsPrestige`](#skywarsprestige)

Returns a [SkyWarsPrestige](#skywarsprestige) object for the level you supplied.

##### Parameters

###### level

`number`

The level of the player you are checking.

##### Returns

[`SkyWarsPrestige`](#skywarsprestige)

***

#### removeMinecraftFormatting()

> **removeMinecraftFormatting**(`value`): `string`

This helper will take a string and remove any of Minecraft's formatting sequence. Useful when parsing item lore or similar elements.

##### Parameters

###### value

`string`

Any string with minecraft formatting.

##### Returns

`string`

***

#### romanize()

> **romanize**(`value`): `string`

Quick helper function that will help you convert a number to a roman numeral for display purposes.

##### Parameters

###### value

`number`

The number you want to convert to a roman numeral.

##### Returns

`string`

***

#### totalExpToSkyWarsLevel()

> **totalExpToSkyWarsLevel**(`level`): `number`

Returns the total amount of exp it takes to get to a certain level.

##### Parameters

###### level

`number`

The level of the player.

##### Returns

`number`

***

#### transformItemData()

> **transformItemData**(`value`): `Promise`\<[`NBTInventory`](#nbtinventory)\>

This helper will transform NBT data into a typed object using prismarine-nbt. It will also transform any backpacks/bags with item data so you can explore those as well.

##### Parameters

###### value

A Base64 item data string, NBT byte array, or buffer.

`string` | `number`[] | `Buffer`\<`ArrayBufferLike`\>

##### Returns

`Promise`\<[`NBTInventory`](#nbtinventory)\>

***

#### transformSkyBlockProfileMemberInventories()

> **transformSkyBlockProfileMemberInventories**(`member`): `Promise`\<[`SkyBlockProfileMemberWithTransformedInventories`](#skyblockprofilememberwithtransformedinventories)\>

This helper will loop over all the possible inventories on a profile and run the transformSkyBlockItemData helper on them, returning the member object with the transformed properties.

##### Parameters

###### member

`SkyBlockProfileMember`

The profile member object that you want to transform the inventory data of.

##### Returns

`Promise`\<[`SkyBlockProfileMemberWithTransformedInventories`](#skyblockprofilememberwithtransformedinventories)\>
