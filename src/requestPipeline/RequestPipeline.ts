import type { GraffleExecutionResultVar } from '../client/handleOutput.js'
import type { Config } from '../client/Settings/Config.js'
import { MethodMode, type MethodModeGetReads } from '../client/transportHttp/request.js'
import { Anyware } from '../lib/anyware/__.js'
import type { Grafaid } from '../lib/grafaid/__.js'
import { OperationTypeToAccessKind, print } from '../lib/grafaid/document.js'
import { execute } from '../lib/grafaid/execute.js' // todo
import {
  getRequestEncodeSearchParameters,
  getRequestHeadersRec,
  parseExecutionResult,
  postRequestEncodeBody,
  postRequestHeadersRec,
} from '../lib/grafaid/http/http.js'
import { normalizeRequestToNode } from '../lib/grafaid/request.js'
import { mergeRequestInit, searchParamsAppendAll } from '../lib/http.js'
import { casesExhausted, isAbortError, isString } from '../lib/prelude.js'
import { Transport } from '../types/Transport.js'
import { decodeResultData } from './CustomScalars/decode.js'
import { encodeRequestVariables } from './CustomScalars/encode.js'
import {
  type CoreExchangeGetRequest,
  type CoreExchangePostRequest,
  type HookMap,
  hookNamesOrderedBySequence,
  type HookSequence,
} from './types.js'

export type RequestPipeline<$Config extends Config = Config> = Anyware.Pipeline<
  HookSequence,
  HookMap<$Config>,
  GraffleExecutionResultVar<$Config>
>

export const RequestPipeline = Anyware.create<HookSequence, HookMap, Grafaid.FormattedExecutionResult>({
  // If core errors caused by an abort error then raise it as a direct error.
  // This is an expected possible error. Possible when user cancels a request.
  passthroughErrorWith: (signal) => {
    // todo have anyware propagate the input that was passed to the hook that failed.
    // it will give us a bit more confidence that we're only allowing this abort error for fetch requests stuff
    // context.config.transport.type === Transport.http
    return signal.hookName === `exchange` && isAbortError(signal.error)
  },
  hookNamesOrderedBySequence,
  hooks: {
    encode: ({ input }) => {
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
    pack: {
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
              : methodMode === MethodMode.getReads // eslint-disable-line
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
            const request: CoreExchangePostRequest | CoreExchangeGetRequest = requestMethod === `get`
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
    },
    exchange: {
      slots: {
        // Put fetch behind a lambda so that it can be easily globally overridden
        // by fixtures.
        fetch: (request) => fetch(request),
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
    },
    unpack: async ({ input }) => {
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
    decode: ({ input, previous }) => {
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
  },
  // todo expose return handling as part of the pipeline?
  // would be nice but alone would not yield type safe return handling
  // still, while figuring the type story out, might be a useful escape hatch for some cases...
})
// todo
// .use(transportHttp)
// RequestPipeline
