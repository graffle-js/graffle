import { Code } from '../../lib/Code.js'
import { Grafaid } from '../../lib/grafaid/$.js'
import { entries } from '../../lib/prelude.js'
import { Tex } from '../../lib/tex/$.js'
import { propertyNames } from '../../types/SchemaDrivenDataMap/SchemaDrivenDataMap.js'
import { $ } from '../helpers/identifiers.js'
import { createModuleGenerator } from '../helpers/moduleGenerator.js'
import { createCodeGenerator } from '../helpers/moduleGeneratorRunner.js'
import { codeImportAll, importUtilities } from '../helpers/pathHelpers.js'
import { renderInlineType, renderName } from '../helpers/render.js'

/**
 * Generator for the ArgumentsMap module.
 *
 * @remarks
 * The ArgumentsMap is a TypeScript type structure that mirrors the GraphQL schema's
 * argument structure. It's used for:
 * - Type-safe variable extraction from selection sets
 * - Compile-time validation of GraphQL arguments
 * - Enabling proper type traversal through fields with nested arguments
 *
 * The generated structure uses the 'ad' (arguments descendant) property to enable
 * traversal through fields that don't have direct arguments but lead to fields that do.
 *
 * @example Generated output structure:
 * ```typescript
 * export interface Query {
 *   readonly f: {
 *     readonly userById: {
 *       readonly a: { ... }    // Direct arguments
 *     }
 *     readonly posts: {
 *       readonly ad: Post      // Reference to Post type (has fields with args)
 *     }
 *   }
 * }
 * ```
 */
