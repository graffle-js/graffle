// todo jsdoc
import { entries } from '../../lib/prelude.js'
import { Tex } from '../../lib/tex/_namespace.js'
import { $ } from '../helpers/identifiers.js'
import { createModuleGenerator, importModuleGenerator } from '../helpers/moduleGenerator.js'
import { importUtilities } from '../helpers/pathHelpers.js'
import { renderName } from '../helpers/render.js'
import { ModuleGeneratorData } from './Data.js'
import { ModuleGeneratorSchema } from './Schema.js'
import { ModuleGeneratorSelectionSets } from './SelectionSets.js'

export const ModuleGeneratorSelect = createModuleGenerator(
  `select`,
  ({ config, code }) => {
    const iSchema = `${$.$$Schema}.Schema`
    const enumMemberName = {
      query: `QUERY `,
      mutation: `MUTATION`,
      subscription: `SUBSCRIPTION`,
    } as const
    code(importModuleGenerator(config, ModuleGeneratorData))
    code(importModuleGenerator(config, ModuleGeneratorSchema))
    code(importModuleGenerator(config, ModuleGeneratorSelectionSets))
    code`import type { OperationTypeNode } from 'graphql'`
    code(importUtilities(config))
    code``
    code(Tex.title1(`Runtime`))
    code`
      import { createSelect } from '${config.paths.imports.grafflePackage.client}'
      export const Select = createSelect(${$.$$Data}.Name)
    `
    code``
    code(Tex.title1(`Buildtime`))
    code`
      export namespace Select {
    `
    code(Tex.title2(`Root`))
    code(
      ...entries(config.schema.kindMap.index.Root).map(([operationType, type]) => {
        if (!type) return null
        return `export type ${type.name}<$SelectionSet extends $$SelectionSets.${
          renderName(type)
        }> = ${$.$$Utilities}.DocumentBuilderKit.InferResult.Operation<$SelectionSet, ${iSchema}, OperationTypeNode.${
          enumMemberName[operationType]
        }>`
      }),
    )
    code(Tex.title2(`OutputObject`))
    code(...config.schema.kindMap.list.OutputObject.map((type) => {
      return `export type ${type.name}<$SelectionSet extends $$SelectionSets.${
        renderName(type)
      }> = ${$.$$Utilities}.DocumentBuilderKit.InferResult.OutputObjectLike<$SelectionSet, ${iSchema}, ${iSchema}['allTypes']['${type.name}']>`
    }))
    code(Tex.title2(`Union`))
    code(...config.schema.kindMap.list.Union.map((type) => {
      return `export type ${type.name}<$SelectionSet extends $$SelectionSets.${
        renderName(type)
      }> = ${$.$$Utilities}.DocumentBuilderKit.InferResult.Union<$SelectionSet, ${iSchema}, ${iSchema}['allTypes']['${type.name}']>`
    }))
    code(Tex.title2(`Interface`))
    code(...config.schema.kindMap.list.Interface.map((type) => {
      return `export type ${type.name}<$SelectionSet extends $$SelectionSets.${
        renderName(type)
      }> = ${$.$$Utilities}.DocumentBuilderKit.InferResult.Interface<$SelectionSet, ${iSchema}, ${iSchema}['allTypes']['${type.name}']>`
    }))

    code`}`
  },
)
