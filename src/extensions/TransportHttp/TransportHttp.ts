import { Extension } from '../../entrypoints/extension.js'
import type { TypeHooksEmpty } from '../../extension/TypeHooks.js'
import type { Configurator } from '../../extension2/configurator.js'
import type { Anyware } from '../../lib/anyware/__.js'
import type { Grafaid } from '../../lib/grafaid/__.js'
import { OperationTypeToAccessKind, print } from '../../lib/grafaid/document.js'
import type { getRequestEncodeSearchParameters, postRequestEncodeBody } from '../../lib/grafaid/http/http.js'
import { getRequestHeadersRec, parseExecutionResult, postRequestHeadersRec } from '../../lib/grafaid/http/http.js'
import { mergeRequestInit, searchParamsAppendAll } from '../../lib/http.js'
import type { httpMethodGet, httpMethodPost } from '../../lib/http.js'
import { _, isString, type MaybePromise, type PartialOrUndefined } from '../../lib/prelude.js'
import type { RequestPipeline } from '../../requestPipeline/RequestPipeline.js'
import type { ConfigurationResolverTF } from '../../types/ConfigurationResolver.js'

// ----------------------------
// Configuration
// ----------------------------

type TransportHttpConfigurator = Configurator<
  ConfigurationInput,
  ConfigurationNormalized,
  ConfigurationDefault,
  Configurator.InputResolver<ConfigurationInputResolver$Func>
>

export type ConfigurationInput = {
  url?: URL | string
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

export interface ConfigurationInputResolver$Func extends Configurator.InputResolver$Func {
  // @ts-expect-error
  _return: ConfigurationInputResolver$Func_<this['$input'], this['$partialNormalized']>
}
// dprint-ignore
export interface ConfigurationInputResolver$Func_<
  $Input extends ConfigurationInput,
  $PartialNormalized extends Partial<ConfigurationNormalized>,
> extends Partial<ConfigurationNormalized> {
  url: 'url' extends keyof $PartialNormalized ? URL : 'url' extends keyof $Input ? URL : undefined
  methodMode: 'methodMode' extends keyof $PartialNormalized ? MethodMode : 'methodMode' extends keyof $Input ? MethodMode : undefined
}

// ----------------------------
// Transport
// ----------------------------

export const MethodMode = {
  post: `post`,
  getReads: `getReads`,
} as const

export type MethodModeGetReads = typeof MethodMode['getReads']

export type MethodModePost = typeof MethodMode['post']

export type MethodMode = MethodModePost | MethodModeGetReads

export type TransportHttpInput = {
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

export interface RequestPipelineOverload extends Anyware.Overload {
  discriminant: ['transportType', 'http']
  input: ConfigurationNormalized
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
      input: ExchangeInput
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

export interface ExchangeInput extends PackOutput {
  headers?: HeadersInit
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

// ----------------------------
// Extension
// ----------------------------

export interface TransportHttpConstructor {
  <$ConfigurationInput extends ConfigurationInput = {}>(
    configurationInput?: $ConfigurationInput,
  ): TransportHttp<ConfigurationInputResolver$Func_<$ConfigurationInput, ConfigurationDefault>>
}

export interface TransportHttp<$ConfigurationNormalizedPartial extends Partial<ConfigurationNormalized>>
  extends Extension
{
  name: `TransportHttp`
  configurator: TransportHttpConfigurator
  // transport: {
  //   name: 'http'
  //   // configAfterCreate: $ConfigurationPartial
  //   configurationDefaults: $ConfigurationPartial // PartialOrUndefined<Configuration>
  //   requestPipelineOverload: RequestPipelineOverload
  //   configurationResolver: ConfigurationInputResolver
  //   // Types
  //   configuration: ConfigurationNormalized
  //   configurationInit: ConfigurationInput
  //   configurationResolverTF: ConfigurationInputResolver$Func
  // }
  // typeHooks: TypeHooksEmpty
  // onRequest: undefined
  // builder: undefined
}

export const TransportHttp = Extension
  .create(`TransportHttp`)
  .configuration((__) =>
    __
      .typeOfInput<ConfigurationInput>()
      .typeOfNormalized<ConfigurationNormalized>()
      .default({
        methodMode: `post`,
      })
      .inputResolver<ConfigurationInputResolver$Func>((current, input) => {
        // todo
        input
        return current
      })
  )
  .extension
// .transport((define) =>
//   define(`http`)
//     .stepWithExtendedInput<{ headers?: HeadersInit }>()(`pack`, {
//       slots: {
//         searchParams: getRequestEncodeSearchParameters,
//         body: postRequestEncodeBody,
//       },
//       run: (input, slots) => {
//         const graphqlRequest: Grafaid.HTTP.RequestConfig = {
//           operationName: input.request.operationName,
//           variables: input.request.variables,
//           query: print(input.request.query),
//         }

//         const operationType = isString(input.request.operation)
//           ? input.request.operation
//           : input.request.operation.operation
//         const methodMode = input.methodMode
//         const requestMethod = methodMode === MethodMode.post
//           ? `post`
//           : OperationTypeToAccessKind[operationType] === `read`
//           ? `get`
//           : `post`

//         const baseProperties = mergeRequestInit(
//           mergeRequestInit(
//             mergeRequestInit(
//               {
//                 headers: requestMethod === `get` ? getRequestHeadersRec : postRequestHeadersRec,
//               },
//               {
//                 headers: input.headers,
//               },
//             ),
//             input.raw,
//           ),
//           {
//             headers: input.headers,
//           },
//         )
//         const request: ExchangeRequest = requestMethod === `get`
//           ? {
//             methodMode: methodMode as MethodModeGetReads,
//             ...baseProperties,
//             method: `get`,
//             url: searchParamsAppendAll(input.url, slots.searchParams(graphqlRequest)),
//           }
//           : {
//             methodMode: methodMode,
//             ...baseProperties,
//             method: `post`,
//             url: input.url,
//             body: slots.body(graphqlRequest),
//           }
//         return {
//           ...input,
//           request,
//         }
//       },
//     })
//     .step(`exchange`, {
//       slots: {
//         fetch: (request: Request): MaybePromise<Response> => fetch(request),
//       },
//       run: async (input, slots) => {
//         const request = new Request(input.request.url, input.request)
//         const response = await slots.fetch(request)
//         return {
//           ...input,
//           response,
//         }
//       },
//     })
//     .step(`unpack`, {
//       run: async (input) => {
//         // todo 1 if response is missing header of content length then .json() hangs forever.
//         //        firstly consider a timeout, secondly, if response is malformed, then don't even run .json()
//         // todo 2 if response is e.g. 404 with no json body, then an error is thrown because json parse cannot work, not gracefully handled here
//         const json = await input.response.json() as object
//         const result = parseExecutionResult(json)
//         return {
//           ...input,
//           result,
//         }
//       },
//     })
// )
