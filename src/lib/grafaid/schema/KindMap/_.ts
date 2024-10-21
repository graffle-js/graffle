import {
  GraphQLEnumType,
  GraphQLInputObjectType,
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLScalarType,
  type GraphQLSchema,
  GraphQLUnionType,
} from 'graphql'
import { isScalarTypeAndCustom } from '../schema.js'

import type { KindMap } from './__.js'

export const Name = {
  Root: `Root`,
  ScalarCustom: `ScalarCustom`,
  ScalarStandard: `ScalarStandard`,
  Enum: `Enum`,
  InputObject: `InputObject`,
  OutputObject: `OutputObject`,
  Interface: `Interface`,
  Union: `Union`,
} satisfies Record<KindName, KindName>

export type KindName = keyof KindMap

export const getKindMap = (schema: GraphQLSchema): KindMap => {
  const typeMap = schema.getTypeMap()
  const typeMapValues = Object.values(typeMap)
  const kindMap: KindMap = {
    Root: [],
    OutputObject: [],
    InputObject: [],
    Interface: [],
    Union: [],
    Enum: [],
    ScalarCustom: [],
    ScalarStandard: [],
  }
  for (const type of typeMapValues) {
    if (type.name.startsWith(`__`)) continue
    switch (true) {
      case type instanceof GraphQLScalarType:
        if (isScalarTypeAndCustom(type)) {
          kindMap.ScalarCustom.push(type)
        } else {
          kindMap.ScalarStandard.push(type)
        }
        break
      case type instanceof GraphQLEnumType:
        kindMap.Enum.push(type)
        break
      case type instanceof GraphQLInputObjectType:
        kindMap.InputObject.push(type)
        break
      case type instanceof GraphQLInterfaceType:
        kindMap.Interface.push(type)
        break
      case type instanceof GraphQLObjectType:
        if (type.name === `Query` || type.name === `Mutation` || type.name === `Subscription`) {
          kindMap.Root.push(type)
        } else {
          kindMap.OutputObject.push(type)
        }
        break
      case type instanceof GraphQLUnionType:
        kindMap.Union.push(type)
        break
      default:
        // skip
        break
    }
  }
  return kindMap
}

export const hasMutation = (typeMapByKind: KindMap) => typeMapByKind.Root.some((_) => _.name === `Mutation`)

export const hasSubscription = (typeMapByKind: KindMap) => typeMapByKind.Root.some((_) => _.name === `Subscription`)

export const hasQuery = (typeMapByKind: KindMap) => typeMapByKind.Root.some((_) => _.name === `Query`)

export const hasCustomScalars = (typeMapByKind: KindMap) => {
  return typeMapByKind.ScalarCustom.length > 0
}

export const getInterfaceImplementors = (typeMap: KindMap, interfaceTypeSearch: GraphQLInterfaceType) => {
  return typeMap.OutputObject.filter(objectType =>
    objectType.getInterfaces().filter(interfaceType => interfaceType.name === interfaceTypeSearch.name).length > 0
  )
}
