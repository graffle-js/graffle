import type { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import { Codec } from '#src/types/Codec/_.js'
import type { Num, Str, Ts } from '@wollybeard/kit'
import type { InlineType } from '../../../schema/sddm/InlineType.js'
import type { Core } from '../core/_.js'

// ============================================================================
// Schema-less Mode Support
// ============================================================================

/**
 * Fallback field type when field is not found in schema (schema-less mode).
 * Returns unknown to allow parsing to continue without type information.
 *
 * Note: Defined as OutputField to satisfy type constraints properly.
 * InlineType is [0] where 0 = Nullable (InlineType.Nullable = 0)
 */
type UnknownField = GraphqlKit.Schema.Type.OutputField<string, null, readonly [0], UnknownScalar>

/**
 * Fallback scalar type for unknown fields.
 */
type UnknownScalar = GraphqlKit.Schema.Type.Scalar & {
  name: 'Unknown'
  decoded: unknown
}

/**
 * Universal object type for schema-less mode.
 * Accepts any field name and returns UnknownField.
 */
type UniversalObject = GraphqlKit.Schema.Type.OutputObject & {
  name: 'Universal'
  fields: {
    [fieldName: string]: UnknownField
  }
}

/**
 * Parse a GraphQL document string and infer its type in one pass.
 *
 * @param $Context - Parser context containing schema and configuration.
 *   - With Schema: Strict mode - unknown fields cause errors
 *   - Schema-less: Loose mode - unknown fields type as `unknown`
 */
export type ParseDocument<
  $Input extends string,
  $Context extends { schema: any },
> = ParseOperations<SkipIgnored<$Input>, $Context['schema'], {}>
/**
 * Parse multiple operations and accumulate them
 */
type ParseOperations<
  $Input extends string,
  $Schema extends GraphqlKit.Schema.Type | undefined,
  $Result extends Record<string, any>,
> = $Input extends '' ? Ts.Simplify.Top<$Result>
  : ParseSingleOperation<$Input, $Schema> extends infer $OpResult
    ? $OpResult extends { operation: infer $Op; rest: infer $Rest }
      ? ParseOperations<SkipIgnored<$Rest & string>, $Schema, $Result & $Op>
    : $OpResult // Error
  : never

/**
 * Parse a single operation and return { operation: {...}, rest: string }
 */
type ParseSingleOperation<
  $Input extends string,
  $Schema extends GraphqlKit.Schema.Type | undefined,
> = $Schema extends GraphqlKit.Schema.Type
  // Schema provided - use strict mode
  ? ParseSingleOperationWithSchema<$Input, $Schema>
  // Schema-less mode - use UniversalObject as root
  : ParseSingleOperationSchemaLess<$Input, $Schema>

/**
 * Parse a single operation with schema (strict mode)
 */
type ParseSingleOperationWithSchema<
  $Input extends string,
  $Schema extends GraphqlKit.Schema.Type,
> =
  // Shorthand: { ... } (anonymous query) - check this FIRST before keywords
  $Input extends `{${infer _}`
    ? $Schema['Root']['query'] extends GraphqlKit.Schema.Type.OutputObject
      ? ParseSelectionSetForOperation<'default', $Input, $Schema['Root']['query'], $Schema, {}>
    : Core.Errors.ErrorOperationNotAvailable<{ operation: 'query' }>
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
    : Core.Errors.ErrorInvalidOperation<{ input: $Input }>

/**
 * Parse a single operation in schema-less mode.
 * All operations use UniversalObject as root.
 */
type ParseSingleOperationSchemaLess<
  $Input extends string,
  $Schema extends GraphqlKit.Schema.Type | undefined,
> =
  // Shorthand: { ... } (anonymous query)
  $Input extends `{${infer _}` ? ParseSelectionSetForOperation<'default', $Input, UniversalObject, $Schema, {}>
    // query keyword
    : $Input extends `query${infer $Rest}`
      ? IsWordBoundary<$Rest> extends true
        ? ParseOperationAfterKeyword<SkipIgnored<$Rest>, UniversalObject, $Schema, 'query'>
      : never
    // mutation keyword
    : $Input extends `mutation${infer $Rest}`
      ? IsWordBoundary<$Rest> extends true
        ? ParseOperationAfterKeyword<SkipIgnored<$Rest>, UniversalObject, $Schema, 'mutation'>
      : never
    // subscription keyword
    : $Input extends `subscription${infer $Rest}`
      ? IsWordBoundary<$Rest> extends true
        ? ParseOperationAfterKeyword<SkipIgnored<$Rest>, UniversalObject, $Schema, 'subscription'>
      : never
    : Core.Errors.ErrorInvalidOperation<{
      input: $Input
    }>

/**
 * Check if next character is a word boundary (space, brace, paren, EOF)
 */
type IsWordBoundary<$Input extends string> = $Input extends ` ${string}` ? true
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
  $RootType extends GraphqlKit.Schema.Type.OutputObject | null,
  $Schema extends GraphqlKit.Schema.Type | undefined,
  $OperationType extends string,
> = $RootType extends GraphqlKit.Schema.Type.OutputObject
  // Try to extract operation name
  ? TakeName<$Input> extends { name: infer $Name; rest: infer $Rest }
    // Has name
    ? ParseAfterOperationName<$Name & string, SkipIgnored<$Rest & string>, $RootType, $Schema>
    // No name - check for variables or selection set
  : $Input extends `(${infer $VarsContent}`
    ? ParseVariables<$VarsContent, $Schema> extends { variables: infer $Variables; rest: infer $Rest }
      ? ParseSelectionSetForOperation<'default', SkipIgnored<$Rest & string>, $RootType, $Schema, $Variables>
    : ParseVariables<$VarsContent, $Schema> // Error
  : $Input extends `{${infer _}` ? ParseSelectionSetForOperation<'default', $Input, $RootType, $Schema, {}>
  : Core.Errors.ErrorExpectedSelectionSet<{ input: $Input }>
  : Core.Errors.ErrorOperationNotAvailable<{ operation: $OperationType }>

/**
 * Parse after operation name: optional variables, then selection set
 */
type ParseAfterOperationName<
  $Name extends string,
  $Input extends string,
  $RootType extends GraphqlKit.Schema.Type.OutputObject,
  $Schema extends GraphqlKit.Schema.Type | undefined,
> =
  // Check for variables
  $Input extends `(${infer $VarsContent}`
    ? ParseVariables<$VarsContent, $Schema> extends { variables: infer $Variables; rest: infer $Rest }
      ? ParseSelectionSetForOperation<$Name, SkipIgnored<$Rest & string>, $RootType, $Schema, $Variables>
    : ParseVariables<$VarsContent, $Schema> // Error
    // No variables - must be selection set
    : ParseSelectionSetForOperation<$Name, $Input, $RootType, $Schema, {}>

/**
 * Parse selection set and wrap in operation metadata
 */
type ParseSelectionSetForOperation<
  $Name extends string,
  $Input extends string,
  $RootType extends GraphqlKit.Schema.Type.OutputObject,
  $Schema extends GraphqlKit.Schema.Type | undefined,
  $Variables,
> = ParseSelectionSet<$Input, $RootType, $Schema> extends { result: infer $Result; rest: infer $Rest } ? {
    operation: WrapOperationResult<$Name, $Result, $Variables>
    rest: $Rest
  }
  : ParseSelectionSet<$Input, $RootType, $Schema> // Error

/**
 * Wrap a result in operation metadata with dynamic key
 */
type WrapOperationResult<$Name extends string, $Result, $Variables> = $Name extends 'default'
  ? { default: { name: 'default'; result: $Result; variables: $Variables } }
  : $Name extends string ? { [K in $Name]: { name: $Name; result: $Result; variables: $Variables } }
  : never

// ============================================================================
// Variable Parsing
// ============================================================================

/**
 * Parse variable definitions: ($varName: Type, $var2: Type!)
 * Returns: { variables: {...}, rest: string }
 */
type ParseVariables<$Input extends string, $Schema extends GraphqlKit.Schema.Type | undefined> = ParseVariablesRec<
  SkipIgnored<$Input>,
  $Schema,
  {}
>

/**
 * Parse variables recursively, accumulating them into a result object
 */
type ParseVariablesRec<
  $Input extends string,
  $Schema extends GraphqlKit.Schema.Type | undefined,
  $Result extends Record<string, any>,
> =
  // Check for closing paren
  $Input extends `)${infer $Rest}` ? { variables: Ts.Simplify.Top<$Result>; rest: $Rest }
    // Parse next variable
    : $Input extends `$${infer $VarNameRest}`
      ? TakeName<$VarNameRest> extends { name: infer $VarName; rest: infer $Rest }
        ? ParseVariableAfterName<$VarName & string, SkipIgnored<$Rest & string>, $Schema, $Result>
      : Core.Errors.ErrorUnexpectedToken<{ expected: 'VariableName'; hint: 'Expected variable name after $' }>
    : $Input extends ''
      ? Core.Errors.ErrorUnexpectedToken<{ expected: 'Paren'; hint: 'Unexpected end of input in variables' }>
    : Core.Errors.ErrorUnexpectedToken<{ expected: 'Expected $ or )'; actual: $Input }>

/**
 * Parse after variable name: expect colon, then type
 */
type ParseVariableAfterName<
  $VarName extends string,
  $Input extends string,
  $Schema extends GraphqlKit.Schema.Type | undefined,
  $Result extends Record<string, any>,
> = $Input extends `:${infer $Rest}` ? ParseVariableType<SkipIgnored<$Rest>, $VarName, $Schema, $Result>
  : Core.Errors.ErrorUnexpectedToken<{ expected: 'Colon'; hint: 'Expected : after variable name' }>

/**
 * Parse variable type: Type or Type!
 */
type ParseVariableType<
  $Input extends string,
  $VarName extends string,
  $Schema extends GraphqlKit.Schema.Type | undefined,
  $Result extends Record<string, any>,
> = TakeName<$Input> extends { name: infer $TypeName; rest: infer $Rest }
  // Check for ! (non-null)
  ? SkipIgnored<$Rest & string> extends `!${infer $RestAfterBang}`
    // Required variable: { varName: TSType }
    ? ParseVariablesRec<
      SkipIgnored<$RestAfterBang>,
      $Schema,
      $Result & Record<$VarName, MapGraphQLType<$TypeName & string, $Schema>>
    >
    // Optional variable: { varName?: TSType | null | undefined }
  : ParseVariablesRec<
    SkipIgnored<$Rest & string>,
    $Schema,
    $Result & { [K in $VarName]?: MapGraphQLType<$TypeName & string, $Schema> | null | undefined }
  >
  : Core.Errors.ErrorUnexpectedToken<{ expected: 'TypeName'; hint: 'Expected type name after :' }>

/**
 * Map GraphQL scalar types to TypeScript types.
 * Handles built-in scalars and looks up custom scalars from schema.
 */
type MapGraphQLType<$TypeName extends string, $Schema extends GraphqlKit.Schema.Type | undefined> =
  // Built-in GraphQL scalars
  $TypeName extends 'String' ? string
    : $TypeName extends 'Int' ? number
    : $TypeName extends 'Float' ? number
    : $TypeName extends 'Boolean' ? boolean
    : $TypeName extends 'ID' ? string
    // Look up custom scalars from schema
    : $Schema extends GraphqlKit.Schema.Type
      ? $TypeName extends keyof $Schema['scalars']
        ? $Schema['scalars'][$TypeName] extends GraphqlKit.Schema.Type.Scalar
          ? Codec.GetDecoded<$Schema['scalars'][$TypeName]['codec']>
        : unknown
      : unknown // Input types or unknown scalars
    : unknown // Schema-less mode - no custom scalar mapping

/**
 * Parse a selection set: { field1 field2 { nested } }
 * Returns: { result: {...}, rest: string }
 */
type ParseSelectionSet<
  $Input extends string,
  $ParentType extends GraphqlKit.Schema.Type.OutputObject | GraphqlKit.Schema.Type.Interface,
  $Schema extends GraphqlKit.Schema.Type | undefined,
> = $Input extends `{${infer $Rest}` ? ParseFieldsInSelectionSet<SkipIgnored<$Rest>, $ParentType, $Schema, {}, 1>
  : Core.Errors.ErrorUnexpectedToken<{
    expected: 'SelectionSet'
    hint: 'Expected opening brace for selection set'
    actual: $Input
  }>

/**
 * Parse fields within a selection set, tracking brace depth
 * Returns: { result: {...}, rest: string }
 */
type ParseFieldsInSelectionSet<
  $Input extends string,
  $ParentType extends GraphqlKit.Schema.Type.OutputObject | GraphqlKit.Schema.Type.Interface,
  $Schema extends GraphqlKit.Schema.Type | undefined,
  $Result extends Record<string, any>,
  $Depth extends Num.Literal,
> =
  // Check for closing brace
  $Input extends `}${infer $Rest}` ? $Depth extends 1 ? { result: Ts.Simplify.Top<$Result>; rest: $Rest } // End - simplify result
    : ParseFieldsInSelectionSet<SkipIgnored<$Rest>, $ParentType, $Schema, $Result, Num.MinusOne<$Depth>>
    // Parse next field
    : TakeName<$Input> extends { name: infer $FieldName; rest: infer $Rest } ? ParseFieldByName<
        $FieldName & string,
        SkipIgnored<$Rest & string>,
        $ParentType,
        $Schema,
        $Result,
        $Depth
      >
    : $Input extends ''
      ? Core.Errors.ErrorUnexpectedToken<{ expected: 'Brace'; hint: 'Unexpected end of input in selection set' }>
    : Core.Errors.ErrorUnexpectedToken<{ expected: 'FieldName'; hint: 'Expected field name'; actual: $Input }>

/**
 * Parse a field by its name.
 * Behavior depends on schema mode:
 * - Schema provided: Strict - field must exist or error
 * - Schema is undefined: Loose - unknown fields type as unknown
 */
type ParseFieldByName<
  $FieldName extends string,
  $Input extends string,
  $ParentType extends GraphqlKit.Schema.Type.OutputObject | GraphqlKit.Schema.Type.Interface,
  $Schema extends GraphqlKit.Schema.Type | undefined,
  $Result extends Record<string, any>,
  $Depth extends Num.Literal,
> = $FieldName extends keyof $ParentType['fields'] ? ParseFieldAfterName<
    $FieldName,
    $Input,
    $ParentType['fields'][$FieldName],
    $ParentType,
    $Schema,
    $Result,
    $Depth
  >
  // Field not in parent type - check mode
  : $Schema extends undefined
  // Schema-less mode: field not found → use UnknownField
    ? ParseFieldAfterName<$FieldName, $Input, UnknownField, $ParentType, $Schema, $Result, $Depth>
  // Strict mode: field not found → error
  : Core.Errors.ErrorFieldNotFound<{
    path: 'todo'
    // message: `Field '${$FieldName}' does not exist on type '${$ParentType['name']}'`
    fieldName: $FieldName
    parentName: $ParentType['name']
    availableFields: keyof $ParentType['fields'] & string
  }>

/**
 * Parse after field name: check for arguments, nested selection, or continue
 */
type ParseFieldAfterName<
  $FieldName extends string,
  $Input extends string,
  $Field extends GraphqlKit.Schema.Type.OutputField,
  $ParentType extends GraphqlKit.Schema.Type.OutputObject | GraphqlKit.Schema.Type.Interface,
  $Schema extends GraphqlKit.Schema.Type | undefined,
  $Result extends Record<string, any>,
  $Depth extends Num.Literal,
> =
  // Check for arguments
  $Input extends `(${infer _}`
    ? SkipUntilCloseParen<$Input, 0> extends { rest: infer $Rest } ? ParseFieldAfterArguments<
        $FieldName,
        SkipIgnored<$Rest & string>,
        $Field,
        $ParentType,
        $Schema,
        $Result,
        $Depth
      >
    : Core.Errors.ErrorUnexpectedToken<
      { expected: 'Paren'; hint: `Unmatched parenthesis in field '${$FieldName}' arguments` }
    >
    // Check for nested selection
    : $Input extends `{${infer _}`
      ? ParseFieldWithNestedSelection<$FieldName, $Input, $Field, $ParentType, $Schema, $Result, $Depth>
    // Scalar field - add to result and continue
    : ParseFieldsInSelectionSet<
      $Input,
      $ParentType,
      $Schema,
      & $Result
      & Record<$FieldName, InlineType.Infer<$Field['inlineType'], ResolveNamedType<$Field['namedType'], $Schema>>>,
      $Depth
    >

/**
 * Parse after field arguments
 */
type ParseFieldAfterArguments<
  $FieldName extends string,
  $Input extends string,
  $Field extends GraphqlKit.Schema.Type.OutputField,
  $ParentType extends GraphqlKit.Schema.Type.OutputObject | GraphqlKit.Schema.Type.Interface,
  $Schema extends GraphqlKit.Schema.Type | undefined,
  $Result extends Record<string, any>,
  $Depth extends Num.Literal,
> =
  // Check for nested selection
  $Input extends `{${infer _}`
    ? ParseFieldWithNestedSelection<$FieldName, $Input, $Field, $ParentType, $Schema, $Result, $Depth>
    // Scalar field - add to result and continue
    : ParseFieldsInSelectionSet<
      $Input,
      $ParentType,
      $Schema,
      & $Result
      & Record<$FieldName, InlineType.Infer<$Field['inlineType'], ResolveNamedType<$Field['namedType'], $Schema>>>,
      $Depth
    >

/**
 * Parse field with nested selection
 */
type ParseFieldWithNestedSelection<
  $FieldName extends string,
  $Input extends string,
  $Field extends GraphqlKit.Schema.Type.OutputField,
  $ParentType extends GraphqlKit.Schema.Type.OutputObject | GraphqlKit.Schema.Type.Interface,
  $Schema extends GraphqlKit.Schema.Type | undefined,
  $Result extends Record<string, any>,
  $Depth extends Num.Literal,
> = $Field['namedType'] extends GraphqlKit.Schema.Type.OutputObject | GraphqlKit.Schema.Type.Interface
  ? ParseSelectionSet<$Input, $Field['namedType'], $Schema> extends { result: infer $NestedResult; rest: infer $Rest }
    ? ParseFieldsInSelectionSet<
      SkipIgnored<$Rest & string>,
      $ParentType,
      $Schema,
      $Result & Record<$FieldName, InlineType.Infer<$Field['inlineType'], $NestedResult>>,
      $Depth
    >
  : ParseSelectionSet<$Input, $Field['namedType'], $Schema> // Error
  // Schema-less mode: allow nested selection with UniversalObject
  : $Schema extends undefined
    ? ParseSelectionSet<$Input, UniversalObject, $Schema> extends { result: infer $NestedResult; rest: infer $Rest }
      ? ParseFieldsInSelectionSet<
        SkipIgnored<$Rest & string>,
        $ParentType,
        $Schema,
        $Result & Record<$FieldName, InlineType.Infer<$Field['inlineType'], $NestedResult>>,
        $Depth
      >
    : ParseSelectionSet<$Input, UniversalObject, $Schema> // Error
  : Core.Errors.ErrorFieldTypeInvalid<{
    fieldName: $FieldName
    hint: `Field '${$FieldName}' is not an object type and cannot have nested selection`
  }>

/**
 * Resolve a named type to its TypeScript type.
 *
 * Uses {@link GraphqlKit.Schema.Type.ResolveLeafType} for leaf types (Scalar/Enum),
 * and passes through non-leaf types (OutputObject/Interface/Union) for
 * the caller to handle with selection set traversal.
 *
 * Handles UnknownScalar for schema-less mode.
 */
type ResolveNamedType<$Type, $Schema extends GraphqlKit.Schema.Type | undefined> = $Type extends UnknownScalar ? unknown
  : [GraphqlKit.Schema.Type.ResolveLeafType<$Schema, $Type>] extends [never]
    ? $Type extends GraphqlKit.Schema.Type.OutputObject ? $Type // Objects need nested selection
    : $Type extends { kind: 'Interface' } ? $Type
    : $Type extends { kind: 'Union' } ? $Type
    : unknown
  : GraphqlKit.Schema.Type.ResolveLeafType<$Schema, $Type>

// ============================================================================
// Character-by-character utilities
// ============================================================================

/**
 * Skip ignored characters (whitespace, commas, comments)
 */
type SkipIgnored<$Input extends string> = $Input extends ` ${infer $Rest}` ? SkipIgnored<$Rest>
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
type TakeName<$Input extends string> = $Input extends `${infer $First}${infer $Rest}`
  ? $First extends Str.Char.Letter | '_' ? TakeNameRest<$First, $Rest>
  : void
  : void

type TakeNameRest<$Acc extends string, $Input extends string> = $Input extends `${infer $Char}${infer $Rest}`
  ? $Char extends Str.Char.Letter | Str.Char.Digit | '_' ? TakeNameRest<`${$Acc}${$Char}`, $Rest>
  : { name: $Acc; rest: $Input }
  : { name: $Acc; rest: $Input }

/**
 * Skip until closing parenthesis, tracking depth
 */
type SkipUntilCloseParen<$Input extends string, $Depth extends Num.Literal> = $Input extends `(${infer $Rest}`
  ? $Depth extends 0 ? SkipUntilCloseParen<$Rest, 1>
  : SkipUntilCloseParen<$Rest, Num.PlusOne<$Depth>>
  : $Input extends `)${infer $Rest}` ? $Depth extends 1 ? { rest: $Rest }
    : SkipUntilCloseParen<$Rest, Num.MinusOne<$Depth>>
  : $Input extends `${infer _}${infer $Rest}` ? SkipUntilCloseParen<$Rest, $Depth>
  : void
