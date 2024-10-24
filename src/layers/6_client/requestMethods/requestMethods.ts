import { Select } from '../../../documentBuilder/Select/__.js'
import type { TypeFunction } from '../../../entrypoints/utilities-for-generated.js'
import type { Fluent } from '../../../lib/fluent/__.js'
import type { Grafaid } from '../../../lib/grafaid/__.js'
import { isSymbol } from '../../../lib/prelude.js'
import type { GlobalRegistry } from '../../../types/GlobalRegistry/GlobalRegistry.js'
import { RequestCore } from '../../5_request/__.js'
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
    query: createMethodRootType(state, `Query`),
    mutation: createMethodRootType(state, `Mutation`),
    // todo
    // subscription: async () => {},
  }
})

export const createMethodDocument = (state: ClientContext) => (document: Select.Document.DocumentObject) => {
  const documentNormalized = Select.Document.normalizeOrThrow(document)
  return {
    run: async (maybeOperationName?: string) => {
      return await executeDocument(state, documentNormalized, maybeOperationName)
    },
  }
}

const createMethodRootType = (state: ClientContext, rootTypeName: Grafaid.Schema.RootTypeName) => {
  return new Proxy({}, {
    get: (_, key) => {
      if (isSymbol(key)) throw new Error(`Symbols not supported.`)

      if (key.startsWith(`$batch`)) {
        return async (selectionSetOrIndicator: Select.SelectionSet.AnySelectionSet) =>
          executeRootType(state, rootTypeName, selectionSetOrIndicator)
      } else {
        const fieldName = key
        return (selectionSetOrArgs: Select.SelectionSet.AnySelectionSet) =>
          executeRootField(state, rootTypeName, fieldName, selectionSetOrArgs)
      }
    },
  })
}

const executeRootField = async (
  state: ClientContext,
  rootTypeName: Grafaid.Schema.RootTypeName,
  rootFieldName: string,
  rootFieldSelectionSet?: Select.SelectionSet.AnySelectionSet,
) => {
  const result = await executeRootType(state, rootTypeName, {
    [rootFieldName]: rootFieldSelectionSet ?? {},
  })

  if (result instanceof Error) return result

  return state.config.output.envelope.enabled
    ? result
    // @ts-expect-error
    : result[rootFieldName]
}

const executeRootType = async (
  state: ClientContext,
  rootTypeName: Grafaid.Schema.RootTypeName,
  rootTypeSelectionSet: Select.SelectionSet.AnySelectionSet,
) => {
  return executeDocument(
    state,
    Select.Document.createDocumentNormalizedFromRootTypeSelection(
      rootTypeName,
      rootTypeSelectionSet,
    ),
  )
}

export const executeDocument = async (
  state: ClientContext,
  document: Select.Document.DocumentNormalized,
  operationName?: string,
  variables?: Grafaid.Variables,
) => {
  const transportType = state.config.transport.type
  const interfaceType = `typed`
  const url = state.config.transport.type === `http` ? state.config.transport.url : undefined
  const schema = state.config.transport.type === `http` ? undefined : state.config.transport.schema

  const initialInput = {
    state,
    interfaceType,
    transportType,
    url,
    schema,
    request: {
      document,
      operationName,
      variables,
    },
  } as RequestCore.Hooks.HookDefEncode<Config>['input']

  const result = await RequestCore.anyware.run({
    initialInput,
    retryingExtension: state.retry as any,
    extensions: state.extensions.filter(_ => _.onRequest !== undefined).map(_ => _.onRequest!) as any,
  })

  return handleOutput(state, result)
}
