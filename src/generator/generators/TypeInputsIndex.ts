import { Grafaid } from '#lib/grafaid'
import { Tex } from '#lib/tex'
import { Str } from '@wollybeard/kit'
import { CodeGraphQL } from '#src/lib/CodeGraphQL.js'
import type { Config } from '../config/config.js'
import { $ } from '../helpers/identifiers.js'
import { createModuleGenerator } from '../helpers/moduleGenerator.js'
import { importUtilities } from '../helpers/pathHelpers.js'
import { renderName } from '../helpers/render.js'

export const ModuleGeneratorTypeInputsIndex = createModuleGenerator(
  `type-inputs-index`,
  import.meta.url,
  ({ config, code }) => {
    // Only import utilities if we need them (for GetEncoded type)
    if (config.options.isImportsCustomScalars && Grafaid.Schema.KindMap.hasCustomScalars(config.schema.kindMap)) {
      code(importUtilities(config))
    }

    // Import custom scalar implementations if available
    if (config.options.isImportsCustomScalars) {
      code`
        import type * as ${$.CustomScalars} from '${config.paths.imports.scalars}'
      `
    }

    code``
    code(Tex.title1(`Type Inputs Index`))
    code`
      /**
       * Mapping of GraphQL type names to their TypeScript input types.
       * This is used for O(1) type lookups during variable type inference.
       */
    `

    // Generate module-level type definitions first

    // Standard scalars
    code`// Standard GraphQL scalars`
    code`export type String = string`
    code`export type Int = number`
    code`export type Float = number`
    code`export type Boolean = boolean`
    code`export type ID = string`

    // Custom scalars - always reference the scalar module types
    if (Grafaid.Schema.KindMap.hasCustomScalars(config.schema.kindMap)) {
      code``
      code`// Custom scalars (decoded types for variables)`
      for (const scalar of config.schema.kindMap.list.ScalarCustom) {
        const scalarName = scalar.name
        const safeName = renderName(scalarName)
        if (config.options.isImportsCustomScalars) {
          // Use the decoded type from the custom scalar implementation (for variable inputs)
          code`export type ${safeName} = ${$.$$Utilities}.Schema.Scalar.GetDecoded<typeof ${$.CustomScalars}.${scalarName}>`
        } else {
          // Use string for ScalarCodecless types (their encoded type is always string)
          code`export type ${safeName} = string`
        }
      }
    }

    // Enums
    if (config.schema.kindMap.list.Enum.length > 0) {
      code``
      code`// Enums`
      for (const enumType of config.schema.kindMap.list.Enum) {
        const members = enumType.getValues().map(v => CodeGraphQL.string(v.name)).join(' | ')
        const safeName = renderName(enumType.name)
        code`export type ${safeName} = ${members}`
      }
    }

    // Input Objects
    if (config.schema.kindMap.list.InputObject.length > 0) {
      code``
      code`// Input objects`
      for (const inputObject of config.schema.kindMap.list.InputObject) {
        const safeName = renderName(inputObject.name)
        code`export type ${safeName} = ${generateInputObjectType(config, inputObject)}`
      }
    }

    // Export the index interface with $ prefix to avoid collisions
    code``
    code`// Index interface`
    code`export interface $TypeInputsIndex {`

    // Standard scalars
    code`  String: String`
    code`  Int: Int`
    code`  Float: Float`
    code`  Boolean: Boolean`
    code`  ID: ID`

    // Custom scalars
    for (const scalar of config.schema.kindMap.list.ScalarCustom) {
      const safeName = renderName(scalar.name)
      code`  ${scalar.name}: ${safeName}`
    }

    // Enums
    for (const enumType of config.schema.kindMap.list.Enum) {
      const safeName = renderName(enumType.name)
      code`  ${enumType.name}: ${safeName}`
    }

    // Input objects
    for (const inputObject of config.schema.kindMap.list.InputObject) {
      const safeName = renderName(inputObject.name)
      code`  ${inputObject.name}: ${safeName}`
    }

    code`}`
    code``
    code`// Export without $ prefix for use in other generated modules`
    code`export type { $TypeInputsIndex as TypeInputsIndex }`
  },
)

/**
 * Generate the TypeScript type for an input object
 */
function generateInputObjectType(config: Config, inputObject: Grafaid.Schema.InputObjectType): string {
  const fields = Object.values(inputObject.getFields())

  if (fields.length === 0) {
    return '{ [key: string]: never }'
  }

  const fieldTypes = fields.map(field => {
    const fieldType = Grafaid.Schema.getNamedType(field.type)
    // Use renderName to handle reserved keywords
    const typeName = renderName(fieldType.name)
    const isNullable = Grafaid.Schema.isNullableType(field.type)
    const fieldName = field.name
    const optionalMarker = isNullable ? '?' : ''

    return `    ${fieldName}${optionalMarker}: ${typeName}`
  }).join('\n')

  return `{\n${fieldTypes}\n  }`
}
