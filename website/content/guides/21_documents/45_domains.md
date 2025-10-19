# Domains <GeneratedClientBadge />

Organize root field methods by domain or resource instead of operation type.

## Overview

By default, the generated client organizes methods by operation type (`query` and `mutation`). Domain organization provides an alternative grouping where methods are organized by resource or entity:

```typescript
// Default: Logical organization
await graffle.query.pokemonByName({ name: 'Pikachu' })
await graffle.mutation.addPokemon({ input: { name: 'Pikachu' } })

// With domains: Resource-oriented organization
await graffle.pokemon.findByName({ name: 'Pikachu' })
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
      rules: [
        // Map specific fields to namespaces with custom method names
        { pattern: 'pokemonByName', path: 'pokemon', methodName: 'findByName' },
        { pattern: 'pokemons', path: 'pokemon', methodName: 'list' },
        { pattern: 'addPokemon', path: 'pokemon', methodName: 'create' },
      ],
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
await graffle.pokemon.findByName({ name: 'Pikachu' })
await graffle.pokemon.list()
await graffle.pokemon.create({ input: { name: 'Pikachu' } })
```

### Pattern Matching

#### String Patterns

Use exact string matching for specific fields. Specify `methodName` to rename the method, or omit it to keep the original field name:

```typescript
{
  domains: {
    rules: [
      { pattern: 'pokemonByName', path: 'pokemon', methodName: 'findByName' },
      { pattern: 'pokemons', path: 'pokemon' },  // Keeps original name "pokemons"
    ],
  },
}

// Usage:
await graffle.pokemon.findByName({ name: 'Pikachu' })    // was pokemonByName
await graffle.pokemon.pokemons()                          // kept original name
```

#### RegExp Patterns

Use regular expressions to match multiple fields. You can provide a static `methodName` that applies to all matches:

```typescript
{
  domains: {
    rules: [
      // All pokemon fields → pokemon domain, keep original names
      { pattern: /^pokemon/, path: 'pokemon' },

      // All *ByName fields → byName domain, renamed to "find"
      { pattern: /ByName$/, path: 'byName', methodName: 'find' },
    ],
  },
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
  domains: {
    rules: [
      {
        pattern: /^(?<resource>\w+)ByName$/,
        path: '$resource',
        methodName: 'findByName',
      },
    ],
  },
}

// Matches all *ByName patterns
// pokemonByName → pokemon.findByName
// trainerByName → trainer.findByName
// battleByName → battle.findByName
```

##### Indexed Capture Groups

Use numbered groups with `$1`, `$2`, etc.:

```typescript
{
  domains: {
    rules: [
      {
        pattern: /^(\w+)By(Name|Id)$/,
        path: '$1',
        methodName: 'getBy$2',
      },
    ],
  },
}

// pokemonByName → pokemon.getByName
// pokemonById → pokemon.getById
// trainerByName → trainer.getByName
```

##### Advanced: Dynamic Method Names with Functions

For complex logic, use a function to determine method names dynamically. The function receives the field name, operation type, and the RegExp match object:

```typescript
{
  domains: {
    rules: [
      {
        pattern: /^(?<action>add|update|delete)(?<resource>\w+)$/,
        path: '$resource',
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
  },
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
  domains: {
    rules: [
      {
        pattern: /^(?<resource>\w+)ByName$/,
        path: '${kebab:resource}',  // pokemonSpecies → pokemon-species
        methodName: 'findByName',
      },
    ],
  },
}
```

**Available transformations:** `kebab`, `pascal`, `camel`, `snake`, `constant`, `title`, `upper`, `lower`, `capFirst`, `uncapFirst`

#### Nested Namespaces

Organize methods into hierarchical namespace structures using dot-notation:

```typescript
{
  domains: {
    rules: [
      {
        pattern: 'pokemonByName',
        path: 'api.v2.pokemon', // Dot-notation for nesting
        methodName: 'findByName',
      },
    ],
  },
}

// Usage: nested namespace structure
await graffle.api.v2.pokemon.findByName({ name: 'Pikachu' })
```

##### Root-Level Methods

Use `null` to place methods at the root level alongside logical organization:

```typescript
{
  domains: {
    rules: [
      {
        pattern: 'pokemonByName',
        path: null, // Place at root level
        methodName: 'getPokemon',
      },
    ],
  },
}

// Usage: method at root level
await graffle.getPokemon({ name: 'Pikachu' })
```

