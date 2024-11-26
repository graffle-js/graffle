import { describe, expect, expectTypeOf } from 'vitest'
import { createResponse, test } from '../../tests/_/helpers.js'
import { Graffle as Graffle2 } from '../../tests/_/schemas/kitchen-sink/graffle/__.js'
import { schema } from '../../tests/_/schemas/kitchen-sink/schema.js'
import { Graffle } from '../entrypoints/main.js'
import { Throws } from '../extensions/Throws/Throws.js'
import { TransportHttp } from '../extensions/TransportHttp/TransportHttp.js'

const url = new URL(`https://foo.io/api/graphql`)

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

describe(`output`, () => {
  // todo bring this back
  // test(`when using envelope and transport is http, response property is available`, async ({ fetch }) => {
  //   fetch.mockImplementationOnce(() => Promise.resolve(createResponse({ data: { id: `abc` } })))
  //   const graffle = Graffle2.create({ output: { envelope: true } }).use(TransportHttp({ url }))
  //   const result = await graffle.query.id()
  //   expectTypeOf(result.response).toEqualTypeOf<Response>()
  //   expect(result.response.status).toEqual(200)
  //   // sanity check
  //   expect(result.data).toEqual({ 'id': `abc` })
  // })
  // todo bring this back
  // test(`when using envelope and transport is memory, response property is NOT available`, async () => {
  //   const graffle = Graffle2.create({ output: { envelope: true } }).use(TransportHttp({ url }))
  //   const result = await graffle.query.id()
  //   // @ts-expect-error not present
  //   expectTypeOf(result.response).toEqualTypeOf<Response>()
  //   // @ts-expect-error not present
  //   expect(result.response).toEqual(undefined)
  //   // sanity check
  //   expect(result.data).toEqual({ 'id': `abc` })
  // })
})
