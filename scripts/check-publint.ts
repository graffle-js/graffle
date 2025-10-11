#!/usr/bin/env tsx
/**
 * Wrapper for publint that filters out acceptable errors.
 *
 * We ignore errors about #test imports because:
 * - Test files are not included in the published package
 * - These imports are only used in development
 * - They're intentionally not in the package files list
 */

import { exec } from 'node:child_process'
import { promisify } from 'node:util'

const execAsync = promisify(exec)

const IGNORED_ERROR_PATTERNS = [
  /pkg\.imports\["#test.*"\]/,
]

const shouldIgnoreError = (errorLine: string): boolean => {
  return IGNORED_ERROR_PATTERNS.some(pattern => pattern.test(errorLine))
}

interface ExecError extends Error {
  code?: number
  stdout?: string
  stderr?: string
}

const main = async (): Promise<void> => {
  try {
    const { stdout, stderr } = await execAsync('pnpm exec publint run --strict')
    console.log(stdout)
    if (stderr) console.error(stderr)
    process.exit(0)
  } catch (error) {
    const execError = error as ExecError
    const output = execError.stdout ?? ''
    const errorOutput = execError.stderr ?? ''

    // Parse the output to filter errors
    const lines = output.split('\n')
    const errorSection = lines.findIndex(line => line.includes('Errors:'))

    if (errorSection === -1) {
      // No errors found or unexpected format, show original output
      console.log(output)
      if (errorOutput) console.error(errorOutput)
      process.exit(execError.code ?? 1)
    }

    // Extract error lines
    const errorLines = lines.slice(errorSection + 1).filter(line => line.trim())
    const filteredErrors = errorLines.filter(line => !shouldIgnoreError(line))

    if (filteredErrors.length === 0) {
      // All errors were ignored, success!
      console.log('Running publint v0.3.12 for graffle...')
      console.log('Packing files with `pnpm pack`...')
      console.log('Linting...')
      console.log('✓ No errors (filtered out #test import warnings)')
      process.exit(0)
    }

    // Some errors remain, show them
    console.log(lines.slice(0, errorSection + 1).join('\n'))
    filteredErrors.forEach(line => console.log(line))

    process.exit(1)
  }
}

main()
