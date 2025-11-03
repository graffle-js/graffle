import type { GraphQLInputObjectType } from 'graphql'
import { type GraphQLField, type GraphQLScalarType, isNonNullType, isScalarType } from 'graphql'
import { standardScalarTypeNames } from './scalars.js'

export const isScalarTypeCustom = (node: GraphQLScalarType): boolean => {
  return !(node.name in standardScalarTypeNames)
}

export const isScalarTypeAndCustom = (node: unknown): node is GraphQLScalarType => {
  return isScalarType(node) && isScalarTypeCustom(node)
}

export const isAllInputObjectFieldsNullable = (node: GraphQLInputObjectType) => {
  return Object.values(node.getFields()).some(_ => !isNonNullType(_.type))
}
