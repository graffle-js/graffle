# Remaining Issues - Monorepo Migration

PR: https://github.com/graffle-js/graffle/pull/1429

The monorepo migration is **architecturally complete** (100%) with a unified `@graffle/graphql` package implementing the two-tier global pattern. However, **build errors remain** that need manual fixes.

## Critical Issues (Must Fix Before Merge)

### 1. Path Alias References in Document Files

**Affected Files**: ~30 files in `packages/graphql/src/document/`

**Problem**: Files still use old TypeScript path aliases that don't exist in the new structure.

**Errors**:

```typescript
// Error: Cannot find module '#src/types/RequestResult/_.js'
import type { RequestResult } from '#src/types/RequestResult/_.js'

// Error: Cannot find module '#test/schema/possible/client/_.js'
import * as Client from '#test/schema/possible/client/_.js'

// Error: Cannot find module '#graffle/utilities-for-generated'
import type { Kind } from '#graffle/utilities-for-generated'
```

**Files with Issues**:

```
src/document/$.test-d.ts
src/document/$.test.ts
src/document/object/Parse.ts
src/document/object/rootType.ts
src/document/object/ToGraphQLDocument/nodes/1_Document.ts
src/document/object/ToGraphQLDocument/nodes/2_OperationDefinition.ts
src/document/object/ToGraphQLDocument/nodes/3_GraffleSelectionSetRoot.ts
src/document/object/ToGraphQLDocument/nodes/4_GraffleSelectionObjectLevel.ts
src/document/object/ToGraphQLDocument/nodes/5_Field.ts
src/document/object/ToGraphQLDocument/nodes/5_InlineFragments.ts
src/document/object/ToGraphQLDocument/nodes/_collect.ts
src/document/object/ToGraphQLDocument/nodes/Argument.ts
... (~18 more files)
```

**Fix Options**:

**Option A - Update tsconfig.json** (Recommended):

```json
// packages/graphql/tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "#src/*": ["../../src/*"], // Map to monorepo root src
      "#test/*": ["../../tests/*"], // Map to monorepo root tests
      "#graffle/*": ["./src/*"] // Map to graphql package src
    }
  }
}
```

**Option B - Convert to Relative Imports**:

```bash
cd packages/graphql/src/document
find . -name "*.ts" -exec sed -i '' "s|#src/|../../src/|g" {} \;
find . -name "*.ts" -exec sed -i '' "s|#test/|../../tests/|g" {} \;
find . -name "*.ts" -exec sed -i '' "s|#graffle/utilities-for-generated|@graffle/client/utilities-for-generated|g" {} \;
```

**Option C - Convert to Package Imports**:

```typescript
// Before
import type { RequestResult } from '#src/types/RequestResult/_.js'

// After
import type { Core } from '@graffle/core'
// Use: Core.RequestResult
```

**Estimated Time**: 1-2 hours

---

### 2. Missing Graphql Export

**Affected Files**: ~15 files in `packages/graphql/src/document/`

**Problem**: Files expect `Graphql` export from parent module but it wasn't re-exported.

**Error**:

```
Module '"../__.js"' has no exported member 'Graphql'
```

**Files with Issues**:

```
src/document/core/sddm/mapVariables.test.ts
src/document/core/sddm/mapVariables.ts
src/document/core/sddm/SchemaDrivenDataMap.ts
src/document/object/InferResult/operation.ts
src/document/object/Select/document.ts
src/document/object/ToGraphQLDocument/context.ts
src/document/object/ToGraphQLDocument/nodes/1_Document.ts
src/document/object/ToGraphQLDocument/nodes/2_OperationDefinition.ts
src/document/object/ToGraphQLDocument/nodes/4_GraffleSelectionObjectLevel.ts
src/document/object/ToGraphQLDocument/nodes/5_InlineFragments.ts
src/document/object/ToGraphQLDocument/nodes/_collect.ts
```

**Fix**: Already partially fixed in `packages/graphql/src/document/__.ts`:

```typescript
// Re-export Graphql from parent for backward compatibility
export * as Graphql from '../__.js'
```

**Remaining Work**: Verify this resolves all errors or add to individual files if needed.

**Estimated Time**: 30 minutes

---

### 3. Missing Module References

**Affected Files**: ~5-10 files

**Problem**: Imports reference modules that don't exist or have incorrect paths.

**Errors**:

```typescript
// Error: Cannot find module '@graffle/graphql/_Nodes.js'
import { _Nodes } from '@graffle/graphql/_Nodes.js'

// Error: Cannot find module '@graffle/graphql/typed-document/_.js'
import { TypedDocument } from '@graffle/graphql/typed-document/_.js'

// Error: Cannot find module './string/_.js'
import * from './string/_.js'
```

**Files with Issues**:

```
src/document/object/Parse.ts
src/document/object/rootType.ts
src/document/object/ToGraphQLDocument/context.ts
src/document/object/ToGraphQLDocument/nodes/3_GraffleSelectionSetRoot.ts
src/document/object/ToGraphQLDocument/nodes/4_GraffleSelectionObjectLevel.ts
src/document/object/ToGraphQLDocument/nodes/5_Field.ts
src/document/object/ToGraphQLDocument/nodes/5_InlineFragments.ts
src/document/object/ToGraphQLDocument/nodes/Argument.ts
```

**Fix Strategy**:

1. **_Nodes.js**: Investigate - likely refers to AST node constructors in `document.ts`
   - Should probably be `import * as Nodes from '../document.js'`
