[**@zikeji/hypixel**](../../../../../../../../index.md)

***

[@zikeji/hypixel](../../../../../../../../index.md) / [Paths](../../../../../index.md) / [V2ResourcesSkyblockBingo](../../../index.md) / [Get](../index.md) / Responses

# Responses

## Interfaces

### $200

#### Properties

##### end

> **end**: `number`

The end time of the current bingo event in unix milliseconds
example:
1709874000000

##### goals

> **goals**: `object`[]

The goals for the current bingo event, as well as their progress

###### fullLore?

> `optional` **fullLore**: `unknown`[]

The full description of this goal

###### id

> **id**: `string`

The backend ID for this goal

###### lore?

> `optional` **lore**: `string`

Description of this goal

###### name

> **name**: `string`

The user friendly display name for this goal

###### progress?

> `optional` **progress**: `number`

The global progress of this goal

###### requiredAmount?

> `optional` **requiredAmount**: `number`

The required amount for this specific goal

###### tiers?

> `optional` **tiers**: `number`[]

The tiers of this goal, if a global goal

##### id

> **id**: `number`

The current bingo event ID, increments by 1 for each bingo hosted
example:
27

##### lastUpdated

> **lastUpdated**: `number`

The unix milliseconds timestamp of the last time this data was updated

##### modifier

> **modifier**: `"NORMAL"` \| `"EXTREME"` \| `"SECRET"`

The modifier for the current bingo event
example:
NORMAL

##### name

> **name**: `string`

The display name for the current bingo event
example:
March 2024

##### start

> **start**: `number`

The start time of the current bingo event in unix milliseconds
example:
1709269200000

##### success

> **success**: `boolean`
