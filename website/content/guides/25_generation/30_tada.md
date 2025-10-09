# Tada

Graffle leverages [gql-tada](https://gql-tada.0no.co)'s tooling to generate introspection types, enabling type safety even when using native GraphQL syntax (as opposed to e.g. [Document Builder](/guides/methods/document)).

## Usage

Graffle provides two complementary APIs for working with gql-tada documents:

| Feature         | Static API                           | Instance API              |
| --------------- | ------------------------------------ | ------------------------- |
| Syntax          | `Graffle.gql()` then `client.send()` | `client.gql().send()`     |
| Use Case        | Reusable documents                   | One-off queries           |
| Type Inference  | Full gql-tada inference              | Basic structure inference |
| Multi-operation | No (use `.document()`)               | No (use `.document()`)    |

### Static API

The generated `Graffle.gql()` function creates typed documents. This is good for

- Defining ahead of time, at module scope, etc., organizing centrally or some grouping strategy
- Sharing queries across components
- Testing documents in isolation if needed

Example:

```typescript
import { Graffle } from './graffle/_exports.js'

// Define a type-safe query using the generated gql() function
const GetUserDocument = Graffle.gql(`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
    }
  }
`)

// Create your Graffle client with transport
const client = Graffle.create()

// Execute with client.send() - variables are type-checked!
const result = await client.send(GetUserDocument, { id: '123' })

// Result is fully typed
console.log(result?.user?.name)
```

### Instance API

The `client.gql()` method allows chaining `.send()`. This is good for

- Concise syntax for one-off queries
- Colocating operations and execution

```typescript
import { Graffle } from './graffle/_exports.js'

const client = Graffle.create()

// Define and execute in one expression
const result = await client.gql(`
    query GetUser($id: ID!) {
      user(id: $id) {
        id
        name
        email
      }
    }
  `)
  .send({ id: '123' })

// Result is fully typed
console.log(result?.user?.name)
```

### TypeScript Configuration (Optional Enhancement)

**This is a VALUE ADD** that brings real-time validation and autocomplete **within your GraphQL strings** as you type in your IDE.

Configure the GraphQLSP TypeScript plugin in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "plugins": [
      {
        "name": "@0no-co/graphqlsp",
        "schema": "./graffle/schema.graphql"
      }
    ]
  }
}
```

Note: The GraphQLSP plugin requires your schema in SDL format. If you don't already have an SDL file as your schema source, Graffle can generate one for you:

```typescript
// graffle.config.ts
export default {
  schema: '...', // Your schema source (URL, file, etc.)
  outputSDL: true, // Graffle will generate an SDL file
}
```

## Benefits

### 1. Type Safety Without Code Generation

Graffle generates gql-tada introspection types from your schema once, then gql-tada infers types directly from your query strings. This means:

- No build step for individual queries
- Instant type feedback as you type
- No generated query files to manage
- Full TypeScript intellisense and autocomplete

### 2. Seamless Integration

The generated `gql()` function works seamlessly with Graffle's client. You get:

- All of Graffle's runtime features (transport, extensions, interceptors, etc.)
- Plus gql-tada's compile-time type safety
- Two complementary APIs (static and instance) for different use cases
- Best of both worlds

### 3. Multi-Schema Support

Each Graffle client generates its own gql() function and introspection types, so you can work with multiple GraphQL schemas in the same project:

```typescript
// Pokemon schema
import { Graffle as PokemonGraffle } from './pokemon-graffle/_exports.js'

// GitHub schema
import { Graffle as GitHubGraffle } from './github-graffle/_exports.js'

// Each has its own typed gql() function
const pokemonDoc = PokemonGraffle.gql(`query { pokemons { name } }`)
const githubDoc = GitHubGraffle.gql(`query { viewer { login } }`)

// Create separate clients
const pokemonClient = PokemonGraffle.create()
  .transport({ url: 'https://pokemon-api.example.com/graphql' })

const githubClient = GitHubGraffle.create()
  .transport({ url: 'https://api.github.com/graphql' })

// Execute with full type safety for each schema
const pokemon = await pokemonClient.send(pokemonDoc)
const viewer = await githubClient.send(githubDoc)
```

## Requirements

To use gql-tada with Graffle:

1. **Generate your Graffle client** - The latest version automatically generates gql-tada introspection types
2. **Install gql-tada** (for type utilities only): `npm install gql.tada`
3. **(Optional) Install GraphQL LSP** for IDE support: `npm install -D @0no-co/graphqlsp`

Note: Unlike standalone gql-tada usage, you **do not** need to call `initGraphQLTada()` yourself - Graffle's generated `gql()` function already includes the proper typing.

## Limitations

### No Tagged Template Literal Support

Graffle's gql-tada integration requires call expression syntax (`Graffle.gql("...")`) instead of tagged template syntax (`` Graffle.gql`...` ``). TypeScript cannot infer const string literals from `TemplateStringsArray`, which gql-tada's type-level parser requires. See [TypeScript Issue #33304](https://github.com/microsoft/TypeScript/issues/33304).

```typescript
// ✅ Works - Call expression syntax
const query = Graffle.gql(`query { user { id } }`)

// ❌ Doesn't work - Tagged template syntax
const query = Graffle.gql`query { user { id } }`
//                        ^ Type error: template literal not supported
```

The same limitation applies to the instance API:

```typescript
// ✅ Works
client.gql(`query { user { id } }`).send()

// ❌ Doesn't work
client.gql`query { user { id } }`.send()
```

### Single Operation Documents Only

gql-tada's type parser can parse documents with multiple named operations, but only infers types for the first operation ([gql.tada #489](https://github.com/0no-co/gql.tada/issues/489)). This means each `.gql()` call should contain **one operation only** (one query, mutation, or subscription).

```typescript
// ❌ Multi-operation document - only first operation gets types
const doc = Graffle.gql(`
  query GetUser { user { id } }
  query GetPosts { posts { id } }
`)
```

**Workaround:** Use Graffle's static document builder (`.document()`) for multi-operation documents. The document builder provides superior multi-operation support with full type-level tracking of all operation names, variables, and results:

```typescript
import { Graffle } from './graffle/_exports.js'

// ✅ Multi-operation document with builder
const doc = Graffle.document({
  query: {
    GetUser: {
      user: (args) =>
        args({ $: { id: 'ID!' } }, {
          id: true,
          name: true,
        }),
    },
    GetPosts: {
      posts: {
        id: true,
        title: true,
      },
    },
  },
})

// Execute specific operation
const userData = await client.send(doc).run('GetUser', { id: '123' })
const postsData = await client.send(doc).run('GetPosts')
```

## Appendix

### How It Works

Graffle uses gql-tada's format to generate a `tada.ts` module with introspection types. This module exports types that describe your GraphQL schema in a format that gql-tada understands.

#### Generated Files

```
graffle/
├── modules/
│   ├── tada.ts       # gql-tada introspection types
│   └── ...
```

#### The tada.ts Module

The generated `tada.ts` file contains:

- `introspection_types` - Type definitions for all GraphQL types in your schema
- `introspection` - The main introspection type used by gql-tada

## Learn More

- [gql-tada Documentation](https://gql-tada.0no.co)
- [Graffle Documentation](https://graffle.dev)
- [Example Project](../examples/gql-tada-example/)
