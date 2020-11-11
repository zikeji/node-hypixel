# Player Ranks

## Introduction

The [<code class="language-javascript"><span class="token function">getPlayerRank</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>](/ts-api/#getplayerrank) helper makes extracting rank information from a `/api/player` response simple and removes the guesswork. As an additional benefit, it also provides you the hex color codes.

## Example

```typescript
import { Client as Hypixel, getPlayerRank } from "@zikeji/hypixel";
const client = new Hypixel("API_KEY");
(async () => {
  const player = await client.player.uuid("20934ef9488c465180a78f861586b4cf"); // Minikloon
  const rank = getPlayerRank(player);
  console.log(rank);
  // output:
  {
    priority: 100,
    name: 'ADMIN',
    cleanName: 'ADMIN',
    prefix: '§c[ADMIN]',
    cleanPrefix: '[ADMIN]',
    colorCode: '§c',
    colorHex: 'FF5555',
    staff: true
  }
})();
```