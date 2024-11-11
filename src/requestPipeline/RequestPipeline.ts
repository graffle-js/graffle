import type { FormattedExecutionResult, GraphQLSchema } from 'graphql'
import type { Context } from '../client/context.js'
import type { GraffleExecutionResultEnvelope } from '../client/handleOutput.js'
import type { Config } from '../client/Settings/Config.js'
import { MethodMode, type MethodModeGetReads } from '../client/transportHttp/request.js'
import type { MethodModePost } from '../client/transportHttp/request.js'
import { Anyware } from '../lib/anyware/__.js'
import type { Grafaid } from '../lib/grafaid/__.js'
import { OperationTypeToAccessKind, print } from '../lib/grafaid/document.js'
import { execute } from '../lib/grafaid/execute.js' // todo
import { getRequestEncodeSearchParameters, postRequestEncodeBody } from '../lib/grafaid/http/http.js'
import { getRequestHeadersRec, parseExecutionResult, postRequestHeadersRec } from '../lib/grafaid/http/http.js'
import { normalizeRequestToNode } from '../lib/grafaid/request.js'
import { mergeRequestInit, searchParamsAppendAll } from '../lib/http.js'
import type { httpMethodGet, httpMethodPost } from '../lib/http.js'
import { casesExhausted, isAbortError, isString, type MaybePromise } from '../lib/prelude.js'
import { Transport } from '../types/Transport.js'
import type { TransportHttp, TransportMemory } from '../types/Transport.js'
import { decodeResultData } from './CustomScalars/decode.js'
import { encodeRequestVariables } from './CustomScalars/encode.js'

export const requestPipeline = Anyware.Pipeline
  .createWithSpec<requestPipeline.Spec>({
    options: {
      // If core errors caused by an abort error then raise it as a direct error.
      // This is an expected possible error. Possible when user cancels a request.
      passthroughErrorWith: (signal) => {
        // todo have anyware propagate the input that was passed to the hook that failed.
        // it will give us a bit more confidence that we're only allowing this abort error for fetch requests stuff
        // context.config.transport.type === Transport.http
        return signal.hookName === `exchange` && isAbortError(signal.error)
      },
    },
    steps: [{
      name: `encode`,
      run: ({ input }): requestPipeline.Steps.HookDefPack['input'] => {
        const sddm = input.state.schemaMap
        const scalars = input.state.scalars.map
        if (sddm) {
          const request = normalizeRequestToNode(input.request)

          // We will mutate query. Assign it back to input for it to be carried forward.
          input.request.query = request.query

          encodeRequestVariables({ sddm, scalars, request })
        }

        return input
      },
    }, {
      name: `pack`,
      slots: {
        searchParams: getRequestEncodeSearchParameters,
        body: postRequestEncodeBody,
      },
      run: ({ input, slots }) => {
        const graphqlRequest: Grafaid.HTTP.RequestConfig = {
          operationName: input.request.operationName,
          variables: input.request.variables,
          query: print(input.request.query),
        }

        // TODO thrown error here is swallowed in examples.
        switch (input.transportType) {
          case `memory`: {
            return {
              ...input,
              request: graphqlRequest,
            }
          }
          case `http`: {
            if (input.state.config.transport.type !== Transport.http) throw new Error(`transport type is not http`)

            const operationType = isString(input.request.operation)
              ? input.request.operation
              : input.request.operation.operation
            const methodMode = input.state.config.transport.config.methodMode
            const requestMethod = methodMode === MethodMode.post
              ? `post`
              : methodMode === MethodMode.getReads // eslint-disable-line @typescript-eslint/no-unnecessary-condition
              ? OperationTypeToAccessKind[operationType] === `read` ? `get` : `post`
              : casesExhausted(methodMode)

            const baseProperties = mergeRequestInit(
              mergeRequestInit(
                mergeRequestInit(
                  {
                    headers: requestMethod === `get` ? getRequestHeadersRec : postRequestHeadersRec,
                  },
                  {
                    headers: input.state.config.transport.config.headers,
                  },
                ),
                input.state.config.transport.config.raw,
              ),
              {
                headers: input.headers,
              },
            )
            const request:
              | requestPipeline.Steps.CoreExchangePostRequest
              | requestPipeline.Steps.CoreExchangeGetRequest = requestMethod === `get`
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
          }
          default:
            throw casesExhausted(input)
        }
      },
    }, {
      name: `exchange`,
      slots: {
        fetch: (requestInfo: RequestInfo): MaybePromise<Response> => fetch(requestInfo),
      },
      run: async ({ input, slots }) => {
        switch (input.transportType) {
          case `http`: {
            const request = new Request(input.request.url, input.request)
            const response = await slots.fetch(request)
            return {
              ...input,
              response,
            }
          }
          case `memory`: {
            const result = await execute(input)
            return {
              ...input,
              result,
            }
          }
          default:
            throw casesExhausted(input)
        }
      },
    }, {
      name: `unpack`,
      run: async ({ input }) => {
        switch (input.transportType) {
          case `http`: {
            // todo 1 if response is missing header of content length then .json() hangs forever.
            //        firstly consider a timeout, secondly, if response is malformed, then don't even run .json()
            // todo 2 if response is e.g. 404 with no json body, then an error is thrown because json parse cannot work, not gracefully handled here
            const json = await input.response.json() as object
            const result = parseExecutionResult(json)
            return {
              ...input,
              result,
            }
          }
          case `memory`: {
            return {
              ...input,
              result: input.result,
            }
          }
          default:
            throw casesExhausted(input)
        }
      },
    }, {
      name: `decode`,
      run: ({ input, previous }) => {
        // If there has been an error and we definitely don't have any data, such as when
        // giving an operation name that doesn't match any in the document,
        // then don't attempt to decode.
        const isError = !input.result.data && (input.result.errors?.length ?? 0) > 0
        if (input.state.schemaMap && !isError) {
          decodeResultData({
            sddm: input.state.schemaMap,
            request: normalizeRequestToNode(previous.pack.input.request),
            data: input.result.data,
            scalars: input.state.scalars.map,
          })
        }

        const result = input.transportType === `http`
          ? {
            ...input.result,
            response: input.response,
          }
          : input.result

        return result
      },
    }],
  })

