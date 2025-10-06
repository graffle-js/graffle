import type { Configurator } from '#/lib/configurator/configurator'
import { undefinedAs } from '#/lib/prelude'
import type { RequestPipeline } from '#/requestPipeline/$'
import type { RequestInterceptors } from '../../../$$.js'
import type { Properties } from '../../properties/$.js'
import type { Transport } from '../../transports/dataType/$.js'
import type * as _re_export from './properties.js'

export interface Data<
  $Name extends string = string,
  $Configurator extends undefined | Configurator = undefined | Configurator,
  $NoExpandResultDataType = unknown,
  $PropertiesStatic extends object = object,
  $PropertiesComputersTypeFunctions extends ReadonlyArray<Properties.PropertiesComputer$Func> = ReadonlyArray<
    Properties.PropertiesComputer$Func
  >,
  $Transports extends readonly Transport.Data[] = readonly Transport.Data[],
  $Static extends object | undefined = object | undefined,
  $ConfiguratorInitialInput = unknown,
> // $TypeHooks extends TypeHooks = TypeHooks,
{
  readonly name: $Name
  readonly configurator?: $Configurator | undefined
  readonly configuratorInitialInput?: $ConfiguratorInitialInput | undefined
  // constructor?: (parameters: ConstructorParameters) => {
  //   requestInterceptor?: RequestPipeline.BaseInterceptor
  //   properties?: object
  // }
  // todo make array
  readonly requestInterceptor?: RequestPipeline.BaseInterceptor | undefined
  readonly requestInterceptorsComputed: readonly RequestInterceptors.RequestInterceptorComputer[]
  readonly noExpandResultDataType?: $NoExpandResultDataType
  readonly propertiesStatic: $PropertiesStatic
  readonly propertiesComputed: ReadonlyArray<Properties.PropertiesComputer>
  readonly propertiesComputedTypeFunctions$: $PropertiesComputersTypeFunctions
  // todo support for multiple transports in one extension
  readonly transports: $Transports
  readonly static: $Static
  // typeHooks: $TypeHooks
}

export interface DataEmpty<$Name extends string = string> extends Data<$Name> {
  readonly configurator: undefined
  readonly configuratorInitialInput: unknown
  readonly requestInterceptor: undefined
  readonly requestInterceptorsComputed: readonly []
  readonly noExpandResultDataType: undefined
  readonly transports: [] // todo readonly
  readonly static: undefined
  readonly propertiesStatic: {}
  readonly propertiesComputed: readonly []
  readonly propertiesComputedTypeFunctions$: readonly []
}

export const dataPropertiesTypeOnly = undefinedAs<{
  propertiesComputedTypeFunctions$: []
}>()
