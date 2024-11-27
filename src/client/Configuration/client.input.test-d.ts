import { test } from 'vitest'
import { Graffle } from '../../../tests/_/schemas/kitchen-sink/graffle/__.js'
import { QueryOnly } from '../../../tests/_/schemas/query-only/graffle/__.js'

test(`works`, () => {
  Graffle.create({ output: { errors: { execution: `throw` } } })
  // @ts-expect-error schema error config not available.
  QueryOnly.create({ name: `QueryOnly`, output: { errors: { schema: `throw` } } })
})
