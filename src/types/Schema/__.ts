export * as Schema from './_.js'

import type { GlobalRegistry } from '../GlobalRegistry/GlobalRegistry.js'
import type { Enum } from './nodes/Enum.js'
import type { Interface } from './nodes/Interface.js'
import type { OutputObject } from './nodes/OutputObject.js'
import type { Scalar } from './nodes/Scalar/Scalar.js'
import type { Union } from './nodes/Union.js'
import type { Mutation, Query, RootType, Subscription } from './StandardTypes/object.js'

/**
 * A generic schema type. Any particular schema will be a subtype of this, with
 * additional specificity such as on objects where here `Record` is used.
 */
export interface Schema<
  $Extensions extends GlobalRegistry.TypeExtensions = GlobalRegistry.TypeExtensions,
  $Scalars extends Scalar.Registry = Scalar.Registry,
> {
  name: GlobalRegistry.ClientNames
  RootTypesPresent: ('Query' | 'Mutation' | 'Subscription')[]
  RootUnion: RootType
  Root: {
    Query: null | Query
    Mutation: null | Mutation
    Subscription: null | Subscription
  }
  allTypes: Record<
    string,
    | Enum
    | Query
    | Mutation
    | OutputObject
    | Union
    | Interface
  >
  objects: Record<string, OutputObject>
  unions: Record<string, Union>
  interfaces: Record<string, Interface>
  /**
   * A map of scalar definitions. Useful for custom scalars.
   */
  scalars: $Scalars
  extensions: $Extensions
}
