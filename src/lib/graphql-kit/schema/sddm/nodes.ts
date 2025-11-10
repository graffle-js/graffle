import { Str } from '@wollybeard/kit'
import type { OperationType } from '../operation-type/_.js'
import { Type } from '../type/_.js'
import type { SchemaDrivenDataMap } from './_.js'

// Node Type Definitions
// ---------------------

export interface Enum {
  readonly _tag: 'enum'
  readonly name: string
  /**
   * Pre-computed TypeScript union type for this enum's values.
   *
   * Only present when operationVariables is enabled.
   *
   * This is the complete TypeScript union type (e.g., 'FIRE' | 'WATER' | 'GRASS')
   * representing all possible values of this enum. Pre-computing this at generation time
   * enables O(1) type lookup and eliminates redundant inline unions throughout the codebase.
   *
   * @example
   * ```typescript
   * $type: 'FIRE' | 'WATER' | 'GRASS' | 'ELECTRIC'
   * ```
   */
  readonly $type?: any
  readonly extensions?: LIBRARY_GRAPHQL_KIT.SchemaMapNodeExtensions.Enum
}

export interface OutputObject {
  readonly _tag: 'outputObject'
  /**
   * Fields of this output object.
   */
  readonly fields: {
    readonly [key: string]: OutputField
  }
  readonly extensions?: LIBRARY_GRAPHQL_KIT.SchemaMapNodeExtensions.OutputObject
}

export interface OutputField {
  readonly _tag: 'outputField'
  /**
   * The field's direct arguments, if any.
   *
   * Present when one of:
   * - operationVariables is enabled and field has arguments.
   * - customScalars is enabled and field has arguments that contain custom scalars.
   *
   * @example
   * For a field like `user(id: ID!): User`, the 'arguments' property would contain:
   * ```typescript
   * arguments: {
   *   id: {
   *     namedType: ID,  // Scalar object reference
   *     inlineType: [1],  // [1] means required
   *   }
   * }
   * ```
   */
  readonly arguments?: ArgumentsOrInputObjectFields
  /**
   * Pre-computed TypeScript type map for this field's arguments.
   *
   * Only present when operationVariables is enabled and field has arguments.
   *
   * Maps argument names to their complete TypeScript types (with inline type modifiers applied).
   * Pre-computing this at generation time enables O(1) type lookup for variable inference.
   *
   * @example
   * ```typescript
   * $argumentsType: {
   *   id?: string | null | undefined      // Optional ID argument
   *   limit: number                        // Required Int! argument
   *   filter?: InputFilter | null          // Optional input object
   * }
   * ```
   */
  readonly $argumentsType?: any
  /**
   * Reference to the type containing descendant fields with arguments.
   *
   * Present when the field's return type has any fields (at any depth) that have arguments.
   * This enables type-level traversal through fields that don't have direct arguments but lead to fields that do.
   *
   * The value is a reference to an OutputObject type that contains the nested fields with arguments.
   *
   * @example
   * For a field like `posts: [Post!]!` where Post has fields with arguments:
   * ```typescript
   * posts: {
   *   argumentsDescendant: Post  // Reference to Post OutputObject
   * }
   * ```
   *
   * @example
   * A field can have both direct args and descendant args:
   * ```typescript
   * userPosts: {
   *   arguments: { limit: { namedType: Int, ... } },  // Direct argument
   *   argumentsDescendant: Post  // Post type has fields with arguments
   * }
   * ```
   */
  readonly argumentsDescendant?: OutputObject
  /**
   * The field's output type reference.
   *
   * A reference to the actual type node (Scalar, OutputObject, Enum, or CustomScalarName).
   * This serves both runtime and type-level purposes:
   * - Runtime: Direct access to codec objects for encoding/decoding
   * - Type-level: Type navigation via typeof or .name property
   *
   * Present when/as one of:
   * - `Scalar` when field returns a standard scalar (String, Int, etc.)
   * - `CustomScalarName` (string) when customScalars enabled and field returns a custom scalar
   * - `OutputObject` when field returns an object type
   * - `Enum` when field returns an enum type
   *
   * @example
   * ```typescript
   * birthday: {
   *   namedType: Date,  // Custom scalar object with codec
   * }
   * trainer: {
   *   namedType: Trainer,  // OutputObject reference
   * }
   * ```
   */
  readonly namedType?: OutputNodes
  readonly extensions?: LIBRARY_GRAPHQL_KIT.SchemaMapNodeExtensions.OutputField
}

