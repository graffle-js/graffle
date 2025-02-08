import type { WritableDeep } from 'type-fest'
import type { Configuration } from '../client/properties/configuration/__.js'
import type { Properties } from '../client/properties/properties/__.js'
import { Transport } from '../client/properties/transports/dataType.js'
import type { Configurator } from '../lib/configurator/configurator.js'
import { __, type ObjectMergeShallow, undefinedAs } from '../lib/prelude.js'
import type { RequestPipeline } from '../requestPipeline/__.js'
import type { Context } from '../types/context.js'
import type { ConstructorParameters } from './constructor.js'
import type * as _re_export from './properties.js'

// ------------------------------------------------------------
// Type
// ------------------------------------------------------------

export interface Extension<
  $Name extends string = string,
  $Configurator extends undefined | Configurator = undefined | Configurator,
  $NoExpandResultDataType = unknown,
  $PropertiesStatic extends object = object,
  $PropertiesComputersTypeFunctions extends ReadonlyArray<Properties.PropertiesComputerTypeFunction> = ReadonlyArray<
    Properties.PropertiesComputerTypeFunction
  >,
  $Transport extends Transport | undefined = Transport | undefined,
  $Custom extends object = object,
> // $TypeHooks extends TypeHooks = TypeHooks,
{
  name: $Name
  configurator?: $Configurator
  constructor?: (parameters: ConstructorParameters) => {
    requestInterceptor?: RequestPipeline.BaseInterceptor
    properties?: object
  }
  requestInterceptor?: RequestPipeline.BaseInterceptor
  noExpandResultDataType?: $NoExpandResultDataType
  propertiesStatic: $PropertiesStatic
  propertiesComputed: ReadonlyArray<Properties.PropertiesComputer>
  propertiesComputedTypeFunctions$: $PropertiesComputersTypeFunctions
  // todo support for multiple transports in one extension
  transport?: $Transport
  static: $Custom
  // typeHooks: $TypeHooks
}

const extensionTypeOnlyProperties = undefinedAs<{
  propertiesComputedTypeFunctions$: []
}>()

// ------------------------------------------------------------
// Constructor
// ------------------------------------------------------------

export const Extension = <$Name extends string>(
  name: $Name,
): Extension.Builder<Extension<$Name, undefined, undefined, {}, [], undefined>> => {
  const extension: WritableDeep<Extension> = {
    name,
    propertiesStatic: {},
    propertiesComputed: [],
    ...extensionTypeOnlyProperties,
  } as any
  const builder: Extension.Builder<Extension<$Name, undefined, undefined, {}, [], undefined>> = {
    static(properties) {
      Object.assign(extension.static, properties)
      return builder
    },
    transport(transportTypeInput: Transport | Transport.Builder<Transport>) {
      const transport = Transport.$.isBuilder(transportTypeInput) ? transportTypeInput.return() : transportTypeInput
      extension.transport = transport
      return builder
    },
    requestInterceptor(requestInterceptor: RequestPipeline.BaseInterceptor) {
      extension.requestInterceptor = requestInterceptor
      return builder
    },
    configurator() {
      return builder
    },
    properties(properties) {
      if (typeof properties === `function`) {
        extension.propertiesComputed.push(properties)
      } else {
        Object.assign(extension.propertiesStatic, properties)
      }
      return builder
    },
    return() {
      return () => extension
    },
  }

  return builder as any
}

export namespace Extension {
  // ------------------------------------------------------------
  // Helper Types
  // ------------------------------------------------------------

