# types/Schema Audit Report

**Date**: 2025-11-02
**Purpose**: Comprehensive audit before moving `types/Schema/` → `lib/graphql-kit/schema/type/`
**Scope**: All files, dependencies, issues, and cleanup recommendations

---

## Executive Summary

### Statistics

- **Total Files**: 28 TypeScript files (30 including tests)
- **Total Lines**: ~642 lines of code
- **Directory Size**: 132KB
- **Imports**: 66 import statements across all files
- **Exports**: ~89 total exports (27 wildcard, 32 type-only, ~30 runtime)
- **Tests**: 2 test files (helpers.test.ts, NamedType.test-d.ts)
- **JSDoc**: Minimal (~19 comment lines, critically under-documented)

### Health Rating: ⚠️ NEEDS SIGNIFICANT WORK

**Critical Issues**: 3
**High Priority**: 4
**Medium Priority**: 5
**Low Priority**: 2

**Total Estimated Cleanup**: 20-30 hours

### User Decisions Made

- ✅ Keep `_.ts`/`__.ts` barrel pattern (consistency with graphql-kit)
- ✅ Accept necessary circular dependencies (mutual recursion)
- ✅ Co-locate runtime with types (like Scalar/ pattern)
- ✅ Breaking changes acceptable (can restructure freely)

---

## Current Directory Structure

```
types/Schema/                                   Lines  Type
├── _.ts                                          46   Barrel
├── __.ts                                         17   Barrel
├── Directive.ts                                  16   Type + Runtime
├── helpers.ts                                    15   Type utilities
├── typeGroups.ts                                 50   Type unions
│
├── directives/
│   ├── Include.ts                                12   Runtime instance
│   └── Skip.ts                                   12   Runtime instance
│
├── Named/
│   ├── _.ts                                       1   Barrel
│   ├── __.ts                                      1   Barrel
│   ├── NamedType.ts                              21   Type + runtime
│   └── NamedType.test-d.ts                       19   Test
│
├── standard/
│   ├── _.ts                                       1   Barrel
│   ├── __.ts                                      1   Barrel
│   └── scalar.ts                                 37   Runtime instances
│
└── nodes/
    ├── __typename.ts                              4   Type
    ├── Args.ts                                    6   Type
    ├── Enum.ts                                   11   Type
    ├── InputField.ts                             17   Type
    ├── InputObject.ts                            13   Type
    ├── Interface.ts                              15   Type
    ├── List.ts                                    4   Type
    ├── Nullable.ts                                4   Type
    ├── OutputField.ts                            22   Type
    ├── OutputObject.ts                           14   Type
    ├── ScalarCodecless.ts                         6   Type
    ├── Union.ts                                  13   Type
    └── Scalar/
        ├── __.ts                                  5   Barrel
        ├── Scalar.ts                             14   Type
        ├── codec.ts                              18   Type
        ├── create.ts                             14   Runtime factory
        ├── helpers.ts                           139   Type + Runtime
        └── helpers.test.ts                       74   Test
```

---

## Issues Catalog

### CRITICAL ISSUES

#### Issue #1: Fixable Circular Dependencies

**Severity**: CRITICAL
**Effort**: 3-4 hours

**Circular dependency chains that should be broken:**

1. **Directive.ts ↔ __.ts cycle**
   ```
   Directive.ts imports from __.ts
   __.ts exports Directive
   ```
   - **Cause**: Directive.ts imports other types from barrel
   - **Fix**: Import directly from source files, not barrel
   - **Location**: Directive.ts line 2

2. **typeGroups.ts ↔ multiple node files**
   ```
   typeGroups.ts imports from nodes/*
   nodes/* exported through __.ts
   __.ts exports typeGroups
   ```
   - **Cause**: typeGroups creates unions of node types
   - **Fix**: Move typeGroups to separate location or lazy-evaluate unions
   - **Impact**: Low - likely benign cycle

3. **standard/scalar.ts ↔ Scalar subsystem**
   ```
   standard/scalar.ts imports from nodes/Scalar/create.ts
   create.ts imports from Scalar.ts
   Scalar.ts imports types from __.ts
   __.ts re-exports Standard
   ```
   - **Cause**: Standard scalars use Scalar factory which references Scalar types
   - **Fix**: Move standard scalars to `nodes/Scalar/standardScalars.ts`
   - **Impact**: Medium - creates logical grouping

**Recommended Fixes**:

- Change direct imports in Directive.ts to specific files
- Move standard/scalar.ts → nodes/Scalar/standardScalars.ts
- Ensure barrels (__.ts) never import from things they export

---

#### Issue #2: Confusing Export Distinction Between _.ts and __.ts

**Severity**: CRITICAL
**Effort**: 1-2 hours (documentation + verification)

**Current Pattern**:

- `__.ts` - "Internal" barrel (but actually used externally)
- `_.ts` - "Public" API barrel creating Schema namespace

**The Confusion**:

Looking at `_.ts` (46 lines):

```typescript
export type * from './__.js' // Re-exports all types from __
export * as Named from './Named/_.js'
export * as Standard from './standard/_.js'
// ... creates Schema namespace
```

Looking at `__.ts` (17 lines):

```typescript
export * from './Directive.js'
export * from './helpers.js'
export * from './nodes/...'
export * from './typeGroups.js'
// ... exports everything
```

**Problem**: Both are public APIs with different purposes but naming doesn't make this clear.

**Analysis**:

- `__.ts` is "everything exported flat"
- `_.ts` is "everything exported as namespaces"

**Decision Needed from User**:

1. Should `__.ts` be internal-only (not imported from outside)?
2. Or is it legitimately a dual public API (flat vs namespaced)?
3. Should we add JSDoc to clarify the distinction?

**Recommendation**:

- Add clear JSDoc to both files explaining the difference
- Consider renaming if user agrees: `__.ts` → `flat.ts`, `_.ts` → `namespaced.ts`
- But user chose to keep pattern, so just document it well

---

#### Issue #3: Missing Critical GraphQL Spec Features

**Severity**: CRITICAL (for completeness)
**Effort**: 6-8 hours

**Missing from Schema Type System**:

1. **Descriptions** (GraphQL spec requirement)
   - Types, fields, arguments, enums all can have descriptions
   - Currently NOT modeled in any node type
   - **Impact**: Generated code can't show API documentation
   - **Location**: All node files missing `description?: string` property

2. **Deprecation** (GraphQL spec requirement)
   - Fields and enum values can be deprecated
   - Currently NOT modeled
   - **Impact**: Can't show/handle deprecated fields
   - **Location**: OutputField.ts, Enum.ts missing `deprecationReason?: string`

3. **Default Values** (GraphQL spec requirement)
   - Arguments and input fields can have default values
   - Currently NOT modeled
   - **Impact**: Can't properly handle optional arguments
   - **Location**: InputField.ts missing `defaultValue?: unknown`

4. **Directive Definitions** (GraphQL spec)
   - Custom directives beyond @include/@skip
   - Directive locations (FIELD, QUERY, etc.)
   - Repeatable flag
   - Currently: Only Include/Skip instances, no directive definition type
   - **Impact**: Can't model custom directives
   - **Location**: Missing `nodes/DirectiveDefinition.ts`

5. **Schema Metadata** (GraphQL spec)
   - Schema-level description
   - Schema-level directives
   - Currently: Schema interface only has name, types, operations
   - **Impact**: Incomplete schema modeling
   - **Location**: _.ts Schema interface

