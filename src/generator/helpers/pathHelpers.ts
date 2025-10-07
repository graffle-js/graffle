import { Code } from '#src/lib/Code.js'
import type { Config } from '../config/config.js'
import { $ } from './identifiers.js'

/**
 * Computes the import path from a source file to a target module specifier.
 *
 * This handles:
 * - Bare module specifiers (package imports): Kept as-is with extension added
 * - Relative paths: Calculating proper depth (number of ../ needed) from the source file's location
 * - Respecting the config's importFormat setting (.js/.ts/no extension)
 *
 * @param config - Generator config containing importFormat settings
 * @param sourceFilePath - Path of source file relative to modules/ directory
 *   Examples: "schema/scalars/Date.ts", "schema/objects/Pokemon/fields.ts"
 * @param targetModuleSpecifier - Target module specifier (bare or relative, without extension)
 *   Examples: "graffle/utilities-for-generated", "../scalar"
 * @returns Import path with correct extension based on config
 *   Examples: "graffle/utilities-for-generated", "../../scalar.js"
 */
export const getRelativeImportPath = (
  config: Config,
  sourceFilePath: string,
  targetModuleSpecifier: string,
): string => {
  // Check if this is a bare module specifier (package import)
  // Bare specifiers don't start with '.', '/', or '~', OR they start with '#' (subpaths)
  const isBareSpecifier = (!targetModuleSpecifier.startsWith('.')
    && !targetModuleSpecifier.startsWith('/')
    && !targetModuleSpecifier.startsWith('~'))
    || targetModuleSpecifier.startsWith('#')

  // If it's a bare specifier, return it as-is (no extension needed for package imports)
  if (isBareSpecifier) {
    return targetModuleSpecifier
  }

  // For relative/absolute paths, apply the relative path logic
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
 * Convenience function to get the import path to the utilities module.
 * This is a common operation in generated files that need to import runtime utilities.
 *
 * @param config - Generator config
 * @param sourceFilePath - Path of source file relative to modules/ directory
 *   Examples: "schema/scalars/Date.ts", "schema/objects/Pokemon/fields.ts"
 * @returns Import path to utilities with correct extension
 *   Example: "graffle/utilities-for-generated" (when using bare specifier in config)
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

/**
 * Apply import extension to a path based on config.importFormat setting.
 * Strips any existing .ts or .js extension before applying the configured extension.
 *
 * @param config - Generator config containing importFormat setting
 * @param path - Path without or with extension
 * @returns Path with correct extension based on config
 *
 * @example
 * ```typescript
 * applyImportExtension(config, './scalar') // './scalar.js' (jsExtension)
 * applyImportExtension(config, './scalar.js') // './scalar.js' (jsExtension)
 * applyImportExtension(config, './scalar') // './scalar' (noExtension)
 * ```
 */
export const applyImportExtension = (config: Config, path: string): string => {
  // Check if this is a bare module specifier (package import)
  // Bare specifiers don't need extensions, OR they start with '#' (subpaths)
  const isBareSpecifier = (!path.startsWith('.')
    && !path.startsWith('/')
    && !path.startsWith('~'))
    || path.startsWith('#')

  if (isBareSpecifier) {
    return path
  }

  // Strip any existing extension
  const cleanPath = path.replace(/\.(ts|js)$/, '')

  // Apply extension based on config
  switch (config.importFormat) {
    case 'jsExtension':
      return `${cleanPath}.js`
    case 'tsExtension':
      return `${cleanPath}.ts`
    case 'noExtension':
      return cleanPath
    default:
      throw new Error(`Unknown import format: ${config.importFormat}`)
  }
}

/**
 * Join path segments into a single path string.
 *
 * @param segments - Path segments to join
 * @returns Joined path
 *
 * @example
 * ```typescript
 * buildPath('schema', 'scalars', 'Date') // 'schema/scalars/Date'
 * buildPath('..', '..', 'scalar') // '../../scalar'
 * ```
 */
export const buildPath = (...segments: string[]): string => {
  return segments.join('/')
}

/**
 * Build an import path with proper extension based on config.
 * Combines path building and extension application.
 *
 * @param config - Generator config containing importFormat setting
 * @param segments - Path segments to join
 * @returns Complete import path with correct extension
 *
 * @example
 * ```typescript
 * buildImportPath(config, '..', '..', 'scalar') // '../../scalar.js' (jsExtension)
 * buildImportPath(config, 'fields') // './fields.js' (jsExtension)
 * buildImportPath(config, 'schema', '$') // 'schema/$.js' (jsExtension)
 * ```
 */
export const buildImportPath = (config: Config, ...segments: string[]): string => {
  const path = buildPath(...segments)
  return applyImportExtension(config, path)
}

/**
 * Re-export all exports from a module with proper extension handling.
 *
 * @example
 * ```typescript
 * codeReexportAll(config, { from: './types' }) // export * from './types.js'
 * codeReexportAll(config, { from: './types', type: true }) // export type * from './types.js'
 * ```
 */
export const codeReexportAll = (config: Config, input: {
  from: string
  type?: boolean
}): string => {
  return Code.reexportAll({
    ...input,
    from: applyImportExtension(config, input.from),
  })
}

/**
 * Re-export all exports as a namespace with proper extension handling.
 *
 * @example
 * ```typescript
 * codeReexportNamespace(config, { as: 'Name', from: './path' })
 * // export * as Name from './path.js'
 * ```
 */
export const codeReexportNamespace = (config: Config, input: {
  as: string
  from: string
  type?: boolean
}): string => {
  return Code.reexportNamespace({
    ...input,
    from: applyImportExtension(config, input.from),
  })
}

/**
 * Re-export named exports from a module with proper extension handling.
 *
 * @example
 * ```typescript
 * codeReexportNamed(config, { names: 'Name', from: './path' })
 * // export { Name } from './path.js'
 * ```
 */
export const codeReexportNamed = (config: Config, input: {
  names: string | string[] | Record<string, string>
  from: string
  type?: boolean
}): string => {
  return Code.reexportNamed({
    ...input,
    from: applyImportExtension(config, input.from),
  })
}

/**
 * Import all exports as a namespace with proper extension handling.
 *
 * @example
 * ```typescript
 * codeImportAll(config, { as: 'Name', from: './path' })
 * // import * as Name from './path.js'
 * ```
 */
export const codeImportAll = (config: Config, input: {
  as: string
  from: string
  type?: boolean
}): string => {
  return Code.importAll({
    ...input,
    from: applyImportExtension(config, input.from),
  })
}

/**
 * Import named exports from a module with proper extension handling.
 *
 * @example
 * ```typescript
 * codeImportNamed(config, { names: 'Name', from: './path' })
 * // import { Name } from './path.js'
 * ```
 */
export const codeImportNamed = (config: Config, input: {
  names: string | string[] | Record<string, string>
  from: string
  type?: boolean
}): string => {
  return Code.importNamed({
    ...input,
    from: applyImportExtension(config, input.from),
  })
}
