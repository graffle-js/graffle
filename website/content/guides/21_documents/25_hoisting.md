# Variable Hoisting

## Overview

**Variable hoisting** is the process of lifting field arguments to the GraphQL operation level as variables. Instead of embedding argument values directly in the query string, hoisting extracts them into a separate variables object that's passed alongside the query.

### Why Hoisting?

Hoisting arguments to variables provides several important benefits:

- **Better query caching** - Same query structure with different variable values allows GraphQL servers to cache and reuse parsed queries
- **Automatic custom scalar encoding/decoding** - Graffle can automatically encode and decode custom scalars when they flow through variables
- **Alignment with GraphQL best practices** - Variables are the recommended way to parameterize GraphQL queries
- **Separation of query structure from data** - Keeps the query structure stable while values change

### Example

Without hoisting, arguments are embedded directly:

```graphql
query {
  pokemonByName(name: "Pikachu") {
    name
    hp
  }
}
```

With hoisting, arguments become variables:

```graphql
query($name: String!) {
  pokemonByName(name: $name) {
    name
    hp
  }
}

# Variables: { "name": "Pikachu" }
```

## Two Approaches

Graffle supports two ways to hoist arguments to variables: **manual hoisting** and **automatic hoisting**.

### Manual Hoisting

**Manual hoisting** allows you to explicitly mark which arguments should become variables using the `$` sentinel.

#### Basic Usage

:::tabs
== object

```ts
import { $ } from 'graffle'

const doc = Graffle.gql({
  query: {
    getPokemon: {
      pokemonByName: {
        $: { name: $('pokemonName').required() },
        name: true,
        type: true,
      },
    },
  },
})
```

== string

```ts
const doc = Graffle.gql(`
  query getPokemon($pokemonName: String!) {
    pokemonByName(name: $pokemonName) {
      name
      type
    }
  }
`)
```

== native

```graphql
query getPokemon($pokemonName: String!) {
  pokemonByName(name: $pokemonName) {
    name
    type
  }
}
```

:::

**Generates:**

```graphql
query getPokemon($pokemonName: String!) {
  pokemonByName(name: $pokemonName) {
    name
    type
  }
}
```

#### Variable Modifiers

The object syntax provides additional control over manually hoisted variables:

```ts
import { $ } from 'graffle'

// Required variable
$('name').required()

// Optional variable
$('name').optional()

// Variable with default value
$.default('Ash')

// Anonymous variable (name inferred from argument)
$.required()
```

#### Schema-Less Mode Type Hints

When using manual hoisting without a generated schema, provide explicit type hints:

```ts
import { $ } from 'graffle'

const doc = Graffle.gql({
  query: {
    getPokemon: {
      pokemonByName: {
        $: {
          name: $.String(), // → string
          level: $.Int(), // → number
          isShiny: $.Boolean(), // → boolean
          id: $.ID(), // → string
        },
        name: true,
      },
    },
  },
})
```

**Available type hints:**

- `$.String()` - Maps to TypeScript `string`
- `$.Int()` - Maps to TypeScript `number`
- `$.Float()` - Maps to TypeScript `number`
- `$.Boolean()` - Maps to TypeScript `boolean`
- `$.ID()` - Maps to TypeScript `string`

Type hints can be combined with modifiers:

```ts
$.String().required() // Required string variable
$.Int().default(10) // Optional number with default
$.Boolean().as('flag') // Boolean with custom name
```

### Automatic Hoisting

**Automatic hoisting** extracts **all** arguments as GraphQL variables without requiring explicit `$` markers. This is the default behavior controlled by the `hoistArguments` setting.

#### Default Behavior

By default, `hoistArguments: true` automatically extracts all arguments:

```ts
const doc = Graffle.gql({
  query: {
    getTrainer: {
      trainerByName: {
        $: { name: 'Ash' },
        name: true,
        class: true,
      },
    },
  },
})
```

**Generates:**

```graphql
query($name: String!) {
  trainerByName(name: $name) {
    name
    class
  }
}

# Variables: { "name": "Ash" }
```

#### Disabling Automatic Hoisting

You can disable automatic hoisting globally:

```ts
import { staticBuilderDefaults } from 'graffle/extensions/document-builder'

staticBuilderDefaults.hoistArguments = false

const doc = Graffle.gql({
  query: {
    getTrainer: {
      trainerByName: {
        $: { name: 'Ash' },
        name: true,
      },
    },
  },
})
```

**Generates:**

```graphql
query {
  trainerByName(name: "Ash") {
    name
  }
}
```

::: warning Manual Hoisting Always Applies
Explicit `$` markers for manual hoisting are **always** extracted as variables, regardless of the `hoistArguments` setting.
:::

**Example showing manual hoisting takes precedence:**

```ts
import { $ } from 'graffle'
import { staticBuilderDefaults } from 'graffle/extensions/document-builder'

staticBuilderDefaults.hoistArguments = false

const doc = Graffle.gql({
  query: {
    getPokemon: {
      pokemonByName: {
        $: {
          name: $('pokemonName'), // Always extracted
        },
        name: true,
        trainer: {
          name: true,
        },
      },
    },
  },
})
```

**Generates:**

```graphql
query($pokemonName: String!) {
  pokemonByName(name: $pokemonName) {
    name
    trainer {
      name
    }
  }
}
```

## Conflict Resolution

When both manual hoisting (explicit `$` markers) and automatic hoisting want the same variable name, Graffle performs automatic renaming to avoid conflicts:

```ts
import { $ } from 'graffle'

const doc = Graffle.gql({
  query: {
    getTrainer: {
      trainerByName: {
        $: {
          name: $('trainerName'), // Gets: $trainerName
        },
        name: true,
        class: true,
      },
    },
  },
})
```

**Generates:**

```graphql
query($trainerName: String!) {
  trainerByName(name: $trainerName) {
    name
    class
  }
}
```

## Choosing an Approach

**Use Manual Hoisting when:**

- You want explicit control over which arguments become variables
- You're building reusable query fragments
- You need fine-grained control over variable naming and types
- You're working in schema-less mode and need type hints

**Use Automatic Hoisting when:**

- You want all arguments to be variables (default best practice)
- You're building simple queries where explicit control isn't needed
- You want to minimize boilerplate code
- You trust Graffle's automatic variable naming

Both approaches can be combined in the same document, with manual hoisting always taking precedence over automatic hoisting.
