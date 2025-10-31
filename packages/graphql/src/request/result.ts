import type { StandardScalarRuntimeTypes } from '#~/schema/ast/scalars.js'

export type SomeObjectData = {
  [fieldName: string]: any // SomeFieldData <-- If we put this here tsc has crashes with OOM.
}

export type SomeFieldData =
  | null
  | StandardScalarRuntimeTypes
  | StandardScalarRuntimeTypes[]
  | {
    [fieldName: string]: SomeFieldData
  }
