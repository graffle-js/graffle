import type { EmptyObject, Writable } from 'type-fest'
import type { Extension } from '../../../extension/$.js'
import type { Anyware } from '../../../lib/anyware/_namespace.js'
import { type EmptyArray, emptyArray, emptyObject, type UnknownOrAnyToNever } from '../../../lib/prelude.js'
import { type Context } from '../../../types/context.js'
import { type ContextFragmentAddProperties, contextFragmentPropertiesAdd } from '../properties/properties.js'
import { RequestInterceptors } from '../requestInterceptors/__.js'
import { Transports } from '../transports/__.js'
import type { Transport } from '../transports/dataType.js'

// todo: type to use multiple to reduce type instantiation
// useful for presets

// dprint-ignore
export type ContextAddOneExtension<
  $Context extends Context,
  $Extension extends Extension,
> = {
      readonly [_ in keyof $Context]:
        _ extends 'properties' ?
          ContextFragmentAddProperties<$Context, $Extension['propertiesStatic'], $Extension['propertiesComputedTypeFunctions$']> :
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
          Transports.ContextAddTransportOptional<
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
export const contextFragmentExtensionsAdd = <
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

  if (extension.transport) {
    Object.assign(fragment, Transports.contextFragmentAdd(context, extension.transport))
  }
  if (extension.requestInterceptor) {
    Object.assign(
      fragment,
      RequestInterceptors.contextFragmentRequestInterceptorsAdd(context, extension.requestInterceptor),
    )
  }
  if (extension.propertiesStatic || extension.propertiesComputed) {
    const propertiesFragment = contextFragmentPropertiesAdd(context, {
      static: extension.propertiesStatic,
      computed: extension.propertiesComputed,
    })
    if (propertiesFragment) {
      Object.assign(fragment, propertiesFragment)
    }
  }

  return fragment as any
}

// ------------------------------------------------------------
// Context Fragment
// ------------------------------------------------------------

export interface ContextFragmentExtensions {
  readonly extensions: readonly Extension[]
  readonly extensionsIndex: {
    [extensionName: string]: Extension
  }
}

export interface ContextFragmentExtensionsEmpty extends ContextFragmentExtensions {
  extensions: EmptyArray
  extensionsIndex: EmptyObject
}

export const contextFragmentExtensionsEmpty: ContextFragmentExtensionsEmpty = {
  extensions: emptyArray,
  extensionsIndex: emptyObject,
}