This is useful for promoting commonly-used methods or creating a flatter API structure.

### Aliases

Use arrays for `path` and `methodName` to create multiple names for the same methods. When both are arrays, you get a Cartesian product of all combinations:

```typescript
{
  domains: {
    rules: [
      {
        pattern: 'pokemonByName',
        path: ['pokemon', 'poke'],     // Multiple paths
        methodName: ['findByName', 'getOne'],      // Multiple method names
      },
    ],
  },
}

// Creates all 4 combinations (2 paths × 2 methods):
await graffle.pokemon.findByName({ name: 'Pikachu' })
await graffle.pokemon.getOne({ name: 'Pikachu' })
await graffle.poke.findByName({ name: 'Pikachu' })
await graffle.poke.getOne({ name: 'Pikachu' })
```

### Precedence

::: warning Rule Order Matters
Rules are evaluated sequentially, and **the first matching rule wins**. Order rules from most specific to most general. Graffle warns about common issues like shadowed patterns during code generation.
:::

```typescript
{
  domains: {
    rules: [
      // Most specific first
      { pattern: 'pokemonByName', path: 'pokemon', methodName: 'getByName' },
      { pattern: /^pokemonById$/, path: 'pokemon', methodName: 'getById' },

      // Less specific
      { pattern: /^pokemon/, path: 'pokemon', methodName: 'query' },
    ],
  },
}
```

### Linting

#### Unmatched Fields

Fields that don't match any rule are **not included** in domain methods. They remain accessible only through logical organization:

```typescript
{
  domains: {
    rules: [
      { pattern: 'pokemonByName', path: 'pokemon' },
    ],
  },
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

Graffle detects when multiple fields map to the same path and method name. Use unique method names within each path:

```typescript
{
  domains: {
    rules: [
      // ❌ Conflict - both map to pokemon.findByName
      { pattern: 'pokemonByName', path: 'pokemon', methodName: 'findByName' },
      { pattern: 'pokemonById', path: 'pokemon', methodName: 'findByName' },

      // ✅ Fixed with unique method names
      { pattern: 'pokemonByName', path: 'pokemon', methodName: 'findByName' },
      { pattern: 'pokemonById', path: 'pokemon', methodName: 'findById' },

      // ✅ Same method name in different paths is OK
      { pattern: 'trainerByName', path: 'trainer', methodName: 'findByName' },
    ],
  },
}
```

##### Understanding Namespace Conflicts

Conflicts only occur when multiple fields map to the **same full namespace path** with the **same method name**:

```typescript
{
  domains: {
    rules: [
      // ✅ NO CONFLICT - Different sub-namespaces (pokemon.query vs pokemon.list)
      { pattern: 'getPokemon', path: 'pokemon.query', methodName: 'get' },
      { pattern: 'listPokemon', path: 'pokemon.list', methodName: 'get' },
      // Creates: graffle.pokemon.query.get() and graffle.pokemon.list.get()

      // ❌ CONFLICT - Same namespace path (pokemon.query) with same method name
      { pattern: 'getPokemon', path: 'pokemon.query', methodName: 'get' },
      { pattern: 'findPokemon', path: 'pokemon.query', methodName: 'get' },
      // Both try to create: graffle.pokemon.query.get()

      // ✅ Fixed with unique method names within same namespace
      { pattern: 'getPokemon', path: 'pokemon.query', methodName: 'getOne' },
      { pattern: 'findPokemon', path: 'pokemon.query', methodName: 'findOne' },
    ],
  },
}
```

**Key principle**: Same method names are allowed in different namespace paths (e.g., `pokemon.query` and `pokemon.list`), but not within the same path.

### Only Domain Organization

If you want **only** domain-based methods, disable logical organization:

```typescript
export default Generator.configure({
  methodsOrganization: {
    logical: false, // Disable query/mutation
    domains: { // Only domain methods
      rules: [
        {
          pattern: 'pokemonByName',
          path: 'pokemon',
          methodName: 'findByName',
        },
      ],
    },
  },
})
```

Now only domain methods are available:

```typescript
// ✅ Available
await graffle.pokemon.findByName({ name: 'Pikachu' })

