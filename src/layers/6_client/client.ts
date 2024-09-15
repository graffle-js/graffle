import { type ExecutionResult, GraphQLSchema, type TypedQueryDocumentNode } from 'graphql'
import type { Anyware } from '../../lib/anyware/__.js'
import type { Errors } from '../../lib/errors/__.js'
import { isOperationTypeName, operationTypeNameToRootTypeName, type RootTypeName } from '../../lib/graphql.js'
import { mergeHeadersInit, mergeRequestInit } from '../../lib/http.js'
import { proxyGet, type SimplifyExceptError } from '../../lib/prelude.js'
import type { BaseInput, BaseInput_, TypedDocumentString } from '../0_functions/types.js'
import { Schema } from '../1_Schema/__.js'
import { readMaybeThunk } from '../1_Schema/core/helpers.js'
import type { GlobalRegistry } from '../2_generator/globalRegistry.js'
import type { DocumentObject, GraphQLObjectSelection } from '../3_SelectionSet/encode.js'
import { Core } from '../5_core/__.js'
import { type HookDefEncode } from '../5_core/core.js'
import { type InterfaceRaw, type TransportHttp } from '../5_core/types.js'
import type { DocumentFn } from './document.js'
import { createExtension, type Extension, type ExtensionCallBuilderMerge } from './extension.js'
import { handleOutput, type RawResolveOutputReturnRootType } from './handleOutput.js'
import type { BuilderRequestMethodsGeneratedRootTypes } from './RootTypeMethods.js'
import { type Config } from './Settings/Config.js'
import { type InputStatic } from './Settings/Input.js'
import type { AddIncrementalInput, WithInput } from './Settings/inputIncrementable/inputIncrementable.js'
import { type InputToConfig, inputToConfig } from './Settings/InputToConfig.js'

/**
 * Types of "other" Graffle Error.
 */
export type ErrorsOther =
  | Errors.ContextualError
  // Possible from http transport fetch with abort controller.
  | DOMException

export type GraffleExecutionResultVar<$Config extends Config = Config> =
  | (
    & ExecutionResult
    & ($Config['transport']['type'] extends TransportHttp ? {
        /**
         * If transport was HTTP, then the raw response is available here.
         */
        response: Response
      }
      : TransportHttp extends $Config['transport']['type'] ? {
          /**
           * If transport was HTTP, then the raw response is available here.
           */
          response?: Response
        }
      : {})
  )
  | ErrorsOther

export type SelectionSetOrIndicator = 0 | 1 | boolean | object

export type SelectionSetOrArgs = object

export interface Context {
  retry: null | Anyware.Extension2<Core.Core, { retrying: true }>
  extensions: Extension[]
  config: Config
}

export type TypedContext = Context & {
  schemaIndex: Schema.Index
}

type RawParameters = [BaseInput_]
// | [
//   document: BaseInput['document'],
//   options?: Omit<BaseInput, 'document'>,
// ]
//
const resolveRawParameters = (parameters: RawParameters) => {
  // return parameters.length === 2
  // ? { document: parameters[0], ...parameters[1] }
  // return typeof parameters[0] === `string` || `kind` in parameters[0]
  // ? { document: parameters[0], ...parameters[1] }
  return parameters[0]
}

// dprint-ignore
export type BuilderRequestMethods<$Config extends Config, $Index extends null | Schema.Index >=
  & BuilderRequestMethodsStatic<$Config>
  & (
    $Index extends Schema.Index
      ? BuilderRequestMethodsGenerated<$Config, $Index>
      : {}
  )

// todo no config needed?
// dprint-ignore
export type BuilderRequestMethodsStatic<$Config extends Config> = {
  raw: <$Data extends Record<string, any>, $Variables>(input: BaseInput<TypedQueryDocumentNode<$Data, $Variables>>) =>
      Promise<SimplifyExceptError<RawResolveOutputReturnRootType<$Config, $Data>>>
  rawString: <$Data extends Record<string, any>, $Variables>(input: BaseInput<TypedDocumentString<$Data, $Variables>>) =>
      Promise<RawResolveOutputReturnRootType<$Config, $Data>>
}

