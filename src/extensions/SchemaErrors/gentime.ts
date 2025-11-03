import { Extension } from '#graffle/extension'
import type { Config as GeneratorConfig } from '#src/generator/config/config.js'
import { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import { ConfigManager } from '@wollybeard/kit'
import { Str } from '@wollybeard/kit'

const propertyNames = {
  r: `r`,
  e: `e`,
}

interface Input {
  isErrorType?: (value: GraphqlKit.Schema2.Runtime.Nodes.ObjectType) => boolean
}

interface Config {
  isErrorType: (value: GraphqlKit.Schema2.Runtime.Nodes.ObjectType) => boolean
}

const defaults: Config = {
  isErrorType: (_ => Boolean(_.name.match(defaultErrorTypeNamePattern))),
}

const defaultErrorTypeNamePattern = /^Error.+/

export const SchemaErrors = (input?: Input) => {
  const config = ConfigManager.mergeDefaults(defaults, input ?? {})

  return Extension.GeneratorExtension.create({
    name: `SchemaErrors`,
    onSchema: ({ config: genConfig, schema }) => {
      const errorObjects = getErrorObjects(config, genConfig)
      schema[`SchemaErrors`] = {
        objectNames: errorObjects.map(type => Str.Code.TS.string(type.name)).join(` | `),
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
        const outputFieldNamedType = GraphqlKit.Schema.getNamedType(graphqlType.type)
        const memberTypes = GraphqlKit.Schema2.Runtime.Nodes.isUnionType(outputFieldNamedType)
          ? outputFieldNamedType.getTypes()
          : null

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
