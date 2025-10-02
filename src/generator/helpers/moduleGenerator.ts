import { camelCase, kebabCase, pascalCase, snakeCase } from 'es-toolkit'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { markdownToJsDoc } from '../../lib/md-jsdoc/md-jsdoc.js'
import { casesExhausted } from '../../lib/prelude.js'
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
  /**
   * Optional source file URL (from import.meta.url) for documentation detection.
   * If provided and a corresponding .docs.md file exists, documentation will be auto-injected.
   */
  sourceFileUrlOrRunner: string | ModuleGeneratorRunnerImplementation,
  runnerImplementation?: ModuleGeneratorRunnerImplementation,
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
  /**
   * Optional custom file path relative to modules directory.
   * If provided, overrides the default path construction.
   * Example: "schema/types/Query/fields.ts"
   */
  filePath?: string
}

export const createModuleGenerator: FactoryModuleGenerator = (name, sourceFileUrlOrRunner, runnerImplementation) => {
  // Handle both old and new signatures
  let sourceFileUrl: string | undefined
  let actualRunner: ModuleGeneratorRunnerImplementation

  if (typeof sourceFileUrlOrRunner === 'function') {
    // Old signature: (name, runner)
    actualRunner = sourceFileUrlOrRunner
    sourceFileUrl = undefined
  } else {
    // New signature: (name, sourceFileUrl, runner)
    sourceFileUrl = sourceFileUrlOrRunner
    actualRunner = runnerImplementation!
  }

  const runner = createCodeGenerator(actualRunner)

  // Check for documentation file
  let docHeader: string | undefined
  if (sourceFileUrl) {
    const sourcePath = fileURLToPath(sourceFileUrl)
    const sourceDir = path.dirname(sourcePath)
    const sourceBaseName = path.basename(sourcePath, path.extname(sourcePath))
    const docsPath = path.join(sourceDir, `${sourceBaseName}.docs.md`)

    if (fs.existsSync(docsPath)) {
      const markdown = fs.readFileSync(docsPath, 'utf-8')
      const generatorPath = path.relative(process.cwd(), sourcePath)
      docHeader = markdownToJsDoc(markdown, {
        moduleName: name,
        generatorPath,
      })
    }
  }

  const generate: ModuleGeneratorRunner = (config) => {
    const content = runner({ config })
    const finalContent = docHeader ? `${docHeader}\n\n${content}` : content
    return {
      content: finalContent,
      name,
    }
  }

  return {
    name,
    generate,
  }
}

export const importModuleGenerator = (config: Config, generator: ModuleGenerator, typeOnly?: boolean) => {
  return `import${typeOnly ? ` type` : ``} * as $$${pascalCase(generator.name)} from './${
    getImportName(config, generator)
  }'`
}

export const getBaseName = (config: Config, generator: ModuleGenerator | GeneratedModule) => {
  if (isExportsModule(generator.name)) {
    return generator.name
  }

  // Handle paths (e.g., "schema/$" should become "schema/$", not "schema-dollar")
  if (generator.name.includes('/')) {
    return generator.name
  }

  return caseFormatters[config.outputCase](generator.name)
}

export const getFileName = (config: Config, generator: ModuleGenerator | GeneratedModule) => {
  const name = getBaseName(config, generator)
  return `${name}.ts`
}

export const getImportName = (config: Config, generator: ModuleGenerator | GeneratedModule) => {
  const name = getBaseName(config, generator)
  switch (config.importFormat) {
    case `jsExtension`:
      return `${name}.js`
    case `tsExtension`:
      return `${name}.ts`
    case `noExtension`:
      return name
    default:
      throw casesExhausted(config.importFormat)
  }
}

export const caseFormatters = {
  pascal: pascalCase,
  camel: camelCase,
  kebab: kebabCase,
  snake: snakeCase,
}

export const isExportsModule = (name: string) => name.match(/^(\$\$?)$/) !== null
