import * as Nodes from './nodes.js'
export {
  type GraphQLInputType as InputTypes,
  type GraphQLNamedType as NamedTypes,
  type GraphQLType as Types,
  isNamedType,
} from 'graphql'

export type Field = Nodes.OutputField | Nodes.InputField

// export const isField = (value: object): value is GraphQLField<any, any> | InputFieldLikeTypes => {
//   return isOutputField(value) || isInputFieldLike(value)
// }

export type InputFieldLikeTypes = Nodes.Argument | Nodes.InputField

export const isInputFieldLike = (value: object): value is InputFieldLikeTypes => {
  return `defaultValue` in value
}

export const isField = (value: object): value is Nodes.OutputField | InputFieldLikeTypes => {
  return Nodes.isOutputField(value) || isInputFieldLike(value)
}
