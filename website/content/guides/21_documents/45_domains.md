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
      rules: [
        // Map specific fields to domain methods
        {
          pattern: 'pokemonByName',
          groupName: 'pokemon',
          methodName: 'getOne',
        },
        { pattern: 'pokemons', groupName: 'pokemon', methodName: 'getMany' },
        { pattern: 'addPokemon', groupName: 'pokemon', methodName: 'create' },
      ],
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

## Pattern Matching

### String Patterns

Use exact string matching for specific fields. The `methodName` specifies what the method will be called in the domain group.

```typescript
{
  rules: [
    { pattern: 'pokemonByName', groupName: 'pokemon', methodName: 'getOne' },
    { pattern: 'trainerById', groupName: 'trainer', methodName: 'getOne' },
  ]
}

// Usage:
await graffle.pokemon.getOne({ name: true })    // was pokemonByName
await graffle.trainer.getOne({ id: true })      // was trainerById
```

If `methodName` is omitted, the domain method keeps the original field name:

```typescript
{
  rules: [
    { pattern: 'pokemonByName', groupName: 'pokemon' },  // No methodName
  ]
}

// Usage:
await graffle.pokemon.pokemonByName({ name: true })  // Original name preserved
```

### RegExp Patterns

Use regular expressions to match multiple fields. You can provide a static `methodName` that applies to all matches:

```typescript
{
  rules: [
    // All pokemon fields → pokemon domain, keep original names
    { pattern: /^pokemon/, groupName: 'pokemon' },

    // All *ByName fields → byName domain, renamed to "find"
    { pattern: /ByName$/, groupName: 'byName', methodName: 'find' },
  ]
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
  rules: [
    {
      pattern: /^(?<resource>\w+)ByName$/,
      groupName: '$resource',
      methodName: 'getOne',
    },
  ]
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
  rules: [
    {
      pattern: /^(\w+)By(Name|Id)$/,
      groupName: '$1',
      methodName: 'getBy$2',
    },
  ]
}

// pokemonByName → pokemon.getByName
// pokemonById → pokemon.getById
// trainerByName → trainer.getByName
```

#### Advanced: Dynamic Method Names with Functions

For complex logic, use a function to determine method names dynamically. The function receives the field name, operation type, and the RegExp match object:

```typescript
{
  rules: [
    {
      pattern: /^(?<action>add|update|delete)(?<resource>\w+)$/,
      groupName: '$resource',
      methodName: (fieldName, operationType, match) => {
        if (!match?.groups) return fieldName
        const action = match.groups.action
        // Map schema naming to domain naming conventions
        if (action === 'add') return 'create'
        if (action === 'delete') return 'remove'
        return action
      },
    },
  ]
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
  rules: [
    {
      pattern: /^(?<resource>\w+)ByName$/,
      groupName: '${kebab:resource}', // Transform to kebab-case
      methodName: 'getOne',
    },
  ]
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

- Named groups: `${transform:groupName}`
- Indexed groups: `${transform:1}` or `${transform:2}`

**Examples:**

```typescript
{
  rules: [
    // Multiple transformations in one rule
    {
      pattern: /^(?<prefix>get)(?<resource>\w+)$/,
      groupName: '${kebab:resource}', // kebab-case for domain
      methodName: '${lower:prefix}${pascal:resource}', // Combine transformations
    },

    // Transform indexed capture groups
    {
      pattern: /^(\w+)ByName$/,
      groupName: '${snake:1}', // Use transformation with indexed group
      methodName: 'getOne',
    },

    // Mix transformations with static text
    {
      pattern: /^(?<action>add|update)(?<resource>\w+)$/,
      groupName: '${kebab:resource}',
      methodName: '${lower:action}${pascal:resource}',
    },
  ]
}

// Examples:
// getPokemon → pokemon.getPokemon
// pokemonSpeciesByName → pokemon_species.getOne
// addPokemonTrainer → pokemon-trainer.addPokemonTrainer
```

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
  rules: [
    // ✅ Specific pattern first - matches pokemonByName
    {
      pattern: /^pokemonByName$/,
      groupName: 'pokemon',
      methodName: 'findByName',
    },

    // ❌ This won't match pokemonByName (already matched by rule above)
    // Graffle will warn: "Rule at index 0 matches string pattern at index 1"
    { pattern: /^pokemon/, groupName: 'pokemon', methodName: 'find' },
  ]
}
```

**Best Practice**: Order your rules from most specific to most general:

```typescript
{
  rules: [
    // Most specific: exact match
    { pattern: 'pokemonByName', groupName: 'pokemon', methodName: 'getByName' },

    // More specific: narrow pattern
    { pattern: /^pokemonById$/, groupName: 'pokemon', methodName: 'getById' },

    // Less specific: broader pattern
    { pattern: /^pokemon/, groupName: 'pokemon', methodName: 'query' },

    // Least specific: catch-all patterns (use with caution)
    { pattern: /.*/, groupName: 'general' },
  ]
}
```

## Unmatched Fields

Fields that don't match any rule are **not included** in domain methods. They remain accessible only through logical organization:

```typescript
{
  rules: [
    { pattern: 'pokemonByName', groupName: 'pokemon' },
  ]
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
  rules: [
    { pattern: 'pokemonByName', groupName: 'pokemon', methodName: 'getOne' },
    { pattern: 'pokemonById', groupName: 'pokemon', methodName: 'getOne' }, // ❌ Conflict!
  ]
}
```

**Error:**

```
Domain grouping conflict in domain "pokemon": Multiple fields map to method "getOne": pokemonByName, pokemonById.
Please adjust your grouping rules to ensure unique method names within each domain.
```

**Resolution:**

Use unique method names within each domain:

```typescript
{
  rules: [
    { pattern: 'pokemonByName', groupName: 'pokemon', methodName: 'getByName' },
    { pattern: 'pokemonById', groupName: 'pokemon', methodName: 'getById' },
  ]
}
```

**Note:** The same method name can exist in different domains without conflict:

```typescript
{
  rules: [
    { pattern: 'pokemonByName', groupName: 'pokemon', methodName: 'getOne' }, // ✅ OK
    { pattern: 'trainerByName', groupName: 'trainer', methodName: 'getOne' }, // ✅ OK
  ]
}
```

## Disabling Logical Organization

If you want **only** domain-based methods, disable logical organization:

```typescript
export default Generator.configure({
  methodsOrganization: {
    logical: false, // Disable query/mutation
    domains: { // Only domain methods
      rules: [
        {
          pattern: 'pokemonByName',
          groupName: 'pokemon',
          methodName: 'getOne',
        },
      ],
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
      rules: [
        // Pokemon domain
        {
          pattern: 'pokemonByName',
          groupName: 'pokemon',
          methodName: 'getOne',
        },
        { pattern: 'pokemons', groupName: 'pokemon', methodName: 'getMany' },
        { pattern: 'addPokemon', groupName: 'pokemon', methodName: 'create' },
        {
          pattern: 'updatePokemon',
          groupName: 'pokemon',
          methodName: 'update',
        },

        // Trainer domain
        { pattern: 'trainerById', groupName: 'trainer', methodName: 'getOne' },
        { pattern: 'trainers', groupName: 'trainer', methodName: 'getMany' },
        { pattern: 'addTrainer', groupName: 'trainer', methodName: 'create' },

        // Battle domain
        { pattern: /^battle/, groupName: 'battle' },
      ],
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