**Recommendation**:

- Add `description?: string` to all node types
- Add `deprecationReason?: string` to OutputField, Enum members
- Add `defaultValue?: unknown` to InputField
- Create `DirectiveDefinition` type
- Expand Schema interface with metadata

**Questions for User**:

- Should we add all missing spec features now?
- Or incrementally as needed?
- Which features are highest priority for Graffle's use cases?

---

### HIGH PRIORITY ISSUES

#### Issue #4: Unnecessary Directory Nesting

**Severity**: HIGH
**Effort**: 2-3 hours

**Issue #4a: Named/ Directory**

- **Content**: Single 21-line file (NamedType.ts) + 2 barrel files
- **Purpose**: GraphQL name validation (regex pattern from spec)
- **Problem**: Overkill to have directory for one small utility
- **Location**: `Named/NamedType.ts`

**Recommendation**:

- Move to root: `types/Schema/Name.ts`
- Eliminate `Named/` directory and its barrels
- Update imports (found in 9 files)

**Issue #4b: standard/ Directory**

- **Content**: Single 37-line file with runtime scalar instances
- **Purpose**: Built-in scalars (String, Int, Boolean, Float, ID)
- **Problem**: Should be in Scalar/ subdirectory
- **Location**: `standard/scalar.ts`

**Recommendation**:

- Move to: `nodes/Scalar/standardScalars.ts`
- Eliminate `standard/` directory and its barrels
- Update imports and re-exports
- Clearer grouping with other Scalar code

**Impact**: Reduces nesting levels, simplifies mental model

---

#### Issue #5: Tight Coupling to GraphqlKit.Schema

**Severity**: HIGH
**Effort**: 4-6 hours (if decoupled)

**Coupling Points**:

1. **TypeKind Enum** (used in 7 files):
   ```typescript
   // OutputObject.ts
   kind: GraphqlKit.Schema2.TypeKind.Object

   // Interface.ts
   kind: GraphqlKit.Schema2.TypeKind.Interface

   // InputObject.ts
   kind: GraphqlKit.Schema2.TypeKind.InputObject
   ```
   - **Problem**: Schema types depend on runtime enum from GraphqlKit
   - **Impact**: Can't use types/Schema without GraphqlKit
   - **Question**: Is this coupling acceptable?

2. **StandardScalarRuntimeTypes** (used in Scalar.ts):
   ```typescript
   import type { GraphqlKit } from '#src/lib/graphql-kit/_.js'

   $Encoded extends GraphqlKit.Schema2.StandardScalarRuntimeTypes = ...
   ```
   - **Problem**: Type-level definition depends on GraphqlKit
   - **Impact**: Cross-module coupling

3. **Document.OperationType** (used in _.ts):
   ```typescript
   operationsAvailable: GraphqlKit.Document.OperationType[]
   ```
   - **Problem**: Schema types depend on Document types
   - **Question**: Is OperationType a schema or document concept?

**Recommendation Options**:

**Option A: Accept Coupling** (Simplest)

- Keep dependencies as-is
- Document the coupling clearly
- Ensure GraphqlKit is foundation layer

**Option B: Decouple** (Complex)

- Define TypeKind enum locally in types/Schema
- Define StandardScalarRuntimeTypes locally
- Import OperationType differently
- **Effort**: 4-6 hours
- **Benefit**: Portable schema types
- **Cost**: Potential divergence between definitions

**Question for User**:
Since we're moving types/Schema INTO graphql-kit anyway, is this coupling a problem? Or is it acceptable since they'll be in the same module?

---

#### Issue #6: Docpar.InlineType Dependency

**Severity**: HIGH
**Effort**: 2-3 hours (if moved)

**Problem**:
Both InputField and OutputField import from docpar:

```typescript
import type { Docpar } from '#src/docpar/$.js'

export type InputField<...> = {
  inlineType: Docpar.InlineType
  // ...
}
```

**Analysis**:

- `InlineType` represents nullability/list wrapping: `[0|1, [nested...]]`
- This is a schema-level concept (type modifiers in GraphQL spec)
- Currently defined in `docpar/core/sddm/InlineType.ts`
- Used in SDDM but conceptually belongs to schema

**Dependency Direction Issue**:

```
types/Schema → Docpar → SDDM
```

Should be:

```
Schema defines InlineType → Docpar uses it → SDDM uses it
```

**Recommendation**:

- Move `InlineType` from `docpar/core/sddm/` to `types/Schema/nodes/`
- Update all imports (docpar, SDDM, schema types)
- Break the backward dependency

**Questions for User**:

- Should we move InlineType now or defer?
- Is InlineType the right name or should it be `TypeModifiers` or `TypeWrapping`?

---

#### Issue #7: Incomplete Test Coverage

**Severity**: HIGH
**Effort**: 8-10 hours (for comprehensive coverage)

**Current Tests**:

- `nodes/Scalar/helpers.test.ts` (74 lines) - Tests scalar codec helpers
- `Named/NamedType.test-d.ts` (19 lines) - Type tests for name validation

**Missing Tests**:

- No tests for core node types (OutputObject, Interface, Union, etc.)
- No tests for typeGroups
- No tests for directives
- No tests for Schema interface
- No runtime tests for standard scalars
- No integration tests

**Impact**:

- Can't safely refactor without tests
- No confidence in correctness
- Breaking changes might go unnoticed

**Recommendation**:

- Add `.test-d.ts` files for type-level testing
- Add `.test.ts` for runtime values (scalars, directives)
- Test all public APIs before moving
- Consider test coverage as blocker for move

**Questions for User**:

- Should we add comprehensive tests before moving?
- Or move first and add tests in new location?
- What's the minimum acceptable test coverage?

---

### MEDIUM PRIORITY ISSUES

#### Issue #8: Missing JSDoc Documentation

**Severity**: MEDIUM
**Effort**: 4-6 hours

**Current State**:

- Only 6 exports have JSDoc comments
- Documented: `Schema`, `NameParse`, `UnknownScalar`, `GetDecodedMap`, `InlineFragmentTypeConditionTypes`, `createCodec`
- 40+ exports lack any documentation

**Critical Missing Documentation**:

- `OutputObject` - Core interface, no JSDoc
- `OutputField` - Core interface, no JSDoc
- `Interface` - Core interface, no JSDoc
- `Union` - Core interface, no JSDoc
- `Scalar` - Core interface, no JSDoc
- All type parameters lack `@typeParam` docs
- No `{@link}` references between related types

**Impact**:

- Poor developer experience
- Unclear API contracts
- Hard to onboard new contributors
- IDE hover info is empty

**Recommendation**:

- Add JSDoc to ALL exported types/interfaces
- Document type parameters (following CLAUDE.md rules about only documenting user-provided type params)
- Add `{@link}` for related types
- Explain non-obvious design decisions

**Template**:

````typescript
/**
 * Represents a GraphQL Object Type with typed fields.
 *
 * Object types are the most common type in GraphQL schemas,
 * defining entities with named fields that can return various types.
 *
 * @example
 * ```typescript
 * type User = OutputObject<'User', {
 *   id: OutputField<'id', null, [1], Scalar<'ID'>>
 *   name: OutputField<'name', null, [1], Scalar<'String'>>
 * }>
 * ```
 *
 * @see {@link OutputField} for field structure
 * @see {@link Interface} for interface types that objects can implement
 */
