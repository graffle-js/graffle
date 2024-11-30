import type { GraphQLError } from 'graphql'
import type { Simplify } from 'type-fest'
import type { SimplifyDeepExcept } from '../documentBuilder/Simplify.js'
import type { Extension } from '../entrypoints/extensionkit.js'
import type { Anyware } from '../lib/anyware/__.js'
import { Errors } from '../lib/errors/__.js'
import type { Grafaid } from '../lib/grafaid/__.js'
import type { SomeObjectData } from '../lib/grafaid/graphql.js'
import type { GraphQLExecutionResultError } from '../lib/grafaid/graphql.js'
import {
  type ExcludeNull,
  type ExcludeNullAndUndefined,
  type ExcludeUndefined,
  type GetOrNever,
  type Values,
} from '../lib/prelude.js'
import type { RequestPipelineBase } from '../requestPipeline/RequestPipeline.js'
import type { Context } from '../types/context.js'
import type { GlobalRegistry } from '../types/GlobalRegistry/GlobalRegistry.js'
import {
  type ErrorCategory,
  isOutputTraditionalGraphQLOutput,
  type OutputChannelConfig,
  readErrorCategoryOutputChannel,
} from './Configuration/Output.js'

export type GraffleExecutionResultEnvelope = {
  errors?: ReadonlyArray<
    // formatted comes from http transport
    | Grafaid.FormattedExecutionResultError
    // unformatted comes from memory transport
    | Grafaid.GraphQLError
  >
  data?: SomeObjectData | null
  extensions?: ObjMap
}

export const handleOutput = (
  state: Context,
  result: Anyware.Result<RequestPipelineBase['output']>,
) => {
  if (isOutputTraditionalGraphQLOutput(state.output)) {
    if (result instanceof Error) throw result
    return result.value
  }

  const outputConfig = state.output

  const isEnvelope = outputConfig.envelope.enabled

  const isThrowOther = readErrorCategoryOutputChannel(outputConfig, `other`) === `throw`
    && (!outputConfig.envelope.enabled || !outputConfig.envelope.errors.other)

  const isReturnOther = readErrorCategoryOutputChannel(outputConfig, `other`) === `return`
    && (!outputConfig.envelope.enabled || !outputConfig.envelope.errors.other)

  const isThrowExecution = readErrorCategoryOutputChannel(outputConfig, `execution`) === `throw`
    && (!outputConfig.envelope.enabled || !outputConfig.envelope.errors.execution)

  const isReturnExecution = readErrorCategoryOutputChannel(outputConfig, `execution`) === `return`
    && (!outputConfig.envelope.enabled || !outputConfig.envelope.errors.execution)

  if (result instanceof Error) {
    if (isThrowOther) throw result
    if (isReturnOther) return result
    // todo not a graphql execution error class instance
    return isEnvelope ? { errors: [result] } : result
  }

  if (result.value.errors && result.value.errors.length > 0) {
    const error = new Errors.ContextualAggregateError(
      `One or more errors in the execution result.`,
      {},
      result.value.errors.map(e => {
        if (e instanceof Error) return e
        const { message, ...context } = e
        return new Errors.ContextualError(message, context)
      }),
    )
    if (isThrowExecution) throw error
    if (isReturnExecution) return error
    return isEnvelope ? { ...result.value, errors: [...result.value.errors ?? [], error] } : error
  }

  if (isEnvelope) {
    return result.value
  }

  return result.value.data
}

/**
 * Types for output handling.
 */

// dprint-ignore
export type HandleOutputGraffleRootField<$Context extends Context, $Data extends SomeObjectData, $RootFieldName extends string> =
  HandleOutputGraffleRootField_Data<
    ExcludeNull<
      HandleOutput<
        $Context,
        SimplifyDeepExcept<$Context['scalars']['typesDecoded'], $Data>
      >
    >,
    $RootFieldName
  >

