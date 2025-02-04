import {
  __undefinedAs,
  type EmptyArray,
  emptyArray,
  type EmptyObject,
  emptyObject,
  isObjectEmpty,
  type ObjectMergeShallow,
} from '../../../lib/prelude.js'
import type { Configurator } from '../../../types/configurator.js'
import type { Context } from '../../../types/context.js'
import type { Client, Client_justContext } from '../../client.js'

// ------------------------------------------------------------
// Method
// ------------------------------------------------------------

// todo have the client type be passed through too? Using `this` from parent?
export interface AddPropertiesMethod<$Context extends Context> {
  <$Properties extends Properties>(properties: $Properties | PropertiesComputer<$Context, $Properties>): Client<
    {
      [_ in keyof $Context]: _ extends 'properties' ? ContextFragmentAddProperties<
          $Context,
          $Properties extends PropertiesComputerTypeFunction ? {} : $Properties,
          $Properties extends PropertiesComputerTypeFunction ? [$Properties] : []
        >
        : $Context[_]
    }
  >
}

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

export interface ContextFragmentProperties {
  readonly properties: {
    readonly computed: ReadonlyArray<PropertiesComputer>
    readonly static: Properties
    readonly $computedTypeFunctions: ReadonlyArray<PropertiesComputerTypeFunction>
  }
}

export interface ContextFragmentPropertiesEmpty extends ContextFragmentProperties {
  readonly properties: {
    readonly computed: ReadonlyArray<PropertiesComputer>
    readonly static: EmptyObject
    readonly $computedTypeFunctions: EmptyArray
  }
}

export const contextFragmentPropertiesEmpty: ContextFragmentPropertiesEmpty = Object.freeze({
  properties: Object.freeze({
    static: emptyObject,
    computed: emptyArray,
    // Does not exist at value level
    ...__undefinedAs<Pick<ContextFragmentPropertiesEmpty['properties'], '$computedTypeFunctions'>>(),
  }),
})

export type ContextFragmentAddProperties<
  $Context extends Context,
  $PropertiesStatic extends Properties,
  $PropertiesComputerTypeFunctions extends readonly PropertiesComputerTypeFunction[],
  __ = {
    static: ObjectMergeShallow<$Context['properties']['static'], $PropertiesStatic>
    $computedTypeFunctions: readonly [
      ...$Context['properties']['$computedTypeFunctions'],
      ...$PropertiesComputerTypeFunctions,
    ]
    // passthrough
    computed: $Context['properties']['computed']
  },
> = __

// ------------------------------------------------------------
// ContextReducer
// ------------------------------------------------------------

// type MethodArguments = Properties | PropertiesComputer<Context, Properties>

export const contextFragmentPropertiesAdd = <$Context extends Context>(
  context: $Context,
  propertiesInput: {
    static?: Properties
    computed?: ReadonlyArray<PropertiesComputer>
  },
): null | ContextFragmentProperties => {
  const isHasStatic = propertiesInput.static && !isObjectEmpty(propertiesInput.static)
  const isHasComputed = propertiesInput.computed && propertiesInput.computed.length > 0
  if (!isHasStatic && !isHasComputed) return null

  const static_ = isHasStatic
    ? Object.freeze({
      ...context.properties.static,
      ...propertiesInput.static,
    })
    : context.properties.static

  const computed = isHasComputed
    ? [
      ...context.properties.computed,
      ...propertiesInput.computed!,
    ]
    : context.properties.computed

  const properties = {
    static: static_,
    computed,
  }
  return { properties }
}
