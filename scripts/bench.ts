#!/usr/bin/env tsx

import { execSync } from 'node:child_process'
import { readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const args = process.argv.slice(2)

// Handle subcommands
const subcommand = args[0]

if (subcommand === 'stats') {
  execSync('attest stats .', { stdio: 'inherit' })
  process.exit(0)
}

// Show help
if (args.includes('-h') || args.includes('--help')) {
  console.log(`
Usage: pnpm bench [subcommand] [patterns...] [options]

Run type performance benchmarks using @ark/attest

Subcommands:
  stats            Show project-wide type performance stats

Arguments:
  [patterns...]    Filter benchmarks by file path substring (like vitest)
                   Examples: "err", "utils", "ts/err"

Options:
  -h, --help       Show this help message
  --list           List available benchmark files without running them
  --update         Update benchmark baselines (passed to attest)

Examples:
  pnpm bench                   # Run all benchmarks
  pnpm bench err               # Run benchmarks matching "err"
  pnpm bench utils             # Run all benchmarks in utils/
  pnpm bench --list            # List all benchmark files
  pnpm bench stats             # Show type performance stats
  pnpm bench ts/assert --update  # Update baselines for ts/assert benchmarks

How it works:
  - Finds all *.bench.ts files in src/
  - Filters by pattern (substring match on file path)
  - Executes each file with tsx
  - attest's bench() shows instantiation counts and baselines

See also:
  pnpm check:types:perf        # Detailed TypeScript diagnostics
`)
  process.exit(0)
}

// Find all bench files
const findBenchFiles = (dir: string, files: string[] = []): string[] => {
  const entries = readdirSync(dir)
  for (const entry of entries) {
    const fullPath = join(dir, entry)
    const stat = statSync(fullPath)
    if (stat.isDirectory()) {
      findBenchFiles(fullPath, files)
    } else if (entry.endsWith('.bench.ts')) {
      files.push(fullPath)
    }
  }
  return files
}

const allBenchFiles = findBenchFiles('src')

// Handle --list flag
if (args.includes('--list')) {
  console.log(`Found ${allBenchFiles.length} benchmark file(s):\n`)
  allBenchFiles.forEach((file) => console.log(`  ${file}`))
  process.exit(0)
}

// Separate patterns from flags
const patterns = args.filter((arg) => !arg.startsWith('-'))
const flags = args.filter((arg) => arg.startsWith('-') && arg !== '--list')

// Filter bench files based on patterns
const matchedFiles = patterns.length === 0
  ? allBenchFiles
  : allBenchFiles.filter((file) => patterns.some((pattern) => file.includes(pattern)))

if (matchedFiles.length === 0) {
  console.error(`No benchmark files found matching: ${patterns.join(', ')}`)
  console.error(`\nRun 'pnpm bench --list' to see available benchmarks`)
  process.exit(1)
}

console.log(`Running ${matchedFiles.length} benchmark file(s):\n`)
matchedFiles.forEach((file) => console.log(`  ${file}`))
console.log()

// Run each matched benchmark file
const flagsStr = flags.length > 0 ? ` ${flags.join(' ')}` : ''
for (const file of matchedFiles) {
  try {
    execSync(`tsx ${file}${flagsStr}`, { stdio: 'inherit' })
  } catch (error) {
    console.error(`\nFailed to run ${file}`)
    process.exit(1)
  }
}
