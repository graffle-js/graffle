#!/usr/bin/env tsx
/**
 * Example runner wrapper that executes example files with proper error handling
 * and structured output for testing. This ensures deterministic error output
 * for snapshot testing by formatting errors at the source.
 */
import { Err } from '@wollybeard/kit'
import * as Path from 'node:path'

/**
 * Format an error object into deterministic output for snapshots
 */
const formatError = (error: unknown): void => {
  // Ensure we have an Error object
  const err = Err.ensure(error)

  // Use Err.inspect for rich error formatting, but we'll extract just what we need
  // for deterministic snapshot output
  const output: string[] = []

  // Error type and message
  output.push(`ERROR TYPE: ${err.constructor.name}`)
  output.push(`ERROR MESSAGE: ${err.message}`)

  // Error code if present
  if ('code' in err && typeof err.code === 'string') {
    output.push(`ERROR CODE: ${err.code}`)
  }

  // Context if present
  if ('context' in err && err.context !== undefined) {
    output.push(`ERROR CONTEXT: ${JSON.stringify(err.context)}`)
  }

  // Extract cause chain
  const causes: string[] = []
  let currentCause = err.cause

  while (currentCause) {
    if (currentCause instanceof Error) {
      // Special handling for AggregateError
      if (currentCause instanceof AggregateError) {
        const code = 'code' in currentCause ? String(currentCause.code) : ''
        causes.push(`AggregateError [${code}]: `.trim())
        currentCause.errors.forEach(e => {
          if (e instanceof Error) {
            causes.push(`${e.constructor.name}: ${e.message}`)
          } else {
            causes.push(String(e))
          }
        })
        currentCause = currentCause.cause
      } else {
        causes.push(`${currentCause.constructor.name}: ${currentCause.message}`)
        currentCause = currentCause.cause
      }
    } else {
      causes.push(String(currentCause))
      break
    }
  }

  if (causes.length > 0) {
    output.push(`CAUSED BY:`)
    causes.forEach(cause => {
      output.push(`  - ${cause}`)
    })
  }

  // Output to stdout for test capture
  console.log(output.join('\n'))
}

// Set up global error handlers to catch all errors
process.on('uncaughtException', (error) => {
  formatError(error)
  process.exit(1)
})

process.on('unhandledRejection', (error) => {
  formatError(error)
  process.exit(1)
})

// Get the example file path from command line
const examplePath = process.argv[2]
if (!examplePath) {
  console.error('Usage: example-runner.ts <example-file-path>')
  process.exit(1)
}

// Import and run the example
// The dynamic import will execute the example code
import(Path.resolve(examplePath)).catch((error) => {
  formatError(error)
  process.exit(1)
})