export interface InputObject {
  readonly _tag: 'inputObject'
  /**
   * Name of the input object.
   *
   * Used for type-level navigation and runtime identification.
   */
  readonly name: string
  /**
   * Field names within this input object that are or transitively contain custom scalars.
   *
   * This is only present when operationVariables is enabled, because that feature requires
   * all input object fields to be mapped, thus requiring a meta field to identify the custom scalar ones.
   */
  readonly fieldsContainingCustomScalars?: readonly string[]
  /**
   * Fields of the input object.
   */
  readonly fields?: ArgumentsOrInputObjectFields
  /**
   * Pre-computed TypeScript input type for this input object.
   *
   * Only present when operationVariables is enabled.
   *
   * This is the complete TypeScript type representing this input object's structure,
   * with all field types already computed. Pre-computing this at generation time enables
   * O(1) type lookup for variable inference without needing a separate TypeInputsIndex module.
   *
   * @example
   * ```typescript
   * $type: { date?: Date, id?: string, count: number }
   * ```
   */
  readonly $type?: any
  readonly extensions?: LIBRARY_GRAPHQL_KIT.SchemaMapNodeExtensions.InputObject
}

export interface ArgumentsOrInputObjectFields {
  readonly [key: string]: ArgumentOrInputField
}

/**
 * Represents an argument on a field or a field within an input object.
 * Used in the 'arguments' property of OutputField and the 'fields' property of InputObject.
 *
 * @example
 * For an argument like `limit: Int!`:
 * ```typescript
 * {
 *   namedType: Int,        // Scalar object reference
 *   inlineType: [1],       // Inline type: [1] = required
 *   $type: number          // Pre-computed TypeScript type
 * }
 * ```
 */
export interface ArgumentOrInputField {
  readonly _tag: 'argumentOrInputField'
  /**
   * Inline types (nullable/non-nullable, list) of this argument or input field.
   *
   * Only present when operationVariables is enabled.
   *
   * The format is `[nullabilityFlag]` or `[nullabilityFlag, nestedInlineType]` for lists.
   * - `0` = nullable
   * - `1` = non-null
   *
   * @example
   * ```typescript
   * inlineType: [1]           // Required (non-null)
   * inlineType: [0]           // Optional (nullable)
   * inlineType: [1, [0]]      // Non-null list of nullable items: [T]!
   * inlineType: [0, [1]]      // Nullable list of non-null items: [T!]
   * ```
   */
  readonly inlineType?: InlineType
  /**
   * Named type reference for this argument or input field.
   *
   * A reference to the actual type node (Scalar, InputObject, Enum, or CustomScalarName).
   * This serves both runtime and type-level purposes:
   * - Runtime: Direct access to codec objects for encoding/decoding
   * - Type-level: Type navigation via typeof or .name property
   *
   * Present when/as one of:
   * - `Scalar` when argument is a standard scalar (String, Int, etc.)
   * - `CustomScalarName` (string) when customScalars enabled and argument is a custom scalar
   * - `InputObject` when argument is an input object type
   * - `Enum` when argument is an enum type
   *
   * @example
   * ```typescript
   * filter: {
   *   namedType: PokemonFilter,  // InputObject reference
   * }
   * date: {
   *   namedType: Date,  // Custom scalar with codec
   * }
   * type: {
   *   namedType: PokemonType,  // Enum reference
   * }
   * ```
   */
  readonly namedType?: InputNodes
  /**
   * Pre-computed TypeScript input type for this argument or input field.
   *
   * Only present when operationVariables is enabled.
   *
   * This is the final TypeScript type after applying all inline type modifiers (nullability, lists).
   * Pre-computing this at generation time enables O(1) type lookup for variable inference.
   *
   * @example
   * ```typescript
   * $type: string | null | undefined           // Optional String
   * $type: number                              // Required Int!
   * $type: Date[]                              // Required [Date!]!
   * $type: (string | null)[] | null            // Optional [String]
   * ```
   */
  readonly $type?: any
  readonly extensions?: LIBRARY_GRAPHQL_KIT.SchemaMapNodeExtensions.ArgumentOrInputField
}

