import type { RequestPipeline } from '#~/requestPipeline/_.js'
import { Bldr, Obj } from '@wollybeard/kit'
import { Configurator } from '@wollybeard/kit'
import type { WritableDeep } from 'type-fest'
import type { Context } from '../../../context.js'
import type { Configuration } from '../../configuration/_.js'
import type { Properties } from '../../properties/_.js'
import type { RequestInterceptors } from '../../requestInterceptors/_.js'
import { Transport } from '../../transports/dataType/_.js'
import type { ContextComputerParameters } from '../../types.js'
import { type Data, type DataEmpty, dataPropertiesTypeOnly } from './data.js'
import type { DependentExtensionParameters } from './DependentExtensionParameters.js'
import type * as _re_export from './properties.js'

// ------------------------------------------------------------
// Creator
// ------------------------------------------------------------

export const create: Create = (name) => {
  const data: WritableDeep<Data> = {
    name,
    transports: [],
    static: {},
    propertiesStatic: {},
    propertiesComputed: [],
    requestInterceptorsComputed: [],
    ...dataPropertiesTypeOnly,
  }

  return Bldr.createMutable({
    data,
    builder: {
      static(properties) {
        data.static = properties
      },
      transport(input: Transport.Provider.Input) {
        const transport = Transport.Provider.receive(input)
        data.transports.push(transport)
      },
      requestInterceptor(requestInterceptor: RequestPipeline.BaseInterceptor) {
        data.requestInterceptor = requestInterceptor
      },
      requestInterceptorDependingOn(requestInterceptorComputer: RequestInterceptors.RequestInterceptorComputer) {
        // @ts-expect-error: todo have an internal type with this property
        requestInterceptorComputer.sourceExtension = name // todo use symbol, can it be dynamic?
        data.requestInterceptorsComputed.push(requestInterceptorComputer)
      },
      configurator(configurator: Configurator.DataInput) {
        data.configurator = Configurator.normalizeDataInput(configurator)
      },
      properties(properties) {
        if (typeof properties === `function`) {
          data.propertiesComputed.push(properties)
        } else {
          Object.assign(data.propertiesStatic, properties)
        }
      },
      typeOfNoExpandResultDataType() {
      },
      return() {
        if (data.configurator) {
          const constructor = (initialInput: Configurator.Configuration) => {
            if (initialInput === undefined) return data
            return {
              ...data,
              configuratorInitialInput: initialInput,
            }
          }
          constructor.configurator = data.configurator
          constructor.definition = data
          // Attach static properties to the constructor
          Object.assign(constructor, data.static)
          return constructor
        }

        // Attach static properties to the data object
        return Object.assign(data, data.static)
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
  configurator: <$Configurator extends Configurator.Configurator>(
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
  requestInterceptorDependingOn: <$RequestInterceptor extends RequestPipeline.BaseInterceptor>(
    requestInterceptorFactory: ((parameters: ContextComputerParameters<$Context, __$ConfigurationNormalized>) => $RequestInterceptor),
  ) => Chain<$Context, {
    readonly [_ in keyof $Data]: _ extends 'requestInterceptor' ? $RequestInterceptor : $Data[_]
  }>
  requestInterceptor: <$RequestInterceptor extends RequestPipeline.BaseInterceptor>(
    requestInterceptor: $RequestInterceptor
  ) => Chain<$Context, {
    readonly [_ in keyof $Data]: _ extends 'requestInterceptor' ? $RequestInterceptor : $Data[_]
  }>

  /**
   * todo
   */
  properties: <properties extends object>(
    propertiesInit: properties | Properties.PropertiesComputer<Context, properties, __$ConfigurationNormalized>
  ) => Chain<$Context, {
    // dprint-ignore
    readonly [_ in keyof $Data]:
      _ extends 'propertiesStatic' ?
        properties extends Properties.PropertiesComputer$Func
          ? $Data['propertiesStatic']
          : Obj.MergeShallow<$Data['propertiesStatic'], properties> :
      _ extends 'propertiesComputedTypeFunctions$' ?
        properties extends Properties.PropertiesComputer$Func
          ? readonly [properties]
          : $Data['propertiesComputedTypeFunctions$'] :
      $Data[_]
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
  // dprint-ignore
  return: () =>
      & ($Data['configurator'] extends Configurator.Configurator
          // ? (...args: Configurator.InferParameters<$Data['configurator']>) => $Data
          ? & (
                <$Args extends Configurator.InferParameters<$Data['configurator']>>(...args: $Args) =>
                  & $Data
                  & {
                    readonly configuratorInitialInput: $Args extends [infer $InitialInput] ? $InitialInput : undefined
                  }
              )
            & {
                readonly definition: $Data
                readonly configurator: $Data['configurator']
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
  <$TransportData extends Transport.Data>(transport: Transport.Provider.Input<$TransportData>): Chain<
    $Context,
    {
      readonly [_ in keyof $Data]: _ extends 'transports' ? [...$Data['transports'], $TransportData] : $Data[_]
    }
  >
  /**
   * TODO 2
   */
  <$Name extends string, $TransportData extends Transport.Data>(
    name: $Name,
    constructor: (
      parameters: DependentExtensionParameters<$Context, $ConfigurationNormalized> & {
        $: Transport.Builder.States.Empty<$Name>
      },
    ) => Transport.Builder<$TransportData>,
  ): Chain<
    $Context,
    {
      readonly [_ in keyof $Data]: _ extends 'transports' ? [...$Data['transports'], $TransportData] : $Data[_]
    }
  >
}
