import type { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { type Details, detailsFromObjectType } from './details.js'
import { type StandardRootTypeName, StandardRootTypeNameEnum } from './standard.js'

export interface Map {
  list: Details[]
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

export const createMap = (schema: GraphQLSchema): Map => {
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

  const list: Details[] = []

  const map: Map = {
    list,
    types,
    names: {
      fromStandard,
      fromActual,
    },
  }

  if (objectTypeQuery?.name) {
    fromActual[objectTypeQuery.name] = StandardRootTypeNameEnum.Query
    list.push(detailsFromObjectType(objectTypeQuery, StandardRootTypeNameEnum.Query))
  }
  if (objectTypeMutation?.name) {
    fromActual[objectTypeMutation.name] = StandardRootTypeNameEnum.Mutation
    list.push(detailsFromObjectType(objectTypeMutation, StandardRootTypeNameEnum.Mutation))
  }
  if (objectTypeSubscription?.name) {
    fromActual[objectTypeSubscription.name] = StandardRootTypeNameEnum.Subscription
    list.push(detailsFromObjectType(objectTypeSubscription, StandardRootTypeNameEnum.Subscription))
  }

  return map
}

export const isObjectRootType = (map: Map, type: GraphQLObjectType): boolean => {
  return map.list.some(_ => _.name.canonical === type.name)
}
