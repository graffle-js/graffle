# HTTP Transport

Graffle has the concept of "transports". A transport is how the request reaches the GraphQL schema for execution. This section is about the "http" transport.

<!--@include: @/guides/_example_links/transport-http.md-->

## Overview

The `http` transport implements the ["GraphQL Over HTTP" specification](https://github.com/graphql/graphql-over-http). This transport is used when you instantiate Graffle with a `URL` (or `string`) type for `schema`:

::: code-group

```ts [URL]
Graffle.create({
  schema: new URL('https://api.service.io/graphql'),
})
```

```ts [string]
Graffle.create({
  schema: 'https://api.service.io/graphql',
})
```

:::

## Configuration

<!--@include: @guides/_example_links/transport-http_RequestInput.md-->

When using this transport, you can configure `request` for most aspects of the `fetch` `RequestInit`:

```ts
graffle.create({
  request: { headers: { authorization: '...' }, mode: 'cors' },
})
```

## Anyware

Hooks are augmented in the following ways:

|           | Encode | Pack                   | Exchange  | Unpack     | Decode     |
| --------- | ------ | ---------------------- | --------- | ---------- | ---------- |
| Input     | -      | `url` `headers` `body` | `request` | `response` | `response` |
| Functions | -      | -                      | `fetch`   |            |            |
