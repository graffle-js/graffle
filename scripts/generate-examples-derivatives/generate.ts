import { Command } from '@molt/command'
import { z } from 'zod'
import { generateDocs } from './generate-docs.js'
import { generateOutputs } from './generate-outputs.js'
import { generateTests } from './generate-tests.js'
import { readExamples } from './helpers.js'

const args = Command.create()
  .parameter(`outputs`, z.boolean().optional())
  .parameter(`name`, z.string().optional())
  .parse()

if (args.outputs) {
  await generateOutputs(args.name)
} else {
  await generateOutputs(args.name)

  const examples = await readExamples()

  await Promise.all([
    generateTests(examples),
    generateDocs(examples),
  ])
}
