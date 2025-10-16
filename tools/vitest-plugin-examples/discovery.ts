import { Fs } from '@wollybeard/kit'
import { Effect } from 'effect'
import type { ExampleFile, ExamplesPluginConfig } from './types.js'

const defaultIgnorePatterns = [
  './examples/$',
  './examples/__outputs__',
  './examples/__outputs-new__',
  './examples/__tests__',
]

/**
 * Discover example files based on the plugin configuration.
 */
export const discoverExamples = async (config: ExamplesPluginConfig): Promise<ExampleFile[]> => {
  const pattern = config.pattern ?? './examples/*/*.ts'
  const ignore = [...defaultIgnorePatterns, ...(config.ignore ?? [])]

  // Use Kit's glob (returns Effect<FsLoc.RelFile[], Error>)
  // Import FsLoc locally to use encodeSync
  const { FsLoc } = await import('@wollybeard/kit')

  const filePaths = await Effect.runPromise(
    Fs.glob(pattern, { ignore }).pipe(
      // Convert FsLoc.RelFile to string using encodeSync
      Effect.map((files: any) => files.map((file: any) => FsLoc.encodeSync(file))),
    ),
  )

  const examples: ExampleFile[] = filePaths.map((relativePath: string) => {
    // Normalize path to start with ./
    const normalized = relativePath.startsWith('./') ? relativePath : `./${relativePath}`

    // For absolute path, just prepend cwd to the relative path
    const absolutePath = `${process.cwd()}/${normalized}`

    // Extract directory name from relative path (e.g., "./10_transport-http/file.ts" -> "10_transport-http")
    const pathParts = normalized.split('/')
    const group = pathParts.length > 1 ? pathParts[pathParts.length - 2] : 'unknown'

    // Get file name without extension
    const fileName = pathParts[pathParts.length - 1] ?? ''
    const name = fileName.replace(/\.[^/.]+$/, '')

    return {
      path: absolutePath,
      relativePath: normalized,
      name,
      group: group ?? 'unknown',
    }
  })

  return examples
}
