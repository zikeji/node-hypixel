[**@zikeji/hypixel**](../../../../../../../../index.md)

***

[@zikeji/hypixel](../../../../../../../../index.md) / [Paths](../../../../../index.md) / [V2Player](../../../index.md) / [Get](../index.md) / Responses

# Responses

## Interfaces

### $200

#### Properties

##### player?

> `optional` **player**: `object`

###### displayname?

> `optional` **displayname**: `string` \| `null`

###### firstLogin?

> `optional` **firstLogin**: `number` \| `null`

###### lastLogin?

> `optional` **lastLogin**: `number` \| `null`

###### lastLogout?

> `optional` **lastLogout**: `number` \| `null`

###### monthlyPackageRank?

> `optional` **monthlyPackageRank**: `"NONE"` \| `"SUPERSTAR"`

###### newPackageRank?

> `optional` **newPackageRank**: `"MVP_PLUS"` \| `"MVP"` \| `"VIP_PLUS"` \| `"VIP"` \| `"NONE"`

###### packageRank?

> `optional` **packageRank**: `"MVP_PLUS"` \| `"MVP"` \| `"VIP_PLUS"` \| `"VIP"` \| `"NONE"`

###### rank?

> `optional` **rank**: `"ADMIN"` \| `"MODERATOR"` \| `"HELPER"` \| `"NORMAL"`

###### stats?

> `optional` **stats**: \{\[`key`: `string`\]: `unknown`; \} \| `null`

###### uuid?

> `optional` **uuid**: `string`

example:
3fa85f6457174562b3fc2c963f66afa6

##### success?

> `optional` **success**: `boolean`

example:
true

## Type Aliases

### $400

> **$400** = [`DataMissing`](../../../../../../Components/namespaces/Responses.md#datamissing)

***

### $403

> **$403** = [`InvalidKey`](../../../../../../Components/namespaces/Responses.md#invalidkey)

***

### $429

> **$429** = [`RateLimited`](../../../../../../Components/namespaces/Responses.md#ratelimited)
