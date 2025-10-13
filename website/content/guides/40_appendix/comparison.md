# Comparison with Other GraphQL Clients

This guide helps you understand how Graffle compares to other popular GraphQL clients in the JavaScript ecosystem and when to choose each one.

## Quick Comparison Table

| Feature                   | Graffle               | Apollo Client     | Urql                    | graphql-request |
| ------------------------- | --------------------- | ----------------- | ----------------------- | --------------- |
| **Primary Use Case**      | General-purpose       | React apps        | React apps              | Simple HTTP     |
| **Type Safety**           | ⭐⭐⭐ Full inference | ⭐⭐ With codegen | ⭐⭐ With gql.tada      | ⭐ Basic        |
| **Bundle Size**           | ~50KB                 | ~150KB+           | ~40KB                   | ~8KB            |
| **Framework Integration** | Basic                 | ⭐⭐⭐ React      | ⭐⭐⭐ React/Vue/Svelte | Basic           |
| **Caching**               | Extension possible    | ✅ Normalized     | ✅ Optional             | ❌              |
| **Extension System**      | ✅ Type-safe          | ✅ Apollo Link    | ✅ Exchanges            | ❌              |
| **Document Builder**      | ✅ Optional           | ❌                | ❌                      | ❌              |
| **Multi-Transport**       | ✅ HTTP + Memory      | HTTP only         | HTTP + SSR              | HTTP only       |
| **Custom Scalars**        | ✅ Automatic          | Manual            | Manual                  | Manual          |
| **Schema Errors**         | ✅ Extension          | Manual            | Manual                  | Manual          |
| **Learning Curve**        | Medium                | High              | Medium                  | Low             |

## Detailed Comparisons

### vs graphql-request

Graffle is the **successor to graphql-request**, evolved from the same codebase by the same author.

**Similarities:**

- Simple, lightweight HTTP client
- Minimal API surface
- Works everywhere (Node, browsers, Deno, Bun, Cloudflare Workers)
- No framework dependencies

**Graffle Improvements:**

- **Type Safety** - Full type inference for documents and results (vs basic/none)
- **Document Builder** - Optional TypeScript-native query construction
- **Extensions** - Type-safe extension system (OpenTelemetry, uploads, schema errors, etc.)
- **Multi-Transport** - Execute against in-memory schemas, not just HTTP
- **Custom Scalars** - Automatic encoding/decoding with codecs
- **Output Modes** - Flexible error handling (envelope, return-error, throw)

**Migration Path:**

```ts
// graphql-request
import { GraphQLClient } from 'graphql-request'
const client = new GraphQLClient('https://api.example.com/graphql')
const data = await client.request(query, variables)

// Graffle (drop-in replacement)
import { Graffle } from 'graffle'
const client = Graffle.create().transport({
  url: 'https://api.example.com/graphql',
})
const data = await client.gql(query).send(variables)
```

**Choose graphql-request if:**

- You need the absolute smallest bundle size (~8KB)
- You only need basic HTTP requests with no type safety

**Choose Graffle if:**

- You want type safety without sacrificing simplicity
- You need extensions (OpenTelemetry, uploads, etc.)
- You want progressive enhancement (start simple, add features as needed)

---

### vs Apollo Client

Apollo Client is the **most full-featured GraphQL client**, purpose-built for React applications with deep framework integration.

**Apollo Client Strengths:**

- **React Integration** - Hooks, suspense, concurrent rendering, SSR
- **Normalized Cache** - Sophisticated automatic cache updates across components
- **DevTools** - Excellent debugging experience
- **Ecosystem** - Vast plugin ecosystem and community
- **Federation** - First-class support for Apollo Federation

**Graffle Strengths:**

- **Type Safety** - Native type inference without codegen step
- **Simplicity** - Straightforward API without cache configuration
- **Bundle Size** - ~3x smaller
- **Framework Agnostic** - Works everywhere (Node, Deno, Bun, browsers, workers)
- **Extensibility** - Simpler extension API (vs Apollo Link)
- **Multi-Transport** - Execute against HTTP or in-memory schemas

**Choose Apollo Client if:**

- You're building a React app and want the best React-specific experience
- You need deep framework integration (hooks, suspense, etc.)
- You're using Apollo Federation
- You need sophisticated caching strategies

**Choose Graffle if:**

- You're building backend services, CLI tools, scripts, or non-React apps
- You prefer simpler, more predictable behavior
- You want type safety without codegen
- You need multi-runtime support (Node, Deno, Bun, workers)

