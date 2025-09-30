import { Code } from '../../lib/Code.js'
import { Grafaid } from '../../lib/grafaid/_namespace.js'
import { entries } from '../../lib/prelude.js'
import { Tex } from '../../lib/tex/_namespace.js'
import { propertyNames } from '../../types/SchemaDrivenDataMap/SchemaDrivenDataMap.js'
import type { Config } from '../config/config.js'
import { $ } from '../helpers/identifiers.js'
import { createModuleGenerator } from '../helpers/moduleGenerator.js'
import { createCodeGenerator } from '../helpers/moduleGeneratorRunner.js'
import { renderInlineType, renderName } from '../helpers/render.js'
import type { KindRenderers } from '../helpers/types.js'

export const ModuleGeneratorArgumentsMap = createModuleGenerator(
  `ArgumentsMap`,
  ({ config, code }) => {
    const rootsWithOpType = entries(config.schema.kindMap.index.Root)
      .map(_ => {
        if (_[1] === null) return null
        return { operationType: _[0], objectType: _[1] }
      }).filter(_ => _ !== null)

    const kindMap = getKindMap(config)
    const kinds = entries(kindMap)

    code`
      import type * as TypeInputsIndex from './type-inputs-index.js'
    `
    code``

    for (const [kindName, nodes] of kinds) {
      code(Tex.title1(kindName))
      code``
      if (nodes.length === 0) {
        code`// No ${kindName} types with arguments in your schema.`
      }
      for (const type of nodes) {
        const codeGenerator = kindRenders[kindName] as any
        code(codeGenerator({ config, type: type as any }))
        code``
      }
      code``
    }

    code(Tex.title1(`Index`))
    code``
    code`export type ArgumentsMap = {`
    // Always include all root types in the index, even if they have no arguments
    // This is needed for proper type inference in the document builder
    for (const rootWithOpType of rootsWithOpType) {
      const hasArgs = kindMap.Root.some(t => t.name === rootWithOpType.objectType.name)
      if (hasArgs) {
        code`  ${rootWithOpType.operationType}: ${rootWithOpType.objectType.name}`
      } else {
        // Empty object type for root types without arguments
        code`  ${rootWithOpType.operationType}: { f: {} }`
      }
    }
    code`}`
  },
)

//
// Helpers
//

const getKindMap = (config: Config) => {
  const { schema: { kindMap } } = config

  // For ArgumentsMap, we only need types that have arguments or input fields
  const hasArguments = (type: Grafaid.Schema.ObjectType) => {
    return Object.values(type.getFields()).some(field => field.args.length > 0)
  }

  const hasInputFields = (type: Grafaid.Schema.InputObjectType) => {
    return Object.values(type.getFields()).length > 0
  }

  return {
    InputObject: kindMap.list.InputObject.filter(hasInputFields),
    OutputObject: kindMap.list.OutputObject.filter(hasArguments),
    Interface: kindMap.list.Interface.filter(hasArguments as any), // Type assertion needed due to GraphQL type differences
    Union: [], // Unions don't have arguments directly
    Root: kindMap.list.Root.filter(hasArguments),
  }
}

//
// Code Generators
//

const OutputObjectType = createCodeGenerator<
  { type: Grafaid.Schema.ObjectType }
>(
  ({ config, code, type }) => {
    const fields = Object.values(type.getFields())
    const fieldsWithArgs = fields.filter(field => field.args.length > 0)

    if (fieldsWithArgs.length === 0) {
      return // Skip objects without arguments
    }

    code`export type ${type.name} = {`
    code`  readonly ${propertyNames.f}: {`

    for (const field of fieldsWithArgs) {
      code`    readonly ${field.name}: {`
      code`      readonly ${propertyNames.a}: {`

      for (const arg of field.args) {
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
      code`    }`
    }

    code`  }`
    code`}`
  },
)

const InterfaceType = createCodeGenerator<
  { type: Grafaid.Schema.InterfaceType }
>(
  ({ config, code, type }) => {
    // For interfaces, we generate the same structure as output objects
    // This captures the interface's own fields with arguments
    const fields = Object.values(type.getFields())
    const fieldsWithArgs = fields.filter(field => field.args.length > 0)

    if (fieldsWithArgs.length === 0) {
      return // Skip interfaces without arguments
    }

    code`export type ${type.name} = {`
    code`  readonly ${propertyNames.f}: {`

    for (const field of fieldsWithArgs) {
      code`    readonly ${field.name}: {`
      code`      readonly ${propertyNames.a}: {`

      for (const arg of field.args) {
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
      code`    }`
    }

    code`  }`
    code`}`
  },
)

const InputObjectType = createCodeGenerator<
  { type: Grafaid.Schema.InputObjectType }
>(
  ({ config, code, type }) => {
    const fields = Object.values(type.getFields())

    code`export type ${type.name} = {`
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
 * This precomputes the type including list wrappers and nullability.
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

const kindRenders: Partial<KindRenderers> = {
  InputObject: InputObjectType,
  OutputObject: OutputObjectType,
  Interface: InterfaceType,
  Root: OutputObjectType,
}
