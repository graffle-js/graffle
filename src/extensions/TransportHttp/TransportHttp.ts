import { MethodMode, type MethodModeGetReads } from '../../client/transportHttp/request.js'
import type { MethodModePost } from '../../client/transportHttp/request.js'
import { createExtension, type Extension } from '../../entrypoints/extensionkit.js'
import type { TypeHooksEmpty } from '../../extension/TypeHooks.js'
import type { Anyware } from '../../lib/anyware/__.js'
import type { ConfigManager } from '../../lib/config-manager/__.js'
import type { Grafaid } from '../../lib/grafaid/__.js'
import { OperationTypeToAccessKind, print } from '../../lib/grafaid/document.js'
import { getRequestEncodeSearchParameters, postRequestEncodeBody } from '../../lib/grafaid/http/http.js'
import { getRequestHeadersRec, parseExecutionResult, postRequestHeadersRec } from '../../lib/grafaid/http/http.js'
import { mergeRequestInit, searchParamsAppendAll } from '../../lib/http.js'
import type { httpMethodGet, httpMethodPost } from '../../lib/http.js'
import { _, isString, type MaybePromise } from '../../lib/prelude.js'
import type { RequestPipeline } from '../../requestPipeline/RequestPipeline.js'

export interface TransportHttpConstructor {
  <$ConfigInit extends ConfigInit = ConfigInitEmpty>(
    configInit?: $ConfigInit,
  ): TransportHttp<ConfigManager.MergeDefaultsShallow<ConfigInitDefaults, $ConfigInit>>
}

export interface Configuration {
  url: URL | string
  methodMode: MethodMode
  headers?: HeadersInit
  raw?: RequestInit
}

export type ConfigInit = Partial<Configuration>

export interface ConfigInitDefaults {
  methodMode: 'post'
}

export interface ConfigInitEmpty {}

export interface TransportHttp<$Input extends Partial<Configuration>> extends Extension {
  name: `TransportHttp`
  config: Configuration
  transport: {
    name: 'http'
    config: Configuration
    configInit: $Input
    requestPipelineOverload: RequestPipelineOverload
  }
  typeHooks: TypeHooksEmpty
  onRequest: undefined
  builder: undefined
}

export interface RequestPipelineOverload extends Anyware.Overload {
  discriminant: ['transportType', 'http']
  input: Configuration
  inputInit: {}
  steps: {
    pack: {
      name: 'pack'
      slots: {
        searchParams: getRequestEncodeSearchParameters
        body: postRequestEncodeBody
      }
      input: PackInput
      output: PackOutput
    }
    exchange: {
      name: 'exchange'
      slots: {
        fetch: SlotFetch
      }
      input: PackOutput
      output: ExchangeOutput
    }
    unpack: {
      name: 'unpack'
      slots: {}
      input: ExchangeOutput
      output: RequestPipeline.DecodeInput
    }
  }
}

export interface PackInput extends RequestPipeline.PackInput {
  headers?: HeadersInit
}

export interface PackOutput extends Omit<RequestPipeline.PackInput, 'request'> {
  request: ExchangeRequest
}

export interface ExchangeOutput extends PackOutput {
  response: Response
}

export interface SlotFetch {
  (request: Request): MaybePromise<Response>
}

export type ExchangeRequest = ExchangePostRequest | ExchangeGetRequest

/**
 * An extension of {@link RequestInit} that adds a required `url` property and makes `body` required.
 */
type ExchangePostRequest = Omit<RequestInit, 'body' | 'method'> & {
  methodMode: MethodModePost | MethodModeGetReads
  method: httpMethodPost
  url: string | URL // todo URL for config and string only for input. Requires anyware to allow different types for input and existing config.
  body: BodyInit
}

type ExchangeGetRequest = Omit<RequestInit, 'body' | 'method'> & {
  methodMode: MethodModeGetReads
  method: httpMethodGet
  url: string | URL
}

export const TransportHttp: TransportHttpConstructor = createExtension({
  name: `TransportHttp`,
  normalizeConfig: (configInit?: ConfigInit) => {
    return {
      ...configInit,
      url: configInit?.url ? new URL(configInit.url) : undefined,
      methodMode: configInit?.methodMode ?? `post`,
    }
  },
  // eslint-disable-next-line
  create() {
    return {
      // eslint-disable-next-line
      transport($) {
        return $
          .create(`http`)
          // .config<Configuration>()
          // .configInit<MergeConfigInitDefaults<$ConfigInit>>()
          .stepWithExtendedInput<{ headers?: HeadersInit }>()(`pack`, {
            slots: {
              searchParams: getRequestEncodeSearchParameters,
              body: postRequestEncodeBody,
            },
            run: (input, slots) => {
              const graphqlRequest: Grafaid.HTTP.RequestConfig = {
                operationName: input.request.operationName,
                variables: input.request.variables,
                query: print(input.request.query),
              }

              const operationType = isString(input.request.operation)
                ? input.request.operation
                : input.request.operation.operation
              const methodMode = input.methodMode
              const requestMethod = methodMode === MethodMode.post
                ? `post`
                : OperationTypeToAccessKind[operationType] === `read`
                ? `get`
                : `post`

              const baseProperties = mergeRequestInit(
                mergeRequestInit(
                  mergeRequestInit(
                    {
                      headers: requestMethod === `get` ? getRequestHeadersRec : postRequestHeadersRec,
                    },
                    {
                      headers: input.headers,
                    },
                  ),
                  input.raw,
                ),
                {
                  headers: input.headers,
                },
              )
              const request: ExchangeRequest = requestMethod === `get`
                ? {
                  methodMode: methodMode as MethodModeGetReads,
                  ...baseProperties,
                  method: `get`,
                  url: searchParamsAppendAll(input.url, slots.searchParams(graphqlRequest)),
                }
                : {
                  methodMode: methodMode,
                  ...baseProperties,
                  method: `post`,
                  url: input.url,
                  body: slots.body(graphqlRequest),
                }
              return {
                ...input,
                request,
              }
            },
          })
          .step(`exchange`, {
            slots: {
              fetch: (request: Request): MaybePromise<Response> => fetch(request),
            },
            run: async (input, slots) => {
              const request = new Request(input.request.url, input.request)
              const response = await slots.fetch(request)
              return {
                ...input,
                response,
              }
            },
          })
          .step(`unpack`, {
            run: async (input) => {
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
          })
      },
    }
  },
})