// dprint-ignore
type HandleOutputGraffleRootField_Data<$Output extends Error | SomeObjectData | GraffleExecutionResultEnvelope, $RootFieldName extends string> =
  $Output extends Error | GraffleExecutionResultEnvelope
    ? $Output
    : GetOrNever<ExcludeNullAndUndefined<$Output>, $RootFieldName>

// dprint-ignore
export type HandleOutput<$Context extends Context, $Data extends SomeObjectData> =
  HandleOutput_Extensions<
    $Context,
    Envelope<
      $Context,
      SimplifyDeepExcept<$Context['scalars']['typesDecoded'], $Data>
    >
  >

type HandleOutput_Extensions<$Context extends Context, $Envelope extends GraffleExecutionResultEnvelope> =
  HandleOutput_ErrorsReturn<
    $Context,
    // eslint-disable-next-line
    // @ts-ignore fixme
    Extension.TypeHooks.RunTypeHookOnRequestResult<$Context, {
      result: $Envelope
      // eslint-disable-next-line
      // @ts-ignore fixme
      registeredSchema: GlobalRegistry.GetOrDefault<$Context['name']>
    }>['result']
  >

type HandleOutput_ErrorsReturn<$Context extends Context, $Envelope extends GraffleExecutionResultEnvelope> =
  | IfConfiguredGetOutputErrorReturns<$Context>
  | HandleOutput_Envelope<$Context, $Envelope>

// dprint-ignore
type HandleOutput_Envelope<$Context extends Context, $Envelope extends GraffleExecutionResultEnvelope> =
  $Context['output']['envelope']['enabled'] extends true
    ? $Envelope
    : ExcludeUndefined<$Envelope['data']> // todo make data field not undefinable

// dprint-ignore
type IfConfiguredGetOutputErrorReturns<$Context extends Context> =
  | (ConfigGetOutputError<$Context, 'execution'>  extends 'return'  ? GraphQLExecutionResultError   : never)
  | (ConfigGetOutputError<$Context, 'other'>      extends 'return'  ? Anyware.ResultFailure : never)

// dprint-ignore
export type ConfigGetOutputError<$Context extends Context, $ErrorCategory extends ErrorCategory> =
  $Context['output']['envelope']['enabled'] extends true
    ? ConfigGetOutputEnvelopeErrorChannel<$Context, $ErrorCategory>
    : ConfigResolveOutputErrorChannel<$Context, $Context['output']['errors'][$ErrorCategory]>

// dprint-ignore
type ConfigGetOutputEnvelopeErrorChannel<$Context extends Context, $ErrorCategory extends ErrorCategory> =
  $Context['output']['envelope']['errors'][$ErrorCategory] extends true
    ? false
    : ConfigResolveOutputErrorChannel<$Context, $Context['output']['errors'][$ErrorCategory]>

type ConfigResolveOutputErrorChannel<$Context extends Context, $Channel extends OutputChannelConfig | false> =
  $Channel extends 'default' ? $Context['output']['defaults']['errorChannel']
    : $Channel extends false ? false
    : $Channel

// dprint-ignore
// todo use ObjMap for $Data
export type Envelope<
  $Context extends Context,
  $Data = unknown,
  $Errors extends ReadonlyArray<Error> = ReadonlyArray<GraphQLError>,
> =
  Simplify<
    & {
      data?: $Data | null
        extensions?: ObjMap
      }
      // todo remove use of errors type variable. Rely only on $Config.
    & (
        $Errors extends []
        ? {}
        : IsEnvelopeWithoutErrors<$Context> extends true
        ? {}
        : {
            errors?: ReadonlyArray<GraphQLError>
          }
      )
  >

type ObjMap<T = unknown> = {
  [key: string]: T
}

// dprint-ignore
type IsEnvelopeWithoutErrors<$Context extends Context> =
  $Context['output']['envelope']['enabled'] extends true
    ? Values<$Context['output']['envelope']['errors']> extends false
      ? true
    : false
  : false
