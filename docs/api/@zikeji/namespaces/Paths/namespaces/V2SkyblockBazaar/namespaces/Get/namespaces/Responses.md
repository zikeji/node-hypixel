[**@zikeji/hypixel**](../../../../../../../../index.md)

***

[@zikeji/hypixel](../../../../../../../../index.md) / [Paths](../../../../../index.md) / [V2SkyblockBazaar](../../../index.md) / [Get](../index.md) / Responses

# Responses

## Interfaces

### $200

#### Properties

##### lastUpdated?

> `optional` **lastUpdated**: `number`

example:
1590854517479

##### products?

> `optional` **products**: `object`

example:
{
  "INK_SACK:3": {
    "product_id": "INK_SACK:3",
    "sell_summary": [
      {
        "amount": 20569,
        "pricePerUnit": 4.2,
        "orders": 1
      },
      {
        "amount": 140326,
        "pricePerUnit": 3.8,
        "orders": 2
      }
    ],
    "buy_summary": [
      {
        "amount": 640,
        "pricePerUnit": 4.8,
        "orders": 1
      },
      {
        "amount": 640,
        "pricePerUnit": 4.9,
        "orders": 1
      },
      {
        "amount": 25957,
        "pricePerUnit": 5,
        "orders": 3
      }
    ],
    "quick_status": {
      "productId": "INK_SACK:3",
      "sellPrice": 4.2,
      "sellVolume": 409855,
      "sellMovingWeek": 8301075,
      "sellOrders": 11,
      "buyPrice": 4.99260315136572,
      "buyVolume": 1254854,
      "buyMovingWeek": 5830656,
      "buyOrders": 85
    }
  }
}

###### Index Signature

\[`key`: `string`\]: `unknown`

##### success?

> `optional` **success**: `boolean`

## Type Aliases

### $503

> **$503** = [`NotPopulated`](../../../../../../Components/namespaces/Responses.md#notpopulated)
