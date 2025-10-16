# Static

<!--@include: @/_snippets/example-links/document-builder.md-->

## Overview

The static document builder lets you build GraphQL documents **statically without needing a client instance**. It supports two syntaxes:

- **String** - GraphQL syntax with type inference
- **Object** - TypeScript objects with type-safe selection sets

```ts
import { Graffle } from 'graffle'

// String syntax
const doc1 = Graffle.gql(`query { pokemons { name hp } }`)

// Object syntax
const doc2 = Graffle.gql({
  query: {
    getPokemons: {
      pokemons: { name: true, hp: true },
    },
  },
})
```

Once built, documents can be sent using the [Instance API](/guides/documents/instance/sending).

## Root-Level Builders

For simpler queries and mutations, Graffle provides dedicated root-level builders that let you skip the operation wrapper:

### Single Field Operations

Build queries and mutations for individual fields directly:

```ts
import { mutation, query } from 'graffle'

// Query a single field
const getUserDoc = query.user({ id: true, name: true })
// Generates: { user { id name } }

// Mutate a single field
const createUserDoc = mutation.createUser({ id: true })
// Generates: mutation { createUser { id } }
```

### Multi-Field Operations with `$batch`

Use `$batch` to select multiple root fields in a single operation:

```ts
import { mutation, query } from 'graffle'

// Multiple queries
const batchQueryDoc = query.$batch({
  user: { id: true, name: true },
  posts: { id: true, title: true },
  comments: { id: true, text: true },
})
// Generates:
// {
//   user { id name }
//   posts { id title }
//   comments { id text }
// }

// Multiple mutations
const batchMutationDoc = mutation.$batch({
  createUser: { id: true },
  updatePost: { success: true },
  deleteComment: { success: true },
})
// Generates:
// mutation {
//   createUser { id }
//   updatePost { success }
//   deleteComment { success }
// }
```

::: tip When to Use Root-Level Builders
Use `query` and `mutation` for:

- Quick, focused operations on single or multiple fields
- Simple cases without complex nesting or variables
- Schema-less workflows where you don't need generation

Use `Graffle.gql()` for:

- Complex documents with variables and arguments
- Multiple operations with different names
- Full control over the document structure
  :::

## Fields

Fields control which data appears in your GraphQL document using boolean values:

:::tabs
== object

```ts
const doc = Graffle.gql({
  query: {
    getPokemons: {
      pokemons: {
        name: true,
        hp: true,
      },
    },
  },
})
```

== string

```ts
const doc = Graffle.gql(`
  query getPokemons {
    pokemons {
      name
      hp
    }
  }
`)
```

== native

```graphql
query getPokemons {
  pokemons {
    name
    hp
  }
}
```

:::

**How it works:**

- `true` - Adds the field to the document
- `false` - Removes the field from the document (useful with type spread patterns)
- Nested objects - Select fields on related types

```ts
const doc = Graffle.gql({
  query: {
    getPokemons: {
      pokemons: {
        name: true,
        trainer: {
          name: true,
          class: true,
        },
      },
    },
  },
})
```

## Multiple Operations

:::tabs
== object

```ts
const doc = Graffle.gql({
  query: {
    getPokemon: {
      pokemonByName: {
        $: { name: $('name').required() },
        name: true,
        hp: true,
      },
    },
  },
  mutation: {
    addPokemon: {
      addPokemon: {
        $: {
          name: $.required(),
          type: $.required(),
        },
        name: true,
      },
    },
  },
})
```

== string

```ts
const doc = Graffle.gql(`
  query getPokemon($name: String!) {
    pokemonByName(name: $name) {
      name
      hp
    }
  }

  mutation addPokemon($name: String!, $type: PokemonType!) {
    addPokemon(name: $name, type: $type) {
      name
    }
  }
`)
```

== native

```graphql
query getPokemon($name: String!) {
  pokemonByName(name: $name) {
    name
    hp
  }
}

mutation addPokemon($name: String!, $type: PokemonType!) {
  addPokemon(name: $name, type: $type) {
    name
  }
}
```

:::

## Aliases

Aliases allow you to request the same field multiple times with different arguments.

:::tabs
== object

```ts
const doc = Graffle.gql({
  query: {
    getPokemons: {
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
    },
  },
})
```

== string

```ts
const doc = Graffle.gql(`
  query getPokemons {
    elderPokemons: pokemons(filter: { birthday: { lte: "1924-01-01" } }) {
      name
    }
    babyPokemons: pokemons(filter: { birthday: { gte: "2023-01-01" } }) {
      name
    }
  }
`)
```

== native

```graphql
query getPokemons {
  elderPokemons: pokemons(filter: { birthday: { lte: "1924-01-01" } }) {
    name
  }
  babyPokemons: pokemons(filter: { birthday: { gte: "2023-01-01" } }) {
    name
  }
}
```

:::

## Directives

GraphQL directives like `@skip` and `@include` are written using special `$` prefixed properties.

:::tabs
== object

```ts
const doc = Graffle.gql({
  query: {
    getTrainers: {
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
    },
  },
})
```

== string

```ts
const doc = Graffle.gql(`
  query getTrainers {
    trainers {
      name
      id @skip(if: true)
      pokemon {
        id @include(if: false)
        name
      }
    }
  }
`)
```

== native

```graphql
query getTrainers {
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
const doc = Graffle.gql({
  query: {
    getPokemons: {
      ___: {
        $skip: true,
        pokemons: {
          name: true,
        },
      },
    },
  },
})
```