export interface OutputObject<
  $Name extends string = string,
  $Fields extends OutputFields = OutputFields,
> {
  // ...
}
````

---

#### Issue #9: Type Parameter Inconsistencies (Minor)

**Severity**: MEDIUM
**Effort**: 1 hour

**Found**: Generally excellent compliance with `$` prefix convention!

**Minor Issues**:

1. **Scalar.ts** - Missing `$` on type param:
   ```typescript
   // Line 7
   type GetDecodedMap<Scalars extends ScalarMap> = { ... }
   //                 ^^^^^^^ Should be $Scalars
   ```

2. **helpers.ts** - Type param naming:
   ```typescript
   // Line 15
   export type GetNamedType<T extends object | InlineTypes> = ...
   //                       ^ Should be $T
   ```

3. **Scalar/helpers.ts** - Inconsistent naming:
   ```typescript
   // Line 102
   export type GetRegisteredScalarCodecs<Scalars extends ScalarMap> = {
   //                                     ^^^^^^^ Should be $Scalars
     [Name in keyof Scalars]: ...
   //  ^^^^ Should be 'k' per mapped type convention
   ```

**Recommendation**:

- Fix all type parameters to use `$` prefix
- Ensure mapped types use `k` for keys, `i` for indices
- Verify consistency with CLAUDE.md rules

---

#### Issue #10: Magic Values and Numbers

**Severity**: MEDIUM
**Effort**: 1 hour

**Found Issues**:

1. **OutputObject.ts line 11** - Magic number `[1]`:
   ```typescript
   fields: {
     __typename: OutputField<'__typename', {}, [1], __typename<$Name>>
     //                                         ^^^ Magic number
   } & $Fields
   ```
   - **Meaning**: `[1]` represents non-null inline type
   - **Problem**: Not obvious what this means
   - **Fix**: Extract constant or add comment

2. **InlineType encoding** - Magic tuples throughout:
   ```typescript
   [0] = nullable
   [1] = non-null
   [0, [0]] = nullable list of nullable
   [1, [1]] = non-null list of non-null
   ```
   - **Problem**: Format not documented
   - **Fix**: Add comprehensive JSDoc or extract to named constants

**Recommendation**:

- Extract constants: `INLINE_TYPE_NULLABLE = 0`, `INLINE_TYPE_NONNULL = 1`
- Or add comprehensive JSDoc explaining tuple encoding
- Consider if this encoding is optimal or should be refactored

---

#### Issue #11: TODO Comments Unresolved

**Severity**: MEDIUM
**Effort**: 2-3 hours (investigate + fix)

**TODOs Found**:

1. **helpers.ts:7**:
   ```typescript
   // todo extends any because of infinite depth issue
   export type GetNamedType<T extends object | InlineTypes> = T extends
     InlineTypes ? GetNamedType<T['type']>
     : T
   ```
   - **Issue**: Type recursion depth limitation
   - **Current Workaround**: Accepts `any` in practice
   - **Question**: Can this be fixed with TypeScript 5.x features?
   - **Action**: Research if tail recursion optimization or other features help

2. **nodes/Scalar/helpers.ts:64**:
   ```typescript
   // TODO: could we use `unknown` instead?
   export const applyCodec = <$Mapper extends Mapper>(
     mapper: $Mapper,
     scalars: ScalarMap<any, any, any>,
   ): ...
   ```
   - **Issue**: Using `any` for scalar map type params
   - **Current**: Likely type inference issues
   - **Question**: Can we use `unknown` or better constraints?
   - **Action**: Attempt to use `unknown` and check if types still work

**Recommendation**:

- Investigate both TODOs thoroughly
- Either fix or document why unfixable
- Add issue tracker links if complex

---

#### Issue #12: Unused or Unclear Exports

**Severity**: MEDIUM
**Effort**: 2-3 hours (audit + cleanup)

**Potentially Unused**:

Need to verify usage of:

- `NamedTypes` from typeGroups.ts - Is this used externally?
- `Args` type from Args.ts - Only 6 lines, seems like it could be inline
- `ScalarCodecless` - Only referenced in type unions, no direct usage found

**Unclear Purpose**:

1. **Args.ts**:
   ```typescript
   export type Args<$Fields extends InputFields = InputFields> = $Fields
   ```
   - **Issue**: This is just a type alias, why does it exist?
   - **Possible reason**: Semantic naming for function arguments vs input object fields?
   - **Question**: Is this necessary or can we inline it?

2. **directives/Include.ts and Skip.ts**:
   - Export runtime directive objects
   - But where are these used?
   - Are they needed or just placeholders?

**Recommendation**:

- Search codebase for usage of each export
- Remove unused exports
- Document purpose of unclear ones
- Consider consolidating tiny type aliases

---

### LOW PRIORITY ISSUES

#### Issue #13: Commented-Out Code in _.ts

**Severity**: LOW
**Effort**: 5 minutes

**Location**: `_.ts` line 11

```typescript
// import type { Mutation, Query, RootType, Subscription } from './standard/object.js'
```

**Issue**:

- Commented import suggests incomplete work
- File `standard/object.ts` doesn't exist
- Unclear intent

**Recommendation**:

- Remove if no longer needed
- Add TODO with issue link if future work
- Implement if it was supposed to exist

---

#### Issue #14: Test File Location Inconsistency

**Severity**: LOW
**Effort**: 30 minutes

**Current**:

- `nodes/Scalar/helpers.test.ts` - Co-located with implementation
- `Named/NamedType.test-d.ts` - Co-located with implementation
- No other tests in nodes/

**Issue**: Inconsistent pattern for test placement

**Options**:

1. **Co-locate all tests** - Add tests next to each node file
2. **Centralize tests** - Move to `types/Schema/__tests__/`
3. **Mixed** - Keep as-is (tests where they exist)

**Recommendation**:

- Choose one pattern and apply consistently
- Per CLAUDE.md: 1:1 test file mapping preferred
- Add missing test files for all nodes

---

## Section 3: Dependency Analysis

### External Dependencies

**1. GraphqlKit** (`#src/lib/graphql-kit/_.js`)

- **Used in**: 7 files
- **Imports**:
  - `GraphqlKit.Schema2.TypeKind` (enum for kind discriminators)
  - `GraphqlKit.Schema2.StandardScalarRuntimeTypes`
  - `GraphqlKit.Document.OperationType`
- **Impact**: types/Schema cannot function without GraphqlKit
- **Question**: Acceptable since moving INTO graphql-kit?

**2. Docpar** (`#src/docpar/$.js`)

- **Used in**: 2 files (InputField.ts, OutputField.ts)
- **Imports**:
  - `Docpar.InlineType`
- **Impact**: Schema types depend on document parser types
- **Issue**: Dependency direction should be reversed
- **Fix**: Move InlineType to Schema

**3. GlobalRegistry** (`../GlobalRegistry/GlobalRegistry.js`)

- **Used in**: 1 file (_.ts)
- **Imports**:
  - `GlobalRegistry.ClientNames`
  - `GlobalRegistry.TypeExtensions`
- **Impact**: Schema interface depends on generated client registry
- **Question**: Is this the right dependency direction?

**4. @wollybeard/kit**

- **Used in**: 2 files (helpers.ts, Scalar/helpers.ts)
- **Imports**:
  - `Obj` utilities
  - `Ts` utilities
- **Impact**: Utility dependencies (probably fine)

### Internal Dependencies

