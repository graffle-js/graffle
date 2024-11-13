import type { FormattedExecutionResult } from 'graphql'
import type { Context } from '../client/context.js'
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
import { _, isAbortError, isString, type MaybePromise } from '../lib/prelude.js'
import { Transport } from '../types/Transport.js'
import { decodeResultData } from './CustomScalars/decode.js'
import { encodeRequestVariables } from './CustomScalars/encode.js'

export const requestPipeline = Anyware.Pipeline
  .create<{
    request: Grafaid.RequestAnalyzedInput
    state: Context
  }>({
    // If core errors caused by an abort error then raise it as a direct error.
    // This is an expected possible error. Possible when user cancels a request.
    passthroughErrorWith: (signal) => {
      // todo have anyware propagate the input that was passed to the hook that failed.
      // it will give us a bit more confidence that we're only allowing this abort error for fetch requests stuff
      // context.config.transport.type === Transport.http
      return signal.hookName === `exchange` && isAbortError(signal.error)
    },
  })
  .step(`encode`, {
    run: (input) => {
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
  })
  .step(`pack`)
  .step(`exchange`)
  .step(`unpack`)
  .step(`decode`, {
    run: (
      input: {
        state: Context
        result: FormattedExecutionResult
      },
      _,
      previous,
    ) => {
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

      // todo needs to be moved into the http overload
      // @ts-expect-error
      return input.transportType === `http`
        ? {
          ...input.result,
          // @ts-expect-error
          response: input.response,
        }
        : input.result

      // return input.result
    },
  })
  .overload((overload) =>
    overload
      .createWithInput<{ url: URL | string }>()({
        discriminant: [`transportType`, `http`],
      })
      .stepWithInputExtension<{ headers?: HeadersInit }>()(`pack`, {
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

          if (input.state.config.transport.type !== Transport.http) throw new Error(`transport type is not http`)

          const operationType = isString(input.request.operation)
            ? input.request.operation
            : input.request.operation.operation
          const methodMode = input.state.config.transport.config.methodMode
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
                  headers: input.state.config.transport.config.headers,
                },
              ),
              input.state.config.transport.config.raw,
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
          fetch: (requestInfo: RequestInfo): MaybePromise<Response> => fetch(requestInfo),
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
  )
  .overload((overload) =>
    overload
      .createWithInput<{ schema: Grafaid.Schema.Schema }>()({
        discriminant: [`transportType`, `memory`],
      })
      .step(`pack`, {
        run: (input) => {
          const graphqlRequest: Grafaid.HTTP.RequestConfig = {
            operationName: input.request.operationName,
            variables: input.request.variables,
            query: print(input.request.query),
          }
          return {
            ...input,
            request: graphqlRequest,
          }
        },
      })
      .step(`exchange`, {
        run: async (input) => {
          const result = await execute(input)
          return {
            ...input,
            result,
          }
        },
      })
      .step(`unpack`, {
        run: (input) => {
          return input
          // return {
          //   ...input,
          //   result: input.result,
          // }
        },
      })
  )
  .done()

export type RequestPipeline = typeof requestPipeline

type ExchangeRequest = ExchangePostRequest | ExchangeGetRequest

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

export namespace requestPipeline {
  export type ResultFailure = Anyware.Pipeline.ResultFailure
  // | Errors.ContextualError
  // Possible from http transport fetch with abort controller.
  // | DOMException
}
