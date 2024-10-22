// todo jsdoc
import { pick } from 'es-toolkit'
import { Grafaid } from '../../lib/grafaid/__.js'
import { entries } from '../../lib/prelude.js'
import { Tex } from '../../lib/tex/__.js'
import { createModuleGenerator } from '../helpers/moduleGenerator.js'
import { renderName } from '../helpers/render.js'
import { ModuleGeneratorSelectionSets } from './SelectionSets.js'

export const ModuleGeneratorMethodsSelect = createModuleGenerator(
  `MethodsSelect`,
  ({ config, code }) => {
    const kindMap = pick(config.schema.kindMap, [`Root`, `OutputObject`, `Union`, `Interface`])
    const kinds = entries(kindMap)

    code(`import type * as $SelectionSets from './${ModuleGeneratorSelectionSets.name}.js'`)
    code(`import type * as $Utilities from '${config.paths.imports.grafflePackage.utilitiesForGenerated}'`)
    code()
    code(Tex.title1(`Select Methods Interface`))
    code()
    code(`export interface $MethodsSelect {`)
    for (const [_, kind] of kinds) {
      for (const type of kind) {
        // dprint-ignore
        code(`${type.name}: ${renderName(type)}`)
      }
    }
    code(`}`)
    code()

    for (const [name, kind] of kinds) {
      const titleText = Grafaid.Schema.isRootType(kind[0]!) ? `Root` : name
      code(Tex.title1(titleText))
      code()

      for (const graphqlType of kind) {
        // dprint-ignore
        code(`
          export interface ${renderName(graphqlType)} {
            <$SelectionSet>(selectionSet: $Utilities.Exact<$SelectionSet, $SelectionSets.${renderName(graphqlType)}>):
              $SelectionSet
          }`
        )
        code()
      }
    }
  },
)
