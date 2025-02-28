import { type Tuple, type UnknownOrAnyToNever, type Writeable } from '../../../../lib/prelude.js'
import type { Context } from '../../../context.js'
import type { Configuration } from '../../configuration/_namespace.js'
import { Properties } from '../../properties/_namespace.js'
import { RequestInterceptors } from '../../requestInterceptors/_namespace.js'
import { Transports } from '../../transports/_namespace.js'
import type { Data } from '../../transports/dataType/data.js'
import type { Extension } from '../dataType/_namespace.js'

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
        _ extends 'properties' ?
          Properties.Add<$Context, __propertiesStatic, __propertiesComputedTypeFunctions$> :
        _ extends 'transports' ?
          __transports extends readonly [] 
            ? $Context['transports'] 
            : Transports.AddMany<$Context, __transports>['transports'] :
        _ extends 'requestPipelineDefinition' ?
          __transports extends readonly []
            ? $Context['requestPipelineDefinition']
            : Transports.AddMany<$Context, __transports>['requestPipelineDefinition'] :
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

// todo: Maybe use Context.defineReducer here,
// and then have _another_ function that is for a typed helper that applies the type level return.

// Pattern question here: What is relationship between type-level reducers and runtime reducers?
// Maybe when reducers are defined, they need to accept context and then handle the copy optimization themselves?
// This way, the potential of null-return is hidden within the helper.

export const addAndApplyMany = <
  context extends Context,
  const extensions extends readonly Extension.Data[],
>(
  context: context,
  extensions: extensions,
): ContextAddAndApplyMany<context, extensions> => {
  if (extensions.length === 0) return context as any

  const newContext: Writeable<Context> = {
    ...context,
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
      Object.assign(newContext, Transports.addMany(newContext, extension.transports))
    }

    if (extension.requestInterceptor) {
      Object.assign(
        newContext,
        RequestInterceptors.add(newContext, extension.requestInterceptor),
      )
    }

    if (extension.propertiesStatic || extension.propertiesComputed) {
      const propertiesFragment = Properties.add(newContext, {
        static: extension.propertiesStatic,
        computed: extension.propertiesComputed,
      })
      if (propertiesFragment) {
        Object.assign(newContext, propertiesFragment)
      }
    }

    if (extension.configurator) {
      newContext.configuration = {
        ...newContext.configuration,
        [extension.name]: {
          current: extension.configuratorInitialInput ?? extension.configurator.default,
          configurator: extension.configurator,
        },
      }
    }
  }

  return newContext as any
}
