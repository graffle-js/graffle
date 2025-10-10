import { Graffle } from '#graffle'
import { test } from '#test/helpers'
import { describe, expect } from 'vitest'
import { Throws } from '../Throws/Throws.js'
import { Possible } from '#test/schema/possible/client/$.js'
import { DocumentBuilder } from './DocumentBuilder.js'

describe(`without a registered client, document builder is not statically available but still works at runtime`, () => {
  const graffle = Graffle
    .create({ schema: { name: `unknown` } })
    .use(Throws)
    .use(DocumentBuilder)

  test(`unavailable methods`, () => {
    // @ts-expect-error
    expect(typeof graffle.document).toEqual(`function`)
    // @ts-expect-error
    expect(typeof graffle.query).toEqual(`object`)
    // @ts-expect-error
    expect(typeof graffle.mutation).toEqual(`object`)
  })

  test(`available methods`, () => {
    const possible = Possible.create()
    expect(possible.document).toBeTypeOf(`function`)
    expect(possible.query.$batch).toBeTypeOf(`function`)
    expect(possible.mutation.$batch).toBeTypeOf(`function`)
  })
})
