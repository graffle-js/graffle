import { Err } from '@wollybeard/kit'
import type * as Fs from 'node:fs/promises'
import { dirname, extname, isAbsolute, join } from 'node:path'
import type { JsonValue } from 'type-fest'

export type Fs = typeof Fs

export const statMaybeExists = async (fs: Fs, path: string) => {
  return await fs.stat(path).catch((_: unknown) => {
    const error = Err.ensure(_)
    return `code` in error && typeof error.code === `string` && error.code === `ENOENT`
      ? null
      : Promise.reject(error)
  })
}

export const fileExists = async (fs: Fs, path: string) => {
  return Boolean(await statMaybeExists(fs, path))
}

export const isPathToADirectory = async (fs: Fs, path: string) => {
  const stat = await fs.stat(path)
  return stat.isDirectory()
}

export const toAbsolutePath = (cwd: string, maybeAbsolutePath: string) =>
  isAbsolute(maybeAbsolutePath) ? maybeAbsolutePath : join(cwd, maybeAbsolutePath)

const isFileLikePath = (path: string) => {
  return Boolean(extname(path))
}

export const toFilePath = (fileName: string, path: string) => {
  if (isFileLikePath(path)) {
    return path
  } else {
    return join(path, fileName)
  }
}

export const readJsonFile = async <$Json extends JsonValue>(fs: Fs, path: string): Promise<$Json | null> => {
  let content: string

  try {
    content = await fs.readFile(path, `utf8`)
  } catch {
    return null
  }

  return JSON.parse(content) as $Json
}

// export const toFileChecked = async (fileName: string, path: string) => {
//   if (isFileLikePath(path)) {
//     return path
//   } else {
//     return join(path, fileName)
//   }
// }

/**
 * Creates a directory (and any parent directories) if they don't exist,
 * then writes the file with the given content
 */
export const writeFileAndCreateDir = async (fs: Fs, filePath: string, content: string): Promise<void> => {
  const dirPath = dirname(filePath)
  await fs.mkdir(dirPath, { recursive: true })
  await fs.writeFile(filePath, content)
}