// dprint
export type BuilderRequestMethodsGenerated<$Config extends Config, $Index extends Schema.Index> =
  & BuilderRequestMethodsGeneratedStatic<$Config, $Index>
  & BuilderRequestMethodsGeneratedRootTypes<$Config, $Index>

export type BuilderRequestMethodsGeneratedStatic<$Config extends Config, $Index extends Schema.Index> = {
  document: DocumentFn<$Config, $Index>
}

// dprint-ignore
export type Client<$Index extends Schema.Index | null, $Config extends Config, $AdditionalMethods = unknown> =
  {
    internal: {
      config: $Config
    }
  }
  & $AdditionalMethods
  & BuilderRequestMethodsStatic<$Config>
  & (
      $Index extends Schema.Index
      // todo OmitDeeply
      ? ClientTyped<$Index, $Config>
      : {}  
    )
  & {
      // eslint-disable-next-line
      // @ts-ignore passes after generation
      with: <$Input extends WithInput<$Config>>(input: $Input) =>
        // eslint-disable-next-line
        // @ts-ignore passes after generation
        Client<$Index, AddIncrementalInput<$Config, $Input>>
      use: <$Extension extends Extension>(extension: $Extension) =>
        Client<$Index, $Config, $AdditionalMethods & ExtensionCallBuilderMerge<$Extension, { Index:$Index, Config:$Config, AdditionalMethods:$AdditionalMethods }>> 
      anyware: (anyware: Anyware.Extension2<Core.Core<$Config>>) =>
        Client<$Index, $Config, $AdditionalMethods> 
      retry: (extension: Anyware.Extension2<Core.Core, { retrying: true }>) =>
        Client<$Index, $Config>
    }

export type ClientTyped<$Index extends Schema.Index, $Config extends Config> =
  & BuilderRequestMethodsGeneratedStatic<$Config, $Index>
  & BuilderRequestMethodsGeneratedRootTypes<$Config, $Index>

// dprint-ignore
type Create = <$Input extends InputStatic<GlobalRegistry.SchemaUnion>>(input: $Input) =>
  Client<
    // eslint-disable-next-line
    // @ts-ignore passes after generation
    $Input['schemaIndex'] extends Schema.Index
       // v-- TypeScript does not understand this type satisfies the Index constraint.
       // v   It does after generation.
      ? GlobalRegistry.GetSchemaIndexOrDefault<$Input['name']>
      : null,
    // eslint-disable-next-line
    // @ts-ignore fixme
    InputToConfig<$Input>
  >

export const create: Create = (input) => {
  const initialState = {
    extensions: [],
    retry: null,
    input,
  }
  return createWithState(initialState)
}

interface CreateState {
  input: InputStatic<GlobalRegistry.SchemaUnion>
  retry: Anyware.Extension2<Core.Core, { retrying: true }> | null
  extensions: Extension[]
}

