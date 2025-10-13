// todo remove use of Utils.Aug when schema errors not in use
import { Grafaid } from '#lib/grafaid'
import { Code } from '#src/lib/Code.js'
import { createFromObjectTypeAndMapOrThrow } from '#src/lib/grafaid/schema/RootDetails.js'
import { Str } from '@wollybeard/kit'
import { $ } from '../helpers/identifiers.js'
import {
  getBatchMethodDoc,
  getOutputFieldMethodDoc,
  getRootMethodsInterfaceDoc,
  getRootPropertyDoc,
  getTypenameMethodDoc,
} from '../helpers/jsdoc.js'
import { createModuleGenerator, importModuleGenerator } from '../helpers/moduleGenerator.js'
import { createCodeGenerator } from '../helpers/moduleGeneratorRunner.js'
import { codeImportAll, importUtilities } from '../helpers/pathHelpers.js'
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
    code(`export interface BuilderMethodsRoot<$Context extends ${$.$$Utilities}.Context> {`)
    config.schema.kindMap.root.list.forEach(node => {
      const propertyDoc = getRootPropertyDoc(node.operationType)
      code(Code.TSDoc(propertyDoc).split('\n').map(line => `  ${line}`).join('\n'))
      code(`  ${node.operationType}: ${node.name.canonical}Methods<$Context>`)
    })
    code(`}`)
    code``
    code`
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
    code(Code.TSDoc(interfaceDoc))
  }

  // dprint-ignore
  code`export interface ${node.name}Methods<$Context extends ${$.$$Utilities}.Context> {`

  // $batch JSDoc
  const batchDoc = getBatchMethodDoc(operationType)
  code(Code.TSDoc(batchDoc).split('\n').map(line => `  ${line}`).join('\n'))

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
                  ${$.$$Utilities}.DocumentBuilderKit.InferResult.Operation${Str.Case.capFirst(operationType)}<${$.$$Utilities}.AssertExtendsObject<$SelectionSet>, ${$.$$Schema}.${$.Schema}<$Context['scalars']>>
                >
            >
        >
  `

  // __typename JSDoc
  const typenameDoc = getTypenameMethodDoc(node.name, operationType)
  code(Code.TSDoc(typenameDoc).split('\n').map(line => `  ${line}`).join('\n'))

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
      code(Code.TSDoc(docContent))
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
          <$SelectionSet>(selectionSet${isOptional ? `?` : ``}: ${$.$$Utilities}.Exact<$SelectionSet, ${$.$$SelectionSets}.${renderName(node.name)}.${field.name}<{ scalars: $Context['scalars'] }>>) =>
            Promise<
              & (null | {})
              & ${$.$$Utilities}.HandleOutputDocumentBuilderRootField<
                  $Context,
                  ${$.$$Utilities}.DocumentBuilderKit.InferResult.Operation${Str.Case.capFirst(operationType)}<{ ${field.name}: $SelectionSet}, ${$.$$Schema}.${$.Schema}<$Context['scalars']>>,
                  '${field.name}'
                >
            >
        >
    `
  }
})
