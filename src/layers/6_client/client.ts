import { type ExecutionResult, GraphQLSchema } from 'graphql'
import type { Errors } from '../../lib/errors/__.js'
import type { Fluent } from '../../lib/fluent/__.js'
import { type RootTypeName } from '../../lib/graphql-plus/graphql.js'
import { proxyGet } from '../../lib/prelude.js'
import type { BaseInput_ } from '../0_functions/types.js'
import { Schema } from '../1_Schema/__.js'
import { readMaybeThunk } from '../1_Schema/core/helpers.js'
import { Select } from '../2_Select/__.js'
import type { SchemaIndex } from '../4_generator/generators/SchemaIndex.js'
import type { GlobalRegistry } from '../4_generator/globalRegistry.js'
import { Core } from '../5_core/__.js'
import { type InterfaceRaw, type TransportHttp } from '../5_core/types.js'
import { type UseFn, useProperties } from './extension/use.js'
import type { ClientContext, FnParametersProperty, State } from './fluent.js'
import { handleOutput } from './handleOutput.js'
import { anywareProperties, type FnAnyware } from './properties/anyware.js'
import type { FnInternal } from './properties/internal.js'
import { type FnRetry, retryProperties } from './properties/retry.js'
import { type FnWith, withProperties } from './properties/with.js'
import { createMethodDocument } from './requestMethods/document.js'
import type { FnRequestMethods } from './requestMethods/requestMethods.js'
import { type Config } from './Settings/Config.js'
import { type InputStatic } from './Settings/Input.js'
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

// todo get type from selectionset module
export type SelectionSetOrIndicator = boolean | object

// todo get type from selectionset module
export type SelectionSetOrArgs = object

export interface RequestContext {
  config: Config
  state: State
  schemaIndex: SchemaIndex | null
}

export interface InterfaceTypedRequestContext extends RequestContext {
  schemaIndex: SchemaIndex
}

type RawParameters = [BaseInput_]

const resolveRawParameters = (parameters: RawParameters) => {
  // return parameters.length === 2
  // ? { document: parameters[0], ...parameters[1] }
  // return typeof parameters[0] === `string` || `kind` in parameters[0]
  // ? { document: parameters[0], ...parameters[1] }
  return parameters[0]
}

export type Client<$Context extends ClientContext> = Fluent.Materialize<
  Fluent.AddMany<
    Fluent.Create<$Context>,
    [
      FnInternal,
      FnRequestMethods,
      FnRetry,
      FnWith,
      UseFn,
      FnAnyware,
    ]
  >
>

export type IncrementWthNewConfig<
  $Parameters extends FnParametersProperty,
  $ConfigNew extends ClientContext['config'],
> = Fluent.IncrementWthNewContext<
  $Parameters,
  {
    schemaIndex: $Parameters['state']['context']['schemaIndex']
    config: $ConfigNew
  }
>

// dprint-ignore
type Create = <$Input extends InputStatic<GlobalRegistry.SchemaUnion>>(input: $Input) =>
  // eslint-disable-next-line
  // @ts-ignore fixme
  Client<{
    config: InputToConfig<$Input>,
    schemaIndex: $Input['schemaIndex'] extends SchemaIndex
      ? GlobalRegistry.GetSchemaIndexOrDefault<$Input['name']>
      : null
  }>

export const create: Create = (input) => {
  const initialState = {
    extensions: [],
    retry: null,
    input,
  }
  return createWithState(initialState)
}

