import { isAbsolute, join } from 'node:path'

export const toAbsolutePath = (cwd: string, maybeAbsolutePath: string): string =>
  isAbsolute(maybeAbsolutePath) ? maybeAbsolutePath : join(cwd, maybeAbsolutePath)
