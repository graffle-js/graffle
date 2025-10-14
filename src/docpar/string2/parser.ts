/**
 * Single-pass GraphQL string parser with character-by-character matching.
 *
 * Unlike span-based parsing which suffers from greedy template literal matching,
 * this parser checks one character at a time, avoiding all ambiguity.
 *
 * Architecture:
 * - Parse GraphQL string character-by-character
 * - Look up types in schema as we go
 * - Build result type directly (no intermediate tokens or DocumentNode)
 */

import type { MakeError } from './errors.js'
import type { Schema, OutputObject, OutputField, Scalar, Enum } from './schema.js'
import type { ApplyInlineType } from './typeTraversal.js'
import type { GetDecoded } from '#src/types/Schema/nodes/Scalar/helpers.js'

/**
 * Parse a GraphQL document string and infer its type in one pass.
 */
export type ParseDocument<
  $Input extends string,
  $Schema extends Schema,
> = ParseOperations<SkipIgnored<$Input>, $Schema, {}>

/**
 * Parse multiple operations and accumulate them
 */
type ParseOperations<
  $Input extends string,
  $Schema extends Schema,
  $Result extends Record<string, any>,
> =
  $Input extends ''
    ? Normalize<$Result>
    : ParseSingleOperation<$Input, $Schema> extends infer $OpResult
      ? $OpResult extends { operation: infer $Op; rest: infer $Rest }
        ? ParseOperations<SkipIgnored<$Rest & string>, $Schema, $Result & $Op>
        : $OpResult  // Error
      : never

/**
 * Parse a single operation and return { operation: {...}, rest: string }
 */
type ParseSingleOperation<
  $Input extends string,
  $Schema extends Schema,
> =
  // Shorthand: { ... } (anonymous query) - check this FIRST before keywords
  $Input extends `{${infer _}`
    ? $Schema['Root']['query'] extends OutputObject
      ? ParseSelectionSetForOperation<'default', $Input, $Schema['Root']['query'], $Schema>
      : MakeError<'OperationNotAvailable', { message: 'Query operation not available in schema' }>
  // query keyword
  : $Input extends `query${infer $Rest}`
    ? IsWordBoundary<$Rest> extends true
      ? ParseOperationAfterKeyword<SkipIgnored<$Rest>, $Schema['Root']['query'], $Schema, 'query'>
      : never
  // mutation keyword
  : $Input extends `mutation${infer $Rest}`
    ? IsWordBoundary<$Rest> extends true
      ? ParseOperationAfterKeyword<SkipIgnored<$Rest>, $Schema['Root']['mutation'], $Schema, 'mutation'>
      : never
  // subscription keyword
  : $Input extends `subscription${infer $Rest}`
    ? IsWordBoundary<$Rest> extends true
      ? ParseOperationAfterKeyword<SkipIgnored<$Rest>, $Schema['Root']['subscription'], $Schema, 'subscription'>
      : never
  : MakeError<'InvalidOperation', {
      message: 'Expected operation keyword or selection set'
      input: $Input
    }>

/**
 * Check if next character is a word boundary (space, brace, paren, EOF)
 */
type IsWordBoundary<$Input extends string> =
  $Input extends ` ${string}` ? true
  : $Input extends `\n${string}` ? true
  : $Input extends `\t${string}` ? true
  : $Input extends `{${string}` ? true
  : $Input extends `(${string}` ? true
  : $Input extends '' ? true
  : false

/**
 * Parse after operation keyword: optional name, optional variables, then selection set
 */
type ParseOperationAfterKeyword<
  $Input extends string,
  $RootType extends OutputObject | null,
  $Schema extends Schema,
  $OperationType extends string,
> =
  $RootType extends OutputObject
    ? // Try to extract operation name
      TakeName<$Input> extends { name: infer $Name; rest: infer $Rest }
      ? // Has name
        ParseAfterOperationName<$Name & string, SkipIgnored<$Rest & string>, $RootType, $Schema>
      : // No name - must be selection set
        $Input extends `{${infer _}`
        ? ParseSelectionSetForOperation<'default', $Input, $RootType, $Schema>
        : MakeError<'ExpectedSelectionSet', {
            message: 'Expected selection set after operation keyword'
            input: $Input
          }>
    : MakeError<'OperationNotAvailable', {
        message: `${Capitalize<$OperationType>} operation not available in schema`
      }>

/**
 * Parse after operation name: optional variables, then selection set
 */
type ParseAfterOperationName<
  $Name extends string,
  $Input extends string,
  $RootType extends OutputObject,
  $Schema extends Schema,
> =
  // Check for variables
  $Input extends `(${infer _}`
    ? SkipUntilCloseParen<$Input, 0> extends { rest: infer $Rest }
      ? ParseSelectionSetForOperation<$Name, SkipIgnored<$Rest & string>, $RootType, $Schema>
      : MakeError<'UnmatchedParen', { message: 'Unmatched parenthesis in variables' }>
    : // No variables - must be selection set
      ParseSelectionSetForOperation<$Name, $Input, $RootType, $Schema>

/**
 * Parse selection set and wrap in operation metadata
 */
