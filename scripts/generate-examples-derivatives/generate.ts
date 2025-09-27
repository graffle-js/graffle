import { Command } from '@molt/command'
import { z } from 'zod'
import { generateDocs } from './generate-docs.js'
import { generateOutputs } from './generate-outputs.js'
import { generateTestOutputs } from './generate-test-outputs.js'
import { generateTests } from './generate-tests.js'
import { readExamples } from './helpers.js'

const args = Command.create()
  .parameter(`outputs`, z.boolean().optional())
  .parameter(`tests`, z.boolean().optional())
  .parameter(`name`, z.string().optional())
  .parse()

if (args.outputs) {
  await generateOutputs(args.name)
} else if (args.tests) {
  const examples = await readExamples()
  await generateTests(examples)
} else {
  await generateOutputs(args.name)
  await generateTestOutputs(args.name)

  const examples = await readExamples()

  await Promise.all([
    generateTests(examples),
    generateDocs(examples),
  ])
}
