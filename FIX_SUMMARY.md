# Fix for Locale Enum with Reserved Keyword 'as'

## Issue Summary
The issue occurs when a GraphQL schema contains an enum value that matches a TypeScript reserved keyword, specifically the `as` keyword used for Assamese locale codes. This causes the generated TypeScript code to be invalid.

## Example Schema
```graphql
enum Locale {
  en
  pt
  ja
  as  # Assamese - TypeScript reserved keyword!
}
```

## Root Cause
The `as` keyword was missing from the reserved keywords list in the `@wollybeard/kit` library, which graffle depends on for TypeScript code generation.

## Solution

### 1. Fix in `@wollybeard/kit` library

The fix has been implemented in the kit repository at `/home/runner/work/kit`:

**File**: `src/syn/ts/reserved.ts`

Added `as` to the `reservedNames` array (line 93):

```typescript
export const reservedNames = [
  ...reservedJavaScriptKeywords,
  ...reservedTypeScriptTypeNames,
  `as`, // Type assertion keyword
  `of`, // Iterator keyword
] as const
```

**Test File**: `src/syn/ts/reserved.test.ts`

Created comprehensive tests to verify `as` is properly escaped:

```typescript
test('reservedNames includes TypeScript `as` keyword', () => {
  expect(reservedNames).toContain('as')
})

test('escapeReserved handles `as` keyword', () => {
  expect(escapeReserved('as')).toBe('$as')
})
```

**Commit**: Created branch `fix/add-as-to-reserved-keywords` in the kit repository with commit message:
```
Add 'as' to reserved TypeScript keywords

The 'as' keyword is used for type assertions in TypeScript and should
be escaped when used as an identifier. This fixes issues with enum
values like the Assamese locale 'as' that would fail to generate
valid TypeScript code.

Fixes graffle-js/graffle issue with locale enum type failing for 'as' keyword value.
```

### 2. Test in graffle repository

Created test file to verify the fix once kit is updated:

**File**: `src/generator/generators/EnumReservedKeyword.test.ts`

This test generates TypeScript code from a schema with an enum containing the `as` value and verifies:
1. The enum value is properly escaped (internally as `$as`)
2. The enum value is correctly re-exported (exported as `as`)
3. The generated code is valid TypeScript

**Test Schema**: `tests/_/fixtures/schemas/locale-enum-test.graphql`

## Next Steps

To complete the fix:

1. **Publish kit library update** (requires repository owner access):
   - Review and merge the PR in jasonkuhrt/kit repository
   - Publish new version of @wollybeard/kit to npm (e.g., 0.102.2)

2. **Update graffle dependency**:
   - Update package.json to use the new kit version
   - Run tests to verify everything works

3. **Verify the fix**:
   - The test in `EnumReservedKeyword.test.ts` should pass
   - Generate a client from a schema with `as` enum value
   - Verify the generated TypeScript code is valid

## Expected Output

When the fix is complete, for an enum value `as`, the generated code will look like:

```typescript
// Internal definition with escaped name
const $as = 'as'
type $as = typeof $as

// Re-export with original name
export { $as as as }
```

This allows the enum to be used normally in TypeScript:

```typescript
import { Locale } from './generated'

const locale = Locale.as // Works!
```

## Files Changed in Kit Repository
- `src/syn/ts/reserved.ts` - Added `as` to reserved keywords list
- `src/syn/ts/reserved.test.ts` - Added tests for `as` keyword handling

## Files Changed in Graffle Repository  
- `src/generator/generators/EnumReservedKeyword.test.ts` - Test for enum with reserved keyword
- `tests/_/fixtures/schemas/locale-enum-test.graphql` - Test schema with `as` enum value
- `package.json` - Will need to update kit version after publication
