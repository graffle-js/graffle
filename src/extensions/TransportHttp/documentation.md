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

## Relative URLs

The transport supports relative URLs, which are useful in browser environments and framework integrations.

> **Note**: Node.js's native fetch does not support relative URLs. They only work in:
>
> - Browser environments (where they're [resolved against the page origin](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#url))
> - Frameworks that provide enhanced fetch implementations (like [SvelteKit's load function](https://kit.svelte.dev/docs/load#making-fetch-requests))

### Basic Usage

```ts
import { TransportHttp } from 'graffle/extensions/transport-http'
import { GraffleBare } from 'graffle/presets/bare'

// Relative paths are supported
GraffleBare.create().use(TransportHttp).transport({
  url: '/api/graphql', // Relative to current origin
})

// Also supports parent directory traversal
GraffleBare.create().use(TransportHttp).transport({
  url: '../graphql', // Relative to parent directory
})

// And current directory paths
GraffleBare.create().use(TransportHttp).transport({
  url: './graphql', // Relative to current directory
})
```

### Framework Integration Example (SvelteKit)

In frameworks like [SvelteKit](https://kit.svelte.dev), you can leverage the framework's enhanced fetch that properly handles relative URLs during server-side rendering:

```ts
// In a SvelteKit load function
export async function load({ fetch }) {
  const client = GraffleBare
    .create()
    .use(TransportHttp)
    .transport({ url: '/api/graphql' })
    .anyware(({ exchange }) => {
      // Use SvelteKit's enhanced fetch
      exchange.fetch = fetch
      return exchange()
    })

  // Client will now use relative URLs with SvelteKit's fetch
  const data = await client.gql`{ posts { title } }`.send()
  return { posts: data.posts }
}
```

For more information about URL resolution in browsers, see [MDN's documentation on the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options).

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

### URL Type in Anyware

The `request.url` in the Exchange hook is a discriminated union that preserves whether the URL is a relative path or absolute URL:

```ts
.anyware(async ({ exchange }) => {
  // Access the discriminated union
  if (exchange.input.request.url._tag === 'path') {
    // It's a relative path (string)
    console.log('Path:', exchange.input.request.url.value)
  } else {
    // It's an absolute URL (URL object)
    console.log('URL:', exchange.input.request.url.value.href)
  }
  return exchange()
})
```

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
