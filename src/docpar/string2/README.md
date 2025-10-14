# String2: Graffle Schema Parser

Rewrite of the gql-tada string document parser to work with Graffle's schema format.

## Current Status

### ✅ Done
- [x] Schema type definitions (`schema.ts`)
- [x] Type traversal utilities (`typeTraversal.ts`)
- [x] Plan document

### 🚧 In Progress
- [ ] Selection inference (main type inference logic)
- [ ] Variable type inference
- [ ] Export API
- [ ] Integration tests

## Key Design Decisions

### 1. Single-Pass Parsing (No DocumentNode Intermediate)

**Unlike gql-tada**, string2 does NOT create a DocumentNode intermediate:

```typescript
// gql-tada (two-pass)
type Doc = ParseDocument<'query { user { id } }'>  // → DocumentNode
type Result = InferFromDocument<Doc, Schema>       // → { user: { id: string } }

// string2 (single-pass)
type Result = ParseDocument<'query { user { id } }', Schema>
// → { user: { id: string } } directly
```

As we pattern match the string, we **immediately look up types in the schema** and build the result. No intermediate AST.

**Benefits:**
- Faster (fewer type instantiations)
- Less memory (no DocumentNode in type system)
- Symmetric with object builder (both are single-pass)

### 2. Schema Format

Fields now have both `type` (for traversal) and `namedType` (for direct access):

```typescript
interface battles {
  kind: 'OutputField'
  type: {                    // Traverse wrappers
    kind: 'NonNull'
    ofType: {
      kind: 'List'
      ofType: $Schema.Battle  // Terminal = direct reference
    }
  }
  namedType: $Schema.Battle   // Shortcut to base type
}
```

### 2. Type Traversal

Much simpler than gql-tada's introspection approach:

```typescript
// Unwrap NonNull
type UnwrapNonNull<$Type> =
  $Type extends { kind: 'NonNull'; ofType: infer $Inner }
    ? $Inner
    : $Type

// Get named type (recursively unwrap all wrappers)
type GetNamedType<$Type> =
  $Type extends { kind: 'NonNull' | 'List'; ofType: infer $Inner }
    ? GetNamedType<$Inner>
    : $Type  // Terminal is already the named type reference
```

No decoding step needed - just pattern match on the structure.

### 3. Benefits Over gql-tada Format

1. **No decoder needed** - `type` field is already in traversable format
2. **Direct type access** - `namedType` gives immediate access without lookup
3. **Better TypeScript perf** - Direct pattern matching vs recursive array decoding
4. **Same code for both parsers** - String and object parsers can share schema format

## Next Steps

1. **Implement selection.ts** - Core type inference from GraphQL selections
2. **Implement variables.ts** - Variable type inference from operation definitions
3. **Create $$.ts** - Export API matching string/$$. format
4. **Wire into gql.ts** - Replace `Docpar.parseDocument` and `Docpar.getDocumentOperations`
5. **Run tests** - Verify feature parity

## Testing Strategy

Start with simple cases and build up:

1. Simple scalar field: `{ __typename }`
2. Nested object: `{ user { id name } }`
3. Lists: `{ users { id } }`
4. Nullability: Required vs optional fields
5. Variables: `query($id: ID!) { user(id: $id) { id } }`
6. Multiple operations
7. Fragments (if used)

Each test should pass with string2 before moving to the next.
