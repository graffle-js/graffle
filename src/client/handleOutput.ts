import type { GraphQLError } from 'graphql'
import type { RunTypeHookOnRequestResult } from '../extension/extension.js'
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
import type { RequestPipeline, requestPipeline } from '../requestPipeline/RequestPipeline.js'
import type { GlobalRegistry } from '../types/GlobalRegistry/GlobalRegistry.js'
import type { TransportHttp } from '../types/Transport.js'
import type { Context } from './context.js'
import {
  type Config,
  type ErrorCategory,
  isContextConfigTraditionalGraphQLOutput,
  type OutputChannelConfig,
  readConfigErrorCategoryOutputChannel,
} from './Settings/Config.js'

export type GraffleExecutionResultEnvelope<$Config extends Config = Config> =
  & {
    errors?: ReadonlyArray<
      // formatted comes from http transport
      | Grafaid.FormattedExecutionResultError
      // unformatted comes from memory transport
      | Grafaid.GraphQLError
    >
    data?: SomeObjectData | null
    extensions?: ObjMap
  }
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

export const handleOutput = (
  state: Context,
  result: RequestPipeline['output'],
) => {
  if (isContextConfigTraditionalGraphQLOutput(state.config)) {
    if (result instanceof Error) throw result
    return result.value
  }

  const config = state.config
  const c = config.output

  const isEnvelope = c.envelope.enabled

  const isThrowOther = readConfigErrorCategoryOutputChannel(config, `other`) === `throw`
    && (!c.envelope.enabled || !c.envelope.errors.other)

  const isReturnOther = readConfigErrorCategoryOutputChannel(config, `other`) === `return`
    && (!c.envelope.enabled || !c.envelope.errors.other)

  const isThrowExecution = readConfigErrorCategoryOutputChannel(config, `execution`) === `throw`
    && (!c.envelope.enabled || !c.envelope.errors.execution)

  const isReturnExecution = readConfigErrorCategoryOutputChannel(config, `execution`) === `return`
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
export type HandleOutputGraffleRootField<$Context extends Context, $Data extends SomeObjectData, $RootFieldName extends string> =
  HandleOutputGraffleRootField_Data<ExcludeNull<HandleOutput<$Context, $Data>>, $RootFieldName>

// dprint-ignore
type HandleOutputGraffleRootField_Data<$Output extends Error | SomeObjectData | GraffleExecutionResultEnvelope, $RootFieldName extends string> =
  $Output extends Error | GraffleExecutionResultEnvelope
    ? $Output
    : GetOrNever<ExcludeNullAndUndefined<$Output>, $RootFieldName>

// dprint-ignore
export type HandleOutput<$Context extends Context, $Data extends SomeObjectData> =
  HandleOutput_Extensions<$Context, Envelope<$Context, $Data>>

type HandleOutput_Extensions<$Context extends Context, $Envelope extends GraffleExecutionResultEnvelope> =
  HandleOutput_ErrorsReturn<
    $Context,
    // eslint-disable-next-line
    // @ts-ignore fixme
    RunTypeHookOnRequestResult<$Context, {
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
  $Context['config']['output']['envelope']['enabled'] extends true
    ? $Envelope
    : ExcludeUndefined<$Envelope['data']> // todo make data field not undefinable

// dprint-ignore
type IfConfiguredGetOutputErrorReturns<$Context extends Context> =
  | (ConfigGetOutputError<$Context, 'execution'>  extends 'return'  ? GraphQLExecutionResultError   : never)
  | (ConfigGetOutputError<$Context, 'other'>      extends 'return'  ? requestPipeline.ResultFailure : never)

// dprint-ignore
export type ConfigGetOutputError<$Context extends Context, $ErrorCategory extends ErrorCategory> =
  $Context['config']['output']['envelope']['enabled'] extends true
    ? ConfigGetOutputEnvelopeErrorChannel<$Context, $ErrorCategory>
    : ConfigResolveOutputErrorChannel<$Context, $Context['config']['output']['errors'][$ErrorCategory]>

// dprint-ignore
type ConfigGetOutputEnvelopeErrorChannel<$Context extends Context, $ErrorCategory extends ErrorCategory> =
  $Context['config']['output']['envelope']['errors'][$ErrorCategory] extends true
    ? false
    : ConfigResolveOutputErrorChannel<$Context, $Context['config']['output']['errors'][$ErrorCategory]>

type ConfigResolveOutputErrorChannel<$Context extends Context, $Channel extends OutputChannelConfig | false> =
  $Channel extends 'default' ? $Context['config']['output']['defaults']['errorChannel']
    : $Channel extends false ? false
    : $Channel

// dprint-ignore
// todo use ObjMap for $Data
export type Envelope<$Context extends Context, $Data = unknown, $Errors extends ReadonlyArray<Error> = ReadonlyArray<GraphQLError>> = 
	& {
			data?: $Data | null
			extensions?: ObjMap
		}
	& (
			$Context['config']['transport']['type'] extends 'http'
			? { response: Response }
			: {}  
		)
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

type ObjMap<T = unknown> = {
  [key: string]: T
}

// dprint-ignore
type IsEnvelopeWithoutErrors<$Context extends Context> =
  $Context['config']['output']['envelope']['enabled'] extends true
    ? Values<$Context['config']['output']['envelope']['errors']> extends false
      ? true
    : false
  : false
