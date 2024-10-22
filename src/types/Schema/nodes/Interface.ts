import type { OutputFields } from './OutputField.js'
import type { OutputObject } from './OutputObject.js'

export type Interface<
  $Name extends string = string,
  $Fields extends OutputFields = OutputFields,
  $Implementors extends [OutputObject, ...OutputObject[]] = [OutputObject, ...OutputObject[]],
> = {
  kind: 'Interface'
  name: $Name
  fields: $Fields
  implementors: $Implementors
  implementorsUnion: $Implementors[number]
  implementorsIndex: Record<$Implementors[number]['name'], $Implementors[number]>
}
