import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type * as $Fields from './fields.js'

export * as ObjectNestedWithArgs from './fields.js'

export interface ObjectNestedWithArgs extends $.Schema.OutputObject {
  kind: 'Object'
  name: 'ObjectNestedWithArgs'
  fields: {
    __typename: $Fields.__typename
    id: $Fields.id
    object: $Fields.object
  }
}
