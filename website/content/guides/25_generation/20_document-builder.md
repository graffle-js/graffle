# Document Builder

Generate typed GraphQL document strings at compile-time without a client instance. Perfect for passing typed documents to other GraphQL clients (graphql-request, urql, Apollo, etc.) or building tools.

## How it works

After running the generator, import `query`, `mutation`, or `subscription` builders from your generated code. Call methods to generate `TypedDocument.String` objects with the GraphQL string and full TypeScript types.

```ts twoslash
import { $ } from 'graffle/extensions/document-builder'
import { Graffle } from './graffle/$.js'

const doc = Graffle.query.trainerByName({
  $: { name: $ }, // Variables automatically extracted
  name: true,
  class: true,
})

// doc.document → GraphQL string
// doc → typed as TypedDocument.String<ResultType, VariablesType>
```

**Example:**

- [Complete Example](../../../../examples/55_document-builder/document-builder_static.ts)

## Configuration

The document builder can be configured using global defaults:

```ts twoslash
import { staticBuilderDefaults } from 'graffle/extensions/document-builder'

// Change default behavior for all queries
staticBuilderDefaults.hoistArguments = false
```

### Hoisting Arguments

By default, the builder extracts **all** arguments as GraphQL variables (`hoistArguments: true`). This provides:

- Better query caching (same query structure, different variable values)
- Automatic custom scalar encoding
- Alignment with GraphQL best practices

**Example with default behavior:**

```ts
const doc = query.trainerByName({
  $: { name: 'Ash' },
  name: true,
  class: true,
})

// Generates:
// query($name: String!) {
//   trainerByName(name: $name) { name class }
// }
// Variables: { name: "Ash" }
```

**Disabling automatic extraction:**

```ts
staticBuilderDefaults.hoistArguments = false

const doc = query.trainerByName({
  $: { name: 'Ash' },
  name: true,
})

// Generates:
// query { trainerByName(name: "Ash") { name } }
```

**Note:** Explicit `$` markers are ALWAYS extracted as variables, regardless of this setting:

```ts
staticBuilderDefaults.hoistArguments = false

const doc = query.pokemonByName({
  $: {
    name: $('pokemonName'), // Always extracted
  },
  name: true,
  trainer: {
    name: true,
  },
})

// Generates:
// query($pokemonName: String!) {
//   pokemonByName(name: $pokemonName) { name trainer { name } }
// }
```

### Conflict Resolution

When both explicit `$` markers and auto-hoisted arguments want the same variable name, automatic renaming occurs:

```ts
const doc = query.trainerByName({
  $: {
    name: $('trainerName'), // Gets: $trainerName
  },
  name: true,
  class: true,
})
```

## Feature Reference

This section provides detailed examples of how each GraphQL feature is expressed using Graffle's selection set syntax.

### Basic Query

:::tabs
== Graffle

```ts
query.trainers({ name: true })
```

== GraphQL

```graphql
query { trainers { name } }
```

:::

### Arguments

Arguments are passed using the special `$` property in your selection set.

:::tabs
== Graffle

```ts
query.pokemons({
  $: { filter: { name: { in: ['Pikachu', 'Charizard'] } } },
  name: true,
  trainer: { name: true },
})
```

== GraphQL

```graphql
query {
  pokemons(filter: { name: { in: ["Pikachu", "Charizard"] } }) {
    name
    trainer { name }
  }
}
```

:::

**Nested Arguments:**

Arguments work at any nesting level. Each field can have its own `$` argument property.

:::tabs
== Graffle

```ts
query.trainers({
  $: { filter: { class: 'Elite' } },
  name: true,
  pokemons: {
    $: { filter: { type: 'FIRE' } },
    name: true,
    type: true,
  },
})
```

== GraphQL

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

:::

**Example:**

- [Arguments Example](../../../../examples/55_document-builder/document-builder_arguments.ts)

### Variables

:::tabs
== Graffle

```ts
query.trainerByName({ $: { name: $ }, name: true })
```

== GraphQL

```graphql
query ($name: String!) { trainerByName(name: $name) { name } }
```

:::

#### Variable Type Inference

Graffle automatically infers GraphQL types for variables using two strategies:

**1. Schema-Driven (with generated client):**

When using a generated client, Graffle uses Schema-Driven Data Map (SDDM) metadata to infer precise GraphQL types including nullability, list types, and custom scalars:

```ts twoslash
import { Graffle } from './graffle/$.js'

Graffle.query.trainerByName({
  $: { name: 'Ash' }, // Inferred as: $name: String!
  name: true,
})

// Generated: query($name: String!) { trainerByName(name: $name) { name } }
```

**2. Value-Based (without schema):**

When schema information is unavailable (e.g., using static builder without generation), Graffle infers types from runtime values:

