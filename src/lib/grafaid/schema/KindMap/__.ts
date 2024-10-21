import type {
  GraphQLEnumType,
  GraphQLInputObjectType,
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLUnionType,
} from 'graphql'

export * as KindMap from './_.js'

export interface KindMap {
  Root: GraphQLObjectType[]
  OutputObject: GraphQLObjectType[]
  InputObject: GraphQLInputObjectType[]
  Interface: GraphQLInterfaceType[]
  Union: GraphQLUnionType[]
  Enum: GraphQLEnumType[]
  ScalarCustom: GraphQLScalarType[]
  ScalarStandard: GraphQLScalarType[]
}
