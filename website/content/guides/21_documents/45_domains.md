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
    logical: true,  // Keep query/mutation organization
    domains: {      // Add domain organization
      rules: [
        // Map specific fields to domain methods
        { pattern: 'pokemonByName', groupName: 'pokemon', methodName: 'getOne' },
        { pattern: 'pokemons', groupName: 'pokemon', methodName: 'getMany' },
        { pattern: 'addPokemon', groupName: 'pokemon', methodName: 'create' },
      ]
    }
  }
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

Use exact string matching for specific fields:

```typescript
{
  rules: [
    { pattern: 'pokemonByName', groupName: 'pokemon', methodName: 'getOne' },
    { pattern: 'trainerById', groupName: 'trainer', methodName: 'getOne' },
  ]
}
```

### RegExp Patterns

Use regular expressions to match multiple fields:

```typescript
{
  rules: [
    // Match all pokemon queries
    { pattern: /^pokemon/, groupName: 'pokemon' },

    // Match specific patterns
    { pattern: /ByName$/, groupName: 'byName', methodName: 'find' },
  ]
}
```

## Method Naming

### Static Method Names

Provide a fixed method name for all matching fields:

```typescript
{
  rules: [
    { pattern: /^pokemonBy/, groupName: 'pokemon', methodName: 'getOne' },
  ]
}
```

### Dynamic Method Names

Use a function to determine method names based on the field:

```typescript
{
  rules: [
    {
      pattern: /^(add|create|update|delete)Pokemon$/,
      groupName: 'pokemon',
      methodName: (fieldName, operationType) => {
        if (fieldName.startsWith('add') || fieldName.startsWith('create')) return 'create'
        if (fieldName.startsWith('update')) return 'update'
        if (fieldName.startsWith('delete')) return 'delete'
        return fieldName
      }
    }
  ]
}
```

### Omitting Method Names

If `methodName` is omitted, the domain method uses the original field name:

```typescript
{
  rules: [
    { pattern: 'pokemonByName', groupName: 'pokemon' }
  ]
}

// Usage
await graffle.pokemon.pokemonByName({ name: true })
```

## Rule Precedence

Rules are applied in order. The first matching rule wins:

```typescript
{
  rules: [
    // This rule matches first
    { pattern: /^pokemonByName/, groupName: 'pokemon', methodName: 'findByName' },

    // This rule won't match pokemonByName (already matched above)
    { pattern: /^pokemon/, groupName: 'pokemon', methodName: 'find' },
  ]
}
```

## Unmatched Fields

Fields that don't match any rule are **not included** in domain methods. They remain accessible only through logical organization:

```typescript
{
  rules: [
    { pattern: 'pokemonByName', groupName: 'pokemon' }
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

## Disabling Logical Organization

If you want **only** domain-based methods, disable logical organization:

```typescript
export default Generator.configure({
  methodsOrganization: {
    logical: false,  // Disable query/mutation
    domains: {       // Only domain methods
      rules: [
        { pattern: 'pokemonByName', groupName: 'pokemon', methodName: 'getOne' }
      ]
    }
  }
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
        { pattern: 'pokemonByName', groupName: 'pokemon', methodName: 'getOne' },
        { pattern: 'pokemons', groupName: 'pokemon', methodName: 'getMany' },
        { pattern: 'addPokemon', groupName: 'pokemon', methodName: 'create' },
        { pattern: 'updatePokemon', groupName: 'pokemon', methodName: 'update' },

        // Trainer domain
        { pattern: 'trainerById', groupName: 'trainer', methodName: 'getOne' },
        { pattern: 'trainers', groupName: 'trainer', methodName: 'getMany' },
        { pattern: 'addTrainer', groupName: 'trainer', methodName: 'create' },

        // Battle domain
        { pattern: /^battle/, groupName: 'battle' },
      ]
    }
  }
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
