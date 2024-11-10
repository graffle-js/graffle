import type { SomeFunction } from '../prelude.js'

export interface Step<
  $Name extends string = string,
> {
  name: $Name
  slots?: Step.Slots
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
    $Run extends ImplementationFn<$Input>,
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
    input: Parameters<$Run>[0]['input']
    output: ReturnType<$Run>
    slots: undefined extends $Slots ? undefined : $Slots
  } => {
    return parameters as any
  }

  type ImplementationFn<$Input extends Input = Input> = (parameters: { input: $Input }) => any

  export type Input = object

  export type Slots = Record<string, SomeFunction>

  export type Name = string
}
