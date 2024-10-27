import { createGeneratorExtension } from '../../entrypoints/extensionkit.js'
import type { Config as GeneratorConfig } from '../../generator/config/config.js'
import { Code } from '../../lib/Code.js'
import { ConfigManager } from '../../lib/config-manager/__.js'
import { Grafaid } from '../../lib/grafaid/__.js'

const propertyNames = {
  r: `r`,
  e: `e`,
}

interface Input {
  isErrorType?: (value: Grafaid.Schema.ObjectType) => boolean
}

interface Config {
  isErrorType: (value: Grafaid.Schema.ObjectType) => boolean
}

const defaults: Config = {
  isErrorType: (_ => Boolean(_.name.match(defaultErrorTypeNamePattern))),
}

const defaultErrorTypeNamePattern = /^Error.+/

export const SchemaErrors = (input?: Input) => {
  const config = ConfigManager.mergeDefaults(defaults, input ?? {})

  return createGeneratorExtension({
    name: `SchemaErrors`,
    onSchema: ({ config: genConfig, schema }) => {
      const errorObjects = getErrorObjects(config, genConfig)
      schema[`SchemaErrors`] = {
        objectNames: errorObjects.map(type => Code.string(type.name)).join(` | `),
      }
    },
    schemaDrivenDataMap: {
      onObjectType: ({ config: genConfig, sddmNode, graphqlType }) => {
        const errorObjects = getErrorObjects(config, genConfig)

        if (errorObjects.find(_ => _.name === graphqlType.name)) {
          sddmNode[propertyNames.e] = 1
        }
      },
      onOutputField: ({ config: genConfig, sddmNode, graphqlType }) => {
        const errorObjects = getErrorObjects(config, genConfig)
        const outputFieldNamedType = Grafaid.Schema.getNamedType(graphqlType.type)
        const memberTypes = Grafaid.Schema.isUnionType(outputFieldNamedType) ? outputFieldNamedType.getTypes() : null

        if (memberTypes && errorObjects.find(_ => memberTypes.find(__ => __.name === _.name))) {
          sddmNode.$fields[propertyNames.r] = 1
        }
      },
    },
  })
}

// todo memoize
const getErrorObjects = (config: Config, genConfig: GeneratorConfig) => {
  return Object.values(genConfig.schema.kindMap.list.OutputObject).filter(config.isErrorType)
}