  export type ConstructorParameters<$Context extends Context> = _reexport_ConstructorParameters<$Context>

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
    <$Transport extends Transport>(transport: $Transport | Transport.Builder<$Transport>): Builder<{
      static: $Extension['static']
      propertiesStatic: $Extension['propertiesStatic']
      propertiesComputed: $Extension['propertiesComputed']
      propertiesComputedTypeFunctions$: $Extension['propertiesComputedTypeFunctions$']
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
      static: $Extension['static']
      propertiesStatic: $Extension['propertiesStatic']
      propertiesComputed: $Extension['propertiesComputed']
      propertiesComputedTypeFunctions$: $Extension['propertiesComputedTypeFunctions$']
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
    _$ConfigurationNormalized extends object =
      undefined extends $Extension['configurator']
        ? Context['configuration']
        : Context['configuration'] & {
          [_ in $Extension['name']]: Configuration.ConfigurationNamespace<Exclude<$Extension['configurator'], undefined>>
        }
  > {

    /**
     * todo
     */
    configurator: <$Configurator extends Configurator>(
      input: Configurator.BuilderProviderCallback<$Configurator> | Configurator.Builder<$Configurator> | $Configurator,
    ) => Builder<{
      static: $Extension['static']
      propertiesStatic: $Extension['propertiesStatic']
      propertiesComputed: $Extension['propertiesComputed']
      propertiesComputedTypeFunctions$: $Extension['propertiesComputedTypeFunctions$']
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
        requestInterceptor?: RequestPipeline.BaseInterceptor,
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
      static: $Extension['static']
      propertiesStatic: $Extension['propertiesStatic']
      propertiesComputed: $Extension['propertiesComputed']
      propertiesComputedTypeFunctions$: $Extension['propertiesComputedTypeFunctions$']
      constructor: $Extension['constructor']
      requestInterceptor: $Extension['requestInterceptor']
      name: $Extension['name']
      configurator: $Extension['configurator']
      noExpandResultDataType: $Extension['noExpandResultDataType']
      transport: $Transport
      // update:
      properties: $Properties
    }>
    
    requestInterceptor: <$RequestInterceptor extends RequestPipeline.BaseInterceptor>(
      requestInterceptor: $RequestInterceptor,
    ) => Builder<{
      static: $Extension['static']
      propertiesStatic: $Extension['propertiesStatic']
      propertiesComputed: $Extension['propertiesComputed']
      propertiesComputedTypeFunctions$: $Extension['propertiesComputedTypeFunctions$']
      constructor: $Extension['constructor']
      name: $Extension['name']
      configurator: $Extension['configurator']
      noExpandResultDataType: $Extension['noExpandResultDataType']
      transport: $Extension['transport']
      // update:
      requestInterceptor: $RequestInterceptor
    }>
    
    /**
     * todo
     */
    properties: <$Properties extends object>(
      constructor: $Properties | Properties.PropertiesComputer<Context, $Properties, _$ConfigurationNormalized>
    ) => Builder<{
      static: $Extension['static']
      propertiesComputed: $Extension['propertiesComputed']
      constructor: $Extension['constructor']
      requestInterceptor: $Extension['requestInterceptor']
      name: $Extension['name']
      configurator: $Extension['configurator']
      noExpandResultDataType: $Extension['noExpandResultDataType']
      transport: $Extension['transport']
      // update:
      propertiesStatic:
        $Properties extends Properties.PropertiesComputerTypeFunction
          ? $Extension['propertiesStatic']
          : ObjectMergeShallow<$Extension['propertiesStatic'], $Properties>
      propertiesComputedTypeFunctions$:
        $Properties extends Properties.PropertiesComputerTypeFunction
          ? [$Properties]
          : $Extension['propertiesComputedTypeFunctions$']
    }>
    
    /**
     * todo
     */
    static: <$PropertiesThis extends object>(
      propertiesThis: $PropertiesThis,
    ) => Builder<{
      propertiesStatic: $Extension['propertiesStatic']
      propertiesComputed: $Extension['propertiesComputed']
      propertiesComputedTypeFunctions$: $Extension['propertiesComputedTypeFunctions$']
      constructor: $Extension['constructor']
      requestInterceptor: $Extension['requestInterceptor']
      name: $Extension['name']
      configurator: $Extension['configurator']
      noExpandResultDataType: $Extension['noExpandResultDataType']
      transport: $Extension['transport']
      static: $PropertiesThis
    }>
    
    
    // typeOfProperties: <$Type extends object>() => Builder<{
    //   propertiesStatic: $Extension['propertiesStatic']
    //   propertiesComputed: $Extension['propertiesComputed']
    //   constructor: $Extension['constructor']
    //   requestInterceptor: $Extension['requestInterceptor']
    //   name: $Extension['name']
    //   configurator: $Extension['configurator']
    //   noExpandResultDataType: $Extension['noExpandResultDataType']
    //   transport: $Extension['transport']
    //   // update:
    //   $Properties: $Type
    // }>
    
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
      static: $Extension['static']
      propertiesStatic: $Extension['propertiesStatic']
      propertiesComputed: $Extension['propertiesComputed']
      propertiesComputedTypeFunctions$: $Extension['propertiesComputedTypeFunctions$']
      constructor: $Extension['constructor']
      requestInterceptor: $Extension['requestInterceptor']
      name: $Extension['name']
      configurator: $Extension['configurator']
      transport: $Extension['transport']
      // update:
      noExpandResultDataType: $DataType
    }>
    
    /**
     * TODO
     */
    // todo: extension stores the initialization configuration statically...
    return: () => {
      (...parameters: $Extension['configurator'] extends Configurator ? [parameters: $Extension['configurator']['input']] : []): $Extension
      static: $Extension['static']
    }
  }
}

type _reexport_ConstructorParameters<$Context extends Context> = ConstructorParameters<$Context>
