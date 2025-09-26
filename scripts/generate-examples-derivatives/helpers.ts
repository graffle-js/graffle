import * as ErrorStackParser from 'error-stack-parser'
import { capitalize, kebabCase } from 'es-toolkit'
import { execa, ExecaError } from 'execa'
import { globby } from 'globby'
import * as Path from 'node:path'
import stripAnsi from 'strip-ansi'
import { showPartition } from '../../examples/$/helpers.js'
import { type File, readFiles } from '../lib/readFiles.js'
import {
  getOutputEncoderFilePathFromExampleFilePath,
  getOutputFilePathFromExampleFilePath,
  outputEncoderExtension,
} from './generate-outputs.js'

export const directories = {
  outputs: `./examples/__outputs__`,
  examples: `./examples`,
  tests: `./examples/__tests__`,
}

export const examplesIgnorePatterns = [`./examples/$`, directories.outputs, directories.tests]

export const readExampleFiles = (name?: string) =>
  readFiles({
    pattern: `./examples/*/*.ts`,
    options: { ignore: examplesIgnorePatterns },
  }).then(files => {
    const filesFiltered = name ? files.filter(file => file.path.full.match(name)) : files
    return {
      all: files,
      filtered: filesFiltered,
    }
  })

export const readExamples = async (filterName?: string): Promise<Example[]> => {
  const exampleFiles = await readExampleFiles(filterName)

  const outputFiles = await readFiles({
    pattern: `./examples/__outputs__/*/*.output.txt`,
  })

  const encoderFilePaths = await globby(`${directories.outputs}/**/*${outputEncoderExtension}`)

  const examples = exampleFiles.filtered.map((example) => {
    const group = parseGroup(example.path.full)
    const fileName = parseFileName(example.name, group.humanName)

    const outputFilePath = getOutputFilePathFromExampleFilePath(example.path.full)
    const outputEncoderFilePath = getOutputEncoderFilePathFromExampleFilePath(example.path.full)
    const outputFile = outputFiles.find(file => {
      return Path.relative(file.path.full, outputFilePath) === ``
    })
    if (!outputFile) throw new Error(`Could not find output file for ${example.name}`)

    const testEncoderFilePath = encoderFilePaths.find((filePath) => {
      return Path.relative(filePath, outputEncoderFilePath) === ``
    })

    const { description, content } = extractDescription(example.content)

    return {
      file: {
        ...example,
        content,
      },
      group,
      fileName,
      output: {
        file: outputFile,
        blocks: outputFile.content.split(showPartition + `\n`).map(block => block.trim()).filter(Boolean),
        encoder: testEncoderFilePath
          ? {
            filePath: testEncoderFilePath,
          }
          : undefined,
      },
      isUsingJsonOutput: example.content.includes(`showJson`),
      description,
      tags: parseTags(example.name),
    }
  })

  return examples
}

const parseGroup = (filePath: string) => {
  const dirName = Path.dirname(filePath).split(`/`).pop()!
  const humanName = dirName.replace(/^\d+_/, ``)
  return {
    dirName,
    humanName,
  }
}

const parseFileName = (fileName: string, group: string): Example['fileName'] => {
  const fileNameWithoutGroup = fileName
  const [tagsExpression, titleExpression] = fileNameWithoutGroup.split(`__`)
  // If group name is duplicated by tags then omit that from the canonical title.
  const tags = tagsExpression ? parseTags(tagsExpression) : null
  const tagsExpressionWithoutGroupName = tags
    ? (tags.length > 1 ? tags.map(tag => tag === group ? `` : tag).filter(Boolean) : tags).join(` `)
    : null
  const canonicalTitleExpression = titleExpression ?? tagsExpressionWithoutGroupName ?? `impossible`
  return {
    canonical: kebabCase(canonicalTitleExpression),
    canonicalTitle: toTitle(canonicalTitleExpression),
    tags: tagsExpression ?? `impossible`,
    title: titleExpression ?? null,
  }
}

const parseTags = (fileName: string) => {
  const [tagsExpression] = fileName.replace(/^[^|]+\|/, ``).split(`__`)
  if (!tagsExpression) return []
  const tags = tagsExpression.split(`_`)
  return tags
}

export interface Example {
  description: string | null
  file: File
  fileName: {
    canonical: string
    canonicalTitle: string
    tags: string
    title: string | null
  }
  group: {
    humanName: string
    dirName: string
  }
  output: {
    file: File
    blocks: string[]
    encoder?: {
      filePath: string
    }
  }
  isUsingJsonOutput: boolean
  tags: Tag[]
}

type Tag = string

const extractDescription = (fileContent: string) => {
  const pattern = /^\/\*\*([\s\S]*?)\*\//
  const jsdocMatch = fileContent.match(pattern)

  if (jsdocMatch) {
    const description = jsdocMatch[1]!.trim().replaceAll(/^\s*\* /gm, ``)
    return {
      description,
      content: fileContent.replace(pattern, ``),
    }
  }

  return {
    description: null,
    content: fileContent,
  }
}

export const toTitle = (name: string) => kebabCase(name).split(`-`).map(capitalize).join(` `)

