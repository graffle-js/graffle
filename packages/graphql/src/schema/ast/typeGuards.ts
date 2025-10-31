import type { GraphQLInputObjectType } from 'graphql'
import { type GraphQLField, type GraphQLScalarType, isNonNullType, isScalarType } from 'graphql'
import { standardScalarTypeNames } from './scalars.js'
import type { InputFieldLikeTypes } from './__.js'

export const isScalarTypeCustom = (node: GraphQLScalarType): boolean => {
  return !(node.name in standardScalarTypeNames)
}

export const isScalarTypeAndCustom = (node: unknown): node is GraphQLScalarType => {
  return isScalarType(node) && isScalarTypeCustom(node)
}

export const isAllInputObjectFieldsNullable = (node: GraphQLInputObjectType) => {
  return Object.values(node.getFields()).some(_ => !isNonNullType(_.type))
}

export const isInputFieldLike = (value: object): value is InputFieldLikeTypes => {
  return `defaultValue` in value
}

export const isField = (value: object): value is GraphQLField<any, any> | InputFieldLikeTypes => {
  return isOutputField(value) || isInputFieldLike(value)
}

export const isOutputField = (value: object): value is GraphQLField<any, any> => {
  return `args` in value
}