type ParseSelectionSetForOperation<
  $Name extends string,
  $Input extends string,
  $RootType extends OutputObject,
  $Schema extends Schema,
> =
  ParseSelectionSet<$Input, $RootType, $Schema> extends { result: infer $Result; rest: infer $Rest }
    ? {
        operation: WrapOperationResult<$Name, $Result>
        rest: $Rest
      }
    : ParseSelectionSet<$Input, $RootType, $Schema>  // Error

/**
 * Wrap a result in operation metadata with dynamic key
 */
type WrapOperationResult<$Name extends string, $Result> =
  $Name extends 'default'
    ? { default: { name: 'default'; result: $Result; variables: {} } }
    : $Name extends string
      ? { [K in $Name]: { name: $Name; result: $Result; variables: {} } }
      : never

/**
 * Parse a selection set: { field1 field2 { nested } }
 * Returns: { result: {...}, rest: string }
 */
type ParseSelectionSet<
  $Input extends string,
  $ParentType extends OutputObject,
  $Schema extends Schema,
> =
  $Input extends `{${infer $Rest}`
    ? ParseFieldsInSelectionSet<SkipIgnored<$Rest>, $ParentType, $Schema, {}, 1>
    : MakeError<'ExpectedSelectionSet', {
        message: 'Expected opening brace for selection set'
        input: $Input
      }>

/**
 * Parse fields within a selection set, tracking brace depth
 * Returns: { result: {...}, rest: string }
 */
type ParseFieldsInSelectionSet<
  $Input extends string,
  $ParentType extends OutputObject,
  $Schema extends Schema,
  $Result extends Record<string, any>,
  $Depth extends number,
> =
  // Check for closing brace
  $Input extends `}${infer $Rest}`
    ? $Depth extends 1
      ? { result: Normalize<$Result>; rest: $Rest }  // End - normalize result
      : ParseFieldsInSelectionSet<SkipIgnored<$Rest>, $ParentType, $Schema, $Result, Decrement<$Depth>>
  // Parse next field
  : TakeName<$Input> extends { name: infer $FieldName; rest: infer $Rest }
    ? ParseFieldByName<
        $FieldName & string,
        SkipIgnored<$Rest & string>,
        $ParentType,
        $Schema,
        $Result,
        $Depth
      >
    : $Input extends ''
      ? MakeError<'UnmatchedBrace', { message: 'Unexpected end of input in selection set' }>
      : MakeError<'UnexpectedInput', { message: 'Expected field name'; input: $Input }>

/**
 * Parse a field by its name
 */
type ParseFieldByName<
  $FieldName extends string,
  $Input extends string,
  $ParentType extends OutputObject,
  $Schema extends Schema,
  $Result extends Record<string, any>,
  $Depth extends number,
> =
  $FieldName extends keyof $ParentType['fields']
    ? ParseFieldAfterName<
        $FieldName,
        $Input,
        $ParentType['fields'][$FieldName],
        $ParentType,
        $Schema,
        $Result,
        $Depth
      >
    : MakeError<'FieldNotFound', {
        message: `Field '${$FieldName}' does not exist on type '${$ParentType['name']}'`
        fieldName: $FieldName
        parentType: $ParentType['name']
        availableFields: keyof $ParentType['fields']
      }>

/**
 * Parse after field name: check for arguments, nested selection, or continue
 */
type ParseFieldAfterName<
  $FieldName extends string,
  $Input extends string,
  $Field extends OutputField,
  $ParentType extends OutputObject,
  $Schema extends Schema,
  $Result extends Record<string, any>,
  $Depth extends number,
> =
  // Check for arguments
  $Input extends `(${infer _}`
    ? SkipUntilCloseParen<$Input, 0> extends { rest: infer $Rest }
      ? ParseFieldAfterArguments<
          $FieldName,
          SkipIgnored<$Rest & string>,
          $Field,
          $ParentType,
          $Schema,
          $Result,
          $Depth
        >
      : MakeError<'UnmatchedParen', { message: `Unmatched parenthesis in field '${$FieldName}' arguments` }>
  // Check for nested selection
  : $Input extends `{${infer _}`
    ? ParseFieldWithNestedSelection<$FieldName, $Input, $Field, $ParentType, $Schema, $Result, $Depth>
  // Scalar field - add to result and continue
  : ParseFieldsInSelectionSet<
      $Input,
      $ParentType,
      $Schema,
      $Result & Record<$FieldName, ApplyInlineType<$Field['inlineType'], ResolveNamedType<$Field['namedType'], $Schema>>>,
      $Depth
    >

/**
 * Parse after field arguments
 */
type ParseFieldAfterArguments<
  $FieldName extends string,
  $Input extends string,
  $Field extends OutputField,
  $ParentType extends OutputObject,
  $Schema extends Schema,
  $Result extends Record<string, any>,
  $Depth extends number,
> =
  // Check for nested selection
  $Input extends `{${infer _}`
    ? ParseFieldWithNestedSelection<$FieldName, $Input, $Field, $ParentType, $Schema, $Result, $Depth>
  // Scalar field - add to result and continue
  : ParseFieldsInSelectionSet<
      $Input,
      $ParentType,
      $Schema,
      $Result & Record<$FieldName, ApplyInlineType<$Field['inlineType'], ResolveNamedType<$Field['namedType'], $Schema>>>,
      $Depth
    >

