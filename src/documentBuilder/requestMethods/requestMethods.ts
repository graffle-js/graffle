import { OperationTypeNode } from 'graphql'
import type { SimplifyDeep } from 'type-fest'
import { type Context } from '../../client/context.js'
import { handleOutput } from '../../client/handleOutput.js'
import type { Config } from '../../client/Settings/Config.js'
import type { TypeFunction } from '../../entrypoints/utilities-for-generated.js'
import { Builder } from '../../lib/builder/__.js'
import type { Grafaid } from '../../lib/grafaid/__.js'
import { getOperationDefinition } from '../../lib/grafaid/document.js'
import { isSymbol } from '../../lib/prelude.js'
import { RequestPipeline } from '../../requestPipeline/__.js'
import type { GlobalRegistry } from '../../types/GlobalRegistry/GlobalRegistry.js'
import { Select } from '../Select/__.js'
import { SelectionSetGraphqlMapper } from '../SelectGraphQLMapper/__.js'

export interface BuilderExtensionRequestMethods extends Builder.Extension {
  context: Context
  // @ts-expect-error untyped params
  return: RequestMethods<this['params']>
}

// dprint-ignore
export type RequestMethods<$Arguments extends Builder.Extension.Parameters<BuilderExtensionRequestMethods>> =
  SimplifyDeep<
    & (
      // todo
      // GlobalRegistry.Has<$Context['name']> extends false
      // eslint-disable-next-line
      // @ts-ignore passes after generation
      GlobalRegistry.Has<$Arguments['context']['name']> extends false
        ? {}
        :
          (
            // eslint-disable-next-line
            // @ts-ignore Passes after generation
            & TypeFunction.Call<GlobalRegistry.GetOrDefault<$Arguments['context']['name']>['interfaces']['Root'], $Arguments['context']>
            & {
                // eslint-disable-next-line
                // @ts-ignore Passes after generation
                document: TypeFunction.Call<GlobalRegistry.GetOrDefault<$Arguments['context']['name']>['interfaces']['Document'], $Arguments['context']>
              }
          )
    )
  >

export const requestMethodsProperties = Builder.Extension.create<BuilderExtensionRequestMethods>((_, context) => {
  return {
    document: createMethodDocument(context),
    query: createMethodOperationType(context, OperationTypeNode.QUERY),
    mutation: createMethodOperationType(context, OperationTypeNode.MUTATION),
    // todo
    // subscription: async () => {},
  } as any
})

const createMethodDocument = (state: Context) => (document: Select.Document.DocumentObject) => {
  const documentNormalized = Select.Document.normalizeOrThrow(document)
  return {
    run: async (maybeOperationName?: string) => {
      return await executeDocument(state, documentNormalized, maybeOperationName)
    },
  }
}

const createMethodOperationType = (state: Context, operationType: OperationTypeNode) => {
  return new Proxy({}, {
    get: (_, key) => {
      if (isSymbol(key)) throw new Error(`Symbols not supported.`)

      if (key.startsWith(`$batch`)) {
        return async (selectionSetOrIndicator: Select.SelectionSet.AnySelectionSet) =>
          executeOperation(state, operationType, selectionSetOrIndicator)
      } else {
        const fieldName = key
        return (selectionSetOrArgs: Select.SelectionSet.AnySelectionSet) =>
          executeRootField(state, operationType, fieldName, selectionSetOrArgs)
      }
    },
  })
}

const executeRootField = async (
  state: Context,
  operationType: OperationTypeNode,
  rootFieldName: string,
  rootFieldSelectionSet?: Select.SelectionSet.AnySelectionSet,
) => {
  const result = await executeOperation(state, operationType, {
    [rootFieldName]: rootFieldSelectionSet ?? {},
  })

  if (result instanceof Error) return result

  return state.config.output.envelope.enabled
    ? result
    // @ts-expect-error
    : result[rootFieldName]
}

const executeOperation = async (
  state: Context,
  operationType: OperationTypeNode,
  rootTypeSelectionSet: Select.SelectionSet.AnySelectionSet,
) => {
  return executeDocument(
    state,
    Select.Document.createDocumentNormalizedFromRootTypeSelection(
      operationType,
      rootTypeSelectionSet,
    ),
  )
}

const executeDocument = async (
  state: Context,
  document: Select.Document.DocumentNormalized,
  operationName?: string,
) => {
  const transportType = state.config.transport.type
  const url = state.config.transport.type === `http` ? state.config.transport.url : undefined
  const schema = state.config.transport.type === `http` ? undefined : state.config.transport.schema

  const request = graffleMappedResultToRequest(
    SelectionSetGraphqlMapper.toGraphQL(document, {
      sddm: state.schemaMap,
      // todo test that when custom scalars are used they are mapped correctly
      scalars: state.scalars.map,
    }),
    operationName,
  )

  const initialInput = {
    state,
    transportType,
    url,
    schema,
    request,
  } as RequestPipeline.Hooks.HookDefEncode<Config>['input']

  const result = await RequestPipeline.RequestPipeline.run({
    initialInput,
    // retryingExtension: state.retry as any,
    extensions: state.extensions.filter(_ => _.onRequest !== undefined).map(_ => _.onRequest!) as any,
  })

  return handleOutput(state, result)
}

export const graffleMappedResultToRequest = (
  { document, operationsVariables }: SelectionSetGraphqlMapper.Encoded,
  operationName?: string,
): Grafaid.RequestAnalyzedDocumentNodeInput => {
  // We get back variables for every operation in the Graffle document.
  // However, we only need the variables for the operation that was selected to be executed.
  // If there was NO operation name provided then we assume that the first operation in the document is the one that should be executed.
  // If there are MULTIPLE operations in the Graffle document AND the user has supplied an invalid operation name (either none or given matches none)
  // then what happens here is the variables from one operation can be mixed into another operation.
  // This shouldn't matter because such a state would be rejected by the server since it wouldn't know what operation to execute.
  const variables_ = operationName
    ? operationsVariables[operationName]
    : Object.values(operationsVariables)[0]

  const operation_ = getOperationDefinition({ query: document, operationName })
  if (!operation_) throw new Error(`Unknown operation named "${String(operationName)}".`)

  return {
    operationName,
    operation: operation_,
    query: document,
    variables: variables_,
  }
}
