import type { JsonObject } from 'type-fest'
import { type Fs, readJsonFile } from './fsp.js'

export interface Formatter {
  formatText(content: string, customFormatterConfig?: object): Promise<string>
}

export const passthroughFormatter: Formatter = {
  formatText: (content) => Promise.resolve(content),
}

export const getTypeScriptFormatter = async (fs: Fs): Promise<Formatter | null> => {
  return await getTypeScriptFormatterDprint(fs) ?? await getTypeScriptFormatterPrettier()
}

export const getTypeScriptFormatterPrettier = async (): Promise<Formatter | null> => {
  try {
    const prettier = await import(`prettier`)
    return {
      formatText: (content) => prettier.format(content, { parser: `typescript` }),
    }
  } catch {
    return null
  }
}

/**
 * Attempt to get a TypeScript formatter using dynamic imports. If none succeed then returns null.
 *
 * This allows users to bring their own formatters (within an allow list of what we try to dynamically import).
 */
export const getTypeScriptFormatterDprint = async (fs: Fs): Promise<Formatter | null> => {
  try {
    const { createFromBuffer } = await import(`@dprint/formatter`)
    const { getPath } = await import(`@dprint/typescript`)
    const formatter = createFromBuffer(await fs.readFile(getPath()) as BufferSource)
    // todo handle failing to read configuration file gracefully. Don't swallow those errors.
    // TODO don't read config file manually? https://github.com/dprint/js-formatter/issues/13
    const localConfig = await readJsonFile<{ typescript?: JsonObject }>(fs, `dprint.json`) ?? {}
    return {
      formatText: async (fileText, customFormatterConfig) => {
        // Skip formatting for very large files to avoid dprint stack overflow
        // Large generated files can be formatted with dprint CLI afterwards
        const MAX_SIZE_FOR_DPRINT = 5 * 1024 * 1024 // 5MB
        if (fileText.length > MAX_SIZE_FOR_DPRINT) {
          console.warn(
            `Skipping dprint formatting for large file (${
              (fileText.length / 1024 / 1024).toFixed(1)
            }MB). Format with dprint CLI afterwards.`,
          )
          return fileText
        }

        const overrideConfig = {
          ...localConfig.typescript,
          ...customFormatterConfig,
        }
        const contentFormatted = formatter.formatText({
          filePath: `memory.ts`,
          fileText,
          overrideConfig,
        })
        return contentFormatted
      },
    }
  } catch {
    return null
  }
}
