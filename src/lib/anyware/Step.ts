import type { SomeFunction } from '../prelude.js'

// todo: rename to Spec
export interface Step<
  $Name extends string = string,
> {
  name: $Name
  slots: Step.Slots
  input: any
  output: any
}

export namespace Step {
  export interface SpecInput {
    name: string
    slots?: Step.Slots
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
    $Run extends Runner<$Input>,
    $Slots extends undefined | Step.Slots,
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

  export type Runner<
    $Input extends Input = Input,
    // $Slots extends undefined | Step.Slots = undefined,
    $Slots extends undefined | object = undefined,
    $Previous extends undefined | object = undefined,
    $Output = any,
  > = (
    input: $Input,
    slots: $Slots,
    previous: $Previous,
  ) => $Output

  export type Input = object

  export type Slots = Record<string, SomeFunction>

  export type Name = string
}
