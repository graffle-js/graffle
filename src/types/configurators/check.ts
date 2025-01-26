import { Configurator } from '../configurator.js'

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

export const configurator = Configurator()
  .input<Input>()
  .normalized<{
    preflight: boolean
  }>()
  .default({
    preflight: true,
  })
  .inputResolver(({ current, input }) => {
    return {
      preflight: input.preflight ?? current.preflight,
    }
  })
  .return()

export type CheckConfigurator = typeof configurator
