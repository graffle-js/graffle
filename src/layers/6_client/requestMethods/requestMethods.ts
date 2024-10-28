import { OperationTypeNode } from 'graphql'
import { Select } from '../../../documentBuilder/Select/__.js'
import { SelectionSetGraphqlMapper } from '../../../documentBuilder/SelectGraphQLMapper/__.js'
import type { TypeFunction } from '../../../entrypoints/utilities-for-generated.js'
import type { Fluent } from '../../../lib/fluent/__.js'
import { isSymbol } from '../../../lib/prelude.js'
import type { GlobalRegistry } from '../../../types/GlobalRegistry/GlobalRegistry.js'
import { RequestCore } from '../../5_request/__.js'
import { graffleMappedResultToRequest } from '../../5_request/core.js'
import { type ClientContext, defineTerminus } from '../fluent.js'
import { handleOutput } from '../handleOutput.js'
import type { Config } from '../Settings/Config.js'

export interface FnRequestMethods extends Fluent.FnMerge {
  // @ts-expect-error untyped params
  return: BuilderRequestMethods<this['params']>
}

// dprint-ignore
export type BuilderRequestMethods<$Context extends ClientContext> =
  & (
    // todo
    // GlobalRegistry.Has<$Context['name']> extends false
    // eslint-disable-next-line
    // @ts-ignore passes after generation
    GlobalRegistry.Has<$Context['config']['name']> extends false
      ? {}
      :
        (
          // eslint-disable-next-line
          // @ts-ignore Passes after generation
          & TypeFunction.Call<GlobalRegistry.GetOrDefault<$Context['config']['name']>['interfaces']['Root'], $Context>
          & {
              // eslint-disable-next-line
              // @ts-ignore Passes after generation
              document: TypeFunction.Call<GlobalRegistry.GetOrDefault<$Context['config']['name']>['interfaces']['Document'], $Context>
            }
        )
  )

export const requestMethodsProperties = defineTerminus((state) => {
  return {
    document: createMethodDocument(state),
    query: createMethodOperationType(state, OperationTypeNode.QUERY),
    mutation: createMethodOperationType(state, OperationTypeNode.MUTATION),
    // todo
    // subscription: async () => {},
  }
})

const createMethodDocument = (state: ClientContext) => (document: Select.Document.DocumentObject) => {
  const documentNormalized = Select.Document.normalizeOrThrow(document)
  return {
    run: async (maybeOperationName?: string) => {
      return await executeDocument(state, documentNormalized, maybeOperationName)
    },
  }
}

const createMethodOperationType = (state: ClientContext, operationType: OperationTypeNode) => {
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
  state: ClientContext,
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
  state: ClientContext,
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
  state: ClientContext,
  document: Select.Document.DocumentNormalized,
  operationName?: string,
) => {
  const transportType = state.config.transport.type
  const url = state.config.transport.type === `http` ? state.config.transport.url : undefined
  const schema = state.config.transport.type === `http` ? undefined : state.config.transport.schema

  const request = graffleMappedResultToRequest(
    SelectionSetGraphqlMapper.toGraphQL(document, {
      sddm: state.config.schemaMap,
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
  } as RequestCore.Hooks.HookDefEncode<Config>['input']

  const result = await RequestCore.anyware.run({
    initialInput,
    retryingExtension: state.retry as any,
    extensions: state.extensions.filter(_ => _.onRequest !== undefined).map(_ => _.onRequest!) as any,
  })

  return handleOutput(state, result)
}
