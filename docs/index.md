---
layout: home

hero:
  name: "@zikeji/hypixel"
  text: "Hypixel API Wrapper"
  tagline: Unopinionated async/await API wrapper for Hypixel's Public API with TypeScript support
  actions:
    - theme: brand
      text: Get Started
      link: /guide/
    - theme: alt
      text: API Reference
      link: /api/
    - theme: alt
      text: View on GitHub
      link: https://github.com/zikeji/node-hypixel

features:
  - icon: 📝
    title: TypeScript Support
    details: Complete with typed interfaces for all API responses and IntelliSense support
  - icon: ⚡
    title: Rate Limit Handling
    details: Built-in rate-limit handling to ensure your application stays within API limits
  - icon: 💾
    title: Flexible Caching
    details: Support for custom cache implementations to optimize API usage
  - icon: 🛠️
    title: Helper Functions
    details: Useful helpers for player ranks, levels, and Skyblock data processing
---

## Quick Start

### Installation

```bash
npm install @zikeji/hypixel
```

### Basic Usage

```javascript
const { Client } = require("@zikeji/hypixel");
const client = new Client("YOUR_API_KEY");

(async () => {
  // Get player status
  const status = await client.status.uuid("20934ef9488c465180a78f861586b4cf");
  console.log(status);
  
  // Get punishment stats
  const stats = await client.punishmentstats();
  console.log(stats);
})();
```

## Features

- **Full TypeScript Support**: Get autocomplete and type checking out of the box
- **Rate Limiting**: Automatic rate limit handling with queue management
- **Caching**: Flexible cache support with custom implementations
- **Helpers**: Various helper functions for common tasks
- **Modern**: Built with async/await and ES modules support

## Documentation

- [Guide](/guide/) - Learn how to use the library
- [API Reference](/api/) - Complete API documentation
- [GitHub](https://github.com/zikeji/node-hypixel) - Source code and issues

## License

MIT License - see [LICENSE](https://github.com/zikeji/node-hypixel/blob/main/LICENSE) for details.
