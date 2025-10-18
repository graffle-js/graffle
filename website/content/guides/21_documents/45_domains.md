# Domains <GeneratedClientBadge />

Organize root field methods by domain or resource instead of operation type.

## Overview

By default, the generated client organizes methods by operation type (`query` and `mutation`). Domain organization provides an alternative grouping where methods are organized by resource or entity:

```typescript
// Default: Logical organization
await graffle.query.pokemonByName({ name: 'Pikachu' })
await graffle.mutation.addPokemon({ input: { name: 'Pikachu' } })

// With domains: Resource-oriented organization
await graffle.pokemon.getOne({ name: 'Pikachu' })
await graffle.pokemon.create({ input: { name: 'Pikachu' } })
```

Both organizations can be enabled simultaneously, giving you flexibility in how you access your schema.

**Domain organization is best when:**

- Your schema has clear resource/entity grouping
- You want a more RESTful or resource-oriented API feel
- You have many CRUD operations on the same entities

**Logical organization is best when:**

- Your GraphQL schema follows operation-type grouping
- You prefer standard GraphQL conventions
- Fields don't follow a clear domain pattern

**Both together** gives maximum flexibility - use whichever feels more natural for each use case.

## Configuration

Enable domain organization by providing explicit grouping rules in your generator configuration:

```typescript
// graffle.config.ts
import { Generator } from 'graffle/generator'

export default Generator.configure({
  methodsOrganization: {
    logical: true, // Keep query/mutation organization
    domains: { // Add domain organization
      groups: [{ // Each group provides an organizational view
        rules: [
          // Map specific fields to namespace methods
          {
            pattern: 'pokemonByName',
            namespace: 'pokemon',
            methodName: 'getOne',
          },
          { pattern: 'pokemons', namespace: 'pokemon', methodName: 'getMany' },
          { pattern: 'addPokemon', namespace: 'pokemon', methodName: 'create' },
        ],
      }],
    },
  },
})
```

This generates both organizational styles:

```typescript
// Logical (query/mutation)
await graffle.query.pokemonByName({ name: 'Pikachu' })
await graffle.query.pokemons()
await graffle.mutation.addPokemon({ input: { name: 'Pikachu' } })

// Domain (resource-oriented)
await graffle.pokemon.getOne({ name: 'Pikachu' })
await graffle.pokemon.getMany()
await graffle.pokemon.create({ input: { name: 'Pikachu' } })
```

### Groups

Groups provide independent organizational views over your schema. Each group:

- Gets a fresh view of all root fields
- Can organize fields differently than other groups
- Allows the same field to appear in multiple namespaces across different groups

This enables multiple organizational perspectives over the same schema:

```typescript
export default Generator.configure({
  methodsOrganization: {
    domains: {
      groups: [
        {
          // Group 1: CRUD-style organization
          rules: [
            {
              pattern: 'pokemonByName',
              namespace: 'pokemon',
              methodName: 'getOne',
            },
            {
              pattern: 'pokemons',
              namespace: 'pokemon',
              methodName: 'getMany',
            },
          ],
        },
        {
          // Group 2: Query-style organization
          rules: [
            {
              pattern: 'pokemonByName',
              namespace: 'byName',
              methodName: 'pokemon',
            },
            {
              pattern: 'trainerByName',
              namespace: 'byName',
              methodName: 'trainer',
            },
          ],
        },
      ],
    },
  },
})
```

Both organizational styles coexist:

```typescript
// Group 1: CRUD style
await graffle.pokemon.getOne({ name: 'Pikachu' })
await graffle.pokemon.getMany()

// Group 2: Query style
await graffle.byName.pokemon({ name: 'Pikachu' })
await graffle.byName.trainer({ name: 'Ash' })
```

### Group Defaults

Provide default values for namespace and methodName within a group. Rules inherit these defaults but can override them:

