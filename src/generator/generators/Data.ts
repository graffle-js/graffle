import { createModuleGenerator } from '../helpers/moduleGenerator.js'

export const ModuleGeneratorData = createModuleGenerator(
  `data`,
  ({ config, code }) => {
    const defaultSchemaUrl = config.options.defaultSchemaUrl
      ? `new URL("${config.options.defaultSchemaUrl.href}")`
      : `undefined`

    code`
      /**
       * The name of the GraphQL schema.
       *
       * Used internally for client identification and configuration.
       */
      export const Name = \`${config.name}\`

      /**
       * The name of the GraphQL schema as a type.
       */
      export type Name = '${config.name}'

      /**
       * The default URL of the GraphQL schema endpoint.
       *
       * Used as the default transport target when creating a client
       * without explicit URL configuration.
       */
      export const defaultSchemaUrl = ${defaultSchemaUrl}
    `
  },
)
