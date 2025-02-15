import type { WritableDeep } from 'type-fest'
import { Configurator } from '../../../../lib/configurator/configurator.js'
import { createMutableBuilder } from '../../../../lib/mutableBuilder.js'
import { __, type ObjectMergeShallow } from '../../../../lib/prelude.js'
import type { RequestPipeline } from '../../../../requestPipeline/__.js'
import type { Context } from '../../../../types/context.js'
import type { Configuration } from '../../configuration/__.js'
import type { Properties } from '../../properties/__.js'
import { Transport } from '../../transports/dataType.js'
import { type Data, type DataEmpty, dataPropertiesTypeOnly } from './data.js'
import type { DependentExtensionParameters } from './DependentExtensionParameters.js'
import type * as _re_export from './properties.js'

// ------------------------------------------------------------
// Creator
// ------------------------------------------------------------

export const create: Create = (name) => {
  const data: WritableDeep<Data> = {
    name,
    transport: undefined,
    static: {},
    propertiesStatic: {},
    propertiesComputed: [],
    ...dataPropertiesTypeOnly,
  }

  return createMutableBuilder({
    data,
    builder: {
      static(properties) {
        data.static = properties
      },
      transport(transportTypeInput: Transport | Transport.Builder<Transport>) {
        const transport = Transport.$.isBuilder(transportTypeInput) ? transportTypeInput.return() : transportTypeInput
        data.transport = transport
      },
      requestInterceptor(requestInterceptor: RequestPipeline.BaseInterceptor) {
        data.requestInterceptor = requestInterceptor
      },
      configurator(configurator: Configurator.DataInput) {
        data.configurator = Configurator.$.normalizeDataInput(configurator)
      },
      properties(properties) {
        if (typeof properties === `function`) {
          data.propertiesComputed.push(properties)
        } else {
          Object.assign(data.propertiesStatic, properties)
        }
      },
      return() {
        return data.configurator
          ? (initialInput: Configurator.Configuration) => {
            if (initialInput === undefined) return data
            return {
              ...data,
              configuratorInitialInput: initialInput,
            }
          }
          : data
      },
    },
  }) as any
}

type Create = <$Context extends Context, $Name extends string>(
  name: $Name,
) => Chain<$Context, DataEmpty<$Name>>

// ------------------------------------------------------------
// Chain
// ------------------------------------------------------------

// dprint-ignore
export interface Chain<
  $Context extends Context,
  $Data extends Data,
  __$ConfigurationNormalized extends object =
    undefined extends $Data['configurator']
      ? Context['configuration']
      : Context['configuration'] & {
        [_ in $Data['name']]: Configuration.ConfigurationNamespace<Exclude<$Data['configurator'], undefined>>
      }
> {

  /**
   * todo
   */
  configurator: <$Configurator extends Configurator>(
    configurator: Configurator.DataInput<$Configurator>,
  ) => Chain<$Context, {
    readonly [_ in keyof $Data]: _ extends 'configurator' ? $Configurator : $Data[_]
  }>
  
  /**
   * TODO 0
   */
  transport: MethodTransport<$Context, $Data, __$ConfigurationNormalized>
  
  /**
   * todo
   */
  requestInterceptor: <$RequestInterceptor extends RequestPipeline.BaseInterceptor>(
    requestInterceptor: $RequestInterceptor,
  ) => Chain<$Context, {
    readonly [_ in keyof $Data]: _ extends 'requestInterceptor' ? $RequestInterceptor : $Data[_]
  }>
  
  /**
   * todo
   */
  properties: <properties extends object>(
    propertiesInit: properties | Properties.PropertiesComputer<Context, properties, __$ConfigurationNormalized>
  ) => Chain<$Context, {
    readonly [_ in keyof $Data]: _ extends 'propertiesStatic' ?
      properties extends Properties.PropertiesComputerTypeFunction
        ? $Data['propertiesStatic']
        : ObjectMergeShallow<$Data['propertiesStatic'], properties>
      : _ extends 'propertiesComputedTypeFunctions$' ?
        properties extends Properties.PropertiesComputerTypeFunction
          ? readonly [properties]
          : $Data['propertiesComputedTypeFunctions$']
      : $Data[_]
  }>
  
  /**
   * todo
   */
  static: <properties extends object>(
    properties: properties,
  ) => Chain<$Context, {
    readonly [_ in keyof $Data]: _ extends 'static' ? properties : $Data[_]
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
  typeOfNoExpandResultDataType: <$DataType>() => Chain<$Context, {
    readonly [_ in keyof $Data]: _ extends 'noExpandResultDataType' ? $DataType : $Data[_]
  }>
  
  /**
   * TODO
   */
  // todo: extension stores the initialization configuration statically...
  return: () =>
      & ($Data['configurator'] extends Configurator
          // ? (...args: Configurator.InferParameters<$Data['configurator']>) => $Data 
          ? <$Args extends Configurator.InferParameters<$Data['configurator']>>(...args: $Args) => $Data & {
            readonly configuratorInitialInput: $Args extends [infer $InitialInput] ? $InitialInput : undefined
          }
          : $Data
        )
      & ($Data['static'] extends object ? $Data['static'] : unknown)
}

// ------------------------------------------------------------
// Chain Methods
// ------------------------------------------------------------

interface MethodTransport<
  $Context extends Context,
  $Data extends Data,
  $ConfigurationNormalized extends Configurator.Configuration,
> {
  /**
   * TODO 1
   */
  <$Transport extends Transport>(transport: $Transport | Transport.Builder<$Transport>): Chain<
    $Context,
    {
      readonly [_ in keyof $Data]: _ extends 'transport' ? $Transport : $Data[_]
    }
  >
  /**
   * TODO 2
   */
  <$Name extends string, $Transport extends Transport>(
    name: $Name,
    constructor: (
      parameters: DependentExtensionParameters<$Context, $ConfigurationNormalized> & {
        $: Transport.Builder.States.Empty<$Name>
      },
    ) => Transport.Builder<$Transport>,
  ): Chain<
    $Context,
    {
      readonly [_ in keyof $Data]: _ extends 'transport' ? $Transport : $Data[_]
    }
  >
}
