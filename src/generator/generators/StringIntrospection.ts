import { Grafaid } from '#lib/grafaid'
import type {
  GraphQLEnumType,
  GraphQLInputObjectType,
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLUnionType,
} from 'graphql'
import { createModuleGenerator } from '../helpers/moduleGenerator.js'
import { codeImportNamed } from '../helpers/pathHelpers.js'

/**
 * Generates introspection types for type-safe GraphQL string syntax support.
 *
 * This generator creates a TypeScript module that exports schema introspection types
 * in a format compatible with the docpar string parser (vendored from gql-tada).
 * This enables full type inference for GraphQL documents using standard GraphQL syntax
 * via the generated client's `.gql()` method.
 *
 * The introspection format matches the structure expected by the string parser, allowing
 * compile-time type inference without requiring the full GraphQL.js schema at runtime.
 *
 * Generated clients automatically provide a type-safe `gql` method that supports:
 * - Full IDE autocomplete for fields, arguments, and types
 * - Compile-time validation of GraphQL syntax
 * - Inferred result and variable types based on your schema
 *
 * @example Generated client usage
 * ```ts
 * import { Pokemon } from './graffle/_.js'
 *
 * const client = Pokemon.create({ schema: { url: '...' } })
 *
 * // Type-safe GraphQL with full IDE support
 * const data = await client.gql(`
 *   query GetUser($id: ID!) {
 *     user(id: $id) {
 *       name
 *       email
 *     }
 *   }
 * `).send({ id: '123' })
 * ```
 */
export const ModuleGeneratorStringIntrospection = createModuleGenerator(
  `stringIntrospection`,
  ({ config, code }) => {
    const kindMap = config.schema.kindMap

    // Import Name constant from Data module
    code(codeImportNamed(config, { names: 'Name', from: './data', type: true }))
    code``

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
          const fieldType = renderStringIntrospectionType(field.type)
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
          const fieldType = renderStringIntrospectionType(field.type)
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
    code`  name: Name;`
    code`  query: '${queryType}';`
    code`  mutation: ${mutationType === 'never' ? 'never' : `'${mutationType}'`};`
    code`  subscription: ${subscriptionType === 'never' ? 'never' : `'${subscriptionType}'`};`
    code`  types: introspection_types;`
    code`};`
  },
)

/**
 * Renders a GraphQL type reference into string introspection format.
 *
 * This helper function transforms GraphQL type system objects (from graphql-js)
 * into the nested type descriptor format expected by the docpar string parser.
 *
 * The format is compatible with the introspection structure used by the vendored
 * gql-tada parser in docpar/string/.
 *
 * @param type - A GraphQL type from graphql-js (e.g., GraphQLObjectType, GraphQLNonNull)
 * @returns A string representation of the type in string introspection format
 *
 * @example
 * ```ts
 * // GraphQLNonNull<GraphQLString> becomes:
 * // { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null } }
 * ```
 */
function renderStringIntrospectionType(type: any): string {
  if (Grafaid.Schema.isNonNullType(type)) {
    return `{ kind: 'NON_NULL'; name: never; ofType: ${renderStringIntrospectionType(type.ofType)} }`
  }
  if (Grafaid.Schema.isListType(type)) {
    return `{ kind: 'LIST'; name: never; ofType: ${renderStringIntrospectionType(type.ofType)} }`
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
