import * as Path from 'node:path'
import type { InputImportFormat } from '../config/configInit.js'

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
export const detectDefaultImportFormat = async (cwd: string): Promise<InputImportFormat | null> => {
  try {
    // Dynamic import - graceful failure if typescript not available
    const ts = await import(`typescript`)

    const configPath = ts.findConfigFile(cwd, ts.sys.fileExists, `tsconfig.json`)
    if (!configPath) return null

    const configFile = ts.readConfigFile(configPath, ts.sys.readFile)
    if (configFile.error) return null

    const parsed = ts.parseJsonConfigFileContent(
      configFile.config,
      ts.sys,
      Path.dirname(configPath),
    )

    const moduleResolution = parsed.options.moduleResolution?.toString().toLowerCase()

    // Pattern 1: Bundler mode → no extensions needed
    if (moduleResolution === `bundler`) {
      return `noExtension`
    }

    // Pattern 2 & 3: Node16/NodeNext → check package.json
    if (moduleResolution === `node16` || moduleResolution === `nodenext`) {
      const packageJson = await readPackageJson(cwd)
      return packageJson?.type === `module` ? `jsExtension` : `noExtension`
    }

    return null // No strong opinion for other modes
  } catch {
    return null // TypeScript not available or read failed
  }
}

/**
 * Reads and parses package.json from the given directory.
 *
 * @param cwd - Directory containing package.json
 * @returns Parsed package.json or null if not found/invalid
 */
const readPackageJson = async (cwd: string): Promise<{ type?: string } | null> => {
  try {
    const fs = await import(`node:fs/promises`)
    const content = await fs.readFile(Path.join(cwd, `package.json`), `utf-8`)
    return JSON.parse(content)
  } catch {
    return null
  }
}