2. **typed-document**: Verify path - should be `../typed-document/_.js` (relative)
3. **string/$**: Already disabled in `__.ts` - remove remaining imports

**Estimated Time**: 30 minutes

---

### 4. Type Errors

**Affected Files**: ~10 instances across document files

**Problem**: Generic types missing arguments, implicit any types, missing properties.

**Errors**:

```
Generic type 'Parse' requires 1 type argument(s)
Property 'type' does not exist on type '{}'
Parameter 'v' implicitly has an 'any' type
Parameter 'selectionSet' implicitly has an 'any' type
Argument of type 'ParsedSelectionObjectLevel' is not assignable to parameter of type 'never'
'graffleOperation' is of type 'unknown'
```

**Files with Issues**:

```
src/document/$.test-d.ts (line 16, 17)
src/document/core/sddm/mapVariables.ts (line 60, 73)
src/document/object/ToGraphQLDocument/nodes/1_Document.ts (line 17)
src/document/object/ToGraphQLDocument/nodes/4_GraffleSelectionObjectLevel.ts (line 34, 59)
src/document/object/ToGraphQLDocument/nodes/5_InlineFragments.ts (line 17)
```

**Fix Strategy**: Update type signatures and add explicit type parameters as needed.

**Estimated Time**: 30 minutes

---

## Non-Critical Issues (Can Address Later)

### 5. String Parser Disabled

**Status**: Temporarily commented out in `packages/graphql/src/document/__.ts`

**Code**:

```typescript
// Temporarily disabled - string parser has schema dependencies
// export * from './string/_.js'
```

**Issue**: String parser has dependencies on schema types that may need refactoring.

**Decision Needed**:

- Should string parser be re-enabled?
- Does it need refactoring to work with new structure?

**Estimated Time**: 1-2 hours (if needed)

---

### 6. Test File Updates

**Problem**: Test files may have outdated imports or references.

**Examples**:

- `src/document/$.test-d.ts` - has multiple issues
- `src/document/$.test.ts` - has import path issues

**Fix Strategy**: Update alongside main code fixes.

**Estimated Time**: Included in path alias fixes

---

## Summary Table

| Issue                     | Severity    | Files Affected | Estimated Time | Fix Complexity |
| ------------------------- | ----------- | -------------- | -------------- | -------------- |
| Path Alias References     | 🔴 Critical | ~30            | 1-2 hours      | Medium         |
| Missing Graphql Export    | 🔴 Critical | ~15            | 30 min         | Low            |
| Missing Module References | 🔴 Critical | ~5-10          | 30 min         | Medium         |
| Type Errors               | 🔴 Critical | ~10            | 30 min         | Low            |
| String Parser             | 🟡 Medium   | 1 dir          | 1-2 hours      | Medium         |
| Test Files                | 🟢 Low      | ~5             | (included)     | Low            |

**Total Estimated Time**: 2.5-4 hours

---

## Recommended Fix Order

1. **First**: Fix path aliases (Option A with tsconfig.json)
   - Unblocks most other issues
   - Cleanest solution

2. **Second**: Verify Graphql export fix
   - Should already be working
   - Quick verification

3. **Third**: Fix missing module references
   - Investigate `_Nodes.js`
   - Update paths

4. **Fourth**: Fix type errors
   - Add missing type parameters
   - Fix implicit any types

5. **Last**: Test and iterate
   - Run `pnpm build`
   - Fix any remaining issues

---

## Quick Fix Script

```bash
#!/bin/bash
# Run from repo root

echo "Fixing path aliases in document files..."

# Option 1: Update tsconfig (recommended)
cat > packages/graphql/tsconfig.paths.json <<EOF
{
  "compilerOptions": {
    "paths": {
      "#src/*": ["../../src/*"],
      "#test/*": ["../../tests/*"],
      "#graffle/*": ["./src/*"]
    }
  }
}
EOF

# Update main tsconfig to extend paths
# (Manual step - add "extends": ["./tsconfig.paths.json"])

# Option 2: Convert to relative imports (alternative)
cd packages/graphql/src/document
find . -name "*.ts" -type f -exec sed -i '' 's|#src/types/RequestResult/\$\.js|@graffle/core|g' {} \;
find . -name "*.ts" -type f -exec sed -i '' 's|#graffle/utilities-for-generated|@graffle/client/utilities-for-generated|g' {} \;
find . -name "*.ts" -type f -exec sed -i '' 's|@graffle/graphql/_Nodes\.js|../document.js|g' {} \;
find . -name "*.ts" -type f -exec sed -i '' 's|@graffle/graphql/typed-document/\$\.js|../typed-document/\_.js|g' {} \;

echo "Done! Now run: pnpm build"
```

---

## Progress Tracking

-
  1. [ ] Fix path alias references
-
  2. [ ] Verify Graphql export fix
-
  3. [ ] Fix missing module references
-
  4. [ ] Fix type errors
-
  5. [ ] Run `pnpm build` successfully
-
  6. [ ] Run tests
-
  7. [ ] Regenerate fixtures
-
  8. [ ] Merge PR

---

## Notes

- **Architecture is 100% complete** - only import/path issues remain
- **No design changes needed** - purely mechanical fixes
- **Two-tier global pattern working** - generator emits correctly
- **All package structure done** - 13 packages, clean dependencies

The hard work is done - just need to clean up the import paths! 🎉
