[**@zikeji/hypixel**](../../../../../../../../index.md)

***

[@zikeji/hypixel](../../../../../../../../index.md) / [Paths](../../../../../index.md) / [V2SkyblockAuctions](../../../index.md) / [Get](../index.md) / Responses

# Responses

## Interfaces

### $200

#### Properties

##### auctions?

> `optional` **auctions**: [`SkyBlockAuction`](../../../../../../Components/namespaces/Schemas.md#skyblockauction)[]

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

##### lastUpdated?

> `optional` **lastUpdated**: `number`

example:
1571065561345

##### page?

> `optional` **page**: `number`

##### success?

> `optional` **success**: `boolean`

##### totalAuctions?

> `optional` **totalAuctions**: `number`

example:
31267

##### totalPages?

> `optional` **totalPages**: `number`

example:
32

## Type Aliases

### $404

> **$404** = [`MissingPage`](../../../../../../Components/namespaces/Responses.md#missingpage)

***

### $422

> **$422** = [`InvalidPage`](../../../../../../Components/namespaces/Responses.md#invalidpage)

***

### $503

> **$503** = [`NotPopulated`](../../../../../../Components/namespaces/Responses.md#notpopulated)
