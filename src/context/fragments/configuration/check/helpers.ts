import type { Bool } from '@wollybeard/kit'
import type { Configurator } from './check.js'

/**
 * Check if preflight checks are disabled in the context.
 *
 * Returns `true` if preflight is explicitly set to false, `false` otherwise.
 * This is the inverse of {@link IsPreflightEnabled}.
 */
// dprint-ignore
export type IsPreflightDisabled<$Context> = Bool.not<IsPreflightEnabled<$Context>>

/**
 * Check if preflight checks are enabled in the context.
 *
 * Returns `false` if preflight is explicitly set to false, `true` otherwise.
 * This is the inverse of {@link IsPreflightDisabled}.
 */
// dprint-ignore
export type IsPreflightEnabled<$Context> =
  $Context extends { configuration: { check: { current: { preflight: infer $Preflight extends boolean } } } }
    ? $Preflight
    : Configurator['default']['preflight']
