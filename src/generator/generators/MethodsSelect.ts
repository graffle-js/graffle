import { Tex } from '#lib/tex'
import { CodeGraphQL } from '#src/lib/CodeGraphQL.js'
import { Str } from '@wollybeard/kit'
import { Obj } from '@wollybeard/kit'
import { $ } from '../helpers/identifiers.js'
import { getMethodsSelectDoc } from '../helpers/jsdoc.js'
import { createModuleGenerator, importModuleGenerator } from '../helpers/moduleGenerator.js'
import { importUtilities } from '../helpers/pathHelpers.js'
import { renderName } from '../helpers/render.js'
import { ModuleGeneratorSelectionSets } from './SelectionSets.js'

export const ModuleGeneratorMethodsSelect = createModuleGenerator(
  `MethodsSelect`,
  ({ config, code }) => {
    const kindMap = Obj.pick(config.schema.kindMap.list, [`Root`, `OutputObject`, `Union`, `Interface`])
    const kinds = Obj.entries(kindMap)

    code(importModuleGenerator(config, ModuleGeneratorSelectionSets))
    code(importUtilities(config))
    code``
    code(Tex.title1(`Select Methods Interface`))
    code``
    code`
      /**
       * Selection method types for building native GraphQL documents.
       *
       * Maps each GraphQL schema type to its corresponding selection method interface.
       * These methods are available on \`.select()\` to build type-safe selection sets
       * that return the selection set itself (for document building).
       */
    `
    code(CodeGraphQL.tsInterface({
      name: `$MethodsSelect`,
      block: Obj.values(kindMap).flatMap(type => {
        return type.map(type => {
          return [type.name, renderName(type)] as const
        })
      }),
    }))
    code``
    for (const [kindName, kind] of kinds) {
      code(Tex.title1(kindName))
      code``
      for (const type of kind) {
        code(CodeGraphQL.TSDoc(getMethodsSelectDoc(type)))
        code(CodeGraphQL.tsInterface({
          name: type.name,
          block: `
            <$SelectionSet>(selectionSet: ${$.$$Utilities}.Exact<$SelectionSet, $$SelectionSets.${renderName(type)}>):
              $SelectionSet
          `,
        }))
        code``
      }
    }
  },
)
