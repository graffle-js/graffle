import type { Simplify } from 'type-fest'
import type { ForceExtends, mergeArrayOfObjects } from '../prelude.js'
import type { TypeFunction } from '../type-function/__.js'
import type { Context, Extension } from './Extension.js'

/**
 * A chain. Type level function with extensions.
 * When called, it returns itself with the given extensions.
 */
export interface ChainDefinition_<$Extensions extends [...Extension[]] = [...Extension[]]> extends TypeFunction.Fn {
  extensions: $Extensions
  return: ChainDefinition_<ForceExtends<this['params'], Extension[]>>
}

type CallChainDefinition<_ extends ChainDefinition_, $Arguments extends [...Extension[]]> = TypeFunction.Call<
  _,
  $Arguments
>

/**
 * An empty chain definition. Useful for creation of new chains.
 */
export type Empty = ChainDefinition_<[]>

// export type ContextEmpty = {}

/**
 * Extend the chain definition. During materialization the extension can contribute properties.
 */
// dprint-ignore
export type Extend<$Chain_ extends ChainDefinition_, $Extension_ extends Extension> =
  CallChainDefinition<
    $Chain_,
    [...$Chain_['extensions'], $Extension_]
  >

/**
 * Extend the chain definition with many extensions. Refer to `Extend` for more details.
 */
// dprint-ignore
export type ExtendMany<$Chain_ extends ChainDefinition_, $Extensions extends [...Extension[]]> =
  $Extensions extends [infer $FirstExtension extends Extension, ...infer $RestExtensions extends Extension[]]
    ? ExtendMany<Extend<$Chain_, $FirstExtension>, $RestExtensions>
    : $Chain_

// dprint-ignore
export type MaterializeGeneric<$Chain_ extends ChainDefinition_> = 
  Simplify<
    mergeArrayOfObjects<
      MaterializeExtensionsGeneric<$Chain_, $Chain_['extensions']>
    >
  >

// dprint-ignore
type MaterializeExtensionsGeneric<$Chain_ extends ChainDefinition_, $Extensions extends [...Extension[]]> = {
  [$Index in keyof $Extensions]: Extension.Call<$Extensions[$Index], {
    chain: $Chain_,
    context: $Extensions[$Index]['context']
  }>
}

// dprint-ignore
export type MaterializeSpecific<$Chain_ extends ChainDefinition_> = 
  Simplify<
    mergeArrayOfObjects<
      MaterializeExtensionsInitial<$Chain_, $Chain_['extensions']>
    >
  >

// dprint-ignore
type MaterializeExtensionsInitial<$Chain_ extends ChainDefinition_, $Extensions extends [...Extension[]]> = {
  [$Index in keyof $Extensions]: Extension.Call<$Extensions[$Index], {
    chain: $Chain_,
    context: $Extensions[$Index]['contextEmpty']
  }>
}

// dprint-ignore
export type MaterializeWithNewContext<$Chain_ extends ChainDefinition_, $Context extends Context> =
  // Simplify<
    mergeArrayOfObjects<
      MaterializeExtensionsWithNewState<
        $Chain_,
        $Context,
        $Chain_['extensions']
      >
    >
// >

type MaterializeExtensionsWithNewState<
  $Chain_ extends ChainDefinition_,
  $Context extends Context,
  $Extensions extends [...Extension[]],
> = {
  [$Index in keyof $Extensions]: Extension.Call<
    $Extensions[$Index],
    { chain: $Chain_; context: $Context }
  >
}
