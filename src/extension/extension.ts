import { __, type ExcludeUndefined } from '../lib/prelude.js'
import type { RequestPipelineBaseInterceptor } from '../requestPipeline/__.js'
import type { Configurator } from '../types/configurator.js'
import type { Context } from '../types/context.js'
import type { Transport } from '../types/Transport.js'
import type { ConstructorParameters } from './constructor.js'
import type * as _re_export from './properties.js'

// ------------------------------------------------------------
// Constructor
// ------------------------------------------------------------

export const Extension = <$Name extends string>(
  name: $Name,
): Extension.Builder<Extension<$Name, undefined, undefined, undefined, undefined>> => {
  const extension = {
    name,
  }
  const builder = {
    transport() {
      return builder
    },
    configurator() {
      return builder
    },
    done() {
      return () => extension
    },
  }
  return builder
}

// ------------------------------------------------------------
// Data Type
// ------------------------------------------------------------

export interface Extension<
  $Name extends string = string,
  $Configurator extends undefined | Configurator = undefined | Configurator,
  $NoExpandResultDataType = unknown,
  $Properties extends object | undefined = object | undefined,
  $Transport extends Transport | undefined = Transport | undefined,
> // $TypeHooks extends TypeHooks = TypeHooks,
{
  name: $Name
  configurator?: $Configurator
  constructor?: (parameters: ConstructorParameters) => {
    requestInterceptor?: RequestPipelineBaseInterceptor
    properties?: object
  }
  requestInterceptor?: RequestPipelineBaseInterceptor
  noExpandResultDataType?: $NoExpandResultDataType
  $Properties?: $Properties
  propertiesStatic?: object
  propertiesDynamic?: <$Context extends Context>(parameters: ConstructorParameters<$Context>) => object
  // todo support for multiple transports in one extension
  transport?: $Transport
  // typeHooks: $TypeHooks
}

export namespace Extension {
  // ------------------------------------------------------------
  // Helper Types
  // ------------------------------------------------------------

  export type PropertiesTypeFunction = _re_export.PropertiesTypeFunction

  export type PropertiesTypeFunctionParameters = _re_export.PropertiesTypeFunctionParameters

  // ------------------------------------------------------------
  // Builder
  // ------------------------------------------------------------

  interface Builder_TransportMethod<
    $Extension extends Extension,
    $ConfigurationNormalized extends Configurator.Configuration,
  > {
    /**
     * TODO 1
     */
    <$Transport extends Transport>(transport: Transport.Builder<$Transport>): Builder<{
      constructor: $Extension['constructor']
      requestInterceptor: $Extension['requestInterceptor']
      name: $Extension['name']
      configurator: $Extension['configurator']
      // update:
      transport: $Transport
    }>
    /**
     * TODO 2
     */
    <$Name extends string, $Transport extends Transport>(
      name: $Name,
      constructor: (
        parameters: ConstructorParameters<$ConfigurationNormalized> & { $: Transport.Builder.States.Empty<$Name> },
      ) => Transport.Builder<$Transport>,
    ): Builder<{
      constructor: $Extension['constructor']
      requestInterceptor: $Extension['requestInterceptor']
      name: $Extension['name']
      configurator: $Extension['configurator']
      // update:
      transport: $Transport
    }>
  }

  // dprint-ignore
  export interface Builder<
    $Extension extends Extension,
    _$ConfigurationNormalized extends object = undefined extends $Extension['configurator'] ? never : ExcludeUndefined<$Extension['configurator']>['normalized']
  > {

    /**
     * todo
     */
    configurator: <$Configurator extends Configurator>(
      input: Configurator.BuilderProviderCallback<$Configurator> | Configurator.Builder<$Configurator> | $Configurator,
    ) => Builder<{
      constructor: $Extension['constructor']
      requestInterceptor: $Extension['requestInterceptor']
      name: $Extension['name']
      transport: $Extension['transport']
      // update:
      configurator: $Configurator
    }>
    
    /**
     * TODO 0
     */
    transport: Builder_TransportMethod<$Extension, _$ConfigurationNormalized>
    
    /**
     * todo
     */
    constructor: <$Properties extends object, $Transport extends Transport>(
      constructor: (parameters: ConstructorParameters<_$ConfigurationNormalized>) => {
        /**
         * todo
         */
        requestInterceptor?: RequestPipelineBaseInterceptor,
        /**
         * todo
         */
        properties?: $Properties
        /**
         * todo
         */
        transport?: $Transport
      }
    ) => Builder<{
      constructor: $Extension['constructor']
      requestInterceptor: $Extension['requestInterceptor']
      name: $Extension['name']
      configurator: $Extension['configurator']
      noExpandResultDataType: $Extension['noExpandResultDataType']
      transport: $Transport
      // update:
      properties: $Properties
    }>
    
    // todo: support static properties too.
    properties: <$Properties extends object>(
      constructor: (parameters: ConstructorParameters<_$ConfigurationNormalized>) => $Properties
    ) => Builder<{
      constructor: $Extension['constructor']
      requestInterceptor: $Extension['requestInterceptor']
      name: $Extension['name']
      configurator: $Extension['configurator']
      noExpandResultDataType: $Extension['noExpandResultDataType']
      transport: $Extension['transport']
      // update:
      properties: $Properties
    }>
    
    
    typeOfProperties: <$Type extends object>() => Builder<{
      constructor: $Extension['constructor']
      requestInterceptor: $Extension['requestInterceptor']
      name: $Extension['name']
      configurator: $Extension['configurator']
      noExpandResultDataType: $Extension['noExpandResultDataType']
      transport: $Extension['transport']
      // update:
      $Properties: $Type
    }>
    
    /**
     * Type(s) that show up in request result data which Graffle should NOT
     * "simplify" (aka. "expand", "compute").
     *
     * So for example, if this type were `Date` and the request result data
     * contained a `Date` type, then it would be left-as is rather than have its
     * type turned into the appearance of an object literal, all its properties listed, etc.
     *
     * You can specify multiple types here by using a union. For example: `IntrospectionQuery | Date`.
     */
    typeOfNoExpandResultDataType: <$DataType>() => Builder<{
      constructor: $Extension['constructor']
      requestInterceptor: $Extension['requestInterceptor']
      name: $Extension['name']
      configurator: $Extension['configurator']
      $Properties: $Extension['$Properties']
      transport: $Extension['transport']
      // update:
      noExpandResultDataType: $DataType
    }>
    
    /**
     * TODO
     */
    // todo: extension stores the initialization configuration statically...
    done: () => (...parameters: undefined extends $Extension['configurator'] ? [] : [parameters: _$ConfigurationNormalized]) => $Extension
  }
}
