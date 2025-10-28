import type { Client_justContext } from '#src/client/client.js'
import { type EmptyArray, emptyArray, type EmptyObject, emptyObject } from '#src/lib/prelude.js'
import { Ts } from '@wollybeard/kit'
import type * as Configurator from '@wollybeard/kit/configurator'
import type { Context } from '../../context.js'
import type { ContextComputerParameters } from '../types.js'

// ------------------------------------------------------------
// Helpers
// ------------------------------------------------------------

// todo put symbol here to make unique from any possible properties object
export interface PropertiesComputer$Func {
  parameters: unknown
  return: unknown
}

// export interface PropertiesComputerTypeFunctionParameters {
//   context: Context
//   // client: Client
// }

// todo: $Acc shallow merge
// dprint-ignore
export type RunPropertiesComputers<
  $Context extends Context,
  $Items extends readonly [...PropertiesComputer$Func[]] = $Context['properties']['$computedTypeFunctions'],
  $Acc extends Properties = {},
> = $Items extends
      readonly [
        infer $Head extends PropertiesComputer$Func,
        ...infer $Tail extends readonly PropertiesComputer$Func[],
      ]
        ? RunPropertiesComputers<$Context, $Tail, $Acc & ($Head & { parameters: { context: $Context; client: 'todo'; configuration: 'todo' } })['return']>
        : $Acc

export type PropertiesComputer<
  $Context extends Context = Context,
  $Properties extends Properties = Properties,
  $Configuration extends Configurator.Configuration = $Context['configuration'],
> = (
  parameters: ContextComputerParameters<$Context, $Configuration>,
) => $Properties

export const createPropertiesComputer = <
  $Client extends Client_justContext, // = Client,
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
    readonly $computedTypeFunctions: ReadonlyArray<PropertiesComputer$Func>
  }
}

export interface ContextFragmentEmpty extends ContextFragment {
  readonly properties: {
    readonly computed: ReadonlyArray<PropertiesComputer>
    readonly static: EmptyObject
    readonly $computedTypeFunctions: EmptyArray
  }
}

export const contextFragmentPropertiesTypeLevel = Ts.as<
  Pick<ContextFragmentEmpty['properties'], '$computedTypeFunctions'>
>()

export const contextFragmentEmpty: ContextFragmentEmpty = Object.freeze({
  properties: Object.freeze({
    static: emptyObject,
    computed: emptyArray,
    ...contextFragmentPropertiesTypeLevel,
  }),
})