export namespace requestPipeline {
  export type ResultFailure = Anyware.Pipeline.ResultFailure
  // | Errors.ContextualError
  // Possible from http transport fetch with abort controller.
  // | DOMException

  export type Result<$Config extends Config = Config> = Anyware.Pipeline.InferResultFromSpec<Spec<$Config>>

  export type Spec<$Config extends Config = Config> = Anyware.PipelineSpecFromSteps<[
    Steps.HookDefEncode<$Config>,
    Steps.HookDefPack<$Config>,
    Steps.HookDefExchange<$Config>,
    Steps.HookDefUnpack<$Config>,
    Steps.HookDefDecode<$Config>,
  ]>

  export namespace Steps {
    export interface HookInputBase {
      state: Context
    }

    // dprint-ignore

    type TransportInput<$Config extends Config, $HttpProperties = {}, $MemoryProperties = {}> =
  | (
      TransportHttp extends $Config['transport']['type']
        ? ({
            transportType: TransportHttp
            url: string | URL
          } & $HttpProperties)
        : never
    )
  | (
      TransportMemory extends $Config['transport']['type']
        ? ({
          transportType: TransportMemory
          schema: GraphQLSchema
        } & $MemoryProperties)
        : never
    )

    // ---------------------------

    export type HookDefEncode<$Config extends Config = Config> = {
      name: `encode`
      input:
        & { request: Grafaid.RequestAnalyzedInput }
        & HookInputBase
        & TransportInput<$Config>
    }

    export type HookDefPack<$Config extends Config = Config> = {
      name: `pack`
      input:
        & HookInputBase
        & TransportInput<
          $Config,
          // todo why is headers here but not other http request properties?
          { headers?: HeadersInit }
        >
        & { request: Grafaid.RequestAnalyzedInput }
      slots: {
        /**
         * When request will be sent using GET this slot is called to create the value that will be used for the HTTP Search Parameters.
         */
        searchParams: getRequestEncodeSearchParameters
        /**
         * When request will be sent using POST this slot is called to create the value that will be used for the HTTP body.
         */
        body: postRequestEncodeBody
      }
    }

    export type HookDefExchange<$Config extends Config> = {
      name: `exchange`
      slots: {
        fetch: (request: Request) => Response | Promise<Response>
      }
      input:
        & HookInputBase
        & TransportInput<
          $Config,
          { request: CoreExchangePostRequest | CoreExchangeGetRequest; headers?: HeadersInit },
          { request: Grafaid.HTTP.RequestConfig }
        >
    }

    export type HookDefUnpack<$Config extends Config> = {
      name: `unpack`
      input:
        & HookInputBase
        & TransportInput<
          $Config,
          { response: Response },
          { result: FormattedExecutionResult }
        >
    }

    export type HookDefDecode<$Config extends Config> = {
      name: `decode`
      input:
        & HookInputBase
        & TransportInput<
          $Config,
          { response: Response }
        >
        & { result: FormattedExecutionResult }
      output: GraffleExecutionResultEnvelope<$Config>
    }

    /**
     * An extension of {@link RequestInit} that adds a required `url` property and makes `body` required.
     */
    export type CoreExchangePostRequest = Omit<RequestInit, 'body' | 'method'> & {
      methodMode: MethodModePost | MethodModeGetReads
      method: httpMethodPost
      url: string | URL // todo URL for config and string only for input. Requires anyware to allow different types for input and existing config.
      body: BodyInit
    }

    export type CoreExchangeGetRequest = Omit<RequestInit, 'body' | 'method'> & {
      methodMode: MethodModeGetReads
      method: httpMethodGet
      url: string | URL
    }
  }
}
