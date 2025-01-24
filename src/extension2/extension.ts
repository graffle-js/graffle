import { __, type ExcludeUndefined } from '../lib/prelude.js'
import type { RequestPipelineBaseInterceptor } from '../requestPipeline/__.js'
import type { Configurator } from '../types/configurator.js'
import type { Transport } from '../types/Transport.js'
import type { ConstructorParameters } from './constructor.js'

// ------------------------------------------------------------
// Constructor
// ------------------------------------------------------------

export const Extension = <$Name extends string>(
  name: $Name,
): Extension.Builder<Extension<$Name, undefined, undefined, undefined, undefined>> => {
  return __(name)
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
  properties?: $Properties
  transport: $Transport
  // typeHooks: $TypeHooks
}

import type * as _reexport from './properties.js'
export namespace Extension {
  // ------------------------------------------------------------
  // Helper Types
  // ------------------------------------------------------------

  export type PropertiesTypeFunction = _reexport.PropertiesTypeFunction

  export type PropertiesTypeFunctionParameters = _reexport.PropertiesTypeFunctionParameters

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
    _$ConfigurationNormalized extends object = undefined extends $Extension['configurator'] ? never : Configurator.TypeOfNormalized<ExcludeUndefined<$Extension['configurator']>>
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
      properties: $Type
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
      properties: $Extension['properties']
      transport: $Extension['transport']
      // update:
      noExpandResultDataType: $DataType
    }>
  }
}
