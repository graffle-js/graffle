import { Command } from '@wollybeard/kit/oak'
import { EffectSchema } from '@wollybeard/kit/oak/extensions'
import { Schema } from 'effect'
import { generateDocs } from './generate-docs.js'
import { generateOutputs } from './generate-outputs.js'
import { readExamples } from './helpers.js'

const args = await Command.create()
  .use(EffectSchema)
  .parameter(`outputs`, Schema.UndefinedOr(Schema.Boolean))
  .parameter(`name`, Schema.UndefinedOr(Schema.String))
  .parse()

if (args.outputs) {
  await generateOutputs(args.name)
} else {
  await generateOutputs(args.name)

  const examples = await readExamples()

  await generateDocs(examples)
}
