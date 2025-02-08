import { Configurator as C } from '../../../lib/configurator/configurator.js'
import type { Transports } from '../transports/__.js'

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
  preflight?: boolean
}

export const configurator = C()
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
  // @ts-expect-error context constraint missing to avoid TS compare depth limit
  $Context['configuration']['check']['current']['preflight'] extends false
    ? $SuccessValue
    // @ts-expect-error context constraint missing to avoid TS compare depth limit
    : Preflight_<$Context['transports'], $SuccessValue>

// dprint-ignore
export type Preflight_<
  $Transports extends Transports.ContextFragment['transports'],
  $SuccessValue = true,
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
        : never // Should never happen
      : Errors.PreflightCheckNoTransportSelected

export namespace Errors {
  export type PreflightCheckNoTransportsRegistered = 'Error: You cannot send requests yet. You must setup a transport.'

  export type PreflightCheckNoTransportSelected =
    'Error: You cannot send requests yet. You must select a transport to use.'

  export type PreflightCheckTransportNotReady<$TransportName extends string> =
    `Error: You cannot send requests yet. The selected transport "${$TransportName}" is not sufficiently configured.`
}
