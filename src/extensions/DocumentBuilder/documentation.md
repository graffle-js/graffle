# Document Builder

The document builder extension allows you to build GraphQL documents with a TypeScript native syntax (as opposed to using GraphQL native syntax). And thanks to Graffle's powerful types all inputs (GraphQL arguments) and outputs (execution results) are type safe ✨.

By not hardcoding this feature into core, we keep Graffle lean and bundle sizes smaller for users that are not leveraging it.

## Getting Started

```ts twoslash
import { Graffle } from 'graffle'
import { DocumentBuilder } from 'graffle/extensions/document-builder'

const graffle = Graffle.create().use(DocumentBuilder)
```

In addition to using this extension programmatically you must also run the [generator](../../../website/content/guides/20_topics/30_generation.md). Refer to its docs for details about it. Here's a basic example of usage:

```sh
pnpm graffle --schema ./my-schema.graphql
```

## Static Document Builder

Generate typed GraphQL document strings at compile-time without a client instance. Perfect for passing typed documents to other GraphQL clients (graphql-request, urql, Apollo, etc.) or building tools.

### How it works

After running the generator, import `query`, `mutation`, or `subscription` builders from your generated code. Call methods to generate `TypedDocument.String` objects with the GraphQL string and full TypeScript types.

```ts
import { $var } from 'graffle/extensions/document-builder'
import { query } from './graffle/modules/document.js'

const doc = query.user({
  $: { id: $var }, // Variables automatically extracted
  name: true,
  email: true,
})

// doc.document → GraphQL string
// doc → typed as TypedDocument.String<ResultType, VariablesType>
```

### Key Features

- **Variables**: Use `$var` marker for automatic extraction with proper types
- **Modifiers**: Control nullability (`$var.optional`) and lists (`$var.list`)
- **Aliases**: Request same field multiple times with different arguments
- **Nested Arguments**: Arguments work at any nesting level
- **Type Inference**: Result types automatically inferred from selections
- **Zero Runtime**: Documents generated at compile-time

**Example:**

- [Complete Example](../../../examples/55_document-builder/document-builder_static.ts)

## Overview: GraphQL vs Graffle

This section shows how common GraphQL patterns map to Graffle's TypeScript interface.

**Note:** Examples below use the static document builder syntax (importing `query`/`mutation` from generated code). The same patterns apply to the runtime document builder (using `graffle.query`/`graffle.mutation`), with the main difference being that the static builder can use `$var` markers for variable extraction while the runtime builder uses literal values.

### Basic Query

**GraphQL:**
```graphql
query { user { name } }
```

**Graffle:**
```ts
query.user({ name: true })
```

### Arguments

**GraphQL:**
```graphql
query { user(id: "123") { name } }
```

**Graffle:**
```ts
query.user({ $: { id: "123" }, name: true })
```

### Variables

**GraphQL:**
```graphql
query ($id: ID!) { user(id: $id) { name } }
```

**Graffle:**
```ts
query.user({ $: { id: $var }, name: true })
```

### Aliases

**GraphQL:**
```graphql
query { admin: user(id: "1") { name } }
```

**Graffle:**
```ts
query.$batch({
  user: [
    ["admin", { $: { id: "1" }, name: true }]
  ]
})
```

### Directives

**GraphQL:**
```graphql
query { user { id @skip(if: true) } }
```

**Graffle:**
```ts
query.user({ id: { $skip: true } })
```

### Inline Fragments (Union)

**GraphQL:**
```graphql
query { result { ... on User { name } } }
```

**Graffle:**
```ts
query.result({ ___on_User: { name: true } })
```

### Inline Fragments (Interface)

**GraphQL:**
```graphql
query { nodes { ... on User { email } } }
```

**Graffle:**
```ts
query.nodes({ ___on_User: { email: true } })
```

### Mutations

**GraphQL:**
```graphql
mutation { createUser(name: "Alice") { id } }
```

**Graffle:**
```ts
mutation.createUser({ $: { name: "Alice" }, id: true })
```

### Nested Arguments

**GraphQL:**
```graphql
query { user { posts(limit: 10) { title } } }
```

**Graffle:**
```ts
query.user({ posts: { $: { limit: 10 }, title: true } })
```

## GraphQL Feature Mapping

This section provides detailed examples of how each GraphQL feature maps to Graffle's document builder syntax.

### Arguments

Arguments are passed using the special `$` property in your selection set.

**GraphQL:**

```graphql
query {
  pokemons(filter: { name: { in: ["Pikachu", "Charizard"] } }) {
    name
    trainer { name }
  }
}
```

**Graffle:**

```ts
graffle.query.pokemons({
  $: { filter: { name: { in: ['Pikachu', 'Charizard'] } } },
  name: true,
  trainer: { name: true },
})
```

**Nested Arguments:**

Arguments work at any nesting level. Each field can have its own `$` argument property.

**GraphQL:**

```graphql
query {
  trainers(filter: { class: "Elite" }) {
    name
    pokemons(filter: { type: FIRE }) {
      name
      type
    }
  }
}
```

**Graffle:**

```ts
graffle.query.trainers({
  $: { filter: { class: 'Elite' } },
  name: true,
  pokemons: {
    $: { filter: { type: 'FIRE' } },
    name: true,
    type: true,
  },
})
```

**Example:**

- [Arguments Example](../../../examples/55_document-builder/document-builder_arguments.ts)

### Aliases

