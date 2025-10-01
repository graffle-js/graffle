# TypeScript Variance Guide

## Introduction

**Variance** describes how type parameter relationships (subtype/supertype) affect the assignability of generic types. Understanding variance is critical when designing type-safe APIs with phantom types.

This guide explains the four types of variance and provides practical examples using Graffle's variance helper types.

## Quick Reference Table

| Variance          | Helper             | Assignment Direction        | Example (`1` and `number`)                          | Use Case                           |
| ----------------- | ------------------ | --------------------------- | --------------------------------------------------- | ---------------------------------- |
| **Covariant**     | `Covariant<T>`     | Subtype → Supertype ✅      | `T<1>` → `T<number>` ✅<br/>`T<number>` → `T<1>` ❌ | Return values, readonly properties |
| **Contravariant** | `Contravariant<T>` | Supertype → Subtype ✅      | `T<1>` → `T<number>` ❌<br/>`T<number>` → `T<1>` ✅ | Function parameters                |
| **Invariant**     | `Invariant<T>`     | No assignments ❌           | `T<1>` → `T<number>` ❌<br/>`T<number>` → `T<1>` ❌ | Mutable properties, exact matches  |
| **Bivariant**     | `Bivariant<T>`     | Both directions ✅ (unsafe) | `T<1>` → `T<number>` ✅<br/>`T<number>` → `T<1>` ✅ | Legacy DOM compatibility (avoid)   |

## Understanding with `1` and `number`

The literal type `1` and base type `number` clearly show variance direction:

```typescript
// Type relationship
type IsSubtype = 1 extends number ? true : false // true - 1 is a subtype of number
```

### Covariant Example

```typescript
import type { Covariant } from 'graffle/prelude'

interface Container<T> {
  readonly __type?: Covariant<T>
}

let narrow: Container<1> = {}
let wide: Container<number> = {}

// Natural direction: narrow → wide
wide = narrow // ✅ Works (1 extends number)
narrow = wide // ❌ Error: Type 'number' is not assignable to type '1'
```

**Why it works**: A container that produces `1` can be used wherever a container that produces `number` is expected, because `1` is always a valid `number`.

### Contravariant Example

```typescript
import type { Contravariant } from 'graffle/prelude'

interface Handler<T> {
  readonly __type?: Contravariant<T>
}

let narrow: Handler<1> = {}
let wide: Handler<number> = {}

// Reversed direction: wide → narrow
narrow = wide // ✅ Works (reversed!)
wide = narrow // ❌ Error
```

**Why it works**: A handler that can accept ANY `number` can substitute for a handler that accepts only `1`, because it can handle the `1` case. But a handler that only accepts `1` cannot handle all numbers.

### Invariant Example

```typescript
import type { Invariant } from 'graffle/prelude'

interface Exact<T> {
  readonly __type?: Invariant<T>
}

let one: Exact<1> = {}
let num: Exact<number> = {}

// No direction works
num = one // ❌ Error
one = num // ❌ Error
```

**Why it's strict**: Invariance is used for mutable containers where both reading AND writing occur. Neither direction is safe because:

- If `Exact<1>` → `Exact<number>` was allowed, you could write `2` into a container expecting only `1`
- If `Exact<number>` → `Exact<1>` was allowed, you could write `1` into a container expecting any number (this direction is actually safe, but TypeScript makes it invariant to prevent the other direction)

### Bivariant Example (Unsafe!)

```typescript
import type { Bivariant } from 'graffle/prelude'

interface Unsafe<T> {
  readonly __type?: Bivariant<T>
}

let narrow: Unsafe<1> = {}
let wide: Unsafe<number> = {}

// Both directions work - DANGEROUS!
wide = narrow // ✅ Works (normal covariance)
narrow = wide // ✅ Works (UNSAFE!)
```

**Why it's unsafe**: The second assignment allows `number` → `1`, which means you could later receive `2`, `3`, etc. where only `1` is expected, causing runtime errors.

## How Variance is Determined

TypeScript determines variance based on where the type parameter appears:

### Covariant Positions (Output)

- Function return types: `() => T`
- Readonly properties: `readonly prop: T`
- Promise results: `Promise<T>`

### Contravariant Positions (Input)

- Function parameters: `(param: T) => void`
- Setter parameters: `set value(v: T)`

