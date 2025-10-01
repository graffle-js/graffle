# Schema ESM Namespace Refactor Plan

## Problem Statement

Currently, the Schema.ts generator uses TypeScript namespaces which don't allow reserved keywords as type names, even though those keywords are valid in the GraphQL schema. This forces us to use `$` prefixes:

```typescript
// Current generated code
export namespace Schema {
  export type $bigint = $Scalar.bigint // ❌ Need $ prefix
}

// Consumer code (leaked $ prefix)
interface Schema<$Scalars> {
  scalars: {
    bigint: Schema.$bigint // ❌ Awkward $ prefix
  }
}
```

## Solution: ESM Namespace Re-export Pattern

TypeScript allows this pattern at module level:

```typescript
// Module-level exports (no namespace!)
export type bigint = $Scalar.bigint // ✅ Works!

// Then re-export as namespace
export * as Schema from './schema-types.js'
```

This works because:

1. At **module level**, `export type bigint` is allowed
2. TypeScript **namespaces** forbid reserved keywords as type names
3. ESM `export * as Name` creates a namespace from module exports
4. Consumers can still use `Schema.bigint` with no `$` prefix

## Benefits

1. **Cleaner Consumer API**: `Schema.bigint` instead of `Schema.$bigint`
2. **Consistency**: All schema names match GraphQL exactly
3. **Simpler Code Generation**: No need to track reserved vs safe names in Schema namespace
4. **Future-proof**: Works with any GraphQL name, regardless of TypeScript keyword status

## Architecture Changes

### Current Structure

```
modules/
└── schema.ts (single file)
    ├── import statements
    ├── export namespace Schema {
    │   ├── export type $bigint = $Scalar.bigint
    │   ├── export type Date = $Scalar.Date
    │   ├── export namespace Query { ... }
    │   ├── export namespace Mutation { ... }
    │   └── ...
    │   }
    └── export interface Schema<$Scalars> { ... }
```

### Proposed Structure (Local Library Pattern)

```
modules/
└── schema/
    ├── $.ts                    # export * as Schema from './$$.js'
    ├── $$.ts                   # Main module - re-exports + interface
    │   ├── export * from './types/scalars.js'
    │   ├── export * from './types/Query/$.js'      # Re-exports Query namespace
    │   ├── export * from './types/Mutation/$.js'   # Re-exports Mutation namespace
    │   ├── export * from './types/User/$.js'       # Re-exports User namespace
    │   └── export interface Schema<$Scalars> { ... }
    └── types/
        ├── scalars.ts          # export type bigint = $Scalar.bigint ✅
        │                       # export type Date = $Scalar.Date ✅
        ├── Query/
        │   ├── $.ts            # export * as Query from './fields.js'
        │   │                   # export interface Query { ... }
        │   └── fields.ts       # export type id = ...
        │                       # export type user = ...
        ├── Mutation/
        │   ├── $.ts            # export * as Mutation from './fields.js'
        │   │                   # export interface Mutation { ... }
        │   └── fields.ts       # export type createUser = ...
        └── User/              # Object type
            ├── $.ts            # export * as User from './fields.js'
            │                   # export interface User { ... }
            └── fields.ts       # export type id = ...
                                # export type name = ...
```

**Key Points:**

- All exports at module level - **no `$` prefixes needed**
- ESM namespace pattern at every level (`export * as Name`)
- Follows local library conventions: `$.ts` → `$$.ts` → implementation files
- Nested types (Query, Mutation, User, etc.) each get their own directory
- Circular type imports are fine (TypeScript handles this)

## Implementation Steps

### Phase 1: Create New Generator for schema-types.ts

**File**: `src/generator/generators/SchemaTypes.ts` (new)

1. Extract all type definitions from current Schema namespace
2. Generate them at module level instead of inside namespace
3. Use original names (no `$` prefix) for everything
4. Keep all the existing logic for:
   - Scalars (custom + standard)
   - Objects
   - Interfaces
   - Unions
   - Enums
   - Input Objects

**Key Changes**:

```typescript
// Before (in Schema.ts)
const ScalarCustom = createCodeGenerator<{ type: Grafaid.Schema.ScalarType }>(
  ({ code, type }) => {
    const escapedName = renderName(type.name) // Adds $ for reserved names
    code(`export type ${escapedName} = $Scalar.${type.name}`)
  },
)

// After (in SchemaTypes.ts)
const ScalarCustom = createCodeGenerator<{ type: Grafaid.Schema.ScalarType }>(
  ({ code, type }) => {
    // At module level, no escaping needed!
    code(`export type ${type.name} = $Scalar.${type.name}`)
  },
)
```

### Phase 2: Update Schema.ts Generator

**File**: `src/generator/generators/Schema.ts`

1. Remove the `export namespace Schema { ... }` block
2. Add import for schema-types: `import './schema-types.js'`
3. Add ESM namespace export: `export * as Schema from './schema-types.js'`
4. Keep the `export interface Schema<$Scalars>` as-is
5. Update all references to use original names (no `$` prefix)

**Key Changes**:

```typescript
// Before
const generate: CodeGenerator = ({ code }) => {
  // ... imports ...

  code(`export namespace Schema {`)
  // ... all type definitions ...
  code(`}`)

  code(`export interface Schema<$Scalars> { ... }`)
}

// After
const generate: CodeGenerator = ({ code }) => {
  // ... imports ...

  code(`import './schema-types.js'`)
  code(`export * as Schema from './schema-types.js'`)

  code(`export interface Schema<$Scalars> { ... }`)
}
```

