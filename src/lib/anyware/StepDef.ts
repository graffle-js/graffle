import type { SomeFunction } from '../prelude.js'
import type { StepRunner } from './StepRunner.js'

export interface StepDef<
  $Name extends string = string,
> {
  name: $Name
  slots: StepDef.Slots
  input: any
  output: any
  /**
   * Tracking the run signature type is useful for deriving the executable step.
   *
   * For example if Vitest mocks were used for the step run functions, their type
   * would be carried through to the executable step. This is useful for testing.
   *
   * If we only relied on the spec types, which don't track the given run type itself,
   * they Vitest mock type would not be carried through.
   *
   * The executable step is not designed for public use. Testing is an exception.
   *
   * This run signature is NOT used for deriving the specification step.
   */
  run?: StepRunner<any, any, any>
}

export namespace StepDef {
  export interface SpecInput {
    name: string
    slots?: StepDef.Slots
    input?: object
    output?: unknown
  }

  /**
   * todo
   */
  export const createWithInput = <
    $Input extends Input = Input,
  >() =>
  <
    const $Name extends string,
    $Run extends StepRunner<$Input>,
    $Slots extends undefined | StepDef.Slots,
  >(
    parameters: {
      name: $Name
      slots?: $Slots
      run: $Run
    },
  ): {
    name: $Name
    run: $Run
    input: $Input
    output: ReturnType<$Run>
    slots: undefined extends $Slots ? undefined : $Slots
  } => {
    return parameters as any
  }

  export type Input = object

  export type Slots = Record<string, SomeFunction>

  export type Name = string
}
