// TODO: Invert this dependency - GraphqlKit.Schema.Type.Scalar should implement Core.SDDM.Scalar
import { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import { Str } from '@wollybeard/kit'
import type { SchemaDrivenDataMap } from './_.js'
import type { InlineType } from './InlineType.js'

export * from './InlineType.js'

// Extension Hooks
// ---------------

declare global {
  namespace GraffleGlobal {
    // Extension hooks for SDDM node types - augment these to add custom properties

    namespace SchemaMapNodeExtensions {
      export interface OutputObject {}
      export interface OutputField {}
      export interface InputObject {}
      export interface Enum {}
      export interface ArgumentOrInputField {}
    }
  }
}

// Node Type Definitions
// ---------------------

export interface Enum {
  readonly _tag: 'enum'
  readonly name: string
  readonly extensions?: GraffleGlobal.SchemaMapNodeExtensions.Enum
}

export interface OutputObject {
  readonly _tag: 'outputObject'
  /**
   * Fields of this output object.
   */
  readonly fields: {
    readonly [key: string]: OutputField
  }
  readonly extensions?: GraffleGlobal.SchemaMapNodeExtensions.OutputObject
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
   *     namedType: 'ID',
   *     inlineType: [1],  // [1] means required
   *   }
   * }
   * ```
   */
  readonly arguments?: ArgumentsOrInputObjectFields
  /**
   * Reference to the type containing descendant fields with arguments.
   *
   * Present when the field's return type has any fields (at any depth) that have arguments.
   * This enables traversal through fields that don't have direct arguments but lead to fields that do.
   *
   * The value is a reference to another type in the ArgumentsMap that contains the nested fields.
   *
   * @example
   * For a field like `posts: [Post!]!` where Post has fields with arguments:
   * ```typescript
   * posts: {
   *   argumentsDescendant: Post  // Reference to Post type in ArgumentsMap
   * }
   * ```
   *
   * @example
   * A field can have both direct args and descendant args:
   * ```typescript
   * userPosts: {
   *   arguments: { limit: { namedType: 'Int', ... } },  // Direct argument
   *   argumentsDescendant: Post  // Post type has fields with arguments
   * }
   * ```
   */
  readonly argumentsDescendant?: any
  /**
   * The field's output type for custom scalar resolution.
   *
   * Present when/as one of:
   * - `CustomScalarName` when customScalars enabled and this field's named type is a custom scalar.
   * - `OutputObject` when customScalars enabled and this field's type contains custom scalars.
   */
  readonly namedType?: OutputNodes
  readonly extensions?: GraffleGlobal.SchemaMapNodeExtensions.OutputField
}

export interface InputObject {
  readonly _tag: 'inputObject'
  /**
   * Field names within this input object that are or transitively contain custom scalars.
   *
   * This is only present when operationVariables is enabled, because that feature requires
   * all input object fields to be mapped, thus requiring a meta field to identify the custom scalar ones.
   */
  readonly fieldsContainingCustomScalars?: readonly string[]
  /**
   * Name of the input object. Only present when "variables" is enabled.
   */
  readonly name?: string
  /**
   * Fields of the input object.
   */
  readonly fields?: ArgumentsOrInputObjectFields
  readonly extensions?: GraffleGlobal.SchemaMapNodeExtensions.InputObject
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
 *   namedType: 'Int',        // Named type
 *   inlineType: [1],          // Inline type: [1] = required
 * }
 * ```
 */
export interface ArgumentOrInputField {
  readonly _tag: 'argumentOrInputField'
  /**
   * Inline types (nullable/non-nullable, list) of this argument or input field. Only present when operationVariables is enabled.
   */
  readonly inlineType?: InlineType
  /**
   * Named type of this argument or input field. Only present when customScalars is enabled.
   */
  readonly namedType?: InputNodes
  readonly extensions?: GraffleGlobal.SchemaMapNodeExtensions.ArgumentOrInputField
}

export type Scalar = GraphqlKit.Schema.Type.Scalar

export type CustomScalarName = string

// Schema-Driven Data Map Container Types
// ----------------------------------------

export interface Operations {
  [GraphqlKit.Schema.OperationType.MUTATION]?: OutputObject
  [GraphqlKit.Schema.OperationType.QUERY]?: OutputObject
  [GraphqlKit.Schema.OperationType.SUBSCRIPTION]?: OutputObject
}

export interface OperationsWithQuery extends Operations {
  [GraphqlKit.Schema.OperationType.QUERY]: OutputObject
}

export interface OperationsWithMutation extends Operations {
  [GraphqlKit.Schema.OperationType.MUTATION]: OutputObject
}

export interface OperationsWithSubscription extends Operations {
  [GraphqlKit.Schema.OperationType.SUBSCRIPTION]: OutputObject
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

export const isScalar = GraphqlKit.Schema.Type.Scalars.isScalar

export const isScalarLike = (value: unknown): value is ScalarLikeNodes =>
  GraphqlKit.Schema.Type.Scalars.isScalar(value) || isCustomScalarName(value)

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
    return inlineTypeToSyntax(sddmArgLike.inlineType[1], namedType) + isRequiredIndicator
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
const inlineTypeToSyntax = (sddmInlineType: undefined | InlineType, typeName: string): string => {
  if (!sddmInlineType) return typeName
  const isRequiredIndicator = sddmInlineType[0] === 1 ? `!` : ``
  return `[${inlineTypeToSyntax(sddmInlineType[1], typeName)}${isRequiredIndicator}]`
}
