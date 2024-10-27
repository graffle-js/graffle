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
  index: {
    Root: {
      query: GraphQLObjectType | null
      mutation: GraphQLObjectType | null
      subscription: GraphQLObjectType | null
    }
    OutputObject: Record<string, GraphQLObjectType>
    InputObject: Record<string, GraphQLInputObjectType>
    Interface: Record<string, GraphQLInterfaceType>
    Union: Record<string, GraphQLUnionType>
    Enum: Record<string, GraphQLEnumType>
    ScalarCustom: Record<string, GraphQLScalarType>
    ScalarStandard: Record<string, GraphQLScalarType>
  }
  list: {
    Root: GraphQLObjectType[]
    OutputObject: GraphQLObjectType[]
    InputObject: GraphQLInputObjectType[]
    Interface: GraphQLInterfaceType[]
    Union: GraphQLUnionType[]
    Enum: GraphQLEnumType[]
    ScalarCustom: GraphQLScalarType[]
    ScalarStandard: GraphQLScalarType[]
  }
}
