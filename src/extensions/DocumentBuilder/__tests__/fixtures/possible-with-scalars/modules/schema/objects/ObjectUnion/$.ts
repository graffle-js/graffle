import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type * as $Fields from './fields.js'

export * as ObjectUnion from './fields.js'

export interface ObjectUnion extends $.Schema.OutputObject {
  kind: 'Object'
  name: 'ObjectUnion'
  fields: {
    __typename: $Fields.__typename
    fooBarUnion: $Fields.fooBarUnion
  }
}
