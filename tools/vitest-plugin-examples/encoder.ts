import type { EncoderFunction } from './types.js'

/**
 * Default encoder that masks dynamic values for test determinism.
 * Based on rewriteDynamicError from helpers.ts.
 */
export const defaultEncoder: EncoderFunction = (value: string) => {
  return value
    // Normalize blank lines after caret to always be single blank line for consistency
    // Node.js error output can vary between versions and environments
    .replace(/\^\n\n+/g, '^\n\n')
    // Strip file:// protocol prefix from paths for consistency
    .replace(/file:\/+/g, '')
    // Normalize file extensions: .js -> .ts (since sometimes we run built code, sometimes tsx)
    .replace(/\/([\w-]+)\.(?:js|mjs|cjs)\b/g, '/$1.ts')
    // Normalize whitespace before error carets (varies between environments)
    // Match pattern: "    return statement..." followed by "    ^" on next line
    .replace(/^(\s+)(.+)\n\1(\s*)\^/gm, (_, indent, code, caretIndent) => {
      // Normalize to consistent 11-space indent for code and caret
      return `           ${code.trim()}\n                  ^`
    })
    // Mask Node.js internal module line numbers that vary between versions
    // Match patterns like node:internal/deps/undici/undici:13510:13 or node:internal/url:825:25
    .replace(
      /\b(node:[\w/-]+):\d+:\d+/g,
      `$1:XX:XX`,
    )
    // Mask any absolute path that contains node_modules, examples, src, etc.
    // Match paths like /any/path/to/file.ts:12:34 (with line and column)
    .replace(
      /\/[\w\-/.@+]*\/([\w-]+\.(?:ts|js|mjs|cjs)):\d+:\d+/g,
      `/some/path/to/$1:XX:XX`,
    )
    // Match paths like /any/path/to/file.ts:12 (with just line number)
    .replace(
      /\/[\w\-/.@+]*\/([\w-]+\.(?:ts|js|mjs|cjs)):\d+(?!\d)/g,
      `/some/path/to/$1:XX`,
    )
    // Match paths in parentheses like (/any/path/to/file.ts:12:34)
    .replace(
      /\(\/[\w\-/.@+]*\/([\w-]+\.(?:ts|js|mjs|cjs)):\d+:\d+\)/g,
      `(/some/path/to/$1:XX:XX)`,
    )
    // Match paths without line numbers
    .replace(
      /\/[\w\-/.@+]*\/([\w-]+\.(?:ts|js|mjs|cjs))(?=\s|$)/g,
      `/some/path/to/$1`,
    )
    // When Node.js process exits via an uncaught thrown error, version is printed at bottom.
    .replace(/Node\.js v.+/g, `Node.js vXX.XX.XX`)
    // Mask HTTP date headers - common across HTTP examples
    .replace(/date: '[A-Z][a-z]{2}, \d{1,2} [A-Z][a-z]{2} \d{4} \d{2}:\d{2}:\d{2} GMT'/gi, `date: 'DYNAMIC_DATE'`)
}

/**
 * Apply encoding to example output.
 * First applies any custom encoder if provided, then applies default masking if enabled.
 */
export const applyEncoder = (
  output: string,
  customEncoder: EncoderFunction | undefined,
  maskDynamicValues: boolean,
): string => {
  let encoded = output

  // Apply custom encoder first (if provided)
  if (customEncoder) {
    encoded = customEncoder(encoded)
  }

  // Apply default masking (if enabled)
  if (maskDynamicValues) {
    encoded = defaultEncoder(encoded)
  }

  return encoded
}
