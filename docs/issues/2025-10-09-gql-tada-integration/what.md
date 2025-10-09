# gql-tada Integration

**Tracking:** [#1273](https://github.com/graffle-js/graffle/issues/1273)

## Overview

Provide compile-time type safety for raw GraphQL string queries using gql-tada's type-level parser, complementing Graffle's existing type-safe builder APIs.

## Goals

- Enable type-safe raw GraphQL queries written as strings
- Maintain zero runtime overhead (type-only integration)
- Support the same `.send()` API pattern as other Graffle methods
- Provide both static (`Graffle.gql()`) and runtime (`client.gql()`) APIs

## Non-Goals

- Tagged template literal syntax (blocked by TypeScript limitation)
- Multi-operation document type tracking (existing `.document()` builder handles this better)
- Bundling gql-tada runtime code

## User Journeys

### Journey 1: Developer Using Static Generated API

1. Developer runs Graffle generator on their GraphQL schema
2. Generator outputs gql-tada compatible introspection types
3. Developer imports the static `Graffle.gql()` function
4. Developer writes a GraphQL query as a string using call expression syntax
5. TypeScript provides autocomplete for fields, arguments, and type checking
6. Developer creates a client instance and passes document to `client.send()`
7. Result is returned with full type safety

```typescript
import { Graffle } from './graffle/_exports.js'

// Write query as string - full type inference
const query = Graffle.gql(`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
    }
  }
`)

// Create client and send document with type-checked variables
const client = Graffle.create({ schema: { name: 'MySchema' } })
const result = await client.send(query, { id: '123' })
console.log(result.user.name) // Type-safe access
```

### Journey 2: Developer Using Runtime Client API

1. Developer creates a Graffle client instance
2. Developer uses `client.gql()` method with a GraphQL string
3. TypeScript provides same type safety as static API
4. Developer calls `.send()` to execute the query
5. Result is returned with full type safety

```typescript
const client = Graffle.create({ url: 'https://api.example.com/graphql' })

const result = await client
  .gql(`
    query GetUser($id: ID!) {
      user(id: $id) {
        id
        name
      }
    }
  `)
  .send({ id: '123' })

console.log(result.user.name) // Fully typed
```

### Journey 3: Developer Attempting Multi-Operation Document

1. Developer writes a document with multiple named operations
2. TypeScript only infers types for the first operation
3. Developer realizes limitation and checks documentation
4. Documentation directs them to use `.document()` builder for multi-operation support
5. Developer uses appropriate tool for their use case

## Failure States

| Scenario | User Action | System Behavior | User Impact |
|----------|-------------|-----------------|-------------|
| Tagged template syntax used | Developer writes `client.gql\`query { ... }\`` | TypeScript shows type as `never` | No type inference; developer must use call expression syntax `client.gql("...")` |
| Multi-operation document | Developer writes document with 2+ operations | TypeScript only infers types for first operation | Remaining operations have no type safety; must use `.document()` builder instead |
| Invalid GraphQL syntax | Developer writes malformed query | TypeScript error from gql-tada's parser | Clear error message at compile time |
| Variable type mismatch | Developer passes wrong variable types to `.send()` | TypeScript error | Developer corrects variable types before running |
| Missing required variable | Developer omits required variable in `.send()` | TypeScript error | Developer adds missing variable |
| Field doesn't exist in schema | Developer requests non-existent field | TypeScript error from gql-tada | Developer corrects field name or checks schema |
| gql-tada not installed | Developer tries to use without dependency | Generator fails or types missing | Developer must install `gql.tada` package |
| Schema not generated | Developer uses without running generator | Types not available | Developer must run Graffle generator first |

## Requirements

### Must Have

1. Type-safe `.gql()` method using call expression syntax only
2. No tagged template literal syntax (documented limitation)
3. Type-only gql-tada imports (zero runtime overhead)
4. Static API: `Graffle.gql(...)` returns document, `client.send(document)` executes it
5. Instance API: `client.gql(...).send()` with chained `.send()` method
6. Variable type checking
7. Result type inference
8. Integration with Graffle's transport system
9. Clear documentation of limitations (template literals, multi-operation)

### Should Have

- GraphQLSP LSP plugin configuration guidance in documentation
- Error handling consistent with Graffle patterns
- SDDM codec support when required by generator config

