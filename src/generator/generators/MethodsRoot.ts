// todo remove use of Utils.Aug when schema errors not in use
import { Grafaid } from '../../lib/grafaid/_namespace.js'
import { createFromObjectTypeAndMapOrThrow } from '../../lib/grafaid/schema/RootDetails.js'
import { capitalizeFirstLetter } from '../../lib/prelude.js'
import { identifiers } from '../helpers/identifiers.js'
import { createModuleGenerator, importModuleGenerator } from '../helpers/moduleGenerator.js'
import { createCodeGenerator } from '../helpers/moduleGeneratorRunner.js'
import { renderDocumentation, renderName } from '../helpers/render.js'
import { ModuleGeneratorSchema } from './Schema.js'
import { ModuleGeneratorSelectionSets } from './SelectionSets.js'

export const ModuleGeneratorMethodsRoot = createModuleGenerator(
  `MethodsRoot`,
  ({ config, code }) => {
    code(importModuleGenerator(config, ModuleGeneratorSelectionSets, true))
    code(importModuleGenerator(config, ModuleGeneratorSchema, true))
    code(
      `import type * as ${identifiers.$$Utilities}  from '${config.paths.imports.grafflePackage.utilitiesForGenerated}';`,
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
      config.schema.kindMap.root.list.map(node => {
        return `${node.operationType}: ${node.name.canonical}Methods<$Context>`
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
  const { operationType } = createFromObjectTypeAndMapOrThrow(node, config.schema.kindMap.root)

  // dprint-ignore
  code(`
    export interface ${node.name}Methods<$Context extends ${identifiers.$$Utilities}.Context> {
      $batch:
        ${identifiers.$$Utilities}.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: ${identifiers.$$Utilities}.Exact<$SelectionSet, ${identifiers.$$SelectionSets}.${node.name}<$Context['scalars']>>) =>
            Promise<
              & (null | {})
              & ${identifiers.$$Utilities}.HandleOutput<
                  $Context,
                  ${identifiers.$$Utilities}.DocumentBuilderKit.InferResult.Operation${capitalizeFirstLetter(operationType)}<${identifiers.$$Utilities}.AssertExtendsObject<$SelectionSet>, ${identifiers.$$Schema}.${identifiers.Schema}<$Context['scalars']>>
                >
            >
        >
      __typename:
        ${identifiers.$$Utilities}.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          () =>
            Promise<
              & (null | {})
              & ${identifiers.$$Utilities}.HandleOutputDocumentBuilderRootField<
                  $Context,
                  { __typename: '${node.name}' },
                  '__typename'
                >
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

    const { operationType } = createFromObjectTypeAndMapOrThrow(node, config.schema.kindMap.root)
    // dprint-ignore
    code(`
      ${field.name}:
        ${identifiers.$$Utilities}.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet${isOptional ? `?` : ``}: ${identifiers.$$Utilities}.Exact<$SelectionSet, ${identifiers.$$SelectionSets}.${renderName(node.name)}.${renderName(field)}<$Context['scalars']>>) =>
            Promise<
              & (null | {})
              & ${identifiers.$$Utilities}.HandleOutputDocumentBuilderRootField<
                  $Context,
                  ${identifiers.$$Utilities}.DocumentBuilderKit.InferResult.Operation${capitalizeFirstLetter(operationType)}<{ ${field.name}: $SelectionSet}, ${identifiers.$$Schema}.${identifiers.Schema}<$Context['scalars']>>,
                  '${field.name}'
                >
            >
        >
    `)
  }
})
