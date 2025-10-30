import { Configurator } from '@wollybeard/kit'
import type { Transports } from '../../transports/_.js'
import type * as Helpers from './helpers.js'

/**
 * @remarks This input extends base with properties that can be filled with exports from the generated client.
 */
export type Input = {
  /**
   * If enabled, this will cause request methods to be statically unavailable if
   * a transport is not correctly configured.
   *
   * @defaultValue `true`
   */
  preflight?: boolean | undefined
}

export const configurator = Configurator
  .create()
  .input<Input>()
  .default({
    preflight: true,
  })
  .return()

export type Configurator = typeof configurator

// dprint-ignore
export type Preflight<
  $Context,
  $SuccessValue = true,
> =
  Helpers.IsPreflightDisabled<$Context> extends true
    ? $SuccessValue
    : $Context extends { transports: infer $Transports extends Transports.ContextFragment['transports'] }
      ? Preflight_<$Transports, $SuccessValue>
      : $SuccessValue

// dprint-ignore
export type Preflight_<
  $Transports extends Transports.ContextFragment['transports'],
  $SuccessValue,
> =
  $Transports extends Transports.ContextFragmentTransportsEmpty['transports']
    ? Errors.PreflightCheckNoTransportsRegistered
    : $Transports['current'] extends string
      ? $Transports['current'] extends keyof $Transports['configurations']
        ? $Transports['current'] extends keyof $Transports['registry']
          ? $Transports['configurations'][$Transports['current']] extends $Transports['registry'][$Transports['current']]['configurator']['normalized']
            ? $SuccessValue
            : Errors.PreflightCheckTransportNotReady<$Transports['current']>
          : never // Should never happen
        : [never, $Transports['current'], $Transports['configurations']] // Should never happen
      : Errors.PreflightCheckNoTransportSelected

export namespace Errors {
  export type PreflightCheckNoTransportsRegistered = 'Error: You cannot send requests yet. You must setup a transport.'

  export type PreflightCheckNoTransportSelected =
    'Error: You cannot send requests yet. You must select a transport to use.'

  export type PreflightCheckTransportNotReady<$TransportName extends string> =
    `Error: You cannot send requests yet. The selected transport "${$TransportName}" is not sufficiently configured.`
}
