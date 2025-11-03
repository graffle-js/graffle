import { Extension } from '#graffle/extension'
import { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import { getRequestEncodeSearchParameters, postRequestEncodeBody } from '#src/lib/graphql-kit/http/__.js'
import { getRequestHeadersRec, parseExecutionResult, postRequestHeadersRec } from '#src/lib/graphql-kit/http/__.js'
import { Http, type Prom, Str } from '@wollybeard/kit'
import { Transport } from '../../context/fragments/transports/dataType/_.js' // TODO import from entrypoint

// ----------------------------
// URL Input Types
// ----------------------------

/**
 * Discriminated union for URL input that clearly distinguishes between
 * relative paths and absolute URLs
 */
type URLInput =
  | { _tag: 'path'; value: string } // Relative paths: /api, ./api, ../api
  | { _tag: 'url'; value: URL } // Absolute URLs

const URLInput = {
  path: (value: string): URLInput => ({ _tag: 'path', value }),
  url: (value: URL): URLInput => ({ _tag: 'url', value }),
}

/**
 * Parse a string into a URLInput discriminated union.
 * If the string starts with '/', './', or '../', it's treated as a path.
 * Otherwise, it must be a valid absolute URL.
 */
const parseURLInput = (input: string | URL): URLInput => {
  if (input instanceof URL) return URLInput.url(input)
  if (input.startsWith('/') || input.startsWith('./') || input.startsWith('../')) {
    return URLInput.path(input)
  }
  return URLInput.url(new URL(input))
}

type URLInputType = URLInput

// ----------------------------
// Configuration
// ----------------------------

export type ConfigurationInput = {
  /**
   * The GraphQL endpoint URL.
   *
   * Can be:
   * - An absolute URL string (e.g., `https://api.example.com/graphql`)
   * - A relative path string (e.g., `/api/graphql`, `./graphql`, `../graphql`)
   * - A URL object
   *
   * Note: Node.js's native fetch does not support relative URLs (they are only supported in browsers).
   * Relative paths are particularly useful for:
   * - Browser environments where {@link https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API relative URLs are resolved against the page origin}
   * - Framework integrations like {@link https://kit.svelte.dev/docs/load#making-fetch-requests SvelteKit} where the framework provides an enhanced fetch
   */
  url?: URL | string | undefined
  /**
   * The HTTP method to use to make the request.
   *
   * Note that this is not just about the HTTP method but also about how the payload is sent.
   * Namely, `get` will send the payload as part of the URL search parameters while `post` will send it as a JSON body.
   *
   * Options:
   *
   * 1. `post` - Apply https://graphql.github.io/graphql-over-http/draft/#sec-POST
   * 2. `getReads` - Apply https://graphql.github.io/graphql-over-http/draft/#sec-GET
   *
   * @defaultValue `post`
   */
  methodMode?: MethodMode | undefined
  headers?: HeadersInit | undefined
  raw?: RequestInit | undefined
}

export interface ConfigurationNormalized {
  url: URL | string
  methodMode: MethodMode
  headers?: Headers | undefined
  raw?: RequestInit | undefined
}

export const configurationDefault = {
  methodMode: `post`,
} satisfies Partial<ConfigurationNormalized>
export type ConfigurationDefault = typeof configurationDefault

export interface ConfigurationInputResolver$Func
  extends Extension.Configurator.InputResolver.$Func<ConfigurationInput, ConfigurationNormalized, ConfigurationDefault>
{
  // @ts-expect-error: untyped parameters
  return: ConfigurationInputResolver$Func_<this['parameters']>
}
// dprint-ignore
export interface ConfigurationInputResolver$Func_<
  $Parameters extends Extension.Configurator.InputResolver.Parameters<ConfigurationInput, ConfigurationNormalized, ConfigurationDefault>,
  _Input = $Parameters['input'],
  _Current = $Parameters['current'],
> extends Partial<ConfigurationNormalized> {
  url: 'url' extends keyof _Current ? URL | string : 'url' extends keyof _Input ? URL | string : undefined
  methodMode: 'methodMode' extends keyof _Current ? MethodMode : 'methodMode' extends keyof _Input ? MethodMode : undefined
}

export const MethodMode = {
  post: `post`,
  getReads: `getReads`,
} as const

export type MethodModeGetReads = typeof MethodMode['getReads']

export type MethodModePost = typeof MethodMode['post']

export type MethodMode = MethodModePost | MethodModeGetReads

const httpTransportConfigurator = Extension.Configurator
  .create()
  .input<ConfigurationInput>()
  .normalized<ConfigurationNormalized>()
  .default(configurationDefault)
  .inputResolver<ConfigurationInputResolver$Func>(({ current, input }) => {
    // Parse and validate URL at configuration time
    // This ensures invalid URLs fail early, not at runtime
    let url = current.url
    if (input.url !== undefined) {
      // Validate the URL by parsing it
      // parseURLInput will throw if the URL is invalid
      const _parsed = parseURLInput(input.url)
      // Store back as the original type (string or URL)
      url = input.url
    }

    return {
      methodMode: input.methodMode ?? current.methodMode,
      raw: input.raw ?? current.raw,
      url,
      headers: Http.Headers.mergeInitWithStrategyMerge(current.headers, input.headers),
    }
  })

// ----------------------------
// Transport
// ----------------------------

export type ExchangeRequest = ExchangePostRequest | ExchangeGetRequest

/**
 * An extension of {@link RequestInit} that adds a required `url` property and makes `body` required.
 */
export type ExchangePostRequest = Omit<RequestInit, 'body' | 'method'> & {
  methodMode: MethodModePost | MethodModeGetReads
  method: Http.Method.post
  url: URLInputType // Preserve discriminated union for anyware extensions
  body: BodyInit
}

export type ExchangeGetRequest = Omit<RequestInit, 'body' | 'method'> & {
  methodMode: MethodModeGetReads
  method: Http.Method.get
  url: URLInputType // Preserve discriminated union for anyware extensions
}

// ----------------------------
// Extension
// ----------------------------

export const TransportHttp = Extension.create(`TransportHttp`)
  .transport(
    Transport.create(`http`)
      .configurator(httpTransportConfigurator)
      // todo currently the configurator data is spread into the input however it should be concentrated into a transport data prop and then
      // each step should have the possibility of getting its own configurator too.
      // .packInput<{ headers?: HeadersInit }>()
      .pack({
        slots: {
          searchParams: getRequestEncodeSearchParameters,
          body: postRequestEncodeBody,
        },
        run(input, slots) {
          const graphqlRequest: GraphqlKit.Http.RequestConfig = {
            operationName: input.request.operationName,
            variables: input.request.variables,
            query: GraphqlKit.Document.print(input.request.query),
          }

          const operationType = Str.Type.is(input.request.operation)
            ? input.request.operation
            : input.request.operation.operation
          const methodMode = input.transport.methodMode
          const requestMethod = methodMode === MethodMode.post
            ? `post`
            : GraphqlKit.Document.OperationTypeToAccessKind[operationType] === `read`
            ? `get`
            : `post`

          const baseRequestInit = Http.Req.mergeInit(
            Http.Req.mergeInit(
              {
                headers: requestMethod === `get` ? getRequestHeadersRec : postRequestHeadersRec,
              },
              input.transport.raw,
            ),
            {
              ...(input.transport.headers !== undefined && { headers: input.transport.headers }),
            },
          )
          // Parse the URL at runtime to determine if it's a path or absolute URL
          const parsedUrl = parseURLInput(input.transport.url)

          // For GET requests, we need to append search params
          // Handle paths and URLs differently while preserving the discriminated union
          const urlWithParams: URLInputType = requestMethod === `get`
            ? parsedUrl._tag === 'path'
              ? URLInput.path(Http.SearchParams.appendAllToPath(parsedUrl.value, slots.searchParams(graphqlRequest)))
              : URLInput.url(Http.SearchParams.appendAll(parsedUrl.value, slots.searchParams(graphqlRequest)))
            : parsedUrl

          const request: ExchangeRequest = requestMethod === `get`
            ? {
              methodMode: methodMode as MethodModeGetReads,
              ...baseRequestInit,
              method: `get`,
              url: urlWithParams,
            }
            : {
              methodMode: methodMode,
              ...baseRequestInit,
              method: `post`,
              url: parsedUrl,
              body: slots.body(graphqlRequest),
            }
          return {
            ...input,
            request,
          }
        },
      })
      .exchange({
        slots: {
          fetch: (url: string | URL, init?: RequestInit): Prom.Maybe<Response> => fetch(url, init),
        },
        async run(input, slots) {
          const response = await slots.fetch(input.request.url.value, input.request)
          return {
            ...input,
            response,
          }
        },
      })
      .unpack({
        async run(input) {
          // todo 1 if response is missing header of content length then .json() hangs forever.
          //        firstly consider a timeout, secondly, if response is malformed, then don't even run .json()
          // todo 2 if response is e.g. 404 with no json body, then an error is thrown because json parse cannot work, not gracefully handled here
          const json = await input.response.json() as object
          const result = parseExecutionResult(json)
          return {
            ...input,
            result,
          }
        },
      }),
  )
  .return()
