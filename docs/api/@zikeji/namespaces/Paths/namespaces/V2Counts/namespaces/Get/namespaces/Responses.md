[**@zikeji/hypixel**](../../../../../../../../index.md)

***

[@zikeji/hypixel](../../../../../../../../index.md) / [Paths](../../../../../index.md) / [V2Counts](../../../index.md) / [Get](../index.md) / Responses

# Responses

## Interfaces

### $200

#### Properties

##### games?

> `optional` **games**: `object`

example:
{
  "GAME_TYPE": {
    "players": 2,
    "modes": {
      "mode_1": 1,
      "mode_2": 1
    }
  }
}

###### Index Signature

\[`key`: `string`\]: `unknown`

##### playerCount?

> `optional` **playerCount**: `number`

##### success?

> `optional` **success**: `boolean`

## Type Aliases

### $403

> **$403** = [`InvalidKey`](../../../../../../Components/namespaces/Responses.md#invalidkey)

***

### $429

> **$429** = [`RateLimited`](../../../../../../Components/namespaces/Responses.md#ratelimited)