```ts
import { createStaticRootType } from 'graffle/extensions/document-builder'
import { OperationTypeNode } from 'graphql'

const query = createStaticRootType(OperationTypeNode.QUERY)

query.someField({
  $: {
    stringArg: 'value', // Inferred as: String
    numberArg: 42, // Inferred as: Int
    boolArg: true, // Inferred as: Boolean
    arrayArg: ['a', 'b'], // Inferred as: [String]
  },
  name: true,
})

// Generated: query($stringArg: String, $numberArg: Int, $boolArg: Boolean, $arrayArg: [String]) {
//   someField(stringArg: $stringArg, numberArg: $numberArg, boolArg: $boolArg, arrayArg: $arrayArg) { name }
// }
```

**Type Inference Rules:**

| JavaScript Type    | GraphQL Type        |
| ------------------ | ------------------- |
| `string`           | `String`            |
| `number` (integer) | `Int`               |
| `number` (decimal) | `Float`             |
| `boolean`          | `Boolean`           |
| `Array<T>`         | `[InferredType<T>]` |

**Note:** Schema-driven inference provides more accurate types (e.g., `ID!` vs `String`, custom scalars) and is recommended unless you're bundle-size sensitive. Value-based inference is a fallback for development or when schema access is limited.

#### Variable Naming

Variables can be named explicitly or use automatic naming:

```ts
// Explicit naming
query.trainerByName({ $: { name: $('trainerName') }, name: true })
// Generated: query($trainerName: String!) { trainerByName(name: $trainerName) { name } }

// Automatic naming (uses argument name)
query.trainerByName({ $: { name: $ }, name: true })
// Generated: query($name: String!) { trainerByName(name: $name) { name } }
```

#### Optional and Required Variables

Use modifiers to control nullability:

```ts
// Required (default)
query.trainerByName({ $: { name: $ }, name: true })
// Generated: query($name: String!) { ... }

// Optional
query.trainerByName({ $: { name: $.optional }, name: true })
// Generated: query($name: String) { ... }
```

#### Variable Defaults

Provide default values using the third parameter:

```ts
query.trainers({ $: { limit: $(10) }, name: true })
// Generated: query($limit: Int = 10) { trainers(limit: $limit) { name } }
```

### Mutations

:::tabs
== Graffle

```ts
mutation.createUser({ $: { name: 'Alice' }, id: true })
```

== GraphQL

```graphql
mutation { createUser(name: "Alice") { id } }
```

:::

### Aliases

Aliases allow you to request the same field multiple times with different arguments. Use the `$batch` method with the field name as the key and an array of `[aliasName, selectionSet]` tuples.

:::tabs
== Graffle

```ts
query.$batch({
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

// Result type: { elderPokemons: ..., babyPokemons: ... }
```

== GraphQL

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

:::

**Example:**

- [Alias Example](../../../../examples/55_document-builder/document-builder_alias.ts)

### Directives

GraphQL directives like `@skip` and `@include` are written using special `$` prefixed properties.

:::tabs
== Graffle

```ts
query.$batch({
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

== GraphQL

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

:::

You can also apply directives to entire field groups using the special `___` key:

```ts
query.$batch({
  ___: {
    $skip: true,
    pokemons: {
      name: true,
    },
  },
})
```

**Example:**

- [Directive Example](../../../../examples/55_document-builder/document-builder_directive.ts)

**Note on @defer and @stream:**

The experimental `@defer` and `@stream` directives are not yet supported in Graffle. These directives enable incremental delivery of GraphQL responses. Support is planned as a future extension. [Track progress in #1134](https://github.com/graffle-js/graffle/issues/1134).

### Enums

Enum values are passed as strings and automatically validated by TypeScript based on your schema.

:::tabs
== Graffle

```ts
query.pokemons({
  $: { filter: { type: 'FIRE' } },
  //                   ^^^^^^
  //                   TypeScript validates this is a valid enum value
  name: true,
  type: true,
})
```

== GraphQL

```graphql
query {
  pokemons(filter: { type: FIRE }) {
    name
    type
  }
}
```

:::

TypeScript will provide autocomplete for valid enum values and show errors for invalid ones.

### Inline Fragments

Inline fragments are used to select fields on specific types in unions and interfaces. Use the `___on_TypeName` syntax.

#### Unions

:::tabs
== Graffle

```ts
query.battles({
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

// Result is a discriminated union type based on __typename:
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

== GraphQL

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

:::

**Example:**

- [Union Example](../../../../examples/55_document-builder/document-builder_union.ts)

#### Interfaces

Interface fragments work the same way as unions, using `___on_TypeName` for each implementing type.

:::tabs
== Graffle

```ts
query.beings({
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

== GraphQL

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

:::

**Example:**

- [Interface Example](../../../../examples/55_document-builder/document-builder_interface.ts)

### Field Groups

Field groups allow you to apply directives to multiple fields at once using the special `___` key.

:::tabs
== Graffle

```ts
query.$batch({
  ___: {
    $skip: true,
    pokemons: {
      name: true,
    },
  },
})
```

== GraphQL

```graphql
{
  ... @skip(if: true) {
    pokemons {
      name
    }
  }
}
```

:::
