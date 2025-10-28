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
    code(Str.Code.TS.Comment.title1(`Select Methods Interface`))
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
    code(Str.Code.TS.interfaceDecl({
      name: `$MethodsSelect`,
      block: Obj.values(kindMap).flatMap(type => {
        return type.map(type => {
          return [type.name, renderName(type)] as const
        })
      }),
    }))
    code``
    for (const [kindName, kind] of kinds) {
      code(Str.Code.TS.Comment.title1(kindName))
      code``
      for (const type of kind) {
        code(Str.Code.TSDoc.format(getMethodsSelectDoc(type)))
        code(Str.Code.TS.interfaceDecl({
          name: type.name,
          block: `
            <$SelectionSet>(selectionSet: ${$.$$Utilities}.NoExcess<$$SelectionSets.${renderName(type)}, $SelectionSet>):
              $SelectionSet
          `,
        }))
        code``
      }
    }
  },
)
