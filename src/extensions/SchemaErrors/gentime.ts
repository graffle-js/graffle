import { Extension } from '#graffle/extension'
import type { Config as GeneratorConfig } from '#src/generator/config/config.js'
import { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import { ConfigManager, Syn } from '@wollybeard/kit'

// Augment global extension interfaces
declare global {
  namespace GraffleGlobal {
    namespace LIBRARY_GRAPHQL_KIT {
      interface OutputObject {
        /** Error object flag - 1 if this is an error type */
        isErrorObject?: 1
      }

      interface OutputField {
        /** Result union flag - 1 if this field returns a union containing error types */
        isResultField?: 1
      }
    }
  }
}

interface Input {
  isErrorType?: (value: GraphqlKit.Schema.Runtime.Nodes.ObjectType) => boolean
}

interface Config {
  isErrorType: (value: GraphqlKit.Schema.Runtime.Nodes.ObjectType) => boolean
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
        objectNames: errorObjects.map(type => Syn.TS.string(type.name)).join(` | `),
      }
    },
    schemaDrivenDataMap: {
      onObjectType: ({ config: genConfig, sddmNode, graphqlType }) => {
        const errorObjects = getErrorObjects(config, genConfig)

        if (errorObjects.find(_ => _.name === graphqlType.name)) {
          const extenssions = (sddmNode['extensions'] ?? {}) as Record<'isErrorObject', number>
          sddmNode['extensions'] ??= extenssions
          extenssions.isErrorObject = 1
        }
      },
      onOutputField: ({ config: genConfig, sddmNode, graphqlType }) => {
        const errorObjects = getErrorObjects(config, genConfig)
        const outputFieldNamedType = GraphqlKit.Schema.Runtime.getNamedType(graphqlType.type)
        const memberTypes = GraphqlKit.Schema.Runtime.Nodes.isUnionType(outputFieldNamedType)
          ? outputFieldNamedType.getTypes()
          : null

        if (memberTypes && errorObjects.find(_ => memberTypes.find(__ => __.name === _.name))) {
          const extenssions = (sddmNode.$fields['extensions'] ?? {}) as Record<'isResultField', number>
          sddmNode.$fields['extensions'] ??= extenssions
          extenssions.isResultField = 1
        }
      },
    },
  })
}

// todo memoize
const getErrorObjects = (config: Config, genConfig: GeneratorConfig) => {
  return Object.values(genConfig.schema.kindMap.list.OutputObject).filter(config.isErrorType)
}
