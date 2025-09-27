# Integrating gql-tada with Graffle

This is a proof of concept demonstrating how [gql-tada](https://gql-tada.0no.co) can provide compile-time type checking for Graffle's `.gql` method.

## Key Insight

gql-tada produces `TypedDocumentNode` instances from GraphQL template literals, which are already compatible with Graffle's `TypedDocumentLike` interface. This means **no changes to Graffle's core are needed** - gql-tada works out of the box!

## Setup

1. **Install gql-tada**: `pnpm add gql.tada @0no-co/graphqlsp`
2. **Configure TypeScript plugin** in `tsconfig.json` - point to your schema file
3. **Generate introspection**: `npx gql.tada generate output`
4. **Initialize gql-tada** in your code with `initGraphQLTada`

## Benefits

✅ **Compile-time validation** - Invalid queries are caught during TypeScript compilation
✅ **Auto-completion** - Full IntelliSense for GraphQL fields
✅ **Type inference** - Variables and results are fully typed
✅ **No code generation** - Types are inferred on-the-fly
✅ **Zero Graffle changes** - Works with existing `.gql` method

## Example Usage

```typescript
import { initGraphQLTada } from 'gql.tada'
import { Graffle } from 'graffle'
import type { introspection } from './graphql-env.d.ts'

// Initialize gql-tada
const graphql = initGraphQLTada<{
  introspection: introspection
}>()

// Define a typed query with gql-tada
const query = graphql(`
  query GetPokemon($name: String!) {
    pokemonByName(name: $name) {
      id
      name
      hp
    }
  }
`)

// Use with Graffle - fully typed!
const result = await graffle.gql(query).send({ name: 'Pikachu' })
// result.pokemonByName is typed as Pokemon[] | null
```

## Files

- `example.ts` - Complete example showing integration, type inference, and mutations
- `tsconfig.json` - TypeScript plugin configuration pointing to existing Pokemon schema
- `graphql-env.d.ts` - Generated introspection types

## Type Checking

Run `npx tsc --noEmit` to verify type checking works.

## Next Steps

1. **Create @graffle/gql-tada extension** - Optional plugin for projects wanting this feature
2. **Integrate with Graffle generator** - Auto-generate gql-tada setup during schema generation
3. **Document best practices** - Guidelines for using typed template literals
4. **Performance testing** - Measure impact on TypeScript compilation times
