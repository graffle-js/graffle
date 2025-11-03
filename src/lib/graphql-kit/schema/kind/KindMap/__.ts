import { Nodes } from '../../runtime/__.js'
import { createMap, isObjectRootType } from '../../runtime/root/map.js'
import { isScalarTypeCustom } from '../../scalars/predicates.js'
import type { KindMap } from './_.js'

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

export const getKindMap = (schema: Nodes.Schema): KindMap => {
  const rootTypeMap = createMap(schema)
  const typeMap = schema.getTypeMap()
  const typeMapValues = Object.values(typeMap)

  const kindMap: KindMap = {
    root: rootTypeMap,
    index: {
      Root: {
        query: rootTypeMap.types.Query,
        mutation: rootTypeMap.types.Mutation,
        subscription: rootTypeMap.types.Subscription,
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
      Root: [rootTypeMap.types.Query, rootTypeMap.types.Mutation, rootTypeMap.types.Subscription].filter(_ =>
        _ !== null
      ),
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
    if (type.name.startsWith(hiddenTypePrefix)) continue
    switch (true) {
      case Nodes.isScalarType(type):
        if (isScalarTypeCustom(type)) {
          kindMap.list.ScalarCustom.push(type)
          kindMap.index.ScalarCustom[type.name] = type
        } else {
          kindMap.list.ScalarStandard.push(type)
          kindMap.index.ScalarStandard[type.name] = type
        }
        break
      case Nodes.isEnumType(type):
        kindMap.list.Enum.push(type)
        kindMap.index.Enum[type.name] = type
        break
      case Nodes.isInputObjectType(type):
        kindMap.list.InputObject.push(type)
        kindMap.index.InputObject[type.name] = type
        break
      case Nodes.isInterfaceType(type):
        kindMap.list.Interface.push(type)
        kindMap.index.Interface[type.name] = type
        break
      case Nodes.isObjectType(type):
        if (!isObjectRootType(rootTypeMap, type)) {
          kindMap.list.OutputObject.push(type)
          kindMap.index.OutputObject[type.name] = type
        }
        break
      case Nodes.isUnionType(type):
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

export const getInterfaceImplementors = (typeMap: KindMap, interfaceTypeSearch: Nodes.InterfaceType) => {
  const outputObjectTypes = typeMap.list.OutputObject.filter(objectType =>
    objectType.getInterfaces().filter(interfaceType => interfaceType.name === interfaceTypeSearch.name).length > 0
  )
  const interfaceTypes = typeMap.list.Interface.filter(interfaceType =>
    interfaceType.getInterfaces().filter(interfaceType => interfaceType.name === interfaceTypeSearch.name).length > 0
  )
  return [...outputObjectTypes, ...interfaceTypes]
}

// todo put in some central place
const hiddenTypePrefix = `__`
