# TypeScript's Hidden Export Pattern: Dual Value/Type Exports with Aliasing

When generating TypeScript code, you often need to export both a runtime value and its corresponding type under the same name. This is common when wrapping external modules or creating type-safe abstractions. However, TypeScript's export system has subtle rules that can lead to "Duplicate identifier" errors if you're not careful.

## The Problem

Let's say you're generating code that wraps custom scalar implementations:

```typescript
import * as CustomScalars from './scalars.js'

// Goal: Export both the value AND the type as "bigint"
// (ignoring that bigint is a reserved word for now)
```

Your first instinct might be to re-export the value and create a matching type:

```typescript
// ❌ FAILS: "Duplicate identifier 'bigint'"
export { bigint } from './scalars.js' // Re-export the value
type $bigint = typeof CustomScalars.bigint
export { $bigint as bigint } // Try to export type with same name
```

Or maybe try direct value export with type re-export:

```typescript
// ❌ FAILS: "Duplicate identifier 'bigint'"
export const bigint = CustomScalars.bigint
type $bigint = typeof CustomScalars.bigint
export type { $bigint as bigint } // Conflict!
```

Both approaches fail because TypeScript sees these as conflicting declarations in the same export namespace.

## The Solution

The key insight: **When a value and type share the same name, they must be exported together in a single export statement.**

TypeScript allows a const and type declaration to coexist with the same name in the _local_ scope. When you export them together, TypeScript treats them as a unified value+type export:

```typescript
// ✅ WORKS: Dual export with internal $ prefix
const $bigint = CustomScalars.bigint
type $bigint = typeof CustomScalars.bigint
export { $bigint as bigint }
// Exports BOTH value and type under the name "bigint"
```

This works because:

1. `const $bigint` and `type $bigint` can coexist locally (different namespaces)
2. `export { $bigint as bigint }` exports both the value binding AND type binding together
3. Consumers see a clean `bigint` export that works in both value and type positions

## When You Don't Need Aliasing

If your exported name isn't a TypeScript reserved keyword, you can use direct exports:

```typescript
// ✅ WORKS: Direct exports for safe names
export const Date = CustomScalars.Date
export type Date = typeof Date
```

TypeScript happily allows value and type exports with the same name when using direct `export const`/`export type` syntax.

## The Full Pattern for Code Generation

When generating TypeScript modules with dual value/type exports:

**Step 1:** Check if the name is reserved (keywords like `namespace`, `interface`, `type`, etc., OR the global `bigint` type)

**Step 2a:** For reserved names, use the `$` prefix pattern:

```typescript
const $namespace = CustomScalars.namespace
type $namespace = typeof CustomScalars.namespace
export { $namespace as namespace }
```

**Step 2b:** For safe names, use direct exports:

```typescript
export const Date = CustomScalars.Date
export type Date = typeof Date
```

## Why This Matters

This pattern is particularly important when:

- Generating typed GraphQL schema wrappers (custom scalars)
- Creating type-safe configuration objects
- Wrapping external libraries with enhanced type information
- Building plugin systems where runtime and compile-time information must align

## What Doesn't Work (Summary)

❌ Re-exporting value + separate type export with same name:

```typescript
export { x } from './module'
type $x = typeof import('./module').x
export { $x as x } // Conflict!
```

❌ Direct value export + type re-export with alias:

```typescript
export const x = value
type $x = typeof value
export type { $x as x } // Conflict!
```

✅ Local declarations with unified export:

```typescript
const $x = value
type $x = typeof value
export { $x as x } // Both exported together!
```

✅ Direct exports for safe names:

```typescript
export const x = value
export type x = typeof value // No conflict in direct exports!
```

## Conclusion

TypeScript's export system treats value and type namespaces separately in most contexts, but when aliasing exports, you must export matching value/type pairs together in a single statement. By using local `$`-prefixed declarations and exporting them together with aliases, you can achieve clean exported names even when dealing with reserved keywords.

This pattern has been battle-tested in the [Graffle](https://github.com/jasonkuhrt/graffle) GraphQL client generator, where custom scalars need both runtime codec implementations and compile-time type information exported under their GraphQL schema names.