```typescript
{
  groups: [{
    defaults: {
      namespace: 'pokemon', // Default namespace for all rules
      methodName: (fieldName) => fieldName.replace(/^pokemon/, ''), // Default transform
    },
    rules: [
      { pattern: 'pokemonByName' }, // Uses defaults → pokemon.ByName
      { pattern: 'pokemonById' },   // Uses defaults → pokemon.ById
      { pattern: 'pokemons', methodName: 'getAll' }, // Overrides methodName → pokemon.getAll
    ],
  }],
}
```

**Benefits:**

- **Reduce repetition** - Set common values once per group
- **Clear intent** - Group configuration shows the organizational strategy
- **Easy overrides** - Rules can still customize when needed

**Example: Versioned API namespaces**

```typescript
{
  groups: [
    {
      defaults: { namespace: 'v1' },
      rules: [
        { pattern: 'pokemonByName', methodName: 'getPokemon' },
        { pattern: 'trainerById', methodName: 'getTrainer' },
      ],
    },
    {
      defaults: { namespace: 'v2' },
      rules: [
        { pattern: 'pokemonByName', methodName: 'getPokemon' },
        { pattern: 'trainerById', methodName: 'getTrainer' },
      ],
    },
  ],
}

// Usage:
await graffle.v1.getPokemon({ name: 'Pikachu' })
await graffle.v2.getPokemon({ name: 'Pikachu' })
```

### Pattern Matching

#### String Patterns

Use exact string matching for specific fields. Specify `methodName` to rename the method, or omit it to keep the original field name:

```typescript
{
  groups: [{
    rules: [
      { pattern: 'pokemonByName', namespace: 'pokemon', methodName: 'getOne' },
      { pattern: 'pokemons', namespace: 'pokemon' },  // Keeps original name
    ],
  }],
}

// Usage:
await graffle.pokemon.getOne({ name: 'Pikachu' })    // was pokemonByName
await graffle.pokemon.pokemons()                     // kept original name
```

#### RegExp Patterns

Use regular expressions to match multiple fields. You can provide a static `methodName` that applies to all matches:

```typescript
{
  groups: [{
    rules: [
      // All pokemon fields → pokemon domain, keep original names
      { pattern: /^pokemon/, namespace: 'pokemon' },

      // All *ByName fields → byName domain, renamed to "find"
      { pattern: /ByName$/, namespace: 'byName', methodName: 'find' },
    ],
  }],
}

// pokemonByName → pokemon.pokemonByName (no methodName specified)
// pokemonById   → pokemon.pokemonById   (no methodName specified)
// trainerByName → byName.find           (methodName: 'find')
```

For dynamic method names based on the matched pattern, use capture groups (next section).

#### Capture Groups

Extract parts of field names using RegExp capture groups to reduce boilerplate:

##### Named Capture Groups

Use named groups with `$name` or `${name}` syntax:

```typescript
{
  groups: [{
    rules: [
      {
        pattern: /^(?<resource>\w+)ByName$/,
        namespace: '$resource',
        methodName: 'getOne',
      },
    ],
  }],
}

// Matches all *ByName patterns
// pokemonByName → pokemon.getOne
// trainerByName → trainer.getOne
// battleByName → battle.getOne
```

##### Indexed Capture Groups

Use numbered groups with `$1`, `$2`, etc.:

```typescript
{
  groups: [{
    rules: [
      {
        pattern: /^(\w+)By(Name|Id)$/,
        namespace: '$1',
        methodName: 'getBy$2',
      },
    ],
  }],
}

// pokemonByName → pokemon.getByName
// pokemonById → pokemon.getById
// trainerByName → trainer.getByName
```

##### Advanced: Dynamic Method Names with Functions

For complex logic, use a function to determine method names dynamically. The function receives the field name, operation type, and the RegExp match object:

```typescript
{
  groups: [{
    rules: [
      {
        pattern: /^(?<action>add|update|delete)(?<resource>\w+)$/,
        namespace: '$resource',
        methodName: (fieldName, operationType, match) => {
          if (!match?.groups) return fieldName
          const action = match.groups.action
          // Map schema naming to domain naming conventions
          if (action === 'add') return 'create'
          if (action === 'delete') return 'remove'
          return action
        },
      },
    ],
  }],
}

// addPokemon    → Pokemon.create  (add → create)
// updateTrainer → Trainer.update  (update → update)
// deleteBattle  → Battle.remove   (delete → remove)
```

