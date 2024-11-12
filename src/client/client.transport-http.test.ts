import { describe, expect, expectTypeOf } from 'vitest'
import { createResponse, test } from '../../tests/_/helpers.js'
import { serveSchema } from '../../tests/_/lib/serveSchema.js'
import { Graffle as Pokemon } from '../../tests/_/schemas/pokemon/graffle/__.js'
import { schema as schemaPokemon } from '../../tests/_/schemas/pokemon/schema.js'
import { Graffle } from '../entrypoints/main.js'
import { ACCEPT_REC, CONTENT_TYPE_REC } from '../lib/grafaid/http/http.js'
// import type { requestPipeline } from '../requestPipeline/__.js'
// import { Transport, type TransportHttp } from '../types/Transport.js'

const schema = new URL(`https://foo.io/api/graphql`)

// test(`anyware hooks are typed to http transport`, () => {
//   Graffle.create({ schema }).anyware(async ({ encode }) => {
//     expectTypeOf(encode.input.transportType).toEqualTypeOf<TransportHttp>()
//     const { pack } = await encode()
//     expectTypeOf(pack.input.transportType).toEqualTypeOf(Transport.http)
//     const { exchange } = await pack()
//     expectTypeOf(exchange.input.transportType).toEqualTypeOf(Transport.http)
//     // todo we can statically track the method mode like we do the transport mode
//     expectTypeOf(exchange.input.request).toEqualTypeOf<
//       requestPipeline.Steps.CoreExchangePostRequest | requestPipeline.Steps.CoreExchangeGetRequest
//     >()
//     const { unpack } = await exchange()
//     expectTypeOf(unpack.input.transportType).toEqualTypeOf(Transport.http)
//     expectTypeOf(unpack.input.response).toEqualTypeOf<Response>()
//     const { decode } = await unpack()
//     expectTypeOf(decode.input.transportType).toEqualTypeOf(Transport.http)
//     expectTypeOf(decode.input.response).toEqualTypeOf<Response>()
//     const result = await decode()
//     if (!(result instanceof Error)) {
//       expectTypeOf(result.response).toEqualTypeOf<Response>()
//     }
//     return result
//   })
// })

test(`when envelope is used then response property is present even if relying on schema url default`, async () => {
  const service = await serveSchema({ schema: schemaPokemon })
  const pokemon = Pokemon.create({ output: { envelope: true } })
  const result = await pokemon.query.pokemons({ name: true })
  await service.stop()
  expectTypeOf(result.response).toEqualTypeOf<Response>()
})

describe(`methodMode`, () => {
  describe(`default (post)`, () => {
    test(`sends spec compliant post request by default`, async ({ fetch, graffle }) => {
      fetch.mockImplementationOnce(() => Promise.resolve(createResponse({ data: { id: `abc` } })))
      await graffle.gql`query { id }`.send()
      const request = fetch.mock.calls[0]?.[0]
      expect(request?.method).toEqual(`POST`)
      expect(request?.headers.get(`content-type`)).toEqual(CONTENT_TYPE_REC)
      expect(request?.headers.get(`accept`)).toEqual(ACCEPT_REC)
    })
  })
  describe(`get`, () => {
    test(`can set method mode to get`, async ({ fetch }) => {
      fetch.mockImplementationOnce(() => Promise.resolve(createResponse({ data: { user: { name: `foo` } } })))
      const graffle = Graffle.create({ schema, transport: { methodMode: `getReads` } })
      await graffle.gql`query foo($id: ID!){user(id:$id){name}}`.send(`foo`, { 'id': `QVBJcy5ndXJ1` })
      const request = fetch.mock.calls[0]?.[0]
      expect(request?.method).toEqual(`GET`)
      expect(request?.headers.get(`content-type`)).toEqual(null)
      expect(request?.headers.get(`accept`)).toEqual(ACCEPT_REC)
      expect(request?.url).toMatchInlineSnapshot(
        `"https://foo.io/api/graphql?query=query+foo%28%24id%3A+ID%21%29%7Buser%28id%3A%24id%29%7Bname%7D%7D&variables=%7B%22id%22%3A%22QVBJcy5ndXJ1%22%7D&operationName=foo"`,
      )
    })
    test(`if no variables or operationName then search parameters are omitted`, async ({ fetch }) => {
      fetch.mockImplementationOnce(() => Promise.resolve(createResponse({ data: { user: { name: `foo` } } })))
      const graffle = Graffle.create({ schema, transport: { methodMode: `getReads` } })
      await graffle.gql`query {user{name}}`.send()
      const request = fetch.mock.calls[0]?.[0]
      expect(request?.url).toMatchInlineSnapshot(`"https://foo.io/api/graphql?query=query+%7Buser%7Bname%7D%7D"`)
    })
    test(`mutation still uses POST`, async ({ fetch }) => {
      fetch.mockImplementationOnce(() => Promise.resolve(createResponse({ data: { user: { name: `foo` } } })))
      const graffle = Graffle.create({ schema, transport: { methodMode: `getReads` } })
      await graffle.gql`mutation { user { name } }`.send()
      const request = fetch.mock.calls[0]?.[0]
      expect(request?.method).toEqual(`POST`)
      expect(request?.headers.get(`content-type`)).toEqual(CONTENT_TYPE_REC)
      expect(request?.headers.get(`accept`)).toEqual(ACCEPT_REC)
    })
  })
})

describe(`configuration`, () => {
  test(`can set headers`, async ({ fetch }) => {
    fetch.mockImplementationOnce(() => Promise.resolve(createResponse({ data: { id: `abc` } })))
    const graffle = Graffle.create({ schema, transport: { headers: { 'x-foo': `bar` } } })
    await graffle.gql`query { id }`.send()
    const request = fetch.mock.calls[0]?.[0]
    expect(request?.headers.get(`x-foo`)).toEqual(`bar`)
  })

  test(`can set raw (requestInit)`, async ({ fetch }) => {
    fetch.mockImplementationOnce(() => Promise.resolve(createResponse({ data: { id: `abc` } })))
    const graffle = Graffle.create({ schema, transport: { raw: { headers: { 'x-foo': `bar` } } } })
    await graffle.gql`query { id }`.send()
    const request = fetch.mock.calls[0]?.[0]
    expect(request?.headers.get(`x-foo`)).toEqual(`bar`)
  })
  describe(`can set signal`, () => {
    // JSDom and Node result in different errors. JSDom is a plain Error type. Presumably an artifact of JSDom and now in actual browsers.
    const abortErrorMessagePattern = /This operation was aborted|AbortError: The operation was aborted/
    test(`to constructor`, async () => {
      const abortController = new AbortController()
      const graffle = Graffle.create({ schema, transport: { raw: { signal: abortController.signal } } })
      const resultPromise = graffle.gql`query { id }`.send()
      abortController.abort()
      const { caughtError } = await resultPromise.catch((caughtError: unknown) => ({ caughtError })) as any as {
        caughtError: Error
      }
      expect(caughtError.message).toMatch(abortErrorMessagePattern)
    })
    test(`to "with"`, async () => {
      const abortController = new AbortController()
      const graffle = Graffle.create({ schema }).with({ transport: { raw: { signal: abortController.signal } } })
      const resultPromise = graffle.gql`query { id }`.send()
      abortController.abort()
      const { caughtError } = await resultPromise.catch((caughtError: unknown) => ({ caughtError })) as any as {
        caughtError: Error
      }
      expect(caughtError.message).toMatch(abortErrorMessagePattern)
    })
  })
})