### Could Have

- Persisted query support via `graphql.persisted()`
- Fragment composition utilities
- Future API consolidation with `.document()` builder

## Constraints

### TypeScript Limitation: Template Literals

TypeScript cannot infer const string literals from `TemplateStringsArray`. Even with const type parameters, the type system only sees `readonly string[]`, not the actual literal string content needed for gql-tada's type-level parser.

**Reference:** [TypeScript Issue #33304](https://github.com/microsoft/TypeScript/issues/33304)

**Impact:** Cannot support `graphql\`...\`` syntax, must use `graphql("...")` syntax.

### gql-tada Limitation: Multi-Operation Documents

gql-tada can parse documents with multiple named operations but only provides type inference for the first operation. No type-level access to subsequent operations.

**Reference:** [gql.tada Issue #489](https://github.com/0no-co/gql.tada/issues/489)

**Impact:** Must restrict `.gql()` to single-operation documents. Direct users to existing `.document()` builder for multi-operation support.

## Design Decisions

### `.gql()` Method Returns Extended Tada Document Node

Both raw and generated clients should provide `.gql()` that returns an extended TadaDocumentNode with `.send()` method:

**Generated client (with schema):**
```typescript
const client = Graffle.create({ schema: { name: 'Pokemon' } })

const result = await client
  .gql(`query { pokemons { id name } }`)
  .send()

// result type: { pokemons: { id: string; name: string }[] | null }
// Full type inference from generated schema
```

**Raw client (without schema):**
```typescript
const client = Graffle.create({ url: 'https://api.example.com/graphql' })

const result = await client
  .gql(`query { pokemons { id name } }`)
  .send()

// result type: { pokemons: unknown }
// Basic structure validation, values are unknown
// See: https://github.com/0no-co/gql.tada/issues/490
```

**Key points:**
- Same API surface for both raw and generated clients
- Generated client has full type inference
- Raw client has basic structure validation (top-level fields only)
- Both return document with `.send()` method

### Static API: `Graffle.gql()` + `client.send()`

Static builder produces a document that can be sent via client:

```typescript
import { Graffle } from './graffle/_exports.js'

// Static builder - NO .send() method
const doc = Graffle.gql(`
  query GetPokemon($name: String!) {
    pokemonByName(name: $name) {
      id
      name
      hp
    }
  }
`)

// Document is passed to client.send() with variables
const client = Graffle.create({ schema: { name: 'Pokemon' } })
const result = await client.send(doc, { name: 'Pikachu' })

// result type: { pokemonByName: { id: string; name: string; hp: number | null }[] | null }
```

**Key points:**
- Static `Graffle.gql()` returns TadaDocumentNode (no `.send()`)
- Client has `.send(document, variables?)` method that accepts the document and optional variables
- Variables are type-checked based on document's variable definitions
- This separates document definition from execution
- Allows document reuse across multiple clients

## Open Questions

1. **SDDM validation**: How do we enforce at compile time that SDDM is available when the schema requires it?

2. **API consolidation**: Should we eventually merge `.document()` and `.gql()` into a single unified API? Or keep them separate with clear use cases?

3. **Persisted queries**: Should we support gql-tada's `graphql.persisted()` feature in the initial release or defer to later?

4. **client.send() compatibility**: Should `client.send()` accept:
   - Only TadaDocumentNode from `Graffle.gql()`?
   - Any DocumentNode?
   - Both?

## Success Criteria

- Developers can write type-safe GraphQL queries as strings with full IDE support
- No gql-tada runtime code is bundled in user applications
- `.send()` method provides same transport/extension features as other Graffle APIs
- Documentation clearly explains when to use `.gql()` vs `.document()` builder
- Example projects demonstrate practical usage patterns

## References

- [gql-tada documentation](https://gql-tada.0no.co)
- [TypeScript Issue #33304](https://github.com/microsoft/TypeScript/issues/33304) - Template literal limitation
- [gql.tada Issue #489](https://github.com/0no-co/gql.tada/issues/489) - Multi-operation limitation
- [GraphQLSP LSP Plugin](https://github.com/0no-co/GraphQLSP)
- Proof of concept: `sandbox.ts`
- Generated introspection types: `website/graffle/modules/tada.ts`
