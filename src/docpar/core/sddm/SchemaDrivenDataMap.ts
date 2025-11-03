import type { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import { Str } from '@wollybeard/kit'
// TODO: Invert this dependency - Schema.Scalar should implement Core.SDDM.Scalar
import { Schema } from '#src/types/Schema/_.js'
import type { InlineType } from './InlineType.js'

export * from './InlineType.js'

declare global {
  namespace GraffleGlobal {
    // Types are defined in this namespace so that they can be globally augmented.

    export interface SchemaDrivenDataMapOperations {
      [GraphqlKit.Document.Ast.OperationType.MUTATION]?: SchemaDrivenDataMap.OutputObject
      [GraphqlKit.Document.Ast.OperationType.QUERY]?: SchemaDrivenDataMap.OutputObject
      [GraphqlKit.Document.Ast.OperationType.SUBSCRIPTION]?: SchemaDrivenDataMap.OutputObject
    }

    export interface SchemaDrivenDataMapOperationsWithQuery extends SchemaDrivenDataMapOperations {
      [GraphqlKit.Document.Ast.OperationType.QUERY]: SchemaDrivenDataMap.OutputObject
    }

    export interface SchemaDrivenDataMapOperationsWithMutation extends SchemaDrivenDataMapOperations {
      [GraphqlKit.Document.Ast.OperationType.MUTATION]: SchemaDrivenDataMap.OutputObject
    }

    export interface SchemaDrivenDataMapOperationsWithSubscription extends SchemaDrivenDataMapOperations {
      [GraphqlKit.Document.Ast.OperationType.SUBSCRIPTION]: SchemaDrivenDataMap.OutputObject
    }

    export interface SchemaDrivenDataMap {
      operations: SchemaDrivenDataMapOperations
      types: Record<string, NamedNodes>
      directives: Record<string, SchemaDrivenDataMap.ArgumentsOrInputObjectFields>
    }

    export interface SchemaDrivenDataMapWithQuery extends SchemaDrivenDataMap {
      operations: SchemaDrivenDataMapOperationsWithQuery
    }

    export interface SchemaDrivenDataMapWithSubscription extends SchemaDrivenDataMap {
      operations: SchemaDrivenDataMapOperationsWithSubscription
    }

    export interface SchemaDrivenDataMapWithMutation extends SchemaDrivenDataMap {
      operations: SchemaDrivenDataMapOperationsWithMutation
    }

    namespace SchemaDrivenDataMap {
      export interface Enum {
        readonly k: `enum`
        readonly n: string
      }

      export interface OutputObject {
        /**
         * Fields of this output object.
         */
        readonly f: {
          readonly [key: string]: OutputField
        }
      }

      export interface OutputField {
        /**
         * The field's direct arguments, if any.
         *
         * Present when one of:
         * - operationVariables is enabled and field has arguments.
         * - customScalars is enabled and field has arguments that contain custom scalars.
         *
         * @example
         * For a field like `user(id: ID!): User`, the 'a' property would contain:
         * ```typescript
         * a: {
         *   id: {
         *     nt: 'ID',
         *     it: [1],  // [1] means required
         *     $t: string
         *   }
         * }
         * ```
         */
        readonly a?: ArgumentsOrInputObjectFields
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
         *   ad: Post  // Reference to Post type in ArgumentsMap
         * }
         * ```
         *
         * @example
         * A field can have both 'a' (direct args) and 'ad' (descendant args):
         * ```typescript
         * userPosts: {
         *   a: { limit: { nt: 'Int', ... } },  // Direct argument
         *   ad: Post  // Post type has fields with arguments
         * }
         * ```
         */
        readonly ad?: any
        /**
         * The field's output type for custom scalar resolution.
         *
         * Present when/as one of:
         * - `CodecString` when customScalars enabled and this field's named type is a custom scalar.
         * - `OutputObject` when customScalars enabled and this field's type contains custom scalars.
         */
        readonly nt?: OutputNodes
      }

      export interface InputObject {
        /**
         * Field names within this input object that are or transitively contain custom scalars.
         *
         * This is only present when operationVariables is enabled, because that feature requires
         * all input object fields to be mapped, thus requiring a meta field to identify the custom scalar ones.
         */
        readonly fcs?: readonly string[]
        /**
         * Name of the input object. Only present when "variables" is enabled.
         */
        readonly n?: string
        /**
         * Fields of the input object.
         */
        readonly f?: ArgumentsOrInputObjectFields
      }

      export interface ArgumentsOrInputObjectFields {
        readonly [key: string]: ArgumentOrInputField
      }

      /**
       * Represents an argument on a field or a field within an input object.
       * Used in the 'a' property of OutputField and the 'f' property of InputObject.
       *
       * @example
       * For an argument like `limit: Int!`:
       * ```typescript
       * {
       *   nt: 'Int',        // Named type
       *   it: [1],          // Inline type: [1] = required
       *   $t: number        // Resolved TypeScript type
       * }
       * ```
       */
      export interface ArgumentOrInputField {
        /**
         * Inline types (nullable/non-nullable, list) of this argument or input field. Only present when operationVariables is enabled.
         */
        readonly it?: InlineType
        /**
         * Named type of this argument or input field. Only present when customScalars is enabled.
         */
        readonly nt?: InputNodes
      }
    }
  }
}

export type SchemaDrivenDataMapOperations = GraffleGlobal.SchemaDrivenDataMapOperations
export type SchemaDrivenDataMapOperationsWithQuery = GraffleGlobal.SchemaDrivenDataMapOperationsWithQuery
export type SchemaDrivenDataMapOperationsWithMutation = GraffleGlobal.SchemaDrivenDataMapOperationsWithMutation
export type SchemaDrivenDataMapOperationsWithSubscription = GraffleGlobal.SchemaDrivenDataMapOperationsWithSubscription

export type SchemaDrivenDataMap = GraffleGlobal.SchemaDrivenDataMap
export type SchemaDrivenDataMapWithQuery = GraffleGlobal.SchemaDrivenDataMapWithQuery
export type SchemaDrivenDataMapWithMutation = GraffleGlobal.SchemaDrivenDataMapWithMutation
export type SchemaDrivenDataMapWithSubscription = GraffleGlobal.SchemaDrivenDataMapWithSubscription

export type OutputObject = GraffleGlobal.SchemaDrivenDataMap.OutputObject

export type OutputField = GraffleGlobal.SchemaDrivenDataMap.OutputField

export type InputObject = GraffleGlobal.SchemaDrivenDataMap.InputObject

export type Enum = GraffleGlobal.SchemaDrivenDataMap.Enum

export type ArgumentsOrInputObjectFields = GraffleGlobal.SchemaDrivenDataMap.ArgumentsOrInputObjectFields

export type Scalar = Schema.Scalar

export type CustomScalarName = string

export type ArgumentOrInputField = GraffleGlobal.SchemaDrivenDataMap.ArgumentOrInputField

// Create a namespace so types can be accessed as SchemaDrivenDataMap.OutputField
export namespace SchemaDrivenDataMap {
  export type SchemaDrivenDataMap = GraffleGlobal.SchemaDrivenDataMap
  export type SchemaDrivenDataMapWithQuery = GraffleGlobal.SchemaDrivenDataMapWithQuery
  export type SchemaDrivenDataMapWithMutation = GraffleGlobal.SchemaDrivenDataMapWithMutation
  export type SchemaDrivenDataMapWithSubscription = GraffleGlobal.SchemaDrivenDataMapWithSubscription
  export type OutputObject = GraffleGlobal.SchemaDrivenDataMap.OutputObject
  export type OutputField = GraffleGlobal.SchemaDrivenDataMap.OutputField
  export type InputObject = GraffleGlobal.SchemaDrivenDataMap.InputObject
  export type Enum = GraffleGlobal.SchemaDrivenDataMap.Enum
  export type ArgumentsOrInputObjectFields = GraffleGlobal.SchemaDrivenDataMap.ArgumentsOrInputObjectFields
  export type ArgumentOrInputField = GraffleGlobal.SchemaDrivenDataMap.ArgumentOrInputField
  export type OutputNodes = Scalar | OutputObject | Enum | CustomScalarName
  export type InputNodes = ScalarLikeNodes | InputObject | Enum
  export type ScalarLikeNodes = Scalar | CustomScalarName
  export type Node =
    | OutputObject
    | InputObject
    | ArgumentsOrInputObjectFields
    | ArgumentOrInputField
    | InlineType
    | SchemaDrivenDataMap
    | Scalar
    | Enum
    | CustomScalarName
}

/**
 * Property name keys used throughout the Schema-Driven Data Map (SDDM).
 * These short keys optimize bundle size while maintaining type safety.
 *
 * @remarks
 * The SDDM is a runtime data structure that describes the GraphQL schema
 * for features like custom scalars and operation variables.
 */
export const propertyNames = {
  /** Kind - Type discriminator (e.g., 'enum' for enum types) */
  k: `k`,
  /** Name - The GraphQL type name */
  n: `n`,
  /** Inline Type - Type nullability encoding: [0] = nullable, [1] = non-null, nested arrays for lists */
  it: `it`,
  /** Field Custom Scalars - Fields containing custom scalars (for input objects) */
  fcs: `fcs`,
  /** Fields - Object/interface fields or input object fields */
  f: `f`,
  /** Arguments - Direct arguments on a field */
  a: `a`,
  /** Arguments Descendant - Reference to type containing fields with arguments */
  ad: `ad`,
  /** Named Type - The GraphQL named type (for custom scalar resolution) */
  nt: `nt`,
  /** Resolved Type - The fully resolved TypeScript type including nullability and list wrappers (type-level only, hence $ prefix) */
  $t: `$t`,
} as const

export const isEnum = (
  node?: Node,
): node is Enum => {
  return node ? !Str.Type.is(node) && `k` in node && node.k === `enum` : false
}

export const isCustomScalarName = (value: unknown): value is CustomScalarName => Str.Type.is(value)

export const isScalar = Schema.Scalars.isScalar

export const isScalarLike = (value: unknown): value is ScalarLikeNodes =>
  Schema.Scalars.isScalar(value) || isCustomScalarName(value)

export const isOutputObject = (
  node?: Node,
): node is OutputObject => {
  return node ? !Str.Type.is(node) && propertyNames.f in node : false
}

export const nullabilityFlags = {
  'nullable': 0,
  'nonNull': 1,
} as const

// todo not the best check, type has to limit to input like nodes since the check cannot tell input and output apart
// so it would be unsafe to rely on it if output objects could also be passed in.
// fixing this 1) means branding the data which means more bytes in the sddm
// or 2) means using a different key hint like `if` for "input field".
export const isInputObject = (
  node?: InputNodes,
): node is InputObject => {
  return node ? !Str.Type.is(node) && propertyNames.f in node : false
}

export const isOutputField = (
  node?: Node,
): node is GraffleGlobal.SchemaDrivenDataMap.OutputField => {
  return node ? !Str.Type.is(node) && propertyNames.a in node : false
}

export type NamedNodes = ScalarLikeNodes | OutputObject | Enum | InputObject

export type OutputNodes = Scalar | OutputObject | Enum | CustomScalarName

export type ScalarLikeNodes = Scalar | CustomScalarName

export type InputNodes = ScalarLikeNodes | InputObject | Enum

export type Node =
  | OutputObject
  | InputObject
  | ArgumentsOrInputObjectFields
  | ArgumentOrInputField
  | InlineType
  | SchemaDrivenDataMap
  | Scalar
  | Enum
  | CustomScalarName

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
  if (sddmArgLike.it) {
    const isRequiredIndicator = sddmArgLike.it[0] === 1 ? `!` : ``
    const namedType = argumentNamedTypeToSyntax(sddmArgLike)
    return inlineTypeToSyntax(sddmArgLike.it[1], namedType) + isRequiredIndicator
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
  if (isScalar(sddmNode.nt)) {
    return sddmNode.nt.name
  }
  if (isCustomScalarName(sddmNode.nt)) {
    return sddmNode.nt
  }

  if (sddmNode.nt?.n) {
    return sddmNode.nt.n
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
