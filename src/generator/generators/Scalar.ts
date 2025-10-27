import { Grafaid } from '#lib/grafaid'

import { CodeGraphQL } from '#src/lib/CodeGraphQL.js'
import { Str } from '@wollybeard/kit'
import { $ } from '../helpers/identifiers.js'
import {
  getScalarCodecDoc,
  getScalarDecodedDoc,
  getScalarEncodedDoc,
  getScalarRegistryDoc,
  getScalarRegistryTypeDoc,
} from '../helpers/jsdoc.js'
import { createModuleGenerator } from '../helpers/moduleGenerator.js'
import { importUtilities } from '../helpers/pathHelpers.js'
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

    code(importUtilities(config))

    if (Grafaid.Schema.KindMap.hasCustomScalars(config.schema.kindMap) && config.options.customScalars) {
      code`
        import * as ${$.CustomScalars} from '${config.paths.imports.scalars}'
      `

      for (const scalar of config.schema.kindMap.list.ScalarCustom) {
        code(typeTitle2(`custom scalar type`)(scalar))
        code``

        const dualExportResult = Str.Code.TS.Reserved.dualExport({
          name: scalar.name,
          const: {
            value: `${$.CustomScalars}.${scalar.name}`,
            tsDoc: getScalarCodecDoc(scalar.name),
          },
          type: {
            type: `typeof ${$.CustomScalars}.${scalar.name}`,
          },
        })

        code(dualExportResult.code)
        code(Str.Code.TSDoc.format(getScalarDecodedDoc(scalar.name)))
        code(
          CodeGraphQL.tsTypeExport(
            `${scalar.name}Decoded`,
            `${$.$$Utilities}.Schema.Scalar.GetDecoded<${dualExportResult.internalName}>`,
          ),
        )
        code(Str.Code.TSDoc.format(getScalarEncodedDoc(scalar.name)))
        code(
          CodeGraphQL.tsTypeExport(
            `${scalar.name}Encoded`,
            `${$.$$Utilities}.Schema.Scalar.GetEncoded<${dualExportResult.internalName}>`,
          ),
        )
        code``
      }
    }

    code(Str.Code.TS.reexportAll({ from: config.paths.imports.grafflePackage.scalars }))
    code``

    if (isNeedCustomScalarDefaults) {
      if (config.lint.missingCustomScalarCodec) {
        console.log(
          `WARNING: Custom scalars detected in the schema, but you have not created a custom scalars module to import implementations from. Create one at: ${config.paths.project.inputs.scalars}`,
        )
      }

      for (const scalar of config.schema.kindMap.list.ScalarCustom) {
        code(typeTitle2(`custom scalar type`)(scalar))
        code``
        code(CodeGraphQL.tsTypeExport(scalar.name, `${$.$$Utilities}.Schema.Scalar.ScalarCodecless<'${scalar.name}'>`))
        // code(`import type { String as ${scalar.name} } from '${config.paths.imports.grafflePackage.scalars}'`)
        // code()
        // code(`export { String as ${scalar.name} } from '${config.paths.imports.grafflePackage.scalars}'`)
        // code(`export type ${scalar.name}Decoded = Schema.Scalar.GetDecoded<${scalar.name}>`)
        // code(`export type ${scalar.name}Encoded = Schema.Scalar.GetEncoded<${scalar.name}>`)
        // code()
      }
    }
    code``

    code(Str.Code.TS.Comment.title1(`Registry`))
    code``

    const runtimeMap = config.options.customScalars
      ? config.schema.kindMap.list.ScalarCustom.map(_ => {
        return [_.name, `${$.CustomScalars}.${_.name}`]
      })
      : {}

    const buildtimeMap = config.options.customScalars
      ? config.schema.kindMap.list.ScalarCustom.map(_ => {
        return [_.name, renderName(_.name)]
      })
      : {}

    code(Str.Code.TSDoc.format(getScalarRegistryDoc()))
    code`
      export const $registry = {
        map: ${Str.Code.TS.TermObject.termObject(runtimeMap)},
      } as $Registry
    `
    code``

    const typeScalarRegistry = config.options.customScalars
      // dprint-ignore
      ? `$$Utilities.Schema.Scalar.Registry<
          ${Str.Code.TS.TermObject.termObject(buildtimeMap)},
          ${Str.Code.TS.unionItems(config.schema.kindMap.list.ScalarCustom.map(_ => `${$.$$Utilities}.Schema.Scalar.GetEncoded<${renderName(_.name)}>`))},
          ${Str.Code.TS.unionItems(config.schema.kindMap.list.ScalarCustom.map(_ => `${$.$$Utilities}.Schema.Scalar.GetDecoded<${renderName(_.name)}>`))},
        >`
      : `$$Utilities.Schema.Scalar.Registry.Empty`

    code(CodeGraphQL.tsAlias$({
      name: `$Registry`,
      type: typeScalarRegistry,
      tsDoc: getScalarRegistryTypeDoc(),
    }))
  },
)
