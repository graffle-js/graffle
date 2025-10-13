# Transports

## Introduction

A transport defines how your GraphQL document reaches the schema for execution. Graffle provides two ways to execute documents:

- **HTTP**: Send requests to remote GraphQL APIs over HTTP/HTTPS
- **Memory**: Execute documents against in-memory schemas

Both transports provide the same client interface, allowing you to switch between remote and local execution without changing your application code.

## Multiple Transports

You can configure different transports for different use cases:

```ts
import { Graffle } from 'graffle'
import { TransportHttp } from 'graffle/extensions/transport-http'
import { TransportMemory } from 'graffle/extensions/transport-memory'
import { schema } from './schema.js'

// HTTP transport for production
const production = Graffle.create()
  .use(TransportHttp)
  .transport('http', { url: 'https://api.example.com/graphql' })

// Memory transport for testing
const testing = Graffle.create()
  .use(TransportMemory)
  .transport('memory', { schema })
```

The transport is configured when you create your client. You can switch transports by calling `.transport()` again with a different configuration.

## Official Extensions

Graffle provides two official transport implementations as extensions.

### Memory

The Memory transport executes documents against in-memory schemas using the `execute` function from the `graphql` package. This is useful for:

- Testing without network requests
- Server-side GraphQL execution
- Development and prototyping

See the [Memory Transport extension guide](/extensions/transport-memory.md) for configuration details.

### HTTP

The HTTP transport sends requests to remote GraphQL APIs over HTTP/HTTPS. It supports:

- Custom headers (authentication, etc.)
- Request/response customization
- Retries and error handling
- File uploads

See the [HTTP Transport extension guide](/extensions/transport-http.md) for configuration details.