### Invariant Positions (Both)

- Mutable properties: `value: T` (can read AND write)
- Function with parameter and return: `(param: T) => T`

### Bivariant Positions (Special Case)

- Method parameters (not function properties!): `method(param: T): void`

## Practical Example: Variable Builder

Graffle's variable builder uses **covariance** to allow specific default values to work with general variable types:

```typescript
import { $var } from 'graffle'

// $var.default(1) returns Builder<1>
// This can be assigned to fields expecting Builder<number>
const query = Schema.query.users({
  $: {
    limit: $var.default(10), // Builder<10> → Builder<number> ✅
  },
})

// But incompatible types are rejected
const badQuery = Schema.query.users({
  $: {
    limit: $var.default('ten'), // ❌ Builder<'ten'> → Builder<number> ERROR
  },
})
```

Without the covariant phantom type (`__type?: Covariant<$Type>`), TypeScript would not enforce this relationship because all `Builder<T>` instances would be structurally identical regardless of `T`.

## When to Use Each Variance

| Variance          | Use When                          | Example                                           |
| ----------------- | --------------------------------- | ------------------------------------------------- |
| **Covariant**     | Values flow out (producers)       | Return types, readonly data, immutable containers |
| **Contravariant** | Values flow in (consumers)        | Event handlers, callbacks, validators             |
| **Invariant**     | Values flow both ways (mutable)   | Mutable arrays, read-write properties             |
| **Bivariant**     | **Avoid!** (legacy compatibility) | Only for specific DOM compatibility cases         |

## Implementation Details

### The Phantom Type Trick

Phantom types add structural requirements without runtime overhead:

```typescript
interface Builder<T> {
  // Without phantom type - all Builder<T> are identical
  readonly _state: SomeState

  // With phantom type - Builder<T> depends on T
  readonly __type?: Covariant<T> // ← Forces type checking
}
```

The `__type` property:

- Is optional (`?`) so it doesn't need runtime values
- Uses a function signature to establish variance
- Never exists at runtime (phantom)
- Forces TypeScript to check `T` compatibility

### Why Function Signatures?

Function signatures make variance explicit:

```typescript
// Covariant - return type
type Covariant<T> = () => T

// Contravariant - parameter type
type Contravariant<T> = (value: T) => void

// Invariant - both positions
type Invariant<T> = (value: T) => T
```

This is clearer than using properties directly and follows ecosystem conventions for phantom/branded types.

### The Bivariant Hack - Indexed Access Question

The bivariant implementation uses indexed access to extract the method signature:

```typescript
type Bivariant<T> = { bivariantHack(value: T): void }['bivariantHack']
```

**Why the indexed access?**

The indexed access `['bivariantHack']` extracts the method type, converting it from:

- **Method**: `{ bivariantHack(value: T): void }`
- **To function type**: `(value: T) => void`

**Does this preserve bivariance?**

Based on our tests, the extracted signature **does preserve bivariant behavior** when used as an optional property. The TypeScript compiler appears to remember the method origin and maintains the bivariant parameter checking.

However, note that:

1. The optional `?` modifier on the phantom property makes TypeScript somewhat permissive
2. In practice, the covariant phantom type works correctly for the Builder use case
3. Contravariant and invariant helpers may be less reliable with optional properties in structural type checking

### Practical Considerations

For real-world usage (like in Graffle's Builder):

- **Covariant** is reliable and works as expected ✅
- **Bivariant** works for both directions as expected ✅
- **Contravariant** and **Invariant** may behave unexpectedly with optional phantom properties

The helpers are most useful for:

1. Documenting intent in type definitions
2. Understanding variance relationships
3. Teaching TypeScript variance concepts

## References

- [TypeScript Handbook: Type Compatibility](https://www.typescriptlang.org/docs/handbook/type-compatibility.html)
- [TypeScript FAQ: Function Parameter Bivariance](https://github.com/microsoft/TypeScript/wiki/FAQ#why-are-function-parameters-bivariant)
- [Variance in Programming Languages](https://en.wikipedia.org/wiki/Covariance_and_contravariance_(computer_science))

## See Also

- [Variable Builder Documentation](../variables.md)
- [Type-Safe Document Generation](../static-generation.md)
