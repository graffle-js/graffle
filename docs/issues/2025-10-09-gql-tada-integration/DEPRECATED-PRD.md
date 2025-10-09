# PRD: gql-tada Integration for Graffle

**Tracking:** [Graffle #1273](https://github.com/graffle-js/graffle/issues/1273)

## Overview

Integrate gql-tada's type-level GraphQL parser with Graffle to provide compile-time type safety for raw GraphQL string queries, complementing Graffle's existing type-safe builder APIs.

## Goals

1. **Type-safe raw GraphQL queries** - Leverage gql-tada's type inference for string-based GraphQL
2. **No runtime overhead** - Use only gql-tada's type machinery, not its runtime
3. **Seamless Graffle integration** - Extend generated types to support Graffle's `.send()` API
4. **Static and runtime APIs** - Provide both `Graffle.gql(...)` (static) and `client.gql(...)` (runtime)

## Non-Goals

- Tagged template literal syntax (blocked by [TypeScript #33304](https://github.com/microsoft/TypeScript/issues/33304))
- Multi-operation document type tracking (use existing static document builder for this)
- Bundling gql-tada runtime code

## Technical Approach

### 1. Type-Only gql-tada Import

```typescript
// TYPE-ONLY import - no runtime bundling
import type { initGraphQLTada } from 'gql.tada'
import type { introspection } from './graffle/modules/tada.js'

// Our implementation uses graphql-js parse (already a Graffle dependency)
const graphql = initGraphQLTada<{ introspection }>()
```

### 2. Call Expression Syntax (REQUIRED)

Due to TypeScript limitations, we **MUST** use call expression syntax:

```typescript
// ✅ REQUIRED - Call expression
const query = graphql(`query { user { id } }`)

// ❌ NOT SUPPORTED - Tagged template
const query = graphql`query { user { id } }`
```

**Why?** TypeScript cannot infer const string literals from `TemplateStringsArray`. Even with const type parameters, the type system only sees `readonly string[]`, not the actual literal string content needed for gql-tada's type parser.

**Reference:** [TypeScript Issue #33304](https://github.com/microsoft/TypeScript/issues/33304)

### 3. Extend Base Types for `.send()` Support

gql-tada returns `TadaDocumentNode<Result, Variables>`. We need to extend this with a `.send()` method:

```typescript
type WithSend<TDoc> = TDoc & {
  send: TDoc extends { __apiType?: (vars: infer V) => infer R }
    ? (variables?: V) => Promise<R>
    : never
}

// Wrapper that adds .send() to tada documents
const gql = ((input: string) => {
  const doc = graphql(input)
  return {
    ...doc,
    send: async (variables?: any) => {
      // Execute via Graffle transport
      return executeQuery(doc, variables)
    },
  }
}) as typeof graphql & (<const In extends string>(input: In) => WithSend<ReturnType<typeof graphql<In>>>)
```

### 4. Generated Static API: `Graffle.gql(...)`

Generator produces a static `gql` export:

```typescript
// Generated in graffle/_exports.ts or similar
export const gql = ((input: string) => {
  // Returns document with .send() method
}) as GqlFunction<IntrospectionType>
```

Usage:

```typescript
import { Graffle } from './graffle/_exports.js'

const query = Graffle.gql(`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
    }
  }
`)

// Variables are type-checked, result is fully typed
const result = await query.send({ id: '123' })
```

### 5. Runtime API: `client.gql(...)`

Client instances also have `.gql()` method:

```typescript
const client = Graffle.create({ url: '...' })

const result = await client.gql(`
  query GetUser($id: ID!) {
    user(id: $id) { id name }
  }
`).send({ id: '123' })
```

## Implementation Plan

### Phase 1: Core Type System ✅

- [x] Prove type-only gql-tada import works (sandbox.ts)
- [x] Prove call expression syntax works (sandbox.ts)
- [x] Prove tagged template syntax doesn't work (sandbox.ts)
- [x] Design `.send()` type extension (sandbox.ts EXPERIMENT 2)
- [x] Document template literal limitation (website docs)

### Phase 2: Generator Integration

- [ ] Update Tada generator to export extended types with `.send()`
- [ ] Generate static `Graffle.gql()` function with proper types
- [ ] Wire up `.send()` to use Graffle's transport system
- [ ] Add SDDM codec support (if schema has SDDM and it's required)

### Phase 3: Runtime Client Integration

- [ ] Add `.gql()` method to runtime client
- [ ] Ensure transport/extension pipeline works with `.gql().send()`
- [ ] Type-check that variables and results flow correctly

### Phase 4: Testing & Documentation

- [ ] Unit tests for type inference
- [ ] Integration tests with real schemas
- [ ] Update website documentation with examples
- [ ] Add example project demonstrating usage

### Phase 5: Future Considerations (Post-MVP)

- [ ] Explore consolidating `.document()` and `.gql()` APIs
- [ ] Evaluate if we can provide better multi-operation support
- [ ] Consider persisted query integration with `.gql()`

## Requirements

### Must Have

1. ✅ Type-safe `.gql()` method using call expression syntax
2. ✅ No template literal syntax (documented limitation)
3. ✅ Type-only gql-tada imports (no runtime bundling)
4. `.send()` method on returned documents with full type safety
5. Static API: `Graffle.gql(...).send()`
6. Runtime API: `client.gql(...).send()`
7. Variable type checking
8. Result type inference
9. Integration with Graffle's transport system

### Should Have

- SDDM codec support when required by generator config
- Error handling consistent with Graffle patterns
- GraphQLSP LSP plugin configuration guidance

### Could Have

- Persisted query support via `graphql.persisted()`
- Fragment composition utilities
- API to consolidate `.document()` and `.gql()`

## Open Questions

1. **Multi-operation documents**: gql-tada can parse them but only infers types for the first operation. Should we support multi-op documents or restrict to single operations?
   - **Answer**: Restrict to single operations per `.gql()` call. Use existing static document builder for multi-operation support.
   - **Upstream issue**: [gql.tada #489](https://github.com/0no-co/gql.tada/issues/489) - Feature request for multi-operation type inference

2. **SDDM requirements**: How do we validate at compile time that SDDM is available when required?
   - **To investigate**: Can we use conditional types to require SDDM when schema needs it?

3. **API consolidation**: Should we eventually merge `.document()` and `.gql()` into a single API?
   - **Decision**: Keep separate for now. Consider consolidation after both are stable and well-tested.

## Success Criteria

- Users can write type-safe GraphQL queries as strings with full IDE support
- No gql-tada runtime code is bundled
- `.send()` method provides same transport/extension features as other Graffle APIs
- Documentation clearly explains why template literals aren't supported
- Example projects demonstrate practical usage

## References

- [gql-tada documentation](https://gql-tada.0no.co)
- [TypeScript Issue #33304](https://github.com/microsoft/TypeScript/issues/33304) - Template literal limitation
- [GraphQLSP LSP Plugin](https://github.com/0no-co/GraphQLSP)
- Graffle sandbox.ts - Working POC with all experiments
