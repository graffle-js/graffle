import { type ExecutionResult, parse, print } from 'graphql'
import { Anyware } from '../../lib/anyware/__.js'
import {
  getRequestEncodeSearchParameters,
  getRequestHeadersRec,
  parseExecutionResult,
  postRequestEncodeBody,
  postRequestHeadersRec,
} from '../../lib/graphql-http/graphqlHTTP.js'
import { execute } from '../../lib/graphql-plus/execute.js'
import type { Nodes } from '../../lib/graphql-plus/graphql.js'
import {
  OperationTypeAccessTypeMap,
  parseGraphQLOperationType,
  type Variables,
} from '../../lib/graphql-plus/graphql.js'
import { mergeRequestInit, searchParamsAppendAll } from '../../lib/http.js'
import { casesExhausted, getOptionalNullablePropertyOrThrow, isString, throwNull } from '../../lib/prelude.js'
import { Select } from '../2_Select/__.js'
import { ResultSet } from '../3_Result/__.js'
import { SelectionSetGraphqlMapper } from '../3_SelectGraphQLMapper/__.js'
import type { GraffleExecutionResultVar } from '../6_client/handleOutput.js'
import type { Config } from '../6_client/Settings/Config.js'
import { MethodMode, type MethodModeGetReads } from '../6_client/transportHttp/request.js'
import {
  type CoreExchangeGetRequest,
  type CoreExchangePostRequest,
  type HookMap,
  hookNamesOrderedBySequence,
  type HookSequence,
} from './hooks.js'
import { injectTypenameOnRootResultFields } from './schemaErrors.js'
import { Transport } from './types.js'

export const anyware = Anyware.create<HookSequence, HookMap, ExecutionResult>({
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
      let documentString: string

      // todo: the other case where we're going to need to parse document is for custom scalar support of raw
      const isWillInjectTypename = input.state.config.output.errors.schema && input.schemaIndex

      if (isWillInjectTypename) {
        const documentObject: Nodes.DocumentNode = input.interfaceType === `raw`
          ? isString(input.request.query)
            ? parse(input.request.query)
            : input.request.query as Nodes.DocumentNode
          : SelectionSetGraphqlMapper.toGraphQL({
            schema: input.schemaIndex!,
            document: input.request.document,
            customScalarsIndex: input.schemaIndex!.customScalars.input,
          })

        injectTypenameOnRootResultFields({
          document: documentObject,
          operationName: input.request.operationName,
          schema: input.schemaIndex!,
        })

        documentString = print(documentObject)
      } else {
        documentString = input.interfaceType === `raw`
          ? isString(input.request.query)
            ? input.request.query
            : print(input.request.query as Nodes.DocumentNode)
          : print(SelectionSetGraphqlMapper.toGraphQL({
            schema: input.schemaIndex!,
            document: input.request.document,
            customScalarsIndex: input.schemaIndex!.customScalars.input,
          }))
      }

      const variables: Variables | undefined = input.interfaceType === `raw`
        ? input.request.variables
        // todo turn inputs into variables
        : undefined

      return {
        ...input,
        request: {
          query: documentString,
          variables,
          operationName: input.request.operationName,
        },
      }
    },
    pack: {
      slots: {
        searchParams: getRequestEncodeSearchParameters,
        body: postRequestEncodeBody,
      },
      run: ({ input, slots }) => {
        // TODO thrown error here is swallowed in examples.
        switch (input.transportType) {
          case `memory`: {
            return input
            // return {
            //   ...input,
            //   request: {
            //     ...input.request,
            //     schema: input.schema,
            //   },
            // }
          }
          case `http`: {
            if (input.state.config.transport.type !== Transport.http) throw new Error(`transport type is not http`)

            const methodMode = input.state.config.transport.config.methodMode
            // todo parsing here can be optimized.
            //      1. If using TS interface then work with initially submitted structured data to already know the operation type
            //      2. Maybe: Memoize over request.{ operationName, query }
            //      3. Maybe: Keep a cache of parsed request.{ query }
            const operationType = throwNull(parseGraphQLOperationType(input.request)) // todo better feedback here than throwNull
            const requestMethod = methodMode === MethodMode.post
              ? `post`
              : methodMode === MethodMode.getReads // eslint-disable-line
              ? OperationTypeAccessTypeMap[operationType] === `read` ? `get` : `post`
              : casesExhausted(methodMode)

            const baseProperties = mergeRequestInit(
              mergeRequestInit(
                mergeRequestInit(
                  {
                    headers: requestMethod === `get` ? getRequestHeadersRec : postRequestHeadersRec,
                  },
                  {
                    headers: input.state.config.transport.config.headers,
                    signal: input.state.config.transport.config.signal,
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
                url: searchParamsAppendAll(input.url, slots.searchParams(input.request)),
              }
              : {
                methodMode: methodMode,
                ...baseProperties,
                method: `post`,
                url: input.url,
                body: slots.body(input.request),
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
    // todo
    // Given that we manipulate the selection set in encode, and given decode relies on the sent selection set
    // it follows that the decode hook depends on the output of the encode hook. that means we need to plumb
    // through the hooks that data built during encode. Yet encode doesn't output it currently, but rather prints it.
    // Hooks could have a new optional field "schema". When present certain enhanced features would be allowed.
    // like custom scalars and result fields.
    decode: ({ input }) => {
      switch (input.interfaceType) {
        // todo this depends on the return mode
        case `raw`: {
          switch (input.transportType) {
            case `http`: {
              return {
                ...input.result,
                response: input.response,
              }
            }
            case `memory`: {
              return input.result
            }
            default:
              throw casesExhausted(input)
          }
        }
        case `typed`: {
          if (!input.schemaIndex) throw new Error(`schemaIndex is required for typed decode`)

          const operation = Select.Document.getOperationOrThrow(input.document!, input.operationName)
          // todo optimize
          // 1. Generate a map of possible custom scalar paths (tree structure)
          // 2. When traversing the result, skip keys that are not in the map
          // console.log(input.context.schemaIndex.Root)
          // console.log(getOptionalNullablePropertyOrThrow(input.context.schemaIndex.Root, operation.rootType))
          const dataDecoded = ResultSet.decode(
            getOptionalNullablePropertyOrThrow(input.schemaIndex.Root, operation.rootType),
            operation.selectionSet,
            input.result.data,
          )
          switch (input.transportType) {
            case `memory`: {
              return { ...input.result, data: dataDecoded }
            }
            case `http`: {
              return { ...input.result, data: dataDecoded, response: input.response }
            }
            default:
              throw casesExhausted(input)
          }
        }
        default:
          throw casesExhausted(input)
      }
    },
  },
  // todo expose return handling as part of the pipeline?
  // would be nice but alone would not yield type safe return handling
  // still, while figuring the type story out, might be a useful escape hatch for some cases...
})

export type Core<$Config extends Config = Config> = Anyware.Core<
  HookSequence,
  HookMap<$Config>,
  GraffleExecutionResultVar<$Config>
>

const isAbortError = (error: any): error is DOMException & { name: 'AbortError' } => {
  return (error instanceof DOMException && error.name === `AbortError`)
    // Under test with JSDOM, the error must be checked this way.
    // todo look for an open issue with JSDOM to link here, is this just artifact of JSDOM or is it a real issue that happens in browsers?
    || (error instanceof Error && error.message.startsWith(`AbortError:`))
}