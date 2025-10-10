# SDDM Type Safety Implementation Plan

## Overview

This document outlines the implementation of SDDM (Schema-Driven Data Map) type safety in Graffle, ensuring that documents requiring SDDM can only be used with SDDM-enabled clients at compile-time.

## Background

### What is SDDM?

SDDM (Schema-Driven Data Map) is a compile-time feature that ensures documents have access to the full schema type information, including custom scalars and precise type inference.

**When SDDM is enabled:**

- Documents are branded with `RequiresSDDM = true`
- Type system ensures documents are only used with SDDM-capable clients
- Custom scalar encoding/decoding is type-safe
- Full schema knowledge enables precise result type inference

**When SDDM is disabled:**

- Documents work with any client (no SDDM requirement)
- Custom scalars may not be properly encoded/decoded
- Type inference is less precise

### The Problem

Prior to this implementation, the type system had a validation helper `ValidateSDDMRequirement` that was **permissive** - it allowed SDDM documents to be used with any client, even those without SDDM support. This was a bug that could lead to runtime errors when custom scalars were not properly handled.

### Non-SDDM Documents

Non-SDDM documents come from:

- **`TypedFullDocument`** (multi-operation documents via `document()`) - lacks `__sddm` branding
- Manual `createStaticRootType()` usage (non-gnerated builders)
- Plain string GraphQL documents

## Implementation

### 1. Fixed SDDM Validation Bug

**File**: `/Users/jasonkuhrt/projects/jasonkuhrt/graffle/src/client/methods/gql/gql.ts`

**Changes:**

- Added `HasSDDM<$Context>` helper type to check if context has SDDM configured
- Made `ValidateSDDMRequirement` strict - now actually rejects SDDM documents from non-SDDM clients

**Before** (permissive):

```typescript
type ValidateSDDMRequirement<$Document, $Context> =
  Grafaid.Document.Typed.RequiresSDDMOf<$Document> extends true ? $Document // For now, allow SDDM documents with all contexts
    : $Document
```

**After** (strict):

```typescript
type HasSDDM<$Context> = $Context extends
  { configuration: { schema: { current: { map: infer $Map } } } }
  ? $Map extends undefined ? false : true
  : false

type ValidateSDDMRequirement<$Document, $Context> =
  Grafaid.Document.Typed.RequiresSDDMOf<$Document> extends true
    ? HasSDDM<$Context> extends true ? $Document
    : `❌ This document requires SDDM. Configure client with schema.map`
    : $Document
```

**How it works:**

1. `HasSDDM<$Context>` checks if the context has `configuration.schema.current.map` configured
2. If map is `undefined` or missing, it returns `false`
3. If map is present and not `undefined`, it returns `true`
4. `ValidateSDDMRequirement` uses this to show a compile-time error message when SDDM documents are used with non-SDDM clients

### 2. Created SDDM Example

**File**: `/Users/jasonkuhrt/projects/jasonkuhrt/graffle/examples/55_document-builder/document-builder_static.ts`

**Added Section 9: SDDM Type Safety**

Demonstrates two key scenarios:

#### Scenario 1: SDDM document + SDDM client ✅

```typescript
const sddmDoc = Graffle.query.pokemons({
  name: true,
  birthday: true, // Custom Date scalar - requires SDDM
})

const sddmClient = GraffleClient.create() // Auto-configured with SDDM
const sddmResult = await sddmClient.send(sddmDoc)
```

Shows that:

- Generated documents (`Graffle.query.*`) require SDDM
- Generated client auto-configures SDDM via context pipeline
- Custom scalars like `Date` are properly handled

#### Scenario 2: SDDM document + non-SDDM client ❌

```typescript
const plainClient = PlainGraffle.create({ schema: { url: '...' } })

// @ts-expect-error - SDDM document requires SDDM-configured client
plainClient.gql(sddmDoc).send()
```

Shows that:

- Plain Graffle clients don't have SDDM
- Attempting to use SDDM documents results in compile-time error
- Error message guides user to configure `schema.map`

### 3. Regenerated All Graffle Code

**Commands executed:**