/**
 * Parse field with nested selection
 */
type ParseFieldWithNestedSelection<
  $FieldName extends string,
  $Input extends string,
  $Field extends OutputField,
  $ParentType extends OutputObject,
  $Schema extends Schema,
  $Result extends Record<string, any>,
  $Depth extends number,
> =
  $Field['namedType'] extends OutputObject
    ? ParseSelectionSet<$Input, $Field['namedType'], $Schema> extends { result: infer $NestedResult; rest: infer $Rest }
      ? ParseFieldsInSelectionSet<
          SkipIgnored<$Rest & string>,
          $ParentType,
          $Schema,
          $Result & Record<$FieldName, ApplyInlineType<$Field['inlineType'], $NestedResult>>,
          $Depth
        >
      : ParseSelectionSet<$Input, $Field['namedType'], $Schema>  // Error
    : MakeError<'InvalidFieldType', {
        message: `Field '${$FieldName}' is not an object type and cannot have nested selection`
        fieldName: $FieldName
      }>

/**
 * Resolve a named type to its TypeScript type (for scalars/enums)
 */
type ResolveNamedType<$Type, $Schema extends Schema> =
  $Type extends Scalar
    ? GetDecoded<$Type>
  : $Type extends OutputObject
    ? $Type  // Objects need nested selection
  : $Type extends { kind: 'Interface' }
    ? $Type
  : $Type extends { kind: 'Union' }
    ? $Type
  : $Type extends Enum
    ? $Type['membersUnion']
  : unknown

// ============================================================================
// Character-by-character utilities
// ============================================================================

/**
 * Skip ignored characters (whitespace, commas, comments)
 */
type SkipIgnored<$Input extends string> =
  $Input extends ` ${infer $Rest}` ? SkipIgnored<$Rest>
  : $Input extends `\n${infer $Rest}` ? SkipIgnored<$Rest>
  : $Input extends `\t${infer $Rest}` ? SkipIgnored<$Rest>
  : $Input extends `\r${infer $Rest}` ? SkipIgnored<$Rest>
  : $Input extends `,${infer $Rest}` ? SkipIgnored<$Rest>
  : $Input extends `#${infer $Comment}\n${infer $Rest}` ? SkipIgnored<$Rest>
  : $Input extends `#${infer $Comment}` ? ''
  : $Input

/**
 * Take a name (alphanumeric + underscore)
 * Returns: { name: string, rest: string } or void
 */
type TakeName<$Input extends string> =
  $Input extends `${infer $First}${infer $Rest}`
    ? $First extends Letter | '_'
      ? TakeNameRest<$First, $Rest>
      : void
    : void

type TakeNameRest<$Acc extends string, $Input extends string> =
  $Input extends `${infer $Char}${infer $Rest}`
    ? $Char extends Letter | Digit | '_'
      ? TakeNameRest<`${$Acc}${$Char}`, $Rest>
      : { name: $Acc; rest: $Input }
    : { name: $Acc; rest: $Input }

/**
 * Skip until closing parenthesis, tracking depth
 */
type SkipUntilCloseParen<$Input extends string, $Depth extends number> =
  $Input extends `(${infer $Rest}`
    ? $Depth extends 0
      ? SkipUntilCloseParen<$Rest, 1>
      : SkipUntilCloseParen<$Rest, Increment<$Depth>>
    : $Input extends `)${infer $Rest}`
      ? $Depth extends 1
        ? { rest: $Rest }
        : SkipUntilCloseParen<$Rest, Decrement<$Depth>>
      : $Input extends `${infer _}${infer $Rest}`
        ? SkipUntilCloseParen<$Rest, $Depth>
        : void

// ============================================================================
// Utility types
// ============================================================================

type Letter =
  | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M'
  | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z'
  | 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm'
  | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z'

type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

type Increment<$N extends number> =
  $N extends 0 ? 1
  : $N extends 1 ? 2
  : $N extends 2 ? 3
  : $N extends 3 ? 4
  : $N extends 4 ? 5
  : $N extends 5 ? 6
  : $N extends 6 ? 7
  : $N extends 7 ? 8
  : $N extends 8 ? 9
  : $N extends 9 ? 10
  : never

type Decrement<$N extends number> =
  $N extends 10 ? 9
  : $N extends 9 ? 8
  : $N extends 8 ? 7
  : $N extends 7 ? 6
  : $N extends 6 ? 5
  : $N extends 5 ? 4
  : $N extends 4 ? 3
  : $N extends 3 ? 2
  : $N extends 2 ? 1
  : $N extends 1 ? 0
  : never

type Capitalize<$S extends string> =
  $S extends `${infer $First}${infer $Rest}`
    ? `${Uppercase<$First>}${$Rest}`
    : $S

/**
 * Normalize a type to a clean object literal
 * Converts Record<...> & Record<...> to { ... }
 */
type Normalize<$T> = {
  [K in keyof $T]: $T[K]
} & {}
