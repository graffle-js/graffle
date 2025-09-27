import { Grafaid } from '../../lib/grafaid/_namespace.js'
import { createModuleGenerator } from '../helpers/moduleGenerator.js'
import type {
  GraphQLEnumType,
  GraphQLInputObjectType,
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLUnionType,
} from 'graphql'

/**
 * Generate gql-tada compatible introspection types for the schema.
 * This enables type-safe template literals with the .gql method.
 */
export const ModuleGeneratorTada = createModuleGenerator(
  `tada`,
  ({ config, code }) => {
    const kindMap = config.schema.kindMap

    // Generate introspection_types object
    code`export type introspection_types = {`

    // Process all types
    const allTypes = [
      ...kindMap.list.Root,
      ...kindMap.list.OutputObject,
      ...kindMap.list.Interface,
      ...kindMap.list.Union,
      ...kindMap.list.Enum,
      ...kindMap.list.InputObject,
      ...kindMap.list.ScalarCustom,
      ...kindMap.list.ScalarStandard,
    ]

    for (const type of allTypes) {
      if (type.name.startsWith('__')) continue // Skip introspection types

      if (Grafaid.Schema.isScalarType(type)) {
        code`  '${type.name}': unknown;`
      } else if (Grafaid.Schema.isEnumType(type)) {
        const enumType = type as GraphQLEnumType
        const enumValues = enumType.getValues().map(v => `'${v.name}'`).join(' | ')
        code`  '${type.name}': { name: '${type.name}'; enumValues: ${enumValues || 'never'}; };`
      } else if (Grafaid.Schema.isObjectType(type) || Grafaid.Schema.isInterfaceType(type)) {
        const objType = type as GraphQLObjectType | GraphQLInterfaceType
        const fields = Object.values(objType.getFields())

        code`  '${type.name}': { kind: '${Grafaid.Schema.isInterfaceType(type) ? 'INTERFACE' : 'OBJECT'}'; name: '${type.name}'; fields: {`

        for (const field of fields) {
          const fieldType = renderTadaType(field.type)
          code`    '${field.name}': { name: '${field.name}'; type: ${fieldType} };`
        }

        code`  };`

        if (Grafaid.Schema.isInterfaceType(type)) {
          const interfaceType = type as GraphQLInterfaceType
          const possibleTypes = kindMap.list.OutputObject
            .filter(obj => obj.getInterfaces().includes(interfaceType))
            .map(obj => `'${obj.name}'`)
            .join(' | ')
          code`    possibleTypes: ${possibleTypes || 'never'};`
        }

        code`  };`
      } else if (Grafaid.Schema.isUnionType(type)) {
        const unionType = type as GraphQLUnionType
        const possibleTypes = unionType.getTypes().map(t => `'${t.name}'`).join(' | ')
        code`  '${type.name}': { kind: 'UNION'; name: '${type.name}'; fields: {}; possibleTypes: ${possibleTypes || 'never'}; };`
      } else if (Grafaid.Schema.isInputObjectType(type)) {
        const inputType = type as GraphQLInputObjectType
        const fields = Object.values(inputType.getFields())

        code`  '${type.name}': { kind: 'INPUT_OBJECT'; name: '${type.name}'; isOneOf: false; inputFields: [`

        for (const field of fields) {
          const fieldType = renderTadaType(field.type)
          const defaultValue = field.defaultValue !== undefined ? JSON.stringify(field.defaultValue) : 'null'
          code`    { name: '${field.name}'; type: ${fieldType}; defaultValue: ${defaultValue} },`
        }

        code`  ]; };`
      }
    }

    code`};`
    code``

    // Generate introspection type
    const queryType = kindMap.index.Root.query?.name || 'never'
    const mutationType = kindMap.index.Root.mutation?.name || 'never'
    const subscriptionType = kindMap.index.Root.subscription?.name || 'never'

    code`export type introspection = {`
    code`  name: never;`
    code`  query: '${queryType}';`
    code`  mutation: ${mutationType === 'never' ? 'never' : `'${mutationType}'`};`
    code`  subscription: ${subscriptionType === 'never' ? 'never' : `'${subscriptionType}'`};`
    code`  types: introspection_types;`
    code`};`
  }
)

/**
 * Helper to render GraphQL types to gql-tada format
 */
function renderTadaType(type: any): string {
  if (Grafaid.Schema.isNonNullType(type)) {
    return `{ kind: 'NON_NULL'; name: never; ofType: ${renderTadaType(type.ofType)} }`
  }
  if (Grafaid.Schema.isListType(type)) {
    return `{ kind: 'LIST'; name: never; ofType: ${renderTadaType(type.ofType)} }`
  }
  if (Grafaid.Schema.isScalarType(type)) {
    return `{ kind: 'SCALAR'; name: '${type.name}'; ofType: null; }`
  }
  if (Grafaid.Schema.isEnumType(type)) {
    return `{ kind: 'ENUM'; name: '${type.name}'; ofType: null; }`
  }
  if (Grafaid.Schema.isObjectType(type)) {
    return `{ kind: 'OBJECT'; name: '${type.name}'; ofType: null; }`
  }
  if (Grafaid.Schema.isInterfaceType(type)) {
    return `{ kind: 'INTERFACE'; name: '${type.name}'; ofType: null; }`
  }
  if (Grafaid.Schema.isUnionType(type)) {
    return `{ kind: 'UNION'; name: '${type.name}'; ofType: null; }`
  }
  if (Grafaid.Schema.isInputObjectType(type)) {
    return `{ kind: 'INPUT_OBJECT'; name: '${type.name}'; ofType: null; }`
  }
  return 'never'
}