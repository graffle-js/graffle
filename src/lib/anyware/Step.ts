import type { SomeFunction } from '../prelude.js'

export interface Step<
  $Name extends string = string,
> {
  name: $Name
  slots: Step.Slots
  input: any
  output: any
  run: (params: any) => any
}

export namespace Step {
  export type Slots = Record<string, SomeFunction>

  export type Name = string

  export type GetAwaitedResult<$Step extends Step> = Awaited<GetResult<$Step>>

  export type GetResult<$Step extends Step> = ReturnType<$Step['run']>
}
