import type { Extension } from '../../extension/$.js'
import type { Anyware } from '../../lib/anyware/_namespace.js'
import type { UnknownOrAnyToNever } from '../../lib/prelude.js'
import { type Context } from '../../types/context.js'
import type { Transport } from '../../types/Transport.js'
import { contextAddRequestInterceptor } from './addRequestInterceptor.js'
import { contextAddTransport, type ContextAddTransportOptional } from './transport.js'

// todo: type to use multiple to reduce type instantiation
// useful for presets

// dprint-ignore
export type ContextAddOneExtension<
  $Context extends Context,
  $Extension extends Extension,
> = {
      [_ in keyof $Context]:
        _ extends 'requestPipelineDefinition' ?
          $Extension['transport'] extends Transport ?
            Anyware.PipelineDefinition.Updaters.AddOverload<
              $Context['requestPipelineDefinition'],
              $Extension['transport']
            >
            :
            $Context['requestPipelineDefinition'] :
        _ extends 'extensions' ?
          [...$Context['extensions'], $Extension] :
        _ extends 'transports' ?
          ContextAddTransportOptional<
            $Context['transports'],
            $Extension['transport']
          > :
        // : _ extends 'typeHookOnRequestResult'
        // ? [...$Context['typeHookOnRequestResult'], ...$Extension['typeHooks']['onRequestResult']]
        // : _ extends 'typeHookOnRequestDocumentRootType'
        // ? [...$Context['typeHookOnRequestDocumentRootType'], ...$Extension['typeHooks']['onRequestDocumentRootType']]
        _ extends 'typeHookRequestResultDataTypes' ?
          | $Context['typeHookRequestResultDataTypes']
          | UnknownOrAnyToNever<$Extension['noExpandResultDataType']> :
        // Skip
          $Context[_]
    }

export const contextAddOneExtension = <
  const $Context extends Context,
  $Extension extends Extension,
>(context: $Context, extension: $Extension): ContextAddOneExtension<$Context, $Extension> => {
  const newContext: Context = Object.freeze({
    ...context,
    ...(extension.transport ? contextAddTransport(context, extension.transport) : {}),
    ...(extension.requestInterceptor ? contextAddRequestInterceptor(context, extension.requestInterceptor) : {}),
    extensions: Object.freeze([...context.extensions, extension]),
    extensionsIndex: Object.freeze({
      ...context.extensionsIndex,
      [extension.name]: extension,
    }),
  })

  return newContext as any
}
