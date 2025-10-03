# SDDM Requirement Tracking in Static Document Builder

## Problem Statement

The static document builder currently has a critical type safety hole: documents built with SDDM (Schema-Driven Data Map) metadata can be executed by clients without SDDM, and vice versa. This creates runtime inconsistencies:

**Scenario 1: SDDM Document → Non-SDDM Client**
- Document was built with precise type information (`ID!`, custom scalar codecs)
- Client lacks SDDM metadata for proper variable encoding/result decoding
- **Result**: Wrong scalar encoding, missing type coercion, potential runtime failures

**Scenario 2: Non-SDDM Document → SDDM Client**
- Document was built with value-inferred types (`String` from `"value"`)
- Client has SDDM but document doesn't leverage it
- **Result**: Type mismatches, overly permissive variable types

### Current Behavior

```typescript
// Generated with SDDM enabled
const doc = Graffle.query.trainerByName({ $: { name: 'Ash' } })
// doc expects: query($name: String!) with SDDM scalar encoding

// But can be sent via client WITHOUT SDDM
const clientNoSDDM = graffle.create({ schema: null })
await clientNoSDDM.gql(doc).send() // ❌ Should fail at compile time
```

## Solution: Type-Level SDDM Requirement Branding

Track SDDM requirement as a **phantom type parameter** on `TypedDocument.String`. No runtime overhead, full compile-time safety.

### Architecture: Two-Layer System

#### Layer 1: Derived Type (Source of Truth)

A generic type that derives the entire document builder interface from configuration:

```typescript
// Location: src/extensions/DocumentBuilder/kit (not generated)

export type StaticDocumentBuilderConfig = {
  schema: Schema.Schema
  sddmEnabled: boolean
  // Future: customScalars, namingConventions, etc.
}

export type StaticDocumentBuilder<
  $Config extends StaticDocumentBuilderConfig,
  $OperationType extends OperationTypeNode
> = {
  [$Field in keyof GetRootFields<$Config['schema'], $OperationType>]:
    <$Selection extends SelectionSet<$Config, $Field>>(
      selection?: $Selection
    ) => TypedDocument.String<
      InferResult<$Config, $Field, $Selection>,
      InferVariables<$Config, $Field, $Selection>,
      $Config['sddmEnabled']  // <-- SDDM brand flows through
    >
}
```

**Benefits:**
- Single source of truth for type derivation
- Can be used directly if needed (bypassing generation)
- Proves type correctness of generated code

#### Layer 2: Pre-Computed Generated Type (Performance + Documentation)

Generator pre-computes what the derived type would produce, adding field-specific JSDoc:

```typescript
// Generated in: graffle/modules/document.ts

// Shared config for all operations in this schema
type DocumentConfig = {
  schema: $$Schema.Schema
  sddmEnabled: true  // Set based on generation config
}

/**
 * Static document builder for Pokemon queries
 *
 * @example
 * ```ts
 * const doc = query.trainerByName({ name: $ }, { name: true })
 * ```
 */
export interface QueryBuilder extends StaticDocumentBuilder<DocumentConfig, OperationTypeNode.QUERY> {
  /**
   * Fetch trainer by name
   * @param name - Trainer name to search for
   */
  trainerByName<$Selection extends SelectionSets.Query['trainerByName']>(
    selection?: $Selection
  ): TypedDocument.String<
    InferResult.OperationQuery<{ trainerByName: $Selection }, $$Schema.Schema>,
    InferVariables<{ trainerByName: $Selection }>,
    true  // <-- SDDM required
  >

  // ... other fields
}

// Runtime singleton (cast to pre-computed interface)
export const query: QueryBuilder = createStaticRootType(
  OperationTypeNode.QUERY,
  $$SDDM  // Passed if SDDM enabled in config
) as any
```

**Benefits:**
- Better IDE performance (no deep type computation on hover)
- Field-specific JSDoc with examples
- Autocomplete shows field names immediately
- Type correctness guaranteed by extending derived type

