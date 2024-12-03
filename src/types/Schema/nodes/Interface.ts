import type { OutputFields } from './OutputField.js'
import type { OutputObject } from './OutputObject.js'

export type Interface<
  $Name extends string = string,
  $Fields extends OutputFields = OutputFields,
> = {
  kind: 'Interface'
  name: $Name
  fields: $Fields
  implementors: (OutputObject | Interface)[]
  implementorsUnion: OutputObject | Interface
  implementorsIndex: Record<string, OutputObject | Interface>
}