### Phase 3: Update References to Schema Types

**File**: `src/generator/generators/Schema.ts`

Update the `scalars` array and all other references:

```typescript
// Before
const scalars = [
  ...kindMap.list.ScalarCustom.map(_ =>
    [_.name, `${$.Schema}.${renderName(_.name)}`] as const
  ),
  ...kindMap.list.ScalarStandard.map(_ =>
    [_.name, `${$.Schema}.${renderName(_.name)}`] as const
  ),
]

// After
const scalars = [
  ...kindMap.list.ScalarCustom.map(_ =>
    [_.name, `${$.Schema}.${_.name}`] as const
  ),
  ...kindMap.list.ScalarStandard.map(_ =>
    [_.name, `${$.Schema}.${_.name}`] as const
  ),
]
```

### Phase 4: Update Code Utilities (if needed)

**File**: `src/lib/Code.ts`

Review if any Code utilities need updates:

- `Code.tsNamespace()` - May not be needed anymore for Schema
- Any helpers that assumed namespace context

### Phase 5: Regenerate Fixtures

Run generator to update all test fixtures:

```bash
pnpm generate:fixtures
# or whatever command regenerates fixtures
```

### Phase 6: Update Tests

Update any tests that reference `Schema.$bigint` to use `Schema.bigint`:

```typescript
// Before
expect(schema.scalars.bigint).toBe(Schema.$bigint)

// After
expect(schema.scalars.bigint).toBe(Schema.bigint)
```

## File Changes Summary

### New Files

- `src/generator/generators/SchemaTypes.ts` - Generates schema-types.ts module

### Modified Files

- `src/generator/generators/Schema.ts` - Remove namespace, add ESM re-export
- `src/lib/Code.ts` - Review/update utilities if needed
- All generated `schema.ts` fixtures - Updated structure
- All generated `schema-types.ts` fixtures (new) - New file
- Test files - Update references from `Schema.$name` to `Schema.name`

### Generated Files (Output)

```
modules/
├── schema.ts (modified structure)
│   ├── import './schema-types.js'
│   ├── export * as Schema from './schema-types.js'
│   └── export interface Schema<$Scalars> { ... }
└── schema-types.ts (new)
    ├── export type bigint = $Scalar.bigint
    ├── export type Date = $Scalar.Date
    └── ... all other schema types
```

## Testing Strategy

### 1. Type Checking

```bash
pnpm check:types
```

Verify:

- No TypeScript errors in generated code
- `Schema.bigint` resolves correctly
- `Schema.Date` resolves correctly
- All other schema types resolve

### 2. Unit Tests

```bash
pnpm test
```

Verify:

- All existing tests pass
- Generated types match expected structure
- No references to `$bigint` remain in generated code

### 3. Manual Verification

Create a simple test to verify the pattern works:

```typescript
// Test file
import { Schema } from './modules/schema.js'

// Should work without $ prefix
type BiglintType = Schema.bigint // ✅
type DateType = Schema.Date // ✅

// Should match scalar types
const scalars: Schema.Scalars = {
  bigint: Schema.bigint, // ✅ No $ prefix!
  Date: Schema.Date, // ✅
}
```

### 4. Generated Code Inspection

Manually inspect a generated schema.ts and schema-types.ts:

- Verify no `$` prefixes on type names in schema-types.ts
- Verify `export * as Schema` in schema.ts
- Verify interface Schema references work correctly

## Rollback Plan

If issues are discovered:

1. **Immediate**: Revert changes to Schema.ts generator
2. **Regenerate**: Run fixture generation with old generator
3. **Verify**: Run tests to confirm rollback successful
4. **Investigate**: Determine root cause before re-attempting

## Risk Assessment

### Low Risk

- ESM namespace re-export is a well-established TypeScript pattern
- No runtime behavior changes (pure type-level refactor)
- Easy to rollback (just generator changes)

### Medium Risk

- Large number of generated files to update
- Potential for subtle type resolution issues

### Mitigation

- Comprehensive test suite before/after
- Manual verification of generated code
- Incremental rollout (one fixture at a time if needed)

## Success Criteria

1. ✅ All TypeScript errors resolved
2. ✅ No `$` prefixes in Schema type references (e.g., `Schema.bigint` not `Schema.$bigint`)
3. ✅ All tests pass
4. ✅ Generated code is cleaner and more readable
5. ✅ Consumer API is more intuitive

## Timeline Estimate

- Phase 1 (SchemaTypes.ts generator): 2-3 hours
- Phase 2 (Schema.ts updates): 1 hour
- Phase 3 (Reference updates): 1 hour
- Phase 4 (Code utilities review): 30 minutes
- Phase 5 (Regenerate fixtures): 15 minutes
- Phase 6 (Test updates): 1-2 hours
- Testing & verification: 1-2 hours

**Total**: ~8-10 hours

## Open Questions

1. Should we keep the old namespace pattern as a fallback option?
2. Are there any other generators that use similar namespace patterns?
3. Do we need to update any documentation about the generated code structure?
4. Should we create a migration guide for users who have existing code references?

## Next Steps

1. Review this plan for completeness
2. Get approval to proceed
3. Create a feature branch (`feat/schema-esm-namespace`)
4. Execute Phase 1-6 in order
5. Submit PR with detailed testing notes