// ❌ Not available
await graffle.query.pokemonByName({ name: 'Pikachu' })
```

## Bundle Size Considerations

::: warning Current Limitation
All domain code is currently imported upfront in the generated client, which prevents tree-shaking of unused domains. This is tracked in [issue #1410](https://github.com/graffle-js/graffle/issues/1410).
:::

When you configure domains, **all domain code is included in your bundle**, even if you only use a subset of the domains. This is a known limitation of the current implementation.

### Mitigation Strategy

**Be selective about which domains you configure.** Only create domains for the parts of your API you actually need:

```typescript
export default Generator.configure({
  methodsOrganization: {
    domains: {
      rules: [
        // Only define domains for the 5% of your API you actually use
        { pattern: 'pokemonByName', path: 'pokemon', methodName: 'findByName' },
        { pattern: 'pokemons', path: 'pokemon', methodName: 'list' },
        // Don't add rules for trainer, battle, etc. if you don't use them
      ],
    },
  },
})
```

If you only need 5% of your API surface area, only configure domains for those fields. This keeps the generated code small from the start, since fields without matching rules won't have domain methods generated at all.

**Example: Focused API surface**

```typescript
// Large API with hundreds of fields, but you only need a few
export default Generator.configure({
  methodsOrganization: {
    logical: true, // Keep this for full access
    domains: { // Add domains only for frequently-used operations
      rules: [
        // Core user operations - used everywhere
        { pattern: 'currentUser', path: 'user', methodName: 'getCurrent' },
        { pattern: 'updateUser', path: 'user', methodName: 'update' },

        // Common product queries - used often
        { pattern: 'products', path: 'product', methodName: 'list' },
        { pattern: 'productById', path: 'product', methodName: 'get' },
      ],
      // Omit hundreds of other fields - they remain accessible via query/mutation
    },
  },
})

// Small bundle: Only user + product domain code is generated
// Other operations still available via graffle.query.* and graffle.mutation.*
```

This approach gives you:

- **Small bundle size** - only generates code for configured domains
- **Best of both worlds** - domains for common operations, logical organization for everything else
- **Flexibility** - can add more domains later as needed

## Example

A complete example organizing multiple resources:

```typescript
export default Generator.configure({
  methodsOrganization: {
    domains: {
      rules: [
        // Pokemon domain
        { pattern: 'pokemonByName', path: 'pokemon', methodName: 'findByName' },
        { pattern: 'pokemons', path: 'pokemon', methodName: 'list' },
        { pattern: 'addPokemon', path: 'pokemon', methodName: 'create' },
        { pattern: 'updatePokemon', path: 'pokemon', methodName: 'update' },

        // Trainer domain
        { pattern: 'trainerById', path: 'trainer', methodName: 'findById' },
        { pattern: 'trainers', path: 'trainer', methodName: 'list' },
        { pattern: 'addTrainer', path: 'trainer', methodName: 'create' },

        // Battle domain
        { pattern: /^battle/, path: 'battle' },
      ],
    },
  },
})
```

Usage:

```typescript
// Pokemon operations
await graffle.pokemon.findByName({ name: 'Pikachu' })
await graffle.pokemon.list()
await graffle.pokemon.create({ input: { name: 'Pikachu' } })

// Trainer operations
await graffle.trainer.findById({ id: '123' })
await graffle.trainer.list()

// Battle operations (using original field names)
await graffle.battle.battleById({ id: '456' })
await graffle.battle.battles()
```

## Architecture

Domain organization generates runtime code in the `domains/` directory alongside your type definitions.

### Layout

Generated structure:

```
graffle/modules/
  domains/
    pokemon/
      methods.js         # Method implementations
      index.js          # Exports (with aliases if configured)
    trainer/
      methods.js
      index.js
    index.js            # Root exports
```

### Aliases

Aliases are implemented using ESM export aliases, which have **zero runtime cost**:

```javascript
// Generated code (simplified):
const findByName = (context) => (args) =>
  executeRootField(context, 'Query', 'pokemonByName', args)

// Multiple export names for the same function
export { findByName, findByName as get, findByName as getOne }

// Path aliases point to the same module
export * as pokemon from './pokemon/index.js'
export * as poke from './pokemon/index.js'
```

Modern bundlers recognize these as the same reference and deduplicate them automatically. Whether you use one alias or ten, the bundle size remains the same - only the function implementation is included once.
