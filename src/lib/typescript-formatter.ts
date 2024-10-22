import fs from 'node:fs/promises'

export interface Formatter {
  formatText(content: string, customFormatterConfig?: object): Promise<string>
}

export const passthroughFormatter: Formatter = {
  formatText: (content) => Promise.resolve(content),
}

export const getTypescriptFormatterOrPassthrough = async (): Promise<Formatter> => {
  const formatter = await getTypeScriptFormatter()
  return formatter ?? passthroughFormatter
}

/**
 * Attempt to get a TypeScript formatter using dynamic imports. If none succeed then returns null.
 *
 * This allows users to bring their own formatters (within an allow list of what we try to dynamically import).
 */
export const getTypeScriptFormatter = async (): Promise<Formatter | null> => {
  try {
    const { createFromBuffer } = await import(`@dprint/formatter`)
    const { getPath } = await import(`@dprint/typescript`)
    const formatter = createFromBuffer(await fs.readFile(getPath()))
    const defaultDprintConfig = {
      quoteStyle: `preferSingle`,
      semiColons: `asi`,
    }
    return {
      formatText: async (content, customFormatterConfig) => {
        const config = {
          ...defaultDprintConfig,
          ...customFormatterConfig,
        }
        try {
          return formatter.formatText(`memory.ts`, content, config)
        } catch (error) {
          if (process.env[`DEBUG`]) {
            const path = `./syntax-error.ts`
            await fs.writeFile(path, content)
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
