# Transport HTTP

<!--@include: @/_snippets/example-links/transport-http.md-->

## Getting Started

This extension adds an `http` transport to your client. It implements the ["GraphQL Over HTTP" specification](https://github.com/graphql/graphql-over-http).

This extension is included in [presets](../../../website/content/guides/20_topics/presets.md) `minimal` and `basic`. Therefore we show usage here with the `bare` preset which does not include this extension.

```ts
import { TransportHttp } from 'graffle/extensions/transport-http'
import { GraffleBare } from 'graffle/presets/bare'

GraffleBare.create().use(TransportHttp).transport({
  url: 'https://api.service.io/graphql',
})
```

## Configuration

You can generally configure aspects of the transport in three ways:

1. In the constructor under `transport`.
2. Using `with` under `transport`.
3. Using extensions.

```ts twoslash
import { Graffle } from 'graffle'
// ---cut---
Graffle
  .create()
  .transport({
    headers: { authorization: '...' },
    raw: { mode: 'cors' },
  })
```

Precedence is:

1. The extension stack, later extensions taking precedence
2. `with` configuration
3. Constructor configuration

Within each of the above the `raw` configuration takes precedence over other properties directly under `transport`.

Note:

- Headers are merged.
- If a header is given an empty string value, then it deletes that header value if previously set.
- Because `transport.raw` has zero guard rails you should know what you're doing when using it. For example if you set `raw.method` to `PATCH` that would override the `methodMode` configuration and lead to a generally invalid GraphQL request over HTTP.

## GET

<!--@include: @/_snippets/example-links/method-get.md-->

By default all requests use HTTP POST. However you can configure queries and subscriptions to be sent over HTTP GET.

```ts twoslash
import { Graffle } from 'graffle'
// ---cut---
Graffle
  .create()
  .transport({
    methodMode: 'getReads',
    //          ^^^^^^^^^^
  })
```

## POST

By default all requests use HTTP POST. If you need to explicitly re-configure this you can.

```ts twoslash
import { Graffle } from 'graffle'
// ---cut---
Graffle
  .create()
  .transport({
    methodMode: 'post',
    //          ^^^^^^
  })
```

## Anyware

<!--@include: @/_snippets/example-links/transport-http_extension.md-->

Hooks are augmented in the following ways:

|           | Encode | Pack                   | Exchange  | Unpack     | Decode     |
| --------- | ------ | ---------------------- | --------- | ---------- | ---------- |
| Input     | -      | `url` `headers` `body` | `request` | `response` | `response` |
| Functions | -      | -                      | `fetch`   |            |            |

## Raw

<!--@include: @/_snippets/example-links/transport-http_raw.md-->

- You can easily pass configuration to `fetch` via `transport.raw`.
- It takes precedence over other `transport.*` properties.
- Because `transport.raw` has zero guard rails you should know what you're doing when using it. For example if you set `raw.method` to `PATCH` that would override the `methodMode` configuration and lead to a generally invalid GraphQL request over HTTP.

```ts twoslash
import { Graffle } from 'graffle'
// ---cut---
Graffle
  .create()
  .transport({
    raw: { mode: 'cors' }, // [!code highlight]
  })
```
