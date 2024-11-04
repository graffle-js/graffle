import type { Simplify } from 'type-fest'
import type { AssertExtends, mergeArrayOfObjects } from '../prelude.js'
import type { Private } from '../private.js'
import type { TypeFunction } from '../type-function/__.js'
import type { Context, Extension } from './Extension.js'

/**
 * A chain. Type level function with extensions.
 * When called, it returns itself with the given extensions.
 */
export interface Definition_<$Extensions extends [...Extension[]] = [...Extension[]]> extends TypeFunction.Fn {
  extensions: $Extensions
  return: Definition_<AssertExtends<this['params'], Extension[]>>
}

type InvokeDefinition<_ extends Definition_, $Arguments extends [...Extension[]]> = TypeFunction.Call<
  _,
  $Arguments
>

/**
 * An empty chain definition. Useful for creation of new chains.
 */
export type Empty = Definition_<[]>

/**
 * Create a new Builder definition.
 */
export type Create<$Extensions extends [...Extension[]]> = AddExtensions<Empty, $Extensions>

/**
 * Extend the definition with many extensions. Refer to `Extend` for more details.
 */
// dprint-ignore
export type AddExtensions<$Chain_ extends Definition_, $Extensions extends [...Extension[]]> =
  $Extensions extends [infer $FirstExtension extends Extension, ...infer $RestExtensions extends Extension[]]
    ? AddExtensions<AddExtension<$Chain_, $FirstExtension>, $RestExtensions>
    : $Chain_

/**
 * Extend the definition. During materialization the extension can contribute properties
 * that make up the final builder.
 */
// dprint-ignore
export type AddExtension<$Chain_ extends Definition_, $Extension_ extends Extension> =
  InvokeDefinition<$Chain_, [...$Chain_['extensions'], $Extension_]>

//
// Materialize Utilities
//

// dprint-ignore
export type MaterializeGeneric<$Chain_ extends Definition_> = 
  Simplify<
    Private.Add<
      mergeArrayOfObjects<
        MaterializeExtensionsGeneric<$Chain_, $Chain_['extensions']>
      >,
      {
        chain: $Chain_,
        context: mergeArrayOfObjects<
          MaterializeExtensionsGenericContext<$Chain_['extensions']>
        >
      }
    >
  >

// dprint-ignore
type MaterializeExtensionsGeneric<$Chain_ extends Definition_, $Extensions extends [...Extension[]]> = {
  [$Index in keyof $Extensions]: Extension.Invoke<$Extensions[$Index], {
    chain: $Chain_,
    context: $Extensions[$Index]['context']
  }>
}
// dprint-ignore
type MaterializeExtensionsGenericContext<$Extensions extends [...Extension[]]> = {
  [$Index in keyof $Extensions]: $Extensions[$Index]['context']
}

// dprint-ignore
export type MaterializeSpecific<$Chain_ extends Definition_> = 
  Simplify<
    Private.Add<
      mergeArrayOfObjects<
        MaterializeExtensionsInitial<$Chain_, $Chain_['extensions']>
      >,
      {
        chain: $Chain_,
        context: mergeArrayOfObjects<
          MaterializeExtensionsInitialContext<$Chain_['extensions']>
        >
      }
    >
  >

// dprint-ignore
type MaterializeExtensionsInitial<$Chain_ extends Definition_, $Extensions extends [...Extension[]]> = {
  [$Index in keyof $Extensions]: Extension.Invoke<$Extensions[$Index], {
    chain: $Chain_,
    context: $Extensions[$Index]['contextEmpty']
  }>
}
// dprint-ignore
type MaterializeExtensionsInitialContext<$Extensions extends [...Extension[]]> = {
  [$Index in keyof $Extensions]: $Extensions[$Index]['contextEmpty']
}

// dprint-ignore
export type MaterializeWithNewContext<$Chain_ extends Definition_, $Context extends Context> =
  // Simplify<
    Private.Add<
      mergeArrayOfObjects<
        MaterializeExtensionsWithNewState<
          $Chain_,
          $Context,
          $Chain_['extensions']
        >
      >,
      {
        chain: $Chain_,
        context: $Context
      }
    >
// >

type MaterializeExtensionsWithNewState<
  $Chain_ extends Definition_,
  $Context extends Context,
  $Extensions extends [...Extension[]],
> = {
  [$Index in keyof $Extensions]: Extension.Invoke<
    $Extensions[$Index],
    { chain: $Chain_; context: $Context }
  >
}