export const computeCombinations = (arr: string[]): string[][] => {
  const result: string[][] = []

  const generateCombinations = (currentCombination: string[], index: number) => {
    if (index === arr.length) {
      result.push([...currentCombination])
      return
    }

    // Include the current element
    generateCombinations([...currentCombination, arr[index]!], index + 1)

    // Exclude the current element
    generateCombinations(currentCombination, index + 1)
  }

  generateCombinations([], 0)

  return result
}

export const runExample = async (filePath: string) => {
  // The filePath might be like "./examples/20_output/foo.ts" or "./20_output/foo.ts"
  // We need to run it from the examples directory with the path relative to that directory

  // Check if we're already in the examples directory
  const currentDir = process.cwd()
  const examplesDir = currentDir.endsWith('/examples')
    ? currentDir
    : Path.join(currentDir, 'examples')

  // Strip the examples/ prefix if present
  const relativePath = filePath.replace(/^\.\/examples\//, './').replace(/^examples\//, './')

  // Pass environment variables including any POKEMON_SCHEMA_URL from vitest
  const result = await execa({
    reject: false,
    cwd: examplesDir,
    env: {
      ...process.env,
      // Ensure the subprocess gets the server URL if set by vitest
      POKEMON_SCHEMA_URL: process.env['POKEMON_SCHEMA_URL'],
    },
  })`pnpm tsx ${relativePath}`

  let exampleOutput = ``

  // Handle different scenarios
  if (filePath.includes(`_throws`)) {
    // For examples that are expected to throw, capture stderr
    exampleOutput = result.stderr || result.stdout || ''
  } else if (result.failed) {
    // If the command failed, capture stderr (error output)
    exampleOutput = result.stderr || ''
  } else {
    // For successful runs, capture stdout
    exampleOutput = result.stdout || ''
  }

  exampleOutput = stripAnsi(exampleOutput)
  exampleOutput = rewriteDynamicError(exampleOutput)

  return exampleOutput
}

export const rewriteDynamicError = (value: string) => {
  // For test output, create a clean, deterministic format
  // that focuses on the error messages and cause chain

  // Extract error information using a structured approach
  const lines = value.split('\n')
  const output: string[] = []

  // Check if this is an error output
  const hasError = value.includes('Error:') || value.includes('ContextualError:')
  if (!hasError) {
    // Not an error, just normalize dates and return
    return value.replace(/date: '.*GMT'/, `date: 'NORMALIZED_DATE'`)
  }

  // Parse the error structure to extract key information
  let currentError: {
    type?: string
    message?: string
    code?: string
    context?: any
    causedBy?: string[]
  } = {}

  let inCause = false
  let depth = 0

  for (const line of lines) {
    // Main error type and message
    if (line.includes('ContextualError:')) {
      currentError.type = 'ContextualError'
      currentError.message = line.split('ContextualError:')[1]?.trim()
    } else if (line.match(/^[A-Z]\w*Error:/)) {
      const match = line.match(/^([A-Z]\w*Error):\s*(.*)/)
      if (match) {
        currentError.type = match[1]
        currentError.message = match[2]
      }
    }
    // Error properties
    else if (line.includes('code:')) {
      const match = line.match(/code:\s*'([^']+)'/)
      if (match) currentError.code = match[1]
    }
    else if (line.includes('context:')) {
      // Extract context object
      const contextMatch = line.match(/context:\s*({.+})/)
      if (contextMatch) {
        try {
          currentError.context = contextMatch[1]
        } catch {
          currentError.context = line.split('context:')[1]?.trim()
        }
      }
    }
    // Cause chain
    else if (line.includes('cause:') || line.includes('[cause]:')) {
      inCause = true
      if (!currentError.causedBy) currentError.causedBy = []
      const causeMatch = line.match(/\[?cause\]?:\s*(.+)/)
      if (causeMatch) {
        currentError.causedBy.push(causeMatch[1]!)
      }
    }
    else if (inCause && line.match(/^\s*at\s+/)) {
      // Skip stack traces in test output
      continue
    }
  }

  // Format the output in a clean, deterministic way
  if (currentError.type) {
    output.push(`ERROR TYPE: ${currentError.type}`)
  }
  if (currentError.message) {
    output.push(`ERROR MESSAGE: ${currentError.message}`)
  }
  if (currentError.code) {
    output.push(`ERROR CODE: ${currentError.code}`)
  }
  if (currentError.context) {
    output.push(`ERROR CONTEXT: ${currentError.context}`)
  }
  if (currentError.causedBy && currentError.causedBy.length > 0) {
    output.push(`CAUSED BY:`)
    currentError.causedBy.forEach(cause => {
      output.push(`  - ${cause}`)
    })
  }

  // If we couldn't parse it properly, fall back to simplified normalization
  if (output.length === 0) {
    // Just extract error messages and remove all file paths and stack traces
    const errorLines = lines.filter(line =>
      (line.includes('Error:') || line.includes('error:')) &&
      !line.includes('/') &&
      !line.match(/^\s*at\s+/)
    )

    if (errorLines.length > 0) {
      return errorLines.join('\n')
    }

    // Last resort: return first few meaningful lines
    return lines
      .filter(line => line.trim() && !line.match(/^\s*at\s+/))
      .slice(0, 5)
      .join('\n')
  }

  return output.join('\n')
}
