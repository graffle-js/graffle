import type { Configurator } from '../../../../lib/configurator/configurator.js'
import { type Tuple, type UnionIgnoreAnyOrUnknown, type Writeable } from '../../../../lib/prelude.js'
import type { Context } from '../../../context.js'
import { Configuration } from '../../configuration/_namespace.js'
import { Properties } from '../../properties/_namespace.js'
import { RequestInterceptors } from '../../requestInterceptors/_namespace.js'
import { Transports } from '../../transports/_namespace.js'
import type { Data } from '../../transports/dataType/data.js'
import type { Extension } from '../dataType/_namespace.js'

// dprint-ignore
export type AddAndApplyMany<
  $Context extends Context,
  $Extensions extends readonly Extension.Data[],
  __extensionsIndex extends Record<string, Extension.Data> =
    Tuple.IndexBy<$Extensions, 'name'>,
  __configurations extends Configurator.Configuration =
    {
      [
        __name__ in keyof __extensionsIndex as
          __extensionsIndex[__name__]['configurator'] extends Configurator
            ? __name__
            : never
      ]:
        __extensionsIndex[__name__]['configurator'] extends Configurator
          ? Configuration.ConfigurationNamespace<__extensionsIndex[__name__]['configurator']>
          : never
    },
  __transports extends readonly Data[] =
    Tuple.Flatten<{ [_ in keyof $Extensions]: $Extensions[_]['transports'] }>,
  __propertiesComputedTypeFunctions$ extends readonly Properties.PropertiesComputer$Func[] =
    Tuple.Flatten<{ [_ in keyof $Extensions]: $Extensions[_]['propertiesComputedTypeFunctions$'] }>,
  __propertiesStatic extends Properties.Properties =
    Tuple.ReduceObjectsMergeShallow<{ [_ in keyof $Extensions]: $Extensions[_]['propertiesStatic'] }> 
> = {
      readonly [_ in keyof $Context]:
        _ extends 'configuration' ?
          {} extends __configurations
            ? $Context[_]
            : $Context[_] & __configurations :
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
          | UnionIgnoreAnyOrUnknown<$Extensions[number]['noExpandResultDataType']> :
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
): AddAndApplyMany<context, extensions> => {
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

    // todo: test that if computed present, then they are added to the context.
    if (extension.requestInterceptor || extension.requestInterceptorsComputed.length > 0) {
      Object.assign(
        newContext,
        RequestInterceptors.add(newContext, {
          static: extension.requestInterceptor ? [extension.requestInterceptor] : [],
          computed: extension.requestInterceptorsComputed,
        }),
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
      const fragment = Configuration.addType(
        newContext,
        extension.name,
        extension.configurator,
        // Its possible for extension constructors to
        // omit input when all input properties are optional.
        extension.configuratorInitialInput ?? {},
      )
      Object.assign(newContext, fragment)
    }
  }

  return newContext as any
}