export const ModuleGeneratorArgumentsMap = createModuleGenerator(
  `ArgumentsMap`,
  import.meta.url,
  ({ config, code }) => {
    // Use the new ArgsIndex from grafaid
    const argsIndex = Grafaid.Schema.ArgsIndex.getArgsIndex(config.schema.instance)

    // Get root type names for the final index
    const queryType = config.schema.instance.getQueryType()
    const mutationType = config.schema.instance.getMutationType()
    const subscriptionType = config.schema.instance.getSubscriptionType()

    code(importUtilities(config))
    code(codeImportAll(config, { as: 'TypeInputsIndex', from: './type-inputs-index', type: true }))
    code``

    // Group types by kind for organized output
    const objectTypes: Grafaid.Schema.ArgsIndex.TypeInfo[] = []
    const interfaceTypes: Grafaid.Schema.ArgsIndex.TypeInfo[] = []
    const rootTypes: Record<string, Grafaid.Schema.ArgsIndex.TypeInfo> = {}

    for (const [typeName, typeInfo] of entries(argsIndex)) {
      const graphqlType = typeInfo.reference

      // Categorize by type
      if (graphqlType === queryType) {
        rootTypes['query'] = typeInfo
      } else if (graphqlType === mutationType) {
        rootTypes['mutation'] = typeInfo
      } else if (graphqlType === subscriptionType) {
        rootTypes['subscription'] = typeInfo
      } else if (Grafaid.Schema.isInterfaceType(graphqlType)) {
        interfaceTypes.push(typeInfo)
      } else {
        objectTypes.push(typeInfo)
      }
    }

    // Generate Input Objects section
    // Input objects are collected from all args in the index
    const inputObjectTypes = collectInputObjectTypes(argsIndex, config.schema.instance)

    if (inputObjectTypes.length > 0) {
      code(Tex.title1(`InputObject`))
      code``
      for (const inputType of inputObjectTypes) {
        code(renderInputObjectType({ config, type: inputType }))
        code``
      }
    } else {
      code(Tex.title1(`InputObject`))
      code``
      code`// No InputObject types in your schema.`
      code``
    }

    // Generate Output Objects section
    if (objectTypes.length > 0) {
      code(Tex.title1(`OutputObject`))
      code``
      for (const objectType of objectTypes) {
        code(renderTypeWithArgs({ config, typeInfo: objectType }))
        code``
      }
    } else {
      code(Tex.title1(`OutputObject`))
      code``
      code`// No OutputObject types with arguments in your schema.`
      code``
    }

    // Generate Interfaces section
    if (interfaceTypes.length > 0) {
      code(Tex.title1(`Interface`))
      code``
      for (const interfaceType of interfaceTypes) {
        code(renderTypeWithArgs({ config, typeInfo: interfaceType }))
        code``
      }
    } else {
      code(Tex.title1(`Interface`))
      code``
      code`// No Interface types with arguments in your schema.`
      code``
    }

    // Union section - always empty
    code(Tex.title1(`Union`))
    code``
    code`// No Union types with arguments in your schema.`
    code``

    // Generate Root types section
    const rootTypesArray = Object.values(rootTypes)
    if (rootTypesArray.length > 0) {
      code(Tex.title1(`Root`))
      code``
      for (const rootType of rootTypesArray) {
        // Root types use the same rendering as regular types
        code(renderTypeWithArgs({ config, typeInfo: rootType }))
        code``
      }
    }

    // For root types without fields with arguments, generate empty interfaces
    // These are needed for the operations index to be consistent
    if (queryType && !rootTypes['query']) {
      code(Tex.title1(`Root`))
      code``
      code`export interface Query extends ${$.$$Utilities}.SchemaDrivenDataMap.OutputObject {`
      code`  readonly ${propertyNames.f}: {}`
      code`}`
      code``
    }
    if (mutationType && !rootTypes['mutation']) {
      if (!queryType || rootTypes['query']) {
        code(Tex.title1(`Root`))
        code``
      }
      code`export interface Mutation extends ${$.$$Utilities}.SchemaDrivenDataMap.OutputObject {`
      code`  readonly ${propertyNames.f}: {}`
      code`}`
      code``
    }
    if (subscriptionType && !rootTypes['subscription']) {
      if ((!queryType || rootTypes['query']) && (!mutationType || rootTypes['mutation'])) {
        code(Tex.title1(`Root`))
        code``
      }
      code`export interface Subscription extends ${$.$$Utilities}.SchemaDrivenDataMap.OutputObject {`
      code`  readonly ${propertyNames.f}: {}`
      code`}`
      code``
    }

    // Generate the index following SDDM structure
    code(Tex.title1(`Index`))
    code``

    // Build operations object entries - include ALL root types from schema
    const operationsEntries: Array<[string, string]> = []
    if (queryType) operationsEntries.push(['query', 'Query'])
    if (mutationType) operationsEntries.push(['mutation', 'Mutation'])
    if (subscriptionType) operationsEntries.push(['subscription', 'Subscription'])

    // Build types object entries (all types from argsIndex + all root types + input objects)
    const typesEntries: Array<[string, string]> = [
      ...Object.keys(argsIndex).map(typeName => [typeName, typeName] as [string, string]),
      ...inputObjectTypes.map(inputType => [inputType.name, inputType.name] as [string, string]),
    ]

    // Add root types that aren't already in argsIndex
    if (queryType && !rootTypes['query']) {
      typesEntries.push(['Query', 'Query'])
    }
    if (mutationType && !rootTypes['mutation']) {
      typesEntries.push(['Mutation', 'Mutation'])
    }
    if (subscriptionType && !rootTypes['subscription']) {
      typesEntries.push(['Subscription', 'Subscription'])
    }

    code`export interface ArgumentsMap`
    code(Code.termObject({
      operations: Code.directiveTermObject({
        $fields: operationsEntries.length > 0
          ? Object.fromEntries(operationsEntries)
          : {},
      }),
      directives: Code.directiveTermObject({}),
      types: Code.directiveTermObject({
        $fields: typesEntries.length > 0
          ? Object.fromEntries(typesEntries)
          : {},
      }),
    }))
  },
)

//
// Helpers
//