### TypedDocument Updates

Add third type parameter for SDDM requirement:

```typescript
// src/lib/grafaid/typed-document/TypedDocument.ts

interface TypedDocumentString<
  $Result = SomeObjectData,
  $Variables = Variables,
  $RequiresSDDM extends boolean = false  // <-- New phantom brand
> extends String, DocumentTypeDecoration<$Result, $Variables> {
  // Phantom field (compile-time only)
  readonly __sddm?: $RequiresSDDM
}

export {
  type TypedDocumentNode as Node,
  type TypedDocumentString as String
}

// Update all TypedDocumentLike types to include $RequiresSDDM
export type TypedDocumentLike<
  $Result extends SomeObjectData = SomeObjectData,
  $Variables extends Variables = any,
  $RequiresSDDM extends boolean = false
> =
  | TypedQueryDocumentNode<$Result, $Variables>
  | TypedDocumentString<$Result, $Variables, $RequiresSDDM>
  | TypedDocumentNode<$Result, $Variables>
```

### Client-Side Validation

Add compile-time check when sending documents:

```typescript
// src/client/methods/gql/gql.ts or send.ts

export interface GqlMethod<$Context> {
  <$Document extends Grafaid.Document.Typed.TypedDocumentLike>(
    document: $Document
  ): $Document extends TypedDocument.String<any, any, infer $RequiresSDDM>
    ? $RequiresSDDM extends true
      ? $Context extends { schema: { map: SchemaDrivenDataMap } }
        ? DocumentController<$Context, $Document>  // ✅ SDDM present
        : never  // ❌ Type error: Document requires SDDM but client has no schema map
      : DocumentController<$Context, $Document>  // ✅ No SDDM required
    : DocumentController<$Context, $Document>  // ✅ Other document types
}
```

**Result:** TypeScript error at `.gql(doc)` call site if SDDM requirement not met.

### Runtime Factory

Update `createStaticRootType` to accept and track SDDM:

```typescript
// src/extensions/DocumentBuilder/staticBuilder.ts

export const createStaticRootType = <$SDDMEnabled extends boolean = false>(
  operationType: OperationTypeNode,
  sddm?: $SDDMEnabled extends true ? SchemaDrivenDataMap : never
): StaticDocumentBuilder<{
  schema: any,
  sddmEnabled: $SDDMEnabled
}, typeof operationType> => {
  return new Proxy({}, {
    get: (_, fieldName: string) => {
      return (selection?: any, options?: Partial<Options>) => {
        const documentNormalized = /* ... */

        const result = toGraphQLDocument(documentNormalized, {
          ...defaults,
          ...options,
          sddm: sddm ?? null  // Pass through SDDM
        })

        return print(result.document) as any
      }
    }
  })
}
```

## Implementation Phases

### Phase 1: Type Infrastructure (Foundational)
- [ ] Add `$RequiresSDDM` parameter to `TypedDocument.String` (default `false`)
- [ ] Update all `TypedDocumentLike` type aliases
- [ ] Create `StaticDocumentBuilderConfig` type
- [ ] Create `StaticDocumentBuilder<$Config, $Op>` derived type
- [ ] Add helper types: `GetRootFields`, `InferResult`, `InferVariables`

### Phase 2: Generator Updates
- [ ] Detect SDDM availability in generation config
- [ ] Generate `DocumentConfig` type in `document.ts` module
- [ ] Update `QueryBuilder`/`MutationBuilder`/`SubscriptionBuilder` to extend derived type
- [ ] Update all return types to include SDDM brand (`true` or `false`)
- [ ] Pass `$$SDDM` to `createStaticRootType` calls (when enabled)
- [ ] Update generator tests

### Phase 3: Runtime Updates
- [ ] Update `createStaticRootType` signature to accept optional SDDM
- [ ] Ensure SDDM flows through to `toGraphQLDocument`
- [ ] Update `staticBuilder.test.ts`