const createWithState = (
  state: State,
) => {
  // todo lazily compute config, not every fluent call uses it.
  const context: RequestContext = {
    // @ts-expect-error fixme
    config: inputToConfig(state.input),
    state,
    schemaIndex: state.input.schemaIndex ?? null,
  }

  /**
   * @remarks Without generation the type of returnMode can be `ReturnModeTypeBase` which leads
   * TS to think some errors below are invalid checks because of a non-present member.
   * However our implementation here needs to be generic and support all return modes
   * so we force cast it as such.
   */
  // const returnMode = input.returnMode ?? `data` as ReturnModeType

  const executeDocument = async (
    context: InterfaceTypedRequestContext,
    document: Select.Document.DocumentNormalized,
    operationName?: string,
  ) => {
    const transport = state.input.schema instanceof GraphQLSchema ? `memory` : `http`
    const interface_ = `typed`
    const anywareInitialInput = {
      interface: interface_,
      transport,
      schema: state.input.schema,
      context,
      document,
      operationName,
    } as Core.Hooks.HookDefEncode<Config>['input']
    return await run(context, anywareInitialInput)
  }

  const executeRootType = async (
    context: InterfaceTypedRequestContext,
    rootTypeName: RootTypeName,
    rootTypeSelectionSet: Select.SelectionSet.AnySelectionSet,
  ) => {
    return executeDocument(
      context,
      Select.Document.createDocumentNormalizedFromRootTypeSelection(
        rootTypeName,
        rootTypeSelectionSet,
      ),
    )
  }

  const executeRootTypeField = async (
    context: InterfaceTypedRequestContext,
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
    } as Select.SelectionSet.AnySelectionSet)
    if (result instanceof Error) return result

    return context.config.output.envelope.enabled
      ? result
      // @ts-expect-error
      : result[rootTypeFieldName]
  }

  const createMethodsRootType = (context: InterfaceTypedRequestContext, rootTypeName: RootTypeName) => {
    return new Proxy({}, {
      get: (_, key) => {
        if (typeof key === `symbol`) throw new Error(`Symbols not supported.`)

        if (key.startsWith(`$batch`)) {
          return async (selectionSetOrIndicator: SelectionSetOrIndicator) =>
            executeRootType(context, rootTypeName, selectionSetOrIndicator as Select.SelectionSet.AnySelectionSet)
        } else {
          const fieldName = key
          return (selectionSetOrArgs: SelectionSetOrArgs) =>
            executeRootTypeField(context, rootTypeName, fieldName, selectionSetOrArgs)
        }
      },
    })
  }

  const run = async (context: RequestContext, initialInput: Core.Hooks.HookDefEncode<Config>['input']) => {
    const result = await Core.anyware.run({
      initialInput,
      retryingExtension: context.state.retry as any,
      extensions: context.state.extensions.filter(_ => _.onRequest !== undefined).map(_ => _.onRequest!) as any,
    })
    return handleOutput(context, result)
  }

  const runRaw = async (context: RequestContext, rawInput: BaseInput_) => {
    const interface_: InterfaceRaw = `raw`
    const transport = state.input.schema instanceof GraphQLSchema ? `memory` : `http`
    const initialInput = {
      interface: interface_,
      transport,
      document: rawInput.document,
      schema: state.input.schema,
      context,
      variables: rawInput.variables,
      operationName: rawInput.operationName,
    } as Core.Hooks.HookDefEncode<Config>['input']
    return await run(context, initialInput)
  }

  // @ts-expect-error ignoreme
  const clientDirect: Client = {
    _: {
      context: {
        config: context.config,
      },
    },
    raw: async (...args: RawParameters) => {
      const input = resolveRawParameters(args)
      return await runRaw(context, input)
    },
    rawString: async (...args: RawParameters) => {
      return await clientDirect.raw(...args)
    },
    ...withProperties(createWithState, state),
    ...useProperties(createWithState, state),
    ...anywareProperties(createWithState, state),
    ...retryProperties(createWithState, state),
  }

  // todo extract this into constructor "create typed client"
  if (state.input.schemaIndex) {
    const typedContext: InterfaceTypedRequestContext = {
      ...context,
      schemaIndex: state.input.schemaIndex,
    }

    Object.assign(clientDirect, {
      document: createMethodDocument(typedContext, executeDocument),
      query: createMethodsRootType(typedContext, `Query`),
      mutation: createMethodsRootType(typedContext, `Mutation`),
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
  }) as any

  return clientProxy
}
