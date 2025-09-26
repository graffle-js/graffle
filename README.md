# Graffle

> [!NOTE]
> Looking for `graphql-request`? It's been renamed to Graffle and the old version is available on the [`graphql-request` branch](https://github.com/graffle-js/graffle/tree/graphql-request).

<p align="center">
  <img src="https://graffle.js.org/logo.svg" width="200" alt="Graffle Logo">
</p>

<p align="center">
  Simple, type-safe GraphQL client for JavaScript.
</p>

<p align="center">
  <a href="https://graffle.js.org">Documentation</a> •
  <a href="https://graffle.js.org/guides/getting-started">Getting Started</a> •
  <a href="https://graffle.js.org/examples">Examples</a>
</p>

<p align="center">
  <a href="https://github.com/graffle-js/graffle/actions/workflows/trunk.yml">
    <img src="https://github.com/graffle-js/graffle/workflows/trunk/badge.svg" alt="CI Status">
  </a>
  <a href="https://www.npmjs.com/package/graffle">
    <img src="https://badge.fury.io/js/graffle.svg" alt="npm version">
  </a>
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
