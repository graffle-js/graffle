import type { TypeFunction } from './__.js'

/**
 * A composed set of type functions.
 */
type FnPipeline = [...TypeFunction[]]

/**
 * Apply a Higher Kinded Type (HKT).
 */
// dprint-ignore
export type Call<$Fn extends TypeFunction, $Arguments> =
	($Fn & { params: $Arguments })['return']

//
// Utilities
//

export type UnFn<$Fn extends TypeFunction> = Omit<$Fn, keyof TypeFunction>

/**
 * Execute a pipeline of type functions.
 */
// dprint-ignore
export type CallPipeline<$Pipeline extends FnPipeline, $Value> =
  $Pipeline extends [infer $Fn extends TypeFunction, ...infer $Rest extends FnPipeline]
    ? CallPipeline<$Rest, Call<$Fn, $Value>>
    : $Value
