import type { Configurator } from '../../../../lib/configurator/configurator.js'
import { undefinedAs } from '../../../../lib/prelude.js'
import type { RequestPipeline } from '../../../../requestPipeline/__.js'
import type { Properties } from '../../properties/__.js'
import type { Transport } from '../../transports/dataType.js'
import type * as _re_export from './properties.js'

export interface Data<
  $Name extends string = string,
  $Configurator extends undefined | Configurator = undefined | Configurator,
  $NoExpandResultDataType = unknown,
  $PropertiesStatic extends object = object,
  $PropertiesComputersTypeFunctions extends ReadonlyArray<Properties.PropertiesComputerTypeFunction> = ReadonlyArray<
    Properties.PropertiesComputerTypeFunction
  >,
  $Transport extends Transport | undefined = Transport | undefined,
  $Static extends object | undefined = object | undefined,
  $ConfiguratorInitialInput = unknown,
> // $TypeHooks extends TypeHooks = TypeHooks,
{
  readonly name: $Name
  readonly configurator?: $Configurator
  readonly configuratorInitialInput?: $ConfiguratorInitialInput
  // constructor?: (parameters: ConstructorParameters) => {
  //   requestInterceptor?: RequestPipeline.BaseInterceptor
  //   properties?: object
  // }
  readonly requestInterceptor?: RequestPipeline.BaseInterceptor
  readonly noExpandResultDataType?: $NoExpandResultDataType
  readonly propertiesStatic: $PropertiesStatic
  readonly propertiesComputed: ReadonlyArray<Properties.PropertiesComputer>
  readonly propertiesComputedTypeFunctions$: $PropertiesComputersTypeFunctions
  // todo support for multiple transports in one extension
  readonly transport: $Transport
  readonly static: $Static
  // typeHooks: $TypeHooks
}

export interface DataEmpty<$Name extends string = string> extends Data<$Name> {
  readonly configurator: undefined
  readonly configuratorInitialInput: unknown
  readonly requestInterceptor: undefined
  readonly noExpandResultDataType: undefined
  readonly transport: undefined
  readonly static: undefined
  readonly propertiesStatic: {}
  readonly propertiesComputed: readonly []
  readonly propertiesComputedTypeFunctions$: readonly []
}

export const dataPropertiesTypeOnly = undefinedAs<{
  propertiesComputedTypeFunctions$: []
}>()
