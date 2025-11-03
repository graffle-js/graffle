export * as Type from './__.js'

import type { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import type { GlobalRegistry } from '../../../../types/GlobalRegistry/GlobalRegistry.js'
import type { Enum } from './nodes/Enum.js'
import type { Interface } from './nodes/Interface.js'
import type { OutputObject } from './nodes/OutputObject.js'
import type { Scalar } from './nodes/Scalar/_.js'
import type { ScalarCodecless } from './nodes/ScalarCodecless.js'
import type { Union } from './nodes/Union.js'
import type * as Scalars from './scalars/__.js'

/**
 * A generic schema type. Any particular schema will be a subtype of this, with
 * additional specificity such as on objects where here `Record` is used.
 */
export interface Type<
  $Extensions extends GlobalRegistry.TypeExtensions = GlobalRegistry.TypeExtensions,
  $Scalars extends Scalars.Registry = Scalars.Registry,
> {
  name: GlobalRegistry.ClientNames
  operationsAvailable: GraphqlKit.Schema.Runtime.OperationType.OperationType[]
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
