import { GraffleBare } from '#graffle/presets/bare'
import { ACCEPT_REC, CONTENT_TYPE_REC } from '#src/lib/grafaid/http/http.js'
import { createGraphQLResponse, createGraphQLResponseData, test as testBase } from '#test/helpers'
import { serveSchema } from '#test/lib/serveSchema'
import { describe, expect, expectTypeOf } from 'vitest'
import { TransportHttp } from './TransportHttp.js'

const url = new URL(`https://foo.io/api/graphql`)

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

const createG1 = () => GraffleBare.create().use(TransportHttp)

const test = testBase.extend<{
  g1: ReturnType<typeof createG1>
}>({
  g1: async ({}, use) => {
    const g0 = createG1()
    await use(g0)
  },
})

test(`when envelope is used then response property is present even if relying on schema url default`, async ({ g1, schemas: { pokemon: schema } }) => {
  const service = await serveSchema({ schema })
  const g2 = g1.with({ output: { envelope: true } }).transport({ url: service.url })
  const result = await g2.gql`pokemons { name }`.send()
  await service.stop()
  // @ts-expect-error fixme
  expectTypeOf(result.response).toEqualTypeOf<Response>()
})

describe(`methodMode`, () => {
  describe(`default (post)`, () => {
    test(`sends spec compliant post request by default`, async ({ fetch, g1 }) => {
      fetch.mockImplementationOnce(() => Promise.resolve(createGraphQLResponseData({ id: `abc` })))
      await g1.transport({ url: `https://abc` }).gql`query { id }`.send()
      const url = fetch.mock.calls[0]?.[0]
      const init = fetch.mock.calls[0]?.[1]
      expect(init?.method).toEqual(`post`)
      expect(new Headers(init?.headers).get(`content-type`)).toEqual(CONTENT_TYPE_REC)
      expect(new Headers(init?.headers).get(`accept`)).toEqual(ACCEPT_REC)
    })
  })
  describe(`get`, () => {
    test(`can set method mode to get`, async ({ g1, fetch }) => {
      fetch.mockImplementationOnce(() => Promise.resolve(createGraphQLResponse({ data: { user: { name: `foo` } } })))
      const g2 = g1.transport({ url, methodMode: `getReads` })
      await g2.gql`query foo($id: ID!){user(id:$id){name}}`.send(`foo`, { 'id': `QVBJcy5ndXJ1` })
      const urlArg = fetch.mock.calls[0]?.[0]
      const init = fetch.mock.calls[0]?.[1]
      expect(init?.method).toEqual(`get`)
      expect(new Headers(init?.headers).get(`content-type`)).toEqual(null)
      expect(new Headers(init?.headers).get(`accept`)).toEqual(ACCEPT_REC)
      expect(urlArg?.toString()).toMatchInlineSnapshot(
        `"https://foo.io/api/graphql?query=query+foo%28%24id%3A+ID%21%29%7Buser%28id%3A%24id%29%7Bname%7D%7D&variables=%7B%22id%22%3A%22QVBJcy5ndXJ1%22%7D&operationName=foo"`,
      )
    })
    test(`if no variables or operationName then search parameters are omitted`, async ({ g1, fetch }) => {
      fetch.mockImplementationOnce(() => Promise.resolve(createGraphQLResponse({ data: { user: { name: `foo` } } })))
      const g2 = g1.transport({ url, methodMode: `getReads` })
      await g2.gql`query {user{name}}`.send()
      const urlArg = fetch.mock.calls[0]?.[0]
      expect(urlArg?.toString()).toMatchInlineSnapshot(`"https://foo.io/api/graphql?query=query+%7Buser%7Bname%7D%7D"`)
    })
    test(`mutation still uses POST`, async ({ g1, fetch }) => {
      fetch.mockImplementationOnce(() => Promise.resolve(createGraphQLResponse({ data: { user: { name: `foo` } } })))
      const g2 = g1.transport({ url, methodMode: `getReads` })
      await g2.gql`mutation { user { name } }`.send()
      const urlArg = fetch.mock.calls[0]?.[0]
      const init = fetch.mock.calls[0]?.[1]
      expect(init?.method).toEqual(`post`)
      expect(new Headers(init?.headers).get(`content-type`)).toEqual(CONTENT_TYPE_REC)
      expect(new Headers(init?.headers).get(`accept`)).toEqual(ACCEPT_REC)
    })
  })
})

