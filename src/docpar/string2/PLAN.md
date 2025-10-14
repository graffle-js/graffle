# String2: Rewrite Plan

## Goal
Rewrite gql-tada string document parser to work with Graffle's schema format instead of introspection format.

## Key Differences from String (gql-tada)

### Schema Format

**Old (introspection):**
```typescript
type Schema = {
  'Query': {
    kind: 'OBJECT'
    fields: {
      'battles': {
        type: {
          kind: 'NON_NULL'
          ofType: {
            kind: 'LIST'
            ofType: { kind: 'OBJECT', name: 'Battle', ofType: null }
          }
        }
      }
    }
  }
}
```

**New (Graffle):**
```typescript
interface Query {
  kind: 'Object'
  name: 'Query'
  fields: {
    __typename: $Fields.__typename
    battles: $Fields.battles
  }
}

interface battles {
  kind: 'OutputField'
  name: 'battles'
  arguments: {}
  type: {                    // NEW: Direct nested structure
    kind: 'NonNull'
    ofType: {
      kind: 'List'
      ofType: $Schema.Battle  // NEW: Direct reference at terminal
    }
  }
  namedType: $Schema.Battle   // NEW: Direct access to base type
}
```

## What Needs to be Rewritten

### Core Exports (from string/$$.)

1. **parseDocument** - GraphQL string → AST (can reuse from graphql.web, just type wrapper)
2. **getDocumentOperations** - Extract typed operations from document
3. **schemaOfSetup** - Transform setup into SchemaLike (simplified)
4. **GraphQLTadaAPI** - API type (minimal changes)
5. **AbstractSetupSchema** - Setup interface (adapt for Graffle schema)

### Internal Modules to Rewrite

1. **selection.ts** - Main type inference logic
   - `getDocumentType` - Infer result type from selections
   - `getDocumentOperations` - Extract all operations with types

2. **variables.ts** - Variable type inference
   - `getVariablesType` - Infer variables from operation
   - `getScalarType` - Resolve scalar types

3. **introspection.ts** → **schema.ts**
   - Adapt to work with Graffle's schema format
   - Remove `mapIntrospection` (not needed)
   - Simplify `SchemaLike` interface

4. **parser.ts** - Can mostly reuse
   - Just type wrappers around @0no-co/graphql.web

5. **namespace.ts**, **utils.ts** - Probably can reuse as-is

## Implementation Plan

### Phase 1: Setup & Schema Types
- [ ] Create basic file structure
- [ ] Define new `SchemaLike` interface for Graffle schema
- [ ] Define `AbstractSetupSchema` for Graffle schema input
- [ ] Create `schemaOfSetup` type utility

### Phase 2: Type Traversal
- [ ] Implement field type unwrapping (NonNull/List via `type` field)
- [ ] Implement type resolution (using `namedType` shortcut)
- [ ] Test with simple scalar fields

### Phase 3: Selection Inference
- [ ] Rewrite `getDocumentType` for Graffle schema
- [ ] Rewrite `getDocumentOperations`
- [ ] Test with simple queries

### Phase 4: Variables & Arguments
- [ ] Rewrite `getVariablesType`
- [ ] Handle argument types
- [ ] Test with parameterized queries

### Phase 5: Integration
- [ ] Create $$. exports
- [ ] Wire into gql.ts
- [ ] Run test suite
- [ ] Fix failures iteratively

## Success Criteria

- [ ] All existing tests pass with string2
- [ ] Type inference works for:
  - Simple queries
  - Nested selections
  - Variables
  - Multiple operations
  - Fragments (if used)
- [ ] No regressions in IDE performance

## Non-Goals (for now)

- Fragment masking (unless currently used)
- Persisted documents
- Runtime API (initGraphQLTada, etc.) - only need types