**Note on @defer and @stream:**

The experimental `@defer` and `@stream` directives are not yet supported in Graffle. These directives enable incremental delivery of GraphQL responses. Support is planned as a future extension. [Track progress in #1134](https://github.com/graffle-js/graffle/issues/1134).

## Enums

Enum values are passed as strings and automatically validated by TypeScript based on your schema.

:::tabs
== object

```ts
const doc = Graffle.gql({
  query: {
    getPokemons: {
      pokemons: {
        $: { filter: { type: 'FIRE' } },
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
  query getPokemons {
    pokemons(filter: { type: FIRE }) {
      name
      type
    }
  }
`)
```

== native

```graphql
query getPokemons {
  pokemons(filter: { type: FIRE }) {
    name
    type
  }
}
```

:::

TypeScript will provide autocomplete for valid enum values and show errors for invalid ones.

## Inline Fragments

Inline fragments are used to select fields on specific types in unions and interfaces. Use the `___on_TypeName` syntax.

### Unions

:::tabs
== object

```ts
const doc = Graffle.gql({
  query: {
    getBattles: {
      battles: {
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
      },
    },
  },
})
```

== string

```ts
const doc = Graffle.gql(`
  query getBattles {
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
`)
```

== native

```graphql
query getBattles {
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

### Interfaces

Interface fragments work the same way as unions, using `___on_TypeName` for each implementing type.

:::tabs
== object

```ts
const doc = Graffle.gql({
  query: {
    getBeings: {
      beings: {
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
      },
    },
  },
})
```

== string

```ts
const doc = Graffle.gql(`
  query getBeings {
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
`)
```

== native

```graphql
query getBeings {
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

### Field Groups

Field groups allow you to apply directives to multiple fields at once using the special `___` key.

:::tabs
== object

```ts
const doc = Graffle.gql({
  query: {
    getPokemons: {
      ___: {
        $skip: true,
        pokemons: {
          name: true,
        },
      },
    },
  },
})
```

== string

```ts
const doc = Graffle.gql(`
  query getPokemons {
    ... @skip(if: true) {
      pokemons {
        name
      }
    }
  }
`)
```

== native

```graphql
query getPokemons {
  ... @skip(if: true) {
    pokemons {
      name
    }
  }
}
```

:::

## Arguments

:::tabs
== object

```ts
const doc = Graffle.gql({
  query: {
    getPokemon: {
      pokemonByName: {
        $: { name: 'Pikachu' },
        name: true,
        hp: true,
        attack: true,
      },
    },
  },
})
```

== string

```ts
const doc = Graffle.gql(`
  query getPokemon {
    pokemonByName(name: "Pikachu") {
      name
      hp
      attack
    }
  }
`)
```

== native

```graphql
query getPokemon {
  pokemonByName(name: "Pikachu") {
    name
    hp
    attack
  }
}
```

:::

## Variables

### Basic Usage

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

### Modifiers (Objects Only)

The object syntax provides additional control over variables:

```ts
import { $ } from 'graffle'

// Required variable
$('name').required()

// Optional variable
$('name').optional()

// Variable with default value
$.default('Ash')

// Anonymous variable
$.required()
```

### Schema-Less Mode Type Hints

When using the static builder without a generated schema, you can provide explicit type hints for variables using typed builder methods:

```ts
import { $ } from 'graffle'

const doc = Graffle.gql({
  query: {
    getPokemon: {
      pokemonByName: {
        $: {
          name: $.String(),      // → string
          level: $.Int(),        // → number
          isShiny: $.Boolean(),  // → boolean
          id: $.ID(),           // → string
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

**Type inference rules:**

- **With schema** (generated client): Plain `$` infers types from the schema
- **Without schema** (static mode):
  - Plain `$` → `unknown` (no type information)
  - `$.String()`, etc. → trusts the type hint you provide

Type hints can be combined with modifiers:

```ts
$.String().required()    // Required string variable
$.Int().default(10)      // Optional number with default
$.Boolean().as('flag')   // Boolean with custom name
```

### Hoisting Arguments

By default, the builder extracts **all** arguments as GraphQL variables (`hoistArguments: true`). This provides:

- Better query caching (same query structure, different variable values)
- Automatic custom scalar encoding
- Alignment with GraphQL best practices

**Example with default behavior:**

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

// Generates:
// query($name: String!) {
//   trainerByName(name: $name) { name class }
// }
// Variables: { name: "Ash" }
```

**Disabling automatic extraction:**

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

// Generates:
// query { trainerByName(name: "Ash") { name } }
```

**Note:** Explicit `$` markers are ALWAYS extracted as variables, regardless of this setting:

```ts
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

// Generates:
// query($pokemonName: String!) {
//   pokemonByName(name: $pokemonName) { name trainer { name } }
// }
```

### Conflict Resolution

When both explicit `$` markers and auto-hoisted arguments want the same variable name, automatic renaming occurs:

```ts
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

## Picking a Syntax

**Use Object when:**

- You want IDE autocomplete for all fields
- You're building tools or libraries
- You need programmatic document generation
- You prefer TypeScript over GraphQL syntax

**Use String when:**

- You're copying queries from GraphQL Playground
- You have existing GraphQL documents
- You prefer standard GraphQL syntax
- You're migrating from another GraphQL client

Both syntaxes are equally powerful and type-safe - choose based on your preference and workflow.

## Sending

Once built, pass documents to a client instance. See [Sending](/guides/documents/instance) for details.
