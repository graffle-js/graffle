# Presets

Presets are pre-configured Graffle clients with specific combinations of extensions. They provide convenient starting points for different use cases, from maximum control to batteries-included convenience.

## Overview

Graffle offers three presets, each building upon the previous one:

| Preset      | Extensions                                      | Use Case                                   |
| ----------- | ----------------------------------------------- | ------------------------------------------ |
| **Bare**    | None                                            | Maximum control, bring your own extensions |
| **Minimal** | TransportHttp                                   | HTTP-only GraphQL client                   |
| **Basic**   | TransportHttp, TransportMemory, DocumentBuilder | Full-featured client (recommended)         |

## Choosing a Preset

**Start with Basic** - Most users should start with the `basic` preset. It includes everything you need for typical GraphQL development including HTTP transport, in-memory schema support, and the type-safe document builder.

**Use Minimal** - Choose `minimal` if you only need HTTP transport and want to add other extensions selectively.

**Use Bare** - Choose `bare` for maximum control when you want to explicitly manage every extension, or when building custom presets for specific environments (e.g., edge functions, embedded systems).

## Bare

The bare preset provides a completely empty Graffle client with no extensions. Use this when you need maximum control or want to build a custom configuration from scratch.

```ts
import { GraffleBare } from 'graffle/presets/bare'

const graffle = GraffleBare
  .create()
  .use()
  /* your extensions */
  .transport() /* your transport */
```

**What's included:**

- Core Graffle client functionality
- Extension system

**What's NOT included:**

- No transport layer (HTTP, memory, etc.)
- No document builder
- No convenience extensions

**When to use:**

- Building custom presets for specific environments
- Edge computing with size constraints
- When you need explicit control over every capability

## Minimal

The minimal preset adds HTTP transport support, providing everything needed for querying GraphQL APIs over HTTP.

```ts
import { GraffleMinimal } from 'graffle/presets/minimal'

const graffle = GraffleMinimal
  .create()
  .transport({ url: 'https://api.example.com/graphql' })
```

**What's included:**

- Everything from Bare
- [TransportHttp](/extensions/transport-http.md) - GraphQL over HTTP support

**What's NOT included:**

- In-memory schema support
- Document builder
- Other convenience extensions

**When to use:**

- HTTP-only GraphQL clients
- When you want to add document builder or other extensions selectively
- Lightweight browser bundles

## Basic

The basic preset is the recommended starting point for most projects. It includes HTTP transport, in-memory schema support, and the type-safe document builder.

```ts
import { GraffleBasic } from 'graffle/presets/basic'

const graffle = GraffleBasic
  .create()
  .transport({ url: 'https://api.example.com/graphql' })
```

**What's included:**

- Everything from Minimal
- [TransportMemory](/extensions/transport-memory.md) - Execute against in-memory schemas
- [DocumentBuilder](/extensions/document-builder.md) - Type-safe document construction

**When to use:**

- Most production applications
- Development and testing (memory transport)
- When you want type-safe document building
- Full-featured GraphQL client needs

## Extending Presets

All presets support the same extension API. Add additional extensions using `.use()`:

```ts
import { OpenTelemetry } from 'graffle/extensions/opentelemetry'
import { SchemaErrors } from 'graffle/extensions/schema-errors'
import { Upload } from 'graffle/extensions/upload'
import { GraffleBasic } from 'graffle/presets/basic'

const graffle = GraffleBasic
  .create()
  .use(SchemaErrors())
  .use(Upload)
  .use(OpenTelemetry())
  .transport({ url: 'https://api.example.com/graphql' })
```

See the [Extensions](/extensions/) documentation for all available extensions.

## Migration Between Presets

Moving between presets is straightforward:

```ts
// From Bare to Minimal - add HTTP transport
- import { GraffleBare } from 'graffle/presets/bare'
+ import { GraffleMinimal } from 'graffle/presets/minimal'

- const graffle = GraffleBare.create().use(TransportHttp)
+ const graffle = GraffleMinimal.create()

// From Minimal to Basic - add memory transport and document builder
- import { GraffleMinimal } from 'graffle/presets/minimal'
+ import { GraffleBasic } from 'graffle/presets/basic'

- const graffle = GraffleMinimal.create().use(TransportMemory).use(DocumentBuilder)
+ const graffle = GraffleBasic.create()
```

## Type Safety

All presets maintain full type safety, with TypeScript tracking exactly which extensions are loaded and which methods are available:

```ts
import { GraffleBare } from 'graffle/presets/bare'
import { GraffleBasic } from 'graffle/presets/basic'

const bare = GraffleBare.create()
bare.query.foo() // ❌ Error: No document builder extension

const basic = GraffleBasic.create()
basic.query.foo() // ✅ Works: Document builder included
```
