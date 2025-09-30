# Variable Inference Context - Graffle Project

## Current Task

Implementing type inference for GraphQL variables in static document builder at `/Users/jasonkuhrt/projects/jasonkuhrt/graffle/src/extensions/DocumentBuilder/InferOperationVariablesFromSelectionSet`

## Key Architectural Decisions

### 1. Context System for Selection Sets

- Implemented context-based selection set types with `SelectionContext` containing:
  - `scalars`: Custom scalar registry
  - `variablesEnabled`: Boolean flag to conditionally allow `VariableMarker` in arguments
- Created contexts:
  - `DefaultContext`: For auto-executing operations (variables disabled)
  - `StaticBuilderContext`: For static document building (variables enabled)
- Updated generator to use `_$Context` parameter instead of `_$Scalars`

### 2. Type System Architecture

#### Current Redundant Systems (TO BE UNIFIED)

1. **ArgsMapComputed** (in SelectionSets.ts generator)
   - Generates type maps with `any` placeholders
   - Duplicates SDDM information
   - Should be removed

2. **SDDM (SchemaDrivenDataMap)**
   - Located at: `/src/extensions/DocumentBuilder/__tests__/fixtures/possible/modules/schema-driven-data-map.ts`
   - Contains complete runtime argument information
   - Structure: `{ f: { fieldName: { a: { argName: { nt: Type, it: [nullability] } } } } }`
   - Currently typed as generic `SchemaDrivenDataMap.OutputObject` instead of literal types

3. **Schema Types**
   - Located at: `/src/extensions/DocumentBuilder/__tests__/fixtures/possible/modules/schema.ts`
   - Type-level representation with full type information
   - Contains `arguments` property with `inlineType` and `namedType` for each field

#### Unified Approach (PLANNED)

- Use SDDM as single source of truth
- Generate SDDM with literal types (`as const`)
- Export type aliases for SDDM objects
- Remove ArgsMapComputed completely
- Use SDDM literal types for variable inference

### 3. Variable Inference Implementation

#### Current State

```typescript
// In FromArgsOrInputObject
$Args[k] extends VariableMarker
  ? {
      name: k;
      type: any; // TODO: needs actual type from schema
      optional: true; // TODO: needs nullability logic
      optionalUndefined: true
    }
```

#### Needed Implementation

- Pass SDDM literal type through inference functions
- Extract actual types from SDDM: `$FieldSDDM['a'][$ArgName]`
- Map SDDM type info (`nt`, `it`) to TypeScript types
- Handle nullability based on `inlineType`: `[0]` = nullable, `[1]` = non-null

### 4. Key Files

#### Core Implementation

- `/src/extensions/DocumentBuilder/InferOperationVariablesFromSelectionSet/__.ts` - Main inference logic
- `/src/extensions/DocumentBuilder/Select/context.ts` - Context types
- `/src/extensions/DocumentBuilder/Select/arguments.ts` - Argument types with conditional VariableMarker

#### Generators

- `/src/generator/generators/SelectionSets.ts` - Contains redundant ArgsMapComputed generator (to be removed)
- `/src/generator/generators/SchemaDrivenDataMap.ts` - SDDM generator (needs literal type export)

#### Test Fixtures

- `/src/extensions/DocumentBuilder/__tests__/fixtures/possible/modules/schema-driven-data-map.ts`
- `/src/extensions/DocumentBuilder/__tests__/fixtures/possible/modules/schema.ts`
- `/src/extensions/DocumentBuilder/__tests__/fixtures/possible/modules/selection-sets.ts`

### 5. Next Steps

1. **Enhance SDDM Generator**
   - Add `as const` to generated objects
   - Export literal type aliases (e.g., `export type Query$SDDM = typeof Query`)

2. **Update Variable Inference**
   - Accept SDDM literal type as parameter
   - Extract actual types from SDDM structure
   - Implement proper nullability handling

3. **Remove Redundancy**
   - Delete ArgsMapComputed generator code
   - Clean up any references to ArgsMapComputed

4. **Testing**
   - Verify variable types match GraphQL schema
   - Test nullable vs non-nullable arguments
   - Test nested input objects with variables

## Important Notes

- The `SchemaArgumentsMap` should remain minimal - just a marker/structure map
- SDDM already contains all needed type information at runtime
- The goal is DRY principle - single source of truth for schema structure
- Variable inference needs literal types, not generic types, for proper type extraction
