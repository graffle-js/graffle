import type { Writable } from 'type-fest'
import type { Extension } from '../../extension/$.js'
import type { Anyware } from '../../lib/anyware/_namespace.js'
import type { UnknownOrAnyToNever } from '../../lib/prelude.js'
import { type Context } from '../../types/context.js'
import type { Transport } from '../../types/Transport.js'
import { type ContextFragmentAddProperties, contextFragmentAddProperties } from './addProperties.js'
import { contextFragmentAddRequestInterceptor } from './addRequestInterceptor.js'
import { type ContextAddTransportOptional, contextFragmentTransportsAddType } from './transport.js'

// todo: type to use multiple to reduce type instantiation
// useful for presets

// dprint-ignore
export type ContextAddOneExtension<
  $Context extends Context,
  $Extension extends Extension,
> = {
      [_ in keyof $Context]:
        _ extends 'properties' ?
          ContextFragmentAddProperties<$Context, $Extension['propertiesStatic']> :
          // $Extension['propertiesStatic']:
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

// todo: make return a fragment
export const contextFragmentExtensionsAddOne = <
  const $Context extends Context,
  $Extension extends Extension,
>(context: $Context, extension: $Extension): ContextAddOneExtension<$Context, $Extension> => {
  const fragment: Writable<Context> = {
    ...context,
    extensions: Object.freeze([...context.extensions, extension]),
    extensionsIndex: Object.freeze({
      ...context.extensionsIndex,
      [extension.name]: extension,
    }),
  }

  const newContextPropertiesFragment = contextFragmentAddProperties(context, extension.propertiesStatic)
  if (newContextPropertiesFragment) {
    Object.assign(fragment, newContextPropertiesFragment)
  }
  if (extension.transport) {
    Object.assign(fragment, contextFragmentTransportsAddType(context, extension.transport))
  }
  if (extension.requestInterceptor) {
    Object.assign(fragment, contextFragmentAddRequestInterceptor(context, extension.requestInterceptor))
  }

  return fragment as any
}
