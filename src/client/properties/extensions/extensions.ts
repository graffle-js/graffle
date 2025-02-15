import type { EmptyObject, Writable } from 'type-fest'
import type { Anyware } from '../../../lib/anyware/_namespace.js'
import { type EmptyArray, emptyArray, emptyObject, type UnknownOrAnyToNever } from '../../../lib/prelude.js'
import { Context, ContextFragments } from '../../../types/context.js'
import type { Client } from '../../client.js'
import { type ContextFragmentAddProperties, contextFragmentPropertiesAdd } from '../properties/properties.js'
import { RequestInterceptors } from '../requestInterceptors/__.js'
import { Transports } from '../transports/__.js'
import type { Transport } from '../transports/dataType.js'
import type { Extension } from './dataType/_namespace.js'

// ------------------------------------------------------------
// Method
// ------------------------------------------------------------

// dprint-ignore
export interface MethodAdd<$Context extends Context> {
  <extension extends Extension.Data>(extension: extension):
    Client<ContextAddOne<$Context, extension>>
}

// ------------------------------------------------------------
// Context Fragment
// ------------------------------------------------------------

export interface ContextFragment {
  readonly extensions: readonly Extension.Data[]
  readonly extensionsIndex: {
    [extensionName: string]: Extension.Data
  }
}

export interface ContextFragmentEmpty extends ContextFragment {
  extensions: EmptyArray
  extensionsIndex: EmptyObject
}

export const contextFragmentEmpty: ContextFragmentEmpty = {
  extensions: emptyArray,
  extensionsIndex: emptyObject,
}

// todo: type to use multiple to reduce type instantiation
// useful for presets

// todo ContextAddMany
// dprint-ignore
export type ContextAddOne<
  $Context extends Context,
  $Extension extends Extension.Data,
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

export const contextFragmentAddMany = ContextFragments.defineReducer<ContextFragment, Extension.Data[]>(
  (context, extensions) => {
    const fragment: Writable<ContextFragment> = {
      extensions: Object.freeze([...context.extensions, ...extensions]),
      extensionsIndex: Object.freeze({
        ...context.extensionsIndex,
        ...extensions.reduce<Record<string, Extension.Data>>((acc, extension) => {
          acc[extension.name] = extension
          return acc
        }, {}),
      }),
    }

    for (const extension of extensions) {
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
    }

    return fragment as any
  },
)

export const contextAddMany = Context.createReducer(contextFragmentAddMany)
