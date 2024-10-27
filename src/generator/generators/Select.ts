// todo jsdoc
import { entries } from '../../lib/prelude.js'
import { Tex } from '../../lib/tex/__.js'
import { identifiers } from '../helpers/identifiers.js'
import { createModuleGenerator } from '../helpers/moduleGenerator.js'
import { renderName } from '../helpers/render.js'
import { ModuleGeneratorData } from './Data.js'
import { ModuleGeneratorSchema } from './Schema.js'
import { ModuleGeneratorSelectionSets } from './SelectionSets.js'

export const ModuleGeneratorSelect = createModuleGenerator(
  `Select`,
  ({ config, code }) => {
    const enumMemberName = {
      query: `QUERY `,
      mutation: `MUTATION`,
      subscription: `SUBSCRIPTION`,
    } as const
    code(`
      import * as Data from './${ModuleGeneratorData.name}.js'
      import type { OperationTypeNode } from 'graphql'
      import type { ${identifiers.Schema} } from './${ModuleGeneratorSchema.name}.js'
      import type { InferResult } from '${config.paths.imports.grafflePackage.schema}'
      import type * as SelectionSets from './${ModuleGeneratorSelectionSets.name}.js'
    `)
    code()
    code(Tex.title1(`Runtime`))
    code(`import { createSelect } from '${config.paths.imports.grafflePackage.client}'`)
    code(`export const Select = createSelect(Data.Name)`)
    code()
    code(Tex.title1(`Buildtime`))
    code()
    code(`export namespace Select {`)
    code(Tex.title2(`Root`))
    code(
      ...entries(config.schema.kindMap.index.Root).map(([operationType, type]) => {
        if (!type) return null
        return `export type ${type.name}<$SelectionSet extends SelectionSets.${
          renderName(type)
        }> = InferResult.Operation<$SelectionSet, ${identifiers.Schema}, OperationTypeNode.${
          enumMemberName[operationType]
        }>`
      }),
    )
    code(Tex.title2(`OutputObject`))
    code(...config.schema.kindMap.list.OutputObject.map((type) => {
      return `export type ${type.name}<$SelectionSet extends SelectionSets.${
        renderName(type)
      }> = InferResult.OutputObject<$SelectionSet, ${identifiers.Schema}, ${identifiers.Schema}['allTypes']['${type.name}']>`
    }))
    code(Tex.title2(`Union`))
    code(...config.schema.kindMap.list.Union.map((type) => {
      return `export type ${type.name}<$SelectionSet extends SelectionSets.${
        renderName(type)
      }> = InferResult.Union<$SelectionSet, ${identifiers.Schema}, ${identifiers.Schema}['allTypes']['${type.name}']>`
    }))
    code(Tex.title2(`Interface`))
    code(...config.schema.kindMap.list.Interface.map((type) => {
      return `export type ${type.name}<$SelectionSet extends SelectionSets.${
        renderName(type)
      }> = InferResult.Interface<$SelectionSet, ${identifiers.Schema}, ${identifiers.Schema}['allTypes']['${type.name}']>`
    }))

    code(`}`) // namespace Select
  },
)
