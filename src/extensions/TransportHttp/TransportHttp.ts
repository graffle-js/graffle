import { Transport } from '../../context/fragments/transports/dataType/_namespace.js' // TODO import from entrypoint
import { Extension } from '../../entrypoints/extension.js'
import type { Grafaid } from '../../lib/grafaid/_namespace.js'
import { OperationTypeToAccessKind, print } from '../../lib/grafaid/document.js'
import { getRequestEncodeSearchParameters, postRequestEncodeBody } from '../../lib/grafaid/http/http.js'
import { getRequestHeadersRec, parseExecutionResult, postRequestHeadersRec } from '../../lib/grafaid/http/http.js'
import { mergeHeadersInitWithStrategyMerge, mergeRequestInit, searchParamsAppendAll } from '../../lib/http.js'
import type { httpMethodGet, httpMethodPost } from '../../lib/http.js'
import { _, isString, type MaybePromise } from '../../lib/prelude.js'

// ----------------------------
// Configuration
// ----------------------------

export type ConfigurationInput = {
  url?: URL | string
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
  methodMode?: MethodMode
  headers?: HeadersInit
  raw?: RequestInit
}

export interface ConfigurationNormalized {
  url: URL
  methodMode: MethodMode
  headers?: Headers
  raw?: RequestInit
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
  url: 'url' extends keyof _Current ? URL : 'url' extends keyof _Input ? URL : undefined
  methodMode: 'methodMode' extends keyof _Current ? MethodMode : 'methodMode' extends keyof _Input ? MethodMode : undefined
}

export const MethodMode = {
  post: `post`,
  getReads: `getReads`,
} as const

export type MethodModeGetReads = typeof MethodMode['getReads']

export type MethodModePost = typeof MethodMode['post']

export type MethodMode = MethodModePost | MethodModeGetReads

const httpTransportConfigurator = Extension.Configurator()
  .input<ConfigurationInput>()
  .normalized<ConfigurationNormalized>()
  .default(configurationDefault)
  .inputResolver<ConfigurationInputResolver$Func>(({ current, input }) => {
    return {
      methodMode: input.methodMode ?? current.methodMode,
      raw: input.raw ?? current.raw,
      url: input.url ? new URL(input.url) : current.url,
      headers: mergeHeadersInitWithStrategyMerge(current.headers, input.headers),
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
  method: httpMethodPost
  url: string | URL // todo URL for config and string only for input. Requires anyware to allow different types for input and existing config.
  body: BodyInit
}

export type ExchangeGetRequest = Omit<RequestInit, 'body' | 'method'> & {
  methodMode: MethodModeGetReads
  method: httpMethodGet
  url: string | URL
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
          const graphqlRequest: Grafaid.HTTP.RequestConfig = {
            operationName: input.request.operationName,
            variables: input.request.variables,
            query: print(input.request.query),
          }

          const operationType = isString(input.request.operation)
            ? input.request.operation
            : input.request.operation.operation
          const methodMode = input.transport.methodMode
          const requestMethod = methodMode === MethodMode.post
            ? `post`
            : OperationTypeToAccessKind[operationType] === `read`
            ? `get`
            : `post`

          const baseRequestInit = mergeRequestInit(
            mergeRequestInit(
              {
                headers: requestMethod === `get` ? getRequestHeadersRec : postRequestHeadersRec,
              },
              input.transport.raw,
            ),
            {
              headers: input.transport.headers,
            },
          )
          const request: ExchangeRequest = requestMethod === `get`
            ? {
              methodMode: methodMode as MethodModeGetReads,
              ...baseRequestInit,
              method: `get`,
              url: searchParamsAppendAll(input.transport.url, slots.searchParams(graphqlRequest)),
            }
            : {
              methodMode: methodMode,
              ...baseRequestInit,
              method: `post`,
              url: input.transport.url,
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
          fetch: (request: Request): MaybePromise<Response> => fetch(request),
        },
        async run(input, slots) {
          const request = new Request(input.request.url, input.request)
          const response = await slots.fetch(request)
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
