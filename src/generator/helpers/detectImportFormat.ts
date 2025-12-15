import { FileSystem } from '@effect/platform'
import { Fs } from '@wollybeard/kit'
import { Effect } from 'effect'
import type { InputImportFormat } from '../config/configInit.js'

const p = Fs.Path.fromLiteral

/**
 * Detects the appropriate import format based on the user's TypeScript configuration.
 *
 * Detection logic:
 * 1. If `moduleResolution: "bundler"` → `noExtension` (bundlers resolve automatically)
 * 2. If `moduleResolution: "node16"/"nodenext"` → check package.json:
 *    - `type: "module"` → `jsExtension` (Node ESM requires extensions)
 *    - Otherwise → `noExtension` (CJS doesn't require extensions)
 * 3. Otherwise → `null` (use fallback default)
 *
 * Gracefully handles:
 * - Missing TypeScript package (dynamic import failure)
 * - Missing tsconfig.json
 * - Missing package.json
 * - Parse errors
 *
 * @param cwd - Current working directory to search for config files
 * @returns Detected import format, or null if detection failed/inconclusive
 */
export const detectDefaultImportFormat = (
  cwd: Fs.Path.AbsDir,
): Effect.Effect<InputImportFormat | null, never, FileSystem.FileSystem> =>
  Effect.gen(function*() {
    // Dynamic import - graceful failure if typescript not available
    const ts = yield* Effect.tryPromise({
      try: () => import(`typescript`),
      catch: () => null,
    })
    if (!ts) return null

    const configPath = ts.findConfigFile(cwd.toString(), ts.sys.fileExists, `tsconfig.json`)
    if (!configPath) return null

    const configFile = ts.readConfigFile(configPath, ts.sys.readFile)
    if (configFile.error) return null

    const configDir = Fs.Path.toDir(Fs.Path.AbsFile.fromString(configPath))
    const parsed = ts.parseJsonConfigFileContent(
      configFile.config,
      ts.sys,
      configDir.toString(),
    )

    const moduleResolution = parsed.options.moduleResolution?.toString().toLowerCase()

    // Pattern 1: Bundler mode → no extensions needed
    if (moduleResolution === `bundler`) {
      return `noExtension`
    }

    // Pattern 2 & 3: Node16/NodeNext → check package.json
    if (moduleResolution === `node16` || moduleResolution === `nodenext`) {
      const packageJson = yield* readPackageJson(cwd)
      return packageJson?.type === `module` ? `jsExtension` : `noExtension`
    }

    return null // No strong opinion for other modes
  }).pipe(Effect.catchAll(() => Effect.succeed(null)))

/**
 * Reads and parses package.json from the given directory.
 *
 * @param cwd - Directory containing package.json
 * @returns Parsed package.json or null if not found/invalid
 */
const readPackageJson = (
  cwd: Fs.Path.AbsDir,
): Effect.Effect<{ type?: string } | null, never, FileSystem.FileSystem> =>
  Effect.gen(function*() {
    const packageJsonPath = Fs.Path.join(cwd, p(`./package.json`))
    const content = yield* Fs.readString(packageJsonPath)
    return JSON.parse(content) as { type?: string }
  }).pipe(Effect.catchAll(() => Effect.succeed(null)))
