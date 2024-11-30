// todo remove use of Utils.Aug when schema errors not in use
import { Grafaid } from '../../lib/grafaid/__.js'
import { capitalizeFirstLetter, entries } from '../../lib/prelude.js'
import type { Config } from '../config/config.js'
import { identifiers } from '../helpers/identifiers.js'
import { createModuleGenerator, importModuleGenerator } from '../helpers/moduleGenerator.js'
import { createCodeGenerator } from '../helpers/moduleGeneratorRunner.js'
import { renderDocumentation, renderName } from '../helpers/render.js'
import { ModuleGeneratorSchema } from './Schema.js'
import { ModuleGeneratorSelectionSets } from './SelectionSets.js'

export const ModuleGeneratorMethodsRoot = createModuleGenerator(
  `MethodsRoot`,
  ({ config, code }) => {
    code(importModuleGenerator(config, ModuleGeneratorSelectionSets))
    code(importModuleGenerator(config, ModuleGeneratorSchema))
    code(
      `import type * as ${identifiers.$$Utilities}  from '${config.paths.imports.grafflePackage.utilitiesForGenerated}';`,
      `import type { InferResult } from '${config.paths.imports.grafflePackage.schema}'`,
    )
    code()
    code()
    config.schema.kindMap.list.Root.forEach(node => {
      code(renderRootType({ config, node }))
      code()
    })
    code(`
      export interface BuilderMethodsRoot<$Context extends ${identifiers.$$Utilities}.Context> {
        ${
      config.schema.kindMap.list.Root.map(node => {
        const operationName = Grafaid.Document
          .RootTypeToOperationType[node.name as keyof typeof Grafaid.Document.RootTypeToOperationType]
        return `${operationName}: ${node.name}Methods<$Context>`
      }).join(`\n`)
    }
      }
    `)
    code()
    code(`
      export interface BuilderMethodsRootFn extends ${identifiers.$$Utilities}.TypeFunction {
        // @ts-expect-error parameter is Untyped.
        return: BuilderMethodsRoot<this['params']>
      }
    `)
  },
)

const renderRootType = createCodeGenerator<{ node: Grafaid.Schema.ObjectType }>(({ node, config, code }) => {
  const fieldMethods = renderFieldMethods({ config, node })
  const operationType = getOperationTypeOrThrow(config, node)

  // dprint-ignore
  code(`
    export interface ${node.name}Methods<$Context extends ${identifiers.$$Utilities}.Context> {
      $batch: <$SelectionSet>(selectionSet: ${identifiers.$$Utilities}.Exact<$SelectionSet, ${identifiers.$$SelectionSets}.${node.name}<$Context['scalars']>>) =>
        Promise<
          & (null | {})
          & ${identifiers.$$Utilities}.HandleOutput<
              $Context,
              InferResult.Operation${capitalizeFirstLetter(operationType)}<${identifiers.$$Utilities}.AssertExtendsObject<$SelectionSet>, ${identifiers.$$Schema}.${identifiers.Schema}<$Context['scalars']>>
            >
        >
      __typename: () =>
        Promise<
          & (null | {})
          & ${identifiers.$$Utilities}.HandleOutputGraffleRootField<
              $Context,
              { __typename: '${node.name}' },
              '__typename'
            >
        >
      ${fieldMethods}
    }`)
})

const renderFieldMethods = createCodeGenerator<{ node: Grafaid.Schema.ObjectType }>(({ node, config, code }) => {
  for (const field of Object.values(node.getFields())) {
    const doc = renderDocumentation(config, field)
    code(doc)

    const fieldTypeUnwrapped = Grafaid.Schema.getNamedType(field.type)

    const isOptional = Grafaid.Schema.isScalarType(fieldTypeUnwrapped)
      && Grafaid.Schema.Args.isAllArgsNullable(field.args)

    const operationType = getOperationTypeOrThrow(config, node)
    // dprint-ignore
    code(`
      ${field.name}: <$SelectionSet>(selectionSet${isOptional ? `?` : ``}: ${identifiers.$$Utilities}.Exact<$SelectionSet, ${identifiers.$$SelectionSets}.${renderName(node)}.${renderName(field)}<$Context['scalars']>>) =>
        Promise<
          & (null | {})
          & ${identifiers.$$Utilities}.HandleOutputGraffleRootField<
              $Context,
              InferResult.Operation${capitalizeFirstLetter(operationType)}<{ ${field.name}: $SelectionSet}, ${identifiers.$$Schema}.${identifiers.Schema}<$Context['scalars']>>,
              '${field.name}'
            >
        >
    `)
  }
})

const getOperationTypeOrThrow = (config: Config, node: Grafaid.Schema.ObjectType) => {
  const rootsWithOpType = entries(config.schema.kindMap.index.Root)
    .map(_ => {
      if (_[1] === null) return null
      return { operationType: _[0], objectType: _[1] }
    }).filter(_ => _ !== null)
  const operationType = rootsWithOpType.find(({ objectType }) => objectType.name === node.name)?.operationType
  if (!operationType) throw new Error(`Operation type not found for ${node.name}`)
  return operationType
}