/**
 * Collect all InputObject types referenced in arguments.
 *
 * @remarks
 * Traverses the ArgsIndex to find all InputObject types used as argument types.
 * Handles circular references in InputObject types (e.g., recursive inputs).
 *
 * @param argsIndex - The arguments index containing all types with arguments
 * @param schema - The GraphQL schema for type lookups
 * @returns Sorted array of InputObject types found in arguments
 */
const collectInputObjectTypes = (
  argsIndex: Grafaid.Schema.ArgsIndex.ArgsIndex,
  schema: Grafaid.Schema.Schema,
) => {
  const inputTypes = new Set<string>()
  const result = []

  // Traverse all fields with args to find InputObject types
  for (const typeInfo of Object.values(argsIndex)) {
    for (const fieldInfo of Object.values(typeInfo.fields)) {
      if (fieldInfo.args) {
        for (const arg of fieldInfo.args) {
          collectInputTypesFromType(arg.type, inputTypes, new Set())
        }
      }
    }
  }

  // Get the actual InputObject types from schema
  const typeMap = schema.getTypeMap()
  for (const typeName of inputTypes) {
    const type = typeMap[typeName]
    if (type && Grafaid.Schema.isInputObjectType(type)) {
      result.push(type)
    }
  }

  return result.sort((a, b) => a.name.localeCompare(b.name))
}

/**
 * Recursively collect InputObject type names from a GraphQL type
 */
const collectInputTypesFromType = (
  type: any,
  inputTypes: Set<string>,
  visited: Set<string> = new Set(),
) => {
  const namedType = Grafaid.Schema.getNamedType(type)
  if (Grafaid.Schema.isInputObjectType(namedType)) {
    // Prevent infinite recursion for circular references
    if (visited.has(namedType.name)) {
      return
    }
    visited.add(namedType.name)
    inputTypes.add(namedType.name)
    // Recursively check fields of InputObject
    const fields = namedType.getFields()
    for (const field of Object.values(fields)) {
      collectInputTypesFromType(field.type, inputTypes, visited)
    }
  }
}

/**
 * Render a type that has fields with arguments.
 *
 * @remarks
 * Generates TypeScript interface for types that have fields with arguments.
 * Each field in the output will have:
 * - `a` property if the field has direct arguments
 * - `ad` property if the field's return type has fields with arguments
 * - Both properties if applicable
 *
 * @example Generated structure:
 * ```typescript
 * export interface Post {
 *   readonly f: {
 *     readonly comments: {
 *       readonly a: { ... }     // Direct arguments on comments field
 *       readonly ad: Comment    // Comment type has fields with args
 *     }
 *   }
 * }
 * ```
 */
const renderTypeWithArgs = createCodeGenerator<
  { typeInfo: Grafaid.Schema.ArgsIndex.TypeInfo }
>(
  ({ config, code, typeInfo }) => {
    const typeName = typeInfo.reference.name
    const allFields = typeInfo.reference.getFields()

    code`export interface ${typeName} extends ${$.$$Utilities}.SchemaDrivenDataMap.OutputObject {`
    code`  readonly ${propertyNames.f}: {`

    // Include all fields in the index (they all have arguments somewhere)
    for (const [fieldName, fieldInfo] of entries(typeInfo.fields)) {
      code`    readonly ${fieldName}: {`

      // Add arguments section if field has direct arguments
      if (fieldInfo.args && fieldInfo.args.length > 0) {
        code`      readonly ${propertyNames.a}: {`

        for (const arg of fieldInfo.args) {
          const argType = Grafaid.Schema.getNamedType(arg.type)
          const inlineType = renderInlineType(arg.type)
          const resolvedType = renderResolvedType(arg.type, 'TypeInputsIndex')

          code`        readonly ${arg.name}: {`
          code`          readonly ${propertyNames.nt}: '${argType.name}'`
          code`          readonly ${propertyNames.it}: readonly ${inlineType}`
          if (resolvedType) {
            code`          readonly $t: ${resolvedType}`
          }
          code`        }`
        }

        code`      }`
      }

      // Add descendant type reference if field has descendant arguments
      if (fieldInfo.type) {
        const descendantTypeName = fieldInfo.type.reference.name
        code`      readonly ${propertyNames.ad}: ${descendantTypeName}`
      }

      code`    }`
    }

    code`  }`
    code`}`
  },
)