describe(`configuration`, () => {
  test(`can set headers`, async ({ g1, fetch }) => {
    fetch.mockImplementationOnce(() => Promise.resolve(createGraphQLResponse({ data: { id: `abc` } })))
    const g2 = g1.transport({ url, headers: { 'x-foo': `bar` } })
    g2._.transports.configurations.http.headers
    await g2.gql`query { id }`.send()
    const urlArg = fetch.mock.calls[0]?.[0]
    const init = fetch.mock.calls[0]?.[1]
    expect(new Headers(init?.headers).get(`x-foo`)).toEqual(`bar`)
  })

  test(`can set raw (requestInit)`, async ({ g1, fetch }) => {
    fetch.mockImplementationOnce(() => Promise.resolve(createGraphQLResponse({ data: { id: `abc` } })))
    const g2 = g1.transport({ url, raw: { headers: { 'x-foo': `bar` } } })
    await g2.gql`query { id }`.send()
    const urlArg = fetch.mock.calls[0]?.[0]
    const init = fetch.mock.calls[0]?.[1]
    expect(new Headers(init?.headers).get(`x-foo`)).toEqual(`bar`)
  })
  describe(`can set signal`, () => {
    // JSDom and Node result in different errors. JSDom is a plain Error type. Presumably an artifact of JSDom and now in actual browsers.
    const abortErrorMessagePattern = /This operation was aborted|AbortError: The operation was aborted/
    test(`to constructor`, async ({ g1 }) => {
      const abortController = new AbortController()
      const g2 = g1.transport({ url, raw: { signal: abortController.signal } })
      const resultPromise = g2.gql`query { id }`.send()
      abortController.abort()
      const { caughtError } = await resultPromise.catch((caughtError: unknown) => ({ caughtError })) as any as {
        caughtError: Error
      }
      expect(caughtError.message).toMatch(abortErrorMessagePattern)
    })
    // todo bring this back
    // test(`to "with"`, async () => {
    //   const abortController = new AbortController()
    //   const graffle = Graffle.create({ url }).with({ transport: { raw: { signal: abortController.signal } } })
    //   const resultPromise = graffle.gql`query { id }`.send()
    //   abortController.abort()
    //   const { caughtError } = await resultPromise.catch((caughtError: unknown) => ({ caughtError })) as any as {
    //     caughtError: Error
    //   }
    //   expect(caughtError.message).toMatch(abortErrorMessagePattern)
    // })
  })
})

