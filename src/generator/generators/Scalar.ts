import { Code } from '../../lib/Code.js'
import { Grafaid } from '../../lib/grafaid/__.js'
import { Tex } from '../../lib/tex/__.js'
import { identifiers } from '../helpers/identifiers.js'
import { createModuleGenerator } from '../helpers/moduleGenerator.js'
import { typeTitle2 } from '../helpers/render.js'

export const ModuleGeneratorScalar = createModuleGenerator(
  `scalar`,
  ({ config, code }) => {
    // todo test case for when this is true
    const isNeedCustomScalarDefaults = Grafaid.Schema.KindMap.hasCustomScalars(config.schema.kindMap)
      && !config.options.customScalars

    code(
      `import type * as ${identifiers.$$Utilities} from '${config.paths.imports.grafflePackage.utilitiesForGenerated}'`,
    )
    code()

    if (Grafaid.Schema.KindMap.hasCustomScalars(config.schema.kindMap) && config.options.customScalars) {
      code(`import * as ${identifiers.CustomScalars} from '${config.paths.imports.scalars}'`)
      code()
      code(`export * from '${config.paths.imports.scalars}'`)
      const names = config.schema.kindMap.list.ScalarCustom.map((scalar) => scalar.name).join(`, `)
      code(`export { ${names} } from '${config.paths.imports.scalars}'`)
      for (const scalar of config.schema.kindMap.list.ScalarCustom) {
        code(typeTitle2(`custom scalar type`)(scalar))
        code()
        code(`export type ${scalar.name} = typeof ${identifiers.CustomScalars}.${scalar.name}`)
        code(`
          // Without this we get error:
          // "Exported type alias 'DateDecoded' has or is using private name 'Date'."
        `)
        code(`type ${scalar.name}_ = typeof ${identifiers.CustomScalars}.${scalar.name}`)
        code(
          `export type ${scalar.name}Decoded = ${identifiers.$$Utilities}.Schema.Scalar.GetDecoded<${scalar.name}_>`,
        )
        code(
          `export type ${scalar.name}Encoded = ${identifiers.$$Utilities}.Schema.Scalar.GetEncoded<${scalar.name}_>`,
        )
        code()
      }
    }

    code(`export * from '${config.paths.imports.grafflePackage.scalars}'`)
    code()

    if (isNeedCustomScalarDefaults) {
      if (config.lint.missingCustomScalarCodec) {
        console.log(
          `WARNING: Custom scalars detected in the schema, but you have not created a custom scalars module to import implementations from.`,
        )
      }

      for (const scalar of config.schema.kindMap.list.ScalarCustom) {
        code(typeTitle2(`custom scalar type`)(scalar))
        code()
        code(`export type ${scalar.name} = ${identifiers.$$Utilities}.Schema.Scalar.ScalarCodecless<'${scalar.name}'>`)
        // code(`import type { String as ${scalar.name} } from '${config.paths.imports.grafflePackage.scalars}'`)
        // code()
        // code(`export { String as ${scalar.name} } from '${config.paths.imports.grafflePackage.scalars}'`)
        // code(`export type ${scalar.name}Decoded = Schema.Scalar.GetDecoded<${scalar.name}>`)
        // code(`export type ${scalar.name}Encoded = Schema.Scalar.GetEncoded<${scalar.name}>`)
        // code()
      }
    }
    code()

    code(Tex.title1(`Registry`))
    code()

    const runtimeMap = config.options.customScalars
      ? config.schema.kindMap.list.ScalarCustom.map(_ => {
        return [_.name, _.name]
      })
      : {}

    const buildtimeMap = config.options.customScalars
      ? config.schema.kindMap.list.ScalarCustom.map(_ => {
        return [_.name, _.name + `_`]
      })
      : {}

    code(`
      export const $registry = {
        map: ${Code.termObject(runtimeMap)},
      } as $Registry
    `)
    code()

    const typeScalarRegistry = config.options.customScalars
      // dprint-ignore
      ? `$$Utilities.Schema.Scalar.Registry<
          ${Code.termObject(buildtimeMap)},
          ${Code.tsUnionItems(config.schema.kindMap.list.ScalarCustom.map(_ => `${identifiers.$$Utilities}.Schema.Scalar.GetEncoded<${_.name}_>`))},
          ${Code.tsUnionItems(config.schema.kindMap.list.ScalarCustom.map(_ => `${identifiers.$$Utilities}.Schema.Scalar.GetDecoded<${_.name}_>`))},
        >`
      : `$$Utilities.Schema.Scalar.Registry.Empty`

    code(Code.tsAlias$({
      name: `$Registry`,
      type: typeScalarRegistry,
    }))
  },
)
