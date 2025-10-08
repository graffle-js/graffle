import type { SomeFunctionMaybeAsync } from '../prelude.js'
import type { StepRunner } from './StepRunner.js'

export interface StepDefinition<
  $Name extends string = string,
  $Slots extends StepDefinition.Slots = StepDefinition.Slots,
  $Input = any,
  $Output = any,
> {
  readonly name: $Name
  readonly slots: $Slots
  readonly input: $Input
  readonly output: $Output
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
  readonly run?: StepRunner<any, any, any>
}

export namespace StepDefinition {
  export type SubsetTypeProperties = Pick<StepDefinition, 'input' | 'output'>
  export interface SpecInput {
    name: string
    slots?: StepDefinition.Slots
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
    $Slots extends undefined | StepDefinition.Slots,
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

  export type Slots = Record<string, SomeFunctionMaybeAsync>

  export type Name = string
}