describe(`relative URLs`, () => {
  test(`can use relative URL path`, async ({ g1, fetch }) => {
    fetch.mockImplementationOnce(() => Promise.resolve(createGraphQLResponse({ data: { id: `abc` } })))
    const g2 = g1.transport({ url: `/api/graphql` })
    await g2.gql`query { id }`.send()
    // For relative URLs, fetch is called with (url, options) instead of (Request)
    const [urlOrRequest, options] = fetch.mock.calls[0] ?? []
    if (typeof urlOrRequest === 'string') {
      expect(urlOrRequest).toEqual(`/api/graphql`)
      expect(options?.method).toEqual(`post`)
    } else if (urlOrRequest instanceof Request) {
      expect(urlOrRequest.url).toEqual(`/api/graphql`)
      expect(urlOrRequest.method).toEqual(`POST`)
    } else if (urlOrRequest instanceof URL) {
      expect(urlOrRequest.toString()).toEqual(`/api/graphql`)
    }
  })

  test(`relative URL with GET method mode`, async ({ g1, fetch }) => {
    fetch.mockImplementationOnce(() => Promise.resolve(createGraphQLResponse({ data: { user: { name: `foo` } } })))
    const g2 = g1.transport({ url: `/api/graphql`, methodMode: `getReads` })
    await g2.gql`query foo($id: ID!){user(id:$id){name}}`.send(`foo`, { 'id': `QVBJcy5ndXJ1` })
    // For relative URLs, fetch is called with (url, options) instead of (Request)
    const [urlOrRequest, options] = fetch.mock.calls[0] ?? []
    if (typeof urlOrRequest === 'string') {
      expect(options?.method).toEqual(`get`)
      expect(urlOrRequest).toContain(`/api/graphql?`)
      expect(urlOrRequest).toContain(`query=`)
      expect(urlOrRequest).toContain(`variables=`)
    } else if (urlOrRequest instanceof Request) {
      expect(urlOrRequest.method).toEqual(`GET`)
      expect(urlOrRequest.url).toContain(`/api/graphql?`)
      expect(urlOrRequest.url).toContain(`query=`)
      expect(urlOrRequest.url).toContain(`variables=`)
    } else if (urlOrRequest instanceof URL) {
      expect(urlOrRequest.toString()).toContain(`/api/graphql?`)
      expect(urlOrRequest.toString()).toContain(`query=`)
      expect(urlOrRequest.toString()).toContain(`variables=`)
    }
  })

  test(`relative URL with existing query params`, async ({ g1, fetch }) => {
    fetch.mockImplementationOnce(() => Promise.resolve(createGraphQLResponse({ data: { id: `abc` } })))
    const g2 = g1.transport({ url: `/api/graphql?token=xyz`, methodMode: `getReads` })
    await g2.gql`query { id }`.send()
    // For relative URLs, fetch is called with (url, options) instead of (Request)
    const [urlOrRequest, options] = fetch.mock.calls[0] ?? []
    if (typeof urlOrRequest === 'string') {
      expect(urlOrRequest).toContain(`/api/graphql?`)
      expect(urlOrRequest).toContain(`token=xyz`)
      expect(urlOrRequest).toContain(`query=`)
    } else if (urlOrRequest instanceof Request) {
      expect(urlOrRequest.url).toContain(`/api/graphql?`)
      expect(urlOrRequest.url).toContain(`token=xyz`)
      expect(urlOrRequest.url).toContain(`query=`)
    } else if (urlOrRequest instanceof URL) {
      expect(urlOrRequest.toString()).toContain(`/api/graphql?`)
      expect(urlOrRequest.toString()).toContain(`token=xyz`)
      expect(urlOrRequest.toString()).toContain(`query=`)
    }
  })

  test(`can still use absolute URL strings`, async ({ g1, fetch }) => {
    fetch.mockImplementationOnce(() => Promise.resolve(createGraphQLResponse({ data: { id: `abc` } })))
    const g2 = g1.transport({ url: `https://api.example.com/graphql` })
    await g2.gql`query { id }`.send()
    const urlArg = fetch.mock.calls[0]?.[0]
    expect(urlArg?.toString()).toEqual(`https://api.example.com/graphql`)
  })

  test(`can still use URL objects`, async ({ g1, fetch }) => {
    fetch.mockImplementationOnce(() => Promise.resolve(createGraphQLResponse({ data: { id: `abc` } })))
    const urlObject = new URL(`https://api.example.com/graphql`)
    const g2 = g1.transport({ url: urlObject })
    await g2.gql`query { id }`.send()
    const urlArg = fetch.mock.calls[0]?.[0]
    expect(urlArg?.toString()).toEqual(`https://api.example.com/graphql`)
  })
})

// const url = new URL(`https://foo.io/api/graphql`)

// describe.skip(`output`, () => {
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
// })
