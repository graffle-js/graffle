import type { Grafaid } from '../../lib/grafaid/__.js'
import { isString } from '../../lib/prelude.js'
import { Schema } from '../Schema/__.js'
import type { InlineType } from './InlineType.js'

export * from './InlineType.js'

declare global {
  namespace GraffleGlobal {
    export interface SchemaDrivenDataMap {
      roots: {
        [Grafaid.Schema.RootTypeName.Mutation]?: SchemaDrivenDataMap.OutputObject
        [Grafaid.Schema.RootTypeName.Query]?: SchemaDrivenDataMap.OutputObject
        [Grafaid.Schema.RootTypeName.Subscription]?: SchemaDrivenDataMap.OutputObject
      }
      types: Record<string, NamedLike>
      directives: Record<string, SchemaDrivenDataMap.ArgumentsOrInputObjectFields>
    }

    namespace SchemaDrivenDataMap {
      export interface Enum {
        k: `enum`
        n: string
      }

      export interface OutputObject {
        /**
         * Fields of this output object.
         */
        f: {
          [key: string]: OutputField
        }
      }

      export interface OutputField {
        /**
         * The field's arguments, if any.
         *
         * Present when one of:
         * - operationVariables is enabled and field has arguments.
         * - customScalars is enabled and field has arguments that contain custom scalars.
         */
        a?: ArgumentsOrInputObjectFields
        /**
         * The field's output type.
         *
         * Present when/as one of:
         * - `CodecString` when customScalars enabled and this field's named type is a custom scalar.
         * - `OutputObject` when customScalars enabled and this field's type contains custom scalars.
         */
        nt?: OutputLike
      }

      export interface ArgumentsOrInputObjectFields {
        [key: string]: ArgumentOrInputField
      }

      export interface ArgumentOrInputField {
        /**
         * Inline types (nullable/non-nullable, list) of this argument or input field. Only present when operationVariables is enabled.
         */
        it?: InlineType
        /**
         * Named type of this argument or input field. Only present when customScalars is enabled.
         */
        nt?: InputLike
      }

      export interface InputObject {
        /**
         * Field names within this input object that are or transitively contain custom scalars.
         *
         * This is only present when operationVariables is enabled, because that feature requires
         * all input object fields to be mapped, thus requiring a meta field to identify the custom scalar ones.
         */
        fcs?: string[]
        /**
         * Name of the input object. Only present when "variables" is enabled.
         */
        n?: string
        /**
         * Fields of the input object.
         */
        f?: {
          [key: string]: ArgumentOrInputField
        }
      }
    }
  }
}

export type SchemaDrivenDataMap = GraffleGlobal.SchemaDrivenDataMap

export type OutputObject = GraffleGlobal.SchemaDrivenDataMap.OutputObject

export type OutputField = GraffleGlobal.SchemaDrivenDataMap.OutputField

export type InputObject = GraffleGlobal.SchemaDrivenDataMap.InputObject

export type Enum = GraffleGlobal.SchemaDrivenDataMap.Enum

export type ArgumentsOrInputObjectFields = GraffleGlobal.SchemaDrivenDataMap.ArgumentsOrInputObjectFields

export type Scalar = Schema.Scalar

export type CustomScalarName = string

export type ArgumentOrInputField = GraffleGlobal.SchemaDrivenDataMap.ArgumentOrInputField

export const propertyNames = {
  k: `k`,
  n: `n`,
  it: `it`,
  fcs: `fcs`,
  f: `f`,
  a: `a`,
  nt: `nt`,
} as const

export const isEnum = (
  node?: Node,
): node is Enum => {
  return node ? !isString(node) && `k` in node && node.k === `enum` : false
}

export const isCustomScalarName = (value: unknown): value is CustomScalarName => isString(value)

export const isScalar = Schema.Scalar.isScalar

export const isScalarLike = (value: unknown): value is ScalarLike =>
  Schema.Scalar.isScalar(value) || isCustomScalarName(value)

export const isOutputObject = (
  node?: Node,
): node is OutputObject => {
  return node ? !isString(node) && propertyNames.f in node : false
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
  node?: InputLike,
): node is InputObject => {
  return node ? !isString(node) && propertyNames.f in node : false
}

export const isOutputField = (
  node?: Node,
): node is GraffleGlobal.SchemaDrivenDataMap.OutputField => {
  return node ? !isString(node) && propertyNames.a in node : false
}

export type NamedLike = ScalarLike | OutputObject | Enum | InputObject

export type OutputLike = Scalar | OutputObject | Enum | CustomScalarName

export type ScalarLike = Scalar | CustomScalarName

export type InputLike = ScalarLike | InputObject | Enum

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
