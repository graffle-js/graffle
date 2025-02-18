import type { GraphQLError } from 'graphql'
import type { Simplify } from 'type-fest'
import type { Anyware } from '../../../lib/anyware/_namespace.js'
import { Errors } from '../../../lib/errors/__.js'
import type { Grafaid } from '../../../lib/grafaid/__.js'
import type { SomeObjectData } from '../../../lib/grafaid/graphql.js'
import type { GraphQLExecutionResultError } from '../../../lib/grafaid/graphql.js'
import {
  type ExcludeNull,
  type ExcludeNullAndUndefined,
  type ExcludeUndefined,
  type GetOrNever,
  type Values,
} from '../../../lib/prelude.js'
import type { RequestPipeline } from '../../../requestPipeline/__.js'
import type { Context } from '../../../types/context.js'
import type { GlobalRegistry } from '../../../types/GlobalRegistry/GlobalRegistry.js'
import type { RequestResult } from '../../../types/RequestResult.ts/__.js'
import {
  type ErrorCategory,
  isOutputTraditionalGraphQLOutput,
  type Normalized,
  type OutputChannelConfig,
  readErrorCategoryOutputChannel,
} from './configuration.js'

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

export const handle = (
  state: Context,
  result: Anyware.Result<RequestPipeline.Base['output']>,
) => {
  const c = state.configuration.output.current

  if (isOutputTraditionalGraphQLOutput(c)) {
    if (result instanceof Error) throw result
    return result.value
  }

  const isEnvelope = c.envelope.enabled

  const isThrowOther = readErrorCategoryOutputChannel(c, `other`) === `throw`
    && (!c.envelope.enabled || !c.envelope.errors.other)

  const isReturnOther = readErrorCategoryOutputChannel(c, `other`) === `return`
    && (!c.envelope.enabled || !c.envelope.errors.other)

  const isThrowExecution = readErrorCategoryOutputChannel(c, `execution`) === `throw`
    && (!c.envelope.enabled || !c.envelope.errors.execution)

  const isReturnExecution = readErrorCategoryOutputChannel(c, `execution`) === `return`
    && (!c.envelope.enabled || !c.envelope.errors.execution)

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
export type HandleOutput<
  $Context,
  $Data extends SomeObjectData,
> =
  HandleOutput_Extensions<
    $Context,
    Envelope<
      // @ts-expect-error: No $Context constraint to avoid "compare depth limit"
      $Context['configuration']['output']['current'],
      RequestResult.Simplify<$Context, $Data>
    >
>

type HandleOutput_Extensions<
  $Context,
  $Envelope extends GraffleExecutionResultEnvelope,
> = HandleOutput_ErrorsReturn<
  // @ts-expect-error: No $Context constraint to avoid "compare depth limit"
  $Context['configuration']['output']['current'],
  $Envelope
> // todo
// eslint-disable-next-line
// @ts-ignore fixme
// Extension.TypeHooks.RunTypeHookOnRequestResult<$Context, {
//   result: $Envelope
//   // eslint-disable-next-line
//   // @ts-ignore fixme
//   registeredSchema: GlobalRegistry.GetOrDefault<$Context['name']>
// }>['result']

type HandleOutput_ErrorsReturn<
  $OutputConfig extends Normalized,
  $Envelope extends GraffleExecutionResultEnvelope,
> =
  | IfConfiguredGetOutputErrorReturns<$OutputConfig>
  | HandleOutput_Envelope<$OutputConfig, $Envelope>

// dprint-ignore
type HandleOutput_Envelope<
  $OutputConfig extends Normalized,
  $Envelope extends GraffleExecutionResultEnvelope,
> =
  $OutputConfig['envelope']['enabled'] extends true
    ? $Envelope
    : ExcludeUndefined<$Envelope['data']> // todo make data field not undefinable

// dprint-ignore
type IfConfiguredGetOutputErrorReturns<$OutputConfig extends Normalized> =
  | (ConfigGetOutputError<$OutputConfig, 'execution'>  extends 'return'  ? GraphQLExecutionResultError   : never)
  | (ConfigGetOutputError<$OutputConfig, 'other'>      extends 'return'  ? Anyware.ResultFailure : never)

// dprint-ignore
export type ConfigGetOutputError<
  $OutputConfig extends Normalized,
  $ErrorCategory extends ErrorCategory,
> =
  $OutputConfig['envelope']['enabled'] extends true
    ? ConfigGetOutputEnvelopeErrorChannel<$OutputConfig, $ErrorCategory>
    : ConfigResolveOutputErrorChannel<$OutputConfig, $OutputConfig['errors'][$ErrorCategory]>

// dprint-ignore
type ConfigGetOutputEnvelopeErrorChannel<
  $OutputConfig extends Normalized,
  $ErrorCategory extends ErrorCategory,
> =
  $OutputConfig['envelope']['errors'][$ErrorCategory] extends true
    ? false
    : ConfigResolveOutputErrorChannel<$OutputConfig, $OutputConfig['errors'][$ErrorCategory]>

type ConfigResolveOutputErrorChannel<
  $OutputConfig extends Normalized,
  $Channel extends OutputChannelConfig | false,
> = $Channel extends 'default' ? $OutputConfig['defaults']['errorChannel']
  : $Channel extends false ? false
  : $Channel

// dprint-ignore
// todo use ObjMap for $Data
export type Envelope<
  $OutputConfig extends Normalized,
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
        : IsEnvelopeWithoutErrors<$OutputConfig> extends true
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
type IsEnvelopeWithoutErrors<$OutputConfig extends Normalized> =
  $OutputConfig['envelope']['enabled'] extends true
    ? Values<$OutputConfig['envelope']['errors']> extends false
      ? true
    : false
  : false

// todo: this should be moved to the document builder extension:

// dprint-ignore
// export type HandleOutputDocumentBuilderRootField<
//   $Context extends Context,
//   $Data extends SomeObjectData,
// > = 'ignore me for now'

// dprint-ignore
export type HandleOutputDocumentBuilderRootField<
  $Context,
  $Data extends SomeObjectData,
  $RootFieldName extends string,
> =
  HandleOutputDocumentBuilderRootField_Data<
    ExcludeNull<
      HandleOutput<
        $Context,
        RequestResult.Simplify<$Context, $Data>
      >
    >,
    $RootFieldName
  >

// dprint-ignore
type HandleOutputDocumentBuilderRootField_Data<
  $Output extends Error | SomeObjectData | GraffleExecutionResultEnvelope,
  $RootFieldName extends string,
> =
  $Output extends Error | GraffleExecutionResultEnvelope
    ? $Output
    : GetOrNever<ExcludeNullAndUndefined<$Output>, $RootFieldName>
