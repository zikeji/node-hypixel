# Getting Started

Welcome to the **@zikeji/hypixel** documentation! This library provides an unopinionated async/await API wrapper for [Hypixel's Public API](https://api.hypixel.net/) with full TypeScript support.

## Features

- **Full TypeScript Support**: Complete with typed interfaces for all API responses and IntelliSense support
- **Rate Limit Handling**: Built-in rate-limit handling to ensure your application stays within API limits
- **Flexible Caching**: Support for custom cache implementations to optimize API usage
- **Helper Functions**: Useful helpers for player ranks, levels, and Skyblock data processing
- **Modern**: Built with async/await and ES modules support

## Installation

Install the package using npm:

```bash
npm install @zikeji/hypixel
```

## Quick Start

Here's a simple example to get you started:

```javascript
const { Client } = require("@zikeji/hypixel");
const client = new Client("YOUR_API_KEY");

(async () => {
  // Get player status
  const status = await client.status.uuid("20934ef9488c465180a78f861586b4cf");
  console.log(status);
  // Output: {"online": false}
  
  // Get punishment statistics
  const stats = await client.punishmentstats();
  console.log(stats);
  // Output: {watchdog_lastMinute: 1, staff_rollingDaily: 2609, ...}
})();
```

## Getting Your API Key

To use this library, you'll need a Hypixel API key:

1. Visit [https://developer.hypixel.net/](https://developer.hypixel.net/)
2. Sign in with your Hypixel forum account
3. Generate a development key (requires periodic recreation) or apply for an app key for production use
4. Use your API key to initialize the client

## TypeScript Usage

If you're using TypeScript, you can take advantage of full type support:

```typescript
import { Client } from "@zikeji/hypixel";

const client = new Client("YOUR_API_KEY");

async function getPlayerData(uuid: string) {
  const player = await client.player.uuid(uuid);
  if (player.player) {
    console.log(`Player: ${player.player.displayname}`);
    console.log(`Level: ${player.player.networkExp}`);
  }
}
```

## Next Steps

- Learn about [caching](./advanced/cache) to optimize your API usage
- Explore the [helper functions](./helpers/player-ranks) for common tasks
- Check the [API Reference](/api/) for detailed documentation

## Support

If you encounter any issues or have questions:

- Open an issue on [GitHub](https://github.com/zikeji/node-hypixel/issues)
- Check the [API documentation](/api/) for detailed method signatures
- Review the [changelog](https://github.com/zikeji/node-hypixel/blob/main/CHANGELOG.md) for recent updates