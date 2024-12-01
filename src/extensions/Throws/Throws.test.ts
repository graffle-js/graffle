import { describe, expect, test } from 'vitest'
import { db } from '../../../tests/_/schemas/db.js'
import { Graffle } from '../../../tests/_/schemas/kitchen-sink/graffle/__.js'
import { schema } from '../../../tests/_/schemas/kitchen-sink/schema.js'
import { TransportMemory } from '../TransportMemory/TransportMemory.js'
import { Throws } from './Throws.js'

const graffle = Graffle
  .create()
  .use(TransportMemory({ schema }))
  .transport(`memory`)
  .use(Throws())
  .with({
    output: { errors: { execution: `return` } },
  })
  .throws()

test(`.gql() throws if errors array non-empty`, async () => {
  await expect(graffle.gql`query { foo }`.send()).rejects.toMatchInlineSnapshot(
    `[ContextualAggregateError: One or more errors in the execution result.]`,
  )
})

describe(`$batch`, () => {
  test(`success`, async () => {
    expect(await graffle.query.$batch({ id: true })).toMatchObject({ id: db.id })
  })
  test(`error`, async () => {
    await expect(graffle.query.$batch({ error: true })).rejects.toMatchObject(db.errorAggregate)
  })
})
