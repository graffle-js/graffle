import { type GraphQLNamedType as NamedTypes } from 'graphql'
import * as Nodes from './nodes.js'

export {
  type GraphQLInputType as InputTypes,
  type GraphQLNamedType as NamedTypes,
  type GraphQLType as Types,
  isNamedType,
} from 'graphql'

export type Field = Nodes.OutputField | Nodes.InputField

export const isFieldLike = (value: object): value is Field => {
  return Nodes.isOutputField(value) || isInputFieldLike(value)
}

export type InputFieldLikeTypes = Nodes.Argument | Nodes.InputField

export const isInputFieldLike = (value: object): value is InputFieldLikeTypes => {
  return `defaultValue` in value
}

export const isField = (value: object): value is Nodes.OutputField | InputFieldLikeTypes => {
  return Nodes.isOutputField(value) || isInputFieldLike(value)
}

export type DeprecatableNodes = Nodes.EnumValue | Field

export const isDeprecatableNode = (node: object): node is DeprecatableNodes => {
  return `deprecationReason` in node
}

export type DescribableTypes =
  | NamedTypes
  | Field
