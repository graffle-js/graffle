// todo remove use of Utils.Aug when schema errors not in use
import { Grafaid } from '../../lib/grafaid/__.js'
import { identifiers } from '../helpers/identifiers.js'
import { createModuleGenerator } from '../helpers/moduleGenerator.js'
import { createCodeGenerator } from '../helpers/moduleGeneratorRunner.js'
import { renderDocumentation, renderName } from '../helpers/render.js'
import { ModuleGeneratorSchema } from './Schema.js'
import { ModuleGeneratorSelectionSets } from './SelectionSets.js'

export const ModuleGeneratorMethodsRoot = createModuleGenerator(
  `MethodsRoot`,
  ({ config, code }) => {
    code(
      `import type * as ${identifiers.$$Utilities}  from '${config.paths.imports.grafflePackage.utilitiesForGenerated}';`,
    )
    code(`import type { InferResult } from '${config.paths.imports.grafflePackage.schema}';`)
    code(`import type { ${identifiers.Schema} } from './${ModuleGeneratorSchema.name}.js'`)
    code(`import type * as SelectionSet from './${ModuleGeneratorSelectionSets.name}.js'`)
    code()

    code()

    config.schema.kindMap.Root.forEach(node => {
      code(renderRootType({ config, node }))
      code()
    })

    code(`
      export interface BuilderMethodsRoot<$Context extends ${identifiers.$$Utilities}.ClientContext> {
        ${
      config.schema.kindMap.Root.map(node => {
        const operationName = Grafaid.Document
          .RootTypeToOperationType[node.name as keyof typeof Grafaid.Document.RootTypeToOperationType]
        return `${operationName}: ${node.name}Methods<$Context>`
      }).join(`\n`)
    }
      }
    `)
    code()

    code(`
      export interface BuilderMethodsRootFn extends ${identifiers.$$Utilities}.TypeFunction.Fn {
        // @ts-expect-error parameter is Untyped.
        return: BuilderMethodsRoot<this['params']>
      }
    `)
  },
)

const renderRootType = createCodeGenerator<{ node: Grafaid.Schema.ObjectType }>(({ node, config, code }) => {
  const fieldMethods = renderFieldMethods({ config, node })

  code(`
    export interface ${node.name}Methods<$Context extends ${identifiers.$$Utilities}.ClientContext> {
      $batch: <$SelectionSet>(selectionSet: ${identifiers.$$Utilities}.Exact<$SelectionSet, SelectionSet.${node.name}<$Context['scalars']>>) =>
        Promise<
          ${identifiers.$$Utilities}.Simplify<
            ${identifiers.$$Utilities}.HandleOutput<
              $Context,
              InferResult.${node.name}<$SelectionSet, ${identifiers.Schema}<$Context['scalars']>>
            >
          >
        >
      __typename: () =>
        Promise<
          ${identifiers.$$Utilities}.Simplify<
            ${identifiers.$$Utilities}.HandleOutputGraffleRootField<
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

    // dprint-ignore
    code(`
      ${field.name}: <$SelectionSet>(selectionSet${isOptional ? `?` : ``}: ${identifiers.$$Utilities}.Exact<$SelectionSet, SelectionSet.${renderName(node)}.${renderName(field)}<$Context['scalars']>>) =>
        ${Helpers.returnType(node.name, field.name, `$SelectionSet`)}
    `)
  }
})

namespace Helpers {
  export const returnType = (rootName: string, fieldName: string, selectionSet: string) => {
    return `
      Promise<
        ${identifiers.$$Utilities}.Simplify<
          ${identifiers.$$Utilities}.HandleOutputGraffleRootField<
            $Context,
            InferResult.${rootName}<{ ${fieldName}: ${selectionSet}}, ${identifiers.Schema}<$Context['scalars']>>,
            '${fieldName}'
          >
        >
      >
    `
  }
}