This is useful when you need branching logic or access to the operation type to determine the method name.

##### String Template Transformations

Apply case transformations in template strings using `${transform:captureName}` syntax (or `${transform:1}` for indexed groups):

```typescript
{
  groups: [{
    rules: [
      {
        pattern: /^(?<resource>\w+)ByName$/,
        namespace: '${kebab:resource}',  // pokemonSpecies → pokemon-species
        methodName: 'getOne',
      },
    ],
  }],
}
```

**Available transformations:** `kebab`, `pascal`, `camel`, `snake`, `constant`, `title`, `upper`, `lower`, `capFirst`, `uncapFirst`

#### Nested Namespaces

Organize methods into hierarchical namespace structures using dot-notation:

```typescript
{
  groups: [{
    rules: [
      {
        pattern: 'pokemonByName',
        namespace: 'api.v2.pokemon', // Dot-notation for nesting
        methodName: 'getOne',
      },
    ],
  }],
}

// Usage: nested namespace structure
await graffle.api.v2.pokemon.getOne({ name: 'Pikachu' })
```

##### Root-Level Methods

Use `null` to place methods at the root level alongside logical organization:

```typescript
{
  groups: [{
    rules: [
      {
        pattern: 'pokemonByName',
        namespace: null, // Place at root level
        methodName: 'getPokemon',
      },
    ],
  }],
}

// Usage: method at root level
await graffle.getPokemon({ name: 'Pikachu' })
```

This is useful for promoting commonly-used methods or creating a flatter API structure.

### Aliases

Use arrays for `namespace` and `methodName` to create multiple names for the same methods. When both are arrays, you get a Cartesian product of all combinations:

```typescript
{
  groups: [{
    rules: [
      {
        pattern: 'pokemonByName',
        namespace: ['pokemon', 'poke'],     // Multiple namespaces
        methodName: ['getOne', 'get'],      // Multiple method names
      },
    ],
  }],
}

// Creates all 4 combinations (2 namespaces × 2 methods):
await graffle.pokemon.getOne({ name: 'Pikachu' })
await graffle.pokemon.get({ name: 'Pikachu' })
await graffle.poke.getOne({ name: 'Pikachu' })
await graffle.poke.get({ name: 'Pikachu' })
```

### Precedence

::: warning Rule Order Matters
Rules are evaluated sequentially, and **the first matching rule wins**. Order rules from most specific to most general. Graffle warns about common issues like shadowed patterns during code generation.
:::

```typescript
{
  groups: [{
    rules: [
      // Most specific first
      { pattern: 'pokemonByName', namespace: 'pokemon', methodName: 'getByName' },
      { pattern: /^pokemonById$/, namespace: 'pokemon', methodName: 'getById' },

      // Less specific
      { pattern: /^pokemon/, namespace: 'pokemon', methodName: 'query' },
    ],
  }],
}
```

### Linting

#### Unmatched Fields

Fields that don't match any rule are **not included** in domain methods. They remain accessible only through logical organization:

```typescript
{
  groups: [{
    rules: [
      { pattern: 'pokemonByName', namespace: 'pokemon' },
    ],
  }],
}

// ✅ Available
await graffle.query.pokemonByName({ name: 'Pikachu' })
await graffle.query.unmatchedField({ id: '123' })

// ✅ Available (matches rule)
await graffle.pokemon.pokemonByName({ name: 'Pikachu' })

// ❌ Not available (doesn't match any rule)
await graffle.unmatchedDomain.unmatchedField({ id: '123' })
```

#### Conflict Detection

Graffle detects when multiple fields map to the same namespace and method name. Use unique method names within each namespace:

