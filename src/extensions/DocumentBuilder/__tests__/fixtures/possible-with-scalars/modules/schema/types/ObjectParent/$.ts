import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type * as $Fields from './fields.js'

export * as ObjectParent from './fields.js'

export interface ObjectParent extends $.Schema.OutputObject {
  kind: 'Object'
  name: 'ObjectParent'
  fields: {
    __typename: $Fields.__typename
    a: $Fields.a
    b: $Fields.b
    me: $Fields.me
  }
}