> [!NOTE]
> Caching support could be added to Graffle as an extension in the future ([#1397](https://github.com/graffle-js/graffle/issues/1397)), but Apollo Client's value for React apps goes beyond caching—it's the deep framework integration.

---

### vs Urql

Urql is a **lightweight, extensible GraphQL client** with excellent framework integration for React, Vue, and Svelte.

**Urql Strengths:**

- **Framework Integration** - First-class hooks for React, Vue, Svelte
- **Exchanges** - Powerful, composable middleware system
- **Flexible Caching** - Normalized cache available when needed, simple by default
- **Bundle Size** - Very small core (~40KB)
- **gql.tada Integration** - Great type safety with gql.tada

**Graffle Strengths:**

- **Document Builder** - TypeScript-native alternative to GraphQL syntax
- **Type Inference** - Built-in without external tools (vs gql.tada setup)
- **Multi-Transport** - In-memory execution alongside HTTP
- **Custom Scalars** - Automatic encoding/decoding
- **Schema Errors** - First-class support for error schemas
- **Framework Agnostic** - Works everywhere without UI framework dependencies

**Similarities:**

- Both prioritize extensibility
- Both have small bundle sizes
- Both support custom scalar handling
- Both work across runtimes

**Choose Urql if:**

- You're building a UI application with React, Vue, or Svelte
- You want framework-specific hooks and state management
- You prefer the exchanges pattern

**Choose Graffle if:**

- You're building backend services, CLI tools, or scripts
- You want built-in type inference without additional setup
- You need multi-transport capabilities (in-memory + HTTP)
- You prefer Document Builder over GraphQL syntax

> [!NOTE]
> Both Urql and Graffle are excellent choices for different use cases. Urql excels in UI applications with its framework integrations, while Graffle excels as a general-purpose client with superior type safety.

---

### vs Other Clients

#### GraphQL Yoga Client

Yoga's client is **tightly integrated with Yoga server**, optimized for Yoga-specific features.

**Choose Yoga Client if:**

- You're using GraphQL Yoga server
- You need SSE/WebSocket subscriptions with Yoga

**Choose Graffle if:**

- You need framework-agnostic client
- You want type safety and extensions

#### Relay

Relay is **Facebook's GraphQL client**, deeply integrated with React and optimized for large-scale apps.

**Choose Relay if:**

- You're building a massive React application
- You can adopt strict GraphQL best practices (fragments everywhere)
- You need Facebook's battle-tested architecture

**Choose Graffle if:**

- You want simpler, more flexible architecture
- You don't want to restructure your entire codebase around fragments

## Use Case Recommendations

### Backend Services, Scripts & CLI Tools

**Best Choice: Graffle**

- Framework-agnostic, works everywhere
- Type-safe queries without UI framework overhead
- Multi-transport (HTTP + in-memory) for testing
- Simple, predictable behavior

### UI Applications (React, Vue, Svelte)

**Best Choice: Apollo Client or Urql**

- Deep framework integration (hooks, suspense, state management)
- Built-in caching strategies
- Optimized for UI patterns and component lifecycles
- **Future**: Graffle could add a caching extension ([#1397](https://github.com/graffle-js/graffle/issues/1397)) for UI use cases

### TypeScript-First Projects (Non-UI)

**Best Choice: Graffle**

- Native type inference without codegen
- Document Builder for TypeScript-native queries
- Progressive enhancement (start simple, add features)

### Quick Prototypes & Simple Requests

**Consider: Graffle or graphql-request**

- Both get you running fast
- Graffle: Type safety from the start
- graphql-request: Absolute minimal setup (~8KB)

### Large-Scale React Applications

**Best Choice: Apollo Client or Relay**

- Sophisticated caching and state management
- Proven at scale
- Extensive tooling and ecosystem

## Migration Guides

### From graphql-request

Graffle maintains compatibility with graphql-request patterns:

```ts
// Before (graphql-request)
import { gql, GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(endpoint, {
  headers: { authorization: 'Bearer token' },
})

const query = gql`
  query GetUser($id: ID!) {
    user(id: $id) { name email }
  }
`

const data = await client.request(query, { id: '123' })

// After (Graffle)
import { Graffle } from 'graffle'

const graffle = Graffle
  .create()
  .transport({
    url: endpoint,
    headers: { authorization: 'Bearer token' },
  })

const data = await graffle.gql`
  query GetUser($id: ID!) {
    user(id: $id) { name email }
  }
`.send({ id: '123' })

// With type safety (optional)
const data = await graffle.document.query.user({
  $: { id: '123' },
  name: true,
  email: true,
})
```

### From Apollo Client

Replace Apollo's useQuery hook with Graffle:

```ts
// Before (Apollo)
import { gql, useQuery } from '@apollo/client'

const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) { name email }
  }
`

function Component({ userId }) {
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { id: userId },
  })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  return <div>{data.user.name}</div>
}

// After (Graffle)
import { Graffle } from 'graffle'
import { useEffect, useState } from 'react'

const graffle = Graffle.create().transport({ url: endpoint })

function Component({ userId }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    graffle.document.query.user({
      $: { id: userId },
      name: true,
      email: true,
    })
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [userId])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  return <div>{data.user.name}</div>
}
```

> [!NOTE]
> For React integration, consider wrapping Graffle in a custom hook or using a lightweight state management solution.

## Summary

**Graffle's Sweet Spot:**

- Backend services, CLI tools, scripts, and server-side logic
- TypeScript-first projects prioritizing native type safety
- Multi-runtime environments (Node, Deno, Bun, workers)
- Projects valuing simplicity and progressive enhancement

**When to Choose UI-Specialized Clients:**

- **Apollo Client**: React apps needing deep framework integration and sophisticated caching
- **Urql**: React/Vue/Svelte apps wanting lightweight framework integration
- **Relay**: Large-scale React applications with strict GraphQL patterns

**When to Choose Minimal Clients:**

- **graphql-request**: Absolute minimal bundle size required (~8KB)

**The Key Distinction:**
Graffle is a **general-purpose GraphQL client** optimized for type safety and extensibility across all JavaScript environments. Apollo, Urql, and Relay are **UI-specialized clients** optimized for framework integration and UI patterns. Choose based on whether you're building UI applications (use UI-specialized) or everything else (use Graffle).

## Learn More

- [Getting Started Guide](/guides/getting-started)
- [Extension System](/guides/advanced/extension-authoring)
- [Credits & Technical Comparisons](/guides/appendix/credits)
