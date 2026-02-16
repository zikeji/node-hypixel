[**@zikeji/hypixel**](../../../../../../../../index.md)

***

[@zikeji/hypixel](../../../../../../../../index.md) / [Paths](../../../../../index.md) / [V2SkyblockBingo](../../../index.md) / [Get](../index.md) / Responses

# Responses

## Interfaces

### $200

#### Properties

##### events?

> `optional` **events**: `object`[]

###### completed\_goals

> **completed\_goals**: `string`[]

The completed goal IDs

###### key

> **key**: `number`

The id for this event
example:
2

###### points

> **points**: `number`

The amount of points earned
example:
117

##### success?

> `optional` **success**: `boolean`

***

### $404

#### Properties

##### cause?

> `optional` **cause**: `string`

example:
No bingo data could be found

##### success?

> `optional` **success**: `boolean`

example:
false

## Type Aliases

### $400

> **$400** = [`DataMissing`](../../../../../../Components/namespaces/Responses.md#datamissing)

***

### $403

> **$403** = [`InvalidKey`](../../../../../../Components/namespaces/Responses.md#invalidkey)

***

### $422

> **$422** = [`MalformedData`](../../../../../../Components/namespaces/Responses.md#malformeddata)

***

### $429

> **$429** = [`RateLimited`](../../../../../../Components/namespaces/Responses.md#ratelimited)
