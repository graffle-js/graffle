import { type ExecutionResult, GraphQLSchema, type TypedQueryDocumentNode } from 'graphql'
import type { Anyware } from '../../lib/anyware/__.js'
import type { Errors } from '../../lib/errors/__.js'
import { isOperationTypeName, operationTypeNameToRootTypeName, type RootTypeName } from '../../lib/graphql.js'
import { mergeRequestInit } from '../../lib/http.js'
import type { BaseInput, BaseInput_, TypedDocumentString } from '../0_functions/types.js'
import { Schema } from '../1_Schema/__.js'
import { readMaybeThunk } from '../1_Schema/core/helpers.js'
import type { GlobalRegistry } from '../2_generator/globalRegistry.js'
import type { DocumentObject, GraphQLObjectSelection } from '../3_SelectionSet/encode.js'
import { Core } from '../5_core/__.js'
import { type HookDefEncode } from '../5_core/core.js'
import { type InterfaceRaw, type TransportHttp } from '../5_core/types.js'
import type { DocumentFn } from './document.js'
import { handleOutput } from './handleOutput.js'
import type { GetRootTypeMethods } from './RootTypeMethods.js'
import type { Envelope } from './Settings/Config.js'
import {
  type Config,
  readConfigErrorCategoryOutputChannel,
  traditionalGraphqlOutput,
  traditionalGraphqlOutputThrowing,
} from './Settings/Config.js'
import { type InputStatic } from './Settings/Input.js'
import type { AddIncrementalInput, InputIncrementable } from './Settings/inputIncrementable/inputIncrementable.js'
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
      : {}) // eslint-disable-line
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

// todo no config needed?
// dprint-ignore
export type ClientRaw<$Config extends Config> = {
  rawString<$Data, $Variables>(input: BaseInput<TypedDocumentString<$Data, $Variables>>): Promise<Envelope<$Config, $Data>>
  rawStringOrThrow<$Data, $Variables>(input: BaseInput<TypedDocumentString<$Data, $Variables>>): Promise<Envelope<$Config, $Data, []>>

  raw<$Data, $Variables>(input: BaseInput<TypedQueryDocumentNode<$Data, $Variables>>): Promise<Envelope<$Config, $Data>>
  rawOrThrow<$Data, $Variables>(input: BaseInput<TypedQueryDocumentNode<$Data, $Variables>>): Promise<Envelope<$Config, $Data, []>>
}

export type Extension = {
  name: string
  anyware?: Anyware.Extension2<Core.Core>
}

// dprint-ignore
export type Client<$Index extends Schema.Index | null, $Config extends Config> =
  {
    internal: {
      config: $Config
    }
  }
  & ClientRaw<$Config>
  & (
      $Index extends Schema.Index
      ? ClientTyped<$Index, $Config>
      : {} // eslint-disable-line
    )
  & {
      // eslint-disable-next-line
      // @ts-ignore passes after generation
      with: <$Input extends InputIncrementable<$Config>>(input: $Input) => Client<$Index, AddIncrementalInput<$Config, $Input>>
      use: (extension: Extension | Anyware.Extension2<Core.Core<$Config>>) => Client<$Index, $Config>
      retry: (extension: Anyware.Extension2<Core.Core, { retrying: true }>) => Client<$Index, $Config>
    }

export type ClientTyped<$Index extends Schema.Index, $Config extends Config> =
  & {
    document: DocumentFn<$Config, $Index>
  }
  & GetRootTypeMethods<$Config, $Index>

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
  return create_(initialState)
}

interface CreateState {
  input: InputStatic<GlobalRegistry.SchemaUnion>
  retry: Anyware.Extension2<Core.Core, { retrying: true }> | null
  extensions: Extension[]
}

