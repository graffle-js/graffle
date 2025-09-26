> [!NOTE]
> Looking for `graphql-request`? It's been renamed to Graffle and the old version is available on the [`graphql-request` branch](https://github.com/graffle-js/graffle/tree/graphql-request).

<p align="center">
  <img src="./website/content/public/_assets/logo-dark.png" width="200" alt="Graffle Logo">
</p>

<h1 align="center">Graffle</h1>

<p align="center">
  Simple, type-safe GraphQL client for JavaScript.
</p>

<p align="center">
  <a href="https://graffle.js.org">Documentation</a> •
  <a href="https://graffle.js.org/guides/getting-started">Getting Started</a> •
  <a href="https://graffle.js.org/examples">Examples</a>
</p>

## Installation

```sh
npm install graffle@next graphql
```

## Quick Start

```ts
import { Graffle } from 'graffle'

const graffle = Graffle
  .create()
  .transport({ url: 'https://countries.trevorblades.com/graphql' })

const data = await graffle.gql`
  {
    countries {
      name
      emoji
    }
  }
`.send()
```

## Learn More

Visit **[graffle.js.org](https://graffle.js.org)** for full documentation, guides, and examples.

## License

MIT
