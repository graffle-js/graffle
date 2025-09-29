import { Code } from '../../lib/Code.js'
import { Grafaid } from '../../lib/grafaid/_namespace.js'
import { Tex } from '../../lib/tex/_namespace.js'
import { $ } from '../helpers/identifiers.js'
import { createModuleGenerator } from '../helpers/moduleGenerator.js'
import { renderName, typeTitle2 } from '../helpers/render.js'

export const ModuleGeneratorScalar = createModuleGenerator(
  `scalar`,
  ({ config, code }) => {
    // todo test case for when this is true
    const isNeedCustomScalarDefaults = Grafaid.Schema.KindMap.hasCustomScalars(config.schema.kindMap)
      && !config.options.customScalars

    // TODO: to get this information we would need to parse the exports of the module with tsc.

    // const syncCheckResult = {
    //   inSchemaButMissingImplementation:
    //   inImplementationButMissingInSchema:
    // }

    // dprint-ignore
    code`import type * as ${$.$$Utilities} from '${config.paths.imports.grafflePackage.utilitiesForGenerated}'`

    if (Grafaid.Schema.KindMap.hasCustomScalars(config.schema.kindMap) && config.options.customScalars) {
      code`
        import * as ${$.CustomScalars} from '${config.paths.imports.scalars}'
      `

      // Use explicit named exports for custom scalars to avoid TypeScript export conflict
      // where type exports shadow value exports
      const scalarNames = config.schema.kindMap.list.ScalarCustom.map(scalar => scalar.name).join(`,\n  `)
      code`
        export {
          ${scalarNames}
        } from '${config.paths.imports.scalars}'
      `

      for (const scalar of config.schema.kindMap.list.ScalarCustom) {
        code(typeTitle2(`custom scalar type`)(scalar))
        code``
        code`
          export type ${renderName(scalar.name)} = typeof ${$.CustomScalars}.${scalar.name}
          // Without this we get error:
          // "Exported type alias 'DateDecoded' has or is using private name 'Date'."
          type ${renderName(scalar.name)}_ = typeof ${$.CustomScalars}.${scalar.name}
          export type ${renderName(scalar.name)}Decoded = ${$.$$Utilities}.Schema.Scalar.GetDecoded<${
          renderName(scalar.name)
        }_>
          export type ${renderName(scalar.name)}Encoded = ${$.$$Utilities}.Schema.Scalar.GetEncoded<${
          renderName(scalar.name)
        }_>
        `
        code``
      }
    }

    code`export * from '${config.paths.imports.grafflePackage.scalars}'`
    code``

    if (isNeedCustomScalarDefaults) {
      if (config.lint.missingCustomScalarCodec) {
        console.log(
          `WARNING: Custom scalars detected in the schema, but you have not created a custom scalars module to import implementations from.`,
        )
      }

      for (const scalar of config.schema.kindMap.list.ScalarCustom) {
        code(typeTitle2(`custom scalar type`)(scalar))
        code``
        code`export type ${renderName(scalar.name)} = ${$.$$Utilities}.Schema.Scalar.ScalarCodecless<'${scalar.name}'>`
        // code(`import type { String as ${scalar.name} } from '${config.paths.imports.grafflePackage.scalars}'`)
        // code()
        // code(`export { String as ${scalar.name} } from '${config.paths.imports.grafflePackage.scalars}'`)
        // code(`export type ${scalar.name}Decoded = Schema.Scalar.GetDecoded<${scalar.name}>`)
        // code(`export type ${scalar.name}Encoded = Schema.Scalar.GetEncoded<${scalar.name}>`)
        // code()
      }
    }
    code``

    code(Tex.title1(`Registry`))
    code``

    const runtimeMap = config.options.customScalars
      ? config.schema.kindMap.list.ScalarCustom.map(_ => {
        return [_.name, `${$.CustomScalars}.${_.name}`]
      })
      : {}

    const buildtimeMap = config.options.customScalars
      ? config.schema.kindMap.list.ScalarCustom.map(_ => {
        return [_.name, renderName(_.name) + `_`]
      })
      : {}

    code`
      export const $registry = {
        map: ${Code.termObject(runtimeMap)},
      } as $Registry
    `
    code``

    const typeScalarRegistry = config.options.customScalars
      // dprint-ignore
      ? `$$Utilities.Schema.Scalar.Registry<
          ${Code.termObject(buildtimeMap)},
          ${Code.tsUnionItems(config.schema.kindMap.list.ScalarCustom.map(_ => `${$.$$Utilities}.Schema.Scalar.GetEncoded<${renderName(_.name)}_>`))},
          ${Code.tsUnionItems(config.schema.kindMap.list.ScalarCustom.map(_ => `${$.$$Utilities}.Schema.Scalar.GetDecoded<${renderName(_.name)}_>`))},
        >`
      : `$$Utilities.Schema.Scalar.Registry.Empty`

    code(Code.tsAlias$({
      name: `$Registry`,
      type: typeScalarRegistry,
    }))
  },
)
