# @servlicense/sdk

## Installation

```bash
# npm
npm install @servlicense/sdk

# yarn
yarn add @servlicense/sdk

# pnpm
pnpm add @servlicense/sdk
```

## Usage

```typescript
import ServlicenseClient from "@servlicense/sdk";

async function main() {
  const client = new ServlicenseClient("https://api.servlicense.sh").withAuth({
    identifier: "2132295360259817472",
    secret: "6be29a05-b754-4fab-a490-337129bf52cf",
  });

  const isValid = await client.checkLicense(
    "8b3b3b7b-7b7b-4b7b-8b7b-7b7b7b7b7b7b"
  );
  console.log(isValid);
}
```

## License

Published under MIT - Made with ❤️ by Conner Luka Bachmann