```bash
pnpm build
pnpm extension:document-builder:test:generate-fixtures
pnpm test:e2e:github:gen:graffle
pnpm examples:gen:graffle
```

**What was regenerated:**

- Document builder test fixtures with updated SDDM typing
- E2E GitHub test graffle code
- Example graffle code with SDDM-enabled documents

All generated `document.ts` files now emit:

```typescript
TypedDocument.String<Result, Variables, true> // ← third parameter for SDDM
```

## Testing

### Type Testing

The validation is enforced at **compile-time only**. To verify:

1. **Valid usage** - should compile without errors:

```typescript
const sddmDoc = Graffle.query.pokemons({ birthday: true })
const sddmClient = GraffleClient.create()
await sddmClient.send(sddmDoc) // ✅ OK
```

2. **Invalid usage** - should show type error:

```typescript
const plainClient = PlainGraffle.create()
plainClient.gql(sddmDoc).send() // ❌ Type error
```

### Runtime Testing

Run the example to verify runtime behavior:

```bash
cd examples
pnpm test 55_document-builder/document-builder_static.ts
```

The SDDM scenario should:

- Execute successfully with generated client
- Show proper custom scalar decoding (Date type)

## Type System Architecture

### Document Branding

Documents are branded at the type level via phantom type parameter:

```typescript
interface TypedDocumentString<
  $Result,
  $Variables,
  $RequiresSDDM extends boolean,
> extends String {
  readonly __sddm?: $RequiresSDDM // Phantom brand
}
```

### SDDM Detection

Documents are checked for SDDM requirement via:

```typescript
type RequiresSDDMOf<$Document> = $Document extends
  { __sddm?: infer $RequiresSDDM extends boolean } ? $RequiresSDDM
  : false
```

### Context Structure

The client context has SDDM configuration at:

```typescript
interface Context {
  configuration: {
    schema: {
      current: {
        map: SchemaDrivenDataMap | undefined
      }
    }
  }
}
```

When `map` is defined, the client supports SDDM.

## Generated Code

### Document Builder (document.ts)

Generated code always sets `sddmEnabled: true`:

```typescript
type DocumentConfig = {
  schema: $$Schema.Schema
  sddmEnabled: true  // Always true for generated code
}

export interface QueryBuilder {
  pokemons: <...>() => TypedDocument.String<Result, Variables, true>
  //                                                           ^^^^ SDDM enabled
}
```

### Client (client.ts)

Generated clients auto-configure SDDM:

```typescript
const context = $Utilities.pipe(
  $Utilities.contextEmpty,
  ctx =>
    $Utilities.Configuration.add(ctx, {
      schema: {
        name: $Data.Name,
        map: $SchemaDrivenDataMap.schemaDrivenDataMap, // ← SDDM configured
      },
    }),
)
```

## Benefits

1. **Compile-time safety** - Invalid document/client combinations are caught during development
2. **Clear error messages** - Type error explains what's needed (`Configure client with schema.map`)
3. **Zero runtime overhead** - All validation happens at compile-time
4. **Backward compatibility** - Non-SDDM documents still work with any client
5. **Custom scalar safety** - SDDM documents guarantee proper scalar encoding/decoding

## Future Considerations

### Scenario 3 (Deferred)

A third scenario was considered but deferred:

- **Non-SDDM document + SDDM client** ✅ (should work fine)

This was left out because:

- It's less critical (non-SDDM docs work with any client)
- Source of non-SDDM docs needs clearer definition
- Can be added in future iteration

Potential sources for Scenario 3:

- Multi-operation documents via `document()`
- Manual `createStaticRootType()` usage
- Plain string GraphQL documents

## Conclusion

The SDDM type safety feature is now fully implemented with:

- ✅ Strict compile-time validation
- ✅ Clear error messages
- ✅ Example demonstrating usage
- ✅ All code regenerated with SDDM typing
- ✅ Documentation of architecture

Users can now confidently use custom scalars knowing that:

1. Generated documents require SDDM
2. Type system enforces correct client configuration
3. Runtime errors from improper scalar handling are prevented
