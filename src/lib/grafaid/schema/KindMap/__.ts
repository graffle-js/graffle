import type {
  GraphQLEnumType,
  GraphQLInputObjectType,
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLUnionType,
} from 'graphql'
import type { RootTypeMap } from '../RootTypeMap.js'

export * as KindMap from './_.js'

export interface KindMap {
  root: RootTypeMap
  index: {
    /**
     * @deprecated use .root
     */
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
    /**
     * @deprecated use .root
     */
    Root: (GraphQLObjectType)[]
    OutputObject: GraphQLObjectType[]
    InputObject: GraphQLInputObjectType[]
    Interface: GraphQLInterfaceType[]
    Union: GraphQLUnionType[]
    Enum: GraphQLEnumType[]
    ScalarCustom: GraphQLScalarType[]
    ScalarStandard: GraphQLScalarType[]
  }
}
