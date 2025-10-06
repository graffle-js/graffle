import type * as $ from '#graffle/utilities-for-generated'
import type * as $Fields from './fields.js'

export * as ObjectGrandparent from './fields.js'

export interface ObjectGrandparent extends $.Schema.OutputObject {
  kind: 'Object'
  name: 'ObjectGrandparent'
  fields: {
    __typename: $Fields.__typename
    a: $Fields.a
    me: $Fields.me
  }
}
