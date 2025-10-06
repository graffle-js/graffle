import type * as $ from '#graffle/utilities-for-generated'
import type * as $Fields from './fields.js'

export * as ObjectChildB from './fields.js'

export interface ObjectChildB extends $.Schema.OutputObject {
  kind: 'Object'
  name: 'ObjectChildB'
  fields: {
    __typename: $Fields.__typename
    a: $Fields.a
    b: $Fields.b
    c2: $Fields.c2
    me: $Fields.me
  }
}
