import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type { Object1ImplementingInterface, Object2ImplementingInterface } from '../../$$.js'
import type * as $Fields from './fields.js'

export * as Interface from './fields.js'

export interface Interface extends $.Schema.Interface {
  kind: 'Interface'
  name: 'Interface'
  fields: {
    __typename: $Fields.__typename
    id: $Fields.id
  }
  implementors: [Object1ImplementingInterface, Object2ImplementingInterface]
  implementorsUnion:
    | Object1ImplementingInterface
    | Object2ImplementingInterface
  implementorsIndex: {
    Object1ImplementingInterface: Object1ImplementingInterface
    Object2ImplementingInterface: Object2ImplementingInterface
  }
}