### Phase 4: Client Validation
- [ ] Add conditional type validation in `GqlMethod` interface
- [ ] Add integration tests: SDDM doc + SDDM client ✅, SDDM doc + no-SDDM client ❌
- [ ] Test error messages are clear

### Phase 5: Documentation
- [ ] Update `document-builder.md` guide
- [ ] Add "SDDM Requirement" section explaining the type safety
- [ ] Document migration path for users
- [ ] Add examples of type errors and how to fix them

## Migration Guide

### For Library Maintainers

**No breaking changes** for users who:
- Use generated builders as-is
- Don't explicitly type `TypedDocument.String`

**Potential breaks** for users who:
- Manually typed `TypedDocument.String<R, V>` (now needs 3rd param, defaults to `false`)
- Created custom document builder wrappers

**Migration:**
```typescript
// Before
type MyDoc = TypedDocument.String<MyResult, MyVariables>

// After
type MyDoc = TypedDocument.String<MyResult, MyVariables, false>
// Or rely on default:
type MyDoc = TypedDocument.String<MyResult, MyVariables>
```

### For End Users

Generated code automatically includes correct SDDM branding. Users only see benefits:

**Before:**
```typescript
// Could accidentally send SDDM doc to non-SDDM client
const doc = Graffle.query.user({ $: { id: '123' } })
await clientWithoutSDDM.gql(doc).send() // ⚠️ Runtime issues
```

**After:**
```typescript
// TypeScript catches the mistake
const doc = Graffle.query.user({ $: { id: '123' } })
await clientWithoutSDDM.gql(doc).send()
// ❌ Type error: Document requires SDDM but client schema map is null
```

## Alternative Approaches Considered

### Runtime Symbol Branding
**Rejected**: Adds runtime overhead, can't be tree-shaken, doesn't prevent JS usage

### Separate Document Types
**Rejected**: `TypedDocumentSDDM` vs `TypedDocumentNoSDDM` creates API fragmentation

### Generator-Time Only Validation
**Rejected**: Can't validate when documents cross module boundaries

## Future Extensions

This config-based approach enables future enhancements:

```typescript
type StaticDocumentBuilderConfig = {
  schema: Schema.Schema
  sddmEnabled: boolean
  customScalars: Schema.Scalar.Registry  // Override scalar codecs
  namingConvention: 'camelCase' | 'snake_case'  // Field name transform
  fragmentsEnabled: boolean  // Support fragment spreading
}
```

## Questions & Decisions

### Q: Should we support runtime SDDM switching?
**Decision**: No. SDDM is baked at generation time. Users wanting both modes should generate twice or regenerate.

**Rationale**:
- Keeps types simple (boolean literal, not `boolean`)
- Generation config already determines SDDM availability
- Runtime switching would require dynamic builder creation (complexity)

### Q: Should non-generated code ever use SDDM?
**Decision**: No. SDDM is always paired with generated code (schema is source of SDDM).

**Rationale**:
- You need schema to generate SDDM
- If you have schema, use generator
- Manual SDDM construction is an anti-pattern

### Q: How to handle partial SDDM (some types mapped, others not)?
**Decision**: Binary flag for now. Future: more granular tracking if needed.

**Rationale**:
- Current system is all-or-nothing (generate with/without SDDM)
- Partial SDDM would need type-level tracking per field (significant complexity)
- Can revisit if use cases emerge

## Success Criteria

- [ ] ✅ Type error when SDDM document sent to non-SDDM client
- [ ] ✅ No type error when SDDM document sent to SDDM client
- [ ] ✅ No type error when non-SDDM document sent to any client
- [ ] ✅ Generated types extend derived type (type correctness proof)
- [ ] ✅ IDE performance not degraded (pre-computed types used)
- [ ] ✅ Clear error messages guide users to fix
- [ ] ✅ All existing tests pass
- [ ] ✅ Documentation explains feature and migration

## References

- Phantom types: https://www.javiercasas.com/articles/typescript-phantom-types
- Branded types: https://egghead.io/blog/using-branded-types-in-typescript
