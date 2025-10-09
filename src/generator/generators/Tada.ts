import { Grafaid } from '#lib/grafaid'
import type {
  GraphQLEnumType,
  GraphQLInputObjectType,
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLUnionType,
} from 'graphql'
import { createModuleGenerator } from '../helpers/moduleGenerator.js'

/**
 * Generates gql-tada compatible introspection types for the GraphQL schema.
 *
 * This generator creates a TypeScript module that exports introspection types in the format
 * expected by gql-tada, enabling compile-time type checking for GraphQL template literals.
 *
 * {@link https://gql-tada.0no.co gql-tada documentation}
 *
 * @example
 * ```ts
 * import { initGraphQLTada } from 'gql.tada'
 * import type { introspection } from './graffle/modules/tada.js'
 *
 * const graphql = initGraphQLTada<{ introspection }>()
 *
 * const query = graphql(`
 *   query GetUser($id: ID!) {
 *     user(id: $id) {
 *       name
 *       email
 *     }
 *   }
 * `)
 * ```
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

        code`  '${type.name}': { kind: '${
          Grafaid.Schema.isInterfaceType(type) ? 'INTERFACE' : 'OBJECT'
        }'; name: '${type.name}'; fields: {`

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
        code`  '${type.name}': { kind: 'UNION'; name: '${type.name}'; fields: {}; possibleTypes: ${
          possibleTypes || 'never'
        }; };`
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
  },
)

/**
 * Renders a GraphQL type reference into gql-tada's introspection format.
 *
 * This helper function transforms GraphQL type system objects (from graphql-js)
 * into the nested type descriptor format that gql-tada expects for introspection.
 *
 * @param type - A GraphQL type from graphql-js (e.g., GraphQLObjectType, GraphQLNonNull)
 * @returns A string representation of the type in gql-tada's introspection format
 *
 * @example
 * ```ts
 * // GraphQLNonNull<GraphQLString> becomes:
 * // { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null } }
 * ```
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
