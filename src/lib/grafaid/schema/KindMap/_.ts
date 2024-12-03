import type { GraphQLInterfaceType } from 'graphql'
import {
  type GraphQLSchema,
  isEnumType,
  isInputObjectType,
  isInterfaceType,
  isObjectType,
  isScalarType,
  isUnionType,
} from 'graphql'
import { isScalarTypeCustom } from '../schema.js'

import { includesUnknown } from '../../../prelude.js'
import type { Grafaid } from '../../__.js'
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

export type KindName = keyof KindMap['list']

export const getKindMap = (schema: GraphQLSchema): KindMap => {
  const queryType = schema.getQueryType() ?? null
  const mutationType = schema.getMutationType() ?? null
  const subscriptionType = schema.getSubscriptionType() ?? null
  const rootTypeNames = [queryType?.name, mutationType?.name, subscriptionType?.name].filter(_ =>
    _ !== undefined
  ) as (Grafaid.Document.OperationTypeNode)[]
  const typeMap = schema.getTypeMap()
  const typeMapValues = Object.values(typeMap)
  const kindMap: KindMap = {
    index: {
      Root: {
        query: queryType,
        mutation: mutationType,
        subscription: subscriptionType,
      },
      OutputObject: {},
      InputObject: {},
      Interface: {},
      Union: {},
      Enum: {},
      ScalarCustom: {},
      ScalarStandard: {},
    },
    list: {
      Root: [queryType, mutationType, subscriptionType].filter(_ => _ !== null),
      OutputObject: [],
      InputObject: [],
      Interface: [],
      Union: [],
      Enum: [],
      ScalarCustom: [],
      ScalarStandard: [],
    },
  }
  for (const type of typeMapValues) {
    if (type.name.startsWith(`__`)) continue
    switch (true) {
      case isScalarType(type):
        if (isScalarTypeCustom(type)) {
          kindMap.list.ScalarCustom.push(type)
          kindMap.index.ScalarCustom[type.name] = type
        } else {
          kindMap.list.ScalarStandard.push(type)
          kindMap.index.ScalarStandard[type.name] = type
        }
        break
      case isEnumType(type):
        kindMap.list.Enum.push(type)
        kindMap.index.Enum[type.name] = type
        break
      case isInputObjectType(type):
        kindMap.list.InputObject.push(type)
        kindMap.index.InputObject[type.name] = type
        break
      case isInterfaceType(type):
        kindMap.list.Interface.push(type)
        kindMap.index.Interface[type.name] = type
        break
      case isObjectType(type):
        if (!includesUnknown(rootTypeNames, type.name)) {
          kindMap.list.OutputObject.push(type)
          kindMap.index.OutputObject[type.name] = type
        }
        break
      case isUnionType(type):
        kindMap.list.Union.push(type)
        kindMap.index.Union[type.name] = type
        break
      default:
        // skip
        break
    }
  }
  return kindMap
}

export const hasCustomScalars = (typeMapByKind: KindMap) => {
  return typeMapByKind.list.ScalarCustom.length > 0
}

export const getInterfaceImplementors = (typeMap: KindMap, interfaceTypeSearch: GraphQLInterfaceType) => {
  const outputObjectTypes = typeMap.list.OutputObject.filter(objectType =>
    objectType.getInterfaces().filter(interfaceType => interfaceType.name === interfaceTypeSearch.name).length > 0
  )
  const interfaceTypes = typeMap.list.Interface.filter(interfaceType =>
    interfaceType.getInterfaces().filter(interfaceType => interfaceType.name === interfaceTypeSearch.name).length > 0
  )
  return [...outputObjectTypes, ...interfaceTypes]
}