const create_ = (
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

        // todo We need to document that in order for this to 100% work none of the user's root type fields can end with "OrThrow".
        const isOrThrow = key.endsWith(`OrThrow`)
        const contextWithReturnModeSet = isOrThrow ? contextConfigSetOrThrow(context) : context

        if (key.startsWith(`$batch`)) {
          return async (selectionSetOrIndicator: SelectionSetOrIndicator) =>
            executeRootType(contextWithReturnModeSet, rootTypeName, selectionSetOrIndicator as GraphQLObjectSelection)
        } else {
          const fieldName = isOrThrow ? key.slice(0, -7) : key
          return (selectionSetOrArgs: SelectionSetOrArgs) =>
            executeRootTypeField(contextWithReturnModeSet, rootTypeName, fieldName, selectionSetOrArgs)
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
      retryingExtension: context.retry as any, // eslint-disable-line
      extensions: context.extensions.filter(_ => _.anyware !== undefined).map(_ => _.anyware!) as any, // eslint-disable-line
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
  const client: Client = {
    internal: {
      config: context.config,
    },
    raw: async (...args: RawParameters) => {
      const input = resolveRawParameters(args)
      const contextWithOutputSet = updateContextConfig(context, { ...context.config, output: traditionalGraphqlOutput })
      return await runRaw(contextWithOutputSet, input)
    },
    rawOrThrow: async (...args: RawParameters) => {
      const input = resolveRawParameters(args)
      const contextWithOutputSet = updateContextConfig(context, {
        ...context.config,
        output: traditionalGraphqlOutputThrowing,
      })
      return await runRaw(contextWithOutputSet, input)
    },
    rawString: async (...args: RawParameters) => {
      // eslint-disable-next-line
      return await client.raw(...args)
    },
    rawStringOrThrow: async (...args: RawParameters) => {
      // eslint-disable-next-line
      return await client.rawOrThrow(...args)
    },
    with: (input: InputIncrementable) => {
      return create_({
        ...state,
        // @ts-expect-error fixme
        input: {
          ...state.input,
          output: state.input.output,
          transport: {
            ...state.input.transport,
            ...input.transport,
            raw: mergeRequestInit(state.input.transport?.raw, input.transport?.raw),
          },
        },
      })
    },
    use: (extensionOrAnyware: Extension | Anyware.Extension2<Core.Core>) => {
      const extension = typeof extensionOrAnyware === `function`
        ? { anyware: extensionOrAnyware, name: extensionOrAnyware.name }
        : extensionOrAnyware
      // todo test that adding extensions returns a copy of client
      return create_({ ...state, extensions: [...state.extensions, extension] })
    },
    retry: (extension: Anyware.Extension2<Core.Core, { retrying: true }>) => {
      return create_({ ...state, retry: extension })
    },
  }

  // todo extract this into constructor "create typed client"
  if (state.input.schemaIndex) {
    const typedContext: TypedContext = {
      ...context,
      schemaIndex: state.input.schemaIndex,
    }

    Object.assign(client, {
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
          runOrThrow: async (maybeOperationName: string) => {
            const { selection, rootTypeName } = processInput(maybeOperationName)
            return await executeRootType(
              contextConfigSetOrThrow(typedContext),
              rootTypeName,
              selection,
            )
          },
        }
      },
      query: createRootTypeMethods(typedContext, `Query`),
      mutation: createRootTypeMethods(typedContext, `Mutation`),
      // todo
      // subscription: async () => {},
    })
  }

  return client
}

const contextConfigSetOrThrow = <$Context extends Context>(context: $Context): $Context => {
  if (isContextConfigOrThrowSemantics(context)) return context

  return updateContextConfig(context, {
    ...context.config,
    output: {
      ...context.config.output,
      errors: {
        execution: `throw`,
        other: `throw`,
        schema: `throw`,
      },
      envelope: {
        ...context.config.output.envelope,
        errors: {
          execution: false,
          other: false,
          schema: false,
        },
      },
    },
  })
}

const isContextConfigOrThrowSemantics = ({ config }: Context): boolean => {
  const isAllCategoriesThrowOrDisabled = readConfigErrorCategoryOutputChannel(config, `execution`) === `throw`
    && readConfigErrorCategoryOutputChannel(config, `other`) === `throw`
    && (readConfigErrorCategoryOutputChannel(config, `schema`) === `throw`
      || readConfigErrorCategoryOutputChannel(config, `schema`) === `throw`) // todo: or false and not using schema errors

  if (!isAllCategoriesThrowOrDisabled) return false

  if (
    config.output.envelope.enabled
    && Object.values(config.output.envelope.errors.execution).filter(_ => _ === true).length > 0
  ) {
    return false
  }

  return true
}

const updateContextConfig = <$Context extends Context>(context: $Context, config: Config): $Context => {
  return { ...context, config: { ...context.config, ...config } }
}
