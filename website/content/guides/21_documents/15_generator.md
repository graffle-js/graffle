# Generator

## Overview

The Graffle generator enhances the [static document builder](/guides/documents/static) with **full schema type safety**. After running `graffle generate`, you get:

- **Autocomplete** - IDE suggests all schema fields, types, and enums
- **Type validation** - TypeScript catches invalid fields and arguments at compile time
- **Custom scalars** - Proper encoding/decoding for Date, JSON, etc.
- **Root field shortcuts** - Direct access to `Graffle.query.*` and `Graffle.mutation.*`
- **Better performance** - Pre-computed types for faster IDE responsiveness

The base static API continues to work - generation just adds type safety on top.

## Setup

```bash
graffle generate
```

This creates a `graffle/` directory with generated types for your schema.

## What Changes

### Before Generation

```ts
import { Graffle } from 'graffle'

// Works, but no autocomplete or type checking
const doc = Graffle.gql({
  query: {
    getUser: {
      user: {
        name: true,
        emai: true, // Typo not caught
      },
    },
  },
})
```

### After Generation

```ts
import { Graffle } from './graffle/_.js'

// Full autocomplete and type safety
const doc = Graffle.gql({
  query: {
    getUser: {
      user: {
        name: true,
        emai: true, // ❌ TypeScript error: 'emai' doesn't exist
      },
    },
  },
})
```

## Root Field Shortcuts

Generated code adds convenient shortcuts for accessing root fields directly:

```ts
import { Graffle } from './graffle/_.js'

// Instead of Graffle.gql({ query: { op: { pokemons: { ... } } } })
const doc = Graffle.query.pokemons({
  name: true,
  hp: true,
  trainer: {
    name: true,
  },
})
```

These shortcuts:

- Generate single-operation documents
- Have full type safety for the specific field
- Support all the same features (arguments, variables, fragments)
- Are faster to write for simple queries

## Custom Scalars

The generator creates proper type mappings for custom scalars:

```ts
import { Graffle } from './graffle/_.js'

const doc = Graffle.query.pokemons({
  name: true,
  birthday: true, // TypeScript knows this is Date
})

const client = Graffle.create()
const result = await client.gql(doc).$send()

// result.pokemons[0].birthday is Date, not string
console.log(result.pokemons[0].birthday.getFullYear())
```

Without generation, custom scalars remain as strings in the type system.

## Type Inference

The generator enables precise result type inference:

```ts
import { Graffle } from './graffle/_.js'

const doc = Graffle.query.pokemonByName({
  $: { name: 'Pikachu' },
  name: true,
  hp: true,
})

// TypeScript infers the exact shape
const client = Graffle.create()
const result = await client.gql(doc).$send()
// result: { pokemonByName: { name: string; hp: number } | null }
```

## Variables

Generated types validate variable usage:

```ts
import { $, Graffle } from './graffle/_.js'

const doc = Graffle.query.pokemonByName({
  $: {
    name: $('pokemonName').required(),
    // TypeScript knows 'name' expects String! from schema
  },
  name: true,
  type: true,
})

const client = Graffle.create()
// TypeScript enforces correct variable types
await client.gql(doc).$send({ pokemonName: 'Pikachu' })
await client.gql(doc).$send({ pokemonName: 123 }) // ❌ Error: number not assignable to string
```

## Enums

Generated enums provide autocomplete and validation:

```ts
import { Graffle } from './graffle/_.js'

const doc = Graffle.query.pokemons({
  $: {
    filter: {
      type: 'FIRE', // IDE autocompletes: 'FIRE' | 'WATER' | 'GRASS' | ...
    },
  },
  name: true,
  type: true,
})
```
