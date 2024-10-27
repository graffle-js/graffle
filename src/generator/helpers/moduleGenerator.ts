import { camelCase, kebabCase, pascalCase, snakeCase } from 'es-toolkit'
import type { Config } from '../config/config.js'
import {
  createCodeGenerator,
  type ModuleGeneratorRunner,
  type ModuleGeneratorRunnerImplementation,
} from './moduleGeneratorRunner.js'

export type FactoryModuleGenerator = <$Name extends string>(
  /**
   * The name of the file that will be written to disk.
   */
  name: $Name,
  runnerImplementation: ModuleGeneratorRunnerImplementation,
) => ModuleGenerator<$Name>

export interface ModuleGenerator<$Name extends string = string> {
  /**
   * The name of the file that will be written to disk.
   */
  name: $Name
  generate: ModuleGeneratorRunner
}

export interface GeneratedModule<$Name extends string = string> {
  name: $Name
  content: string
}

export const createModuleGenerator: FactoryModuleGenerator = (name, runnerImplementation) => {
  const runner = createCodeGenerator(runnerImplementation)

  const generate: ModuleGeneratorRunner = (config) => {
    const content = runner({ config })
    return {
      content,
      name,
    }
  }

  return {
    name,
    generate,
  }
}

export const importModuleGenerator = (config: Config, generator: ModuleGenerator) => {
  return `import * as $$${pascalCase(generator.name)} from './${getImportName(config, generator)}'`
}

export const getBaseName = (config: Config, generator: ModuleGenerator | GeneratedModule) => {
  return isExportsModule(generator.name)
    ? generator.name
    : caseFormatters[config.outputCase](generator.name)
}

export const getFileName = (config: Config, generator: ModuleGenerator | GeneratedModule) => {
  const name = getBaseName(config, generator)
  return `${name}.ts`
}

export const getImportName = (config: Config, generator: ModuleGenerator | GeneratedModule) => {
  const name = getBaseName(config, generator)
  return `${name}.js`
}

export const caseFormatters = {
  pascal: pascalCase,
  camel: camelCase,
  kebab: kebabCase,
  snake: snakeCase,
}

export const isExportsModule = (name: string) => name.match(/^_+$/) !== null
