export * as Schema from './$$.js'

import type { Grafaid } from '../$$.js'
import type { RegisteredSchemaNames, TypeExtensions } from './global.js'
import type { Enum } from './nodes/Enum.js'
import type { Interface } from './nodes/Interface.js'
import type { OutputObject } from './nodes/OutputObject.js'
import type { Scalar } from './nodes/Scalar/Scalar.js'
import type { ScalarCodecless } from './nodes/ScalarCodecless.js'
import type { Union } from './nodes/Union.js'
// import type { Mutation, Query, RootType, Subscription } from './StandardTypes/object.js'

/**
 * A generic schema type. Any particular schema will be a subtype of this, with
 * additional specificity such as on objects where here `Record` is used.
 */
export interface Schema<
  $Extensions extends TypeExtensions = TypeExtensions,
  $Scalars extends Scalar.Registry = Scalar.Registry,
> {
  name: RegisteredSchemaNames
  operationsAvailable: Grafaid.Document.OperationType[]
  RootUnion: OutputObject
  Root: {
    query: null | OutputObject
    mutation: null | OutputObject
    subscription: null | OutputObject
  }
  allTypes: Record<
    string,
    | Enum
    | OutputObject
    | Union
    | Interface
  >
  objects: Record<string, OutputObject>
  unions: Record<string, Union>
  interfaces: Record<string, Interface>
  scalars: Record<string, Scalar | ScalarCodecless>
  scalarNamesUnion: string
  /**
   * A registry of scalar definitions. Useful for custom scalars.
   */
  scalarRegistry: $Scalars
  extensions: $Extensions
}
