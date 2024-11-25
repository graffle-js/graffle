import { MethodMode, type MethodModeGetReads } from '../../client/transportHttp/request.js'
import type { MethodModePost } from '../../client/transportHttp/request.js'
import { Anyware } from '../../lib/anyware/__.js'
import type { Grafaid } from '../../lib/grafaid/__.js'
import { OperationTypeToAccessKind, print } from '../../lib/grafaid/document.js'
import { getRequestEncodeSearchParameters, postRequestEncodeBody } from '../../lib/grafaid/http/http.js'
import { getRequestHeadersRec, parseExecutionResult, postRequestHeadersRec } from '../../lib/grafaid/http/http.js'
import { mergeRequestInit, searchParamsAppendAll } from '../../lib/http.js'
import type { httpMethodGet, httpMethodPost } from '../../lib/http.js'
import { _, isString, type MaybePromise } from '../../lib/prelude.js'
import { Transport } from '../../types/Transport.js'
import type { RequestPipelineSpecBase } from '../RequestPipeline.js'

export const httpTransport = Anyware.Extension.Builder
  .create<RequestPipelineSpecBase>()
  .overload(overload =>
    overload
      .create({
        discriminant: [`transportType`, `http`],
      })
      .extendInput<{ url: URL | string }>()
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
  )

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