Aliases allow you to request the same field multiple times with different arguments. Use the `$batch` method with the field name as the key and an array of `[aliasName, selectionSet]` tuples.

**GraphQL:**

```graphql
query {
  elderPokemons: pokemons(filter: { birthday: { lte: "1924-01-01" } }) {
    name
  }
  babyPokemons: pokemons(filter: { birthday: { gte: "2023-01-01" } }) {
    name
  }
}
```

**Graffle:**

```ts
graffle.query.$batch({
  pokemons: [
    ['elderPokemons', {
      $: { filter: { birthday: { lte: '1924-01-01' } } },
      name: true,
    }],
    ['babyPokemons', {
      $: { filter: { birthday: { gte: '2023-01-01' } } },
      name: true,
    }],
  ],
})
```

The result type will have properties matching your alias names:

```ts
// Result type: { elderPokemons: ..., babyPokemons: ... }
```

**Example:**

- [Alias Example](../../../examples/55_document-builder/document-builder_alias.ts)

### Custom Scalars

Custom scalars are configured on the client and automatically encode/decode arguments and results.

**Configuration:**

```ts
const graffle = Graffle
  .create()
  .scalar('Date', {
    decode: (value: string) => new Date(value),
    encode: (value: Date) => value.toISOString(),
  })
```

**Usage:**

Once configured, you can use native JavaScript `Date` objects in arguments and they'll be automatically encoded to ISO strings:

```ts
const pokemons = await graffle.query.pokemons({
  $: { filter: { birthday: { lte: new Date('1987-01-13') } } },
  //                              ^^^^^^^^^^^^^^^^^^^^^^
  //                              Native Date object - automatically encoded
  name: true,
  birthday: true, // Automatically decoded to Date object
})

pokemons[0].birthday instanceof Date // true
```

**Example:**

- [Custom Scalar Example](../../../examples/35_custom-scalar/custom-scalar.ts)

### Directives

GraphQL directives like `@skip` and `@include` are written using special `$` prefixed properties.

**GraphQL:**

```graphql
query {
  trainers {
    name
    id @skip(if: true)
    pokemon {
      id @include(if: false)
      name
    }
  }
}
```

**Graffle:**

```ts
graffle.query.$batch({
  trainers: {
    name: true,
    id: {
      $skip: true,
    },
    pokemon: {
      id: {
        $include: false,
      },
      name: true,
    },
  },
})
```

You can also apply directives to entire field groups using the special `___` key:

```ts
graffle.query.$batch({
  ___: {
    $skip: true,
    pokemons: {
      name: true,
    },
  },
})
```

**Example:**

- [Directive Example](../../../examples/55_document-builder/document-builder_directive.ts)

### Enums

Enum values are passed as strings and automatically validated by TypeScript based on your schema.

**GraphQL:**

```graphql
query {
  pokemons(filter: { type: FIRE }) {
    name
    type
  }
}
```

**Graffle:**

```ts
graffle.query.pokemons({
  $: { filter: { type: 'FIRE' } },
  //                   ^^^^^^
  //                   TypeScript validates this is a valid enum value
  name: true,
  type: true,
})
```

TypeScript will provide autocomplete for valid enum values and show errors for invalid ones.

### Inline Fragments

Inline fragments are used to select fields on specific types in unions and interfaces. Use the `___on_TypeName` syntax.

#### Unions

**GraphQL:**

```graphql
query {
  battles {
    __typename
    ... on BattleRoyale {
      date
      combatants { trainer { name } }
    }
    ... on BattleTrainer {
      date
      combatant1 { trainer { name } }
    }
  }
}
```

**Graffle:**

```ts
graffle.query.battles({
  __typename: true,
  ___on_BattleRoyale: {
    date: true,
    combatants: {
      trainer: { name: true },
    },
  },
  ___on_BattleTrainer: {
    date: true,
    combatant1: {
      trainer: { name: true },
    },
  },
})
```

The result will be a discriminated union type based on `__typename`:

```ts
for (const battle of battles) {
  switch (battle.__typename) {
    case 'BattleRoyale':
      // TypeScript knows: battle.combatants is available
      break
    case 'BattleTrainer':
      // TypeScript knows: battle.combatant1 is available
      break
  }
}
```

**Example:**

- [Union Example](../../../examples/55_document-builder/document-builder_union.ts)

#### Interfaces

Interface fragments work the same way as unions, using `___on_TypeName` for each implementing type.

**GraphQL:**

```graphql
query {
  beings {
    __typename
    id
    name
    ... on Patron {
      money
    }
    ... on Trainer {
      class
    }
    ... on Pokemon {
      type
    }
  }
}
```

**Graffle:**

```ts
graffle.query.beings({
  __typename: true,
  id: true,
  name: true,
  ___on_Patron: {
    money: true,
  },
  ___on_Trainer: {
    class: true,
  },
  ___on_Pokemon: {
    type: true,
  },
})
```

**Example:**

- [Interface Example](../../../examples/55_document-builder/document-builder_interface.ts)

### Field Groups

Field groups allow you to apply directives to multiple fields at once using the special `___` key.

**GraphQL:**

```graphql
query @skip(if: true) {
  pokemons {
    name
  }
}
```

**Graffle:**

```ts
graffle.query.$batch({
  ___: {
    $skip: true,
    pokemons: {
      name: true,
    },
  },
})
```

### Type Conditions

Type conditions are expressed through inline fragments using the `___on_TypeName` syntax. See the [Inline Fragments](#inline-fragments) section for detailed examples.

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

## Select
