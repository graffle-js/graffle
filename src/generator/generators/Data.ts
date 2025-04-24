import { createModuleGenerator } from '../helpers/moduleGenerator.js'

export const ModuleGeneratorData = createModuleGenerator(
  `data`,
  ({ config, code }) => {
    const defaultSchemaUrl = config.options.defaultSchemaUrl
      ? `new URL("${config.options.defaultSchemaUrl.href}")`
      : `undefined`

    code`
      export const Name = \`${config.name}\`

      export type Name = '${config.name}'

      export const defaultSchemaUrl = ${defaultSchemaUrl}
    `
  },
)
