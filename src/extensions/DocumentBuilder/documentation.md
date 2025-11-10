# Document Builder

The document builder extension allows you to build GraphQL documents with a TypeScript native syntax (as opposed to using GraphQL native syntax). And thanks to Graffle's powerful types all inputs (GraphQL arguments) and outputs (execution results) are type safe ✨.

By not hardcoding this feature into core, we keep Graffle lean and bundle sizes smaller for users that are not leveraging it.

## Getting Started

```ts twoslash
import { Graffle } from 'graffle'
import { DocumentBuilder } from 'graffle/extensions/document-builder'

const graffle = Graffle.create().use(DocumentBuilder())
```

In addition to using this extension programmatically you must also run the [generator](../../../website/content/guides/25_generation/10_generation.md). Refer to its docs for details about it. Here's a basic example of usage:

```sh
pnpm graffle --schema ./my-schema.graphql
```

:::tip Generated Document Builder
The generator also produces a standalone document builder that works without a client instance. This is useful for generating typed GraphQL documents to use with other GraphQL clients. See the [Document Builder guide](../../../website/content/guides/25_generation/20_document-builder.md) for details.
:::

## Selection Set Syntax

For a comprehensive guide to Graffle's selection set syntax including:

- Arguments and nested arguments
- Variables and type inference
- Aliases
- Directives (`@skip`, `@include`, field groups)
- Inline fragments (unions and interfaces)
- Enums
- Mutations
- Custom scalars

See the **[Document Builder Selection Set Syntax guide](../../../website/content/guides/25_generation/20_document-builder.md#selection-set-syntax)**.

## Methods

### Document

<!-- @include: @/_snippets/example-links/document.md -->

The `document` method is used to create whole GraphQL documents.

There are other more targeted ways of sending GraphQL requests when you don't need to author the entire document.

- If you only need to work with a _single operation type_ then use [`$batch`](./batch.md).
- If you only need to work with a _single root field_ then use [root field methods](./root-fields.md).

### Example

<!-- @include: @/_snippets/examples/generated/document.md -->

### Batch

### Root Fields

## Deferred Execution

When using GraphQL variables in root field methods or batch, Graffle automatically switches from immediate execution to **deferred execution**. Instead of returning a Promise that executes immediately, methods return a `DocumentRunner` object that lets you:

1. Inspect the generated GraphQL document string
2. Execute the query multiple times with different variables
3. Use the document with any GraphQL client

This pattern enables better query reusability and inspection while maintaining full type safety.

### Automatic Detection

Graffle detects variables at **both runtime and compile-time**:

**Without Variables** - Auto-executes and returns `Promise<Result>`:

```ts
import { Graffle } from './graffle/_.js'

const graffle = Graffle.create().use(DocumentBuilder())

// No variables → executes immediately
const trainers = await graffle.query.trainers({
  name: true,
  class: true,
})
// Type: Promise<Array<{ name: string, class: string }>>
```

**With Variables** - Returns `DocumentRunner<Variables, Result>`:

```ts
import { Graffle } from './graffle/_.js'
import { $ } from './graffle/modules/Scalar.js'

const graffle = Graffle.create().use(DocumentBuilder())

// Has variables → returns DocumentRunner
const runner = graffle.query.pokemonByName({
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

### DocumentRunner API

When variables are detected, methods return a `DocumentRunner` with two properties:

#### `document: string`

The generated GraphQL document as a string. Useful for:

- Debugging queries
- Logging/monitoring
- Using with other GraphQL clients
- Query analysis tools

```ts
const runner = graffle.query.pokemonByName({
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

#### `run(variables): Promise<Result>`

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

### Usage Patterns

#### Query Reuse

Build a query once, execute it multiple times:

```ts
const getPokemon = graffle.query.pokemonByName({
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

#### Batch Operations

Use `$batch` to query multiple fields with variables:

```ts
const runner = graffle.query.$batch({
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

#### Custom GraphQL Client

Use the generated document with any GraphQL client:

```ts
import { request } from 'graphql-request'

const runner = graffle.query.pokemonByName({
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

### When to Use

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

## Select
