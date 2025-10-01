import { Code } from '../../lib/Code.js'
import type { Config } from '../config/config.js'
import { $ } from './identifiers.js'

/**
 * Computes relative import path from a source file to a target module specifier.
 *
 * This handles:
 * - Calculating proper depth (number of ../ needed) from the source file's location
 * - Respecting the config's importFormat setting (.js/.ts/no extension)
 * - Working with bare module specifiers that get resolved through the module system
 *
 * @param config - Generator config containing importFormat settings
 * @param sourceFilePath - Path of source file relative to modules/ directory
 *   Examples: "schema/scalars/Date.ts", "schema/objects/Pokemon/fields.ts"
 * @param targetModuleSpecifier - Target bare module specifier (without extension)
 *   Examples: "graffle/utilities-for-generated", "../scalar"
 * @returns Relative import path with correct extension based on config
 *   Examples: "../../../graffle/utilities-for-generated.js", "../../scalar.js"
 */
export const getRelativeImportPath = (
  config: Config,
  sourceFilePath: string,
  targetModuleSpecifier: string,
): string => {
  // Calculate depth from the source file path
  // Count the number of directory separators to determine nesting level
  const pathSegments = sourceFilePath.split('/')
  const depth = pathSegments.length - 1 // Subtract 1 because the file itself doesn't count

  // Build the relative path prefix (../, ../../, etc.)
  const prefix = '../'.repeat(depth)

  // Combine prefix with target
  let combinedPath = `${prefix}${targetModuleSpecifier}`

  // Remove existing extension if present
  if (combinedPath.endsWith('.ts')) {
    combinedPath = combinedPath.slice(0, -3)
  } else if (combinedPath.endsWith('.js')) {
    combinedPath = combinedPath.slice(0, -3)
  }

  // Add appropriate extension based on config
  switch (config.importFormat) {
    case 'jsExtension':
      return `${combinedPath}.js`
    case 'tsExtension':
      return `${combinedPath}.ts`
    case 'noExtension':
      return combinedPath
    default:
      throw new Error(`Unknown import format: ${config.importFormat}`)
  }
}

/**
 * Convenience function to get the relative import path to the utilities module.
 * This is a common operation in generated files that need to import runtime utilities.
 *
 * @param config - Generator config
 * @param sourceFilePath - Path of source file relative to modules/ directory
 *   Examples: "schema/scalars/Date.ts", "schema/objects/Pokemon/fields.ts"
 * @returns Relative import path to utilities with correct extension
 *   Example: "../../../graffle/utilities-for-generated.js"
 */
export const getUtilitiesPath = (config: Config, sourceFilePath: string): string => {
  return getRelativeImportPath(
    config,
    sourceFilePath,
    config.paths.imports.grafflePackage.utilitiesForGenerated,
  )
}

/**
 * Generates the utilities import statement used by all generators.
 * This provides a consistent way to import the graffle utilities module.
 *
 * @param config - Generator config containing the utilities import path
 * @returns Import statement: `import type * as $$Utilities from 'path/to/utilities'`
 *
 * @example
 * ```typescript
 * code(importUtilities(config))
 * // Generates: import type * as $$Utilities from 'graffle/utilities-for-generated'
 * ```
 */
export const importUtilities = (config: Config): string => {
  return Code.importAll({
    as: $.$$Utilities,
    from: config.paths.imports.grafflePackage.utilitiesForGenerated,
    type: true,
  })
}