/**
 * Render an InputObject type.
 *
 * @remarks
 * Generates TypeScript interface for GraphQL InputObject types.
 * Each field includes:
 * - `nt` (named type): The GraphQL type name
 * - `it` (inline type): Nullability encoding
 * - `$t`: The resolved TypeScript type
 *
 * @example Generated structure:
 * ```typescript
 * export interface CreateUserInput {
 *   readonly n: 'CreateUserInput'
 *   readonly f: {
 *     readonly name: {
 *       readonly nt: 'String'
 *       readonly it: readonly [1]  // Required
 *       readonly $t: string
 *     }
 *   }
 * }
 * ```
 */
const renderInputObjectType = createCodeGenerator<
  { type: Grafaid.Schema.InputObjectType }
>(
  ({ config, code, type }) => {
    const fields = Object.values(type.getFields())

    code`export interface ${type.name} extends ${$.$$Utilities}.SchemaDrivenDataMap.InputObject {`
    code`  readonly ${propertyNames.n}: '${type.name}'`
    code`  readonly ${propertyNames.f}: {`

    for (const field of fields) {
      const fieldType = Grafaid.Schema.getNamedType(field.type)
      const inlineType = renderInlineType(field.type)
      const resolvedType = renderResolvedType(field.type, 'TypeInputsIndex')

      code`    readonly ${field.name}: {`
      code`      readonly ${propertyNames.nt}: '${fieldType.name}'`
      code`      readonly ${propertyNames.it}: readonly ${inlineType}`
      if (resolvedType) {
        code`      readonly $t: ${resolvedType}`
      }
      code`    }`
    }

    code`  }`
    code`}`
  },
)

/**
 * Render the fully resolved TypeScript type for an argument or field.
 *
 * @remarks
 * This function precomputes the complete TypeScript type including:
 * - List wrappers (arrays)
 * - Nullability (undefined union)
 * - Proper nesting of lists and nullability
 *
 * The resulting type is used in the `$t` property of arguments and fields
 * for direct TypeScript type inference.
 *
 * @param type - The GraphQL type to resolve
 * @param indexName - The index namespace to use (e.g., 'TypeInputsIndex')
 * @returns The fully resolved TypeScript type string
 *
 * @example
 * ```typescript
 * // GraphQL: [String!]
 * renderResolvedType(type, 'TypeInputsIndex')
 * // Returns: "readonly TypeInputsIndex.String[] | undefined"
 *
 * // GraphQL: [String!]!
 * renderResolvedType(type, 'TypeInputsIndex')
 * // Returns: "readonly TypeInputsIndex.String[]"
 * ```
 */
const renderResolvedType = (type: Grafaid.Schema.Types, indexName: string): string => {
  const namedType = Grafaid.Schema.getNamedType(type)
  const typeName = renderName(namedType.name)

  // Build the base type reference
  let baseType = `${indexName}.${typeName}`

  // Check if it's wrapped in a list
  let currentType = type
  let listDepth = 0
  const listNullability: boolean[] = []

  // Unwrap NonNull if present
  if (Grafaid.Schema.isNonNullType(currentType)) {
    currentType = currentType.ofType
  }

  // Count list depth and track nullability
  while (Grafaid.Schema.isListType(currentType)) {
    listDepth++
    listNullability.push(Grafaid.Schema.isNullableType(currentType))
    currentType = Grafaid.Schema.isNonNullType(currentType.ofType) ? currentType.ofType.ofType : currentType.ofType
  }

  // Apply list wrappers
  let resultType = baseType
  for (let i = 0; i < listDepth; i++) {
    resultType = `readonly ${resultType}[]`
  }

  // Add nullability
  if (Grafaid.Schema.isNullableType(type)) {
    resultType = `${resultType} | undefined`
  }

  return resultType
}
