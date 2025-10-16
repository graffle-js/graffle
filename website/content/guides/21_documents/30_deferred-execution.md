# Deferred Execution

## Overview

When using GraphQL variables in generated method calls, Graffle automatically switches from immediate execution to **deferred execution**. Instead of returning a Promise that executes immediately, methods return a `DocumentRunner` object that lets you:

1. Inspect the generated GraphQL document string
2. Execute the query multiple times with different variables
3. Use the document with any GraphQL client

This pattern enables better query reusability and inspection while maintaining full type safety.

## Automatic Detection

Graffle detects variables at **both runtime and compile-time**:

**Without Variables** - Auto-executes and returns `Promise<Result>`:

```ts
import { Graffle } from './graffle/$.js'

// No variables → executes immediately
const trainers = await Graffle.query.trainers({
  name: true,
  class: true,
})
// Type: Promise<Array<{ name: string, class: string }>>
```

**With Variables** - Returns `DocumentRunner<Variables, Result>`:

```ts
import { $ } from './graffle/modules/Scalar.js'
import { Graffle } from './graffle/$.js'

// Has variables → returns DocumentRunner
const runner = Graffle.query.pokemonByName({
  $: { name: $.String$NonNull },
  name: true,
  hp: true,
})
// Type: DocumentRunner<{ name: string }, { name: string, hp: number }>

// Inspect the document
console.log(runner.document)
// => "query($name: String!) { pokemonByName(name: $name) { name hp } }"

// Execute with variables
const pikachu = await runner.run({ name: 'Pikachu' })
const charizard = await runner.run({ name: 'Charizard' })
```

TypeScript knows the return type based on whether `$` markers are present in your selection set.

## DocumentRunner API

When variables are detected, methods return a `DocumentRunner` with two properties:

### `document: string`

The generated GraphQL document as a string. Useful for:
- Debugging queries
- Logging/monitoring
- Using with other GraphQL clients
- Query analysis tools

```ts
const runner = Graffle.query.pokemonByName({
  $: { name: $.String$NonNull },
  name: true,
  type: true,
})

console.log(runner.document)
// query($name: String!) {
//   pokemonByName(name: $name) {
//     name
//     type
//   }
// }
```

### `run(variables): Promise<Result>`

Execute the operation with the provided variables. Fully type-safe - TypeScript knows:
- Which variables are required vs optional
- The types of each variable
- The shape of the result

```ts
// TypeScript enforces correct variable types
const result = await runner.run({ name: 'Pikachu' }) // ✓
const error = await runner.run({ name: 123 }) // ✗ Type error
const missing = await runner.run({}) // ✗ Type error: 'name' is required
```

## Usage Patterns

### Query Reuse

Build a query once, execute it multiple times:

```ts
import { $ } from './graffle/modules/Scalar.js'
import { Graffle } from './graffle/$.js'

const getPokemon = Graffle.query.pokemonByName({
  $: { name: $.String$NonNull },
  name: true,
  hp: true,
  attack: true,
  defense: true,
})

// Reuse across your application
const pikachu = await getPokemon.run({ name: 'Pikachu' })
const charizard = await getPokemon.run({ name: 'Charizard' })
const mewtwo = await getPokemon.run({ name: 'Mewtwo' })
```

### Batch Operations

Use `$batch` to query multiple fields with variables:

```ts
const runner = Graffle.query.$batch({
  pokemonByName: {
    $: { name: $.String$NonNull },
    name: true,
    type: true,
  },
  trainers: {
    name: true,
    class: true,
  },
})

const result = await runner.run({ name: 'Pikachu' })
// {
//   pokemonByName: { name: 'Pikachu', type: 'ELECTRIC' },
//   trainers: [...]
// }
```

### Custom GraphQL Client

Use the generated document with any GraphQL client:

```ts
import { request } from 'graphql-request'

const runner = Graffle.query.pokemonByName({
  $: { name: $.String$NonNull },
  name: true,
  hp: true,
})

// Use with graphql-request
const result = await request(
  'https://api.example.com/graphql',
  runner.document,
  { name: 'Pikachu' },
)

// Use with Apollo Client
import { gql } from '@apollo/client'

const { data } = await apolloClient.query({
  query: gql(runner.document),
  variables: { name: 'Pikachu' },
})
```

### Debugging & Logging

Inspect queries before execution:

```ts
const runner = Graffle.query.pokemonByName({
  $: { name: $.String$NonNull },
  name: true,
  hp: true,
})

// Log the query for debugging
console.log('Executing query:', runner.document)

// Add to monitoring/analytics
analytics.track('graphql_query', {
  document: runner.document,
  operationType: 'query',
})

const result = await runner.run({ name: 'Pikachu' })
```

