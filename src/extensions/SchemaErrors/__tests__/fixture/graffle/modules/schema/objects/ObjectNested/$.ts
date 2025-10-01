import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type * as $Fields from './fields.js'

export * as ObjectNested from './fields.js'

export interface ObjectNested extends $.Schema.OutputObject {
  kind: 'Object'
  name: 'ObjectNested'
  fields: {
    __typename: $Fields.__typename
    id: $Fields.id
    object: $Fields.object
  }
}
