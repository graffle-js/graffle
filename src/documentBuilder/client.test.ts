import { describe, expect } from 'vitest'
import { test } from '../../tests/_/helpers.js'
import { Graffle } from '../entrypoints/main.js'
import { Throws } from '../extensions/Throws/Throws.js'

describe(`without a registered client, document builder is not statically available but still works at runtime`, () => {
  const graffle = Graffle.create({ name: `unknown` }).use(Throws())

  test(`unavailable methods`, () => {
    // @ts-expect-error
    expect(typeof graffle.document).toEqual(`function`)
    // @ts-expect-error
    expect(typeof graffle.query).toEqual(`object`)
    // @ts-expect-error
    expect(typeof graffle.mutation).toEqual(`object`)
  })

  test(`available methods`, () => {
    expect(graffle.gql).toBeTypeOf(`function`)
  })
})
