import type { __typename } from './__typename.js'
import type { OutputFields } from './OutputField.js'

export interface OutputObject<
  $Name extends string = string,
  $Fields extends OutputFields = OutputFields,
> {
  kind: 'Object'
  name: $Name
  fields: {
    __typename: __typename<$Name>
  } & $Fields
}
