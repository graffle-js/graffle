import { Extension } from '#graffle/extension'
import { GraffleBare } from '#graffle/presets/bare'
import { expect, test } from 'vitest'
import { Throws } from './Throws.js'

const graffle = GraffleBare
  .create({
    output: { errors: { execution: `return` } },
  })
  .transport(
    Extension.Transport
      .create(`test`)
      .pack({
        // todo: this should be the default.
        run: (input) => input,
      })
      .exchange({
        run: (input) => input,
      })
      .unpack({
        run: (input) => {
          return {
            ...input,
            result: {
              errors: [{ message: `test` }],
            },
          }
        },
      }),
  )
  .use(Throws)
  .throws()

test(`.gql() throws if errors array non-empty`, async () => {
  await expect(graffle.gql('query { foo }').send()).rejects.toMatchInlineSnapshot(
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