```typescript
{
  groups: [{
    rules: [
      // ❌ Conflict - both map to pokemon.getOne
      { pattern: 'pokemonByName', namespace: 'pokemon', methodName: 'getOne' },
      { pattern: 'pokemonById', namespace: 'pokemon', methodName: 'getOne' },

      // ✅ Fixed with unique method names
      { pattern: 'pokemonByName', namespace: 'pokemon', methodName: 'getByName' },
      { pattern: 'pokemonById', namespace: 'pokemon', methodName: 'getById' },

      // ✅ Same method name in different namespaces is OK
      { pattern: 'trainerByName', namespace: 'trainer', methodName: 'getOne' },
    ],
  }],
}
```

### Only Domain Organization

If you want **only** domain-based methods, disable logical organization:

```typescript
export default Generator.configure({
  methodsOrganization: {
    logical: false, // Disable query/mutation
    domains: { // Only domain methods
      groups: [{
        rules: [
          {
            pattern: 'pokemonByName',
            namespace: 'pokemon',
            methodName: 'getOne',
          },
        ],
      }],
    },
  },
})
```

Now only domain methods are available:

```typescript
// ✅ Available
await graffle.pokemon.getOne({ name: 'Pikachu' })

// ❌ Not available
await graffle.query.pokemonByName({ name: 'Pikachu' })
```

## Example

A complete example organizing multiple resources:

```typescript
export default Generator.configure({
  methodsOrganization: {
    domains: {
      groups: [{
        rules: [
          // Pokemon domain
          {
            pattern: 'pokemonByName',
            namespace: 'pokemon',
            methodName: 'getOne',
          },
          { pattern: 'pokemons', namespace: 'pokemon', methodName: 'getMany' },
          { pattern: 'addPokemon', namespace: 'pokemon', methodName: 'create' },
          {
            pattern: 'updatePokemon',
            namespace: 'pokemon',
            methodName: 'update',
          },

          // Trainer domain
          {
            pattern: 'trainerById',
            namespace: 'trainer',
            methodName: 'getOne',
          },
          { pattern: 'trainers', namespace: 'trainer', methodName: 'getMany' },
          { pattern: 'addTrainer', namespace: 'trainer', methodName: 'create' },

          // Battle domain
          { pattern: /^battle/, namespace: 'battle' },
        ],
      }],
    },
  },
})
```

Usage:

```typescript
// Pokemon operations
await graffle.pokemon.getOne({ name: 'Pikachu' })
await graffle.pokemon.getMany()
await graffle.pokemon.create({ input: { name: 'Pikachu' } })

// Trainer operations
await graffle.trainer.getOne({ id: '123' })
await graffle.trainer.getMany()

// Battle operations (using original field names)
await graffle.battle.battleById({ id: '456' })
await graffle.battle.battles()
```

## Architecture

Domain organization generates runtime code in the `domains/` directory alongside your type definitions. This code is fully tree-shakable using modern bundlers.

### Layout

Generated structure:

```
graffle/modules/
  domains/
    pokemon/
      constants.js       # Field name constants
      methods.js         # Method implementations
      index.js          # Namespace exports
    trainer/
      constants.js
      methods.js
      index.js
    index.js            # Root exports
```

### Tree-Shaking

Only code you use gets bundled:

```typescript
import { pokemon } from './graffle/modules/domains'

// Only bundles:
// - domains/pokemon/constants.js (GET_ONE constant)
// - domains/pokemon/methods.js (getOne function)
// - domains/pokemon/index.js (export)
// - domains/index.js (export * as pokemon)

await pokemon.getOne({ name: 'Pikachu' })
```

Unused namespaces (`trainer`, etc.) and unused methods (`getMany`, etc.) are completely removed from your bundle.

### Aliases

Aliases are implemented using ESM export aliases, which have **zero runtime cost**:

```javascript
// Generated code (simplified):
const getOne = (args) =>
  executeRootField(context, 'Query', 'pokemonByName', args)

// Multiple export names for the same function
export { getOne, getOne as find, getOne as get }

// Namespace aliases point to the same module
export * as pokemon from './pokemon.js'
export * as poke from './pokemon.js'
```

Modern bundlers recognize these as the same reference and deduplicate them automatically. Whether you use one alias or ten, the bundle size remains the same - only the function implementation is included once.