export type Scalar = Type.Scalar

export type CustomScalarName = string

// Schema-Driven Data Map Container Types
// ----------------------------------------

export interface Operations {
  [OperationType.MUTATION]?: OutputObject
  [OperationType.QUERY]?: OutputObject
  [OperationType.SUBSCRIPTION]?: OutputObject
}

export interface OperationsWithQuery extends Operations {
  [OperationType.QUERY]: OutputObject
}

export interface OperationsWithMutation extends Operations {
  [OperationType.MUTATION]: OutputObject
}

export interface OperationsWithSubscription extends Operations {
  [OperationType.SUBSCRIPTION]: OutputObject
}

export interface WithQuery extends SchemaDrivenDataMap {
  operations: OperationsWithQuery
}

export interface WithSubscription extends SchemaDrivenDataMap {
  operations: OperationsWithSubscription
}

export interface WithMutation extends SchemaDrivenDataMap {
  operations: OperationsWithMutation
}

// Type Aliases and Unions
// ------------------------

export type OutputNodes = Scalar | OutputObject | Enum | CustomScalarName

export type InputNodes = ScalarLikeNodes | InputObject | Enum

export type ScalarLikeNodes = Scalar | CustomScalarName

export type NamedNodes = ScalarLikeNodes | OutputObject | Enum | InputObject

export type Node =
  | OutputObject
  | OutputField
  | InputObject
  | ArgumentsOrInputObjectFields
  | ArgumentOrInputField
  | InlineType
  // | SchemaDrivenDataMap
  | Scalar
  | Enum
  | CustomScalarName

// Type Guards
// ------------

export const isEnum = (
  node?: Node,
): node is Enum => {
  return node ? !Str.Type.is(node) && '_tag' in node && node._tag === 'enum' : false
}

export const isCustomScalarName = (value: unknown): value is CustomScalarName => Str.Type.is(value)

export const isScalar = Type.Scalars.isScalar

export const isScalarLike = (value: unknown): value is ScalarLikeNodes =>
  Type.Scalars.isScalar(value) || isCustomScalarName(value)

export const isOutputObject = (
  node?: Node,
): node is OutputObject => {
  return node ? !Str.Type.is(node) && '_tag' in node && node._tag === 'outputObject' : false
}

export const isInputObject = (
  node?: InputNodes,
): node is InputObject => {
  return node ? !Str.Type.is(node) && '_tag' in node && node._tag === 'inputObject' : false
}

export const isOutputField = (
  node?: Node,
): node is OutputField => {
  return node ? !Str.Type.is(node) && '_tag' in node && node._tag === 'outputField' : false
}

// Constants
// ---------

export const nullabilityFlags = {
  'nullable': 0,
  'nonNull': 1,
} as const

// Utility Functions
// -----------------

/**
 * Convert argument metadata to a complete GraphQL type syntax string.
 * Includes inline type modifiers (list brackets and non-null markers).
 *
 * @example
 * argumentTypeToSyntax(stringArg) // => "String"
 * argumentTypeToSyntax(requiredStringArg) // => "String!"
 * argumentTypeToSyntax(listArg) // => "[String!]"
 */
export const argumentTypeToSyntax = (
  sddmArgLike: ArgumentOrInputField,
): string => {
  if (sddmArgLike.inlineType) {
    const isRequiredIndicator = sddmArgLike.inlineType[0] === 1 ? `!` : ``
    const namedType = argumentNamedTypeToSyntax(sddmArgLike)
    return InlineType.toString(sddmArgLike.inlineType[1], namedType) + isRequiredIndicator
  }
  return argumentNamedTypeToSyntax(sddmArgLike)
}

/**
 * Extract the named type (base type name) from argument metadata.
 *
 * @example
 * argumentNamedTypeToSyntax(stringArg) // => "String"
 * argumentNamedTypeToSyntax(customScalarArg) // => "DateTime"
 */
