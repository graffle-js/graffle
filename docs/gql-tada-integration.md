# gql-tada Integration

Graffle now generates [gql-tada](https://gql-tada.0no.co) compatible introspection types, enabling compile-time type checking for GraphQL queries written as template literals.

## What is gql-tada?

gql-tada is a GraphQL document authoring library that provides type-safe GraphQL operations using TypeScript's template literal types. It offers:

- **Compile-time validation** of GraphQL queries
- **Auto-completion** for GraphQL fields and arguments
- **Type inference** for variables and results
- **Zero runtime overhead** - types are inferred at compile time

## How It Works

When you generate a Graffle client, a `tada.ts` module is automatically created with gql-tada compatible introspection types. This module exports types that describe your GraphQL schema in a format that gql-tada understands.

### Generated Files

```
graffle/
├── modules/
│   ├── tada.ts       # gql-tada introspection types
│   └── ...
```

### The tada.ts Module

The generated `tada.ts` file contains:

- `introspection_types` - Type definitions for all GraphQL types in your schema
- `introspection` - The main introspection type used by gql-tada

## Usage

### Basic Example

```typescript
import { initGraphQLTada } from 'gql.tada'
import { Graffle } from './graffle/_exports.js'
import type { introspection } from './graffle/modules/tada.js'

// Initialize gql-tada with Graffle's generated types
const graphql = initGraphQLTada<{
  introspection: introspection
}>()

// Create your Graffle client
const client = Graffle.create()

// Define a type-safe query
const userQuery = graphql(`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
    }
  }
`)

// Use with Graffle's .gql method
const result = await client
  .gql(userQuery)
  .send({ id: '123' }) // Variables are type-checked!

// Result is fully typed
console.log(result?.user?.name)
```

### TypeScript Configuration

To get IDE support for gql-tada's type checking, configure the TypeScript plugin in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "plugins": [
      {
        "name": "@0no-co/graphqlsp",
        "schema": "./graffle/schema.graphql",
        "tadaOutputLocation": "./graffle-env.d.ts"
      }
    ]
  }
}
```

Note: Make sure to enable SDL output in your Graffle configuration:

```typescript
// graffle.config.ts
export default {
  schema: '...',
  outputSDL: true,
}
```

## Benefits

### 1. Type Safety Without Code Generation

Unlike traditional GraphQL code generators that generate types for every query, gql-tada infers types directly from your template literals. This means:

- No build step for queries
- Instant feedback as you type
- No generated query files to manage

### 2. Seamless Integration

The generated tada types work seamlessly with Graffle's existing `.gql` method. You get:

- All of Graffle's runtime features (transport, extensions, etc.)
- Plus gql-tada's compile-time type safety
- Best of both worlds

### 3. Multi-Schema Support

Each Graffle client generates its own tada types, so you can work with multiple GraphQL schemas in the same project:

```typescript
// Pokemon schema
import { Graffle as PokemonClient } from './pokemon-graffle/_exports.js'
import type { introspection as PokemonIntrospection } from './pokemon-graffle/modules/tada.js'

// GitHub schema
import { Graffle as GitHubClient } from './github-graffle/_exports.js'
import type { introspection as GitHubIntrospection } from './github-graffle/modules/tada.js'

// Each has its own typed graphql function
const pokemonGraphql = initGraphQLTada<
  { introspection: PokemonIntrospection }
>()
const githubGraphql = initGraphQLTada<{ introspection: GitHubIntrospection }>()
```

## Requirements

To use gql-tada with Graffle, you need:

1. Install gql-tada: `npm install gql.tada`
2. (Optional) Install the TypeScript plugin for IDE support: `npm install -D @0no-co/graphqlsp`
3. Generate your Graffle client with the latest version

## Advanced Usage

### Using gql-tada's Type Utilities

gql-tada provides useful type utilities that work with the generated types:

```typescript
import type { ResultOf, VariablesOf } from 'gql.tada'

const myQuery = graphql(`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
    }
  }
`)

// Extract types
type QueryVariables = VariablesOf<typeof myQuery>
type QueryResult = ResultOf<typeof myQuery>
```

### Fragment Composition

gql-tada supports GraphQL fragments for code reuse:

```typescript
const userFragment = graphql(`
  fragment UserFields on User {
    id
    name
    email
  }
`)

const query = graphql(
  `
  query GetUsers {
    users {
      ...UserFields
    }
  }
`,
  [userFragment],
)
```

## Limitations

- The TypeScript plugin requires your schema to be available as an SDL file
- Template literal type checking requires TypeScript 4.5+
- Very large schemas may impact TypeScript performance

## Learn More

- [gql-tada Documentation](https://gql-tada.0no.co)
- [Graffle Documentation](https://graffle.dev)
- [Example Project](../examples/gql-tada-example/)
