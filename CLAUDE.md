# Local Claude Rules for Graffle Project

## CRITICAL: Generated Files

**NEVER EDIT GENERATED FILES**

- Any file in `__tests__/fixtures/*/modules/` directories is GENERATED
- These files are created by generator scripts and should NEVER be manually edited
- If there are issues with generated files, fix the generator code, not the generated output
- Always regenerate fixtures using the appropriate pnpm scripts after fixing generators

Generated file patterns to NEVER edit:

- `src/extensions/DocumentBuilder/__tests__/fixtures/*/modules/*.ts`
- Any file that has been marked as generated or comes from a generator script

## Type Assertion Formatting

When using `Ts.Assert` in test files (`.test-d.ts`):

1. **Use alias at module top**: `const A = Ts.Assert`
2. **Single-line format** for short assertions:
   ```typescript
   A.exact.ofAs<string>().onAs<Type>()
   ```
3. **Multi-line format** when combined expected + actual types visually exceed ~50 characters:
   ```typescript
   A.sub.ofAs<LongExpectedType>()
     .onAs<LongActualType>()
   ```
4. **Indentation rule**: Align the `.onAs` dot with the `.ofAs` dot
   - Count characters in prefix (e.g., `A.sub.` = 5 chars)
   - Use that many spaces before `.onAs`
   - Examples:
     - `A.exact.` → 7 spaces before `.onAs`
     - `A.sub.` → 5 spaces before `.onAs`
     - `A.equiv.` → 7 spaces before `.onAs`
     - `A.awaited.exact.` → 15 spaces before `.onAs`
