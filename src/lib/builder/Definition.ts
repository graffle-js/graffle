import type { Simplify } from 'type-fest'
import type { AssertExtends, Tuple } from '../prelude.js'
import type { Private } from '../private.js'
import type { TypeFunction } from '../type-function/__.js'
import type { Context, Extension } from './Extension.js'

/**
 * A builder definition.
 * Technically it is a type level function with additional properties.
 * When called, returns itself with the given extensions attached as a property.
 */
export interface Definition_<$Extensions extends [...Extension[]] = [...Extension[]]> extends TypeFunction.Fn {
  extensions: $Extensions
  return: Definition_<AssertExtends<this['params'], Extension[]>>
}

type InvokeDefinition<$Definition extends Definition_, $Arguments extends [...Extension[]]> = TypeFunction.Call<
  $Definition,
  $Arguments
>

/**
 * A definition literal, empty. Useful for creation of new builders.
 */
export type Empty = Definition_<[]>

/**
 * Create a new Builder definition.
 */
export type Create<$Extensions extends [...Extension[]]> = AddExtensions<Empty, $Extensions>

/**
 * Extend the definition with many extensions. See {@link AddExtension} for details.
 */
// dprint-ignore
export type AddExtensions<$Definition extends Definition_, $Extensions extends [...Extension[]]> =
  $Extensions extends [infer $FirstExtension extends Extension, ...infer $RestExtensions extends Extension[]]
    ? AddExtensions<AddExtension<$Definition, $FirstExtension>, $RestExtensions>
    : $Definition

/**
 * Extend the definition. During materialization the extension can contribute properties
 * that make up the final builder.
 */
// dprint-ignore
export type AddExtension<$definition_ extends Definition_, $Extension_ extends Extension> =
  InvokeDefinition<$definition_, [...$definition_['extensions'], $Extension_]>

//
// Materialize Utilities
//

/**
 * Materialize the definition using each extension's generic context type.
 *
 * Each extension will be invoked with its own generic context type.
 * Then results will be merged to produce the builder object.
 *
 * All extensions' generic context types will be merged to produce
 * the builder object context property.
 */
// dprint-ignore
export type MaterializeGeneric<$Definition extends Definition_> = 
  Simplify<
    Private.Add<
      {
        definition: $Definition,
        context: MaterializeGeneric_Context<$Definition>
      },
      MaterializeGeneric_Extensions<$Definition>
    >
  >

// dprint-ignore
type MaterializeGeneric_Extensions<$Definition extends Definition_> =
  Tuple.IntersectItems<
    MaterializeGeneric_Extensions_<
      $Definition,
      $Definition['extensions']
    >
  >
// dprint-ignore
type MaterializeGeneric_Extensions_<
  $Definition extends Definition_,
  $Extensions extends [...Extension[]]
> = {
  [$Index in keyof $Extensions]:
    Extension.Invoke<$Extensions[$Index], {
      definition: $Definition,
      context: $Extensions[$Index]['context'],
    }>
}

type MaterializeGeneric_Context<$Definition extends Definition_> = Tuple.IntersectItems<
  MaterializeGeneric_Context_<$Definition['extensions']>
>
type MaterializeGeneric_Context_<$Extensions extends [...Extension[]]> = {
  [$Index in keyof $Extensions]: $Extensions[$Index]['context']
}

//
//
// ---------------------------------------------------------------------------------------------
//
//

/**
 * Materialize the definition using each extension's empty context type.
 *
 * Each extension will be invoked with its own empty context.
 * Then results will be merged to produce the builder object.
 *
 * All extensions' empty context types will be merged to produce
 * the builder object context property.
 */
// dprint-ignore
export type MaterializeEmpty<$Definition extends Definition_> = 
  Simplify<
    Private.Add<
      {
        definition: $Definition,
        context: MaterializeEmpty_Context<$Definition>,
      },
      Tuple.IntersectItems<
        MaterializeEmpty_Extensions<$Definition, $Definition['extensions']>
      >
    >
  >

// dprint-ignore
type MaterializeEmpty_Extensions<
  $Definition extends Definition_,
  $Extensions extends [...Extension[]]
> = {
  [$Index in keyof $Extensions]: Extension.Invoke<$Extensions[$Index], {
    definition: $Definition,
    context: $Extensions[$Index]['contextEmpty']
  }>
}
// dprint-ignore
type MaterializeEmpty_Context<$Definition extends Definition_> =
  Tuple.IntersectItems<
    MaterializeEmpty_Context_<$Definition['extensions']>
  >
// dprint-ignore
type MaterializeEmpty_Context_<$Extensions extends [...Extension[]]> = {
  [$Index in keyof $Extensions]: $Extensions[$Index]['contextEmpty']
}

//
//
// ---------------------------------------------------------------------------------------------
//
//

/**
 * Materialize the definition with a new context.
 *
 * Each extension will be invoked with the given context.
 * Then results will be merged to produce the builder object.
 *
 * The given context will be used as-is for the builder object context property.
 */
// dprint-ignore
export type MaterializeWith<
  $Definition extends Definition_,
  $Context extends Context
> =

Private.Add<
    {
      definition: $Definition,
      context: $Context
    },
    Tuple.IntersectItems<
      MaterializeWith_Extensions<
        $Definition,
        $Definition['extensions'],
        $Context
      >
    >
  >

// dprint-ignore
type MaterializeWith_Extensions<
  $Definition extends Definition_,
  $Extensions extends [...Extension[]],
  $Context extends Context,
> = {
  [$Index in keyof $Extensions]:
    Extension.Invoke<
      $Extensions[$Index],
      {
        definition: $Definition
        context: $Context
      }
    >
}
