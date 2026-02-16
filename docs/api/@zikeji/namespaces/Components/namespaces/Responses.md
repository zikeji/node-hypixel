[**@zikeji/hypixel**](../../../../index.md)

***

[@zikeji/hypixel](../../../../index.md) / [Components](../index.md) / Responses

# Responses

## Interfaces

### DataMissing

#### Properties

##### cause?

> `optional` **cause**: `string`

example:
Missing one or more fields [...]

##### success?

> `optional` **success**: `boolean`

example:
false

***

### InvalidKey

#### Properties

##### cause?

> `optional` **cause**: `string`

example:
Invalid API key

##### success?

> `optional` **success**: `boolean`

example:
false

***

### InvalidPage

#### Properties

##### cause?

> `optional` **cause**: `string`

example:
Invalid page

##### success?

> `optional` **success**: `boolean`

example:
false

***

### MalformedData

#### Properties

##### cause?

> `optional` **cause**: `string`

example:
Malformed UUID

##### success?

> `optional` **success**: `boolean`

example:
false

***

### MissingPage

#### Properties

##### cause?

> `optional` **cause**: `string`

example:
Page not found

##### success?

> `optional` **success**: `boolean`

example:
false

***

### NoResult

#### Properties

##### cause?

> `optional` **cause**: `string`

example:
No result was found

##### success?

> `optional` **success**: `boolean`

example:
false

***

### NotPopulated

#### Properties

##### cause?

> `optional` **cause**: `string`

example:
Leaderboard data has not yet been populated

##### success?

> `optional` **success**: `boolean`

example:
false

***

### RateLimited

#### Properties

##### cause?

> `optional` **cause**: `string`

example:
Key throttle

##### global?

> `optional` **global**: `boolean`

When this boolean exists and is true, the throttle occurring is a global throttle applied to all users
example:
true

##### success?

> `optional` **success**: `boolean`

example:
false

##### throttle?

> `optional` **throttle**: `boolean`

example:
true