**Most Imported Files**:

1. `__.ts` - Imported by most files as main barrel
2. `nodes/Scalar/Scalar.ts` - Imported by 8+ files
3. `typeGroups.ts` - Imported by 4 files

**Tightly Coupled Clusters**:

- Scalar subsystem (Scalar/ directory) - Self-contained ✓
- Node types (nodes/*) - Cross-reference each other (mutual recursion)
- Directive types - Reference Scalar

---

## Section 4: Code Quality Deep Dive

### Type Safety Issues

**Found**:

1. **Scalar/helpers.ts:64** - `any` usage:
   ```typescript
   scalars: ScalarMap<any, any, any>
   ```
   - Has TODO to use `unknown`
   - Likely fixable

2. **helpers.ts:7** - `extends any` comment:
   ```typescript
   // todo extends any because of infinite depth issue
   ```
   - Acknowledged limitation
   - May not be fixable

**No other type safety issues found** - Generally excellent type safety!

### Naming Consistency

**Issues**:

1. **TypeKind vs String Literals**:
   - Some use: `kind: GraphqlKit.Schema2.TypeKind.Object`
   - Could use: `kind: 'Object'` (string literal)
   - **Question**: Is enum necessary or prefer literals?

2. **ScalarCodecless** naming:
   - Not obviously clear what "codecless" means
   - Alternative names: `UntypedScalar`, `RawScalar`, `BasicScalar`
   - **Question**: Rename or just document?

### Code Duplication

**None found** - Each node type is distinct, no obvious duplication

### Complex Types

**Potentially Oversimplified**:

1. **Args.ts**:
   ```typescript
   export type Args<$Fields extends InputFields = InputFields> = $Fields
   ```
   - Just an alias, could be inlined
   - Or purpose is semantic clarity?

**Potentially Overcomplicated**:

1. **Union.ts** - Three related properties:
   ```typescript
   members: $Members // Tuple of types
   membersUnion: $Members[number] // Union of tuple members
   membersIndex: Record<$Members[number]['name'], $Members[number]> // Keyed lookup
   ```
   - **Analysis**: All three serve different purposes
   - `members` - Preserve order
   - `membersUnion` - Type-level union operations
   - `membersIndex` - Lookup by name
   - **Verdict**: Appropriate complexity, not overcomplicated

---

## Section 5: Completeness Analysis

### GraphQL Spec Coverage

**What's Modeled** ✅:

- Object types (OutputObject)
- Interface types (Interface)
- Union types (Union)
- Enum types (Enum)
- Scalar types (Scalar, ScalarCodecless)
- Input object types (InputObject)
- Fields (OutputField, InputField)
- Arguments (via InputFields in OutputField)
- Type modifiers (List, Nullable via InlineType)
- Standard scalars (String, Int, Boolean, Float, ID)
- Built-in directives (@include, @skip)
- Root operation types (query, mutation, subscription)

**What's Missing** ❌:

- ❌ Descriptions (types, fields, arguments, enum values, directives)
- ❌ Deprecation (fields, enum values, arguments)
- ❌ Default values (arguments, input fields)
- ❌ Custom directive definitions (only @include/@skip instances)
- ❌ Directive locations (FIELD, QUERY, ARGUMENT, etc.)
- ❌ Directive `repeatable` flag
- ❌ isDeprecated flag (derived from deprecationReason)
- ❌ Schema-level description
- ❌ Schema-level directives (@specifiedBy for custom scalars, etc.)
- ❌ Field/Type extensions (extend type Foo, extend interface Bar)
- ❌ Interface implementations tracking (OutputObject → Interface[])

**Partial/Incomplete**:

- ⚠️ Interface: Has `implementors` tracking, but reverse mapping from OutputObject is missing
- ⚠️ Directives: Only Include/Skip, no framework for custom directives
- ⚠️ Scalar: Has codec but missing @specifiedBy URL

### Comparison to GraphQL.js

GraphQL.js type system includes (but types/Schema doesn't):

- `GraphQLFieldConfig.description`
- `GraphQLFieldConfig.deprecationReason`
- `GraphQLArgumentConfig.defaultValue`
- `GraphQLDirective` with locations and repeatable
- `GraphQLInterfaceType` with interface implementations

---

## Section 6: Public API Analysis

### Exports from _.ts (Public Namespace API)

```typescript
// Types
export type * from './__.js' // All types

// Namespaces
export * as Named from './Named/_.js'
export * as Standard from './standard/_.js'

// Main interface
export type {
  __typename,
  Args,
  Directive,
  Enum,
  InputField,
  InputFields,
  InputObject,
  Interface,
  List,
  Nullable,
  OutputField,
  OutputFields,
  OutputObject,
  Scalar,
  ScalarCodecless,
  ScalarMap,
  Union,
} from './__.js'

export type { Codec } from './nodes/Scalar/codec.js'

export interface Schema<
  $Extensions = GlobalRegistry.TypeExtensions,
  $Scalars = Scalar.Registry,
> {
  name: GlobalRegistry.ClientNames
  operationsAvailable: GraphqlKit.Document.OperationType[]

  RootUnion: OutputObject
  Root: {
    query: null | OutputObject
    mutation: null | OutputObject
    subscription: null | OutputObject
  }

  allTypes: Record<string, Enum | OutputObject | Union | Interface>
  objects: Record<string, OutputObject>
  unions: Record<string, Union>
  interfaces: Record<string, Interface>
  scalars: Record<string, Scalar | ScalarCodecless>

  scalarRegistry: $Scalars
  extensions: $Extensions
}
```

### Exports from __.ts (Flat API)

**All node types + helpers + directives + type groups**

### Usage by Consumers (25 files import from types/Schema)

**Heavy Users**:

- `docpar/` - 16 files (document parsing)
- `generator/` - 5 files (code generation)
- `utilities-for-generated/` - 2 files (exports for generated code)
- `extensions/` - 2 files (SchemaErrors, DocumentBuilder)

**Most Imported**:

1. `Schema` interface - 14 type imports, 5 namespace imports
2. `Scalar` - 12 imports
3. `OutputObject` - 9 imports
4. `OutputField` - 8 imports
5. `Standard.String` - 6 imports

**Least Imported**:

- `ScalarCodecless` - 2 imports (only in type unions)
- `Args` - 3 imports (questionable necessity)
- Directive instances - 0 direct imports found

---

## Section 7: Specific File Analysis

### _.ts (Main Public API - 46 lines)

**Purpose**: Create `Schema` namespace with all exports

**Issues**:

- Line 11: Commented import (dead code)
- Line 1-45: Large interface definition inline (should be separate file?)
- Imports from barrels create circular deps

**Recommendation**:

- Extract `Schema` interface to separate `Schema.ts` file
- Remove commented import
- Import from source files, not barrels

---

### __.ts (Flat Barrel - 17 lines)

**Purpose**: Re-export all types flatly

**Issues**:

- Imports create circular dependencies with files it exports
- No JSDoc explaining its purpose vs _.ts

**Recommendation**:

- Add JSDoc explaining: "Flat exports for direct imports"
- Ensure no imports from files it exports

---

### Directive.ts (16 lines)

**Purpose**: Defines Directive type that can be Include or Skip

**Issues**:

- Imports from barrel (`__.ts`) creating cycle
- Type is just a union of Include | Skip
- Could be in directives/ directory instead

**Current Code**:

```typescript
import type { Include, Skip } from './__.js' // ← Cycle!

export type Directive = Include | Skip
```

**Recommendation**:

- Import directly: `import type { Include } from './directives/Include.js'`
- Consider moving to `directives/Directive.ts`

---

### helpers.ts (15 lines)

**Purpose**: Type utilities (GetNamedType)

**Issues**:

- TODO comment about infinite depth (line 7)
- Missing JSDoc
- Type param should be `$T` not `T`

**Current Code**:

```typescript
// todo extends any because of infinite depth issue
export type GetNamedType<T extends object | InlineTypes> = T extends InlineTypes
  ? GetNamedType<T['type']>
  : T
```

**Recommendation**:

- Fix type param: `T` → `$T`
- Add JSDoc explaining recursive unwrapping
- Research if TODO can be resolved with TS 5.x

---

### typeGroups.ts (50 lines)

**Purpose**: Define unions of node types for type narrowing

**Issues**:

- Imports from __.ts (participates in cycle)
- No JSDoc on exports
- Could be split into input/output groups

**Exports**:

- `InlineTypes` - List | Nullable
- `NamedOutputTypes` - Interface | Enum | OutputObject | Union | Scalar | ScalarCodecless | __typename
- `NamedInputTypes` - Enum | Scalar | InputObject | ScalarCodecless
- `NamedTypes` - NamedInputTypes | NamedOutputTypes
- `OutputTypes` - InlineTypes | NamedOutputTypes | __typename
- `InputTypes` - InlineTypes | NamedInputTypes

**Recommendation**:

- Add JSDoc to each export
- Consider splitting: `typeGroups/input.ts`, `typeGroups/output.ts`
- Or keep as single file (it's only 50 lines)

---

### Named/NamedType.ts (21 lines)

**Purpose**: GraphQL name validation (per spec regex)

**Issues**:

- Unnecessary directory for single concept
- Barrel overhead (`_.ts`, `__.ts`) for minimal code

**Current Code**:

```typescript
export type NameParse<$Name extends string> = $Name extends
  `${Match}${infer $Rest}` ? $Rest extends '' ? $Name
  : never
  : never

type Match = Letters

type Letters =
  | Alphabet
  | '_'
  | `${Alphabet}${Letters}`
  | `${Alphabet}${Numbers}`
```

**Recommendation**:

- Move to root: `types/Schema/Name.ts`
- Eliminate `Named/` directory
- Update 9 import sites

---

### standard/scalar.ts (37 lines)

**Purpose**: Export built-in GraphQL scalar instances

**Issues**:

- Directory for single file
- Should be grouped with other Scalar code
- Creates circular dependency

**Current Code**:

```typescript
import { create } from '../nodes/Scalar/create.js' // ← Begins cycle

export const String = create(`String`, JavaScriptScalarCodecs.String)
export const ID = create(`ID`, JavaScriptScalarCodecs.String)
export const Int = create(`Int`, JavaScriptScalarCodecs.Number)
export const Boolean = create(`Boolean`, JavaScriptScalarCodecs.Boolean)
export const Float = create(`Float`, JavaScriptScalarCodecs.Number)
```

**Recommendation**:

- Move to: `nodes/Scalar/standardScalars.ts`
- Eliminate `standard/` directory
- Natural grouping with other Scalar code

---

### nodes/__typename.ts (4 lines)

**Purpose**: Special __typename field type

**Issues**:

- Minimal JSDoc
- Very simple (just a type alias)

**Current Code**:

```typescript
export type __typename<$Type extends string = string> = {
  kind: `Scalar`
  name: `String`
  codec: { encode: ..., decode: ..., _type: $Type }
}
```

**Recommendation**:

- Add JSDoc explaining special GraphQL __typename field
- Consider if this should be a Scalar subtype instead

---

### nodes/Args.ts (6 lines)

**Purpose**: Type alias for argument fields

**Issues**:

- Just an alias: `type Args<$Fields> = $Fields`
- Unclear if necessary
- No JSDoc

**Current Code**:

```typescript
import type { InputFields } from './InputField.js'

export type Args<$Fields extends InputFields = InputFields> = $Fields
```

**Usage**: Found in OutputField type

**Questions**:

- Is semantic naming the purpose (Args vs InputFields)?
- Could we just use InputFields directly?
- Should we keep for clarity or inline?

**Recommendation**:

- Add JSDoc explaining semantic purpose
- Keep if it adds clarity, inline if redundant

---

### nodes/Enum.ts (11 lines)

**Purpose**: GraphQL Enum type

**Missing**:

- ❌ description
- ❌ deprecationReason for members
- ❌ JSDoc

**Current Code**:

```typescript
export type Enum<
  $Name extends string = string,
> = {
  kind: 'Enum'
  name: $Name
  members: readonly string[]
  membersUnion: string
}
```

**Recommendation**:

- Add `description?: string`
- Change `members` to include deprecation:
  ```typescript
  members: readonly { name: string, deprecationReason?: string }[]
  ```
- Add JSDoc

---

### nodes/InputField.ts (17 lines)

**Purpose**: Input field (for input objects and arguments)

**Issues**:

- Depends on Docpar.InlineType (wrong dependency direction)
- Missing default value
- Missing description
- No JSDoc

**Current Code**:

```typescript
import type { Docpar } from '#src/docpar/$.js'

export type InputField<
  $Name extends string = string,
  $InlineType extends InlineType = InlineType,
  $NamedType extends NamedInputTypes = NamedInputTypes,
> = {
  name: $Name
  inlineType: $InlineType
  namedType: $NamedType
  $t?: unknown
}

export type InlineType = Docpar.InlineType
```

**Recommendation**:

- Move InlineType definition here or to separate file
- Add `description?: string`
- Add `defaultValue?: unknown`
- Add JSDoc

---

### nodes/InputObject.ts (13 lines)

**Purpose**: GraphQL Input Object type

**Issues**:

- Missing description
- Property `isAllFieldsNullable` - unclear purpose
- No JSDoc

**Current Code**:

```typescript
export type InputObject<
  $Name extends string = string,
  $Fields extends InputFields = InputFields,
  $IsAllFieldsNullable extends boolean = boolean,
> = {
  kind: GraphqlKit.Schema2.TypeKind.InputObject
  name: $Name
  fields: $Fields
  isAllFieldsNullable: $IsAllFieldsNullable // ← What's this for?
}
```

**Recommendation**:

- Add JSDoc explaining `isAllFieldsNullable` purpose
- Add `description?: string`
- Consider if `isAllFieldsNullable` should be computed property vs explicit

---

### nodes/Interface.ts (15 lines)

**Purpose**: GraphQL Interface type

**Issues**:

- Missing description
- `implementors` tracking is only one direction
- No JSDoc

**Current Code**:

```typescript
export type Interface<
  $Name extends string = string,
  $Fields extends OutputFields = OutputFields,
> = {
  kind: GraphqlKit.Schema2.TypeKind.Interface
  name: $Name
  fields: $Fields
  implementors: (OutputObject | Interface)[] // Who implements this interface
  implementorsUnion: OutputObject | Interface
  implementorsIndex: Record<string, OutputObject | Interface>
}
```

**Questions**:

- Should OutputObject track which interfaces it implements?
- Currently one-way: Interface knows implementors, but OutputObject doesn't list interfaces

**Recommendation**:

- Add `description?: string`
- Add JSDoc
- Consider bidirectional tracking if needed

---

### nodes/List.ts (4 lines) & nodes/Nullable.ts (4 lines)

**Purpose**: Type modifier wrappers

**Issues**:

- No JSDoc
- Very simple (just wrappers)

**Current Code**:

```typescript
// List.ts
export type List<$Type extends object = object> = {
  kind: 'list'
  type: $Type
}

// Nullable.ts
export type Nullable<$Type extends object = object> = {
  kind: 'nullable'
  type: $Type
}
```

**Questions**:

- Are these still used? Or replaced by InlineType tuple encoding?
- Seem redundant with `[0|1, [nested]]` tuple format

**Recommendation**:

- Add JSDoc explaining relationship to InlineType
- Clarify if still needed or deprecated
- Consider consolidating with InlineType documentation

---

### nodes/OutputField.ts (22 lines)

**Purpose**: Output field (on objects, interfaces)

**Issues**:

- Depends on Docpar.InlineType
- Missing description
- Missing deprecationReason
- No JSDoc

**Current Code**:

```typescript
export type OutputField<
  $Name extends string = string,
  $Arguments extends InputFields | null = InputFields | null,
  $InlineType extends InlineType = InlineType,
  $NamedType extends NamedOutputTypes = NamedOutputTypes,
> = {
  name: $Name
  arguments: $Arguments
  inlineType: $InlineType
  namedType: $NamedType
}
```

**Recommendation**:

- Move InlineType dependency to Schema
- Add `description?: string`
- Add `deprecationReason?: string`
- Add JSDoc

---

### nodes/OutputObject.ts (14 lines)

**Purpose**: GraphQL Object type

**Issues**:

- Missing description
- Missing interfaces list (which interfaces does this implement?)
- Magic `[1]` for __typename inline type
- No JSDoc

**Current Code**:

```typescript
export interface OutputObject<
  $Name extends string = string,
  $Fields extends OutputFields = OutputFields,
> {
  kind: GraphqlKit.Schema2.TypeKind.Object
  name: $Name
  fields: {
    __typename: OutputField<'__typename', {}, [1], __typename<$Name>>
    //                                         ^^^ Magic number
  } & $Fields
}
```

**Recommendation**:

- Add `description?: string`
- Add `interfaces?: Interface[]` or `interfaceNames?: string[]`
- Document or extract magic `[1]` constant
- Add comprehensive JSDoc

---

### nodes/ScalarCodecless.ts (6 lines)

**Purpose**: Scalar without codec (no encoding/decoding)

**Issues**:

- Name unclear ("codecless" is awkward)
- Missing description
- No JSDoc explaining when to use vs Scalar

**Current Code**:

```typescript
export interface ScalarCodecless<$Name extends string = string> {
  kind: 'Scalar'
  name: $Name
  codec: null
}
```

**Questions**:

- When is ScalarCodecless used vs Scalar?
- For scalars where client uses native JS types (String → string)?
- Should this be eliminated in favor of Scalar with identity codec?

**Recommendation**:

- Add JSDoc with clear use case explanation
- Consider rename: `UntypedScalar`, `BasicScalar`, or `ScalarWithoutCodec`
- Add `description?: string` property

---

### nodes/Union.ts (13 lines)

**Purpose**: GraphQL Union type

**Issues**:

- Missing description
- No JSDoc

**Current Code**: ✅ Well-designed

```typescript
export type Union<
  $Name extends string = string,
  $Members extends [OutputObject, ...OutputObject[]] = [
    OutputObject,
    ...OutputObject[],
  ],
> = {
  kind: GraphqlKit.Schema2.TypeKind.Union
  name: $Name
  members: $Members // Tuple preserves order
  membersUnion: $Members[number] // Union for type narrowing
  membersIndex: Record<$Members[number]['name'], $Members[number]> // Lookup
}
```

**Recommendation**:

- Add `description?: string`
- Add JSDoc explaining triple representation (tuple/union/index)

---

### nodes/Scalar/ Directory (Most Complex)

#### Scalar.ts (14 lines)

**Purpose**: Scalar type with codec

**Issues**:

- Missing description
- Missing @specifiedBy URL
- Type param naming inconsistency in GetDecodedMap

**Current Code**:

```typescript
export interface Scalar<
  $Name extends string = string,
  $Decoded = unknown,
  $Encoded extends GraphqlKit.Schema2.StandardScalarRuntimeTypes = ...,
> {
  kind: 'Scalar'
  name: $Name
  codec: Codec<$Decoded, $Encoded>
}

export type GetDecodedMap<Scalars extends ScalarMap> = {
  //                      ^^^^^^^ Should be $Scalars
  [Name in keyof Scalars]: Scalars[Name]['codec']['_typeDecoded']
  // ^^^ Should be 'k' per mapped type convention
}
```

**Recommendation**:

- Fix type params: `Scalars` → `$Scalars`, `Name` → `k`
- Add `description?: string`
- Add `specifiedByURL?: string` (for custom scalars)
- Add JSDoc

---

#### codec.ts (18 lines)

**Purpose**: Codec interface for scalar transformation

**Issues**: None found ✅

**Well-documented**:

```typescript
export interface Codec<$Decoded = unknown, $Encoded = unknown> {
  encode: (value: $Decoded) => $Encoded
  decode: (value: $Encoded) => $Decoded
  _typeDecoded: $Decoded
  _typeEncoded: $Encoded
}
```

**Recommendation**: No changes needed

---

#### create.ts (14 lines)

**Purpose**: Factory for creating Scalar instances

**Issues**:

- Missing JSDoc
- Could have example usage

**Recommendation**:

- Add JSDoc with example
- No structural changes needed

---

#### helpers.ts (139 lines - LARGEST FILE)

**Purpose**: Scalar codec utilities and type helpers

**Issues**:

- TODO comment (line 64) about using `unknown` instead of `any`
- Mixed type-level and runtime code (but co-location is intentional per user)
- Complex file (needs better internal organization/comments)

**Key Exports**:

- `UnknownScalar` - Fallback scalar with identity codec
- `lookupCustomScalarOrFallbackToUnknown` - Runtime lookup function
- `applyCodec` - Apply codec transformations
- Type utilities for codec type extraction

**Recommendation**:

- Address TODO or document why `any` is necessary
- Add internal section comments to organize the 139 lines
- Add JSDoc to all exports
- Consider splitting if it grows further

---

#### helpers.test.ts (74 lines)

**Issues**: None found ✅

**Well-tested**: Good coverage of scalar codec logic

---

### directives/Include.ts & Skip.ts (12 lines each)

**Purpose**: Built-in GraphQL directives

**Issues**:

- Export runtime objects (OK per user's co-location decision)
- No directive definition type (only instances)
- Missing locations, repeatable flag

**Current Code**:

```typescript
// Include.ts
export const Include: Directive = {
  name: 'include',
  arguments: {
    if: {
      name: 'if',
      inlineType: [1],
      namedType: { kind: 'Scalar', name: 'Boolean', codec: null },
    },
  },
}
```

**Recommendation**:

- Add directive definition type for custom directives
- Add JSDoc
- Consider adding location/repeatable metadata

---

## Section 8: Recommended Cleanup Plan

### Phase 1: Fix Fixable Circular Dependencies (3-4 hours)

**Priority**: CRITICAL - Do first

**Changes**:

1. **Directive.ts**: Import directly from `directives/Include.js` instead of `__.js`
2. **Move standard/scalar.ts** → `nodes/Scalar/standardScalars.ts`
3. **Update __.ts**: Ensure it doesn't import from things it exports

**Verification**:

- Run circular dependency checker
- Ensure only mutual recursion cycles remain

---

### Phase 2: Eliminate Unnecessary Directories (2-3 hours)

**Priority**: HIGH

**Changes**:

1. **Named/ directory**:
   - Move `NamedType.ts` → root as `Name.ts`
   - Update 9 import sites
   - Delete `Named/_.ts` and `Named/__.ts`

2. **standard/ directory**:
   - Content already moved in Phase 1
   - Delete directory and barrels

**Result**: Flatter structure, less nesting

---

### Phase 3: Add Missing GraphQL Spec Features (6-8 hours)

**Priority**: HIGH

**Changes to ALL node types**:

```typescript
// Add to: OutputObject, Interface, Union, Enum, InputObject, Scalar
description?: string

// Add to: OutputField, InputField
description?: string
deprecationReason?: string

// Add to: InputField
defaultValue?: unknown

// Add to: Enum
members: readonly {
  name: string
  description?: string
  deprecationReason?: string
}[]
```

**New Types**:

```typescript
// nodes/DirectiveDefinition.ts
export interface DirectiveDefinition {
  name: string
  description?: string
  locations: DirectiveLocation[]
  repeatable: boolean
  arguments: InputFields
}

export type DirectiveLocation =
  | 'QUERY'
  | 'MUTATION'
  | 'SUBSCRIPTION'
  | 'FIELD'
  | 'FRAGMENT_DEFINITION'
  | 'FRAGMENT_SPREAD'
  | 'INLINE_FRAGMENT'
  | 'VARIABLE_DEFINITION'
  | 'SCHEMA'
  | 'SCALAR'
  | 'OBJECT'
  | 'FIELD_DEFINITION'
  | 'ARGUMENT_DEFINITION'
  | 'INTERFACE'
  | 'UNION'
  | 'ENUM'
  | 'ENUM_VALUE'
  | 'INPUT_OBJECT'
  | 'INPUT_FIELD_DEFINITION'
```

**Expand Schema interface**:

```typescript
export interface Schema {
  description?: string
  directives: Record<string, DirectiveDefinition>
  // ... existing properties
}
```

**Impact**: More complete GraphQL spec compliance

---

### Phase 4: Improve Documentation (4-6 hours)

**Priority**: MEDIUM

**Changes**:

- Add JSDoc to ALL 40+ exported types/interfaces
- Document type parameters (following CLAUDE.md rules)
- Add `{@link}` references between related types
- Add examples in JSDoc
- Document InlineType tuple encoding format
- Explain magic values ([1], [0])

**Template for each node**:

````typescript
/**
 * GraphQL [TypeName] type definition.
 *
 * [Description of what this represents in GraphQL]
 *
 * @example
 * ```typescript
 * type MyType = [TypeName]<'MyType', { ... }>
 * ```
 *
 * @see {@link RelatedType} for [relationship]
 */
````

---

### Phase 5: Type Parameter Naming Fixes (1 hour)

**Priority**: MEDIUM

**Fixes Needed**:

1. **Scalar.ts:7**: `Scalars` → `$Scalars`, `Name` → `k`
2. **helpers.ts:15**: `T` → `$T`
3. **Scalar/helpers.ts:102**: `Scalars` → `$Scalars`, `Name` → `k`

**Verification**: Grep for all type params, ensure `$` prefix

---

### Phase 6: Code Quality Improvements (2-3 hours)

**Priority**: LOW

**Changes**:

1. Extract magic numbers to constants
2. Resolve TODOs or document why unresolved
3. Remove commented code (_.ts line 11)
4. Add internal comments to complex files (Scalar/helpers.ts)
5. Consider splitting large files if they grow

---

### Phase 7: Testing Expansion (8-10 hours)

**Priority**: LOW (can defer until after move)

**Add Tests For**:

- OutputObject type
- Interface type
- Union type
- InputObject type
- Type groups utilities
- Directive types
- Standard scalars runtime values

---

## Section 9: Questions for User

### Design Questions

1. **InlineType Encoding**:
   - Current: `[0|1, [nested]]` tuple format
   - Alternative: `{ nullable: boolean, list: boolean }` object format
   - Keep current or refactor?

2. **Scalar vs ScalarCodecless**:
   - Keep both types?
   - When should each be used?
   - Could ScalarCodecless just be `Scalar<Name, string, string>` with identity codec?

3. **Args Type Alias**:
   - Keep as semantic alias?
   - Or inline everywhere and remove?

4. **Interface Implementations**:
   - Should OutputObject track which interfaces it implements?
   - Currently one-way (Interface → implementors)
   - Need bidirectional?

5. **Missing GraphQL Features Priority**:
   - Which to add first: descriptions, deprecation, default values, directive definitions?
   - Add all in one go or incrementally?

### Technical Questions

6. **InlineType Ownership**:
   - Move from Docpar to Schema now?
   - Or defer until after move?
   - What should it be called? (InlineType, TypeModifiers, TypeWrapping?)

7. **Runtime Scalar Instances**:
   - Keep as exported values (Standard.String)?
   - Or use factory pattern only?
   - How should they be accessed after move?

8. **Circular Dependencies**:
   - After fixable cycles are broken, document remaining cycles?
   - Add ESLint rules to prevent new fixable cycles?

9. **Type vs Interface**:
   - Some nodes use `interface`, some use `type`
   - Standardize all to `interface` for consistency?
   - Or keep current mixed approach?

10. **Breaking Changes Scope**:
    - Can we rename exports (e.g., ScalarCodecless → UntypedScalar)?
    - Can we restructure directories freely?
    - Can we change type parameter counts/ordering?

---

## Section 10: Dependencies Requiring Updates

### Files That Import from types/Schema (25 total)

**Docpar** (16 files - heaviest consumer):

- `docpar/core/Context.ts`
- `docpar/core/doc.ts`
- `docpar/object/Output/Type.ts`
- `docpar/object/Select/Indicator.ts`
- `docpar/object/var/types.ts`
- `docpar/object/SelectionSets/toGraphQL/document.ts`
- `docpar/object/SelectionSets/toGraphQL/field.ts`
- `docpar/object/Parse.ts`
- `docpar/string/schema.ts`
- `docpar/string/string.ts`
- 6 more files in docpar/

**Generator** (5 files):

- `generator/code/SchemaRuntime/directives.ts`
- `generator/code/SchemaRuntime/sddm.ts`
- `generator/generators/Schema.ts`
- `generator/generators/SchemaDrivenDataMap.ts`
- `generator/config/configInit.ts`

**Other** (4 files):

- `utilities-for-generated/Schema.ts`
- `utilities-for-generated/graphql.ts`
- `extensions/DocumentBuilder/DocumentBuilder.ts`
- `extensions/SchemaErrors/SchemaErrors.ts`

**Import Patterns**:

- Namespace import: `import type { Schema } from '#src/types/Schema/_.js'`
- Named import: `import type { Scalar, OutputObject } from '#src/types/Schema/__.js'`

**After Move**:

- All imports need path updates
- Consider: `#src/lib/graphql-kit/schema/type/_.js`
- Or: `#src/lib/graphql-kit/schema/type/__.js`

---

## Section 11: Recommended Final Structure

### After Cleanup, Before Move

```
types/Schema/
├── _.ts                             # Namespace barrel (keep pattern)
├── __.ts                            # Flat barrel (keep pattern)
├── Schema.ts                        # MOVED from _.ts (main interface)
├── Name.ts                          # MOVED from Named/NamedType.ts
├── Directive.ts                     # Types for directives
├── DirectiveDefinition.ts           # NEW - custom directive framework
├── InlineType.ts                    # MOVED from Docpar
├── helpers.ts                       # Type utilities
├── typeGroups.ts                    # Type unions
│
├── directives/                      # Runtime directive instances
│   ├── Include.ts                   # @include directive
│   └── Skip.ts                      # @skip directive
│
└── nodes/                           # GraphQL type nodes
    ├── __typename.ts
    ├── Args.ts
    ├── Enum.ts                      # + description, deprecation
    ├── InputField.ts                # + description, defaultValue
    ├── InputObject.ts               # + description
    ├── Interface.ts                 # + description
    ├── List.ts
    ├── Nullable.ts
    ├── OutputField.ts               # + description, deprecation
    ├── OutputObject.ts              # + description, interfaces
    ├── ScalarCodecless.ts           # + description, consider rename
    ├── Union.ts                     # + description
    └── Scalar/
        ├── __.ts
        ├── Scalar.ts                # + description, specifiedByURL
        ├── codec.ts
        ├── create.ts
        ├── standardScalars.ts       # MOVED from standard/
        ├── helpers.ts
        └── __tests__/
            └── helpers.test.ts      # MOVED into __tests__/
```

**Changes**:

- ❌ Eliminated: `Named/` directory
- ❌ Eliminated: `standard/` directory
- ✅ Added: `Schema.ts` (extracted from _.ts)
- ✅ Added: `InlineType.ts` (moved from Docpar)
- ✅ Added: `DirectiveDefinition.ts` (new)
- ✅ Moved: Tests into `__tests__/` subdirs
- ✅ All nodes have complete GraphQL spec properties

---

## Section 12: Migration Checklist

### Pre-Cleanup Verification

- [ ] All tests passing
- [ ] Type check passes
- [ ] Document baseline metrics (bundle size, etc.)

### Phase 1: Critical Fixes

- [ ] Break Directive.ts cycle (direct imports)
- [ ] Move standard/scalar.ts → nodes/Scalar/standardScalars.ts
- [ ] Verify only necessary cycles remain
- [ ] Run tests

### Phase 2: Structure Cleanup

- [ ] Move Named/NamedType.ts → Name.ts
- [ ] Delete Named/ directory
- [ ] Update 9 import sites
- [ ] Extract Schema interface to Schema.ts file
- [ ] Run tests

### Phase 3: Spec Completeness

- [ ] Add description to all node types
- [ ] Add deprecationReason to OutputField, Enum
- [ ] Add defaultValue to InputField
- [ ] Create DirectiveDefinition.ts
- [ ] Update Schema interface with directives, description
- [ ] Run tests

### Phase 4: Documentation

- [ ] Add JSDoc to all 40+ exports
- [ ] Document type parameters
- [ ] Add {@link} cross-references
- [ ] Document InlineType encoding
- [ ] Add examples

### Phase 5: Type Parameter Fixes

- [ ] Fix Scalar.ts type params
- [ ] Fix helpers.ts type params
- [ ] Fix Scalar/helpers.ts type params
- [ ] Verify all follow $Name convention

### Phase 6: Code Quality

- [ ] Resolve TODOs (investigate + fix or document)
- [ ] Remove commented code
- [ ] Extract magic numbers
- [ ] Add internal comments to complex files

### Phase 7: Testing (Can Defer)

- [ ] Add .test-d.ts for all nodes
- [ ] Add .test.ts for runtime values
- [ ] Achieve 80%+ coverage
- [ ] Move tests to **tests**/ subdirs

### Phase 8: Final Verification

- [ ] All tests passing
- [ ] Type check passes
- [ ] No circular dependencies (except mutual recursion)
- [ ] All imports updated
- [ ] Documentation complete
- [ ] Code quality checks pass

---

## Section 13: Effort Estimation

| Phase                      | Effort          | Can Parallelize?             |
| -------------------------- | --------------- | ---------------------------- |
| Phase 1: Critical Fixes    | 3-4 hours       | No (sequential)              |
| Phase 2: Structure Cleanup | 2-3 hours       | After Phase 1                |
| Phase 3: Spec Completeness | 6-8 hours       | Can parallelize with Phase 4 |
| Phase 4: Documentation     | 4-6 hours       | Can parallelize with Phase 3 |
| Phase 5: Type Param Fixes  | 1 hour          | Can parallelize              |
| Phase 6: Code Quality      | 2-3 hours       | Can parallelize              |
| Phase 7: Testing           | 8-10 hours      | Can defer until after move   |
| **Total (Phases 1-6)**     | **18-25 hours** |                              |
| **Total (All Phases)**     | **26-35 hours** |                              |

**Recommended Minimum Before Move**: Phases 1-2 (5-7 hours)
**Recommended Complete Before Move**: Phases 1-6 (18-25 hours)
**Can Defer**: Phase 7 (testing can happen in new location)

---

## Section 14: Risk Assessment

### Risks of Moving Without Cleanup

❌ **HIGH RISK**:

- Circular dependencies harder to fix in new location (more imports to update)
- Confusing structure gets permanently enshrined in graphql-kit
- Missing features become harder to add later
- Type parameter inconsistencies proliferate

### Risks of Cleanup Before Move

✅ **LOW RISK**:

- Breaking changes acceptable per user
- Can iterate in current location
- Tests provide safety net
- Changes well-isolated to types/Schema

### Recommended Approach

**Do Phases 1-6 BEFORE moving** for these reasons:

1. Easier to fix circular deps while paths are shorter
2. Cleanup validates the structure before making it "official"
3. Missing features easier to add before move
4. Documentation clarifies intent for future maintainers
5. Only 18-25 hours of work for major quality improvement

**Defer Phase 7 (testing)** because:

- Tests can be added in new location
- Not a blocker for structural soundness
- Can be done incrementally after move

---

## Section 15: Open Questions for User

1. **Spec Completeness**: Add all missing features (description, deprecation, default values) before move?

2. **InlineType**: Move from Docpar to Schema during cleanup?

3. **Coupling to GraphqlKit**: Acceptable since moving into graphql-kit anyway?

4. **ScalarCodecless**: Keep, rename, or eliminate?

5. **Testing Blocker**: Must tests be complete before move, or can they be added after?

6. **Incremental vs All-At-Once**: Do all cleanup phases, or minimum required?

7. **Breaking Changes Scope**: Can we rename/restructure freely, or preserve some public API?

---

## Conclusion

The `types/Schema/` module is **fundamentally sound** but needs **significant polish** before becoming part of graphql-kit's official API.

**Strengths**:

- ✅ Good type parameter naming
- ✅ Clean node type modeling
- ✅ Scalar subsystem well-designed
- ✅ Co-location pattern working (Scalar/)

**Critical Work Needed**:

- ⚠️ Break fixable circular dependencies
- ⚠️ Complete GraphQL spec coverage
- ⚠️ Add comprehensive documentation
- ⚠️ Simplify directory structure

**Recommendation**: **Complete Phases 1-6 before moving** (18-25 hours). This ensures we move high-quality, well-documented, spec-compliant code into graphql-kit rather than carrying forward technical debt.
