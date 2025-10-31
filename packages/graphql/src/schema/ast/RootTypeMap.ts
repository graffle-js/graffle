import type { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { createFromObjectType, type RootDetails } from './RootDetails.js'
import { type StandardRootTypeName, StandardRootTypeNameEnum } from './StandardRootTypeName.js'

export interface RootTypeMap {
  list: RootDetails[]
  types: {
    Query: null | GraphQLObjectType
    Mutation: null | GraphQLObjectType
    Subscription: null | GraphQLObjectType
  }
  names: {
    fromStandard: {
      Query: null | string
      Mutation: null | string
      Subscription: null | string
    }
    fromActual: Record<string, StandardRootTypeName>
  }
}

export const getRootTypeMap = (schema: GraphQLSchema): RootTypeMap => {
  const objectTypeQuery = schema.getQueryType() ?? null
  const objectTypeMutation = schema.getMutationType() ?? null
  const objectTypeSubscription = schema.getSubscriptionType() ?? null

  const types = {
    Query: objectTypeQuery,
    Mutation: objectTypeMutation,
    Subscription: objectTypeSubscription,
  }

  const fromStandard = {
    Query: objectTypeQuery?.name ?? null,
    Mutation: objectTypeMutation?.name ?? null,
    Subscription: objectTypeSubscription?.name ?? null,
  }

  const fromActual: Record<string, StandardRootTypeName> = {}

  const list: RootDetails[] = []

  const map: RootTypeMap = {
    list,
    types,
    names: {
      fromStandard,
      fromActual,
    },
  }

  if (objectTypeQuery?.name) {
    fromActual[objectTypeQuery.name] = StandardRootTypeNameEnum.Query
    list.push(createFromObjectType(objectTypeQuery, StandardRootTypeNameEnum.Query))
  }
  if (objectTypeMutation?.name) {
    fromActual[objectTypeMutation.name] = StandardRootTypeNameEnum.Mutation
    list.push(createFromObjectType(objectTypeMutation, StandardRootTypeNameEnum.Mutation))
  }
  if (objectTypeSubscription?.name) {
    fromActual[objectTypeSubscription.name] = StandardRootTypeNameEnum.Subscription
    list.push(createFromObjectType(objectTypeSubscription, StandardRootTypeNameEnum.Subscription))
  }

  return map
}

export const isObjectRootType = (map: RootTypeMap, type: GraphQLObjectType): boolean => {
  return map.list.some(_ => _.name.canonical === type.name)
}
