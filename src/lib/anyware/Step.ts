import type { SomeFunction } from '../prelude.js'

export interface Step<
  $Name extends string = string,
> {
  name: $Name
  slots?: Step.Slots
  input: any
  output: any
  run: (params: any) => any
}

export namespace Step {
  export type Definition = {
    name: string
    slots?: Step.Slots
    input?: Input
    output?: any
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
    // todo
    parameters
    return undefined as any
  }

  type ImplementationFn<$Input extends Input = Input> = (parameters: { input: $Input }) => any

  export type Input = object

  export type Slots = Record<string, SomeFunction>

  export type Name = string

  export type GetAwaitedResult<$Step extends Step> = Awaited<GetResult<$Step>>

  export type GetResult<$Step extends Step> = ReturnType<$Step['run']>
}
