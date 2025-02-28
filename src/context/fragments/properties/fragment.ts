import type { Client, Client_justContext } from '../../../client/client.js'
import type { Configurator } from '../../../lib/configurator/configurator.js'
import { type EmptyArray, emptyArray, type EmptyObject, emptyObject, undefinedAs } from '../../../lib/prelude.js'
import type { Context } from '../../context.js'

// ------------------------------------------------------------
// Helpers
// ------------------------------------------------------------

// todo put symbol here to make unique from any possible properties object
export interface PropertiesComputerTypeFunction {
  context: Context
  return: unknown
}

// export interface PropertiesComputerTypeFunctionParameters {
//   context: Context
//   // client: Client
// }

// todo: $Acc shallow merge
export type RunPropertiesComputers<
  $Context extends Context,
  $Items extends readonly [...PropertiesComputerTypeFunction[]] = $Context['properties']['$computedTypeFunctions'],
  $Acc extends Properties = {},
> = $Items extends readonly [
  infer $Head extends PropertiesComputerTypeFunction,
  ...infer $Tail extends readonly PropertiesComputerTypeFunction[],
] ? RunPropertiesComputers<$Context, $Tail, $Acc & ($Head & { context: $Context })['return']>
  : $Acc

export type PropertiesComputer<
  $Context extends Context = Context,
  $Properties extends Properties = Properties,
  $Configuration extends Configurator.Configuration = $Context['configuration'],
> = (
  parameters: {
    configuration: $Configuration
    context: $Context
    client: Client<$Context>
  },
) => $Properties

export const createPropertiesComputer = <
  $Client extends Client_justContext,
>() =>
<
  $PropertiesComputer extends (
    parameters: {
      configuration: $Client['_']['configuration']
      context: $Client['_']
      client: $Client
    },
  ) => Properties,
>(
  propertiesComputer: $PropertiesComputer,
) => propertiesComputer

// ------------------------------------------------------------
// Context Fragment
// ------------------------------------------------------------

export type Properties = object

export interface ContextFragment {
  readonly properties: {
    readonly computed: ReadonlyArray<PropertiesComputer>
    readonly static: Properties
    readonly $computedTypeFunctions: ReadonlyArray<PropertiesComputerTypeFunction>
  }
}

export interface ContextFragmentEmpty extends ContextFragment {
  readonly properties: {
    readonly computed: ReadonlyArray<PropertiesComputer>
    readonly static: EmptyObject
    readonly $computedTypeFunctions: EmptyArray
  }
}

export const contextFragmentPropertiesTypeLevel = undefinedAs<
  Pick<ContextFragmentEmpty['properties'], '$computedTypeFunctions'>
>()

export const contextFragmentEmpty: ContextFragmentEmpty = Object.freeze({
  properties: Object.freeze({
    static: emptyObject,
    computed: emptyArray,
    ...contextFragmentPropertiesTypeLevel,
  }),
})
