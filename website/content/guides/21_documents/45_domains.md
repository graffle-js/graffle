# Domains <GeneratedClientBadge />

Organize root field methods by domain or resource instead of operation type.

## Overview

By default, the generated client organizes methods by operation type (`query` and `mutation`). Domain organization provides an alternative grouping where methods are organized by resource or entity:

```typescript
// Default: Logical organization
await graffle.query.pokemonByName({ name: true })
await graffle.mutation.addPokemon({ name: true })

// With domains: Resource-oriented organization
await graffle.pokemon.getOne({ name: true })
await graffle.pokemon.create({ name: true })
```

Both organizations can be enabled simultaneously, giving you flexibility in how you access your schema.

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
await graffle.query.pokemonByName({ name: true })
await graffle.query.pokemons({ name: true })
await graffle.mutation.addPokemon({ name: true })

// Domain (resource-oriented)
await graffle.pokemon.getOne({ name: true })
await graffle.pokemon.getMany({ name: true })
await graffle.pokemon.create({ name: true })
```

## Groups and Defaults

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
            { pattern: 'pokemonByName', namespace: 'pokemon', methodName: 'getOne' },
            { pattern: 'pokemons', namespace: 'pokemon', methodName: 'getMany' },
          ],
        },
        {
          // Group 2: Query-style organization
          rules: [
            { pattern: 'pokemonByName', namespace: 'byName', methodName: 'pokemon' },
            { pattern: 'trainerByName', namespace: 'byName', methodName: 'trainer' },
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
await graffle.pokemon.getOne({ name: true })
await graffle.pokemon.getMany({ name: true })

// Group 2: Query style
await graffle.byName.pokemon({ name: true })
await graffle.byName.trainer({ name: true })
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
await graffle.v1.getPokemon({ name: true })
await graffle.v2.getPokemon({ name: true })
```

## Pattern Matching

### String Patterns

Use exact string matching for specific fields. The `methodName` specifies what the method will be called in the domain group.

```typescript
{
  groups: [{
    rules: [
      { pattern: 'pokemonByName', namespace: 'pokemon', methodName: 'getOne' },
      { pattern: 'trainerById', namespace: 'trainer', methodName: 'getOne' },
    ],
  }],
}

// Usage:
await graffle.pokemon.getOne({ name: true })    // was pokemonByName
await graffle.trainer.getOne({ id: true })      // was trainerById
```

If `methodName` is omitted, the domain method keeps the original field name:

```typescript
{
  groups: [{
    rules: [
      { pattern: 'pokemonByName', namespace: 'pokemon' },  // No methodName
    ],
  }],
}

// Usage:
await graffle.pokemon.pokemonByName({ name: true })  // Original name preserved
```

### RegExp Patterns

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

### Capture Groups

Extract parts of field names using RegExp capture groups to reduce boilerplate:

#### Named Capture Groups

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

#### Indexed Capture Groups

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

#### Advanced: Dynamic Method Names with Functions

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

#### String Template Transformations

Apply case transformations directly in your template strings without writing functions:

```typescript
{
  groups: [{
    rules: [
      {
        pattern: /^(?<resource>\w+)ByName$/,
        namespace: '${kebab:resource}', // Transform to kebab-case
        methodName: 'getOne',
      },
    ],
  }],
}

// pokemonSpeciesByName → pokemon-species.getOne
// trainerProfileByName → trainer-profile.getOne
```

**Available Transformations:**

- **kebab** - Convert to kebab-case: `pokemonSpecies` → `pokemon-species`
- **pascal** - Convert to PascalCase: `pokemon` → `Pokemon`
- **camel** - Convert to camelCase: `Pokemon` → `pokemon`
- **snake** - Convert to snake_case: `pokemonSpecies` → `pokemon_species`
- **constant** - Convert to CONSTANT_CASE: `pokemonSpecies` → `POKEMON_SPECIES`
- **title** - Convert to Title Case: `pokemon-species` → `Pokemon Species`
- **upper** - Convert to UPPERCASE: `pokemon` → `POKEMON`
- **lower** - Convert to lowercase: `Pokemon` → `pokemon`
- **capFirst** - Capitalize first letter: `pokemon` → `Pokemon`
- **uncapFirst** - Uncapitalize first letter: `Pokemon` → `pokemon`

**Syntax:**

- Named groups: `${transform:captureName}` where `captureName` is your regex capture group name
- Indexed groups: `${transform:1}` or `${transform:2}`

**Examples:**

```typescript
{
  groups: [{
    rules: [
      // Multiple transformations in one rule
      {
        pattern: /^(?<prefix>get)(?<resource>\w+)$/,
        namespace: '${kebab:resource}', // kebab-case for domain
        methodName: '${lower:prefix}${pascal:resource}', // Combine transformations
      },

      // Transform indexed capture groups
      {
        pattern: /^(\w+)ByName$/,
        namespace: '${snake:1}', // Use transformation with indexed group
        methodName: 'getOne',
      },

      // Mix transformations with static text
      {
        pattern: /^(?<action>add|update)(?<resource>\w+)$/,
        namespace: '${kebab:resource}',
        methodName: '${lower:action}${pascal:resource}',
      },
    ],
  }],
}

// Examples:
// getPokemon → pokemon.getPokemon
// pokemonSpeciesByName → pokemon_species.getOne
// addPokemonTrainer → pokemon-trainer.addPokemonTrainer
```