const createWithState = (
  state: CreateState,
) => {
  /**
   * @remarks Without generation the type of returnMode can be `ReturnModeTypeBase` which leads
   * TS to think some errors below are invalid checks because of a non-present member.
   * However our implementation here needs to be generic and support all return modes
   * so we force cast it as such.
   */
  // const returnMode = input.returnMode ?? `data` as ReturnModeType

  const executeRootType = async (
    context: TypedContext,
    rootTypeName: RootTypeName,
    rootTypeSelectionSet: GraphQLObjectSelection,
  ) => {
    const transport = state.input.schema instanceof GraphQLSchema ? `memory` : `http`
    const interface_ = `typed`
    const initialInput = {
      interface: interface_,
      transport,
      selection: rootTypeSelectionSet,
      rootTypeName,
      schema: state.input.schema,
      context: {
        config: context.config,
        transportInputOptions: state.input.transport,
        interface: interface_,
        schemaIndex: context.schemaIndex,
      },
    } as HookDefEncode<Config>['input']
    return await run(context, initialInput)
  }

  const executeRootTypeField = async (
    context: TypedContext,
    rootTypeName: RootTypeName,
    rootTypeFieldName: string,
    argsOrSelectionSet?: object,
  ) => {
    const selectedType = readMaybeThunk(context.schemaIndex.Root[rootTypeName]?.fields[rootTypeFieldName]?.type)
    const selectedNamedType = readMaybeThunk(
      // eslint-disable-next-line
      // @ts-ignore excess depth error
      Schema.Output.unwrapToNamed(selectedType),
    ) as Schema.Output.Named
    if (!selectedNamedType) throw new Error(`${rootTypeName} field not found: ${String(rootTypeFieldName)}`) // eslint-disable-line
    // @ts-expect-error fixme
    const isSelectedTypeScalarOrTypeName = selectedNamedType.kind === `Scalar` || selectedNamedType.kind === `typename` // todo fix type here, its valid
    const isFieldHasArgs = Boolean(context.schemaIndex.Root[rootTypeName]?.fields[rootTypeFieldName]?.args)
    // We should only need to add __typename for result type fields, but the return handler doesn't yet know how to look beyond a plain object type so we have to add all those cases here.
    // todo we could look at the root type fields that have result types and compare to the incoming query for match?
    const isHasSchemaErrors = Object.values(context.schemaIndex.error.objects).length > 0
    const needsTypenameAdded = isHasSchemaErrors && context.config.output.errors.schema !== false
      && (selectedNamedType.kind === `Object` || selectedNamedType.kind === `Interface`
        || selectedNamedType.kind === `Union`)
    const rootTypeFieldSelectionSet = isSelectedTypeScalarOrTypeName
      ? isFieldHasArgs && argsOrSelectionSet ? { $: argsOrSelectionSet } : true
      : needsTypenameAdded
      ? { ...argsOrSelectionSet, __typename: true }
      : argsOrSelectionSet

    const result = await executeRootType(context, rootTypeName, {
      [rootTypeFieldName]: rootTypeFieldSelectionSet,
    } as GraphQLObjectSelection)
    if (result instanceof Error) return result

    return context.config.output.envelope.enabled
      ? result
      // @ts-expect-error
      : result[rootTypeFieldName]
  }

  const createRootTypeMethods = (context: TypedContext, rootTypeName: RootTypeName) => {
    return new Proxy({}, {
      get: (_, key) => {
        if (typeof key === `symbol`) throw new Error(`Symbols not supported.`)

        if (key.startsWith(`$batch`)) {
          return async (selectionSetOrIndicator: SelectionSetOrIndicator) =>
            executeRootType(context, rootTypeName, selectionSetOrIndicator as GraphQLObjectSelection)
        } else {
          const fieldName = key
          return (selectionSetOrArgs: SelectionSetOrArgs) =>
            executeRootTypeField(context, rootTypeName, fieldName, selectionSetOrArgs)
        }
      },
    })
  }

  const context: Context = {
    retry: state.retry,
    extensions: state.extensions,
    // @ts-expect-error fixme
    config: inputToConfig(state.input),
  }

  const run = async (context: Context, initialInput: HookDefEncode<Config>['input']) => {
    const result = await Core.anyware.run({
      initialInput,
      retryingExtension: context.retry as any,
      extensions: context.extensions.filter(_ => _.onRequest !== undefined).map(_ => _.onRequest!) as any,
    }) as GraffleExecutionResultVar

    return handleOutput(context, result)
  }

  const runRaw = async (context: Context, rawInput: BaseInput_) => {
    const interface_: InterfaceRaw = `raw`
    const transport = state.input.schema instanceof GraphQLSchema ? `memory` : `http`
    const initialInput = {
      interface: interface_,
      transport,
      document: rawInput.document,
      schema: state.input.schema,
      context: {
        config: context.config,
      },
      variables: rawInput.variables,
      operationName: rawInput.operationName,
    } as HookDefEncode<Config>['input']
    return await run(context, initialInput)
  }

  // @ts-expect-error ignoreme
  const clientDirect: Client = {
    internal: {
      config: context.config,
    },
    raw: async (...args: RawParameters) => {
      const input = resolveRawParameters(args)
      // const contextWithOutputSet = updateContextConfig(context, { ...context.config, output: traditionalGraphqlOutput })
      return await runRaw(context, input)
    },
    // rawOrThrow: async (...args: RawParameters) => {
    //   const input = resolveRawParameters(args)
    //   const contextWithOutputSet = updateContextConfig(context, {
    //     ...context.config,
    //     output: traditionalGraphqlOutputThrowing,
    //   })
    //   return await runRaw(contextWithOutputSet, input)
    // },
    rawString: async (...args: RawParameters) => {
      return await clientDirect.raw(...args)
    },
    // rawStringOrThrow: async (...args: RawParameters) => {
    //   // eslint-disable-next-line
    //   return await client.rawOrThrow(...args)
    // },
    with: (input: WithInput) => {
      return createWithState({
        ...state,
        // @ts-expect-error fixme
        input: {
          ...state.input,
          output: input.output,
          transport: {
            ...state.input.transport,
            ...input.transport,
            headers: mergeHeadersInit(state.input.transport?.headers, input.transport?.headers),
            raw: mergeRequestInit(state.input.transport?.raw, input.transport?.raw),
          },
        },
      })
    },
    use: (extension: Extension) => {
      return createWithState({ ...state, extensions: [...state.extensions, extension] })
    },
    anyware: (anyware: Anyware.Extension2<Core.Core>) => {
      return createWithState({
        ...state,
        extensions: [...state.extensions, createExtension({ name: `InlineAnyware`, onRequest: anyware })],
      })
    },
    retry: (anyware: Anyware.Extension2<Core.Core, { retrying: true }>) => {
      return createWithState({ ...state, retry: anyware })
    },
  }

  // todo extract this into constructor "create typed client"
  if (state.input.schemaIndex) {
    const typedContext: TypedContext = {
      ...context,
      schemaIndex: state.input.schemaIndex,
    }

    Object.assign(clientDirect, {
      document: (documentObject: DocumentObject) => {
        const hasMultipleOperations = Object.keys(documentObject).length > 1

        const processInput = (maybeOperationName: string) => {
          if (!maybeOperationName && hasMultipleOperations) {
            throw {
              errors: [new Error(`Must provide operation name if query contains multiple operations.`)],
            }
          }
          if (maybeOperationName && !(maybeOperationName in documentObject)) {
            throw {
              errors: [new Error(`Unknown operation named "${maybeOperationName}".`)],
            }
          }
          const operationName = maybeOperationName ? maybeOperationName : Object.keys(documentObject)[0]!
          const rootTypeSelection = documentObject[operationName]
          if (!rootTypeSelection) throw new Error(`Operation with name ${operationName} not found.`)
          const operationTypeName = Object.keys(rootTypeSelection)[0]
          if (!isOperationTypeName(operationTypeName)) throw new Error(`Operation has no selection set.`)
          // @ts-expect-error
          const selection = rootTypeSelection[operationTypeName] as GraphQLObjectSelection
          return {
            rootTypeName: operationTypeNameToRootTypeName[operationTypeName],
            selection,
          }
        }

        return {
          run: async (maybeOperationName: string) => {
            const { selection, rootTypeName } = processInput(maybeOperationName)
            return await executeRootType(typedContext, rootTypeName, selection)
          },
        }
      },
      query: createRootTypeMethods(typedContext, `Query`),
      mutation: createRootTypeMethods(typedContext, `Mutation`),
      // todo
      // subscription: async () => {},
    })
  }

  const clientProxy = proxyGet(clientDirect, ({ path, property }) => {
    const onGetHandlers = state.extensions.map(_ => _.onBuilderGet).filter(_ => _ !== undefined)

    for (const onGetHandler of onGetHandlers) {
      const result = onGetHandler({ context, client: clientDirect, path, property })
      if (result !== undefined) return result
    }

    return undefined
  }) as any as Client<any, any>

  return clientProxy as any
}

// const updateContextConfig = <$Context extends Context>(context: $Context, config: Config): $Context => {
//   return { ...context, config: { ...context.config, ...config } }
// }
