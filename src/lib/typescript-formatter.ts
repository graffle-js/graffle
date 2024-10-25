import fs from 'node:fs/promises'
import type { JsonObject } from 'type-fest'
import { readJsonFile } from './fsp.js'

export interface Formatter {
  formatText(content: string, customFormatterConfig?: object): Promise<string>
}

export const passthroughFormatter: Formatter = {
  formatText: (content) => Promise.resolve(content),
}

export const getTypeScriptFormatter = async (): Promise<Formatter | null> => {
  return await getTypeScriptFormatterDprint() ?? await getTypeScriptFormatterPrettier()
}

export const getTypeScriptFormatterPrettier = async (): Promise<Formatter | null> => {
  try {
    const prettier = await import(`prettier`)
    return {
      formatText: (content) => prettier.format(content, { parser: `typescript` }),
    }
  } catch (error) {
    return null
  }
}

/**
 * Attempt to get a TypeScript formatter using dynamic imports. If none succeed then returns null.
 *
 * This allows users to bring their own formatters (within an allow list of what we try to dynamically import).
 */
export const getTypeScriptFormatterDprint = async (): Promise<Formatter | null> => {
  try {
    const { createFromBuffer } = await import(`@dprint/formatter`)
    const { getPath } = await import(`@dprint/typescript`)
    const formatter = createFromBuffer(await fs.readFile(getPath()))
    // todo handle failing to read configuration file gracefully. Don't swallow those errors.
    // TODO don't read config file manually? https://github.com/dprint/js-formatter/issues/13
    const localConfig = await readJsonFile<{ typescript?: JsonObject }>(`dprint.json`) ?? {}
    return {
      formatText: async (fileText, customFormatterConfig) => {
        const overrideConfig = {
          ...localConfig.typescript,
          ...customFormatterConfig,
        }
        try {
          const contentFormatted = formatter.formatText({
            filePath: `memory.ts`,
            fileText,
            overrideConfig,
          })
          return contentFormatted
        } catch (error) {
          if (process.env[`DEBUG`]) {
            const path = `./syntax-error.ts`
            await fs.writeFile(path, fileText)
            console.log(`Wrote contents to ${path} for debugging.`)
          }
          throw error
        }
      },
    }
  } catch (error) {
    return null
  }
}