### Nested Namespaces

Organize methods into hierarchical namespace structures using arrays or dot-notation:

#### Array Format

Use arrays to define explicit nested paths:

```typescript
{
  groups: [{
    rules: [
      {
        pattern: 'pokemonByName',
        namespace: ['api', 'v2', 'pokemon'], // Nested path
        methodName: 'getOne',
      },
    ],
  }],
}

// Usage: nested namespace structure
await graffle.api.v2.pokemon.getOne({ name: true })
```

#### Dot-Notation

Use dot-notation strings that are automatically parsed into nested paths:

```typescript
{
  groups: [{
    rules: [
      {
        pattern: 'pokemonByName',
        namespace: 'api.v2.pokemon', // Parsed as ['api', 'v2', 'pokemon']
        methodName: 'getOne',
      },
    ],
  }],
}

// Same result as array format
await graffle.api.v2.pokemon.getOne({ name: true })
```

#### Root-Level Methods

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
await graffle.getPokemon({ name: true })
```

This is useful for promoting commonly-used methods or creating a flatter API structure.

## Rule Precedence

::: warning Important: Rule Order Matters
Rules are evaluated sequentially, and **the first matching rule wins**. Once a field matches a rule, subsequent rules are not evaluated for that field.

Place more specific patterns before general ones to ensure correct matching.

**Good news**: Graffle automatically detects common precedence issues at generation time and warns you when:
- A RegExp pattern shadows a later string pattern
- Duplicate patterns exist

You'll see warnings in your terminal during code generation if issues are detected.
:::

```typescript
{
  groups: [{
    rules: [
      // ✅ Specific pattern first - matches pokemonByName
      {
        pattern: /^pokemonByName$/,
        namespace: 'pokemon',
        methodName: 'findByName',
      },

      // ❌ This won't match pokemonByName (already matched by rule above)
      // Graffle will warn: "Rule at index 0 matches string pattern at index 1"
      { pattern: /^pokemon/, namespace: 'pokemon', methodName: 'find' },
    ],
  }],
}
```

**Best Practice**: Order your rules from most specific to most general:

```typescript
{
  groups: [{
    rules: [
      // Most specific: exact match
      { pattern: 'pokemonByName', namespace: 'pokemon', methodName: 'getByName' },

      // More specific: narrow pattern
      { pattern: /^pokemonById$/, namespace: 'pokemon', methodName: 'getById' },

      // Less specific: broader pattern
      { pattern: /^pokemon/, namespace: 'pokemon', methodName: 'query' },

      // Least specific: catch-all patterns (use with caution)
      { pattern: /.*/, namespace: 'general' },
    ],
  }],
}
```

## Unmatched Fields

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
await graffle.query.pokemonByName({ name: true })
await graffle.query.unmatchedField({ id: true })

// ✅ Available (matches rule)
await graffle.pokemon.pokemonByName({ name: true })

// ❌ Not available (doesn't match any rule)
await graffle.unmatchedDomain.unmatchedField({ id: true })
```

## Conflict Detection

Graffle automatically detects conflicts when multiple fields map to the same domain and method name:

```typescript
{
  groups: [{
    rules: [
      { pattern: 'pokemonByName', namespace: 'pokemon', methodName: 'getOne' },
      { pattern: 'pokemonById', namespace: 'pokemon', methodName: 'getOne' }, // ❌ Conflict!
    ],
  }],
}
```

**Error:**

```
Namespace organization conflict at namespace "pokemon": Multiple fields map to method "getOne": pokemonByName, pokemonById.
Please adjust your grouping rules to ensure unique method names within each namespace.
```

**Resolution:**

Use unique method names within each domain:

```typescript
{
  groups: [{
    rules: [
      { pattern: 'pokemonByName', namespace: 'pokemon', methodName: 'getByName' },
      { pattern: 'pokemonById', namespace: 'pokemon', methodName: 'getById' },
    ],
  }],
}
```

**Note:** The same method name can exist in different domains without conflict:

```typescript
{
  groups: [{
    rules: [
      { pattern: 'pokemonByName', namespace: 'pokemon', methodName: 'getOne' }, // ✅ OK
      { pattern: 'trainerByName', namespace: 'trainer', methodName: 'getOne' }, // ✅ OK
    ],
  }],
}
```

## Disabling Logical Organization

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
await graffle.pokemon.getOne({ name: true })

// ❌ Not available
await graffle.query.pokemonByName({ name: true })
```

## Example: Multiple Domains

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
          { pattern: 'trainerById', namespace: 'trainer', methodName: 'getOne' },
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
await graffle.pokemon.getOne({ name: true })
await graffle.pokemon.getMany({ limit: 10 })
await graffle.pokemon.create({ input: { name: 'Pikachu' } })

// Trainer operations
await graffle.trainer.getOne({ id: '123' })
await graffle.trainer.getMany({})

// Battle operations (using original field names)
await graffle.battle.battleById({ id: '456' })
await graffle.battle.battles({})
```

## Benefits

**Domain organization is best when:**

- Your schema has clear resource/entity grouping
- You want a more RESTful or resource-oriented API feel
- You have many CRUD operations on the same entities

**Logical organization is best when:**

- Your GraphQL schema follows operation-type grouping
- You prefer standard GraphQL conventions
- Fields don't follow a clear domain pattern

**Both together** gives maximum flexibility - use whichever feels more natural for each use case.
