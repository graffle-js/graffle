import type { Object$2 } from './Object.js'

export type Interface<
  $Name extends string = string,
  // $Fields extends SomeFields = SomeFields,
  $Fields extends any = any,
  $Implementors extends [Object$2, ...Object$2[]] = [Object$2, ...Object$2[]],
> = {
  kind: 'Interface'
  name: $Name
  fields: $Fields
  implementors: $Implementors
}