const argumentNamedTypeToSyntax = (sddmNode: ArgumentOrInputField): string => {
  if (isScalar(sddmNode.namedType)) {
    return sddmNode.namedType.name
  }
  if (isCustomScalarName(sddmNode.namedType)) {
    return sddmNode.namedType
  }

  if (sddmNode.namedType?.name) {
    return sddmNode.namedType.name
  }

  throw new Error(`Unknown sddm node: ${String(sddmNode)}`)
}

/**
 * Inline types for a field-like (directive argument, field argument, input/output field) type.
 *
 * Recursive tuple. Each nesting represents a list. First tuple member represents nullability of the list.
 *
 * The outer most tuple DOES NOT represent a list, but the nullability of the named type itself. E.g. `[0]` would indicate
 * that a scalar field is nullable while `[1]` would indicate that it is non-nullable.
 */
export type InlineType = readonly [InlineType.Nullable | InlineType.NonNull, (InlineType | undefined)?]

export namespace InlineType {
  /**
   * Convert SDDM inline type metadata into GraphQL type syntax string.
   *
   * In GraphQL, "inline types" refer to the wrapping type modifiers applied to named types:
   * - `String` - named type
   * - `String!` - non-null modifier
   * - `[String]` - list modifier
   * - `[String!]!` - nested modifiers
   *
   * @example
   * inlineTypeToSyntax([1, undefined], 'String') // => '[String!]'
   * inlineTypeToSyntax([0, [1, undefined]], 'Int') // => '[[Int!]]'
   */
  export const toString = (sddmInlineType: undefined | InlineType, typeName: string): string => {
    if (!sddmInlineType) return typeName
    const isRequiredIndicator = sddmInlineType[0] === 1 ? `!` : ``
    return `[${toString(sddmInlineType[1], typeName)}${isRequiredIndicator}]`
  }

  export type Nullable = 0

  export type NonNull = 1

  export type NullabilityFlagTypes = {
    0: null
    1: never
  }

  /**
   * Infer the TypeScript type from an InlineType encoding and a named type.
   *
   * This is the **canonical implementation** for decoding SDDM inline type encodings
   * into TypeScript types. Both the string parser and object parser use this utility
   * to ensure consistent type resolution.
   *
   * @param $InlineType - The inline type encoding (e.g., `[1, [1]]` for `[T!]!`)
   * @param $NamedType - The already-resolved base type (e.g., `number`, `Date`, `{ id: string }`)
   *
   * @example
   * ```ts
   * type T1 = Infer<[0], number>              // number | null (nullable scalar)
   * type T2 = Infer<[1], number>              // number (non-null scalar)
   * type T3 = Infer<[1, [1]], number>         // number[] (non-null list of non-null items)
   * type T4 = Infer<[0, [1]], number>         // number[] | null (nullable list of non-null items)
   * type T5 = Infer<[0, [0]], number>         // (number | null)[] | null (nullable list of nullable items)
   * type T6 = Infer<[1, [1, [1]]], number>    // number[][] (non-null list of non-null lists)
   * ```
   *
   * @remarks
   * **How it works:**
   * 1. First element (`$InlineType[0]`) determines nullability of the result:
   *    - `0` (Nullable) → union with `null`
   *    - `1` (NonNull) → union with `never` (no effect)
   * 2. Second element (`$InlineType[1]`) determines if this is a list:
   *    - If it's another `InlineType` tuple → wrap in `Array<...>` and recurse
   *    - Otherwise → use `$NamedType` directly (terminal case)
   *
   * **Why this is canonical:**
   * - Uses direct tuple indexing (`$InlineType[0]`, `$InlineType[1]`) for clarity
   * - Type-level check (`extends InlineType`) correctly detects nested tuples
   * - Properly adds `Array<...>` wrapping for each list level
   * - Previously, the string parser had duplicate implementations that failed to
   *   add array wrapping correctly (fixed in #1440)
   */
  // dprint-ignore
  export type Infer<$InlineType extends InlineType, $NamedType> =
    | NullabilityFlagTypes[$InlineType[0]]
    | (
      $InlineType[1] extends InlineType
        ? Array<Infer<$InlineType[1], $NamedType>>
        : $NamedType
    )
}
