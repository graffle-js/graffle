import type * as $ from '#graffle/utilities-for-generated'
import type * as $Fields from './fields.js'

export * as ObjectChildA from './fields.js'

export interface ObjectChildA extends $.Schema.OutputObject {
  kind: 'Object'
  name: 'ObjectChildA'
  fields: {
    __typename: $Fields.__typename
    a: $Fields.a
    b: $Fields.b
    c1: $Fields.c1
    me: $Fields.me
  }
}
