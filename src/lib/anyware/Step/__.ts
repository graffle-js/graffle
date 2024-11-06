export * as Step from './Step.js'

export interface Step<
  $Name extends string = string,
> {
  name: $Name
  slots: object | undefined
  input: any
  output: any
  run: (params: any) => any
}
