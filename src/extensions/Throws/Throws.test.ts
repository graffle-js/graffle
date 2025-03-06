import { expect, test } from 'vitest'
import { Possible } from '../../../tests/_/fixtures/schemas/possible/graffle/_namespace.js'
import { schema } from '../../../tests/_/fixtures/schemas/possible/schema.js'
import { TransportMemory } from '../TransportMemory/TransportMemory.js'
import { Throws } from './Throws.js'

const graffle = Possible
  .create({
    output: { errors: { execution: `return` } },
  })
  .use(TransportMemory)
  .transport(`memory`, { schema })
  .use(Throws)
  .throws()

test(`.gql() throws if errors array non-empty`, async () => {
  await expect(graffle.gql`query { foo }`.send()).rejects.toMatchInlineSnapshot(
    `[ContextualAggregateError: One or more errors in the execution result.]`,
  )
})

// describe(`$batch`, () => {
//   test(`success`, async () => {
//     expect(await graffle.query.$batch({ id: true })).toMatchObject({ id: db.id })
//   })
//   test(`error`, async () => {
//     await expect(graffle.query.$batch({ error: true })).rejects.toMatchObject(db.errorAggregate)
//   })
// })
