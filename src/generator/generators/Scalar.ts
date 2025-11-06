import { GraphqlKit } from '#src/lib/graphql-kit/_.js'
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
    const isNeedCustomScalarDefaults = GraphqlKit.Schema.Kind.KindMap.hasCustomScalars(config.schema.kindMap)
      && !config.options.customScalars

    // TODO: to get this information we would need to parse the exports of the module with tsc.

    // const syncCheckResult = {
    //   inSchemaButMissingImplementation:
    //   inImplementationButMissingInSchema:
    // }

    // Need runtime import if we have codecless scalars (for Codec.create())
    const needRuntimeImport = isNeedCustomScalarDefaults
    code(
      Str.Code.TS.importAll({
        as: $.$$Utilities,
        from: config.paths.imports.grafflePackage.utilitiesForGenerated,
        type: !needRuntimeImport,
      }),
    )

    if (GraphqlKit.Schema.Kind.KindMap.hasCustomScalars(config.schema.kindMap) && config.options.customScalars) {
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
          Str.Code.TS.typeAlias$({
            name: `${scalar.name}Decoded`,
            type: `${$.$$Utilities}.Codec.GetDecoded<${dualExportResult.internalName}['codec']>`,
            export: true,
          }),
        )
        code(Str.Code.TSDoc.format(getScalarEncodedDoc(scalar.name)))
        code(
          Str.Code.TS.typeAlias$({
            name: `${scalar.name}Encoded`,
            type: `${$.$$Utilities}.Codec.GetEncoded<${dualExportResult.internalName}['codec']>`,
            export: true,
          }),
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

        // Create a scalar with identity codec (no-op encode/decode)
        const scalarType = `${$.$$Utilities}.GraphqlKit.Schema.Type.Scalar<'${scalar.name}', string, string>`
        const identityCodecValue =
          `{ kind: 'Scalar', name: '${scalar.name}', codec: ${$.$$Utilities}.Codec.create({ encode: (value: any) => String(value), decode: (value: any) => String(value) }) } as ${scalarType}`

        const dualExportResult = Str.Code.TS.Reserved.dualExport({
          name: scalar.name,
          const: {
            // TODO: Use typeAnnotation option once implemented - https://github.com/jasonkuhrt/kit/issues/78
            // typeAnnotation: true,
            value: identityCodecValue,
          },
          type: {
            type: scalarType,
          },
        })

        code(dualExportResult.code)
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
      ? `$$Utilities.Schema.Scalars.Registry<
          ${Str.Code.TS.TermObject.termObject(buildtimeMap)},
          ${Str.Code.TS.unionItems(config.schema.kindMap.list.ScalarCustom.map(_ => `${$.$$Utilities}.Codec.GetEncoded<${renderName(_.name)}['codec']>`))},
          ${Str.Code.TS.unionItems(config.schema.kindMap.list.ScalarCustom.map(_ => `${$.$$Utilities}.Codec.GetDecoded<${renderName(_.name)}['codec']>`))},
        >`
      : `$$Utilities.Schema.Scalars.Registry.Empty`

    code(Str.Code.TS.typeAlias$({
      name: `$Registry`,
      type: typeScalarRegistry,
      tsDoc: getScalarRegistryTypeDoc(),
    }))
  },
)
