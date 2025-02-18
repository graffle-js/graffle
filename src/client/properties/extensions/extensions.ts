import type { EmptyObject, Writable } from 'type-fest'
import type { Anyware } from '../../../lib/anyware/_namespace.js'
import { type EmptyArray, emptyArray, emptyObject, type Tuple, type UnknownOrAnyToNever } from '../../../lib/prelude.js'
import { Context } from '../../../types/context.js'
import type { Client } from '../../client.js'
import type { Properties } from '../properties/__.js'
import { type ContextFragmentAddProperties, contextFragmentPropertiesAdd } from '../properties/properties.js'
import { RequestInterceptors } from '../requestInterceptors/__.js'
import { Transports } from '../transports/_namespace.js'
import type { Data } from '../transports/dataType/data.js'
import type { Extension } from './dataType/_namespace.js'

// ------------------------------------------------------------
// Method
// ------------------------------------------------------------

// dprint-ignore
export interface MethodAdd<$Context extends Context> {
  <extension extends Extension.Data>(extension: extension):
    Client<ContextAddAndApplyOne<$Context, extension>>
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

// dprint-ignore
export type ContextAddAndApplyMany<
  $Context extends Context,
  $Extensions extends readonly Extension.Data[],
  __transports extends readonly Data[] = Tuple.Flatten<{ [_ in keyof $Extensions]: $Extensions[_]['transports'] }>,
  __propertiesComputedTypeFunctions$ extends readonly Properties.PropertiesComputerTypeFunction[] = Tuple.Flatten<{ [_ in keyof $Extensions]: $Extensions[_]['propertiesComputedTypeFunctions$'] }>,
  __propertiesStatic extends Properties.Properties = Tuple.ReduceObjectsMergeShallow<{ [_ in keyof $Extensions]: $Extensions[_]['propertiesStatic'] }> 
> = {
      readonly [_ in keyof $Context]:
        _ extends 'extensions' ?
          [...$Context['extensions'], ...$Extensions] :
        _ extends 'transports' ?
          __transports extends readonly [] 
            ? $Context['transports'] 
            : Transports.ContextAddMany<$Context['transports'], __transports> :
        _ extends 'properties' ?
          ContextFragmentAddProperties<$Context, __propertiesStatic, __propertiesComputedTypeFunctions$> :
        _ extends 'requestPipelineDefinition' ?
          __transports extends readonly []
            ? $Context['requestPipelineDefinition']
            : Anyware.PipelineDefinition.Updaters.AddOverloadMany<$Context['requestPipelineDefinition'], __transports> :
        // : _ extends 'typeHookOnRequestResult'
        // ? [...$Context['typeHookOnRequestResult'], ...$Extension['typeHooks']['onRequestResult']]
        // : _ extends 'typeHookOnRequestDocumentRootType'
        // ? [...$Context['typeHookOnRequestDocumentRootType'], ...$Extension['typeHooks']['onRequestDocumentRootType']]
        _ extends 'typeHookRequestResultDataTypes' ?
          | $Context['typeHookRequestResultDataTypes']
            // todo if any extension has any/never then others get blown away. Need empty value that doesn't affect the union.
          | UnknownOrAnyToNever<$Extensions[number]['noExpandResultDataType']> :
        // Skip
          $Context[_]
    }

// dprint-ignore
export type ContextAddAndApplyOne<
  $Context extends Context,
  $Extension extends Extension.Data,
> = {
      readonly [_ in keyof $Context]:
        _ extends 'extensions' ?
          [...$Context['extensions'], $Extension] :
        _ extends 'properties' ?
          ContextFragmentAddProperties<$Context, $Extension['propertiesStatic'], $Extension['propertiesComputedTypeFunctions$']> :
        _ extends 'requestPipelineDefinition' ?
          $Extension['transports'] extends readonly []
            ? $Context['requestPipelineDefinition']
            : Anyware.PipelineDefinition.Updaters.AddOverloadMany<$Context['requestPipelineDefinition'], $Extension['transports']> :
        _ extends 'transports' ?
          $Extension['transports'] extends []
            ? $Context['transports']
            : Transports.ContextAddMany<$Context['transports'], $Extension['transports']> :
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

// todo: Maybe use Context.defineReducer here,
// and then have _another_ function that is for a typed helper that applies the type level return.

// Pattern question here: What is relationship between type-level reducers and runtime reducers?
// Maybe when reducers are defined, they need to accept context and then handle the copy optimization themselves?
// This way, the potential of null-return is hidden within the helper.

export const contextFragmentAddAndApplyMany = <$Context extends Context, $Extensions extends Extension.Data[]>(
  context: $Context,
  extensions: $Extensions,
): ContextAddAndApplyMany<$Context, $Extensions> => {
  if (extensions.length === 0) return null as any // ignored at type level, runtime optimization...

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
    if (extension.transports) {
      Object.assign(fragment, Transports.contextFragmentAddMany(context, extension.transports))
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
}

export const contextAddMany = Context.createReducer(contextFragmentAddAndApplyMany)
