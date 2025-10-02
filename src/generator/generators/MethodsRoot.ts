// todo remove use of Utils.Aug when schema errors not in use
import { Grafaid } from '../../lib/grafaid/$.js'
import { createFromObjectTypeAndMapOrThrow } from '../../lib/grafaid/schema/RootDetails.js'
import { capitalizeFirstLetter } from '../../lib/prelude.js'
import { $ } from '../helpers/identifiers.js'
import {
  getBatchMethodDoc,
  getOutputFieldMethodDoc,
  getRootMethodsInterfaceDoc,
  getTypenameMethodDoc,
} from '../helpers/jsdoc.js'
import { createModuleGenerator, importModuleGenerator } from '../helpers/moduleGenerator.js'
import { createCodeGenerator } from '../helpers/moduleGeneratorRunner.js'
import { importUtilities } from '../helpers/pathHelpers.js'
import { renderName } from '../helpers/render.js'
import { ModuleGeneratorSchema } from './Schema.js'
import { ModuleGeneratorSelectionSets } from './SelectionSets.js'

export const ModuleGeneratorMethodsRoot = createModuleGenerator(
  `MethodsRoot`,
  ({ config, code }) => {
    code(importModuleGenerator(config, ModuleGeneratorSelectionSets, true))
    code(importModuleGenerator(config, ModuleGeneratorSchema, true))
    code(importUtilities(config))
    code``
    code``
    config.schema.kindMap.list.Root.forEach(node => {
      code(renderRootType({ config, node }))
      code``
    })
    code`
      export interface BuilderMethodsRoot<$Context extends ${$.$$Utilities}.Context> {
        ${
      config.schema.kindMap.root.list.map(node => {
        return `${node.operationType}: ${node.name.canonical}Methods<$Context>`
      }).join(`\n`)
    }
      }

      export interface BuilderMethodsRootFn extends ${$.$$Utilities}.TypeFunction {
        // @ts-expect-error parameter is Untyped.
        return: BuilderMethodsRoot<this['params']>
      }
    `
  },
)

const renderRootType = createCodeGenerator<{ node: Grafaid.Schema.ObjectType }>(({ node, config, code }) => {
  const fieldMethods = renderFieldMethods({ config, node })
  const { operationType } = createFromObjectTypeAndMapOrThrow(node, config.schema.kindMap.root)

  // Interface JSDoc
  const interfaceDoc = getRootMethodsInterfaceDoc(config, node, operationType)
  if (interfaceDoc) {
    code(`/**`)
    interfaceDoc.split('\n').forEach(line => {
      code(` * ${line}`)
    })
    code(` */`)
  }

  // dprint-ignore
  code`export interface ${node.name}Methods<$Context extends ${$.$$Utilities}.Context> {`

  // $batch JSDoc
  const batchDoc = getBatchMethodDoc(operationType)
  code(`  /**`)
  batchDoc.split('\n').forEach(line => {
    code(`   * ${line}`)
  })
  code(`   */`)

  // dprint-ignore
  code`
      $batch:
        ${$.$$Utilities}.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: ${$.$$Utilities}.Exact<$SelectionSet, ${$.$$SelectionSets}.${node.name}<{ scalars: $Context['scalars'] }>>) =>
            Promise<
              & (null | {})
              & ${$.$$Utilities}.HandleOutput<
                  $Context,
                  ${$.$$Utilities}.DocumentBuilderKit.InferResult.Operation${capitalizeFirstLetter(operationType)}<${$.$$Utilities}.AssertExtendsObject<$SelectionSet>, ${$.$$Schema}.${$.Schema}<$Context['scalars']>>
                >
            >
        >
  `

  // __typename JSDoc
  const typenameDoc = getTypenameMethodDoc(node.name, operationType)
  code(`  /**`)
  typenameDoc.split('\n').forEach(line => {
    code(`   * ${line}`)
  })
  code(`   */`)

  // dprint-ignore
  code`
      __typename:
        ${$.$$Utilities}.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          () =>
            Promise<
              & (null | {})
              & ${$.$$Utilities}.HandleOutputDocumentBuilderRootField<
                  $Context,
                  { __typename: '${node.name}' },
                  '__typename'
                >
            >
        >
      ${fieldMethods}
    }
  `
})

const renderFieldMethods = createCodeGenerator<{ node: Grafaid.Schema.ObjectType }>(({ node, config, code }) => {
  for (const field of Object.values(node.getFields())) {
    const docContent = getOutputFieldMethodDoc(config, field, node)
    if (docContent) {
      code(`/**`)
      docContent.split('\n').forEach(line => {
        code(` * ${line}`)
      })
      code(` */`)
    }

    const fieldTypeUnwrapped = Grafaid.Schema.getNamedType(field.type)

    const isOptional = Grafaid.Schema.isScalarType(fieldTypeUnwrapped)
      && Grafaid.Schema.Args.isAllArgsNullable(field.args)

    const { operationType } = createFromObjectTypeAndMapOrThrow(node, config.schema.kindMap.root)
    // dprint-ignore
    code`
      ${field.name}:
        ${$.$$Utilities}.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet${isOptional ? `?` : ``}: ${$.$$Utilities}.Exact<$SelectionSet, ${$.$$SelectionSets}.${renderName(node.name)}.${renderName(field)}<{ scalars: $Context['scalars'] }>>) =>
            Promise<
              & (null | {})
              & ${$.$$Utilities}.HandleOutputDocumentBuilderRootField<
                  $Context,
                  ${$.$$Utilities}.DocumentBuilderKit.InferResult.Operation${capitalizeFirstLetter(operationType)}<{ ${field.name}: $SelectionSet}, ${$.$$Schema}.${$.Schema}<$Context['scalars']>>,
                  '${field.name}'
                >
            >
        >
    `
  }
})