## Variable Modifiers

Variables support modifiers that affect their behavior:

### Type Annotations

When using generated clients, types are inferred from the schema. For schema-less static builders, provide explicit types:

```ts
import { $ } from './graffle/modules/Scalar.js'

// Generated client - types inferred from schema
Graffle.query.pokemonByName({
  $: { name: $ }, // Type inferred as String! from schema
  name: true,
})

// Schema-less static builder - explicit types needed
import { $, query } from 'graffle'

query.pokemonByName({
  $: { name: $.String() }, // Explicit type hint
  name: true,
})
```

### Nullability

Control whether variables are required or optional:

```ts
import { $ } from './graffle/modules/Scalar.js'

// Required variable (non-null)
$.String$NonNull // String!
$.Int$NonNull // Int!

// Optional variable (nullable)
$.String // String
$.Int // Int
```

### Default Values

Provide default values for optional variables:

```ts
const runner = Graffle.query.pokemons({
  $: {
    limit: $.Int.default(10),
    offset: $.Int.default(0),
  },
  name: true,
})

// Use defaults
await runner.run({}) // limit=10, offset=0

// Override defaults
await runner.run({ limit: 20, offset: 10 })
```

### Custom Names

Rename variables in the GraphQL document:

```ts
const runner = Graffle.query.pokemonByName({
  $: {
    name: $.String$NonNull.as('pokemonName'),
  },
  name: true,
})

console.log(runner.document)
// query($pokemonName: String!) {
//   pokemonByName(name: $pokemonName) { name }
// }

await runner.run({ pokemonName: 'Pikachu' })
```

## Type Safety

TypeScript provides complete type safety for deferred execution:

### Return Type Inference

The return type changes automatically based on variable presence:

```ts
// No variables → Promise<Result>
const result1 = Graffle.query.trainers({ name: true })
// Type: Promise<Array<{ name: string }>>

// With variables → DocumentRunner<Variables, Result>
const result2 = Graffle.query.pokemonByName({
  $: { name: $.String$NonNull },
  name: true,
})
// Type: DocumentRunner<{ name: string }, { name: string, hp: number }>
```

### Variable Validation

TypeScript enforces variable requirements:

```ts
const runner = Graffle.query.pokemonByName({
  $: {
    name: $.String$NonNull, // Required
    includeStats: $.Boolean, // Optional
  },
  name: true,
  hp: true,
})

// ✓ Valid - required variable provided
await runner.run({ name: 'Pikachu' })

// ✓ Valid - optional variable included
await runner.run({ name: 'Pikachu', includeStats: true })

// ✗ Type error - missing required 'name'
await runner.run({ includeStats: true })

// ✗ Type error - wrong type for 'name'
await runner.run({ name: 123 })
```

### Result Type Safety

Results are fully typed based on your selection set:

```ts
const runner = Graffle.query.pokemonByName({
  $: { name: $.String$NonNull },
  name: true,
  hp: true,
  // attack: true, // Not selected
})

const result = await runner.run({ name: 'Pikachu' })

result.name // ✓ string
result.hp // ✓ number
result.attack // ✗ Type error - not in selection set
```

## Detection Mechanism

Variable detection works recursively through your entire selection set:

### Direct Variables

```ts
// Variable directly in $ arguments
Graffle.query.pokemonByName({
  $: { name: $ },
  name: true,
})
// → Deferred
```

### Nested Variables

```ts
// Variable in nested field arguments
Graffle.query.$batch({
  pokemon: {
    $: { id: $ },
    name: true,
  },
  trainers: {
    name: true,
  },
})
// → Deferred (variable found in nested field)
```

### Array Variables

```ts
// Variable in array of selection sets
Graffle.query.battles({
  combatants: [
    { $: { type: $ }, name: true },
  ],
})
// → Deferred (variable in array element)
```

### No Variables

```ts
// No $ markers anywhere
Graffle.query.trainers({
  name: true,
  class: true,
  pokemon: {
    name: true,
    type: true,
  },
})
// → Auto-execute (no variables)
```

## When to Use

**Use Deferred Execution when:**
- You need to reuse a query with different variables
- You want to inspect the generated GraphQL document
- You're integrating with other GraphQL tools
- You need to log/monitor queries before execution
- You're building a query library for your application

**Use Auto-Execution when:**
- You're making a one-off query
- Variables aren't needed
- You want the simplest possible syntax
- Immediate execution is desired

Graffle makes the right choice automatically - you just add `$` markers when you need variables, and the behavior changes accordingly.
