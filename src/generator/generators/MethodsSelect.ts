// todo jsdoc
import { Code } from '../../lib/Code.js'
import { entries, pick, values } from '../../lib/prelude.js'
import { Tex } from '../../lib/tex/__.js'
import { createModuleGenerator } from '../helpers/moduleGenerator.js'
import { renderName } from '../helpers/render.js'
import { ModuleGeneratorSelectionSets } from './SelectionSets.js'

export const ModuleGeneratorMethodsSelect = createModuleGenerator(
  `MethodsSelect`,
  ({ config, code }) => {
    const kindMap = pick(config.schema.kindMap.list, [`Root`, `OutputObject`, `Union`, `Interface`])
    const kinds = entries(kindMap)

    code(`import type * as $SelectionSets from './${ModuleGeneratorSelectionSets.name}.js'`)
    code(`import type * as $Utilities from '${config.paths.imports.grafflePackage.utilitiesForGenerated}'`)
    code()
    code(Tex.title1(`Select Methods Interface`))
    code()
    code(Code.tsInterface({
      name: `$MethodsSelect`,
      fields: values(kindMap).flatMap(type => {
        return type.map(type => {
          return [type.name, renderName(type)] as const
        })
      }),
    }))
    code()
    for (const [kindName, kind] of kinds) {
      code(Tex.title1(kindName))
      code()
      for (const type of kind) {
        code(Code.tsInterface({
          name: type.name,
          fields: `
            <$SelectionSet>(selectionSet: $Utilities.Exact<$SelectionSet, $SelectionSets.${renderName(type)}>):
              $SelectionSet
          `,
        }))
        code()
      }
    }
  },
)
