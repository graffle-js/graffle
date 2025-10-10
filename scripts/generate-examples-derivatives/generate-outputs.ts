import { Graffle } from '#graffle'
import * as FS from 'node:fs/promises'
import * as Path from 'node:path'
import { schema } from '../../tests/_/fixtures/schemas/pokemon/schema.js'
import { serveSchema } from '../../tests/_/lib/serveSchema.js'
import { deleteFiles } from '../lib/deleteFiles.js'
import { directories, readExampleFiles, runExample } from './helpers.js'

export const outputExtension = `.output.txt`
export const outputEncoderExtension = `.output.encoder.ts`

export const getOutputFilePathFromExampleFilePath = (filePath: string) => {
  const dirPathWithinExamples = Path.dirname(filePath.replace(directories.examples, ``))
  const outputFileName = Path.basename(filePath, Path.extname(filePath)) + outputExtension
  const dir = Path.join(directories.outputs, dirPathWithinExamples)
  const outputFilePath = Path.join(dir, outputFileName)
  return outputFilePath
}

export const getOutputEncoderFilePathFromExampleFilePath = (filePath: string) => {
  const outputFilePath = getOutputFilePathFromExampleFilePath(filePath)
  return outputFilePath.replace(outputExtension, outputEncoderExtension)
}

export const readFileOrNull = async (filePath: string) => {
  try {
    return await FS.readFile(filePath, `utf-8`)
  } catch {
    return null
  }
}

export const generateOutputs = async (name?: string) => {
  if (name) {
    console.log(`Generating outputs for example file paths matching "${name}"`)
  }

  const service = await serveSchema({ schema: schema, log: true })
  const exampleFiles = await readExampleFiles(name)

  // console.log(exampleFiles)

  if (name && exampleFiles.filtered.length === 0) {
    const message = `WARNING: No example files found matching "${name}". The files found were: ${
      exampleFiles.all.map(file => file.path.full).join(`\n`)
    }`
    console.log(message)
    await service.stop()
    return
  }

  const isGeneratingAll = !name

  // Handle case of renaming or deleting examples.
  if (isGeneratingAll) {
    await deleteFiles({ pattern: `${directories.outputs}/**/*${outputExtension}` })
  }

  const diff: { path: string; type: `created` | `updated` | `same` }[] = []

  // Create Graffle client for resetting database
  const graffle = Graffle.create().transport({ url: service.url.href })

  // Run examples sequentially instead of in parallel to ensure database resets
  // don't create race conditions where one example might read data while another
  // is resetting, leading to inconsistent outputs
  for (const file of exampleFiles.filtered) {
    // Reset database before each example
    await graffle.gql('mutation { resetData }').send()

    const content = await runExample(file.path.full)

    const dirPathWithinExamples = Path.dirname(file.path.full.replace(directories.examples, ``))
    const dir = Path.join(directories.outputs, dirPathWithinExamples)
    await FS.mkdir(dir, { recursive: true })

    const filePath = getOutputFilePathFromExampleFilePath(file.path.full)
    const previousContent = await readFileOrNull(filePath)

    const diffType = previousContent && previousContent === content ? `same` : previousContent ? `updated` : `created`
    console.log(`${diffType} ${file.path.full}`)
    diff.push({ path: file.path.full, type: diffType })

    if (diffType !== `same`) {
      await FS.writeFile(filePath, content)
    }
  }

  await service.stop()

  console.log(
    `Generated an output for examples:\n${
      exampleFiles.filtered.map(file =>
        `    ${diff.find(d => d.path === file.path.full)!.type} ${file.path.full} -> ${
          getOutputFilePathFromExampleFilePath(file.path.full)
        }`
      ).join(`\n`)
    }`,
  )
}
